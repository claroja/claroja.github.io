# Redis常见命令

Redis中key一般是字符串，而value包含很多不同的数据类型：

1. String：hello world
2. Hash：{name: "Jack", age: 21}
3. List：[A -> B -> C -> C]
4. Set：{A, B, C}
5. SortedSet：{A: 1, B: 2, C: 3}
6. GEO：{A: (120.3, 30.5)}
7. BitMap：0110110101110101011
8. HyperLog：0110110101110101011


## Redis通用命令

通用指令是都可以使用的指令，常见的有：

1. KEYS：查看符合模板的所有key
2. DEL：删除一个指定的key
3. EXISTS：判断key是否存在
4. EXPIRE：给一个key设置有效期，有效期到期时该key会被自动删除
5. TTL：查看一个KEY的剩余有效期


## Key结构

问题: 需要存储用户、商品信息到redis，有一个用户id是1，有一个商品id恰好也是1，此时如果使用id作为key，那就会冲突了，该怎么办？

Redis的key允许有多个单词形成层级结构，多个单词之间用':'隔开, 例如我们的项目名称叫heima，有user和product两种不同类型的数据，我们可以这样定义key：

1. user相关的key：`heima:user:1`
2. product相关的key：`heima:product:1`


如果Value是一个Java对象，例如一个User对象，则可以将对象序列化为JSON字符串后存储：

| **KEY**         | **VALUE**                                  |
| --------------- | ------------------------------------------ |
| heima:user:1    | {"id":1,  "name": "Jack", "age": 21}       |
| heima:product:1 | {"id":1,  "name": "小米11", "price": 4999} |


## String类型

### String的value

value是字符串, 可以分为3类：

1. string：普通字符串
2. int：整数类型，可以做自增、自减操作
3. float：浮点类型，可以做自增、自减操作

| KEY   | VALUE       |
|-------|-------------|
| msg   | hello world |
| num   | 10          |
| score | 92.5        |



### String的常见命令

1. SET：添加或者修改已经存在的一个String类型的键值对
2. GET：根据key获取String类型的value
3. MSET：批量添加多个String类型的键值对
4. MGET：根据多个key获取多个String类型的value
5. INCR：让一个整型的key自增1
6. INCRBY:让一个整型的key自增并指定步长，例如：incrby num 2 让num值自增2
7. INCRBYFLOAT：让一个浮点类型的数字自增并指定步长
8. SETNX：添加一个String类型的键值对，前提是这个key不存在，否则不执行
9. SETEX：添加一个String类型的键值对，并且指定有效期


## Hash类型


### hash类型的value


Hash类型，也叫散列，其value是一个无序字典

String结构是将对象序列化为JSON字符串后存储，当需要修改对象某个字段时很不方便：

| KEY           | VALUE                  |
|---------------|------------------------|
| heima:user:1  | {name:"Jack", age:21}  |
| heima:user:2  | {name:"Rose", age:18}  |

Hash结构可以将对象中的每个字段独立存储，可以针对单个字段做CRUD：

| KEY           | field | value |
|---------------|-------|-------|
| heima:user:1  | name  | Jack  |
| heima:user:1  | age   | 21    |
| heima:user:2  | name  | Rose  |
| heima:user:2  | age   | 18    |



### Hash的常见命令有

1. HSET key field value：添加或者修改hash类型key的field的值
2. HGET key field：获取一个hash类型key的field的值
3. HMSET：批量添加多个hash类型key的field的值
4. HMGET：批量获取多个hash类型key的field的值
5. HGETALL：获取一个hash类型的key中的所有的field和value
6. HKEYS：获取一个hash类型的key中的所有的field
7. HINCRBY:让一个hash类型key的字段值自增并指定步长
8. HSETNX：添加一个hash类型的key的field值，前提是这个field不存在，否则不执行


## List类型

双向链表结构, 插入和删除快, 查询速度一般

常用来存储一个有序数据，例如：朋友圈点赞列表，评论列表等。


List的常见命令有：

1. LPUSH key element ... ：向列表左侧插入一个或多个元素
2. LPOP key：移除并返回列表左侧的第一个元素，没有则返回nil
3. RPUSH key element ... ：向列表右侧插入一个或多个元素
4. RPOP key：移除并返回列表右侧的第一个元素
5. LRANGE key star end：返回一段角标范围内的所有元素
6. BLPOP和BRPOP：与LPOP和RPOP类似，只不过在没有元素时等待指定时间，而不是直接返回nil


## Set类型

可以看做是一个value为null的HashMap

Set的常见命令有：

1. SADD key member ... ：向set中添加一个或多个元素
2. SREM key member ... : 移除set中的指定元素
3. SCARD key： 返回set中元素的个数
4. SISMEMBER key member：判断一个元素是否存在于set中
5. SMEMBERS：获取set中的所有元素
6. SINTER key1 key2 ... ：求key1与key2的交集
7. SDIFF key1 key2 ...: 求key1和key2的差集


## SortedSet类型

SortedSet中的每一个元素都带有一个score属性，可以基于score属性对元素排序

因为SortedSet的可排序特性，经常被用来实现排行榜这样的功能。

SortedSet的常见命令有：

1. ZADD key score member：添加一个或多个元素到sorted set ，如果已经存在则更新其score值
2. ZREM key member：删除sorted set中的一个指定元素
3. ZSCORE key member : 获取sorted set中的指定元素的score值
4. ZRANK key member：获取sorted set 中的指定元素的排名
5. ZCARD key：获取sorted set中的元素个数
6. ZCOUNT key min max：统计score值在给定范围内的所有元素的个数
7. ZINCRBY key increment member：让sorted set中的指定元素自增，步长为指定的increment值
8. ZRANGE key min max：按照score排序后，获取指定排名范围内的元素
9. ZRANGEBYSCORE key min max：按照score排序后，获取指定score范围内的元素
10. ZDIFF、ZINTER、ZUNION：求差集、交集、并集


注意：所有的排名默认都是升序，如果要降序则在命令的Z后面添加REV即可，例如：

1. 升序获取sorted set 中的指定元素的排名：ZRANK key member
2. 降序获取sorted set 中的指定元素的排名：ZREVRANK key memeber










