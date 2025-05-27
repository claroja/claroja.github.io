
























```python
# 使用 Llama 3.2 作为基础模型
FROM llama3.2 

# 调整模型参数
PARAMETER temperature 0.7 
PARAMETER num_ctx 3072 
PARAMETER stop "assistant:" PARAMETER

# Define model behavior # 定义模型行为
SYSTEM "You are an expert in cyber security."


# Customize the conversation template
# 自定义对话模板
TEMPLATE """{{ if .System }}Advisor: {{ .System }}{{ end }}
模板 “”“{{ if .系统 }}顾问： {{ .系统 }}{{ 结束 }}
Client: {{ .Prompt }} 客户： {{ .提示 }}
Advisor: {{ .Response }}""" 顾问： {{ .响应 }}“””
```

1. FROM: 自定义实例依赖的基本模型
2. PARAMETER: 控制参数
    1. Temperature: 1.0等较高的值使其更有创意，而0.5等较低的值使其更专注。
    2. num_ctx: 上下文窗口(Context window), 定义模型使用多少先前的文本作为上下文。
    3. SYSTEM: 系统消息

        ```
        你是网络安全专家。只回答与网络安全相关的问题。如果被问到任何不相关的问题，回答：我只回答与网络安全相关的问题。
        ```
    4. TEMPLATE: 模板


        ```python
        TEMPLATE """{{ if .System }}<|start|>system

        {{ .System }}<|end|>{{ end }}

        <|start|>user

        {{ .Prompt }}<|end|>

        <|start|>assistant

        """
        ```


## 参考
1. https://www.hostinger.com/tutorials/ollama-cli-tutorial
2. https://github.com/ollama/ollama/blob/main/docs/modelfile.md