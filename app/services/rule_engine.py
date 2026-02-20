from app.services.risk_scorer import classify_risk


def detect_compliance_violations(summary: str, config: dict):
    violations = []
    rules = config.get("compliance_rules", {})

    forbidden_phrases = rules.get("forbidden_promises", [])

    for phrase in forbidden_phrases:
        if phrase.lower() in summary.lower():
            violations.append({
                "type": "forbidden_promise",
                "phrase": phrase,
                "severity": "HIGH"
            })

    return violations


def classify_outcome(ai_output: dict, risk_level: str, config: dict):
    summary = ai_output.get("summary", "").lower()
    resolution_status = ai_output.get("resolution_status", "").upper()

    rules = config.get("outcome_rules", {})

    # Use AI resolution first if provided
    if resolution_status in ["RESOLVED", "ESCALATED", "PENDING"]:
        return {
            "type": resolution_status,
            "reason": "Derived from AI behavioral analysis"
        }

    if any(word in summary for word in rules.get("escalated_keywords", [])) \
            or risk_level == "HIGH":
        return {
            "type": "ESCALATED",
            "reason": "Escalation keyword or high risk detected"
        }

    if any(word in summary for word in rules.get("churn_keywords", [])):
        return {
            "type": "CUSTOMER_CHURN_RISK",
            "reason": "Churn-related keyword detected"
        }

    if any(word in summary for word in rules.get("resolved_keywords", [])):
        return {
            "type": "RESOLVED",
            "reason": "Resolution keyword detected"
        }

    return {
        "type": "COMPLETED",
        "reason": "No escalation or churn detected"
    }


def run_rule_engine(ai_output: dict, config: dict):

    summary = ai_output.get("summary", "")
    primary_intent = ai_output.get("primary_intent", "").lower()

    risk_score = 0
    risk_contributors = {}

    # 🔹 AI Behavioral Risk (0–1 scale → 0–3 scale)
    ai_risk = ai_output.get("risk_score", 0)
    ai_risk_component = round(ai_risk * 3)

    risk_score += ai_risk_component
    risk_contributors["ai_behavioral_risk"] = ai_risk_component

    # 🔹 Legal keyword risk
    keyword_risk = 0
    legal_words = config.get("risk_triggers", {}).get("legal_words", [])

    for word in legal_words:
        if word.lower() in summary.lower():
            keyword_risk += 2

    risk_score += keyword_risk
    risk_contributors["keyword_risk"] = keyword_risk

    # 🔹 Intent-based escalation risk
    intent_risk = 0
    escalation_keywords = config.get("risk_triggers", {}).get(
        "escalation_keywords", []
    )

    if any(keyword in primary_intent for keyword in escalation_keywords):
        intent_risk += 2

    risk_score += intent_risk
    risk_contributors["intent_risk"] = intent_risk

    # 🔹 Final risk classification
    risk_level = classify_risk(risk_score)

    # 🔹 Compliance
    compliance_violations = detect_compliance_violations(summary, config)

    # 🔹 Outcome
    outcome = classify_outcome(ai_output, risk_level, config)

    return {
        "risk_score": risk_score,
        "risk_level": risk_level,
        "escalation_required": risk_level == "HIGH",
        "risk_contributors": risk_contributors,
        "compliance": {
            "violations": compliance_violations,
            "violation_count": len(compliance_violations)
        },
        "outcome": outcome
    }