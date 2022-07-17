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

# Dataset({
#     features: ['a'],
#     num_rows: 3
# })
```


```python
from datasets import Dataset
import pandas as pd
df = pd.DataFrame({"a": [1, 2, 3]})
dataset = Dataset.from_pandas(df)

# Dataset({
#     features: ['a'],
#     num_rows: 3
# })
```






refs:
https://huggingface.co/docs/datasets/loading