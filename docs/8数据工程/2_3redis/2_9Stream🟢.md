# Stream

## 概念

Redis Stream 是 Redis 5.0 版本新增加的数据类型，Redis 专门为消息队列设计的数据类型。

在 Redis 5.0 Stream 没出来之前，消息队列的实现方式都有着各自的缺陷，例如：

发布订阅模式，不能持久化也就无法可靠的保存消息，并且对于离线重连的客户端不能读取历史消息的缺陷；
List 实现消息队列的方式不能重复消费，一个消息消费完就会被删除，而且生产者需要自行实现全局唯一 ID。

## 常用命令

- 插入消息，保证有序，可以自动生成全局唯一 ID: `XADD key [NOMKSTREAM] [MAXLEN|MINID [=|~] threshold [LIMIT count]] *|id field value [field value ...]`
- 根据消息 ID 删除消息: `XDEL key id [id ...]`
- 查询消息长度: `XLEN key`
- 用于读取消息，可以按 ID 读取数据: `XREAD [COUNT count] [BLOCK milliseconds] STREAMS key [key ...] id [id ...]`
- 读取区间消息: `XRANGE key start end [COUNT count]`
- 裁剪队列消息个数: `XTRIM key MAXLEN|MINID [=|~] threshold [LIMIT count]`
- 创建消费者组: `XGROUP CREATE key groupname id|$ [MKSTREAM] [ENTRIESREAD entries_read]`
- 按消费组形式读取消息: `XREADGROUP GROUP group consumer [COUNT count] [BLOCK milliseconds] [NOACK] STREAMS key [key ...] id [id ...]`
- 命令可以用来查询每个消费组内所有消费者「已读取、但尚未确认」的消息: `XPENDING`
- 命令用于向消息队列确认消息处理已完成: `XACK`

## 应用场景

### 普通消息队列

1. 生产者通过 XADD 命令插入一条消息：

    ```sh
    # * 表示让 Redis 为插入的数据自动生成一个全局唯一的 ID
    # 往名称为 mymq 的消息队列中插入一条消息，消息的键是 name，值是 sid10t
    XADD mymq * name sid10t  # "1665058759764-0"
    ```

    插入成功后会返回全局唯一的 ID："1665058759764-0"。消息的全局唯一 ID 由两部分组成：

    - 第一部分 “1665058759764” 是数据插入时，以毫秒为单位计算的当前服务器时间；
    - 第二部分表示插入消息在当前毫秒内的消息序号，这是从 0 开始编号的。例如，“1665058759764-0” 就表示在 “1665058759764” 毫秒内的第 1 条消息。

2. 消费者通过 XREAD 命令从消息队列中读取消息时，可以指定一个消息 ID，并从这个消息 ID 的下一条消息开始进行读取（注意是输入消息 ID 的下一条信息开始读取，不是查询输入 ID 的消息）

    ```sh
    XREAD STREAMS mymq 1665058759764-0  # (nil)
    XREAD STREAMS mymq 1665058759763-0
    # 1) 1) "mymq"
    #    2) 1) 1) "1665058759764-0"
    #          2) 1) "name"
    #             2) "sid10t"
    ```

    如果想要实现阻塞读（当没有数据时，阻塞住），可以调用 XRAED 时设定 BLOCK 配置项，实现类似于 BRPOP 的阻塞读取操作。

    ```sh
    # 命令最后的 $ 符号表示读取最新的消息
    XREAD BLOCK 10000 STREAMS mymq $
    # (nil)
    # (10.01s)
    ```


### 分组消息队列

Stream 可以以使用 XGROUP 创建消费组，创建消费组之后，Stream 可以使用 XREADGROUP 命令让消费组内的消费者读取消息。

1. 创建两个消费组，这两个消费组消费的消息队列是 mymq，都指定从第一条消息开始读取：

    ```sh
    # 创建一个名为 group1 的消费组，0-0 表示从第一条消息开始读取。
    XGROUP CREATE mymq group1 0-0  # OK
    # 创建一个名为 group2 的消费组，0-0 表示从第一条消息开始读取。
    XGROUP CREATE mymq group2 0-0  # OK
    ```

2. 消费组 group1 内的消费者 consumer1 从 mymq 消息队列中读取所有消息的命令如下：


    ```sh
    # 命令最后的参数“>”，表示从第一条尚未被消费的消息开始读取。
    XREADGROUP GROUP group1 consumer1 STREAMS mymq >
    # 1) 1) "mymq"
    #    2) 1) 1) "1665058759764-0"
    #          2) 1) "name"
    #             2) "sid10t"
    ```

✨消息队列中的消息一旦被消费组里的一个消费者读取了，就不能再被该消费组内的其他消费者读取了. 但是，不同消费组的消费者可以消费同一条消息




### 发生故障或宕机再次重启


Streams 会自动使用内部队列（也称为 PENDING List）留存消费组里每个消费者读取的消息，直到消费者使用 XACK 命令通知 Streams “消息已经处理完成”。

消费确认增加了消息的可靠性，一般在业务处理完成之后，需要执行 XACK 命令确认消息已经被消费完成. 如果消费者没有成功处理消息，它就不会给 Streams 发送 XACK 命令，消息仍然会留存。此时，消费者可以在重启后，用 XPENDING 命令查看已读取、但尚未确认处理完成的消息。



## 参考

- <https://cloud.tencent.com/developer/article/2320436>
