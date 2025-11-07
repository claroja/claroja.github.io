# ZSET

## 最佳实践

### 考察问

- 💛所有命令均以`()`开头, key代表的是某一SortedSet的`()`, Score代表value的分值, value代表的向Set里添加的值✨唯一个命令key后不直接跟value而是直接跟Score.
- 💛以商品销售量为例，商场mall中有五种商品，销售量为1243，321，98，432，2394；

    1. sale:1 商品的销售量为1243, 以此类推
        - `()`
        - `()`
        - `()`
        - `()`
        - `()`

    2. 商品sale:3又卖出了一个，那么可以使用命令`()`✨注意HINCRBY的Increment在最后, 这个在前
    3. 查看某个商品的销售量，可以使用命令`()`
    4. 获取销售量前三的商品，可以使用命令`()`
    5. 获取销售量在300到1000的商品，可以使用命令`()`

### 考察点

- 所有命令均以`Z`开头, key代表的是某一SortedSet的`名字`, Score代表value的分值, value代表的向Set里添加的值✨唯一个命令key后不直接跟value而是直接跟Score.
- 以商品销售量为例，商场mall中有五种商品，销售量为1243，321，98，432，2394；

    1. sale:1 商品的销售量为1243, 以此类推
        - `ZADD mall 1243 sale:1`
        - `ZADD mall 321 sale:2`
        - `ZADD mall 98 sale:3`
        - `ZADD mall 432 sale:4`
        - `ZADD mall 2394 sale:5`

    2. 商品sale:3又卖出了一个，那么可以使用ZINCRBY命令`ZINCRBY mall 1 sale:3`✨注意HINCRBY的Increment在最后, 这个在前
    3. 查看某个商品的销售量，可以使用ZSCORE命令`ZSCORE mall sale:1`
    4. 获取销售量前三的商品，可以使用ZREVRANGE命令`ZREVRANGE mall 0 2`
    5. 获取销售量在300到1000的商品，可以使用 ZRANGEBYSCORE 命令`ZRANGEBYSCORE mall 300 1000`

## 概念

Zset类型（有序集合类型相比于Set类型多了一个排序属性scor（分值），对于有序集合ZSe 来说，每个存储元素相当于有两个值组成的，一个是有序结合的元素值，一个是排序值。

有序集合保留了集合不能有重复成员的特性（分值可以重复），但不同的是，有序集合中的元素可以排序。

## 原理

在 Redis 7.0 中，压缩列表数据结构已经废弃了，交由 listpack 数据结构来实现了。

## 常用命令

- 基础命令
    - 添加元素: `ZADD key score member [score member ...]`
    - 获取元素: `ZRANGE key start stop [WITHSCORES]` or `ZREVRANGE key start stop [WITHSCORES]`
    - 删除元素: `ZREM key member [member...]`
    - 获得元素分值: `ZSCORE key member`
    - 获取元素个数: `ZCARD key`
    - 增加元素分值: `ZINCRBY key increment member`
    - 获取指定分值元素: `ZRANGEBYSCORE key min max`
    - 获取指定偏移元素: `ZRANGEBYLEX key min max` ✨LEX: lexicographical, 字典序即ascii码
- 集合命令
    - 并集计算(相同元素分值相加): `ZUNIONSTORE destination numkeys key [key ...] [WEIGHTS weight [weight ...]]`
    - 交集计算(相同元素分值相加): `ZINTERSTORE destination numkeys key [key ...] [WEIGHTS weight [weight ...]]`

    ✨注意:
    - 没有支持差集运算
    - numberkeys一共多少个key，WEIGHTS每个key对应的分值乘积

## 应用场景

Zset 类型（Sorted Set，有序集合） 可以根据元素的权重来排序，我们可以自己来决定每个元素的权重值。比如说，我们可以根据元素插入 Sorted Set 的时间确定权重值，先插入的元素权重小，后插入的元素权重大。

在面对需要展示最新列表、排行榜等场景时，如果数据更新频繁或者需要分页显示，可以优先考虑使用 Sorted Set。

### 排行榜

有序集合比较典型的使用场景就是排行榜。例如学生成绩的排名榜、游戏积分排行榜、视频播放排名、电商系统中商品的销量排名等。

🌰我们以商品销售量为例，分别有五种商品，销售量为1243，321，98，432，2394；

1. sale:1 商品的销售量为1243, 以此类推
    - `ZADD mall 1243 sale:1`
    - `ZADD mall 321 sale:2`
    - `ZADD mall 98 sale:3`
    - `ZADD mall 432 sale:4`
    - `ZADD mall 2394 sale:5`

2. 商品 sale:3 又卖出了一个，那么可以使用 ZINCRBY 命令`ZINCRBY mall 1 sale:3`
3. 查看某个商品的销售量，可以使用 ZSCORE 命令`ZSCORE mall sale:1`
4. 获取销售量前三的商品，可以使用 ZREVRANGE 命令`ZREVRANGE mall 0 2 WITHSCORES`
5. 获取销售量在 300 到 1000 的商品，可以使用 ZRANGEBYSCORE 命令`ZRANGEBYSCORE mall 300 1000`

### 电话、姓名排序

使用有序集合的 ZRANGEBYLEX 或 ZREVRANGEBYLEX 可以帮助我们实现电话号码或姓名的排序，我们以 ZRANGEBYLEX （返回指定成员区间内的成员，按 key 正序排列，分数必须相同）为例。

1. 电话排序

    1. 我们可以将电话号码存储到 SortSet 中，然后根据需要来获取号段：
        - `ZADD phone 0 13100111100 0 13110114300 0 13132110901`
        - `ZADD phone 0 13200111100 0 13210414300 0 13252110901`
        - `ZADD phone 0 13300111100 0 13310414300 0 13352110901`
    2. 获取所有号码：`ZRANGEBYLEX phone - +`
    3. 获取132号段的号码：`ZRANGEBYLEX phone [132 (133`
    4. 获取132、133号段的号码：`ZRANGEBYLEX phone [132 (134`

2. 姓名排序

    1. `zadd names 0 Toumas 0 Jake 0 Bluetuo 0 Gaodeng 0 Aimini 0 Aidehua`
    2. 获取所有人的名字: `ZRANGEBYLEX names - +`
    3. 获取名字中大写字母 A 开头的所有人：`ZRANGEBYLEX names [A (B`
    4. 获取名字中大写字母 C 到 Z 的所有人: `ZRANGEBYLEX names [C [Z`

## 参考

- <https://cloud.tencent.com/developer/article/2320416>
