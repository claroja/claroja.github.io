# over

## 数据
id|account|name|order_id|sku|quantity|unit_price|ext_price
--|--|--|--|--|--|--|--
0|383080|Will LLC|10001|B1-20000|7|33.69|235.83
1|383080|Will LLC|10001|S1-27722|11|21.12|232.32
2|383080|Will LLC|10001|B1-86481|3|35.99|107.97
3|412290|Jerde-Hilpert|10005|S1-06532|48|55.82|2679.36
4|412290|Jerde-Hilpert|10005|S1-82801|21|13.62|286.02
5|412290|Jerde-Hilpert|10005|S1-06532|9|92.55|832.95
6|412290|Jerde-Hilpert|10005|S1-47412|44|78.91|3472.04
7|412290|Jerde-Hilpert|10005|S1-27722|36|25.42|915.12
8|218895|Kulas Inc|10006|S1-27722|32|95.66|3061.12
9|218895|Kulas Inc|10006|B1-33087|23|22.55|518.65
10|218895|Kulas Inc|10006|B1-33364|3|72.30|216.90
11|218895|Kulas Inc|10006|B1-20000|-1|72.18|-72.18



字段解释:
1. `id`: 订单的唯一标识
2. `account`: 用户的账号
3. `name`: 用户的名称
4. `order_id`: 订单id(1个订单可以由多个商品)
5. `sku`: 商品名称
6. `quantity`: 商品的个数
7. `unit_price`: 每个商品的价格
8. `ext_price`: `unit_price` * `quantity`

可以看到有三个不同的订单(orders), 10001,10005和10006. 每个订单有多种商品(sku).


## over

`over()`的意思就是将聚合的结果添加到每一行
查看每一个id的价格(sku*quantity), 以及**整体**的平均值
```sql
SELECT `id`,`ext_price`, AVG(`ext_price`) OVER() AS `avg_price` FROM `order_detail`;
"""
id;ext_price;avg_price
0;235.83;1040.50
1;232.32;1040.50
2;107.97;1040.50
3;2679.36;1040.50
4;286.02;1040.50
5;832.95;1040.50
6;3472.04;1040.50
7;915.12;1040.50
8;3061.12;1040.50
9;518.65;1040.50
10;216.9;1040.50
11;-72.18;1040.50
"""
```


## partition by
类似于`group by`语句, 在不同组内分别聚合运算, 并聚合结果显示在每组的每条记录里
查看每一个id的价格(sku*quantity), 以及**组内**的平均值
```sql
SELECT `id`,`ext_price`, AVG(`ext_price`) OVER(PARTITION BY `order_id`) AS `avg_price` FROM `order_detail`;
"""
id;ext_price;avg_price
0;235.83;192.04
1;232.32;192.04
2;107.97;192.04
3;2679.36;1637.09
4;286.02;1637.09
5;832.95;1637.09
6;3472.04;1637.09
7;915.12;1637.09
8;3061.12;931.12
9;518.65;931.12
10;216.9;931.12
11;-72.18;931.12
"""

```



## 排序函数
上面都是使用聚合函数(`avg`)搭配`over`来使用, 还有排序函数可以用.
下面使用`order_id`进行分组, 并在组内使用`ext_price`进行排序, `rank`列是排序的结果
```sql
SELECT `id`,`order_id`,`ext_price`, row_number() OVER(PARTITION BY `order_id` ORDER BY `ext_price` ASC) AS `rank` FROM `order_detail`;
```
order_detail


| id | order_id | ext_price | rank | 
| --- | --- | --- | --- | 
| 2 | 10001 | 107.97 | 1 | 
| 1 | 10001 | 232.32 | 2 | 
| 0 | 10001 | 235.83 | 3 | 
| 4 | 10005 | 286.02 | 1 | 
| 5 | 10005 | 832.95 | 2 | 
| 7 | 10005 | 915.12 | 3 | 
| 3 | 10005 | 2679.36 | 4 | 
| 6 | 10005 | 3472.04 | 5 | 
| 11 | 10006 | -72.18 | 1 | 
| 10 | 10006 | 216.9 | 2 | 
| 9 | 10006 | 518.65 | 3 | 
| 8 | 10006 | 3061.12 | 4 | 

语法解释
syntax|explain|example
--|--|--
`win_fn()`|配合`over()`的函数|row_number(),rank(),dense_rank()
`over`|将结果写入每一行
`partition by`|分组|
`order by`|排序, 如果`over`前用的是排序函数, 则会生成一个字段


此外还有:
1. `row_number()` 不对重复值处理
2. `rank()` 重复值会并列,后面的值按整体的序号
3. `dense_rank()` 重复值会并列,后面的值不按整体的序号

## 典型应用

### 分组topn
```sql
SELECT * FROM (
SELECT `id`,`order_id`,`ext_price`, row_number() OVER(PARTITION BY `order_id` ORDER BY `ext_price` ASC) AS `rank` FROM `order_detail`
) AS temp WHERE `rank` <=2;
```

| id | order_id | ext_price | rank | 
| ---: | ---: | ---: | ---: | 
| 2 | 10001 | 107.97 | 1 | 
| 1 | 10001 | 232.32 | 2 | 
| 4 | 10005 | 286.02 | 1 | 
| 5 | 10005 | 832.95 | 2 | 
| 11 | 10006 | -72.18 | 1 | 
| 10 | 10006 | 216.9 | 2 | 


### 按时间排序后,查询两笔订单之间的时间差


ref:
https://dev.mysql.com/doc/refman/8.0/en/window-function-descriptions.html
https://stackoverflow.com/questions/1313120/retrieving-the-last-record-in-each-group-mysql