

## 模型分类
模型名称|
DeepSeek-R1-Zero
DeepSeek-R1
DeepSeek-R1-Distill-Qwen
DeepSeek-R1-Distill-Llama





## 创建兼容 OpenAI API 接口的服务器


```sh
python -m vllm.entrypoints.openai.api_server \
  --model /root/autodl-tmp/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B \
  --served-model-name DeepSeek-R1-Distill-Qwen-7B \
  --max-model-len=2048
```


## 调用


### Completions

completions：是基本的文本生成任务，模型会在给定的提示后生成一段文本。这种类型的任务通常用于生成文章、故事、邮件等。



```python
# vllm_openai_completions.py
from openai import OpenAI
client = OpenAI(
    base_url="http://localhost:8000/v1",
    api_key="sk-xxx", # 随便填写，只是为了通过接口参数校验
)

completion = client.chat.completions.create(
  model="DeepSeek-R1-Distill-Qwen-7B",
  messages=[
    {"role": "user", "content": "我想问你，5的阶乘是多少？<think>\n"}
  ]
)

print(completion.choices[0].message)
```


### Chat Completions


```python
# vllm_openai_chat_completions.py
from openai import OpenAI
openai_api_key = "sk-xxx" # 随便填写，只是为了通过接口参数校验
openai_api_base = "http://localhost:8000/v1"

client = OpenAI(
    api_key=openai_api_key,
    base_url=openai_api_base,
)

chat_outputs = client.chat.completions.create(
    model="DeepSeek-R1-Distill-Qwen-7B",
    messages=[
        {"role": "user", "content": "什么是深度学习？"},
    ]
)
print(chat_outputs)
```









## 显卡要求

1. 单卡4090
    1. DeepSeek-R1-Distill-Qwen-1.5B
    2. DeepSeek-R1-Distill-Qwen-7B
    3. DeepSeek-R1-Distill-Llama-8B
2. 2卡4090
    1. DeepSeek-R1-Distill-Qwen-14B
3. 4卡4090
    1. DeepSeek-R1-Distill-Qwen-32B
4. 8卡4090
    1. DeepSeek-R1-Distill-Llama-70B











## 参考
1. https://github.com/datawhalechina/self-llm/blob/master/models/DeepSeek-R1-Distill-Qwen/04-DeepSeek-R1-Distill-Qwen-7B%20vLLM%20%E9%83%A8%E7%BD%B2%E8%B0%83%E7%94%A8.md
1. https://www.zhihu.com/tardis/bd/art/21641988403?source_id=1001
2. https://www.cnblogs.com/menkeyi/p/18707043
3. https://cloud.tencent.com/developer/article/2493853
4. https://www.oschina.net/news/321572