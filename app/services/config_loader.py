import json
import os

BASE_DIR = os.path.dirname(os.path.dirname(__file__))
CONFIG_DIR = os.path.join(BASE_DIR, "config")

def load_config(domain: str):
    try:
        path = os.path.join(CONFIG_DIR, f"{domain}.json")
        with open(path, "r") as f:
            return json.load(f)
    except FileNotFoundError:
        raise ValueError(f"Unsupported domain: {domain}")