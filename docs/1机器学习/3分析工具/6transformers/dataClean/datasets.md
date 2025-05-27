# datasets




transformers include two main data object: `Dictionary` and `Dataset`.

## Dictionary

[Dictionary](https://huggingface.co/docs/datasets/v2.3.2/en/package_reference/main_classes#datasets.DatasetDict) with split names as keys (‘train’, ‘test’ for example), and Dataset objects as values. 

### get from hub
```python
from datasets import load_dataset
dataset_dict = load_dataset("rotten_tomatoes")
"""
DatasetDict({
    train: Dataset({
        features: ['text', 'label'],
        num_rows: 8530
    })
    validation: Dataset({
        features: ['text', 'label'],
        num_rows: 1066
    })
    test: Dataset({
        features: ['text', 'label'],
        num_rows: 1066
    })
})
"""
dataset = load_dataset("rotten_tomatoes", split="train")
"""
Dataset({
    features: ['text', 'label'],
    num_rows: 8530
})
"""
```
### get from Dataset
```python
dataset.train_test_split(test_size=0.2, stratify_by_column="label")
```




## Dataset
The base class Dataset implements a Dataset backed by an Apache Arrow table.




一个`Dataset`对象, 既可以看做是一个list, 也可以看做是dict

### list

```python
## Get the first row in the dataset
>>> dataset[0]
{'label': 1,
 'text': 'the rock is destined to be the 21st century\'s ...'}
dataset[0]["text"]
'the rock is destined to be the 21st century\'s ...'
```

是使用`slice`方式取数时, 结果和普通list不同, 应该是重写了list的方法
```python
dataset[3:6]
{'label': [1, 1, 1],
 'text': ['if you sometimes like...',
  "emerges as something rare , an...",
  'the film provides some great...]
```


### dict

```python
dataset["text"]
['the rock is destined to be the 21st...',
 'the gorgeously elaborate continuation...',
 'effective but too-tepid biopic...',
 ...,
 'things really get weird , though ... 
```


### 二者对比
先按list取要比先按dict取效率高

```python
with Timer():
   dataset[0]['text']
## Elapsed time: 0.0031 seconds

with Timer():
  dataset["text"][0]
## Elapsed time: 0.0094 seconds

```

### tokenize

```python
from transformers import AutoTokenizer
from datasets import load_dataset

tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")
dataset = load_dataset("rotten_tomatoes", split="train")
"""
Dataset({
    features: ['text', 'label'],
    num_rows: 8530
})
"""

## tokenizer(dataset[0]["text"])  # 处理一个数据
## {'input_ids': [101, 1103, 2067, 1110, 17348...],
##  'token_type_ids': [0, 0, 0, 0, 0, 0...],
##  'attention_mask': [1, 1, 1, 1, 1, 1, 1...]}

dataset = dataset.map(lambda example: tokenizer(example["text"]), batched=True)  # 进行了特殊处理, 直接是增加了features, 而不是仅仅在"text"中替换
"""
Dataset({
    features: ['text', 'label', 'input_ids', 'token_type_ids', 'attention_mask'],
    num_rows: 8530
})
"""

dataset.set_format(type="torch", columns=["input_ids", "token_type_ids", "attention_mask", "label"])  # 将相应字段设置为tensor
"""
Dataset({
    features: ['text', 'label', 'input_ids', 'token_type_ids', 'attention_mask'],
    num_rows: 8530
})
"""
```



## evaluate

```python
from datasets import list_metrics, load_metric
metrics_list = list_metrics()
## ['accuracy', 'bertscore', 'bleu', 'bleurt', 'cer']
metric = load_metric('glue', 'mrpc')
print(metric.inputs_description)  # 查看说明
model_predictions = model(model_inputs)
final_score = metric.compute(predictions=model_predictions, references=gold_references)
```


## pytorch
Contrary to datasets.Dataset.set_format(), with_format returns a new Dataset object.

将PyTorch DataLoader 和 Hugging Face Dataset结合使用


datasets return regular python objects: integers, floats, strings, lists, etc.


```python
from datasets import load_dataset
from transformers import AutoTokenizer
tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")
ds = ds.map(lambda x: tokenizer(x["text"], truncation=True, padding=True), batched=True)
ds.set_format(type="numpy", columns=['input_ids', 'token_type_ids', 'attention_mask', 'label'])
ds["train"].format
## {'columns': ['input_ids', 'token_type_ids', 'attention_mask', 'label'],
##  'format_kwargs': {},
##  'output_all_columns': False,
##  'type': 'numpy'}
```


```python
from datasets import load_dataset
from transformers import AutoTokenizer
ds = load_dataset("rotten_tomatoes", split="validation")
tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")
ds = ds.map(lambda x: tokenizer(x['text'], truncation=True, padding=True), batched=True)
ds.format
## {'columns': ['text', 'label', 'input_ids', 'token_type_ids', 'attention_mask'],
##  'format_kwargs': {},
##  'output_all_columns': False,
##  'type': None}
ds = ds.with_format(type='tensorflow', columns=['input_ids', 'token_type_ids', 'attention_mask', 'label'])
ds.format
## {'columns': ['input_ids', 'token_type_ids', 'attention_mask', 'label'],
##  'format_kwargs': {},
##  'output_all_columns': False,
##  'type': 'tensorflow'}
```




## 参考
1. https://huggingface.co/docs/datasets/index
2. https://huggingface.co/docs/datasets/access
3. https://huggingface.co/docs/datasets/use_dataset
4. https://huggingface.co/docs/datasets/use_with_pytorch