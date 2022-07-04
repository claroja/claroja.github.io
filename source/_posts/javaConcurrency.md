---
title: javaConcurrency
toc: true
date: 2021-07-11 10:29:01
tags:
categories:
---
# 进程和线程
- 线程存在于进程内，是进程的一个子集
- 进程拥有共享的资源(资源分配最小单位)，如内存空间等，供其内部的线程(资源调度最小单位)共享
- 通信
同一台计算机的进程通信称为 IPC（Inter-process communication）, 不同计算机之间的进程通信，需要通过网络，并遵守共同的协议，例如 HTTP
多个线程可以访问同一个共享变量
- 线程更轻量，线程上下文切换成本一般上要比进程上下文切换低

# 并行与并发
并发(concurrent):
单核cpu下，线程实际还是串行执行的。操作系统通过任务调度器，将cpu的时间片(毫秒级)分给不同的程序,物理时间先后发生, 由于cpu在线程间（时间片很短）的切换非常快，给人感觉是同时运行的.
并行(parallel):
多个cpu下, 不同cpu同一时刻, 同时执行指令, 物理时间同时发生.

# 同步与异步
需要等待结果返回，才能继续运行就是同步
不需要等待结果返回，就能继续运行就是异步

# 总结
1. 单核cpu下，多线程不能实际提高程序运行效率
但是IO操作不占用cpu, 线程虽然不用cpu，但需要一直等待IO结束, 此时虽然是单核cpu, 也可用多线程.
2. 多核cpu下, 可以


# 同步和异步
以调用方角度来讲
- 需要等待子线程结果返回，才能继续运行就是同步
- 不需要等待子线程结果返回，就能继续运行就是异步




# 操作系统的五中状态
New: 进程创建, 没有和系统关联
Ready: 等待系统调度, 分配CPU时间
Running: 获得CPU时间片, 正在运行
Blocked: 比如等待IO, 直到收到IO完成 event, 才会进入Ready状态
Exit:退出
参考:https://www.tecmint.com/linux-process-management/

# Java Thread 六种状态
- New: Thread创建, 未调用`start()`
- Runnable: 调用`start()`后, 包含了系统的(可运行,运行与阻塞状态)
- Blocked: acquiring a lock
- Waited: waiting for notification
- Timed_Waitting: waitingg for timeout notification
- Terminated: 方法执行完终止


## NEW --> RUNNABLE
- 调用`t.start()`

## RUNNABLE <--> WAITING
- 调用`obj.wait()`, 线程从 RUNNABLE --> WAITING
- 调用`obj.notify()`,`obj.notifyAll()`,`t.interrupt()`
    - 竞争锁成功，t 线程从 WAITING --> RUNNABLE
    - 竞争锁失败，t 线程从 WAITING --> BLOCKED
- 调用`t.join()`时，当前线程从 RUNNABLE --> WAITING
t 线程运行结束，或调用了当前线程的`interrupt()`时，当前线程从 WAITING --> RUNNABLE
- 当前线程调用`LockSupport.park()`方法会让当前线程从 RUNNABLE --> WAITING
    调用`LockSupport.unpark()`或调用了线程的`interrupt()`, 会让目标线程从 WAITING --> RUNNABLE

## RUNNABLE <--> TIMED_WAITING
- 线程调用`synchronized(obj)`获取了对象锁后
    调用`obj.wait(long n)`方法时, 线程从 RUNNABLE --> TIMED_WAITING
    线程等待时间超过了 n 毫秒，或调用 obj.notify(), obj.notifyAll(), t.interrupt() 时
        竞争锁成功，t 线程从 TIMED_WAITING --> RUNNABLE
        竞争锁失败，t 线程从 TIMED_WAITING --> BLOCKED
- 当前线程调用`join(long n)` 方法时，当前线程从 RUNNABLE --> TIMED_WAITING
    当前线程等待时间超过了 n 毫秒，或t 线程运行结束，或调用了当前线程的 interrupt() 时，当前线程从TIMED_WAITING --> RUNNABLE
- 当前线程调用 Thread.sleep(long n), 当前线程从 RUNNABLE --> TIMED_WAITING
    当前线程等待时间超过了 n 毫秒，当前线程从 TIMED_WAITING --> RUNNABLE
- 当前线程调用 LockSupport.parkNanos(long nanos) 或 LockSupport.parkUntil(long millis) 时， 当前线程从 RUNNABLE --> TIMED_WAITING
    调用 LockSupport.unpark(目标线程) 或调用了线程 的 interrupt(), 或是等待超时，会让目标线程从TIMED_WAITING--> RUNNABLE

## RUNNABLE <--> BLOCKED
t 线程用 synchronized(obj) 获取了对象锁时如果竞争失败，从 RUNNABLE --> BLOCKED
持 obj 锁线程的同步代码块执行完毕，会唤醒该对象上所有 BLOCKED 的线程重新竞争，如果其中 t 线程竞争
成功，从 BLOCKED --> RUNNABLE ，其它失败的线程仍然 BLOCKED

## RUNNABLE <--> TERMINATED
当前线程所有代码运行完毕，进入 TERMINATED

参考:
https://www.baeldung.com/java-thread-lifecycle
https://www.geeksforgeeks.org/lifecycle-and-states-of-a-thread-in-java/