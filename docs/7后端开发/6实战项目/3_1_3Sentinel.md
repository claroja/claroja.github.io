# Sentinel

## 背景

微服务架构设计由众多微服务组成，为保障高可用，通常会采用集群方式部署。由于服务自身原因或网络等其他问题，并不能保证100%可用性， 若单个服务出现问题， 会导致进入该服务的线程阻塞， 如果大量请求， 服务可能瘫痪， 服务与服务之间的依赖性， 故障会传播， 产生雪崩效应， 为解决和规避此问题， 业界提出熔断器模型， 衍生出了Sentinel，Hystrix和Resilience4j等组件。

## 流量控制

流量控制在网络传输中是一个常用的概念，它用于调整网络包的发送数据。然而，从系统稳定性角度考虑，在处理请求的速度上，也有非常多的讲究。任意时间到来的请求往往是随机不可控的，而系统的处理能力是有限的。我们需要根据系统的处理能力对流量进行控制。Sentinel 作为一个调配器，可以根据需要把随机的请求调整成合适的形状。

![alt text](金融项目/sentinel_flow.jpg)

## 熔断降级

与Hystrix熔断理念一致， 主要控制调用链中的不稳定资源， 针对这些不同场景进行限制， 避免影响整体系统的稳定性， 防止出现穿透、雪崩等灾难性问题。
在熔断实现上， Sentinel与Hystrix存在较大差异：

+ Hystrix 是通过线程池隔离， 增加线程切换开销，侵入性较强， 且异步方式，不便主线程控制处理。
+ Sentinel 前置处理， 限制请求线程并发数量来控制， 这样避免线程切换开销，侵入性低。
+ Sentinel 还可以针对响应时间对资源进行降级， 当某个资源出现响应时间过长， 所有对该资源的访问都会被拒绝， 直到配置的指定时间窗口之后才重新恢复访问。

## 主要特性视图

![sentinel_feature](金融项目/sentinel_feature.png)

## 工作原理

**框架设计**

![sentinel_framework](金融项目/sentinel_framework.gif)

**设计说明**

在 Sentinel 里面，所有的资源都对应一个资源名称以及一个 Entry。Entry 可以通过对主流框架的适配自动创建，也可以通过注解的方式或调用 API 显式创建；每一个 Entry 创建的时候，同时也会创建一系列功能插槽（slot chain）。这些插槽有不同的职责，例如:

+ NodeSelectorSlot 负责收集资源的路径，并将这些资源的调用路径，以树状结构存储起来，用于根据调用路径来限流降级；
+ ClusterBuilderSlot 则用于存储资源的统计信息以及调用者信息，例如该资源的 RT, QPS, thread count 等等，这些信息将用作为多维度限流，降级的依据；
+ StatisticSlot 则用于记录、统计不同纬度的 runtime 指标监控信息；
+ FlowSlot 则用于根据预设的限流规则以及前面 slot 统计的状态，来进行流量控制；
+ AuthoritySlot 则根据配置的黑白名单和调用来源信息，来做黑白名单控制；
+ DegradeSlot 则通过统计信息以及预设的规则，来做熔断降级；
+ SystemSlot 则通过系统的状态，例如 load1 等，来控制总的入口流量；

## 降级演示

1. **平均响应时间演示**
    当资源的平均响应时间超过阈值（DegradeRule 中的 count，以 ms 为单位）之后，资源进入准降级状态。如果接下来 1s 内持续进入 5 个请求（即 QPS >= 5），它们的 RT 都持续超过这个阈值，那么在接下的时间窗口（DegradeRule 中的 timeWindow，以 s 为单位）之内，对这个方法的调用都会自动地熔断（抛出 DegradeException）。注意 Sentinel 默认统计的 RT 上限是 4900 ms，超出此阈值的都会算作 4900 ms，若需要变更此上限可以通过启动配置项 -Dcsp.sentinel.statistic.max.rt=xxx 来配置。

2. **异常比例演示**
    当资源的每秒请求量 >= 5，并且每秒异常总数占通过量的比值超过阈值（DegradeRule 中的 count）之后，资源进入降级状态，即在接下的时间窗口（DegradeRule 中的 timeWindow，以 s 为单位）之内，对这个方法的调用都会自动地返回。异常比率的阈值范围是 [0.0, 1.0]，代表 0% - 100%。

## 限流演示

流量控制（flow control），其原理是监控应用流量的 QPS 或并发线程数等指标，当达到指定的阈值时对流量进行控制，以避免被瞬时的流量高峰冲垮，从而保障应用的高可用性。



## 生产环境最优配置方案

配置模式选择：

|推送模式|说明|优点|缺点|
|--|--|--|--|
|[原始模式](https://github.com/alibaba/Sentinel/wiki/在生产环境中使用-Sentinel#原始模式)|API将规则推送至客户端并直接更新到内存中，扩展写数据源（[`WritableDataSource`](https://github.com/alibaba/Sentinel/wiki/动态规则扩展)）|简单，无任何依赖|不保证一致性；规则保存在内存中，重启即消失。严重不建议用于生产环境|
|[Pull模式](https://github.com/alibaba/Sentinel/wiki/在生产环境中使用-Sentinel#Pull模式)|扩展写数据源（[`WritableDataSource`](https://github.com/alibaba/Sentinel/wiki/动态规则扩展)），客户端主动向某个规则管理中心定期轮询拉取规则，这个规则中心可以是RDBMS、文件等|简单，无任何依赖；规则持久化|不保证一致性；实时性不保证，拉取过于频繁也可能会有性能问题。|
|Push模式|扩展读数据源（[`ReadableDataSource`](https://github.com/alibaba/Sentinel/wiki/动态规则扩展)），规则中心统一推送，客户端通过注册监听器的方式时刻监听变化，比如使用Nacos、Zookeeper等配置中心。这种方式有更好的实时性和一致性保证。生产环境下一般采用push模式的数据源。|规则持久化；一致性；快速|引入第三方依赖|


1. 原始模式

   ![1563869745028](金融项目/1563869745028.png)

2. Pull拉取模式

   ![1563869917856](金融项目/1563869917856.png)

3. Push推送模式

   ![1563869960784](金融项目/1563869960784.png)

官方建议采用Push模式。

## 用户服务集成

![1563872639386](金融项目/1563872639386.png)
我们把上一章完成的用户接口进行改造， 加入降级与限流处理。

整个部署结构采用PUSH模式， 配置规则放置Nacos配置中心，统一发布与更新。

在生产环境中， 如果在峰值时间段， 出现大量用户请求或者内部系统出现问题， 这个时候就有必要进行限流和降级处理， 防止穿透、雪崩导致整个服务瘫痪。


## 熔断规则配置

启动Nacos服务， 在配置管理里面新建两项配置： 


sentinel-user-degrade为降级配置策略， 内容：

```json
[
  {
    "resource": "userLogin",
    "count": 0.2,
    "grade": 1,    
    "timeWindow": 4
  }
]
```

- resource:  为资源名称。
- count: 为百分比[0-1]， 这里代表20%
- grade:  为降级策略， 0： 代表响应时间， 1： 代表异常比例， 2： 代表异常数量， 这里采用的是异常比。
- timeWindow：为时间窗， 单位为秒。 


sentinel-user-flow为限流配置策略： 内容：

```json
[
   {
    "resource": "userLogin",
    "controlBehavior": 0,
    "count": 12,
    "grade": 1,
    "limitApp": "default",
    "strategy": 0
  }
]
```

- resource:  为资源名称。
- controlBehavior：流量整形的控制效果，目前支持快速失败和匀速排队两种模式，默认是0, 快速失败。
- count: 线程数量。
- grade：限流配置策略， 0：代表线程数量， 1：代表QPS并发数。
- limitApp： 限流针对的来源， 填写default即可。
- strategy： 基于调用关系的流量控制策略， 有三种
    - 0-STRATEGY_DIRECT，根据调用方进行限流， 结合limitApp使用。
    - 1-STRATEGY_RELATE， 根据关联流量限流， 当多个资源间具有资源争抢和关联关系的时候，比如同一个数据表的读与写请求， 如果写操作比较频繁， 那么读数据的请求就会被限流处理。
    - 2-STRATEGY_CHAIN,   根据调用链的入口限流， 比如两个请求Req1和Req2,  同时再配合设置FlowRule.refResource 指定Req1为入口请求， 那么Req1就会受到限流控制， Req2则可放行。

注意配置内容的JSON格式要符合要求， 如果填写错误， 配置不会生效。