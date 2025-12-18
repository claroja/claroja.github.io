# seata

## SEATA简介

Seata前身叫Fescar， 2019 年 1 月，阿里巴巴中间件团队发起了开源项目 Fescar（Fast & EaSy Commit And Rollback），和社区一起共建开源分布式事务解决方案。Fescar 的愿景是让分布式事务的使用像本地事务的使用一样，简单和高效，并且能够逐步解决开发者们遇到的分布式事务方面的所有难题。

Fescar 开源后，蚂蚁金服加入 Fescar 社区参与共建，并在 Fescar 0.4.0 版本中贡献了 TCC 模式。为了打造更中立、更开放、生态更加丰富的分布式事务开源社区，经过社区核心成员的投票，大家决定对 Fescar 进行品牌升级，并更名为 Seata，意为：Simple Extensible Autonomous Transaction Architecture，中文直译就是：简单的、可扩展的、自治的事务架构。是一套一站式分布式事务解决方案。

## 传统分布式事务解决方案

- **两阶段提交(2PC)**
  
  ![seata_2pc](金融项目/seata_2pc.png)
  
  两阶段事务提交长时间锁定，但也不能保证事务的百分百可靠，同时对性能较大影响，某个服务出现故障， 影响全局事务，可用性差，不适合分布式微服务领域。

- **补偿事务(TCC)**

    ![seata_tcc](金融项目/seata_tcc.png)

​    主要分为Try、Confirm、Cancel三个阶段。

    - Try 主要做检测校验及预处理工作；
    - Confirm 是对业务做确认提交动作， 一般Try处理成功， Confirm也会成功。
    - Cancel是在某个业务环节执行错误的时候， 或者极端Confirm出错情况下， 执行的补偿方法。比如转账没有成功到达对方账户， 那么Cancel就要把钱退回转帐方账户。
​
    TCC侵入性较强， 需要写较多补偿方法， 加入补偿机制， 而且必须保障幂等，整体复杂， 且开发量大， 也不易维护。

- **异步消息一致性**

    ![seata_queue](金融项目/seata_queue.png)

    将分布式事务拆分成本地事务， 通过消息队列记录并通知各服务事务处理结果：
    
    ![seata_mq](金融项目/seata_mq.png)

1. A 系统先发送一个 prepared 消息到 mq，如果这个 prepared 消息发送失败那么就直接取消操作别执行了；

2. 如果这个消息发送成功了，那么接着执行本地事务，如果成功就告诉 mq 发送确认消息，如果失败就告诉 mq 回滚消息；

3. 如果发送了确认消息，那么此时 B 系统会接收到确认消息，然后执行本地的事务；

4. 消息队列会自动定时轮询所有发送过 prepared 消息但未发送确认消息的服务，这个消息是不是本地事务处理失败了， 是继续重试还是回滚？服务可以查下数据库看之前本地事务是否执行，如果回滚了，那么这里也回滚吧。这个机制的作用就是避免可能本地事务执行成功了，而确认消息却发送失败了。

5. 这个方案里，要是系统 B 的事务失败了咋办？自动不断重试直到成功，如果实在是不行，要么就是针对重要的资金类业务进行全局回滚，比如 B 系统本地回滚后，再通知系统 A 也回滚；或是发送报警由人工来回滚或补偿。

## CAP理论

![img](金融项目/bg2018071607.jpg)

CAP的含义：

- C：Consistency 一致性
- A：Availability 可用性
- P：Partition tolerance 分区容错性

在分布式系统中，C、A、P三个条件中我们最多只能满足两个要求。

一般在分布式领域， 会通过牺牲一致性来换取系统的可用性和分区容错性。

## BASE理论

所谓的“牺牲一致性”并不是完全放弃数据一致性，而是牺牲强一致性换取弱一致性，这样我们就有兼顾全局的可能。BASE理论：

- BA：Basic Available 基本可用

    整个系统在某些不可抗力的情况下，仍然能够保证“可用性”，即一定时间内仍然能够返回一个明确的结果。只不过“基本可用”和“高可用”的区别是：

    【一定时间】可以适当延长 ；

    当举行大促时，【响应时间】可以适当延长；

    给部分用户直接返回一个降级页面，从而缓解服务器压力。但要注意，返回降级页面仍然是返回明确结果。

- S：Soft State：柔性状态

    同一数据的不同副本的状态，可以不需要实时一致。

- E：Eventual Consisstency：最终一致性

    同一数据的不同副本的状态，可以不需要实时一致，但一定要保证经过一定时间后仍然是一致的。

## SEATA处理机制

![seata_flow](金融项目/seata_flow.jpg)

所有微服务以本地事务方式处理，作为分支事务， 各服务之间通过RPC通信， 所有分支事务由全局事务管控。

![seata_global_transaction](金融项目/seata_global_transaction.jpg)

SEATA分布式事务的解决方案是由一个全局事务（Global Transaction）， 和一批分支事务（Branch Transation）组成， 分支事务也就是各微服务的本地事务。

![seata_component](金融项目/seata_component.jpg)

SEATA的三大组件：

- Transaction Coordinator(TC)：维护全局和分支事务的状态，驱动全局事务提交与回滚。

- Transaction Manager(TM)：定义全局事务的范围：开始、提交或回滚全局事务。

- Resource Manager(RM)：管理分支事务处理的资源，与 TC 通信 并注册分支事务, 然后报告分支事务的状态，最后驱动分支事务提交或回滚。

![seata_lifecycle](金融项目/seata_lifecycle.jpg)

SEATA分布式事务管理的生命周期过程：

1. TM 要求 TC 开始新的全局事务，TC 生成表示全局事务的 XID。

2. XID 通过微服务的调用链传播。

3. RM 在 TC 中将本地事务注册为 XID 的相应全局事务的分支。

4. TM 要求 TC 提交或回滚 XID 的相应全局事务。

5. TC 驱动 XID 的相应全局事务下的所有分支事务，完成分支提交或回滚。

更多机制实现细节及原理，比如AT模式、MT模式和XA模式的原理与设计， 请参考[SEATA WIKI](https://github.com/seata/seata/wiki)

## 服务设计

这里引用官方的与Spring Boot的结合示例，[Seata-samples-springboot](https://github.com/seata/seata-samples/tree/master/springboot) 集成到我们工程当中， 并做调整改进。

![seata_demo_design](金融项目/seata_demo_design.png)

主要设计了两个接口， 一个是修改状态， 另外一个是修改数量，并抛出异常，  两个接口没有受内部事务控制， 集成在一个工程当中。

增加数量接口会模拟抛出异常， 我们需要验证， 修改状态接口的数据是否会产生回滚。
