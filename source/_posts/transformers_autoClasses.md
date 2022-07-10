# 初始化模型

`from_retrained()`方法通过pretrained model的name和path来加载模型
```python
model = AutoModel.from_pretrained("bert-base-cased")
```
以上代码加载了[BertModel](https://huggingface.co/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertModel), 主要包含了

BertConfig: 存储了bert模型的配置.比如: vocab_size(语料库的大小, 决定了inputs_ids的范围),hidden_size(隐藏层的大小),num_hidden_layers(隐藏层的层数)等.[参考官网](https://huggingface.co/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig)
BertModel: 输出raw hidden-states, 没有最终的softmax等. 是`torch.nn.Module`的子类, 可以像`pytorch`一样操作. [参考官网](https://huggingface.co/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertModel)

1. 加载模型配置

```python
from transformers import AutoConfig
config = AutoConfig.from_pretrained("bert-base-uncased")
```

2. 加载model

```python
from transformers import AutoConfig, AutoModel
config = AutoConfig.from_pretrained("bert-base-uncased")
model = AutoModel.from_config(config)
```


# 初始化 Tokenizer

BertTokenizer: 在pretrained model vocabulary初始化制作token的类. [参考官网](https://huggingface.co/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer)

```python
from transformers import AutoTokenizer
tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")
```

# 输出结果

```python
from transformers import AutoModelForSequenceClassification
pt_batch = tokenizer(
    ["We are very happy to show you the 🤗 Transformers library.", "We hope you don't hate it."],
    padding=True,
    truncation=True,
    max_length=512,
    return_tensors="pt",
)
model_name = "nlptown/bert-base-multilingual-uncased-sentiment"
pt_model = AutoModelForSequenceClassification.from_pretrained(model_name)
pt_outputs = pt_model(**pt_batch)
from torch import nn
pt_predictions = nn.functional.softmax(pt_outputs.logits, dim=-1)
print(pt_predictions)
# tensor([[0.0021, 0.0018, 0.0115, 0.2121, 0.7725],
#         [0.2084, 0.1826, 0.1969, 0.1755, 0.2365]], grad_fn=<SoftmaxBackward0>)
```



# automodelforsequenceclassification-vs-automodel


建议使用`AutoTokenizer`类和`AutoModelFor`类来加载模型, 而不是使用`AutoModel`类来加载.
[参考官网](https://huggingface.co/docs/transformers/autoclass_tutorial#automodel)

https://stackoverflow.com/questions/69907682/what-are-differences-between-automodelforsequenceclassification-vs-automodel

参考:
https://huggingface.co/docs/transformers/v4.20.1/en/model_doc/bert
https://huggingface.co/docs/transformers/model_doc/auto