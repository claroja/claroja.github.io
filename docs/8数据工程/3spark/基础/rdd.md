# rdd


RDD（Resilient Distributed Dataset）叫做弹性分布式数据集，是Spark中最基本的数据抽象，代表一个不可变、可
分区、里面的元素可并行计算的集合。

- Dataset：一个数据集合，用于存放数据的。
- Distributed：RDD中的数据是分布式存储的，可用于分布式计算。
- Resilient：RDD中的数据可以存储在内存中或者磁盘中。

## 特性

### 1. RDD是有分区的
一个RDD会有多个分区，分区是RDD数据存储的最小单位
分区是物理概念，RDD是逻辑概念


```python

from pyspark import SparkConf, SparkContext
conf = SparkConf().setAppName("test").setMaster("local[*]")
sc = SparkContext(conf=conf)

## 创建RDD, 本地集合 -> 分布式对象(RDD)
rdd = sc.parallelize([1, 2, 3, 4, 5, 6, 7, 8, 9])
## parallelize方法, 没有给定 分区数, 默认分区数是多少?  根据CPU核心来定
print("默认分区数: ", rdd.getNumPartitions()) # num_cpu

rdd = sc.parallelize([1, 2, 3, 4, 5, 6, 7, 8, 9],3)
print("分区数: ", rdd.getNumPartitions())  # 3
sc.parallelize([1, 2, 3, 4, 5, 6, 7, 8, 9],3).glom().collect()  # 具体的数据分区 [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```


### 2. RDD的方法会作用在其所有分区上
RDD 3个分区分别执行了map操作，每个分区的所有元素都乘以10
```python
sc.parallelize([1, 2, 3, 4, 5, 6, 7, 8, 9],3).glom().collect()  # [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
sc.parallelize([1, 2, 3, 4, 5, 6, 7, 8, 9],3).map(lambda x: x* 10).glom().collect() # [[10, 20, 30], [40, 50, 60], [70, 80, 90]]
```

### 3. RDD之间是有依赖关系的
file_rdd -> words_rdd -> words_with_one_rdd -> result_rdd

```python
file_rdd = sc.textFile("./words.txt") # 此时数据为 (hello word)， 也可以读取 "hdfs://node1:8020/input/words.txt"
## 3. 计算
words_rdd = file_rdd.flatMap(lambda line: line.split(" ")) # 将单词进行切割, (hello) (word)
words_with_one_rdd = words_rdd.map(lambda x: (x, 1)) # 将单词转换为元组对象, (hello,1) (word,1)
result_rdd = words_with_one_rdd.reduceByKey(lambda a, b: a + b) # 按照元组第一个元素分组，并相加(hello,4)
## 4. 搜集结果
print(result_rdd.collect())
```

### 4. key_value型(元组)的RDD可以有分区器
默认分区器：Hash分区规则，可以手动设置一个分区器(rdd.partitionBy方法来设置)，例如
```sh
("hadoop",3)
("flink",5)
("spark",2)
("hadoop",2)
("flink",1)
```
默认是对第0位，进行hash，然后将相同的值放在同一个分区中，既`("hadoop",3),("hadoop",2)`分在一起

### 5.RDD的分区规划，会尽量靠近数据所在服务器
这样可以本地读取，避免了网络IO


