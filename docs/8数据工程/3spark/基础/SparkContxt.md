# SparkContxt

Spark RDD 编程的程序入口对象是SparkContext对象(不论何种编程语言),本质上, SparkContext对编程来说, 主要功能就是创建第一个RDD出来


```python
from pyspark import SparkConf, SparkContext
conf = SparkConf().setAppName("test").setMaster("local[*]")
sc = SparkContext(conf=conf)
```

refs:
