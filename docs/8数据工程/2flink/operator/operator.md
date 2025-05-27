# operator

## base

### map
python暂不支持`mapPartition`

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
ds = ds.map(lambda x:x[0])
## define the sink
ds.print()
## submit for execution
env.execute()

```



### flat_map

```python
from pyflink.common import  Types
from pyflink.datastream import StreamExecutionEnvironment, RuntimeExecutionMode

## declare an execution environment
env = StreamExecutionEnvironment.get_execution_environment()
env.set_runtime_mode(RuntimeExecutionMode.BATCH)
env.set_parallelism(1) # write all the data to one file

## define the source
ds = env.from_collection(collection=["hadoop,flink","flink,spark"])

## transform
ds = ds.flat_map(lambda x: x.split(","))

## define the sink
ds.print()
## submit for execution
env.execute()
```

```python
ds = ds.flat_map(split) \
def split(s):
    splits = s[1].split("|")
    for sp in splits:
        yield s[0], sp
```

### fliter

```python
from pyflink.datastream import StreamExecutionEnvironment, RuntimeExecutionMode

## declare an execution environment
env = StreamExecutionEnvironment.get_execution_environment()
env.set_runtime_mode(RuntimeExecutionMode.BATCH)
env.set_parallelism(1) # write all the data to one file
## define the source
ds = env.from_collection(collection=["hadoop","flink"])
## transform
ds = ds.filter(lambda x: len(x)>5)
## define the sink
ds.print()
## submit for execution
env.execute()
```

## agg
分区之后才能聚合
### key_by
```python
from pyflink.common import  Types
from pyflink.datastream import StreamExecutionEnvironment, RuntimeExecutionMode

## declare an execution environment
env = StreamExecutionEnvironment.get_execution_environment()
env.set_runtime_mode(RuntimeExecutionMode.BATCH)
env.set_parallelism(1) # write all the data to one file
## define the source
data_stream = env.from_collection(collection=[(1, 'a'), (2, 'a'), (3, 'b')])
## transform
data_stream = data_stream.key_by(lambda x: x[1], key_type=Types.STRING())
## define the sink
data_stream.print()
## submit for execution
env.execute()

```

### key_by + reduce

```python
from pyflink.common import  Types
from pyflink.datastream import StreamExecutionEnvironment, RuntimeExecutionMode

## declare an execution environment
env = StreamExecutionEnvironment.get_execution_environment()
env.set_runtime_mode(RuntimeExecutionMode.BATCH)
env.set_parallelism(1) # write all the data to one file
## define the source
data_stream = env.from_collection(collection=[(1, 'a'), (2, 'a'), (3, 'b')])
## transform
data_stream = data_stream.key_by(lambda x: x[1]).reduce(lambda a, b: (a[0] + b[0], b[1]))
## define the sink
data_stream.print()
## submit for execution
env.execute()
```

## rich function

Rich Function 有生命周期的概念。典型的生命周期方法有： 
- open()方法，是 Rich Function 的初始化方法，也就是会开启一个算子的生命周期。当一个算子的实际工作方法例如 map()或者 filter()方法被调用之前，open()会首先被调用。所以像文件 IO 的创建，数据库连接的创建，配置文件的读取等等这样一次性的工作，都适合在 open()方法中完成
- close()方法，是生命周期中的最后一个调用的方法，类似于解构方法。一般用来做一
些清理工作



```python
class Predict(MapFunction):
    def open(self, runtime_context: RuntimeContext):
        import pickle

        with open("resources.zip/resources/model.pkl", "rb") as f:
            self.model = pickle.load(f)

    def eval(self, x):
        return self.model.predict(x)
```




refs:
https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/dev/datastream/operators/overview/