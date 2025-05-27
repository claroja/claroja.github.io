# dtypes


pandas的数据类型:

pandas类型|python类型|array类型|字符串别名
--|--|--|--
pd.Int`XX`Dtype|int|arrays.IntegerArray|'Int8', 'Int16', 'Int32', 'Int64', 'UInt8', 'UInt16', 'UInt32', 'UInt64'
pd.Float`XX`Dtype|float|arrays.FloatingArray|'Float32', 'Float64'
pd.StringDtype|str|arrays.StringArray|'string'
pd.BooleanDtype|bool|arrays.BooleanArray|'boolean'
pd.DatetimeTZDtype|none|arrays.DatetimeArray|datetime64[ns, tz]
Categorical||Categorical|'category'

另外还有一些不常用的数据类型, [参考](https://pandas.pydata.org/docs/user_guide/basics.html#dtypes)

✨object 类型可以存储任意的类型, 包含字符串. 

举例:


```python
df = pd.DataFrame({
    'int': [1],
    'float': [1.0],
    'string': ['foo'],
    'datetime': [pd.Timestamp('20180310')]
})
df.dtypes

# int                  int64
# float              float64
# string              object
# datetime    datetime64[ns]
# dtype: object

```

```python
df['string'] = df['string'].astype('string')
df.dtypes

# int                  int64
# float              float64
# string              string
# datetime    datetime64[ns]
# dtype: object
```

## 参考
1. https://pandas.pydata.org/docs/user_guide/basics.html#dtypes