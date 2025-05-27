# subquery

1.必须用括号括起来
2.最多嵌套255层
3.执行顺序由内到外,先执行子查询再查询主查询
4.若子查询作为一个表, 则需要添加表别名; 如果需要引用子查询的字段, 则需要添加字段别名


## where 后的子查询
### 标量子查询
搭配使用符号: `> < =`

查看工资最少的员工的名字:
1. `SELECT MIN(salary) FROM employees` 得到最少工资的标量
2. `SELECT name FROM employees WHERE salary=` 全表扫描和最少工资相等的员工名字
```sql
SELECT name
FROM employees
WHERE salary=(
	SELECT MIN(salary)
	FROM employees
);
```

### 多行子查询
搭配符号:
- `IN/NOT IN` `IN()`等价于`=ANY()`(等于其中任意一个) `NOT IN()`等价于`<>ALL()`
- `ANY/SOME`
- `ALL`

返回location_id是1400或1700的部门中的所有员工姓名
1. `SELECT department_id FROM departments WHERE location_id IN (1400, 1700)` 查询符合`location_id`的`department_id`
2. `SELECT name FROM employees WHERE department_id IN` 在`employees`查找相关部门的雇员的名称

```sql
SELECT name
FROM employees
WHERE department_id IN(
	SELECT department_id
	FROM departments
	WHERE location_id IN (1400, 1700)
);
```

### 多列子查询
1. 一行多列
查询员工编号最小而且工资最高的员工信息
```sql
SELECT *
FROM employees
WHERE (employee_id, salary) = (
	SELECT MIN(employee_id), MAX(salary)
	FROM employees
);
```
1. 多行多列



## select后面的子查询
查询每个部门的员工个数
```sql
SELECT department_id, department_name,(
	SELECT COUNT(*)
	FROM employees e
	WHERE e.department_id=d.department_id
) 对应员工数
FROM departments d;
```


## from后的子查询
查询每个部门的平均工资的工资等级
```sql
SELECT department_id, ag, grade_level
FROM (
	SELECT AVG(salary) ag,department_id
	FROM employees e
	WHERE e.department_id IS NOT NULL
	GROUP BY department_id
) ag_dep INNER JOIN job_grades j
	ON ag_dep.ag BETWEEN lowest_sal AND highest_sal;
```



## exists后的子查询
查询有员工的部门名：

注意`EXISTS`和其他子查询语句不同的是会先扫描外表
1. `SELECT department_name FROM departments d WHERE EXISTS` 扫描第一条记录
2. `SELECT * FROM employees e WHERE e.department_id = d.department_id` 外表的第一条记录在不在子表中, 如果在则返回`true`

```sql
SELECT department_name
FROM departments d
WHERE EXISTS(
	SELECT * 
	FROM employees e
	WHERE e.department_id = d.department_id
);
```
这里等价于用`IN`
```sql
SELECT department_name
FROM departments d 
WHERE d.department_id IN(
	SELECT DISTINCT department_id
	FROM employees
);
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

参考:
https://blog.csdn.net/war_233/article/details/119344207