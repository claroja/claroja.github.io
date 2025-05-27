
# fine-tuning

## 概述
Unsloth是一个支持Llama系列、DeepSeek R1系列更快速，更少占用内存的微调库。DeepSeek的蒸馏模型是建立在Llama和Qwen架构上的，因此它们与Unsloth完全兼容。


## 环境信息
1. 基座模型：[DeepSeek-R1-Distill-Llama-8B](https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Llama-8B)
2. 微调库：[Unsloth](https://unsloth.ai/)
3. 医疗数据集：[medical-o1-reasoning-SFT](https://huggingface.co/datasets/FreedomIntelligence/medical-o1-reasoning-SFT)


```sh
pip install unsloth
# Also get the latest nightly Unsloth!
pip uninstall unsloth -y && pip install --upgrade --no-cache-dir --no-deps git+https://github.com/unslothai/unsloth.git
pip install bitsandbytes unsloth_zoo
```


## 加载模型

```python
from unsloth import FastLanguageModel
import torch

max_seq_length = 2048 # Choose any! We auto support RoPE Scaling internally!
dtype = None # None for auto detection. Float16 for Tesla T4, V100, Bfloat16 for Ampere+
load_in_4bit = True # Use 4bit quantization to reduce memory usage. Can be False.

# 基于unsloth加载Llama的蒸馏模型
model, tokenizer = FastLanguageModel.from_pretrained(
    model_name = "unsloth/DeepSeek-R1-Distill-Llama-8B",
    max_seq_length = max_seq_length,
    dtype = dtype,
    load_in_4bit = load_in_4bit,
    # token = "hf_...", # use one if using gated models like meta-llama/Llama-2-7b-hf
)
```

## 推理测试

```python
prompt_style = """Below is an instruction that describes a task, paired with an input that provides further context.
Write a response that appropriately completes the request.
Before answering, think carefully about the question and create a step-by-step chain of thoughts to ensure a logical and accurate response.

### Instruction:

You are a medical expert with advanced knowledge in clinical reasoning, diagnostics, and treatment planning.
Please answer the following medical question.

### Question:
{}

### Response:
<think>{}"""

question = "一个患有急性阑尾炎的病人已经发病5天，腹痛稍有减轻但仍然发热，在体检时发现右下腹有压痛的包块，此时应如何处理？"


FastLanguageModel.for_inference(model)
inputs = tokenizer([prompt_style.format(question, "")], return_tensors="pt").to("cuda")
outputs = model.generate(
    input_ids=inputs.input_ids,
    attention_mask=inputs.attention_mask,
    max_new_tokens=1200,
    use_cache=True,
)
response = tokenizer.batch_decode(outputs)
print(response[0].split("### Response:")[1])

```


## 准备数据集

```python
train_prompt_style = """Below is an instruction that describes a task, paired with an input that provides further context.
Write a response that appropriately completes the request.
Before answering, think carefully about the question and create a step-by-step chain of thoughts to ensure a logical and accurate response.

### Instruction:
You are a medical expert with advanced knowledge in clinical reasoning, diagnostics, and treatment planning.
Please answer the following medical question.

### Question:
{}

### Response:
<think>
{}
</think>
{}"""



```
✨注意: 在每个训练数据集条目的末尾添加EOS（序列结束）令牌是至关重要的，否则您可能会遇到无限生成。


```python
EOS_TOKEN = tokenizer.eos_token  # Must add EOS_TOKEN

# 迭代训练集数据，处理prompt
def formatting_prompts_func(examples):
    inputs = examples["Question"]
    cots = examples["Complex_CoT"]
    outputs = examples["Response"]
    texts = []
    for input, cot, output in zip(inputs, cots, outputs):
        text = train_prompt_style.format(input, cot, output) + EOS_TOKEN
        texts.append(text)
    return {
        "text": texts,
    }

from datasets import load_dataset
dataset = load_dataset("FreedomIntelligence/medical-o1-reasoning-SFT", 'zh', split = "train[0:500]", trust_remote_code=True)
print(dataset.column_names)

dataset = dataset.map(formatting_prompts_func, batched = True)
print(dataset["text"][0])

```


现在单个训练数据格式如下:

```md
Below is an instruction that describes a task, paired with an input that provides further context. 
Write a response that appropriately completes the request. 
Before answering, think carefully about the question and create a step-by-step chain of thoughts to ensure a logical and accurate response.

### Instruction:
You are a medical expert with advanced knowledge in clinical reasoning, diagnostics, and treatment planning. 
Please answer the following medical question. 

### Question:
根据描述，一个1岁的孩子在夏季头皮出现多处小结节，长期不愈合，且现在疮大如梅，溃破流脓，口不收敛，头皮下有空洞，患处皮肤增厚。这种病症在中医中诊断为什么病？

### Response:
<think>
这个小孩子在夏天头皮上长了些小结节，一直都没好，后来变成了脓包，流了好多脓。想想夏天那么热，可能和湿热有关。才一岁的小孩，免疫力本来就不强，夏天的湿热没准就侵袭了身体。

用中医的角度来看，出现小结节、再加上长期不愈合，这些症状让我想到了头疮。小孩子最容易得这些皮肤病，主要因为湿热在体表郁结。

但再看看，头皮下还有空洞，这可能不止是简单的头疮。看起来病情挺严重的，也许是脓肿没治好。这样的情况中医中有时候叫做禿疮或者湿疮，也可能是另一种情况。

等一下，头皮上的空洞和皮肤增厚更像是疾病已经深入到头皮下，这是不是说明有可能是流注或瘰疬？这些名字常描述头部或颈部的严重感染，特别是有化脓不愈合，又形成通道或空洞的情况。

仔细想想，我怎么感觉这些症状更贴近瘰疬的表现？尤其考虑到孩子的年纪和夏天发生的季节性因素，湿热可能是主因，但可能也有火毒或者痰湿造成的滞留。

回到基本的症状描述上看，这种长期不愈合又复杂的状况，如果结合中医更偏重的病名，是不是有可能是涉及更深层次的感染？

再考虑一下，这应该不是单纯的瘰疬，得仔细分析头皮增厚并出现空洞这样的严重症状。中医里头，这样的表现可能更符合‘蚀疮’或‘头疽’。这些病名通常描述头部严重感染后的溃烂和组织坏死。

看看季节和孩子的体质，夏天又湿又热，外邪很容易侵入头部，对孩子这么弱的免疫系统简直就是挑战。头疽这个病名听起来真是切合，因为它描述的感染严重，溃烂到出现空洞。

不过，仔细琢磨后发现，还有个病名似乎更为合适，叫做‘蝼蛄疖’，这病在中医里专指像这种严重感染并伴有深部空洞的情况。它也涵盖了化脓和皮肤增厚这些症状。

哦，该不会是夏季湿热，导致湿毒入侵，孩子的体质不能御，其病情发展成这样的感染？综合分析后我觉得‘蝼蛄疖’这个病名真是相当符合。
</think>
从中医的角度来看，你所描述的症状符合“蝼蛄疖”的病症。这种病症通常发生在头皮，表现为多处结节，溃破流脓，形成空洞，患处皮肤增厚且长期不愈合。湿热较重的夏季更容易导致这种病症的发展，特别是在免疫力较弱的儿童身上。建议结合中医的清热解毒、祛湿消肿的治疗方法进行处理，并配合专业的医疗建议进行详细诊断和治疗。<｜end▁of▁sentence｜>
```

## 训练模型

```python
model, tokenizer = FastLanguageModel.from_pretrained(
    model_name = "unsloth/DeepSeek-R1-Distill-Llama-8B",
    max_seq_length = max_seq_length,
    dtype = dtype,
    load_in_4bit = load_in_4bit
)

FastLanguageModel.for_training(model)

model = FastLanguageModel.get_peft_model(
    model,
    target_modules=[
        "q_proj",
        "k_proj",
        "v_proj",
        "o_proj",
        "gate_proj",  
        "up_proj",
        "down_proj",
    ],
    r=16,  
    lora_alpha=16,
    lora_dropout=0,  
    bias="none",  
    use_gradient_checkpointing="unsloth",  # True or "unsloth" for very long context
    random_state=3407,
    use_rslora=False,  
    loftq_config=None,
)


from trl import SFTTrainer
from transformers import TrainingArguments
from unsloth import is_bfloat16_supported

trainer = SFTTrainer(
    model = model,
    tokenizer = tokenizer,
    train_dataset = dataset,
    dataset_text_field = "text",
    max_seq_length = max_seq_length,
    dataset_num_proc = 2,
    packing = False, # Can make training 5x faster for short sequences.
    args = TrainingArguments(
        per_device_train_batch_size = 2,
        gradient_accumulation_steps = 4,
        warmup_steps = 5,
        max_steps = 60,
        # num_train_epochs = 1, # For longer training runs!
        learning_rate = 2e-4,
        fp16 = not is_bfloat16_supported(),
        bf16 = is_bfloat16_supported(),
        logging_steps = 1,
        optim = "adamw_8bit",
        weight_decay = 0.01,
        lr_scheduler_type = "linear",
        seed = 3407,
        output_dir = "outputs",
        report_to = "none", # Use this for WandB etc
    ),
)

# 训练
trainer_stats = trainer.train()
```

## 训练验证

```python
FastLanguageModel.for_inference(model)  # Unsloth has 2x faster inference!
inputs = tokenizer([prompt_style.format(question, "")], return_tensors="pt").to("cuda")

outputs = model.generate(
    input_ids=inputs.input_ids,
    attention_mask=inputs.attention_mask,
    max_new_tokens=1200,
    use_cache=True,
)
response = tokenizer.batch_decode(outputs)
print(response[0].split("### Response:")[1])

"""
<think>
嗯，这个病人已经有5天的急性阑尾炎了。最近的症状是腹痛稍微减轻，但他还是发热的。看来他的病情还没完全好转。

在体检时发现了右下腹有压痛的包块，这让我想到可能有了阻塞。也许是阑尾炎引起的炎症块，或者是其他感染性问题。

接下来，我得考虑进一步的检查。X光或者超声检查可能会帮助我更好地了解这个包块的具体位置和性质。

如果检查证实有阻塞，可能需要考虑引流手术。毕竟，阑尾炎如果没有及时处理，可能会发展成急性阑尾炎的急性阻塞炎症，甚至可能引发感染性腹膜炎。

还有，我需要确保病人的整体状况稳定。有时候，可能需要先用抗生素处理，消除感染的可能，以免阻塞情况变得更严重。

所以，综合考虑，我觉得应该首先做个X光或超声检查，评估这个包块的具体情况，然后根据检查结果决定是否需要进行引流手术。
</think>
在这种情况下，首先进行X光或超声检查是非常重要的，因为它可以帮助我们更好地了解这个包块的具体位置和性质。根据检查结果，如果发现有阻塞，我们需要考虑进行引流手术。同时，确保病人的整体状况稳定，可能需要使用抗生素来消除感染的可能性，以防止阻塞情况变得更严重。因此，建议先进行进一步的影像学检查，然后根据检查结果决定是否需要进行引流手术。<｜end▁of▁sentence｜>
"""
```


## 保存模型
要将最终模型保存为LoRA适配器，可以使用Huggingface的push_to_hub进行在线保存，或者使用save_pretrained进行本地保存。

```python
model.save_pretrained("lora_model") # Local saving
tokenizer.save_pretrained("lora_model")
# model.push_to_hub("your_name/lora_model", token = "...") # Online saving
# tokenizer.push_to_hub("your_name/lora_model", token = "...") # Online saving
```
















## 参考
1. https://huggingface.co/datasets/unsloth/notebooks/blob/main/Alpaca_%2B_Llama_7b_full_example.ipynb
1. https://www.cnblogs.com/shanren/p/18707513
1. https://zhuanlan.zhihu.com/p/25054526736
2. https://zhuanlan.zhihu.com/p/22860127903
3. https://www.cnblogs.com/shanren/p/18707513
4. https://www.bilibili.com/video/BV1pfKNe8E7F/?vd_source=dcdcb80a44ecde3c4a3707dad6d2a954
5. https://docs.unsloth.ai/basics/tutorial-how-to-finetune-llama-3-and-use-in-ollama