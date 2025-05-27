# index

## 1.表创建前创建索引

1).普通索引
```sql
CREATE TABLE mytable(
       ID INT NOT NULL, 
       username VARCHAR(16) NOT NULL, 
       INDEX indexName (username)
 );
```
2).唯一索引
```sql
CREATE TABLE mytable(
       ID INT NOT NULL, 
       username VARCHAR(16) NOT NULL, 
       UNIQUE indexName (username)
 );
```

3).主键索引
```sql
CREATE TABLE mytable(
       ID INT NOT NULL, 
       username VARCHAR(16) NOT NULL, 
       PRIMARY KEY (ID)
 );

```

## 2.表创建后创建索引
1).普通索引`ALTER TABLE table_name ADD INDEX index_name ( column ) `
2).唯一索引`ALTER TABLE table_name ADD UNIQUE ( column ) `
3).主键索引`ALTER TABLE table_name ADD PRIMARY KEY ( column ) `
4).全文索引`ALTER TABLE table_name ADD FULLTEXT ( column)`
5).外键索引，一般不用

## 3.删除索引

1)普通索引`alter table table_name drop index index_name ;`
2)唯一索引`alter table table_name drop index index_name ;`
3)主键索引`alter table table_name drop primary key ;`
4)全文索引`alter table table_name drop index index_name ;`