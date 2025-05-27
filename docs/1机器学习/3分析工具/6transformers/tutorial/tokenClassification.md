# tokenClassification


token classification tasks:

- NER (Named-entity recognition) Classify the entities in the text (person, organization, location...).
- POS (Part-of-speech tagging) Grammatically classify the tokens (noun, verb, adjective...)
- Chunk (Chunking) Grammatically classify the tokens and group them into "chunks" that go together


## NER
### 数据准备

数据初始化配置
```python
task = "ner" # Should be one of "ner", "pos" or "chunk"
model_checkpoint = "distilbert-base-uncased"
batch_size = 16
```

查看训练数据
```python
from datasets import load_dataset, load_metric
datasets = load_dataset("conll2003")
## DatasetDict({
##     train: Dataset({
##         features: ['id', 'tokens', 'pos_tags', 'chunk_tags', 'ner_tags'],
##         num_rows: 14041
##     })
##     validation: Dataset({
##         features: ['id', 'tokens', 'pos_tags', 'chunk_tags', 'ner_tags'],
##         num_rows: 3250
##     })
##     test: Dataset({
##         features: ['id', 'tokens', 'pos_tags', 'chunk_tags', 'ner_tags'],
##         num_rows: 3453
##     })
## })

datasets["train"][0]
## {'chunk_tags': [11, 21, 11, 12, 21, 22, 11, 12, 0],
##  'id': '0',
##  'ner_tags': [3, 0, 7, 0, 0, 0, 7, 0, 0],
##  'pos_tags': [22, 42, 16, 21, 35, 37, 16, 21, 7],
##  'tokens': ['EU',
##   'rejects',
##   'German',
##   'call',
##   'to',
##   'boycott',
##   'British',
##   'lamb',
##   '.']}
```
字段解释:
`chunk_tags`: 用于chunk任务的标注
`id`: 句子的Id
`ner_tags`: 用于ner任务的标注
`pos_tags`: 用于pos任务的标注
`tokens`: 句子, 列表的形式. 一个`token`就是一个`word`




查看特征数据
```python
datasets["train"].features[f"ner_tags"]

## Sequence(feature=ClassLabel(num_classes=9, names=['O', 'B-PER', 'I-PER', 'B-ORG', 'I-ORG', 'B-LOC', 'I-LOC', 'B-MISC', 'I-MISC'], names_file=None, id=None), length=-1, id=None)
```

对于NER tags:

- 0对应'O', 1对应'B-PER'...
- 有4个labels, 'B-'(beginning), 'I-'(intermediate)
  - 'PER' for person
  - 'ORG' for organization
  - 'LOC' for location
  - 'MISC' for miscellaneous


## tokenize
1. 注意tokenizer又可能将token继续分割成subToken.比如原始数据中的一个token `"'s"`, 在tokenize之后, 变成了`"'"`和`"s"`.
2. 增加了`[CLS]`和`[SEP]`
也就是说标注的内容和送入模型的内容是有差异的, 我们需要处理.

```python
example = datasets["train"][4]
## ['Germany', "'s", 'representative', 'to', 'the', 'European', 'Union', "'s", 'veterinary', 'committee', 'Werner', 'Zwingmann', 'said', 'on', 'Wednesday', 'consumers', 'should', 'buy', 'sheepmeat', 'from', 'countries', 'other', 'than', 'Britain', 'until', 'the', 'scientific', 'advice', 'was', 'clearer', '.']
tokenized_input = tokenizer(example["tokens"], is_split_into_words=True)
tokens = tokenizer.convert_ids_to_tokens(tokenized_input["input_ids"])
## ['[CLS]', 'germany', "'", 's', 'representative', 'to', 'the', 'european', 'union', "'", 's', 'veterinary', 'committee', 'werner', 'z', '##wing', '##mann', 'said', 'on', 'wednesday', 'consumers', 'should', 'buy', 'sheep', '##me', '##at', 'from', 'countries', 'other', 'than', 'britain', 'until', 'the', 'scientific', 'advice', 'was', 'clearer', '.', '[SEP]']
```

```python
## 通过word_ids可以解决这个问题, 
## 1. 它返回了tokenize之后 相同数量的索引id, 比如`"'s"`索引是1, 那么subToken的`"'"`和`"s"`的id都是1. 
## 2. 另外将特殊的token标记为None
word_ids = tokenized_input.word_ids()
## [None, 0, 1, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10, 11, 11, 11, 12, 13, 14, 15, 16, 17, 18, 18, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, None]
aligned_labels = [-100 if i is None else example[f"{task}_tags"][i] for i in word_ids]  # 将洗标为None的设置成-100, pytorch会忽略. 将subToken进行填充


label_all_tokens = True
def tokenize_and_align_labels(examples):
    tokenized_inputs = tokenizer(examples["tokens"], truncation=True, is_split_into_words=True)
    labels = []
    for i, label in enumerate(examples[f"{task}_tags"]):
        word_ids = tokenized_inputs.word_ids(batch_index=i)
        previous_word_idx = None
        label_ids = []
        for word_idx in word_ids:
            # Special tokens have a word id that is None. We set the label to -100 so they are automatically
            # ignored in the loss function.
            if word_idx is None:
                label_ids.append(-100)
            # We set the label for the first token of each word.
            elif word_idx != previous_word_idx:
                label_ids.append(label[word_idx])
            # For the other tokens in a word, we set the label to either the current label or -100, depending on
            # the label_all_tokens flag.
            else:
                label_ids.append(label[word_idx] if label_all_tokens else -100)
            previous_word_idx = word_idx
        labels.append(label_ids)
    tokenized_inputs["labels"] = labels
    return tokenized_inputs

tokenized_datasets = datasets.map(tokenize_and_align_labels, batched=True)
```


## Fine-tunning

```python
from transformers import AutoModelForTokenClassification, TrainingArguments, Trainer
model = AutoModelForTokenClassification.from_pretrained(model_checkpoint, num_labels=len(label_list))
model_name = model_checkpoint.split("/")[-1]

## 设置训练的超参数
args = TrainingArguments( 
    f"{model_name}-finetuned-{task}",
    evaluation_strategy = "epoch",
    learning_rate=2e-5,
    per_device_train_batch_size=batch_size,
    per_device_eval_batch_size=batch_size,
    num_train_epochs=3,
    weight_decay=0.01,
    push_to_hub=True,
)


## 相当于pytorch的DataLoader
from transformers import DataCollatorForTokenClassification
data_collator = DataCollatorForTokenClassification(tokenizer)  

## 设置评估指标
metric = load_metric("seqeval")  
import numpy as np

def compute_metrics(p):
    predictions, labels = p
    predictions = np.argmax(predictions, axis=2)

    # Remove ignored index (special tokens)
    true_predictions = [
        [label_list[p] for (p, l) in zip(prediction, label) if l != -100]
        for prediction, label in zip(predictions, labels)
    ]
    true_labels = [
        [label_list[l] for (p, l) in zip(prediction, label) if l != -100]
        for prediction, label in zip(predictions, labels)
    ]

    results = metric.compute(predictions=true_predictions, references=true_labels)
    return {
        "precision": results["overall_precision"],
        "recall": results["overall_recall"],
        "f1": results["overall_f1"],
        "accuracy": results["overall_accuracy"],
    }
```

开始训练
```python
trainer = Trainer(
    model,
    args,
    train_dataset=tokenized_datasets["train"],
    eval_dataset=tokenized_datasets["validation"],
    data_collator=data_collator,
    tokenizer=tokenizer,
    compute_metrics=compute_metrics
)
trainer.train()
trainer.evaluate()

## 获得每个种类的评估指标
predictions, labels, _ = trainer.predict(tokenized_datasets["validation"])
predictions = np.argmax(predictions, axis=2)
## Remove ignored index (special tokens)
true_predictions = [
    [label_list[p] for (p, l) in zip(prediction, label) if l != -100]
    for prediction, label in zip(predictions, labels)
]
true_labels = [
    [label_list[l] for (p, l) in zip(prediction, label) if l != -100]
    for prediction, label in zip(predictions, labels)
]

results = metric.compute(predictions=true_predictions, references=true_labels)
results
```


参考:
https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/token_classification.ipynb