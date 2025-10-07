# flink_sink


## mysql sink

大致流程：

1. 创建class实现RichSinkFunction,
2. 重写invoke方法，执行我们真正写入逻辑的方法
3. 利用open和close方法实现对数据库连接的管理


## flinkkafkaproducer

利用flink提供的flinkkafkaproducer实现写出数据到kafka中，

## redissink


借助于flink提供的redissink我们可以方便的把数据写入redis中，














