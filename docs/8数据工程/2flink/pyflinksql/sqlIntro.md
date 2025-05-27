# sqlIntro

## Create a TableEnvironment

```python
from pyflink.table import EnvironmentSettings, TableEnvironment

## create a streaming TableEnvironment
env_settings = EnvironmentSettings.in_streaming_mode()
## or create a batch TableEnvironment
env_settings = EnvironmentSettings.in_batch_mode()
table_env = TableEnvironment.create(env_settings)

```


## Create Tables
A `Table` object describes a pipeline of data transformations.It does not contain the data itself in any way. Instead, it describes how to read data from a table source, and how to eventually write data to a table sink.


### Create using a List Object

```python
from pyflink.table import EnvironmentSettings, TableEnvironment
from pyflink.table import DataTypes
## create a batch TableEnvironment
env_settings = EnvironmentSettings.in_batch_mode()
table_env = TableEnvironment.create(env_settings)

table = table_env.from_elements([(1, 'Hi'), (2, 'Hello')])
## table = table_env.from_elements([(1, 'Hi'), (2, 'Hello')], ['id', 'data'])  # specified column names
## table = table_env.from_elements([(1, 'Hi'), (2, 'Hello')],
##                                 DataTypes.ROW([DataTypes.FIELD("id", DataTypes.TINYINT()),
##                                                DataTypes.FIELD("data", DataTypes.STRING())])) # specify the datatype

table.execute().print()
```


## Create using DDL statements

```python
from pyflink.table import EnvironmentSettings, TableEnvironment

## create a stream TableEnvironment
env_settings = EnvironmentSettings.in_streaming_mode()
table_env = TableEnvironment.create(env_settings)

table_env.execute_sql("""
    CREATE TABLE random_source (
        id BIGINT, 
        data TINYINT 
    ) WITH (
        'connector' = 'datagen',
        'fields.id.kind'='sequence',
        'fields.id.start'='1',
        'fields.id.end'='3',
        'fields.data.kind'='sequence',
        'fields.data.start'='4',
        'fields.data.end'='6'
    )
""")
table = table_env.from_path("random_source")
table.execute().print()
```



## Queries
### Table API Queries
The [Table API](https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/dev/table/tableapi/?code_tab=python) documentation describes all Table API operations that are supported on streaming and batch tables.

```python
from pyflink.table import EnvironmentSettings, TableEnvironment
from pyflink.table.expressions import col

## using batch table environment to execute the queries
env_settings = EnvironmentSettings.in_batch_mode()
table_env = TableEnvironment.create(env_settings)

orders = table_env.from_elements([('Jack', 'FRANCE', 10), ('Rose', 'ENGLAND', 30), ('Jack', 'FRANCE', 20)],
                                 ['name', 'country', 'revenue'])

## compute revenue for all customers from France
revenue = orders \
    .select(col("name"), col("country"), col("revenue")) \
    .where(col("country") == 'FRANCE') \
    .group_by(col("name")) \
    .select(col("name"), col("country").sum.alias('rev_sum'))

revenue.execute().print()
```

### SQL Queries
The [SQL](https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/dev/table/sql/overview/) documentation describes Flink’s SQL support for streaming and batch tables.

```python
from pyflink.table import EnvironmentSettings, TableEnvironment

## use a stream TableEnvironment to execute the queries
env_settings = EnvironmentSettings.in_streaming_mode()
table_env = TableEnvironment.create(env_settings)

table_env.execute_sql("""
    CREATE TABLE random_source (
        id BIGINT, 
        data TINYINT
    ) WITH (
        'connector' = 'datagen',
        'fields.id.kind'='sequence',
        'fields.id.start'='1',
        'fields.id.end'='8',
        'fields.data.kind'='sequence',
        'fields.data.start'='4',
        'fields.data.end'='11'
    )
""")

table_env.execute_sql("""
    CREATE TABLE print_sink (
        id BIGINT, 
        data_sum TINYINT 
    ) WITH (
        'connector' = 'print'
    )
""")

table_env.execute_sql("""
    INSERT INTO print_sink
        SELECT id, sum(data) as data_sum FROM 
            (SELECT id / 2 as id, data FROM random_source)
        WHERE id > 1
        GROUP BY id
""").wait()
```

## Mix the Table API and SQL
The Table objects used in Table API and the tables used in SQL can be freely converted to each other.
```python
## create a sink table to emit results
table_env.execute_sql("""
    CREATE TABLE table_sink (
        id BIGINT, 
        data VARCHAR 
    ) WITH (
        'connector' = 'print'
    )
""")

## convert the Table API table to a SQL view
table = table_env.from_elements([(1, 'Hi'), (2, 'Hello')], ['id', 'data'])
table_env.create_temporary_view('table_api_table', table)

## emit the Table API table
table_env.execute_sql("INSERT INTO table_sink SELECT * FROM table_api_table").wait()
```



## Emit Results
### print
```python
## prepare source tables 
source = table_env.from_elements([(1, "Hi", "Hello"), (2, "Hello", "Hello")], ["a", "b", "c"])

## Get TableResult
table_result = table_env.execute_sql("select a + 1, b, c from %s" % source)

## Print the table
table_result.print()

```

### Collect Results to Client
```python
## prepare source tables 
source = table_env.from_elements([(1, "Hi", "Hello"), (2, "Hello", "Hello")], ["a", "b", "c"])

## Get TableResult
table_result = table_env.execute_sql("select a + 1, b, c from %s" % source)

## Traversal result
with table_result.collect() as results:
   for result in results:
       print(result)
```


### Emit Results to One Sink Table

#### Table API
```python
table_env.execute_sql("""
    CREATE TABLE sink_table (
        id BIGINT, 
        data VARCHAR 
    ) WITH (
        'connector' = 'print'
    )
""")

table = table_env.from_elements([(1, 'Hi'), (2, 'Hello')], ['id', 'data'])
table.execute_insert("sink_table").wait()
```

#### SQL
```python
table_env.create_temporary_view("table_source", table)
table_env.execute_sql("INSERT INTO sink_table SELECT * FROM table_source").wait()
```



## example

```python
from pyflink.table import EnvironmentSettings, TableEnvironment
from pyflink.table.expressions import col

## 1. create a TableEnvironment
env_settings = EnvironmentSettings.in_streaming_mode()
table_env = TableEnvironment.create(env_settings)

## 2. create source Table
table_env.execute_sql("""
    CREATE TABLE datagen (
        id INT,
        data STRING
    ) WITH (
        'connector' = 'datagen',
        'fields.id.kind' = 'sequence',
        'fields.id.start' = '1',
        'fields.id.end' = '10'
    )
""")

## 3. create sink Table
table_env.execute_sql("""
    CREATE TABLE print (
        id INT,
        data STRING
    ) WITH (
        'connector' = 'print'
    )
""")

## 4. query from source table and perform calculations
source_table = table_env.from_path("datagen") # create a Table from a Table API query:
## source_table = table_env.sql_query("SELECT * FROM datagen") # or create a Table from a SQL query:

result_table = source_table.select(col("id") + 1, col("data"))

## 5. emit query result to sink table
result_table.execute_insert("print").wait() # # emit a Table API result Table to a sink table:
## table_env.execute_sql("INSERT INTO print SELECT * FROM datagen").wait() # or emit results via SQL query:
```







refs:
https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/dev/python/table/intro_to_table_api/
https://nightlies.apache.org/flink/flink-docs-master/docs/connectors/table/datagen/