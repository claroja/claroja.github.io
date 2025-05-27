# process


```python
from datasets import load_dataset
dataset = load_dataset('glue', 'mrpc', split='train')
```

## Sort, shuffle, select, split, and shard
`Sort, shuffle, select, Shard`, 不常用一般在`pandas`中处理

### split
`Dataset.train_test_split()`, return ` ` object ,includes train and test splits

```python
dataset.train_test_split(test_size=0.1)
## {'train': Dataset(schema: {'sentence1': 'string', 'sentence2': 'string', 'label': 'int64', 'idx': 'int32'}, num_rows: 3301),
## 'test': Dataset(schema: {'sentence1': 'string', 'sentence2': 'string', 'label': 'int64', 'idx': 'int32'}, num_rows: 367)}
```


## Rename, remove, cast, and flatten

### rename

`Dataset.rename_column()`

```python
dataset
## Dataset({
##     features: ['sentence1', 'sentence2', 'label', 'idx'],
##     num_rows: 3668
## })
dataset = dataset.rename_column("sentence1", "sentenceA")
dataset = dataset.rename_column("sentence2", "sentenceB")
dataset
## Dataset({
##     features: ['sentenceA', 'sentenceB', 'label', 'idx'],
##     num_rows: 3668
## })

```

### remove

`Dataset.remove_columns()`

```python
dataset
## Dataset({
##     features: ['sentence1', 'sentence2', 'label', 'idx'],
##     num_rows: 3668
## })

dataset = dataset.remove_columns("label")
dataset
## Dataset({
##     features: ['sentence1', 'sentence2', 'idx'],
##     num_rows: 3668
## })

```

### cast

1. `cast(Features)` 先创建好整体的Features, 再进行转换
2. `cast_column(name,newtype)` 转换指定的某一个column

注意:
不要使用 `dataset['column_name']=ClassLabel(names=["negative", "positive"]) `这种写法

```python
dataset.features
## {'sentence1': Value(dtype='string', id=None),
## 'sentence2': Value(dtype='string', id=None),
## 'label': ClassLabel(num_classes=2, names=['not_equivalent', 'equivalent'], names_file=None, id=None),
## 'idx': Value(dtype='int32', id=None)}

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

### flatten
`answers`列中包含了`text`和`answer_start`个子列, `flatten`之后从子列升级为 `answers.text`和`answers.answer_start`

```python
dataset.features
## {'answers': Sequence(feature={'text': Value(dtype='string', id=None), 'answer_start': Value(dtype='int32', id=None)}, length=-1, id=None),
## 'context': Value(dtype='string', id=None),
## 'id': Value(dtype='string', id=None),
## 'question': Value(dtype='string', id=None),
## 'title': Value(dtype='string', id=None)}
dataset.flatten()
## Dataset({
##     features: ['id', 'title', 'context', 'question', 'answers.text', 'answers.answer_start'],
##  num_rows: 87599
## })

```


### Align
`Dataset.align_labels_with_mapping()` function aligns a dataset label id with the label name. 



### Map
`Dataset.map()` allows you to apply a processing function to each example in a dataset, independently or in batches.

参数|描述
--|--
func| func to process data
num_proc| num of cups for multiprocessing
batched|default false, if true, 1000 examples one batch or set the num




```python
updated_dataset = dataset.map(lambda example: {'new_sentence': example['sentence1']}, remove_columns=['sentence1'])
updated_dataset.column_names
['sentence2', 'label', 'idx', 'new_sentence']
```



## export

`Dataset.to_pandas()`
`Dataset.to_dict()`


参考:
https://huggingface.co/docs/datasets/process