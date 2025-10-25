# Set

## 最佳实践


### 考察问


- 点赞

    Set 类型可以保证一个用户只能点一个赞，这里举例一个场景，key是文章id，value是用户id。
    `()`、`()`、`()`三个用户分别对`()`文章点赞了。

    1. 用户点赞
        - uid:1用户对文章article:1点赞: `()`
        - uid:2用户对文章article:1点赞: `()`
        - uid:3用户对文章article:1点赞: `()`
    2. uid:1 取消了对 article:1 文章点赞: `()`
    3. 获取 article:1 文章所有点赞用户: `()`
    4. 获取 article:1 文章的点赞用户数量: `()`
    5. 判断用户 uid:1 是否对文章 article:1 点赞了: `()`




- 共同关注

    Set 类型支持交集运算，所以可以用来计算共同关注的好友、公众号等。

    key 可以是用户 id，value 则是已关注的公众号的 id。

    1. 设置用户的关注公众号

        - uid:1 用户关注公众号 id 为 5、6、7、8、9: `()`
        - uid:2 用户关注公众号 id 为 7、8、9、10、11: `()`

    2. 获取uid:1和uid:2的共同关注 `()`

    3. 给 uid:2 推荐 uid:1 关注的公众号：`()`

    4. 验证某个公众号是否同时被 uid:1 或 uid:2 关注：`()`


- 抽奖活动

    存储某活动中中奖的用户名 ，Set 类型因为有去重功能，可以保证同一个用户不会中奖两次。

    1. key 为抽奖活动名，value 为员工名称，把所有员工名称放入抽奖箱：`()`
    2. 允许重复抽奖
        1. 抽取1个一等奖：`()`
        2. 抽取2个二等奖: `()`
        3. 抽取3个三等奖: `()`
    3. 不允许重复抽奖

        1. 抽取1个一等奖：`()`
        2. 抽取2个二等奖: `()`
        3. 抽取3个三等奖: `()`




### 考察点


- 点赞

    Set 类型可以保证一个用户只能点一个赞，这里举例一个场景，key是文章id，value是用户id。
    `uid:1`、`uid:2`、`uid:3`三个用户分别对`article:1`文章点赞了。

    1. 用户点赞
        - uid:1用户对文章article:1点赞: `SADD article:1 uid:1`
        - uid:2用户对文章article:1点赞: `SADD article:1 uid:2`
        - uid:3用户对文章article:1点赞: `SADD article:1 uid:3`
    2. uid:1 取消了对 article:1 文章点赞: `SREM article:1 uid:1`
    3. 获取 article:1 文章所有点赞用户: `SMEMBERS article:1`
    4. 获取 article:1 文章的点赞用户数量: `SCARD article:1`
    5. 判断用户 uid:1 是否对文章 article:1 点赞了: `SISMEMBER article:1 uid:1`




- 共同关注

    Set 类型支持交集运算，所以可以用来计算共同关注的好友、公众号等。

    key 可以是用户 id，value 则是已关注的公众号的 id。

    1. 设置用户的关注公众号

        - uid:1 用户关注公众号 id 为 5、6、7、8、9: `SADD uid:1 5 6 7 8 9`
        - uid:2 用户关注公众号 id 为 7、8、9、10、11: `SADD uid:2 7 8 9 10 11`

    2. 获取uid:1和uid:2的共同关注 `SINTER uid:1 uid:2`

    3. 给 uid:2 推荐 uid:1 关注的公众号：`SDIFF uid:1 uid:2`

    4. 验证某个公众号是否同时被 uid:1 或 uid:2 关注：`SISMEMBER uid:1 5 \ SISMEMBER uid:2 5`


- 抽奖活动

    存储某活动中中奖的用户名 ，Set 类型因为有去重功能，可以保证同一个用户不会中奖两次。

    1. key 为抽奖活动名，value 为员工名称，把所有员工名称放入抽奖箱：`SADD lucky Tom Jerry John Sean Marry Lindy Sary Mark`
    2. 允许重复抽奖
        1. 抽取1个一等奖：`SRANDMEMBER lucky 1`
        2. 抽取2个二等奖: `SRANDMEMBER lucky 2`
        3. 抽取3个三等奖: `SRANDMEMBER lucky 3`
    3. 不允许重复抽奖

        1. 抽取1个一等奖：`SPOP lucky 1`
        2. 抽取2个二等奖: `SPOP lucky 2`
        3. 抽取3个三等奖: `SPOP lucky 3`



## 概念


Set类型是一个`无序`并`唯一`的键值集合. 一个集合最多可以存储 2^32-1 个元素。Set 类型除了支持集合内的增删改查，同时还支持多个集合取交集、并集、差集。


## 原理

Set 类型的底层数据结构是由哈希表或整数集合实现的：

- 如果集合中的元素都是整数且元素个数小于 512 （默认值，set-maxintset-entries 配置）个，Redis 会使用整数集合作为 Set 类型的底层数据结构；
- 如果集合中的元素不满足上面条件，则 Redis 使用哈希表作为 Set 类型的底层数据结构。


## 常用命令

- 基本运算
    - 添加元素: `SADD key member [member ...]`
    - 删除元素: `SREM key member [member ...]`
    - 获取所有元素: `SMEMBERS key`
    - 获得元素个数: `SCARD key`
    - 是否在集合中: `SISMEMBER key member`
    - 随机删除元素: `SPOP key [count]`
- 集合运算
    - 交集运算: `SINTER key [key ...]`
    - 并集运算: `SUNION key [key ...]`
    - 差集运算: `SDIFF key [key ...]`

    ✨将结果保存在目标集合中: `[SINTER][SUNION][SDIFF]STORE destination key [key ...]`



## 常用场景


集合的主要几个特性，无序、不可重复、支持并交差等操作。


### 点赞

Set 类型可以保证一个用户只能点一个赞，这里举例一个场景，key是文章id，value是用户id。
`uid:1`、`uid:2`、`uid:3`三个用户分别对`article:1`文章点赞了。

1. 用户点赞
    - uid:1用户对文章article:1点赞: `SADD article:1 uid:1`
    - uid:2用户对文章article:1点赞: `SADD article:1 uid:2`
    - uid:3用户对文章article:1点赞: `SADD article:1 uid:3`
2. uid:1 取消了对 article:1 文章点赞: `SREM article:1 uid:1`
3. 获取 article:1 文章所有点赞用户: `SMEMBERS article:1`
4. 获取 article:1 文章的点赞用户数量: `SCARD article:1`
5. 判断用户 uid:1 是否对文章 article:1 点赞了: `SISMEMBER article:1 uid:1`




### 共同关注

Set 类型支持交集运算，所以可以用来计算共同关注的好友、公众号等。

key 可以是用户 id，value 则是已关注的公众号的 id。

1. 设置用户的关注公众号

    - uid:1 用户关注公众号 id 为 5、6、7、8、9: `SADD uid:1 5 6 7 8 9`
    - uid:2 用户关注公众号 id 为 7、8、9、10、11: `SADD uid:2 7 8 9 10 11`

2. 获取uid:1和uid:2的共同关注 `SINTER uid:1 uid:2`

3. 给 uid:2 推荐 uid:1 关注的公众号：`SDIFF uid:1 uid:2`

4. 验证某个公众号是否同时被 uid:1 或 uid:2 关注：`SISMEMBER uid:1 5 \ SISMEMBER uid:2 5`


### 抽奖活动

存储某活动中中奖的用户名 ，Set 类型因为有去重功能，可以保证同一个用户不会中奖两次。

1. key 为抽奖活动名，value 为员工名称，把所有员工名称放入抽奖箱：`SADD lucky Tom Jerry John Sean Marry Lindy Sary Mark`
2. 允许重复抽奖
    1. 抽取1个一等奖：`SRANDMEMBER lucky 1`
    2. 抽取2个二等奖: `SRANDMEMBER lucky 2`
    3. 抽取3个三等奖: `SRANDMEMBER lucky 3`
3. 不允许重复抽奖

    1. 抽取1个一等奖：`SPOP lucky 1`
    2. 抽取2个二等奖: `SPOP lucky 2`
    3. 抽取3个三等奖: `SPOP lucky 3`

## 参考

- https://cloud.tencent.com/developer/article/2320413
