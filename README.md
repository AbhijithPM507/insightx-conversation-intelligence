
# InsightX – Context-Aware Multimodal Conversation Intelligence API

## 🚀 Overview

InsightX is an enterprise-ready backend API designed to analyze multimodal customer conversations (voice or text) and generate structured intelligence including:

- Conversation summaries
- Sentiment analysis
- Intent detection
- Entity extraction
- Domain detection
- Compliance risk scoring
- Escalation probability
- Churn risk estimation
- Agent performance scoring

The system is configurable per business domain and built for integration into banking, telecom, insurance, and customer support environments.

---

## 🏗 Architecture

```text
Client Application
        │
        ▼
FastAPI Backend
        │
        ▼
Multimodal AI Layer (Gemini + ElevenLabs)
        │
        ▼
Domain Rule Engine
        │
        ▼
Risk & Impact Engine
        │
        ▼
Structured Enterprise JSON Output
```

### Key Modules

| File | Responsibility |
|------|---------------|
| routes.py | API layer |
| ai_service.py | Multimodal AI processing |
| rule_engine.py | Domain-based logic |
| risk_engine.py | Quantitative scoring |
| analysis_service.py | Orchestration |
| response_models.py | Structured output schema |

---

## 🤖 AI Usage Approach

### Audio Processing
- ElevenLabs Scribe v2
- Speaker diarization enabled

### Language Model
- Gemini 2.5 Flash
- Structured JSON extraction
- Domain classification
- Behavioral analysis

### AI Output Includes

- detected_domain
- summary
- primary_intent
- risk_score
- agent_analysis
- customer_analysis
- resolution_status
- key_topics
- language

AI output is post-processed by deterministic rule logic to ensure explainability.

---

### Request Format

The API expects `multipart/form-data`.

Fields:
- transcript (optional)
- audio_file (optional)
- client_config (JSON string, optional)

Either transcript or audio_file must be provided.

InsightX – Setup Instructions
==============================

1. Clone the Repository
-----------------------

git clone https://github.com/your-username/insightx-conversation-intelligence.git
cd insightx-conversation-intelligence


2. Create Virtual Environment
-----------------------------

python -m venv venv

Activate the virtual environment:

Mac/Linux:
source venv/bin/activate

Windows:
venv\Scripts\activate


3. Install Dependencies
-----------------------

pip install -r requirements.txt


4. Configure Environment Variables
-----------------------------------

Create a file named ".env" in the project root directory and add:

GEMINI_API_KEY=your_gemini_api_key
ELEVENLABS_API_KEY=your_elevenlabs_api_key


5. Run the FastAPI Server
-------------------------

uvicorn app.main:app --reload


6. Access API Documentation (Recommended Method)
------------------------------------------------

Open your browser and go to:

http://127.0.0.1:8000/docs

This opens Swagger UI where you can:

- Upload an audio file
- Provide transcript text
- Provide optional client_config JSON
- Execute the request directly from the browser


7. API Request Format
---------------------

The API expects multipart/form-data.

Required:
- Either transcript (text) OR audio_file must be provided.

Optional:
- client_config (JSON string for custom governance rules)


8. Testing Using Postman (Alternative Method)
---------------------------------------------

In Postman:

- Set method to POST
- URL: http://127.0.0.1:8000/analyze
- Select Body → form-data

Add fields:

Key: transcript      Type: Text
Key: audio_file      Type: File
Key: client_config   Type: Text (JSON string)

Click Send.


9. Testing Using Python (Alternative Method)
--------------------------------------------

Example using transcript:

------------------------------------------------
import requests

url = "http://127.0.0.1:8000/analyze"

files = {
    "transcript": (None, "Customer is unhappy about unauthorized transaction and wants refund.")
}

response = requests.post(url, files=files)

print(response.json())
------------------------------------------------

Example using audio:

------------------------------------------------
import requests

url = "http://127.0.0.1:8000/analyze"

files = {
    "audio_file": open("sample.wav", "rb")
}

response = requests.post(url, files=files)

print(response.json())
------------------------------------------------


------------------------------------------------------------
InsightX is now ready for testing and integration.
------------------------------------------------------------