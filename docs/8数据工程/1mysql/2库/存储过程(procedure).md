# procedure




## syntax

### create
```sql
Create Procedure [Procedure Name] ([Parameter 1], [Parameter 2], [Parameter 3] )
Begin
SQL Queries..
End
```

### use

```sql
CALL [Procedure Name] ([Parameters]..)
```

### example

```sql
-- 求1到100之间的和
create procedure my_pro2()
begin
    -- 创建局部变量
    declare i int default 1;
    -- 会话变量
    set @sum = 0;
    -- 开始循环获取结果
    while i <= 100 do
        set @sum = @sum + i;
        set i = i + 1;
    end while;
    select @sum;
end

call my_pro2();
```


## difference between function

1. 过程无返回值类型，不能将结果直接赋值给变量；函数有返回值类型，调用时，除了在select中，必须将返回值赋值给变量
2. 函数可以再select语句中直接使用，而过程不能


refs:
https://www.sqlshack.com/learn-mysql-the-basics-of-mysql-stored-procedures/
https://www.jb51.net/article/251743.htm