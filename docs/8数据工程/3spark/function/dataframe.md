# dataframe



## create

### from RDD

```python
## coding:utf8

from pyspark.sql import SparkSession
## 0. 构建执行环境入口对象SparkSession
spark = SparkSession.builder.\
    appName("test").\
    master("local[*]").\
    getOrCreate()
sc = spark.sparkContext

## 构建RDD
rdd = sc.textFile("../data/input/sql/people.txt").\
    map(lambda x: x.split(",")).\
    map(lambda x: (x[0], int(x[1])))

## 构建DataFrame对象
## 参数1 被转换的RDD
## 参数2 指定列名, 通过list的形式指定, 按照顺序依次提供字符串名称即可
df = spark.createDataFrame(rdd, schema=['name', 'age'])  # 等价df1 = rdd.toDF(["name", "age"])

## 打印DataFrame的表结构
df.printSchema()

## 打印df中的数据
## 参数1 表示 展示出多少条数据, 默认不传的话是20
## 参数2 表示是否对列进行截断, 如果列的数据长度超过20个字符串长度, 后续的内容不显示以...代替
## 如果给False 表示不阶段全部显示, 默认是True
df.show(20, False)
```

### StructType

可以用来指定类型

```python
## coding:utf8

from pyspark.sql import SparkSession
from pyspark.sql.types import StructType, StringType, IntegerType
## 0. 构建执行环境入口对象SparkSession
spark = SparkSession.builder.\
    appName("test").\
    master("local[*]").\
    getOrCreate()
sc = spark.sparkContext

## 基于RDD转换成DataFrame
rdd = sc.textFile("../data/input/sql/people.txt").\
    map(lambda x: x.split(",")).\
    map(lambda x: (x[0], int(x[1])))

## 构建表结构的描述对象: StructType对象
schema = StructType().add("name", StringType(), nullable=True).\
    add("age", IntegerType(), nullable=False)

## 基于StructType对象去构建RDD到DF的转换
df = spark.createDataFrame(rdd, schema=schema)

df.printSchema()
df.show()

```


## file

```python
sparksession.read.format("text|csv|json|parquet|orc|avro|jdbc|......")
.option("K", "V") # option可选
.schema(StructType | String) # STRING的语法如.schema("name STRING", "age INT")
.load("被读取文件的路径, 支持本地文件系统和HDFS")
```


### text

```python
from pyspark.sql import SparkSession
from pyspark.sql.types import StructType, StringType, IntegerType
import pandas as pd

## 0. 构建执行环境入口对象SparkSession
spark = SparkSession.builder.\
    appName("test").\
    master("local[*]").\
    getOrCreate()
## 构建StructType, text数据源, 读取数据的特点是, 将一整行只作为`一个列`读取, 默认列名是value 类型是String
schema = StructType().add("data", StringType(), nullable=True)
df = spark.read.format("text").\
    schema(schema=schema).\
    load("../data/input/sql/people.txt")

df.printSchema()
df.show()
```

### json
json文件自带schema信息
```python
## coding:utf8

from pyspark.sql import SparkSession
from pyspark.sql.types import StructType, StringType, IntegerType
## 0. 构建执行环境入口对象SparkSession
spark = SparkSession.builder.\
    appName("test").\
    master("local[*]").\
    getOrCreate()
sc = spark.sparkContext

## JSON类型自带有Schema信息
df = spark.read.format("json").load("../data/input/sql/people.json")
df.printSchema()
df.show()

```

### csv

```python
## coding:utf8

from pyspark.sql import SparkSession
from pyspark.sql.types import StructType, StringType, IntegerType
import pandas as pd

## 0. 构建执行环境入口对象SparkSession
spark = SparkSession.builder.\
    appName("test").\
    master("local[*]").\
    getOrCreate()
sc = spark.sparkContext

## 读取CSV文件
df = spark.read.format("csv").\
    option("sep", ";").\
    option("header", True).\
    option("encoding", "utf-8").\
    schema("name STRING, age INT, job STRING").\
    load("../data/input/sql/people.csv")

df.printSchema()
df.show()

```
### parquet
```python
## coding:utf8

from pyspark.sql import SparkSession
from pyspark.sql.types import StructType, StringType, IntegerType
import pandas as pd
## 0. 构建执行环境入口对象SparkSession
spark = SparkSession.builder.\
    appName("test").\
    master("local[*]").\
    getOrCreate()
sc = spark.sparkContext

## 读取parquet类型的文件
df = spark.read.format("parquet").load("../data/input/sql/users.parquet")

df.printSchema()
df.show()

```



## code style

### dsl
```python
## coding:utf8

from pyspark.sql import SparkSession
from pyspark.sql.types import StructType, StringType, IntegerType
import pandas as pd

## 0. 构建执行环境入口对象SparkSession
spark = SparkSession.builder.\
    appName("test").\
    master("local[*]").\
    getOrCreate()
sc = spark.sparkContext

df = spark.read.format("csv").\
    schema("id INT, subject STRING, score INT").\
    load("../data/input/sql/stu_score.txt")

## Column对象的获取
id_column = df['id']
subject_column = df['subject']

## DLS风格演示
df.select(["id", "subject"]).show()
df.select("id", "subject").show()
df.select(id_column, subject_column).show()

## filter API
df.filter("score < 99").show()
df.filter(df['score'] < 99).show()

## where API
df.where("score < 99").show()
df.where(df['score'] < 99).show()

## group By API
df.groupBy("subject").count().show()
df.groupBy(df['subject']).count().show()


## df.groupBy API的返回值 GroupedData
## GroupedData对象 不是DataFrame
## 它是一个 有分组关系的数据结构, 有一些API供我们对分组做聚合
## SQL: group by 后接上聚合: sum avg count min man
## GroupedData 类似于SQL分组后的数据结构, 同样有上述5种聚合方法
## GroupedData 调用聚合方法后, 返回值依旧是DataFrame
## GroupedData 只是一个中转的对象, 最终还是要获得DataFrame的结果
r = df.groupBy("subject")

```

