import json
from agents.celebrity import Celebrity

if __name__ == "__main__":
    celebrity = Celebrity()
    res = celebrity.chat_with_manager(
        "Hi, you did such a bad job this morning. I don't like the way you talk in any way. You should quit this job so I stop losing money on you"
    )
    print(json.dumps(res, indent=4))
    res = celebrity.chat_with_manager("You need to send a post now and make me money to make me feel better.")
    print(json.dumps(res, indent=4))

    res = celebrity.post()
    print(json.dumps(res, indent=4))    