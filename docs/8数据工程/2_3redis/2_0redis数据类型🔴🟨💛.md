# Redis常见命令

## 最佳实践

### 考察问

- 💚Redis中key一般是`字符串`，而value包含很多不同的数据类型：

    - `()`：`"hello world"`
    - `()`：`{name: "Jack", age: 21}`
    - `()`：`[A, B, C, C]`
    - `()`：`(A, B, C)`
    - `()`：`(A: 1, B: 2, C: 3)`
    - `()`：`{A: (120.3, 30.5)}`
    - `()`：`0110110101110101011`
    - `()`：`0110110101110101011`

- 💚Redis通用命令

    通用指令是都可以使用的指令，常见的有：

    - `()`：判断key是否存在.

        `()`存在才创建

    - `()`：查看符合模板的所有key

        `KEYS h?llo` -> `"hello, hallo`

    - `()`：删除一个指定的key

- 💚过期时间
    - 设置过期时间:
        - 设置KEY时使用参数设置: `()`
        - 设置KEY后使用命令设置: `()`
    - 查看过期时间: `()`
    - 移除过期时间: `()`

- 💛redis在内存不足时的解决策略✨`7`(两个维度组合)+`1`(默认不删)

    - 维度1: 区分有过期时间的key: `()`和无过期时间的key: `()`
    - 维度2: 删除的策略
        - `()`: 时间度量, 如果数据在最近一段时间内没有被访问，那么在将来也不太可能被访问。
        - `()`: 频次度量, 如果某个数据在最近一段时间内被访问次数很少，那么在将来也不太可能被频繁访问。
        - `()`: 随机删除
        - `()`: 删除过期时间最早的, 这个维度只有有过期时间的key有, 无过期时间的自然没有ttl. 所以组合起来共有2*4-1=7个组合

## Redis数据类型

Redis中key一般是`字符串`，而value包含很多不同的数据类型：

- `String`：`"hello world"`
- `List`：`[A, B, C, C]`
- `Set`：`(A, B, C)`
- `SortedSet`：`(A: 1, B: 2, C: 3)`
- `Hash`：`{name: "Jack", age: 21}`
- `GEO`：`{A: (120.3, 30.5)}`
- `BitMap`：`0110110101110101011`
- `HyperLog`：`0110110101110101011`

## Redis通用命令

通用指令是都可以使用的指令，常见的有：

- `EXISTS`：判断key是否存在.
    `SET value NX`存在才创建
- `KEYS`：查看符合模板的所有key

    `KEYS h?llo` -> `"hello, hallo`

- `DEL`：删除一个指定的key

## 过期时间

- 设置过期时间: `EXPIRE key "seconds"`, 设置一个key在当前时间"seconds"(秒)之后过期。返回1代表设置成功，返回0代表key不存在或者无法设置过期时间。

    ```sh
    SET name wang  # 返回OK
    EXPIRE name 60  # 返回1
    ```

    ✨SETEX在逻辑上等价于SET和EXPIRE合并的操作，区别之处在于SETEX是一条命令，而命令的执行是原子性的，所以不会出现并发问题。`SET key "value" EX "seconds"`

- 查看过期时间: `TTL key`(TTL(Time To Live)), 获取key的过期时间。如果key存在过期时间，返回剩余生存时间(毫秒)；如果key是永久的，返回-1；如果key不存在或者已过期，返回-2。

    ```sh
    SET name wang  # 返回OK
    EXPIRE name 60  # 返回1
    TTL name  # 返回58
    ```

- 移除过期时间: `PERSIST key`, 移除key的过期时间，将其转换为永久状态。如果返回1，代表转换成功。如果返回0，代表key不存在或者之前就已经是永久状态。

    ```sh
    SET name wang  # 返回OK
    EXPIRE name 60  # 返回1
    TTL name  # 返回58
    PERSIST name  # 返回1
    TTL name   # 返回-1
    ```

- redis在内存不足时的解决策略✨`7`(两个维度组合)+`1`(默认不删)

    在redis的内存不足时，也会触发主动清理。redis允许用户通过配置maxmemory-policy参数，指定redis在内存不足时的解决策略

    - volatile-lru 使用LRU算法删除一个键(只针对设置了过期时间的key)
    - volatile-lfu 使用LFU算法删除一个键(只针对设置了过期时间的键)
    - volatile-random 随机删除一个键(只针对设置了过期时间的键)
    - volatile-ttl 删除最早过期的一个键(只针对设置了过期时间的键)
    - allkeys-lru 使用LRU算法删除一个键
    - allkeys-lfu 使用LFU算法删除一个键
    - allkeys-random 随机删除一个键
    - noeviction 不删除键，返回错误信息(redis默认选项)

    ✨策略是两个维度的组合
    - 维度1: 区分有过期时间的key: `volatile`和无过期时间的key: `allkeys`
    - 维度2: 删除的策略
        - lru(Least Recently Used): 时间度量, 如果数据在`最近`一段时间内`没有`被访问，那么在将来也不太可能被访问。
        - lfu(Least Frequently Used): 频次度量, ：如果某个数据在最近一段`时间`内被访问`次数`很少，那么在将来也不太可能被频繁访问。
        - reandom: 随机删除
        - ttl(Time To Live): 删除过期时间最早的, 这个维度只有有过期时间的key有, 无过期时间的自然没有ttl. 所以组合起来共有2*4-1=7个组合

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
