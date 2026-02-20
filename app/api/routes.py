from fastapi import APIRouter, HTTPException
from app.models.request_models import AnalyzeRequest
from app.services.analysis_service import run_full_analysis

router = APIRouter()


@router.post("/analyze")
def analyze(request: AnalyzeRequest):

    # 🔹 Get AI output from Dev 2 layer
    # Replace this with actual Dev 2 integration
    ai_output = request.client_config.get("dev2_output")

    if not ai_output:
        raise HTTPException(
            status_code=400,
            detail="Dev 2 AI output must be provided inside client_config.dev2_output"
        )

    # 🔹 Domain resolution
    client_domain = request.client_config.get("domain") if request.client_config else None
    detected_domain = ai_output.get("detected_domain")

    if client_domain:
        final_domain = client_domain
    elif detected_domain:
        final_domain = detected_domain
    else:
        final_domain = "general"

    try:
        return run_full_analysis(ai_output, final_domain)

    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

    except Exception:
        raise HTTPException(status_code=500, detail="Internal processing error")