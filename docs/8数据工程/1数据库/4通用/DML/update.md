# update

1）利用关联查询更改
```sql
UPDATE table_name
SET column1=value1,column2=value2,...
WHERE some_column=some_value;
```

2）利用关联查询更改
```sql
-- 把该语句中from 后的语句理解为一张虚表  
update goods g inner join good_cates gc on g.cate_name=gc.name set g.cate_name=gc.id;
```