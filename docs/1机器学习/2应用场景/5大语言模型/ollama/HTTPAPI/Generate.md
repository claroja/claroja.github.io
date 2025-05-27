HTTP API 预设的streaming 是开的，也就是一有结果就会马上输出，所以看到的结果是一连串的json.



终端节点将响应作为 JSON 对象流式传输。可以通过为这些终端节点提供 {"stream": false} 来禁用流式处理。




```python
import requests

url = "http://localhost:11434/api/generate"
data = {
    "model": "deepseek-r1:1.5b",
    "prompt": "can you tell me about India in brief?",
    "stream": False
}
response = requests.post(url, json = data)
response.json()['response']
```



## 生成API

`POST /api/generate`

1. 普通参数
   1. model: （必需）模型名称
   2. prompt: 要生成响应的提示
   3. suffix: 代码补全相关, 规定代码应该如何结尾
   4. images: （可选）一个base64编码的图像列表（用于多模态模型，如 llava ）

2. 高级参数
   1. format: LLM返回的格式, 并非接口的返回形式. 目前仅支持json格式
   1. options: 其他模型参数，如 temperature、seed 等, 可在[ModelFile](https://github.com/ollama/ollama/blob/main/docs/modelfile.md#valid-parameters-and-values)中找到
   1. system: 系统消息, 会覆盖[ModelFile](https://github.com/ollama/ollama/blob/main/docs/modelfile.md)中的设置
   1. template: 要使用的提示模板, 会覆盖[ModelFile](https://github.com/ollama/ollama/blob/main/docs/modelfile.md)中的设置
   1. stream: 如果设置为 false ，响应将作为单个响应对象返回，而不是一系列对象流
   1. context: 从先前对 /generate 的请求中返回的上下文参数，可以用于保持简短的对话记忆
   1. raw: 如果设置为 true ，将不会对提示进行任何格式化。如果您在请求API时指定了完整的模板提示，可以选择使用 raw 参数
   1. keep_alive: 控制模型在请求后保留在内存中的时间（默认：5m）



## 流式返回


```python
import requests
import json

url = "http://localhost:11434/api/generate"

data = {
    "model": "deepseek-r1:1.5b",
    "prompt": "Why is the sky blue?"
}

response = requests.post(url, json = data, stream=True)

for line in response.iter_lines():
    print(type(line))
    if line:
        decoded_line = line.decode('utf-8')
        print(json.loads(decoded_line)["response"], end="", flush=True)

# iter_content()是一个字节一个字节返回, 不能用
# for chunk in response.iter_content(): 
#     print(chunk)

```

https://nickherrig.com/posts/streaming-requests/


## 返回json格式

必须在请求中传入`format`参数, 而且在`prompt`中指明用JSON返回.

```python
import requests

url = "http://localhost:11434/api/generate"

data = {
    "model": "deepseek-r1:1.5b",
    "prompt": "What color is the sky at different times of the day? Respond using JSON",
    "format": "json",
    "stream": False,
}

response = requests.post(url, json = data)

response.json()['response']

"""
'{"skyColor": "blue", "timeOfDay": "morning", "dayLength": "short", "sunrise": "6:00 AM", "sunset": "12:00 PM", "temperature": "25°C", "relativeHumidity": "60%", "windSpeed": "10 m/s", "direction": "north"}'
"""
```


## raw


一下代码忽略了`[INST]`这个特殊的token
```python
import requests

url = "http://localhost:11434/api/generate"

data = {
    "model": "deepseek-r1:1.5b",
    "prompt": "[INST] why is the sky blue? [/INST]",
    "raw": True,
    "stream": False
}

response = requests.post(url, json = data)

response.json()['response']
```

## 加载模型

```python
import requests

url = "http://localhost:11434/api/generate"

data = {
    "model": "deepseek-r1:1.5b",
}

response = requests.post(url, json = data)

response.json()['response']
```




## 卸载模型

```python
import requests

url = "http://localhost:11434/api/generate"

data = {
    "model": "deepseek-r1:1.5b",
    "keep_alive": 0
}

response = requests.post(url, json = data)
response.json()['response']
```
















## 参考
1. https://github.com/ollama/ollama/blob/main/docs/api.md
2. https://datawhalechina.github.io/handy-ollama/#/C4/1.%20Ollama%20API%20%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97
3. https://adasci.org/hands-on-guide-to-running-llms-locally-using-ollama/
4. https://ywctech.net/ml-ai/ollama-first-try/