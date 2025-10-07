# aggFunc


聚合函数又叫组函数，通常是对表中的数据进行统计和计算，一般结合分组(group by)来使用，用于统计和计算分组数据。
既如果不跟group by，则把整个表当成一个分组
聚合函数默认忽略字段为null的记录 要想列值为null的记录也参与计算，必须使用ifnull函数对null值做替换。


## 1.应用
1）求总行数
```sql
-- 返回非NULL数据的总行数.
select count(height) from students; 
-- 返回总行数，包含null值记录;
select count(*) from students;
```

2）求最大值，最小值
```sql
-- 查询女生的编号最大值
select max(id) from students where gender = 2;
```

3）求和
```sql
-- 查询男生的总身高
select sum(height) from students where gender = 1;


```

4)求均值
```sql
-- 求男生的平均身高, 聚合函数不统计null值，平均身高有误
select avg(height) from students where gender = 1;
-- 求男生的平均身高, 包含身高是null的
select avg(ifnull(height,0)) from students where gender = 1;
```


2.聚合方法
Name	|Description
--|--
AVG()	|求均值
BIT_AND()	|Return bitwise AND
BIT_OR()	|Return bitwise OR
BIT_XOR()	|Return bitwise XOR
COUNT()	|Return a count of the number of rows returned
COUNT(DISTINCT)	|Return the count of a number of different values
GROUP_CONCAT()	|组字段进行拼贴
JSON_ARRAYAGG()	|Return result set as a single JSON array
JSON_OBJECTAGG()	|Return result set as a single JSON object
MAX()	|Return the maximum value
MIN()	|Return the minimum value
STD()	|Return the population standard deviation
STDDEV()	|Return the population standard deviation
STDDEV_POP()	|Return the population standard deviation
STDDEV_SAMP()	|Return the sample standard deviation
SUM()	|Return the sum
VAR_POP()	|Return the population standard variance
VAR_SAMP()	|Return the sample variance
VARIANCE()	|Return the population standard variance

参考：
https://www.cnblogs.com/fanguangdexiaoyuer/p/6268211.html