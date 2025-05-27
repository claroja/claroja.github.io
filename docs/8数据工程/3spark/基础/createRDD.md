# createRDD


## parallelized 本地对象

`rdd = sc.parallelize(集合对象,分区数)`

```python
rdd = sc.parallelize([1, 2, 3, 4, 5, 6, 7, 8, 9])  # 本地集合 -> 分布式对象(RDD)
rdd = sc.parallelize([1, 2, 3], 3)  # 指定分区量，默认是cpu数量 
rdd.getNumPartitions() # 查看分区数
```


## external data 读取文件

### textFile
`rdd = sc.textFile(文件路径,分区数量)`
```python
rdd = sc.textFile("./text.txt)
rdd = sc.textFile("../data/input/words.txt", 100)  # 最小分区数是参考值, Spark有自己的判断, 你给的太大Spark不会理会
rdd = sc.textFile("hdfs://node1:8020/input/words.txt")
```

### wholeTextFiles
`sc.wholeTextFiles(路径)`

```python
rdd= sc.wholeTextFiles("../data/input/tiny_files")
```

refs:
