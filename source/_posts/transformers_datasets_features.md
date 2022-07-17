
# what

Features defines the internal structure of a dataset. It is used to specify the underlying serialization format.
The Features format is simple: `dict[column_name, column_type]`

```python
from datasets import load_dataset
dataset = load_dataset('glue', 'mrpc', split='train')
dataset.features
# {'idx': Value(dtype='int32', id=None),
#  'label': ClassLabel(num_classes=2, names=['not_equivalent', 'equivalent'], names_file=None, id=None),
#  'sentence1': Value(dtype='string', id=None),
#  'sentence2': Value(dtype='string', id=None),
# }
```

`Value` feature tells:

- The idx data type is int32.
- The sentence1 and sentence2 data types are string.

`ClassLabel` feature tells:
Datasets the label column contains two classes. The classes are labeled `not_equivalent` and `equivalent`. Labels are stored as integers in the dataset. When you retrieve the labels, `ClassLabel.int2str()` and `ClassLabel.str2int()` carries out the conversion from integer value to label name, and vice versa.

# create features

```python
from datasets import ClassLabel, Value
new_features = {
    "label":ClassLabel(names=['negative', 'positive']),
    "idx":Value('int64')
}
```

# cast

1. `cast(Features)` 整体转换Features, 再进行转换
2. `cast_column(name,newtype)` 转换指定的某一个column

注意:
不要使用 `dataset['column_name']=ClassLabel(names=["negative", "positive"]) `这种写法

refs [transformers_datasets_process](/transformers_datasets_process/)




# ClassLabel
handle string lable and int label


`create`
```python
ClassLabel(names=['bad', 'ok', 'good']
```

`int2str`
```python
from datasets import load_dataset
ds = load_dataset("rotten_tomatoes", split="train")
ds.features["label"].int2str(0)
'neg'
```

`str2int`
```python
from datasets import load_dataset
ds = load_dataset("rotten_tomatoes", split="train")
ds.features["label"].str2int('neg')
0
```




refs:
https://huggingface.co/docs/datasets/about_dataset_features
https://huggingface.co/docs/datasets/v2.3.2/en/package_reference/main_classes#datasets.Features
https://huggingface.co/docs/datasets/v2.3.2/en/package_reference/main_classes#datasets.ClassLabel