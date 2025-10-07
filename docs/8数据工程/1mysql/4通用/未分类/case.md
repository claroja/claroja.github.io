# case

1. 判断空值函数`ifnull(expr,alt_value)`
`base`是基本工资, `bonus`是奖金, 如果有奖金就加上奖金, 如果没有加0.
```sql
select name,base+ifnull(bonus,0) as 'all_salary' from emp;
```
2. 判断函数`if(condition, true_result, false_result)`
```sql
select name, sal, if(sal>=3000,'high','low') as 'salary_level' from emp;
```
2. `case when then end`
```sql
select 
    name, 
    sal,
    case when sal>=3000 then 'high' else 'low' end as 'salry_level'
from emp; 
```



```sql
SELECT 
    CASE
        WHEN column_name1 = 'N' or column_name2 = 'Y'
        THEN 1
        ELSE 0
    END as column_name3,
    column_name4,
FROM Product
```

refs:
https://stackoverflow.com/questions/63447/how-do-i-perform-an-if-then-in-an-sql-select