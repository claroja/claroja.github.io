# select


## select


`SELECT [*|字段名列表|表达式|公式|常量]`


  1.常用:`SELECT [常量|公式|表达式|字段名列表|*]`
    1.常量 `SELECT 1`
    2.公式 `SELECT 1+1`
    3.条件判断表达式 `SELECT 1+1=3`
    4.case `case when sal>=3000 then 'high' else 'low' end as 'salry_level'`
    5.字段名 `SELECT 字段名 FROM 表名`
    6.* `SELECT * FROM 表名`
  2.别名:`SELECT col AS alias FROM table`
  3.去重:`SELECT DISTINCT 字段名`


column|description
--|--
`select table.col from table`|
`select col from table`|
`select colA,colB from table`|
`select * from table`|
`select rowFunc(col) from table`|`rowFunc` like `uppper`
`select aggFunc(col) from table`|`aggFunction` like `sum`,`average`
`select col as alias from table`|alias
`select col alias from table`|alias
`







refs:
https://blog.devart.com/mysql-where-clause.html