# exeMode



## base concept
**STREAMING**
There is the “classic” execution behavior of the DataStream API, which we call STREAMING execution mode. This should be used for unbounded jobs that require continuous incremental processing and are expected to stay online indefinitely.

**BATCH**
Additionally, there is a batch-style execution mode that we call BATCH execution mode. This executes jobs in a way that is more reminiscent of batch processing frameworks such as MapReduce. This should be used for bounded jobs for which you have a known fixed input and which do not run continuously.

a job executing in **STREAMING** mode might produce incremental updates (think upserts in a database) while a **BATCH** job would only produce one final result at the end.

The **BATCH** execution mode can only be used for Jobs/Flink Programs that are bounded.**STREAMING** execution mode, on the other hand, can be used for both bounded and unbounded jobs.
As a rule of thumb, you should be using **BATCH** execution mode when your program is bounded because this will be more efficient. You have to use **STREAMING** execution mode when your program is unbounded because only this mode is general enough to be able to deal with continuous data streams.

## config
The execution mode can be configured via the execution.runtime-mode setting. There are three possible values:
- STREAMING: The classic DataStream execution mode (default)
- BATCH: Batch-style execution on the DataStream API
- AUTOMATIC: Let the system decide based on the boundedness of the sources


1. configure the execution mode via the command line:
```sh
bin/flink run -Dexecution.runtime-mode=BATCH examples/streaming/WordCount.jar
```

2.  configure the execution mode in code
```python
env = StreamExecutionEnvironment.get_execution_environment()
env.set_runtime_mode(RuntimeExecutionMode.BATCH)
```

## Task Scheduling
```python
env = StreamExecutionEnvironment.getExecutionEnvironment()
source = env.fromElements(...)

source.name("source")
    .map(...).name("map1")
    .map(...).name("map2")
    .rebalance()
    .map(...).name("map3")
    .map(...).name("map4")
    .keyBy((value) -> value)
    .map(...).name("map5")
    .map(...).name("map6")
    .sinkTo(...).name("sink")
```

Operations that imply a **1-to-1 connection pattern** between operations, such as `map()`, `flatMap()`, or `filter()` can just forward data straight to the next operation, which allows these operations to be chained together. This means that Flink would not normally insert a network shuffle between them.

Operation such as `keyBy()` or `rebalance()` on the other hand require data to be **shuffled** between different parallel instances of tasks. This induces a network shuffle.

For the above example Flink would group operations together as tasks like this:

- Task1: source, map1, and map2
- Task2: map3, map4
- Task3: map5, map6, and sink

![](./exeMode/1.svg)





refs:
https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/dev/datastream/execution_mode/