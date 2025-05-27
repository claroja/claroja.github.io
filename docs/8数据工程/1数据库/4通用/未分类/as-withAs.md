# as-withAs

 
## 使用as取别名
1. 给表取别名 `select tb_aliasName.col from tb_name as tb_aliasName`
有两个表分别是："Persons" 和 "Product_Orders"。分别为它们指定别名 "p" 和 "po"。列出 "John Adams" 的所有定单。
```sql
SELECT po.OrderID, p.LastName, p.FirstName
FROM Persons AS p, Product_Orders AS po
WHERE p.LastName='Adams' AND p.FirstName='John';
```
2. 给列取别名 `select col_name as col_aliasName from tb_name`
查询 Persons 表中的 LastName 列 （为其定义别名 '姓氏'）和 FirstName 列（为其定义别名 ‘名字’），输出所有结果值。
```sql
SELECT LastName AS 姓氏, FirstName AS 名字
FROM Persons
```



## with as
其实就是把一大堆重复用到的sql语句放在with as里面，取一个别名，后面的查询就可以用它，这样对于大批量的sql语句起到一个优化的作用，而且清楚明了。

- 相当于建了个e临时表
```sql
with e as (select * from scott.emp e where e.empno=7499)
select * from e;
```
- 相当于建了e、d临时表
```sql
with
e as (select * from scott.emp),
d as (select * from scott.dept)
select * from e, d where e.deptno = d.deptno;
```
- 可以给列起别名
```sql
WITH cte (col1, col2) AS
(
  SELECT 1, 2
  UNION ALL
  SELECT 3, 4
)
SELECT col1, col2 FROM cte;
```

## Create table as select
根据select语句创建表
```sql
create table table1 as select * from table2;
```

refs:
https://dev.mysql.com/doc/refman/8.0/en/with.html
https://blog.csdn.net/qq_36761831/article/details/82892534
https://blog.csdn.net/jia718/article/details/88253918
