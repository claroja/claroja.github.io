# class

```python
import torch
from transformers import AutoTokenizer
from transformers import AutoModelForSequenceClassification
from datasets import Dataset, ClassLabel, load_metric
from torch.utils.data import DataLoader
from torch.optim import AdamW
from transformers import get_scheduler
import pandas as pd
from pathlib import Path


def load_device(device_name):
    """
    use GPU or CPU?

    Args:
        device_name (str): 'auto' means that will use gpu, if there is.
    Returns:
        torch.device

    """
    if device_name == 'auto':
        return torch.device("cuda" if torch.cuda.is_available() else "cpu")

    else:
        return device_name


def load_tokenizer(model_path):
    """
    load_tokenizer

    Args:
        model_path (str): full model path

    Returns:
        transformers.tokenizer

    """
    return AutoTokenizer.from_pretrained(model_path)


def load_model(model_path,device,num_labels):
    """
    load model

    Args:
        model_path (str): full model path
        device (str): model's device
        num_labels (int): the nums of output

    Returns:
        transformers.model

    """
    return AutoModelForSequenceClassification.from_pretrained(model_path,num_labels=num_labels).to(device)


class BertTrain(object):

    def __init__(self, model_name,task_name,labels,expand=False,train_or_predict="predict",test_size=0.2,device_name='auto'
                ,num_epochs = 5,batch_size = 8):
        """
        init instance

        Args:
            model_name (str): only model name, exclude path.
            task_name (str): is this model for what?
            num_labels (int): nums of output
            labels (list): lables of output, the index is the num of label
            train_or_predict (str): is this for training model or using model for predicting.
                if train, the model_path will be "./pretrained_model/" + model_name, the path to load pretrained model.
                    and new_model_path = "./finetuning_model/" + task_name, the path to save trained model.
                if predict, the mode_path will be "./finetuning_model/" + task_name, the path to load finetuning model.
            test_size (str): if training model, the percentage of train samples of all
            device_name (str): cpu or gpu
            num_epochs (int): how many epochs
            batch_size (int): size of batch
        """
        self.task_name = task_name
        self.model_name = model_name
        self.dir_path = "./finetuning_model/" if train_or_predict == "predict" else "./pretrained_model/"
        self.model_path = self.dir_path + task_name if train_or_predict == "predict" else self.dir_path + model_name
        self.device = load_device(device_name)
        self.tokenizer = load_tokenizer(self.model_path)
        self.model = load_model(self.model_path, self.device, len(labels))
        self.classLabel = ClassLabel(names=labels)
        self.expand = expand

        if train_or_predict == "predict":  # delete method irrelevant to predict mod
            pass
##             delattr(__class__,"data_process")
##             delattr(__class__, "train")
##             delattr(__class__, "one_stop_train")
        else:  # add attribute relevant train mod
            self.num_epochs=num_epochs
            self.batch_size=batch_size
            self.test_size = test_size
            self.new_model_path = "./pre_finetuning_model/" + task_name

    def data_process(self,df):
        """
        preprocess data.
            1. split dataframe into train and test by test_size and stratify by "labels"
            2. tokenize "text"
            3. return [train_dataloader,eval_dataloader,df]

        Args:
            df (pandas.DataFrame): the df mast have columns named "text" and "labels"

        Returns:
            [train_dataloader,eval_dataloader,df]

        """
        text_column_name = 'text'
        labels_column_name = 'labels'
        assert text_column_name in df.columns
        assert labels_column_name in df.columns

        df_with_index = df.reset_index()
        df_for_train = df_with_index.loc[:, ["index",text_column_name, labels_column_name]]

        dataset = Dataset.from_pandas(df_for_train)
        dataset = dataset.cast_column(labels_column_name, self.classLabel)
        datadict = dataset.train_test_split(test_size=self.test_size, stratify_by_column= labels_column_name,seed=10)
        
        test_df = datadict["test"].to_pandas()
        train_df = datadict["train"].to_pandas()
        print("hello1")
        # expand
        if self.expand:
            label_id = self.classLabel.str2int("youchoice")
            print(label_id)
            df_expand = pd.concat([*([train_df[train_df["labels"] == label_id]] *10)])
            print(df_expand)
            del df_expand["index"]
            dict_expand = df_expand.to_dict(orient="records")
            for item in dict_expand:
                datadict["train"] = datadict["train"].add_item(item)
        print(datadict)
        # expand

        df_with_index.loc[df_with_index["index"].isin(test_df["index"]),"splitmark"] = "test"
        df_with_index.loc[df_with_index["index"].isin(train_df["index"]), "splitmark"] = "train"
        df_with_splitmark = df_with_index.set_index("index")

        tokenized_datadict = datadict.map(lambda x:self.tokenizer(x[text_column_name], padding='max_length', truncation=True, max_length=512,),
                                        batched=True,remove_columns = ["index",text_column_name])
        tokenized_datadict.set_format("torch")
        train_dataloader = DataLoader(tokenized_datadict["train"], shuffle=True, batch_size=4)
        eval_dataloader = DataLoader(tokenized_datadict["test"], batch_size=4)

        return train_dataloader,eval_dataloader,df_with_splitmark

    def train(self,train_dataloader,eval_dataloader,df_with_splitmark):
        """
        train the model
        Args:
            train_dataloader:
            eval_dataloader:

        Returns:
            train the self.model

        """
        optimizer = AdamW(self.model.parameters(), lr=5e-5)
        num_training_steps = self.num_epochs * len(train_dataloader)
        lr_scheduler = get_scheduler(
            name="linear", optimizer=optimizer, num_warmup_steps=0, num_training_steps=num_training_steps
        )

        for epoch in range(self.num_epochs):
            print(epoch)
            self.model.train()
            for batch in train_dataloader:
                batch = {k: v.to(self.device) for k, v in batch.items()}
                outputs = self.model(**batch)
                loss = outputs.loss

                loss.backward()
                optimizer.step()
                lr_scheduler.step()
                optimizer.zero_grad()

            self.model.eval()
            for batch in eval_dataloader:
                batch = {k: v.to(self.device) for k, v in batch.items()}
                with torch.no_grad():
                    outputs = self.model(**batch)  # -1 would thus map to the last dimension, -2 to the preceding one, etc.
                logits = outputs.logits
                predictions = torch.argmax(logits, dim=-1)
            print(epoch, loss)

            eval_df = df_with_splitmark.loc[df_with_splitmark["splitmark"]=="test"].copy()
            for i in eval_df.index:
                result = self.predict(eval_df.loc[i]['text'])
                eval_df.loc[i,'predict_num']=result["num"]
                eval_df.loc[i, 'predict_labels'] = result["labels"]
            confusion_df=self.evaluate(eval_df["labels"],eval_df["predict_labels"])
            self.save_all(df_with_splitmark,eval_df,confusion_df,epoch)
    
    def one_stop_train(self,df):
        """
        train, evaluate and save model&tokenizer&data

        Args:
            df: original dataFrame

        Returns:
            none

        """
        [train_dataloader,eval_dataloader,df_with_splitmark] = self.data_process(df)
        self.train(train_dataloader,eval_dataloader,df_with_splitmark)

    def predict(self,text):
        """
        predict using model

        Args:
            text (str): one sentence

        Returns (dict):
            "num": lable mapped to num
            "labels": num mapped to label
        """
        self.model.eval()
        data = self.tokenizer(text, truncation=True,max_length=512)
        data = {k: torch.tensor([v]).to(self.device) for k, v in data.items()}
        with torch.no_grad():
            outputs = self.model(**data)
        result = torch.argmax(outputs.logits, dim=-1).to("cpu").numpy()
        result = int(result[0])
        return {"num":result,"labels":self.classLabel.int2str(result)}

    def evaluate(self,labels_series,predictLabels_series):
        """
        create confusion matrix.

        Args:
            labels_series (pandas.Series): marked labels
            predictLabel_series (pandas.Series): predict labels

        Returns:
            confusion_df (pandas.DataFrame): confusion df that inclues all class recall and precision

        """
        confusion_df = pd.crosstab(labels_series,predictLabels_series, dropna=False)
        cha = set(confusion_df.columns) ^ set(confusion_df.index)
        if len(cha)>0:
            if(len(confusion_df.index)>len(confusion_df.columns)):
                confusion_df.loc[:,cha] =0
            else:
                confusion_df.loc[cha,:]=0
        confusion_df = confusion_df.reindex(index=self.classLabel.names,columns=self.classLabel.names)
        precision = confusion_df.apply(lambda x: x[x.name] / x.sum() if x.sum()!=0 else 0)
        recall = confusion_df.apply(lambda x: x[x.name] / x.sum() if x.sum()!=0 else 0,axis=1)
        confusion_df.loc["precision"]= precision
        confusion_df.loc[:,"recall"]=recall
        return confusion_df

    def save_all(self,df_with_splitmark,eval_df,confusion_df,epoch):
        new_model_path_with_epoch = f"{self.new_model_path}_{epoch}/"
        path = Path(f"./{new_model_path_with_epoch}")
        path.mkdir()
        self.model.save_pretrained(new_model_path_with_epoch)
        self.tokenizer.save_pretrained(new_model_path_with_epoch)
        df_with_splitmark.to_csv(f"{new_model_path_with_epoch}df_with_splitmark.csv")
        eval_df.to_csv(f"{new_model_path_with_epoch}eval_df.csv")
        confusion_df.to_csv(f"{new_model_path_with_epoch}confusion_df.csv")





```