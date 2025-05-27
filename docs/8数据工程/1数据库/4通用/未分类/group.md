# group


分组查询就是将查询结果按照指定字段进行分组，字段中数据相等的分为一组。
<font style="background: lightgreen">sql的group by类似于pandas的groupby函数, 可参考[pandas_groupby](/pandas_groupby/)</font>


分组查询基本的语法格式如下：
`GROUP BY 列名 [HAVING 条件表达式] [WITH ROLLUP]`

1. 列名: 是指按照指定字段的值进行分组。
2. HAVING 条件表达式: 用来过滤分组后的数据。
3. WITH ROLLUP：在所有记录的最后加上一条记录，显示select查询时聚合函数的统计和计算结果


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

## group by 单独使用
查询的字段要和group by字段保持一致, 就是分组然后去重
```sql
-- 根据order字段来分组
SELECT `order_id` FROM `order_detail` group BY `order_id`;
"""
order_id
10001
10005
10006
"""
```

## group by + 聚合函数

查询每个订单的总额
```sql
SELECT `order_id`, SUM(`ext_price`) AS `order_total` FROM `order_detail` group BY `order_id`;
```

| order_id | order_total | 
| ---: | ---: | 
| 10001 | 576.12 | 
| 10005 | 8185.49 | 
| 10006 | 3724.49 | 

![](../group/2.png)

同样的可以计算, 平均值, 个数等:

```sql
-- 统计不同订单的平均价格
SELECT `order_id`, AVG(`ext_price`) AS `order_avg` FROM `order_detail` group BY `order_id`;

"""
order_id;order_sum
10001;576.12
10005;8185.49
10006;3724.49
"""

-- 统计不同性别的人的个数
SELECT `order_id`, COUNT(*) AS `count` FROM `order_detail` group BY `order_id`;
"""
order_id;count
10001;3
10005;5
10006;4
"""

-- 根据gender字段进行分组， 查询gender字段和分组的name字段信息
SELECT `order_id`, GROUP_CONCAT(`name`) AS `gname` FROM `order_detail` group BY `order_id`;
"""
order_id;gname
10001;Will LLC,Will LLC,Will LLC
10005;Jerde-Hilpert,Jerde-Hilpert,Jerde-Hilpert,Jerde-Hilpert,Jerde-Hilpert
10006;Kulas Inc,Kulas Inc,Kulas Inc,Kulas Inc
"""
```


## having
having作用和where类似都是过滤数据的，但having是过滤分组数据的，只能用于group by
having是把某些组直接过滤掉
where是把某些行直接过滤掉
```sql
-- 筛选商品个数大于3的订单
SELECT `order_id`, COUNT(*) AS `count` FROM `order_detail` group BY `order_id` HAVING `count` > 3;
"""
order_id;count
10005;5
10006;4
"""
```


## with rollup
with rollup的作用是：在最后记录后面新增一行，显示select查询时聚合函数的统计和计算结果
```sql
-- 根据订单分组汇总, 并进行总汇总(rollup)
SELECT `order_id`, COUNT(*) AS `count` FROM `order_detail` group BY `order_id` with rollup;

"""
order_id;count
10001;3
10005;5
10006;4
\N;12
"""
```




First we should know the order of execution of Clauses i.e `FROM > WHERE > GROUP BY > HAVING > DISTINCT > SELECT > ORDER BY`. 


first the `WHERE` clause fetches the records based on the condition then the `GROUP BY` clause groups them accordingly and then the `HAVING` clause fetches the group records based on the having condition.

"HAVING is same as the WHERE clause but is applied on grouped records".





refs:
https://stackoverflow.com/questions/9253244/sql-having-vs-where