from fastapi import FastAPI
from pydantic import BaseModel
from agents.celebrity import Celebrity


app = FastAPI()

celebrity = Celebrity()


class CelebrityChatBody(BaseModel):
    message_from_manager: str


@app.post("/celebrity/chat")
def celebrity_chat(body: CelebrityChatBody):
    return celebrity.chat_with_manager(body.message_from_manager)

@app.get("/celebrity/post")
def celebrity_post(is_gen_image: bool = False):
    return celebrity.post(is_gen_image)


@app.get("/test")
def test():
    return "Success"
    