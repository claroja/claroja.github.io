# count

## 统计总量
`select count(*), count(age), count(distinct age) from student`
- `count(*)`和`count(age)`结果相同, 都是统计总数据数量
- `count(distinct age)`则是统计不重复数据数量

## 按条件统计

### 统计单个age下student数量
`select count(*) from student group by age`

### 统计某个范围age下student数量
比如统计学生总数量和18岁以上学生的数量
1. 简单版可以使用`union`, 缺点是计算量大, 两次`select`扫描了两次全表
```sql
select count(*) from student
union
select count(*) from student where age >18
```

2. 进阶版可以使用`case when then end` + `sum`的组合
```sql
select count(*), sum(case when age > 18 then 1 else 0 end) from student
```

3. 终极版可以使用`count(case when then end)`
```sql
select count(*), count(case when age > 18 then age else null end) from student
-- 之所以称为终极版, 是因为sum无法处理需要统计非重复数据的情况, distinct加在sum前, 会将所有的1去重
select count(*), count(distinct case when age > 18 then age else null end) from student
```


参考:
https://blog.csdn.net/iamlaosong/article/details/73930674




