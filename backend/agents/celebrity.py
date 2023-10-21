from langchain.chains import LLMChain
from langchain.prompts import ChatPromptTemplate, HumanMessagePromptTemplate

from llm import gpt_4

template_chat_with_manager = """\
You are an internet manager, and you are talking to your talent manager. \

Talent manager says: `{manager_from_manager}`

What will you say?
"""

def chat_with_manager(message_from_manager: str):
    chain = LLMChain(
        llm=gpt_4,
        prompt=ChatPromptTemplate.from_messages(
            [
                HumanMessagePromptTemplate.from_template(
                    template_chat_with_manager
                )   
            ]
        )
    )

    result = chain.run(
        manager_from_manager=message_from_manager
    )

    return result
