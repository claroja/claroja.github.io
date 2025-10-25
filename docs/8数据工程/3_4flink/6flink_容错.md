# flink 容错


## 9.1.Checkpoint
Checkpoint是Flink实现容错机制最核心的功能，是Flink可靠性的基石，它能够根据配置周期性地基于Stream中各个Operator的状态来生成Snapshot快照，从而将这些状态数据定期持久化存储下来，当Flink程序一旦意外崩溃时，重新运行程序时可以有选择地从这些Snapshot进行恢复，从而修正因为故障带来的程序数据状态中断。



注意:区分State和Checkpoint
1. State: 

    一般指一个具体的Task/Operator的状态(operator的状态表示一些算子在运行的过程中会产生的一些中间结果)
    State数据默认保存在Java的堆内存中/TaskManage节点的内存中
    State可以被记录，在失败的情况下数据还可以恢复

2. Checkpoint: 
	表示了一个Flink Job在一个特定时刻的一份全局状态快照，即包含了所有Task/Operator的状态
	可以理解为Checkpoint是把State数据定时持久化存储了
    比如KafkaConsumer算子中维护的Offset状态,当任务重新恢复的时候可以从Checkpoint中获取


## [Flink重启策略](https://nightlies.apache.org/flink/flink-docs-release-1.9/zh/dev/task_failure_recovery.html)


## Savepoints

Savepoint 与 Checkpoint 类似，同样是把状态存储到外部介质。当作业失败时，可以从外部恢复，它们都是为了保证Flink的一致性，容错性
但他们又是两个不同的功能，这两个功能结合使用可以在不同场景下将程序的状态持久化并恢复。

checkpoint：
是Flink自动的对于一个有状态应用在运行中利用分布式快照持续周期性的产生Checkpoint
主要是进行数据的容错，快照备份，适用于程序潜在的失败，是增量做的，每次的时间较短，数据量较小，只要在程序里面启用后会自动触发，用户无须感知；
Checkpoint 是作业 failover 的时候自动使用，不需要用户过多干预,只需要配置即可

Savepoints：
是手动产生的Checkpoint，Savepoint 记录着流式应用中所有运算元的状态
主要是用于历史数据的恢复，集群运维，适用于程序升级、bug修复、迁移和A/B测试。
Savepoint 是全量做的，每次的时间较长，数据量较大，需要用户主动去触发。

注意:
Checkpoint是程序根据配置主动执行并根据重启策略自动恢复
Savepoints是由程序员手动触发并手动恢复的(当然也可以从Checkpoint的目录中手动恢复)























