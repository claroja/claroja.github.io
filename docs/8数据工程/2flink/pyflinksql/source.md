# source


## filesystem
### data
```csv
wang,18
wei,17
```

### demo
```python
from pyflink.table import EnvironmentSettings, TableEnvironment

## create a stream TableEnvironment
env_settings = EnvironmentSettings.in_streaming_mode()
table_env = TableEnvironment.create(env_settings)
table_env.execute_sql("""
    create table mySource (
        name VARCHAR,
        age INT
    ) with (
        'connector' = 'filesystem',
        'format' = 'csv',
        'path' = './test.csv'
    )
""")
table = table_env.from_path("mySource")
table.execute().print()
```


## mysql
```python
from pyflink.table import EnvironmentSettings, TableEnvironment

## create a stream TableEnvironment
env_settings = EnvironmentSettings.in_streaming_mode()
table_env = TableEnvironment.create(env_settings)
table_env.get_config().set("pipeline.jars", "file:///D:/code/test_python/jar/flink-connector-jdbc-1.15.1.jar;file:///D:/code/test_python/jar/mysql-connector-java-8.0.23.jar")  # 添加依赖包 flink-connector 和 mysql-connector

table_env.execute_sql("""
CREATE TABLE mySource (
    tags VARCHAR
) WITH (
    'connector' = 'jdbc',
    'url' = 'jdbc:mysql://hostName:3306/relax_music?useSSL=false',
    'driver'= 'com.mysql.cj.jdbc.Driver',
    'table-name' = 'table',
    'username' = 'root',
    'password' = 'root'
);
""")

## table_env.execute_sql("select * from mySource").print()
table = table_env.from_path("mySource")
table.execute().print()
```

### question

1. javax.net.ssl.SSLHandshakeException
https://stackoverflow.com/questions/50525270/why-ssl-is-false-when-you-open-jdbc-connection-to-mysql

refs:
https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/dev/python/table_api_tutorial/
https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/connectors/table/jdbc/