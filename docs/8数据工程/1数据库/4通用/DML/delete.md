# delete


```sql
DELETE FROM 表名称 WHERE 列名称 = 值
```
上面的操作称之为物理删除，一旦删除就不容易恢复，我们可以使用逻辑删除的方式来解决这个问题。

```sql
-- 添加删除表示字段，0表示未删除 1表示删除
alter table students add isdelete bit default 0;
-- 逻辑删除数据
update students set isdelete = 1 where id = 8;
```
逻辑删除，本质就是修改操作