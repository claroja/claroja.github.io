# actionFunc


## countByKey
统计key出现的次数
```python
rdd = sc.textFile("../data/input/words.txt")
rdd2 = rdd.flatMap(lambda x: x.split(" ")).map(lambda x: (x, 1))
## 通过countByKey来对key进行计数, 这是一个Action算子
result = rdd2.countByKey()
```

## collect
将RDD各个分区的数据，统一收集到Driver中，形成一个list对象
```python
rdd.collect()
```

## reduce

```python
rdd.sc.parallelize(range(1,10))
rdd.reduce(lambda a, b: a+ b)
```



## fold
类似reduce，但聚合是有初始值的，初始值会作用在：
- 分区内聚合
- 分区间聚合
```python
rdd = sc.parallelize([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)
## 10 + (10+1+2+3) + (10+4+5+6) + (10 + 7 + 8 + 9)
rdd.fold(10, lambda a, b: a + b)  # 85
```

## first
取出RDD的第一个元素
```python
rdd.first()
```

## take
取出RDD的前N个元素
```python
rdd.take(n)
```

## top
对RDD进行降序排序，取出前N个
```python
rdd.top(n)
```

## count
计算RDD有多少条数据
```python
rdd.count()
```
## takeSample
随机抽样RDD数据

```python
rdd = sc.parallelize([1, 3, 5, 3, 1, 3, 2, 6, 7, 8, 6], 1)
rdd.takeSample(False, 5, 1)  # [6, 3, 1, 1, 8] 
```

## takeOrdered
对RDD进行排序取前N个
- 参数1： 要几个数据
- 参数2：控制升序还是降序

```python
rdd = sc.parallelize([1, 3, 2, 4, 7, 9, 6], 1)
rdd.takeOrdered(3) # [1, 2, 3]
rdd.takeOrdered(3, lambda x: -x)  # [9, 7, 6]

```

## foreach
对RDD的每一个元素执行操作，没有返回值
保存数据，不经过dirver，每个分区在Executor直接执行
```python
rdd = sc.parallelize([1, 3, 2, 4, 7, 9, 6], 1)
rdd.foreach(lambda x: print(x * 10))
```


## saveAsTextFile
保存数据，不经过dirver，每个分区在Executor直接写出，每个分区各有一个文件

```python
rdd = sc.parallelize([1, 3, 2, 4, 7, 9, 6], 3)
rdd.saveAsTextFile("hdfs://node1:8020/output/out1")
```


refs:
pyspark_actionFunc