`BertForSequenceClassification`是`BertModel`的进一步封装

# BertModel
[BertModel](https://huggingface.co/docs/transformers/model_doc/bert#transformers.BertModel)
The bare Bert Model transformer outputting raw hidden-states without any specific head on top.

```python
from transformers import BertTokenizer, BertModel
import torch
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertModel.from_pretrained("bert-base-uncased")
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)
```

参数|描述
--|--
input_ids|`Tokenizer`的返回结果
attention_mask|`Tokenizer`的返回结果
token_type_ids|`Tokenizer`的返回结果
position_ids|`Tokenizer`的返回结果

# BertForSequenceClassification
[BertForSequenceClassification](https://huggingface.co/docs/transformers/model_doc/bert#transformers.BertForSequenceClassification)
Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g. for GLUE tasks.
```python
num_labels = 8
model = BertForSequenceClassification.from_pretrained("model_name", num_labels=num_labels)
labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)

```

参数|描述
--|--
input_ids|`Tokenizer`的返回结果
attention_mask |`Tokenizer`的返回结果
token_type_ids|`Tokenizer`的返回结果
position_ids|`Tokenizer`的返回结果
labels|如果`num_labels=1`则计算regression loss, `Mean-Square loss`, 如果`num_labels>1`则计算classification loss, `Cross-Entropy`