# Period

带有间距(Period)的pandas时间戳, 简化了pandas时间戳的计算



## 最佳实践

```python
pd.Period("2012-1-1", freq="D") + 1  # Period('2012-01-02', 'D')
pd.Timestamp("2012-1-1") + pd.Timedelta(days=1)  # Timestamp('2012-01-02 00:00:00')
```


## 参考
1. https://pandas.pydata.org/docs/user_guide/timeseries.html#time-span-representation
