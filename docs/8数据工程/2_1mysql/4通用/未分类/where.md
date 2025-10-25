# where

## 比较运算符
where|description|example
--|--
`=`|Equal|`WHERE col = 24`
`<>` or `!=`|Not equal. Note: In some versions of SQL this operator may be written as |
`>`|Greater than|
`>=`|Greater than or equal|
`<`|Less than|
`<=`|Less than or equal|
`BETWEEN...AND`|等价于 `>= and <=`|`WHERE col BETWEEN 2019 AND 2021`
`LIKE`|Search for a patter|`WHERE col [NOT] LIKE 'U%'`
`IN` or `NOT IN`|To specify multiple possible values for a column|`WHERE col [NOT] IN ('Belgium', 'France', 'Germany', 'UK')`
`IS NULL` or `IS NOT NULL`|`WHERE col IS [NOT] NULL`
`EXISTS`|checks if the subquery returns any value at all|`WHERE [NOT] EXISTS (SELECT * ...)`

**null**
1.不能使用=代替is
2.null 不等于 ‘’ 空字符串

**like**
1..%表示任意多个任意字符
2._表示一个任意字符

## 逻辑运算符
where|description|example
--|--|--
AND||`WHERE col1 = 'Support' AND col2 = 2021`
OR||`WHERE col1 = 'Seattle' OR col2 = 'Bellevue'`
NOT||`WHERE col NOT LIKE 'U%'`
