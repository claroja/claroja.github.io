# Kafka的Python API

## 安装

使用 `kafka-python`的库去操作kafka

安装：

```shell
pip install kafka-python
```





## 生产者

### 简单的发送数据到kafka

```python
"""
演示Kafka的生产者代码
"""
# 导入包，导入KafkaProducer对象
from kafka import KafkaProducer

# 构建生产者对象(class)
producer = KafkaProducer(bootstrap_servers=['node1:9092', 'node2:9092', 'node3:9092'])

# 调用生产者的send方法即可发送数据
for i in range(10):
    producer.send('testpython', f"I love you {i}".encode("UTF-8"))

# 清空缓冲区提交
producer.flush()

```



> kafka-python库，默认是异步写入数据到kafka
>
> 异步是指：
>
> - 当调用send方法的时候，会将数据写入到程序内的缓冲区中
> - 会有额外的线程，从缓冲区中取出数据写入kafka
> - 对于send方法来说，只要放入缓冲区就是成功
> - 当程序结束的时候，我们手动调用flush()，清空缓冲区（把里面剩余的全部提交了才算ok）

### 获取发送的反馈信息

```python
"""
演示Kafka的生产者代码
"""
# 导入包，导入KafkaProducer对象
from kafka import KafkaProducer

# 构建生产者对象(class)
producer = KafkaProducer(bootstrap_servers=['node1:9092', 'node2:9092', 'node3:9092'])

for i in range(10):
    # 调用生产者的send方法即可发送数据，可以得到一个返回值，这个返回值称之为futher
    futher = producer.send('testpython2', f"heiheihei".encode("UTF-8"))

    # 通过futher.get可以获取到反馈信息
    # get(10)表示10秒超时，如果10秒了还没得到反馈消息就报错
    result = futher.get(10)

    # 这个result对象中就有3个属性，如下，记录了反馈的主题、分区和offset
    topic = result.topic
    partition = result.partition
    offset = result.offset
    print(f"发送到kafka一条数据，发送的主题是：{topic}")
    print(f"发送到kafka一条数据，发送的分区是：{partition}")
    print(f"发送到kafka一条数据，发送的offset是：{offset}")

```

> 这个代码没有flush缓冲区是因为：
>
> get()方法会阻塞，目的是等待发送数据的反馈
>
> 当它等待到反馈信息后，就代表数据肯定100%进入kafka了，没进入kafka 是没有反馈消息的。





## 消费者

简单的通过API消费数据

```python
"""
演示kafak的消费者代码
"""
# 导入KafkaConsumer对象
from kafka import KafkaConsumer

# 构建KafkaConsumer对象
consumer = KafkaConsumer(
    'testpython4',  # topic
    group_id="mygp",    # 组id
    bootstrap_servers=['node1:9092', 'node2:9092', 'node3:9092']    # broker地址
)

# 通过for循环从consumer对象中取出message对象
for message in consumer:
    # for循环是无限循环,启动后就等着，有数据就干活没数据就一直等
    # 我们 需要的数据都在message对象内
    topic = message.topic           # 数据来自于哪个主题
    partition = message.partition   # 数据来自于哪个分区
    offset = message.offset         # 数据在当前分区内的下标
    key = message.key               # 数据的key
    value = message.value.decode("UTF-8")           # 数据本身，是字节数组需要反转回字符串

    print(f"取出数据，topic是：{topic}")
    print(f"取出数据，partition是：{partition}")
    print(f"取出数据，offset是：{offset}")
    print(f"取出数据，key是：{key}")
    print(f"取出数据，value是：{value}")

```





## 消息序列化方法

数据在写入Kafka之前，可以被序列化（被处理），通过

producer对象的：value_serializer参数实现



```python
# 1- 构建一个kafka的生产者:
producer = KafkaProducer(
    bootstrap_servers=['node1:9092', 'node2:9092', 'node3:9092'],
    acks='all',
    value_serializer=函数（定义的或者lambda的都可以）
)

producer.send(topic=xxx, value=xxx)

上述代码的意思就是：
在value被发送到kafka之前，会被value_serializer参数中记录的函数处理一下，将处理的结果发送给kafka
```



```python
# 1- 构建一个kafka的生产者:
producer = KafkaProducer(
    bootstrap_servers=['node1:9092', 'node2:9092', 'node3:9092'],
    acks='all',
    value_serializer=lambda s: s.encode("UTF-8")
)

producer.send(topic=xxx, value="hello")

# 如上代码，每一个value字符串在写入kafka之前，都会被value_serializer记录的lambda匿名函数，处理成字节数组后发送到kafka
```
