# 智能补全

PyMySQL 遵循 Python 数据库 API v2.0 规范，并包含了 pure-Python MySQL 客户端库。

**pymysql**操作数据库流程如下:
1. 创建链接`connection`: `pymysql.connect("ip:port","user","password","database")`
2. 创建游标`cursor`: `connection.cursor()`
<font style="background: yellow">游标（cursor）是系统为用户开设的一个数据缓冲区，存放SQL语句的执行结果。每个游标区都有一个名字,用户可以用SQL语句逐一从游标中获取记录，并赋给主变量，交由主语言进一步处理。游标总是与一条SQL 查询语句相关联因为游标由结果集（可以是零条、一条或由相关的选择语句检索出的多条记录）和结果集中指向特定记录的游标位置组成。</font>

3. 执行语句`execute`: `cursor.execute("statement")`
4. 获得数据`fetchone`: `cursor.fetchone()`
5. 关闭连接`close`: `connection.close()`

另外在`update`和`delete`中要使用事务`commit`和`rollback`.


## 查询数据

Python查询Mysql使用`fetchone()`方法获取单条数据, 使用`fetchall()`方法获取多条数据。
`fetchone()`: 获取一行
`fetchall()`: 接收全部的返回结果行.
`rowcount`: 这是一个只读属性，并返回执行execute()方法后影响的行数。

### fetchone
```python
import  pymysql
## 打开数据库连接
connection = pymysql.connect("localhost","testuser","test123","TESTDB")
## 使用 cursor() 方法创建一个游标对象
cursor = connection.cursor()
## 使用 execute()  方法执行 SQL 查询 
cursor.execute("SELECT VERSION()")
## 使用 fetchone() 方法获取单条数据.
data = cursor.fetchone()
print("Database version : %s " % data)#
## 关闭数据库连接
connection.close()
```

### fetchall
```python
import  pymysql
## 打开数据库连接
db = pymysql.connect("localhost","testuser","test123","TESTDB")
## 使用cursor()方法获取操作游标 
cursor = db.cursor()
## SQL 查询语句
sql = "SELECT * FROM EMPLOYEE \
          WHERE INCOME > %s" % (1000)
## 执行SQL语句
cursor.execute(sql)
## 获取所有记录列表
results = cursor.fetchall()
for row in results:
    fname = row[0]
    lname = row[1]
    age = row[2]
    sex = row[3]
    income = row[4]
    # 打印结果
    print("fname=%s,lname=%s,age=%s,sex=%s,income=%s" % \
            (fname, lname, age, sex, income))
## 关闭数据库连接
db.close()
```

## 事务

事务应该具有4个属性：原子性、一致性、隔离性、持久性。这四个属性通常称为ACID特性。
- 原子性（atomicity）。一个事务是一个不可分割的工作单位，事务中包括的诸操作要么都做，要么都不做。
- 一致性（consistency）。事务必须是使数据库从一个一致性状态变到另一个一致性状态。一致性与原子性是密切相关的。
- 隔离性（isolation）。一个事务的执行不能被其他事务干扰。即一个事务内部的操作及使用的数据对并发的其他事务是隔离的，并发执行的各个事务之间不能互相干扰。
- 持久性（durability）。持续性也称永久性（permanence），指一个事务一旦提交，它对数据库中数据的改变就应该是永久性的。接下来的其他操作或故障不应该对其有任何影响。

Python DB API 2.0 的事务提供了两个方法`commit` 或`rollback`。`commit()`方法游标的所有更新操作，`rollback()`方法回滚当前游标的所有操作。每一个方法都开始了一个新的事务。


### 更新操作

```python
import  pymysql
## 打开数据库连接
db = pymysql.connect("localhost","testuser","test123","TESTDB")
## 使用cursor()方法获取操作游标 
cursor = db.cursor()
## SQL 更新语句
sql = "UPDATE EMPLOYEE SET AGE = AGE + 1 WHERE SEX = '%c'" % ('M')
try:
    # 执行SQL语句
    cursor.execute(sql)
    # 提交到数据库执行
db.commit()
except:
     # 发生错误时回滚
     db.rollback()
## 关闭数据库连接
db.close()
```

### 删除操作
```python
import  pymysql
## 打开数据库连接
db = pymysql.connect("localhost","testuser","test123","TESTDB")
## 使用cursor()方法获取操作游标 
cursor = db.cursor()
## SQL 删除语句
sql = "DELETE FROM EMPLOYEE WHERE AGE > %s" % (20)
try:
    # 执行SQL语句
    cursor.execute(sql)
    # 提交修改db.commit()
except:
     # 发生错误时回滚
     db.rollback()
## 关闭连接
db.close()
```




## 创建表
```python
import  pymysql
## 打开数据库连接
db = pymysql.connect("localhost","testuser","test123","TESTDB")
## 使用 cursor() 方法创建一个游标对象 
cursorcursor = db.cursor()
## 使用 execute() 方法执行 SQL，如果表存在则删除
cursor.execute("DROP TABLE IF EXISTS EMPLOYEE")
## 使用预处理语句创建表
sql = """CREATE TABLE EMPLOYEE (
              FIRST_NAME  CHAR(20) NOT NULL,
              LAST_NAME  CHAR(20),
              AGE INT,
              SEX CHAR(1),
              INCOME FLOAT )"""
cursor.execute(sql)
## 关闭数据库连接
db.close()
```


参考:
https://zhuanlan.zhihu.com/p/139763027