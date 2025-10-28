
# [BitMap](https://cloud.tencent.com/developer/article/2320426)

## 最佳实践

### 考察问

- 签到统计: 🌰假设我们要统计ID为100的用户在2022年6月份的签到情况，就可以按照下面的步骤进行操作。✨key是`()`, offset是`()`, value是`()`

    1. 执行下面的命令，记录该用户6月3号已签到。`()`
    2. 统计该用户在6月份的签到次数。`()`
    3. 统计这个月首次打卡时间. `()`

- 判断用户登陆态: 🌰假如我们要判断ID = 10086的用户的登陆情况. ✨key是`()`, offset是`()`, value是`()`

    1. 执行以下指令，表示用户已登录。`()`
    2. 检查该用户是否登陆，返回值1表示已登录。`()`
    3. 登出，将offset对应的value设置成0。`()`

- 连续签到用户总数: 🌰假设要统计3天连续打卡的用户数，则是将三个Bitmap进行AND操作，并将结果保存到destmap中，接着对destmap执行BITCOUNT统计，如下命令：✨首先实现判断用户是否登录过: key是`()`, offset是用户`()`, value是`()`. 再将3个bitmap进行与运算

    1. 与操作. `()`
    2. 统计bit位 = 1的个数. `()`

### 考察点

- 签到统计: 🌰假设我们要统计ID为100的用户在2022年6月份的签到情况，就可以按照下面的步骤进行操作。✨key是`用户ID和月份`, offset是`日期`, value是`登录状态`

    1. 执行下面的命令，记录该用户6月3号已签到。`SETBIT uid:sign:100:202206 2 1`
    2. 统计该用户在6月份的签到次数。`BITCOUNT uid:sign:100:202206`
    3. 统计这个月首次打卡时间. `BITPOS uid:sign:100:202206 1`

- 判断用户登陆态: 🌰假如我们要判断ID = 10086的用户的登陆情况. ✨key是`日期`, offset是`用户ID`, value是`是否登录`

    1. 执行以下指令，表示用户已登录。`SETBIT login_status 10086 1`
    2. 检查该用户是否登陆，返回值1表示已登录。`GETBIT login_status 10086`
    3. 登出，将offset对应的value设置成0。`SETBIT login_status 10086 0`

- 连续签到用户总数: 🌰假设要统计3天连续打卡的用户数，则是将三个Bitmap进行AND操作，并将结果保存到destmap中，接着对destmap执行BITCOUNT统计，如下命令：✨首先实现判断用户是否登录过: key是`日期`, offset是用户`ID`, value是`登录状态`. 再将3个bitmap进行与运算

    1. 与操作. `BITOP AND destmap bitmap:01 bitmap:02 bitmap:03`
    2. 统计bit位 = 1的个数. `BITCOUNT destmap`

## 概念

Bitmap，即位图，是一串连续的二进制数组（0和1），可以通过偏移量（offset）定位元素。适合一些数据量大且使用二值统计的场景, 比如签到、判断用户登陆状态、连续签到用户总数等。

## 常见命令

1. 指定位置设置值: `SETBIT key offset value`
2. 指定位置查询值: `GETBIT key offset`
3. 范围内1的个数: `BITCOUNT key [start end [BYTE|BIT]]`
4. 第一次出现指定值的位置: `BITPOS key bitValue [start] [end]`
5. 与或异或取反: `BITOP [operations] destkey key`

    - `AND` 与运算: `&`, 同时为1，结果为1，任意一方为0时，结果为0
    - `OR` 或运算: `|`, 任意一方为1时，结果为1, 同时为0，结果为0
    - `XOR` 异或: `^`, 不同则为1，相同则为0。
    - `NOT` 取反: `~`,

    ✨当 BITOP 处理不同长度的字符串时，较短的那个字符串所缺少的部分会被看作 0 。空的 key 也被看作是包含 0 的字符串序列。

## 使用场景

Bitmap 类型非常适合二值状态统计的场景

### 签到统计

在签到打卡的场景中，我们只用记录签到（1）或未签到（0），所以它就是非常典型的二值状态。

签到统计时，每个用户一天的签到用1个bit位就能表示，一个月（假设是31天）的签到情况用31个bit位就可以，而一年的签到也只需要用365个bit位

🌰假设我们要统计ID 100的用户在2022年6月份的签到情况，就可以按照下面的步骤进行操作。

1. 执行下面的命令，记录该用户6月3号已签到。`SETBIT uid:sign:100:202206 2 1`
2. 统计该用户在 6 月份的签到次数。`BITCOUNT uid:sign:100:202206`
3. 统计这个月首次打卡时间. `BITPOS uid:sign:100:202206 1`

### 判断用户登陆态

Bitmap 提供了 GETBIT、SETBIT 操作，通过一个偏移值 offset 对 bit 数组的 offset 位置的 bit 位进行读写操作，需要注意的是 offset 从 0 开始。

只需要一个 key = login_status 表示存储用户登陆状态集合数据， 将用户 ID 作为 offset，在线就设置为 1，下线设置 0。通过 GETBIT 判断对应的用户是否在线。 50000 万用户只需要 6 MB 的空间。

🌰假如我们要判断 ID = 10086 的用户的登陆情况：

1. 执行以下指令，表示用户已登录。`SETBIT login_status 10086 1`
2. 检查该用户是否登陆，返回值1表示已登录。`GETBIT login_status 10086`
3. 登出，将 offset 对应的 value 设置成 0。`SETBIT login_status 10086 0`

### 连续签到用户总数

如何统计出这连续7天连续打卡用户总数呢？

我们把每天的日期作为Bitmap的key，userId作为offset，若是打卡则将offset位置的bit设置成1。

7天, 则一共有7个这样的Bitmap，如果我们能对这7个Bitmap的对应的bit位做`与`运算。同样的UserID offset都是一样的，当一个userID在7个Bitmap对应对应的offset位置的bit = 1就说明该用户7天连续打卡。

结果保存到一个新Bitmap中，我们再通过BITCOUNT统计bit = 1的个数便得到了连续打卡7天的用户总数了。

🌰假设要统计3天连续打卡的用户数，则是将三个Bitmap进行AND操作，并将结果保存到destmap中，接着对destmap执行BITCOUNT统计，如下命令：

1. 与操作. `BITOP AND destmap bitmap:01 bitmap:02 bitmap:03`
2. 统计 bit 位 =  1 的个数. `BITCOUNT destmap`

即使一天产生一个亿的数据，Bitmap 占用的内存也不大，大约占 12 MB 的内存（108/8/1024/1024），7 天的 Bitmap 的内存开销约为 84 MB

## 参考

- <https://cloud.tencent.com/developer/article/2320426>
