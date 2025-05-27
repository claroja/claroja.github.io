# cache


rdd1 -> rdd2 -> rdd3 -> rdd4 ...
                  |->  rdd5

前一个RDD计算结束后，会被销毁，以保证每个分区内存充分利用。
但是如果有其他rdd依赖销毁的rdd，比如在计算rdd4时，rdd3被销毁，而rdd5计算又需要rdd3，此时会再将rdd1 -> rdd2 -> rdd3 链路计算一遍。为了避免这种情况，我们可以通过`cache()`或`persist()`方法将rdd3缓存起来，这样就不需要重新计算。
注意：最后需要使用`unpersist()`方法来清理缓存

```python
## coding:utf8
import time
from pyspark import SparkConf, SparkContext
from pyspark.storagelevel import StorageLevel

conf = SparkConf().setAppName("test").setMaster("local[*]")
sc = SparkContext(conf=conf)

rdd1 = sc.textFile("../data/input/words.txt")
rdd2 = rdd1.flatMap(lambda x: x.split(" "))
rdd3 = rdd2.map(lambda x: (x, 1))

rdd3.cache()  # 同样的效果 rdd3.persist(StorageLevel.MEMORY_AND_DISK_2)

rdd4 = rdd3.reduceByKey(lambda a, b: a + b)
print(rdd4.collect())

rdd5 = rdd3.groupByKey()
rdd6 = rdd5.mapValues(lambda x: sum(x))
print(rdd6.collect())

rdd3.unpersist()  #
time.sleep(100000)
```

refs:
