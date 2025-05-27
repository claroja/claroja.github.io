# tpl

DML(insert、update、delete)操作是原子单位，事务是一系列的DML。

开启事务：Start Transaction
事务结束：End Transaction
提交事务：Commit Transaction
回滚事务：Rollback Transaction

`innodb`引擎默认是开启事务的，在我们输入一条sql语句时，默认自动开启事务和提交事务

查看是否开启事务，默认是开启，on
```sql
show variables like autocommit;
``
关闭自动事务
```sql
set autocommit = off;
```
关闭事务后，我们就需要自己`commit`
```sql
insert into t_name values(1);
commit;
```

## 2.手动事务
一般我们不会关闭autocommit，因为太麻烦。想要使用事务时，用`start transaction`命令
1)开始事务
`start transaction;`
2)执行事务
执行sql语句
3)提交事务
`commit`
4)回滚
回滚操作，默认清空Transaction中所有的操作，可以通过`savepoint`来指定回滚点，然后使用`rollback to point`来回滚
`rollback`
5)保存回滚点
`savapoint name`


1.事务的并发问题
1）脏读：事务A读取了事务B更新的数据，然后B回滚操作，那么A读取到的数据是脏数据
2）不可重复读：事务 A 多次读取同一数据，事务 B 在事务A多次读取的过程中，对数据作了更新并提交，导致事务A多次读取同一数据时，结果 不一致。
3）幻读：系统管理员A将数据库中所有学生的成绩从具体分数改为ABCDE等级，但是系统管理员B就在这个时候插入了一条具体分数的记录，当系统管理员A改结束后发现还有一条记录没有改过来，就好像发生了幻觉一样，这就叫幻读。


2.事务隔离级别
事务隔离级别	|脏读|	不可重复读|	幻读
--|--|--|--
读未提交（read-uncommitted）|	是|	是	|是
不可重复读（read-committed）	|否	|是	|是
可重复读（repeatable-read）	|否|	否	|是
串行化（serializable）	|否	|否	|否


3.应用
mysql默认事务隔离级别是repeatable-read
`select @@tx_isolation`

参考：
https://www.cnblogs.com/wyaokai/p/10921323.html

参考：
https://www.cnblogs.com/sun-yanglu/p/9612853.html