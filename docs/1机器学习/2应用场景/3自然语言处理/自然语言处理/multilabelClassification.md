# multilabelClassification

```python
import pandas as pd
from datasets import Dataset,DatasetDict
from skmultilearn.model_selection import iterative_train_test_split
from transformers import AutoTokenizer
from torch.utils.data import DataLoader
from sklearn.preprocessing import MultiLabelBinarizer
from torch.optim import AdamW
import torch
from transformers import AutoModelForSequenceClassification
import numpy as np
from sklearn.metrics import accuracy_score

## 1. create test data
df = pd.DataFrame({
    "text":["text0","text1","text2","text3","text4","text5","text6"],
    "target":["","b,c","b,c","","c","b,c","b"]
})

## 2. one-hot the target into multicolumns
df["labels_list"] = df["target"].str.split(",")
labels = df["labels_list"].explode().value_counts().index.tolist()
labels.remove("")  # write into config, next time, use config.
mlb = MultiLabelBinarizer(classes = labels)
mlb.fit(df["labels_list"])
df[labels] = mlb.transform(df["labels_list"])


## 3. split into train and test
text_column_name = "text"
labels_column_names = labels

df_with_index = df.reset_index() # create "index" column for indexing back.
X_train, y_train, X_test, y_test = iterative_train_test_split(df_with_index[["index",text_column_name]].values,df_with_index[labels_column_names].values,test_size=0.5)
df_with_index.loc[df_with_index["index"].isin(X_train[:,0]),"splitmark"] = "test"  # index back
df_with_index.loc[df_with_index["index"].isin(X_test[:,0]), "splitmark"] = "train" # index back
df_with_splitmark = df_with_index.set_index("index") # set the index column to real index
df_with_splitmark["labels"] = df_with_splitmark[labels_column_names].astype("float64").to_numpy().tolist()  # merge multilabels columns into one column


## 4. tokenize and create dataloader
dataset_train = Dataset.from_pandas(df_with_splitmark.loc[df_with_index["splitmark"]=="train",["text","labels"]])
dataset_test = Dataset.from_pandas(df_with_splitmark.loc[df_with_index["splitmark"]=="test",["text","labels"]])
datadict = DatasetDict({"train":dataset_train,"test":dataset_test})
tokenizer = AutoTokenizer.from_pretrained("./pretrained_model/distilbert-base-uncased")
tokenized_datadict = datadict.map(lambda x:tokenizer(x[text_column_name], padding='max_length', truncation=True, max_length=512,),
                                batched=True,remove_columns = ["index",text_column_name])
tokenized_datadict.set_format("torch")
train_dataloader = DataLoader(tokenized_datadict["train"], shuffle=True, batch_size=1)
test_dataloader = DataLoader(tokenized_datadict["test"], batch_size=1)

## 5. create model
model = AutoModelForSequenceClassification.from_pretrained("./pretrained_model/distilbert-base-uncased", 
                                                            problem_type="multi_label_classification", 
                                                            num_labels=len(labels))

## 6. train and evaluate
optimizer = AdamW(model.parameters(), lr=5e-5)
for epoch in range(2):
    model.train()
    for batch in train_dataloader:
        batch = {k: v.to("cpu") for k, v in batch.items()}
        outputs = model(**batch)
        loss = outputs.loss
        loss.backward()
        optimizer.step()
        optimizer.zero_grad()

    model.eval()
    y_pred = []
    y_label = []
    for batch in test_dataloader:
        batch = {k: v.to("cpu") for k, v in batch.items()}
        with torch.no_grad():
            outputs = model(**batch)
        logits = outputs.logits
        predictions = torch.argmax(logits, dim=-1)
        y_pred.extend(predictions.numpy().tolist())
        y_label.extend(batch["labels"].numpy().tolist())
    print(epoch,accuracy_score(y_label,y_pred))

## predict
text = "text1"
text_encoded = tokenizer(text, return_tensors="pt")
text_encoded = {k: v.to("cpu") for k,v in text_encoded.items()}
outputs = model(**text_encoded)
sigmoid = torch.nn.Sigmoid()
probs = sigmoid(logits.squeeze().cpu())
predictions = np.zeros(probs.shape)
predictions[np.where(probs >= 0.5)] = 1
## turn predicted id's into actual label names
predicted_labels =mlb.inverse_transform(np.array([predictions]))
print(predicted_labels)
```

ref:
https://discuss.huggingface.co/t/multilabel-text-classification-trainer-api/11508
https://github.com/NielsRogge/Transformers-Tutorials/blob/master/BERT/Fine_tuning_BERT_(and_friends)_for_multi_label_text_classification.ipynb
