# Chat

`POST /api/chat`

1. 普通参数
    1. model:(必需)模型名称
    2. messages: 
        1. role: 角色名, 可选`system`, `user`, `assistant`, or `tool`
        2. content: 消息的内容
        3. images (optional): base64图片列表
        4. tool_calls (optional): 
2. 高级参数
    1. format: LLM返回的格式, 并非接口的返回形式. 目前仅支持json格式
    2. options: 其他模型参数，如 temperature、seed 等, 可在[ModelFile](https://github.com/ollama/ollama/blob/main/docs/modelfile.md#valid-parameters-and-values)中找到
    3. stream: 如果设置为 false ，响应将作为单个响应对象返回，而不是一系列对象流
    1. keep_alive: 控制模型在请求后保留在内存中的时间（默认：5m）


## 正常返回

```python
import requests

url = "http://localhost:11434/api/chat"

data = {
    "model": "deepseek-r1:1.5b",
    "messages": [
        {
            "role": "user",
            "content": "why is the sky blue?"
        }
    ],
    "stream": False
}

response = requests.post(url, json = data)

response.json()['message']
```

## 流式返回

```python
import requests
import json
url = "http://localhost:11434/api/chat"

data = {
    "model": "deepseek-r1:1.5b",
    "messages": [
    {
        "role": "user",
        "content": "why is the sky blue?"
    }
    ]
}

response = requests.post(url, json = data, stream=True)

for line in response.iter_lines():
    print(type(line))
    if line:
        decoded_line = line.decode('utf-8')
        print(json.loads(decoded_line)["message"]['content'], end="", flush=True)
```

## 格式化返回

```python
import requests

url = "http://localhost:11434/api/chat"

data = {
    "model": "deepseek-r1:1.5b",
    "messages": [{"role": "user", "content": "Ollama is 22 years old and busy saving the world. Return a JSON object with the age and availability."}],
    "stream": False,
    "format": {
        "type": "object",
        "properties": {
        "age": {
            "type": "integer"
        },
        "available": {
            "type": "boolean"
        }
        },
        "required": [
        "age",
        "available"
        ]
    },
    "stream": False
}

response = requests.post(url, json = data)

response.json()['message']
```



## 历史聊天


```python
import requests

url = "http://localhost:11434/api/chat"

data = {
    "model": "deepseek-r1:1.5b",
    "stream": False,
    "messages": [
        {
            "role": "user",
            "content": "why is the sky blue?"
        },
        {
            "role": "assistant",
            "content": "due to rayleigh scattering."
        },
        {
            "role": "user",
            "content": "how is that different than mie scattering?"
        }
    ]
}

response = requests.post(url, json = data)

response.json()['message']
```



## 加载模型

```python
import requests

url = "http://localhost:11434/api/chat"

data = {
    "model": "deepseek-r1:1.5b",
    "messages": [
    ]
}

response = requests.post(url, json = data)

response.json()['message']
```


## 卸载模型


```python
import requests

url = "http://localhost:11434/api/chat"

data = {
    "model": "deepseek-r1:1.5b",
    "messages": [],
    "keep_alive": 0
}

response = requests.post(url, json = data)

response.json()['message']
```



## 参考
1. https://github.com/ollama/ollama/blob/main/docs/api.md
2. https://datawhalechina.github.io/handy-ollama/#/C4/1.%20Ollama%20API%20%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97
3. https://adasci.org/hands-on-guide-to-running-llms-locally-using-ollama/
4. https://ywctech.net/ml-ai/ollama-first-try/

