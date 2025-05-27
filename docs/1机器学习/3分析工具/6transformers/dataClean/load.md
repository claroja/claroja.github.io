# load

ways for loading data:

1. The Hub without a dataset loading script
2. Local loading script
3. Local files
4. In-memory data
5. Offline
6. A specific slice of a split


in practice, loading in-memory data, eg: pandas, dict is common

```python
from datasets import Dataset
my_dict = {"a": [1, 2, 3]}
dataset = Dataset.from_dict(my_dict)

## Dataset({
##     features: ['a'],
##     num_rows: 3
## })
```


```python
from datasets import Dataset
import pandas as pd
df = pd.DataFrame({"a": [1, 2, 3]})
dataset = Dataset.from_pandas(df)

## Dataset({
##     features: ['a'],
##     num_rows: 3
## })
```


notices:
transformers cant't auto recognize class column, so we should define it by `castColumn` or `cast`.[参考](/transformers_tokenizer_NLP/)

`castColumn`
`dataset = dataset.cast_column(labels_column_name, self.classLabel)`

`cast`

```python
from datasets import ClassLabel, Value
new_features = dataset.features.copy()
new_features["label"] = ClassLabel(names=["negative", "positive"])
new_features["idx"] = Value("int64")
dataset = dataset.cast(new_features)
## dataset.features
## {'sentence1': Value(dtype='string', id=None),
## 'sentence2': Value(dtype='string', id=None),
## 'label': ClassLabel(num_classes=2, names=['negative', 'positive'], names_file=None, id=None),
## 'idx': Value(dtype='int64', id=None)}
```



refs:
https://huggingface.co/docs/datasets/loading