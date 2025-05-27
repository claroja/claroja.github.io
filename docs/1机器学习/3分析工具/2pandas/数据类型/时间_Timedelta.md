# Timedelta
两个pandas时间戳的绝对差值. 类似于标准库的`datetime.timedelta`.

## API




### 构造参数


``` python
class pandas.Timedelta(
    value=<object object>,  # Timedelta, timedelta, np.timedelta64, str, or int
    unit=None,              # str, default ‘ns’. 可选'W', 'day', 'h', 'm', 's', 'ms', 'us', 'ns'
    **kwargs)
```


```python
import pandas as pd
friday = pd.Timestamp("2018-01-05")
(friday + 2 * pd.offsets.BDay()).day_name()  # 'Tuesday'

(friday + pd.Timedelta(days=2)).day_name()  # `Sunday`

```

                                      


## 参考
1. https://pandas.pydata.org/docs/reference/api/pandas.Timedelta.html#pandas.Timedelta



