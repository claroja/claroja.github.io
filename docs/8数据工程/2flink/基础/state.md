# state

## concept
While many operations in a dataflow simply look at one individual event at a time (for example an event parser), some operations remember information across multiple events (for example window operators). These operations are called stateful.

Some examples of stateful operations:

- When an application searches for certain event patterns, the state will store the sequence of events encountered so far.
- When aggregating events per minute/hour/day, the state holds the pending aggregates.
- When training a machine learning model over a stream of data points, the state holds the current version of the model parameters.
- When historic data needs to be managed, the state allows efficient access to events that occurred in the past.


在流计算场景中，数据没有边界源源不断的流入的，每条数据流入都可能会触发计算，比如在进行count或sum这些操作，是选择每次触发计算将所有流入的历史数据重新计算一边还是每次计算都基于上次计算结果进行增量计算呢？ 从综合考虑角度，很多人都会 选择增量计算，那么问题就产生了：上一次的中间计算结果保存在哪里？内存？这其中会由于本身的网络，硬件或软件等问题造成某个计算节点失败，对应的上次计算结果就会丢失，在节点恢复时，是需要将所有历史数据重新计算一遍的。


## Keyed State
Keyed state is maintained in what can be thought of as an embedded key/value store. The state is partitioned and distributed strictly together with the streams that are read by the stateful operators.
![](./state/1.svg)



refs:
https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/concepts/stateful-stream-processing/
https://www.jianshu.com/p/595ba0a2760b?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io