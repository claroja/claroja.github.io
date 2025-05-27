# DAG

DAG: 有向无环图

在一个任务(application)中，1个Action会产生1个DAG也就是1个job，如果有3个Action就会有3个DAG，3个job


## stage

窄依赖：父RDD的一个分区，将数据发给一个子RDD的分区。一对一
宽依赖：父RDD的一个分区，将数据发给多个子RDD的分区。一对多，也就是shuffle
spark会根据DAG的宽依赖划分不同的DAG阶段，遇到宽依赖就划分一个阶段，称之为stage

## task
一个task是一个具体的线程，一个RDD运行在一个线程内（CPU的一个核心）


## 并行度



配置文件中设置： `conf/spark-defaults.conf` `spark.default.parallelism 100`
客户端提交时设置： `bin/spark-submit --conf "spark.default.parallelism 100"`
代码中设置：`conf = SparkConf(), conf.set("spark.default.parallelism 100")`

不推荐使用针对RDD的并行度计算:`repartition`,`coalesce`,`partitionBy`

refs:
spark_DAG