# Dateoffset


两个pandas时间戳的相对差值







```python
import pandas as pd
friday = pd.Timestamp("2018-01-05")
(friday + 2 * pd.offsets.BDay()).day_name()  # 'Tuesday'

(friday + pd.Timedelta(days=2)).day_name()  # `Sunday`

```








## 参考
1. https://dateutil.readthedocs.io/en/stable/relativedelta.html
2. https://pandas.pydata.org/docs/user_guide/timeseries.html#dateoffset-objects
3. https://pandas.pydata.org/docs/reference/api/pandas.tseries.offsets.DateOffset.html#pandas.tseries.offsets.DateOffset






