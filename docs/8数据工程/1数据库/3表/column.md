# column

1.添加字段
```sql
alter table 表名 add 列名 类型 约束;
例：
alter table students add birthday datetime;
```

2.修改字段
1)修改字段名
```sql
ALTER TABLE [表名.]TABLE_NAME RENAME COLUMN OLD_COLUMN_NAME TO NEW_COLUMN_NAME;
```
2）自改字段类型
```sql
alter table 表名 modify 列名 类型 约束;
例：
alter table students modify birthday date not null;
```
modify: 只能修改字段类型或者约束，不能修改字段名
```sql
alter table 表名 change 原名 新名 类型及约束;
例：
alter table students change birthday birth datetime not null;
```
change: 既能对字段重命名又能修改字段类型还能修改约束

3.删除字段
```sql
alter table 表名 drop 列名;
例：
alter table students drop birthday;
```