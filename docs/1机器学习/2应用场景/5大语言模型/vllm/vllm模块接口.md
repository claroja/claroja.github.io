


```python
# SPDX-License-Identifier: Apache-2.0

from vllm import LLM, SamplingParams

# Sample prompts.
prompts = [
    "Hello, my name is",
    "The president of the United States is",
    "The capital of France is",
    "The future of AI is",
]
# Create a sampling params object.
sampling_params = SamplingParams(temperature=0.8, top_p=0.95)

# Create an LLM.
llm = LLM(model="facebook/opt-125m")
# Generate texts from the prompts. The output is a list of RequestOutput objects
# that contain the prompt, generated text, and other information.
outputs = llm.generate(prompts, sampling_params)
# Print the outputs.
for output in outputs:
    prompt = output.prompt
    generated_text = output.outputs[0].text
    print(f"Prompt: {prompt!r}, Generated text: {generated_text!r}")
```



## API

`class vllm.SamplingParams()`
1. n: 一个提示返回几个序列
2. best_of: 生成多少个最优序列, best_of 必须大于或等于 n。
4. presence_penalty: token是否在之前序列中出现过惩罚, 值大于 0 鼓励模型使用新的标记，值小于 0 鼓励模型重复标记。
5. frequency_penalty：token的频率惩罚, 值大于 0 鼓励模型使用新的标记，值小于 0 鼓励模型重复标记。
6. repetition_penalty: token是否出现在提示和目前生成的文本中对其进行惩罚。值大于 1 鼓励模型使用新的标记，值小于 1 鼓励模型重复标记。
3. temperature: 值较低时使模型更具确定性，值较高时使模型更具随机性
4. top_p：根据累计概率设定token的考虑范围, 设置为 1 时考虑所有标记。
5. top_k: 根据数量设定token的考虑范围, 设置为 -1 时考虑所有标记。
6. min_p: token小于此概率将不出现
7. seed：随机种子。
8. stop：遇到该词停止
9. stop_token_ids：生成的停止词id列表
10. bad_words：不允许生成的单词列表。
11. include_stop_str_in_output：是否在输出文本中包含停止字符串。
12. ignore_eos：是否忽略 EOS 标记并在生成 EOS 标记后继续生成标记。
13. max_tokens：每个输出序列要生成的最大标记数量。
14. min_tokens：在可以生成 EOS 或 stop_token_ids 之前，每个输出序列要生成的最小标记数量。
15. logprobs：每个输出标记要返回的对数概率数量。设置为 None 时，不返回概率。











## 参考
1. https://github.com/datawhalechina/self-llm/blob/master/models/DeepSeek-R1-Distill-Qwen/04-DeepSeek-R1-Distill-Qwen-7B%20vLLM%20%E9%83%A8%E7%BD%B2%E8%B0%83%E7%94%A8.md
1. https://github.com/vllm-project/vllm/blob/main/examples/offline_inference/basic/basic.py