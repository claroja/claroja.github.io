# wordCount


```data
hello spark
hello hadoop
hello flink
```


```python
from pyspark import SparkConf, SparkContext

## 1. 配置
conf = SparkConf().setAppName("WordCountHelloWorld").setMaster('local') # 任务名及运行方式
sc = SparkContext(conf=conf)# 通过SparkConf对象构建SparkContext对象
## 2. 读取文件
file_rdd = sc.textFile("./words.txt") # 此时数据为 (hello word)， 也可以读取 "hdfs://node1:8020/input/words.txt"
## 3. 计算
words_rdd = file_rdd.flatMap(lambda line: line.split(" ")) # 将单词进行切割, (hello) (word)
words_with_one_rdd = words_rdd.map(lambda x: (x, 1)) # 将单词转换为元组对象, (hello,1) (word,1)
result_rdd = words_with_one_rdd.reduceByKey(lambda a, b: a + b) # 按照元组第一个元素分组，并相加(hello,4)
## 4. 搜集结果
print(result_rdd.collect())
result_rdd.saveAsTextFile("./count.txt")
```


![](./wordCount/1.png)