# 数据类型及转换


## pandas的数据类型
类型|类型对象|类型创建|简称
--|--|--|--
数字|Int64Dtype,...|直接写|'Int8', 'Int16', 'Int32', 'Int64', 'UInt8', 'UInt16', 'UInt32', 'UInt64',float16, float32, float64, float128
时间|DatetimeTZDtype|Timestamp|`datetime64[ns, <tz>]`,`timedelta64[ns]`
字符串|StringDtype|str|'string'
布尔|BooleanDtype|bool|'boolean'

### 时间
```python
import pandas as pd
import numpy as np
import datetime


## 创建pandas时间格式 datetime64[ns]的四种方法
pd.to_datetime('1/1/2018')  # datetime64[ns]
pd.Timestamp('2018-01-05')  # datetime64[ns]
pd.to_datetime(np.datetime64('2018-01-01'))  # datetime64[ns]
pd.to_datetime(datetime.datetime(2018, 1, 1))  # datetime64[ns]

pd.date_range('2018-01-01', periods=3, freq='H')


## 创建pandas时间格式timedelta64[ns]的方法
pd.to_timedelta('1 days')
pd.to_datetime('1/1/2018') + pd.to_timedelta('1 days')
```


## pandas的缺失值
numeric类型缺失值是`np.NaN`而datetime和timedelt类型的缺失值是`pd.NaT`,这是两个特殊的值.不能用来做布尔==等值判断==,也即是说`np.NaN == np.NaN`返回值为False,`pd.NaT`也是一样的.
`np.NaN`可以转换为`None`,而`pd.NaT`不能转换为`None`
类型|缺失值|描述
--|--|--
int| np.NaN|	int8, int16, int32, int64
float| np.NaN|	
bool| |bool
object||string
timedelta|pd.NaT|
datatime|pd.NaT|datetime64[ns]

```python
import pandas as pd
import numpy as np
s = pd.Series(['apple', '1.0', '2','2019-01-02',1, False,None,pd.Timestamp('2018-01-05')])

## 缺失值的比较 np.NaN == np.NaN返回是False
a = pd.to_numeric(s, errors='coerce')  # 将时间字符串和bool类型转换为数字,其他均转换为NaN
b = pd.to_numeric(s, errors='coerce')  # 将时间字符串和bool类型转换为数字,其他均转换为NaN
a==b

a[a==np.NaN] # 索引不到np.NaN
a[a.isnull()] = None # 能索引到,但是不能赋值为None
a[a.isna()] =None # 能索引到,但是不能赋值为None

a = a.where(a.notnull(), None) # 可以转换
b = b.where(b.notnull(), None)
a == b  # 但是Series里的None不能比较,返回False,这个坑太大了,在Python中None == None 返回是Ture

a[a.isnull()] = -1000 # 可以转换
a[a.isna()] = -1000 # 可以转换
a = a.where(a.notnull(), -10000) # 可以转换
b = b.where(b.notnull(), -10000) # 可以转换
a==b # 可以判断
```



## 转换
pandas使用object类型存储字符串,如果一列有多个类型,也是用object存储,这时每个单元格保持自己的类型
数据转换|描述
--|--
pd.to_numeric()|转换为numeric类型(int,float),然后通过`astype`转换为bool类型
pd.to_datetime()|转换为datetime类型(datetime64[ns]),就是时间戳
pd.to_timedelta()|转换为timedelta(timedelta64[ns])
astype('object')|一般不使用此方法, 转换为字符串类型

使用转换函数可以传递`error`参数,
参数值|描述
--|--
errors='raise'|默认,任何转换错误都会终止
errors='coerce'|忽略错误,并将有问题的数据进行如下转换:时间格式转换为`pd.NaT`,numeric转换为`np.nan`
errors='ignore'|忽略错误,并且不做任何转换


1. `to_numeric`

   ```python
    import pandas as pd
    import numpy as np
    s = pd.Series(['apple', '1.0', '2','2019-01-02',1, False,None,pd.Timestamp('2018-01-05')])

    # to_numeric是在object,时间格式中间做转换,然后再使用astype做numeric类型的内部转换
    pd.to_numeric(s, errors='raise') # 遇到非数字字符串类型报错,bool类型报错,时间类型转换为int
    pd.to_numeric(s, errors='ignore') # 只对数字字符串转换,其他类型一律不转换,包含时间类型
    pd.to_numeric(s, errors='coerce')  # 将时间字符串和bool类型转换为数字,其他均转换为NaN

    # downcast 可以进一步转化为int或者float
    pd.to_numeric(s) # 默认float64类型
    pd.to_numeric(s, downcast='signed') # 转换为整型

    # astype中的error没有`coerce`选项,所以只适合`numeric`内部类型的转换,比如将int32转换为int64,int32转换为float32
    # 而不适合在object,时间格式之间做转换,
    s.astype('int32',errors='raise')
    s.astype('int32',errors='ignore')  # 对object无效,astype只能对numeric类型生效
    ```

2. `to_datetime`
    ```python
    import pandas as pd
    import numpy as np
    s = pd.Series(['apple', '1.0', '2','2019-01-02',1, False,None,pd.Timestamp('2018-01-05')])
    pd.to_datetime(s, errors='raise')  # 只转换时间字符串
    pd.to_datetime(s, errors='ignore') # 只转换时间字符串
    pd.to_datetime(s, errors='coerce') # 只转换时间字符串

    a = pd.to_datetime(s, errors='coerce') # 只转换时间字符串
    b = pd.to_datetime(s, errors='coerce') # 只转换时间字符串
    a == b

    a[a==pd.NaT] # 索引不到pd.NaT
    a[a.isnull()] = None # 能索引到,但是不能赋值为None
    a[a.isna()] =None # 能索引到,但是不能赋值为None

    a = a.where(a.notnull(), None)  # 不能转换为None
    b = a.where(a.notnull(), None)  # 不能转换为None
    a == b

    a = a.where(a.notnull(), np.datetime64("1949-10-1"))  # 转换为默认值
    b = a.where(a.notnull(), np.datetime64("1949-10-1"))  # 转换为默认值进行比较
    a == b

    ```

3. `to_timedelta`

    ```python
    pd.to_timedelta('1 days')
    ```

4. `to_string`

    ```python
    import pandas as pd
    import numpy as np
    s = pd.Series(['apple', '1.0', '2','2019-01-02',1, False,None,pd.Timestamp('2018-01-05')])
    s.str[0]  # int,bool,None,time都没有转换过来,返回了np.NaN
    s = s.astype('str')# 将int,bool,None,time都转换了过来
    s.str[0]

    ```

5. `to_bool`
    ```python
    import pandas as pd
    import numpy as np
    s = pd.Series(['apple', '1.0', '2','2019-01-02',1,0,-1,np.NaN,False,None,pd.Timestamp('2018-01-05')])
    s = s.astype('bool')
    s

    ```

    其他类型|布尔类型
    --|--
    非空字符串|True
    空字符串|False
    非0数字|True
    0|False
    ==np.NaN==|True
    ==pd.NaT==|True
    None|False
    timestamp|True

https://pandas.pydata.org/pandas-docs/stable/getting_started/basics.html#defaults
https://pandas.pydata.org/docs/user_guide/basics.html#dtypes