---
title: JavaJUC
toc: true
date: 2021-07-11 11:34:33
tags:
categories:
---
# AQS
AbstractQueuedSynchronizer，是阻塞式锁和相关的同步器工具的框架
- 用state属性来表示资源的状态（分独占模式和共享模式）），子类需要定义如何维护这个状态，控制如何获取锁和释放锁
    - getState - 获取 state 状态
    - setState - 设置 state 状态
    - compareAndSetState - cas 机制设置 state 状态
    - 独占模式是只有一个线程能够访问资源，而共享模式可以允许多个线程访问资源
- 提供了基于 FIFO 的等待队列，类似于 Monitor 的 EntryList
- 条件变量来实现等待、唤醒机制，支持多个条件变量，类似于 Monitor 的 WaitSet
子类主要实现这样一些方法（默认抛出 UnsupportedOperationException）
- tryAcquire
- tryRelease
- tryAcquireShared
- tryReleaseShared
- isHeldExclusively