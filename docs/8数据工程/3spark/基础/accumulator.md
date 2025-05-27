# accumulator

累加器原理是将Dirver将累加器变量发送给executor，这样executor就能操作这个变量.

注意：
因为rdd是过程数据，如果rdd被多次使用，可能会重新构建此rdd，而造成多次执行。需要加cache或者checkpoint


```python
## coding:utf8
import time

from pyspark import SparkConf, SparkContext
from pyspark.storagelevel import StorageLevel

conf = SparkConf().setAppName("test").setMaster("local[*]")
sc = SparkContext(conf=conf)

rdd = sc.parallelize([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)


acmlt = sc.accumulator(0) # Spark提供的累加器变量, 

def map_func(data):
    global acmlt
    acmlt += 1
    # print(acmlt)

rdd2 = rdd.map(map_func)
rdd2.cache()
rdd2.collect()

rdd3 = rdd2.map(lambda x:x)
rdd3.collect()
print(acmlt)
```

refs:
