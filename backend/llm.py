from langchain.chat_models.openai import ChatOpenAI
import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

gpt_4 = ChatOpenAI(
    model="gpt-4",
    openai_api_key=os.environ.get("OPENAI_API_KEY"),
    openai_organization=os.environ.get("OPENAI_ORG_KEY"),
)
