from services.risk_scorer import classify_risk

def run_rule_engine(ai_output: dict, config: dict):

    sentiment = ai_output.get("sentiment", "")
    intents = ai_output.get("intents", [])
    summary = ai_output.get("summary", "")

    risk_score = 0

    # Sentiment trigger
    if sentiment == config["risk_triggers"]["negative_sentiment_threshold"]:
        risk_score += 3

    # Legal word trigger
    for word in config["risk_triggers"]["legal_words"]:
        if word.lower() in summary.lower():
            risk_score += 2

    # Escalation intent trigger
    for intent in intents:
        if any(keyword in intent.lower() 
               for keyword in config["risk_triggers"]["escalation_keywords"]):
            risk_score += 2

    risk_level = classify_risk(risk_score)

    outcome = classify_outcome(ai_output, risk_level,config)

    return {
        "risk_score": risk_score,
        "risk_level": risk_level,
        "escalation_required": risk_level == "HIGH",
        "outcome": outcome
    }
def classify_outcome(ai_output: dict, risk_level: str, config: dict):

    summary = ai_output.get("summary", "").lower()
    intents = [i.lower() for i in ai_output.get("intents", [])]

    rules = config.get("outcome_rules", {})

    # 1️⃣ Escalated
    if any(word in summary for word in rules.get("escalated_keywords", [])) \
       or risk_level == "HIGH":
        return {
            "type": "ESCALATED",
            "reason": "Escalation keyword detected or high risk"
        }

    # 2️⃣ Churn Risk
    if any(word in summary for word in rules.get("churn_keywords", [])):
        return {
            "type": "CUSTOMER_CHURN_RISK",
            "reason": "Account cancellation intent detected"
        }

    # 3️⃣ Resolved
    if any(word in summary for word in rules.get("resolved_keywords", [])):
        return {
            "type": "RESOLVED",
            "reason": "Resolution keywords detected"
        }

    # 4️⃣ Follow-up
    if any(word in summary for word in rules.get("followup_keywords", [])):
        return {
            "type": "FOLLOW_UP_REQUIRED",
            "reason": "Follow-up action mentioned"
        }

    return {
        "type": "COMPLETED",
        "reason": "No risk or escalation detected"
    }