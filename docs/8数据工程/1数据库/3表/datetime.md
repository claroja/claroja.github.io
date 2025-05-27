# datetime

## 1.应用
1.如果数据库中时间格式是（2013-01-12 23:23:56—时间精确到秒）
```sql
select * from product where timestamp(add_time) = '2013-01-12 23:23:56';
select * from product where timestamp(add_time) between '2013-01-12 03:23:56' and '2013-01-12 23:23:56';
```
如果时间格式是（2013-01-12）则不能直接使用
```sql
select * from product where add_time = '2013-01-12'
```
因为`add_time = '2013-01-12'`表示的是`'2013-01-12 00:00:00'`，所以应该使用：
```sql
select * from product where Date(add_time) = '2013-01-12'
```

## type

Data Type|	“Zero” Value
--|--
DATE|'0000-00-00'
TIME|'00:00:00'
DATETIME|'0000-00-00 00:00:00'
TIMESTAMP|'0000-00-00 00:00:00'
YEAR|0000

DATE类型只包含了日期部分,不包含时间部分.形式为'YYYY-MM-DD',范围是'1000-01-01' to '9999-12-31'
DATETIME类型同时包含了日期和时间部分.形式为'YYYY-MM-DD hh:mm:ss',范围是'1000-01-01 00:00:00' to '9999-12-31 23:59:59'
TIMESTAMP类型同时包含了日期和时间部分.范围是'1970-01-01 00:00:01' UTC to '2038-01-19 03:14:07' UTC.

对于TIMESTAMP，它把客户端插入的时间从当前时区转化为UTC（世界标准时间）进行存储。查询时，将其又转化为客户端当前时区进行返回。
而对于DATETIME，不做任何改变，基本上是原样输入和输出。

总结：TIMESTAMP和DATETIME除了存储范围和存储方式不一样，没有太大区别。当然，对于跨时区的业务，TIMESTAMP更为合适。




## function
Name	|Description|例子
--|--|--
`ADDDATE(date,INTERVAL expr unit), ADDDATE(expr,days)`|增加时间间隔|`SELECT ADDDATE('2008-01-02', 31); # -> '2008-02-02'`
`ADDTIME(expr1,expr2)`|	添加时间间隔|`SELECT ADDTIME('01:00:00.999999', '02:00:00.999998'); # -> '03:00:01.999997'`
CONVERT_TZ()|	Convert from one time zone to another
CURDATE()|	获得当前日期|`SELECT CURDATE(); # -> '2008-06-13'`
CURRENT_DATE(), CURRENT_DATE	|Synonyms for CURDATE()
CURRENT_TIME(), CURRENT_TIME	|Synonyms for CURTIME()
CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP|	Synonyms for NOW()
CURTIME();|获得当前时间|`SELECT CURTIME(); # -> '23:50:26'`
DATE(expr)|提取日期|`SELECT DATE('2003-12-31 01:02:03'); # -> '2003-12-31'`
DATE_ADD()|	Add time values (intervals) to a date value
DATE_FORMAT(date,format) |格式化时间|
DATE_SUB()|	Subtract a time value (interval) from a date
DATEDIFF(expr1,expr2)|日期相减 |`SELECT DATEDIFF('2007-12-31 23:59:59','2007-12-30'); # -> 1`
DAY()	|Synonym for DAYOFMONTH()|
DAYNAME(date)|返回周几|`SELECT DAYNAME('2007-02-03'); # -> 'Saturday'`
DAYOFMONTH(date)|月中第几天|`SELECT DAYOFMONTH('2007-02-03'); #  -> 3`
DAYOFWEEK(date)|周中星期几|`SELECT DAYOFWEEK('2007-02-03');  # -> 7`
DAYOFYEAR(date)|	年中第几天|`SELECT DAYOFYEAR('2007-02-03'); # -> 34`
EXTRACT(unit FROM date)|	提取部分时间|`ELECT EXTRACT(YEAR FROM '2019-07-02'); # -> 2019`
FROM_DAYS(N)|	将天数换换为时间|`SELECT FROM_DAYS(730669); # -> '2000-07-03'`
FROM_UNIXTIME(unix_timestamp[,format])|将unix时间戳转换为时间|`SELECT FROM_UNIXTIME(1447430881); # -> '2015-11-13 10:08:01'`
GET_FORMAT({DATE|TIME|DATETIME}, {'EUR'|'USA'|'JIS'|'ISO'|'INTERNAL'})|Return a date format string|获得时间格式
HOUR(time)|	抽取小时|`SELECT HOUR('10:05:03'); # -> 10`
LAST_DAY(date)|	返回每月的最后一天|`SELECT LAST_DAY('2003-02-05'); # -> '2003-02-28'`
LOCALTIME(), LOCALTIME|	Synonym for NOW()
LOCALTIMESTAMP, LOCALTIMESTAMP()|	Synonym for NOW()
MAKEDATE(year,dayofyear)|	将某年的天数转换为日期|`mysql> SELECT MAKEDATE(2011,365); # -> '2011-12-31'`
MAKETIME(hour,minute,second)|创建时间|`SELECT MAKETIME(12,15,30); # -> '12:15:30'`
MICROSECOND(expr)|抽取微秒|`SELECT MICROSECOND('12:00:00.123456');  # -> 123456`
MINUTE(time)|抽取分钟|`SELECT MINUTE('2008-02-03 10:05:03'); # -> 5`
MONTH(date)|抽取月份|`mysql> SELECT MONTH('2008-02-03'); # -> 2`
MONTHNAME(date)|	返回月份的名称|`mysql> SELECT MONTHNAME('2008-02-03'); # -> 'February'`
NOW([fsp])| 返回日期和时间|`SELECT NOW(); # -> '2007-12-15 23:50:26'`
PERIOD_ADD()	|Add a period to a year-month
PERIOD_DIFF()	|Return the number of months between periods
QUARTER(date)|返回季节|`mysql> SELECT QUARTER('2008-04-01'); # -> 2`
SEC_TO_TIME()	|Converts seconds to 'hh:mm:ss' format
SECOND(time)|	截取秒数|`SELECT SECOND('10:05:03'); # -> 3`
SEC_TO_TIME(seconds)|	秒数转换为时间|`SELECT SEC_TO_TIME(2378); # -> '00:39:38'`
SUBDATE(date,INTERVAL expr unit), SUBDATE(expr,days)|DATE_SUB() |
SUBTIME(expr1,expr2)|	时间相减|`mysql> SELECT SUBTIME('01:00:00.999999', '02:00:00.999998'); # -> '-00:59:59.999999'`
SYSDATE([fsp])|返回当前时间,NOW()返回的是程序开始的时间|
TIME(expr)|	提取时间|`SELECT TIME('2003-12-31 01:02:03'); # -> '01:02:03'`
TIME_FORMAT()|	Format as time
TIME_TO_SEC()	|Return the argument converted to seconds
TIMEDIFF(expr1,expr2)|	时间相减|
TIMESTAMP(expr), TIMESTAMP(expr1,expr2)|日期转换为时间|`SELECT TIMESTAMP('2003-12-31'); # -> '2003-12-31 00:00:00'`
TIMESTAMPADD(unit,interval,datetime_expr)|时间戳相加|`SELECT TIMESTAMPADD(MINUTE,1,'2003-01-02'); # -> '2003-01-02 00:01:00'`
TIMESTAMPDIFF(unit,datetime_expr1,datetime_expr2)|时间间隔|`SELECT TIMESTAMPDIFF(MONTH,'2003-02-01','2003-05-01'); # -> 3`
TO_DAYS()	|Return the date argument converted to days
TO_SECONDS()	|Return the date or datetime argument converted to seconds since Year 0
UNIX_TIMESTAMP()|	Return a Unix timestamp
UTC_DATE()|	Return the current UTC date
UTC_TIME()|	Return the current UTC time
UTC_TIMESTAMP()	|Return the current UTC date and time
WEEK()|	Return the week number
WEEKDAY()	|Return the weekday index
WEEKOFYEAR()|	Return the calendar week of the date (1-53)
YEAR()	|Return the year
YEARWEEK()|Return the year and week


参考:
https://www.cnblogs.com/mxwz/p/7520309.html
https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html
https://www.jianshu.com/p/9305e8698b52
