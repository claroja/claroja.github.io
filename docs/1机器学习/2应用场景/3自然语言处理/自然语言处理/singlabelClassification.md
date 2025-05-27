# singlabelClassification


```python
import pandas as pd
from datasets import Dataset,DatasetDict
from transformers import AutoTokenizer
from torch.utils.data import DataLoader
from torch.optim import AdamW
import torch
from transformers import AutoModelForSequenceClassification
from sklearn.model_selection import train_test_split
from sklearn import preprocessing
from sklearn.metrics import accuracy_score



## 1. create test data
df = pd.DataFrame({
    "text":["text0","text1","text2","text3","text4","text5","text6"],
    "target":["a","b","b","a","b","a","a"]
})

## 2. label the target

labels = df["target"].value_counts().index.tolist()
le = preprocessing.LabelEncoder()
le.fit(labels)
le.classes_ = ["a","b"] # specify the lable order
df["labels"] = le.transform(df["target"])
text_column_name = "text"
labels_column_name = "labels"

## 3. split into train and test
df_with_index = df.reset_index()
X_train, X_test, y_train, y_test = train_test_split(df_with_index[["index",text_column_name]].values,df_with_index[labels_column_name].values,test_size=0.5)
df_with_index.loc[df_with_index["index"].isin(X_train[:,0]),"splitmark"] = "test"
df_with_index.loc[df_with_index["index"].isin(X_test[:,0]), "splitmark"] = "train"
df_with_splitmark = df_with_index.set_index("index")


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
            outputs = model(**batch)  # -1 would thus map to the last dimension, -2 to the preceding one, etc.
        logits = outputs.logits
        predictions = torch.argmax(logits, dim=-1)
        y_pred.extend(predictions.numpy().tolist())
        y_label.extend(batch["labels"].numpy().tolist())
    print(epoch,accuracy_score(y_label,y_pred))
```

