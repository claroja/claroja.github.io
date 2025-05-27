# checkpoint



checkpoint vs cache

- checkpoint 将所有分数数据保存在一个HDFS文件中，而缓存分别保存在各个分区上，分区越多，风险越高
- checkpoint 只能写入硬盘， 而cache可以写入内存，也可以写入硬盘，所以cache速度快
- checkpoint 不保留血缘关系，cache保留血缘关系



```python
## coding:utf8
import time

from pyspark import SparkConf, SparkContext
from pyspark.storagelevel import StorageLevel
conf = SparkConf().setAppName("test").setMaster("local[*]")
sc = SparkContext(conf=conf)

## 1. 告知spark, 开启CheckPoint功能
sc.setCheckpointDir("hdfs://node1:8020/output/ckp")
rdd1 = sc.textFile("../data/input/words.txt")
rdd2 = rdd1.flatMap(lambda x: x.split(" "))
rdd3 = rdd2.map(lambda x: (x, 1))

## 调用checkpoint API 保存数据即可
rdd3.checkpoint()

rdd4 = rdd3.reduceByKey(lambda a, b: a + b)
print(rdd4.collect())

rdd5 = rdd3.groupByKey()
rdd6 = rdd5.mapValues(lambda x: sum(x))
print(rdd6.collect())

rdd3.unpersist()
time.sleep(100000)

```

refs:
pyspark_checkpoint