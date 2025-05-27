# datetime

timezone: 时区
aware time: 有时区时间
naive time: 无时区时间



## 总结
1. 时间戳,datetime,字符串三者的转换关系

    ```mermaid
    graph LR;
    时间戳 -->|fromtimestamp类方法| datetime -->|strftime实例方法或isoformat实例方法| 字符串;
    字符串 -->|strptime类方法或fromisoformat类方法| datetime -->|timestamp实例方法| 时间戳;
    ```

2. `date`对象, `time`对象, `datetime`对象都是`datetime`模块的一部分, 一般使用`datetime`对象的`date()`和`time()`方法获得两个对象, 而不是直接使用

    ```mermaid
    graph LR;
    datetime模块 --> datetime对象 & timedelta对象;
    datetime对象 --> date对象 & time对象
    ```
    
## datetime对象
datetime对象包含了date对象和time对象.

```python
class datetime.datetime(year, month, day, hour=0, minute=0, second=0, microsecond=0, tzinfo=None, *, fold=0)
```


### 构造方法

参数|描述
--|--
year|MINYEAR <= year <= MAXYEAR,
month|1 <= month <= 12,
day|1 <= day <= number of days in the given month and year,
hour|0 <= hour < 24,
minute|0 <= minute < 60,
second|0 <= second < 60,
microsecond|0 <= microsecond < 1000000,
tzinfo|fold in [0, 1].

### 类方法

方法|描述
--|--
`datetime.today()`|等价于`datetime.fromtimestamp(time.time())`
`datetime.now(tz=None)`|返回本地时区的时间  等价于`datetime.fromtimestamp(time.time(),tz=None)`
`datetime.fromtimestamp(timestamp, tz=None)`|
`datetime.combine(date, time, tzinfo=self.tzinfo)`|
`datetime.fromisoformat(date_string)`|
`datetime.strptime(date_string, format)`|


### 实例属性

属性|描述
--|--
datetime.year|
datetime.month|
datetime.day|
datetime.hour|
datetime.minute|
datetime.second|
datetime.microsecond|
datetime.tzinfo|
datetime.fold|

### 实例方法

方法|描述
--|--
datetime.date()|返回`date`对象
datetime.time()|返回`时间`对象, tzinfo为`None`, 即无时区信息
datetime.replace()|可以替换datetime的属性, 特别的是通过控制`tzinfo`可以在naive 之间转化 aware 
datetime.astimezone()|重新设置时区, 时间会跟着变化
datetime.utcoffset()|如果`tzinfo`是`None`则返回`None`, 否则返回时区偏移量
datetime.dst()|如果`tzinfo`是`None`则返回`None`, 否则返回是否夏令时
datetime.tzname()|如果`tzinfo`是`None`则返回`None`, 否则返回时区名称
datetime.timetuple()|返回`struct_time对象`
datetime.utctimetuple()|
datetime.timestamp()|返回时间戳
datetime.weekday()|返回星期几, Monday是0, Sunday是6
datetime.isoweekday()|返回iso标准星期几, Monday是1, Sunday是7
datetime.isoformat()|返回iso标准字符串格式时间
datetime.strftime(format)|



## iso格式

人类难以理解时间戳, 所以电脑会先将这个数字转换为UTC时间, 然后根据time zone转化为本地时间(local time)
`Internet Assigned Numbers Authority (IANA)`保存了所有的时区信息, 比如, 在冬季, 夏令时(dst)未起到作用时, US Eastern时区会有5小时的偏移量(UTC-5).

不同地区书写时间的习惯不同, 比如:
1. United States, 习惯是月日年, 01-31-2020
2. Europe , 习惯是日月年, 31-01-2020
为了规范写法, `International Organization for Standardization, ISO`确定了`ISO 8601`标准, 书写格式是年月日时分秒, `YYYY-MM-DD HH:MM:SS`

```python
datetime.now().isoformat()  # '2022-11-22T14:31:59.331225'
datetime.now().isoformat(sep=" ")  # '2022-11-22 14:31:59.331225'
```




## tz(time zone)
### 时区基本理解
`datetime.tzinfo`的抽象类来表示时区, 我们需要定义子类来实现它. `pytz`包实现了这个抽象类. 例如`datetime.now()`返回了本地时间(不包含时区), 我们可以通过`pytz`获得指定时区的时间.


我们经常使用以下方法:

1. `pytz.utc`: Get the standard UTC timezone
2. `pytz.timezone('region')`: Create the timezone object of a particular region
3. `pytz.astimezone()`: Convert the time of a particular time zone into another time zone

`datetime`对象在创建时可以指定或不指定timezones. 指定的称为`aware`, 不指定的称为`naive`

```python
from datetime import datetime
import pytz

## current Datetime
unaware = datetime.now()
print('Timezone naive:', unaware)  # Timezone naive: 2023-03-06 18:20:55.300686

## Standard UTC timezone aware Datetime
## 标准UTC时间, 偏移量是 +00:00

aware = datetime.now(pytz.utc)
print('Timezone Aware:', aware)  # Timezone Aware: 2023-03-06 10:20:55.335687+00:00

## US/Central timezone datetime
## CDT时间(偏移UTC时间), 偏移量是 -05:00

aware_us_central = datetime.now(pytz.timezone('US/Central'))
print('US Central DateTime', aware_us_central) # US Central DateTime 2023-03-06 04:20:55.365686-06:00
```

### 有无时区之间的转换


#### 将无时区的时间转换为有时区的时间
```python
from datetime import datetime
import pytz

unaware = datetime(2021, 6, 15, 8, 45, 17, 5)
print('Timezone naive:', unaware)

## Convert unaware Datetime to UTC timezone aware Datetime
aware = unaware.replace(tzinfo=pytz.UTC)
print(aware)
```



#### 将有时区的时间转换为易读模式

```python
from datetime import datetime
import pytz

datetime_india = datetime.now(pytz.timezone('Asia/Kolkata'))
print("Formatted DateTime in IST : ", datetime_india.strftime('%Y:%m:%d %H:%M:%S %Z %z')) # Output 2021:07:08 17:53:23 IST +0530
```



### 获得时间的时区信息
1. `tzinfo.tzname(dt)`获得时区的名称
2. `tzinfo.utcoffset(dt)`获得时区的偏移量
3. `tzinfo.dst(dt)`获得时区的daylight saving time (DST offset) adjustment


```python
from datetime import datetime
import pytz

## timezone: US Central Time
dt_us_central = datetime.now(pytz.timezone('America/Mexico_City'))
print("US Central DateTime:", dt_us_central.strftime("%Y:%m:%d %H:%M:%S %Z %z"))  # US Central DateTime: 2023:03:06 04:33:57 CST -0600

## Get current TimeZone name
print(dt_us_central.tzname())

## Get UTC Offset
print(dt_us_central.utcoffset())

## Get the daylight saving time (DST offset) adjustment
print(dt_us_central.dst())
```




### 不同时区之间的转换
`datetime.astimezone()`进行时区间的转换


```python
import datetime
import pytz

## UTC timezone Datetime
dt_local = datetime.datetime.now(pytz.utc)
print("UTC DateTime:", dt_local.strftime("%Y:%m:%d %H:%M:%S %Z %z"))

## convert UTC timezone to 'US/Central'
dt_us_central = dt_local.astimezone(pytz.timezone('US/Central'))
print("US Central DateTime:", dt_us_central.strftime("%Y:%m:%d %H:%M:%S %Z %z"))

## Convert 'US/Central' timezone to US/Eastern
dt_us_eastern = dt_us_central.astimezone(pytz.timezone('America/New_York'))
print("US Eastern DateTime:", dt_us_eastern.strftime("%Y:%m:%d %H:%M:%S %Z %z"))

## Convert US/Eastern timezone to IST (India) timezone
dt_ind = dt_us_eastern.astimezone(pytz.timezone('Asia/Kolkata'))
print("India DateTime:", dt_ind.strftime("%Y:%m:%d %H:%M:%S %Z %z"))
```




### 获得所有时区

```python
pytz.all_timezones  # 获得所有时区
pytz.common_timezones  # 获得常用时区
pytz.country_names  # 获得所有国家名称
pytz.country_timezones['US']  # 获得指定国家的时区
```




## 处理本地时间
<font style="background: yellow">建议使用UTC作为基础的timezone来代替本地时间</font>

```python
from datetime import datetime

import pytz

fmt = '%Y-%m-%d %H:%M:%S %Z%z'

## Indian Standard Time
tz_india = pytz.timezone('Asia/Kolkata')
ist_local = tz_india.localize(datetime.now())
print("Indian Standard Time::", ist_local.strftime(fmt))

## Europe/Amsterdam Time
amdam_tz = pytz.timezone('Europe/Amsterdam')
dt = datetime(1983, 8, 3, 2, 0, 0)
cest_local = amdam_tz.localize(dt, is_dst=True)
print("Amsterdam with daylight saving time::", cest_local.strftime(fmt))

## Day Light Saving
print("Daylight saving time in amsterdam on 3/8/83::", cest_local.tzinfo.dst(cest_local))
```



## combine


```python
from datetime import date, time, datetime
today = date.today()  # datetime.date(2020, 1, 24)
now = datetime.now()
now  # datetime.datetime(2020, 1, 24, 14, 4, 57, 10015)
current_time = time(now.hour, now.minute, now.second)
datetime.combine(today, current_time)  # datetime.datetime(2020, 1, 24, 14, 4, 57)
```


## 字符串与时间的转化
datatime 有 fromisoformat, strptime, strftime
date 只有fromisoformat, strftime, 没有strptime


```python
from datetime import date
date.fromisoformat("2020-01-31")
```


```python
from datetime import datetime
date_string = "01-31-2020 14:45:37"
format_string = "%m-%d-%Y %H:%M:%S"
datetime.strptime(date_string, format_string)
```



### 其他格式转化成时间
其他格式转换为时间格式有三种情况:
1. 时间戳, 时间戳的单位是秒(其他语言单位可能是毫秒, 注意转换)
`datetime.fromtimestamp(1665385944.000616)`
获取当前时间有简便的方法:`datetime.now()`该方法等价于`datetime.fromtimestamp(time.time())`本质都是通过时间戳获取时间
2. 字符串, 要指定字符串格式(裂解p表示point to, 从字符串转化为时间)
`datetime.strptime("2020-01-02","%Y-%m-%d") # 从字符串中获取`
3. 整形, 分别输入年月日时分秒信息
`datetime(2022,10,30,22,12,34,1111)`

### 时间转化为其他格式
1. 转化为时间戳
```python
now = datetime.now()
now.timestamp() 
```

2. 转化为字符串
```python
now = datetime.now()
now.strftime("%Y-%m-%d") # 转化为字符串
```


3. 转为为整形, 年月日时分秒

属性|描述
--|--
datetime.year|在MINYEAR和MAXYEAR之间
datetime.month|在 1 到 12 之间，包括 1 和 12
datetime.day|在 1 到给出的年份和月份之间的天数
datetime.hour|在range(24)之间
datetime.minute|在range(60)之间
datetime.second|在range(60)之间
datetime.microsecond|在range(1000000)之间
datetime.weekday()|返回一星期中的第几天，其中星期一是0，星期日是6
date.isocalendar()|返回一年中的第几周


格式

Code|Description|Output
--|--|--
%a|周的缩写|Sun, Mon, …
%A|周的全称|Sunday, Monday, …
%w|数字表示的周|0, 1, 3, …, 6
%d|0填充的每月的天数|01, 02, …, 31
%-d|不填充的每月的天数|1, 2, …, 30
%b|月的简称|Jan, Feb, …, Dec
%B|月的全称|January, February, …
%m|0填充的月的数字表示|01, 02, …, 12
%-m|不填充的月的数字表示|1, 2, …, 12
%y|不包含世纪的0填充的数字年份|00, 01, …, 99
%-y|不包含世纪的不填充的数字年份|0, 1, …, 99
%Y|包含世纪的数字年份|2015, 2021 etc.
%H|0填充的24小时|00, 01, …, 23
%-H|不填充的24小时|0, 1, …, 23
%I|0填充的12小时|01, 02, …, 12
%-I|不填充的12小时|1, 2, … 12
%p|Locale’s AM or PM.|AM, PM
%M|Minute in decimal number from 00 to 59.|00, 01, …, 59
%-M|Minute as a decimal number.|0, 1, …, 59
%S|Second in decimal number from 00 to 59|00, 01, …, 59
%-S|Second as a decimal number.|0, 1, …, 59
%f|Microsecond as a decimal number with a zero appended on the left.|000000 – 999999
%z|UTC offset in the form +HHMM or -HHMM.| 
%Z|Time zone name.| 
%j|The day of the year as a decimal number with a zero appended.|001, 002, …, 366
%-j|The Day of the year as a decimal number.|1, 2, …, 366
%U|The year’s week number (Sunday as the first day of the week).|00, 01, …, 53
%W|Week number of the year (Monday as the first day of the week).|00, 01, …, 53



## 应用

对称时间
```python
from datetime import date
center_date = date.fromisoformat("2023-03-02")
now_date = date.today()
delta_date = now_date - center_date
symmetry_date = center_date - delta_date
```


参考:
https://www.pythonpip.com/python-tutorials/how-to-use-strftime-and-strptime-in-python/
https://realpython.com/python-time-module/
https://realpython.com/python-datetime/
https://realpython.com/python-get-current-time/
https://pynative.com/python-timezone/