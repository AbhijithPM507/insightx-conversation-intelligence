from typing import Dict, List


def run_compliance_checks(transcript: str, domain: str) -> Dict:
    violations: List[str] = []
    flags: List[str] = []

    transcript_lower = transcript.lower()

    if domain == "banking":
        if "otp" not in transcript_lower:
            violations.append("Missing OTP verification")
            flags.append("security_protocol_breach")

        if "identity" not in transcript_lower:
            violations.append("Missing identity verification")
            flags.append("kyc_non_compliance")

    risk_level = "Low"

    if len(violations) == 1:
        risk_level = "Medium"
    elif len(violations) > 1:
        risk_level = "High"

    return {
        "mandatory_protocols_followed": len(violations) == 0,
        "violations_detected": violations,
        "risk_level": risk_level,
        "flags": flags
    }