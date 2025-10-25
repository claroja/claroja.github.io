# backupRestore


## 1.back
备份原理是将需要备份的数据查询出来，将查询出的数据转换成对应的insert 语句，当我们需要还原这些数据时，只要执行这些 insert 语句，即可将对应的数据还原。


1.命令
```sql
mysqldump [选项] 数据库名 [表名] > 脚本名
mysqldump [选项] --all-databases [选项]  > 脚本名
```
2.例子
```shell
mysqldump -uroot -p test > test.db # 备份指定数据库
mysqldump -uroot -p --all-databases > all.db # 备份所有数据库
mysqldump -uroot -p  mysql db event > table.db # 备份指定表
mysqldump -uroot -p test --ignore-table=test.t1 > test2.db # 备份指定表，排除不需要的
```

## 2.restore
1)系统命令
```sql
mysqladmin -uroot -p create db_name 
mysql -uroot -p  db_name < db_name.db
```


2）source方法
```python
mysql > use db_name
mysql > source db_name.db
```




## output
```sql
SELECT 列名 FROM table [WHERE 语句] INTO OUTFILE '目标文件'[OPTIONS]
```
## input
```sql
mysql> USE db1;
mysql> LOAD DATA INFILE 't1.txt' INTO TABLE t1
       FIELDS TERMINATED BY ',' FIELDS ENCLOSED BY '"'
       LINES TERMINATED BY '\r\n';
```

参考：
https://dev.mysql.com/doc/refman/8.0/en/reloading-delimited-text-dumps.html
https://m.php.cn/article/460764.html



参考：
https://dev.mysql.com/doc/refman/8.0/en/using-mysqldump.html
https://www.cnblogs.com/markLogZhu/p/11398028.html