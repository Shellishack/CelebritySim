from fastapi import FastAPI
from pydantic import BaseModel
from agents.celebrity import Celebrity
from agents.analyst import analyze_celebrity_behaviour
from gpt4v import create_images


app = FastAPI()

celebrity = Celebrity()


class CelebrityChatBody(BaseModel):
    message_from_manager: str


@app.post("/celebrity/chat")
def celebrity_chat(body: CelebrityChatBody):
    return celebrity.chat_with_manager(body.message_from_manager)


# class CelebrityPostBody(BaseModel):
#     celebrity_post: str
#     subscriber_count: int
#     hater_ratio: float
#     fan_ratio: float
#     neutral_ratio: float


# @app.post("/audience-analyst/analyze")
# def analyze_celebrity(body: CelebrityPostBody):
#     return analyze_celebrity_behaviour(
#         body.celebrity_post,
#         body.subscriber_count,
#         body.hater_ratio,
#         body.fan_ratio,
#         body.neutral_ratio
#     )

# class TestBody(BaseModel):
#     prompt: str

# @app.post("/test")
# def test(body: TestBody):
#     images_url = create_images(body.prompt)
#     return images_url

@app.get("/celebrity/post")
def celebrity_post():
    pass


@app.get("/test")
def test():
    return "Success"
    