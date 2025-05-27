# intro



test data.
```python
word_count_data = ['hello apache flink', 'python flink']
```

## declare environment
declare an execution environment, use it to:

1. set the properties of your job (e.g. default parallelism, restart strategy)
2. create your sources
3. finally trigger the execution of the job.

```python
env = StreamExecutionEnvironment.get_execution_environment()
env.set_runtime_mode(RuntimeExecutionMode.BATCH)
env.set_parallelism(1)
```

## declare source

Sources ingest data from external systems, such as

1. Apache Kafka
2. Rabbit MQ
3. Apache Pulsar
4. a file
5. in-memory data

the code below reads data from in-memory data.

```python
ds = env.from_collection(word_count_data)
```

## transform

```python
ds = ds.flat_map(lambda x: x.split(' '), output_type=Types.STRING()) \
    .map(lambda i: (i, 1), output_type=Types.TUPLE([Types.STRING(), Types.INT()])) \
    .key_by(lambda i: i[0]) \
    .reduce(lambda i, j: (i[0], i[1] + j[1]))
```



## define the sink
```python
ds.print()
```


## execution

```
env.execute()
```




## code
```python
from pyflink.common import  Types
from pyflink.datastream import StreamExecutionEnvironment, RuntimeExecutionMode

word_count_data = ['hello apache flink', 'python flink']

## 1. declare an execution environment

env = StreamExecutionEnvironment.get_execution_environment()
env.set_runtime_mode(RuntimeExecutionMode.BATCH)
env.set_parallelism(1) # write all the data to one file

## 2. define the source
ds = env.from_collection(word_count_data)


## transform
ds = ds.flat_map(lambda x: x.split(' '), output_type=Types.STRING()) \
    .map(lambda i: (i, 1), output_type=Types.TUPLE([Types.STRING(), Types.INT()])) \
    .key_by(lambda i: i[0]) \
    .reduce(lambda i, j: (i[0], i[1] + j[1]))

## define the sink
ds.print()

## submit for execution
env.execute()
```

refs:
https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/dev/python/datastream_tutorial/