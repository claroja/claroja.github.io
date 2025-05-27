# textClassification

transformers_task_textClassification

## 应用方向

1. sentiment analysis(positive, negative, neutral)

## 数据集

[imdb](https://huggingface.co/datasets/imdb)
[DistilBERT](https://huggingface.co/distilbert-base-uncased)

```python
from datasets import load_dataset
imdb = load_dataset("imdb")
imdb["test"][0]
{
    "label": 0,
    "text": "I love sci-fi and am willing to put up with a lot....",
}
```

一个`dataset`中包含了两个字段:
`text`: 电影的评论
`label`: 0表示`negative`, 1表示`positive`

```python
from transformers import AutoTokenizer
tokenizer = AutoTokenizer.from_pretrained("distilbert-base-uncased")
def preprocess_function(examples):
    return tokenizer(examples["text"], truncation=True) # 这里不进行padding, 在下面使用DataCollatorWithPadding, 进行动态padding
tokenized_imdb = imdb.map(preprocess_function, batched=True)  # batched批处理可以加快速度

from transformers import DataCollatorWithPadding
data_collator = DataCollatorWithPadding(tokenizer=tokenizer)  # 创建batch, 并以batch动态进行padding, 这样比tokenizer的padding更加的高效
```

```python
from transformers import AutoModelForSequenceClassification, TrainingArguments, Trainer
model = AutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=2)
```

```python
training_args = TrainingArguments(
    output_dir="./results",
    learning_rate=2e-5,
    per_device_train_batch_size=16,
    per_device_eval_batch_size=16,
    num_train_epochs=5,
    weight_decay=0.01,
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_imdb["train"],
    eval_dataset=tokenized_imdb["test"],
    tokenizer=tokenizer,
    data_collator=data_collator,
)
trainer.train()
```

参考:
https://huggingface.co/docs/transformers/v4.20.1/en/tasks/sequence_classification