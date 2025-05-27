# Timestamp


通常时间戳是指用数字表示的时间, 在pandas里, 时间戳就是日常的时间表示. 而pandas将日常时间戳命名为纪元(epoch)时间戳.


## 创建pandas时间戳


1. 当传入标量时, `pd.to_datetime`和`pd.Timestamp`作用相同, `pd.to_datetime`的优势是有`format`参数.

    ```python
    pd.to_datetime("2010/11/12")
    pd.Timestamp("2010/11/12")
    ```


1. 字符串转换pandas时间戳
    1. `pd.to_datetime(pd.Series(["Jul 31, 2009", "Jan 10, 2010", None]))`
    2. `pd.to_datetime(["2005/11/23", "2010/12/31"])`
    3. `pd.to_datetime("2010/11/12", format="%Y/%m/%d")`
    
    `format`参数具体可参考[strftime-and-strptime](https://docs.python.org/3/library/datetime.html#strftime-and-strptime-behavior)

2. 纪元(epoch)时间戳转换pandas时间戳
    1. pandas时间戳转纪元时间戳
        1. `pd.to_datetime([1349720105, 1349806505, 1349892905, 1349979305, 1350065705], unit="s")`
        2. `pd.to_datetime([1349720105100, 1349720105200, 1349720105300, 1349720105400, 1349720105500], unit="ms",)`
    2. 纪元时间戳转pandas时间戳
        1. `stamps = pd.date_range("2012-10-08 18:15:05", periods=4, freq="D")`
        2. `(stamps - pd.Timestamp("1970-01-01")) // pd.Timedelta("1s")`



## 时间戳使用

[pandas时间戳的组成](https://pandas.pydata.org/docs/user_guide/timeseries.html#time-date-components)















































需要时补充
https://blog.csdn.net/claroja/article/details/103049733