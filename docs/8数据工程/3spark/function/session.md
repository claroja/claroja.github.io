# session


```python
## coding:utf8

## SparkSession对象的导包, 对象是来自于 pyspark.sql包中
from pyspark.sql import SparkSession

## 构建SparkSession执行环境入口对象
spark = SparkSession.builder.\
    appName("test").\
    master("local[*]").\
    getOrCreate()
## sc = spark.sparkContext # 通过SparkSession对象 获取 SparkContext对象



## 创建dataframe
df = spark.read.csv("../data/input/stu_score.txt", sep=',', header=False)
df2 = df.toDF("id", "name", "score")
df2.printSchema()  # 查看表结构
df2.show()  # 查看表内容

## DSL 风格
df2.where("name='语文'").limit(5).show()
## SQL 风格
df2.createTempView("score")

spark.sql("""
    SELECT * FROM score WHERE name='语文' LIMIT 5
""").show()
```

refs:
pyspark_session