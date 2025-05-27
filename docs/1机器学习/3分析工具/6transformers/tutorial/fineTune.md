# fineTune




## 获取数据
```python
## 获得数据
from datasets import load_dataset
dataset = load_dataset("yelp_review_full")
dataset["train"][100]
{'label': 0,
 'text': 'My expectations for McDonalds are t rarely high. ...'}

## tokenize
from transformers import AutoTokenizer
tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")
def tokenize_function(examples):
    return tokenizer(examples["text"], padding="max_length", truncation=True)
tokenized_datasets = dataset.map(tokenize_function, batched=True)  # 遍历每一条数据
```



## trainer进行训练

```python
## 训练

### 加载模型
from transformers import AutoModelForSequenceClassification
model = AutoModelForSequenceClassification.from_pretrained("bert-base-cased", num_labels=5)  # 指定了output的个数是5

### 设定hyperparameters
from transformers import TrainingArguments
training_args = TrainingArguments(output_dir="test_trainer") # 包含了默认的设定hyperparameters
## training_args = TrainingArguments(output_dir="test_trainer", evaluation_strategy="epoch") # 可以设置每个epoch进行评估


### 设定evaluate的方法
import numpy as np
from datasets import load_metric

metric = load_metric("accuracy")
def compute_metrics(eval_pred):
    logits, labels = eval_pred
    predictions = np.argmax(logits, axis=-1)
    return metric.compute(predictions=predictions, references=labels)


### 开始训练
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=small_train_dataset,
    eval_dataset=small_eval_dataset,
    compute_metrics=compute_metrics,
)

trainer.train()
```




## pytorch进行训练

```python
tokenized_datasets = tokenized_datasets.remove_columns(["text"])
tokenized_datasets = tokenized_datasets.rename_column("label", "labels")
tokenized_datasets.set_format("torch")  # 设置返回tensor


from torch.utils.data import DataLoader
train_dataloader = DataLoader(small_train_dataset, shuffle=True, batch_size=8)
eval_dataloader = DataLoader(small_eval_dataset, batch_size=8)


## 训练
### 创建模型
from transformers import AutoModelForSequenceClassification
model = AutoModelForSequenceClassification.from_pretrained("bert-base-cased", num_labels=5)


from torch.optim import AdamW
optimizer = AdamW(model.parameters(), lr=5e-5)


from transformers import get_scheduler
num_epochs = 3
num_training_steps = num_epochs * len(train_dataloader)
lr_scheduler = get_scheduler(
    name="linear", optimizer=optimizer, num_warmup_steps=0, num_training_steps=num_training_steps
)

import torch
device = torch.device("cuda") if torch.cuda.is_available() else torch.device("cpu")
model.to(device)


from tqdm.auto import tqdm

progress_bar = tqdm(range(num_training_steps))

model.train()
for epoch in range(num_epochs):
    for batch in train_dataloader:
        batch = {k: v.to(device) for k, v in batch.items()}
        outputs = model(**batch)
        loss = outputs.loss
        loss.backward()
        optimizer.step()
        lr_scheduler.step()
        optimizer.zero_grad()
        progress_bar.update(1)



## 模型评估
metric = load_metric("accuracy")
model.eval()
for batch in eval_dataloader:
    batch = {k: v.to(device) for k, v in batch.items()}
    with torch.no_grad():
        outputs = model(**batch)

    logits = outputs.logits
    predictions = torch.argmax(logits, dim=-1)
    metric.add_batch(predictions=predictions, references=batch["labels"])

metric.compute()

```




参考:
https://huggingface.co/docs/transformers/training