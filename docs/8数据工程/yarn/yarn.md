# yarn

MapReduce是基于YARN运行的，即没有YARN”无法”运行MapReduce程序

YARN 即Hadoop内提供的进行分布式资源调度的组件


什么是资源调度？

1. 资源：服务器硬件资源，如：CPU、内存、硬盘、网络等
2. 资源调度：管控服务器硬件资源，提供更好的利用率
3. 分布式资源调度：管控整个分布式服务器集群的全部资源，整合进行统一调度

![alt text](yarn资源调度.png)

于服务器集群亦可使用这种思路调度整个集群的资源



YARN 管控整个集群的资源进行调度， 那么应用程序在运行时，就是在YARN的监管（管理）下去运行的。假设，有一个MapReduce程序， 分解了3个Map任务，和1个Reduce任务，那么如何在YARN的监管（管理）下运行呢？

![alt text](yarn资源调度示例1.png)
![alt text](yarn资源调度示例2.png)

向YARN申请使用资源，YARN分配好资源后运行. 空闲资源可供其它程序使用


## yarn架构


- HDFS， 主从架构，有2个角色
    - 主（Master）角色：NameNode
    - 从（Slave）角色 ：DataNode


- YARN，主从架构，有2个角色
    - 主（Master）角色：ResourceManager, 整个集群的资源调度者， 负责协调调度各个程序所需的资源。
    - 从（Slave） 角色：NodeManager, 单个服务器的资源调度者，负责调度单个服务器上的资源提供给应用程序使用。

![alt text](yarn资源调度示例3.png)


容器（Container）是YARN的NodeManager在所属服务器上分配资源的手段, 创建一个资源容器，即由NodeManager占用这部分资源, 然后应用程序运行在NodeManager创建的这个容器内














