---
title: JavaThreadUnsafe
toc: true
date: 2021-07-11 10:33:04
tags:
categories:
---
# Race Conditions
段代码块内如果存在对共享资源的多线程读写操作，称这段代码块为Critical Section
多个线程在临界区内执行，由于代码的执行序列不同而导致结果无法预测，称之为发生了Race Condition
- 多个线程读共享资源没问题
- 在多个线程对共享资源读写操作时发生指令交错.

# 从java底层理解
一个陷阱进行++操作, 另一个进行--操作, 最后结果不为0
```java
static int i = 0;
public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(() -> {
        for (int j = 0; j < 5000; j++) {
        counter++;
    }
    }, "t1");
    Thread t2 = new Thread(() -> {
        for (int j = 0; j < 5000; j++) {
        counter--;
    }
    }, "t2");
    t1.start();
    t2.start();
    t1.join();
    t2.join();
    log.debug("{}",counter);//结果不为0
}
```
i++ 而言（i为静态变量），实际会产生如下的 JVM 字节码指令：
```java
getstatic i // 获取静态变量i值
iconst_1    // 准备常量1
iadd        // 自增
putstatic i // 将修改后的值存入静态变量i
```
同理 i--
```java
getstatic i // 获取静态变量i值
iconst_1    // 准备常量1
isub        // 自减
putstatic i // 将修改后的值存入静态变量i
```
应为i++和i--是在不同线程中执行, 则可能发生:
```java
Thread1: getstatic i //i=0
Thread2: getstatic i //i=0
Thread1: iconst_1    // 准备常量1
Thread1: iadd        // +1
Thread1: putstatic i // i=1
Thread2: iconst_1    // 准备常量1
Thread2: isub        // -1
Thread2: putstatic i // i=-1
```
虽然Thread1和Thread2都执行了一次i++和i--顺序实行, 结果应该为i=0. 但是由于两个线程同时执行, 发生了指令交错, 最终结果为-1.



# 从CPU底层理解
```java
  public class Counter {
     protected long count = 0;
     public void add(long value){
         this.count = this.count + value;
     }
  }
```
假设两个Thread A和B, 同时调用`add()`, 每个Thread都会执行:
1. 从memory中读取`this.count`到register
2. 在register中进行计算
3. 从register中将结果返回给memory
我们希望执行的方式如下:
```s
    this.count = 0;
Thread A:  读取 this.count=0 到 register.
Thread A:  在register中, 调用 add(1)方法, this.count=1.
Thread A:  将this.count放回 memory, 结果为 1.
Thread B:  读取 this.count=1 到 register.
Thread B:  在register中, 调用 add(1)方法, this.count=2.
Thread B:  将this.count 放回 memory, 最终结果为2.
```
两个Thread同步执行, 最终结果为2.

由于操作系统调度两个Thread, 所以可能会出现下面的情况:
```s
    this.count = 0;
Thread A:  读取 this.count=0 到 register.
Thread B:  读取 this.count=0 到 register.
Thread B:  在register中, 调用 add(1)方法, this.count=1.
Thread B:  将this.count 放回 memory, 结果为 1.
Thread A:  在register中, 调用 add(1)方法, this.count=1.
Thread A:  将this.count=1 放回 memory, 最终结果为 1.
```
两个Thread交叉执行, 最终结果为1.


# 保证线程安全
有多种手段保证线程安全
- 阻塞式的解决方案：synchronized，Lock
- 非阻塞式的解决方案：原子变量
