# valueCounts

use `value_counts` and `explode` to count the nested data.

```python
s = pd.Series([[1, 2, 3], 'foo', [], [3, 4]])
s.explode()
s.explode().value_counts()
```

refs:
https://pandas.pydata.org/docs/reference/api/pandas.Series.value_counts.html
https://pandas.pydata.org/docs/reference/api/pandas.Series.explode.html
https://stackoverflow.com/questions/51813266/get-unique-values-from-pandas-series-of-lists