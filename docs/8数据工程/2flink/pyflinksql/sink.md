# sink





## mysql

```python
from pyflink.table import EnvironmentSettings, TableEnvironment

## create a stream TableEnvironment
env_settings = EnvironmentSettings.in_streaming_mode()
table_env = TableEnvironment.create(env_settings)
table_env.get_config().set("pipeline.jars", "file:///D:/code/test_python/jar/flink-connector-jdbc-1.15.1.jar;file:///D:/code/test_python/jar/mysql-connector-java-8.0.23.jar")
table_env.get_config().set("table.exec.resource.default-parallelism", "1")



## 2. 创建 source 表, 使用datagen生成数据
table_env.execute_sql("""
CREATE TABLE source_table (
    f0 INT
    ) WITH (
    'connector' = 'datagen',
    'rows-per-second'='1',
    'fields.f0.start' = '0',
    'fields.f0.end' = '100000',
    'fields.f0.kind' = 'sequence'
    )
""")

## table_env.execute_sql("select * from source_table").print()


table_env.execute_sql("""CREATE TABLE print_table (
    f0 INT
    ) WITH (
    'connector' = 'jdbc',
    'url' = 'jdbc:mysql://aos-db.c6w5wba58yqu.rds.cn-northwest-1.amazonaws.com.cn:3306/test?useSSL=false',
    'driver'= 'com.mysql.cj.jdbc.Driver',
    'table-name' = 'print_table',
    'username' = 'admin',
    'password' = 'HuamiAdmin2017'
);
""")

table_env.execute_sql("insert into print_table select f0 from source_table").wait(60000)



## table = table_env.from_path("mySource")
## table.execute().print()
```


## redis
https://bbs.huaweicloud.com/blogs/302748
https://stackoverflow.com/questions/71779752/why-is-redis-source-connector-not-available-for-flink/71780268#71780268
```python

```


refs:
https://nightlies.apache.org/flink/flink-docs-master/docs/connectors/table/datagen/
https://stackoverflow.com/questions/57751465/how-to-setparallelism-for-flink-table-other-than-stream
https://dev.mysql.com/doc/refman/8.0/en/truncate-table.html