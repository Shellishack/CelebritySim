from fastapi import FastAPI
from pydantic import BaseModel
from agents.celebrity import chat_with_manager
from agents.analyst import analyze_celebrity_behaviour

app = FastAPI()


class CelebrityChatBody(BaseModel):
    message_from_manager: str


@app.post("/celebrity/chat")
def chat_celebrity(body: CelebrityChatBody):
    return chat_with_manager(body.message_from_manager)


class CelebrityPostBody(BaseModel):
    celebrity_post: str
    subscriber_count: int
    hater_ratio: float
    fan_ratio: float
    neutral_ratio: float


@app.post("/audience-analyst/analyze")
def analyze_celebrity(body: CelebrityPostBody):
    return analyze_celebrity_behaviour(
        body.celebrity_post,
        body.subscriber_count,
        body.hater_ratio,
        body.fan_ratio,
        body.neutral_ratio
    )
