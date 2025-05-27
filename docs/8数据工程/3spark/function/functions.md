# functions


## transformation function
返回值仍旧是RDD的，称为转换算子。这类算子是懒加载的`lazy`，如果没有`action`算子，`transformation`是不工作的


## action function
返回值不是`RDD`的，就是`action`算子

`transformation`相当于构建执行计划，`action`是一个指令让这个执行计划工作。


```python
file_rdd = sc.textFile("./words.txt") # 此时数据为 (hello word)， 也可以读取 "hdfs://node1:8020/input/words.txt"
words_rdd = file_rdd.flatMap(lambda line: line.split(" ")) # 将单词进行切割, (hello) (word)
words_with_one_rdd = words_rdd.map(lambda x: (x, 1)) # 将单词转换为元组对象, (hello,1) (word,1)
result_rdd = words_with_one_rdd.reduceByKey(lambda a, b: a + b) # 按照元组第一个元素分组，并相加(hello,4)
result_rdd.collect()
```

file_rdd - word_rdd - words_with_one_rdd - result_rdd 都是 `transformation`
collect() 才是`action`