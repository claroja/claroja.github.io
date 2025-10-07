# insert


## 增加一行
1.增加一行
```sql
INSERT INTO 表名称 VALUES (值1, 值2,....)
```
2.增加一行，并指明字段
```sql
INSERT INTO table_name (列1, 列2,...) VALUES (值1, 值2,....)
```
主键列是自动增长，但是在全列插入时需要占位，通常使用空值(0或者null或者default)
在全列插入时，如果字段列有默认值可以使用 default 来占位，插入后的数据就是之前设置的默认值

## 批量导入
`LOAD DATA INFILE 文件路径 INTO TABLE 表名 FIELDS TERMINATED BY '分隔符'`;

## 查询增加

insert into .. select .. 表示: 把查询结果插入到指定表中，也就是表复制。
```sql
-- 将查询结果插入到good_cates表中
insert into good_cates(name) select cate_name from goods group by cate_name;
create table 新表名 as select 字段名 from 表名;
```

## 其他
有则更新,无则插入
```sql
## a is declared as UNIQUE and contains the value 1
INSERT INTO t1 (a,b,c) VALUES (1,2,3)
  ON DUPLICATE KEY UPDATE c=c+1;
```