# OpenAI角色


OpenAI的聊天模型, 消息是带有角色信息的，目前常见的角色有 "user"、"assistant" 和 "system" 等。


## system角色
用于设定对话的初始指令或提供背景信息, 型会依据这些系统消息来调整自身的回复风格、语气和内容方向。

1. 设定回复风格：若希望模型以简洁明了的方式回答问题，可以这样设置系统消息：

    ```python
    from openai import OpenAI

    client = OpenAI()
    messages = [
        {"role": "system", "content": "请用简洁的语言回答问题。"},
        {"role": "user", "content": "介绍一下苹果公司。"}
    ]
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages
    )
    print(completion.choices[0].message.content)
    ```

2. 限定知识范围：若只想让模型依据特定领域的知识进行回复，可设置如下系统消息：

    ```python
    messages = [
        {"role": "system", "content": "你只提供关于天文学的信息。"},
        {"role": "user", "content": "给我讲讲宇宙的起源。"}
    ]
    ```



## user角色

代表与模型进行交互的用户，用户通过此角色向模型提出问题、给出指令或描述需求


```python
messages = [
    {"role": "user", "content": "写一个 Python 函数，用于计算两个数的乘积。"}
]
```

## assistant角色

模型会根据接收到的用户消息以及系统消息的指导，生成相应的回答并以 "assistant" 角色的消息返回。


多轮对话：在这个例子中，模型先对用户关于 5 的阶乘的问题进行回复，之后用户又提出关于 6 的阶乘的新问题，模型会结合之前的对话记录来生成新的回复。



```python
messages = [
    {"role": "user", "content": "5 的阶乘是多少？"},
    {"role": "assistant", "content": "5 的阶乘是 120。"},
    {"role": "user", "content": "那 6 的阶乘呢？"}
]
```



























