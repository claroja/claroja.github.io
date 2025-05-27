# wordcount


```data
hello spark
hello hadoop
hello flink
```
## BATCH mode

```python
from pyflink.datastream import StreamExecutionEnvironment, RuntimeExecutionMode

env = StreamExecutionEnvironment.get_execution_environment()
env.set_runtime_mode(RuntimeExecutionMode.BATCH)  # BATCH
env.set_parallelism(1) # write all the data to one file
## read&tans
ds = env.read_text_file("./words.txt")
ds = ds.flat_map(lambda x:x.split(" ")) \
    .map(lambda x: (x,1)) \
    .key_by(lambda x: x[0]) \
    .reduce(lambda a, b: (b[0],a[1] + b[1]))
## define the sink
ds.print()
env.execute()

## output:
## ('flink', 1)
## ('hello', 3)
## ('spark', 1)
## ('hadoop', 1)

```



## STREAMING mode
```python
from pyflink.datastream import StreamExecutionEnvironment, RuntimeExecutionMode
env = StreamExecutionEnvironment.get_execution_environment()
env.set_runtime_mode(RuntimeExecutionMode.STREAMING)  # Stream
env.set_parallelism(1) # write all the data to one file
## read&tans
ds = env.read_text_file("./words.txt")
ds = ds.flat_map(lambda x:x.split(" ")) \
    .map(lambda x: (x,1)) \
    .key_by(lambda x: x[0]) \
    .reduce(lambda a, b: (b[0],a[1] + b[1]))
## define the sink
ds.print()
env.execute()

## output:
## ('hello', 1)
## ('spark', 1)
## ('hello', 2)
## ('hadoop', 1)
## ('hello', 3)
## ('flink', 1)
```
每过来一条数据就会处理一次，所以`hello`被打印了多次




```python
ds = ds.flat_map(split) \
def split(s):
    splits = s[1].split("|")
    for sp in splits:
        yield s[0], sp
```

refs:
