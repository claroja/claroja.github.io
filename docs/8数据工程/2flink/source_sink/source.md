# source



## from_collection
从内存中读取
```python
from pyflink.common import  Types
from pyflink.datastream import StreamExecutionEnvironment, RuntimeExecutionMode

## declare an execution environment
env = StreamExecutionEnvironment.get_execution_environment()
env.set_runtime_mode(RuntimeExecutionMode.BATCH)
env.set_parallelism(1) # write all the data to one file

## define the source
ds = env.from_collection(
    collection=[(1, 'aaa|bb'), (2, 'bb|a'), (3, 'aaa|a')],
    type_info=Types.ROW([Types.INT(), Types.STRING()]))

## define the sink
ds.print()

## submit for execution
env.execute()

```



## filesystem

### read_text_file

```python
from pyflink.datastream import StreamExecutionEnvironment, RuntimeExecutionMode
env = StreamExecutionEnvironment.get_execution_environment()
env.set_runtime_mode(RuntimeExecutionMode.STREAMING)
env.set_parallelism(2) # write all the data to one file

## source
ds = env.read_text_file("./words.txt")
## transformation
## sink
ds.print()
env.execute()
```
### from_source

`from_source ` Currently, only supports `NumberSequenceSource` and `FileSource` as unified DataStream source connectors. The DataStream created using `from_source` could be executed in both `batch` and `streaming` executing mode.

```python
from pyflink.common import WatermarkStrategy,Encoder
from pyflink.datastream import StreamExecutionEnvironment, RuntimeExecutionMode
from pyflink.datastream.connectors import (FileSource, StreamFormat, FileSink, OutputFileConfig,
                                           RollingPolicy)

env = StreamExecutionEnvironment.get_execution_environment()
env.set_runtime_mode(RuntimeExecutionMode.BATCH)
env.set_parallelism(1) # write all the data to one file

## define the source
ds = env.from_source(
    source=FileSource.for_record_stream_format(StreamFormat.text_line_format(),"./test.csv")
                    .process_static_file_set().build(),
    watermark_strategy=WatermarkStrategy.for_monotonous_timestamps(),
    source_name="file_source"  # source id
)


## define the sink
ds.sink_to(
    sink=FileSink.for_row_format(
        base_path="./",  # 文件保存的路径
        encoder=Encoder.simple_string_encoder())  # 保存文件的编码, 比如utf8
    .with_output_file_config(
        OutputFileConfig.builder()
        .with_part_prefix("prefix")
        .with_part_suffix(".ext")
        .build())
    .with_rolling_policy(RollingPolicy.default_rolling_policy())
    .build()
)
env.execute()
```


## add_source
最通用的方法，建议使用

可以在[官网](https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/connectors/datastream/overview/)查找相关的connector.



### kafka

It currently only supports `FlinkKafkaConsumer` to be used as DataStream source connectors with method add_source.
The DataStream created using `add_source` could only be executed in `streaming` executing mode.

```python
from pyflink.common.serialization import JsonRowDeserializationSchema
from pyflink.common.typeinfo import Types
from pyflink.datastream import StreamExecutionEnvironment
from pyflink.datastream.connectors import FlinkKafkaConsumer

env = StreamExecutionEnvironment.get_execution_environment()
## the sql connector for kafka is used here as it's a fat jar and could avoid dependency issues
env.add_jars("file:///path/to/flink-sql-connector-kafka.jar")

deserialization_schema = JsonRowDeserializationSchema.builder() \
    .type_info(type_info=Types.ROW([Types.INT(), Types.STRING()])).build()

kafka_consumer = FlinkKafkaConsumer(
    topics='test_source_topic',
    deserialization_schema=deserialization_schema,
    properties={'bootstrap.servers': 'localhost:9092', 'group.id': 'test_group'})

ds = env.add_source(kafka_consumer)
```

```python
from pyflink.common.typeinfo import Types
from pyflink.datastream.connectors import FlinkKafkaProducer
from pyflink.common.serialization import JsonRowSerializationSchema

serialization_schema = JsonRowSerializationSchema.builder().with_type_info(
    type_info=Types.ROW([Types.INT(), Types.STRING()])).build()

kafka_producer = FlinkKafkaProducer(
    topic='test_sink_topic',
    serialization_schema=serialization_schema,
    producer_config={'bootstrap.servers': 'localhost:9092', 'group.id': 'test_group'})

ds.add_sink(kafka_producer)
```

refs:
https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/connectors/datastream/overview/
https://nightlies.apache.org/flink/flink-docs-release-1.13/api/python/_modules/pyflink/datastream/connectors.html
https://nightlies.apache.org/flink/flink-docs-release-1.15/api/python/pyflink.datastream.html#module-pyflink.datastream.connectors
https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/dev/python/datastream_tutorial/
https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/dev/python/datastream/intro_to_datastream_api/