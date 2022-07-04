---
title: JavaJMM
toc: true
date: 2021-07-11 11:31:32
tags:
categories:
---
JMM即Java Memory Model, 定义了主存/工作内存抽象概念, 底层对应着CPU寄存器/缓存/硬件内存/CPU指令优化等。

- 原子性 - 保证指令不会受到线程上下文切换的影响
- 可见性 - 保证指令不会受 cpu 缓存的影响
- 有序性 - 保证指令不会受 cpu 指令并行优化的影响

# 原子性
参考线程不安全synchronized/waitNotify/parkUnpark/ReenTrantLock章节

# 可见性
```java
static boolean run = true;
public static void main(String[] args) throws InterruptedException {
    Thread t = new Thread(()->{
    while(run){
        // ....
    }
    });
    t.start();
    sleep(1);
    run = false; // 线程t不会如预想的停下来
}
```
原因是:
1. 初始状态, t线程从主内存读取了run的值到工作内存(getstatic)
2. 因为 线程while循环要频繁从主内存中读取run的值, JIT编译器会将run的值缓存至自己工作内存中的高速缓存中, 减少对主存中run的访问，提高效率
3. 1秒之后, main线程修改run的值, 并同步至主存, 而t是还是从自己工作内存中的高速缓存中读取这个变量

解决办法是:
volatile（易变关键字）
用来修饰成员变量和静态成员变量，他可以避免线程从自己的工作缓存中查找变量的值，必须到主存中获取它的值
```java
volatile static boolean run = true;
```
1. synchronized 语句块既可以保证代码块的原子性，也同时保证代码块内变量的可见性。但缺点是synchronized 是属于重量级操作，性能低
2. `System.out.println()`会发现即使不加volatile修饰符，线程t也能正确看到对run变量的修改, 因为`sout`是由`synchronized`修饰的.

原理:
volatile 的底层实现原理是内存屏障，Memory Barrier（Memory Fence）
对 volatile 变量的写指令后会加入写屏障
对 volatile 变量的读指令前会加入读屏障
1. 保证可见性
写屏障（sfence）保证在该屏障之前的，对共享变量的改动，都同步到主存当中
```java
static private boolean ready;
public void actor2(I_Result r) {
num = 2; //同步到主存
ready = true; // ready 是 volatile 赋值带写屏障
//写屏障
}
```
而读屏障（lfence）保证在该屏障之后，对共享变量的读取，加载的是主存中最新数据
```java
public void actor1(I_Result r) {
    if(ready) {// ready 是 volatile 读取值带读屏障
        r.r1 = num + num; //读主频最新的
    } else {
        r.r1 = 1;//读主频最新的
    }
}
```


# 两阶段终止设计模式
Two Phase Termination: 在一个线程 T1 中安全终止线程 T2(等待T2运行结束)
错误的做法:使用Thread对象的 stop() 方法暴力终止线程

```java
public class Test13 {
    public static void main(String[] args) throws InterruptedException {
        TwoPhaseTermination tpt = new TwoPhaseTermination();
        tpt.start();
        Thread.sleep(2000);
        tpt.stop();

    }
}

class TwoPhaseTermination {
    private Thread thread;
    private volatile boolean stop = false;
    public void start() {
        thread = new Thread(() -> {
            while (true) {
                Thread current = Thread.currentThread();
                if (stop) {//运行时被打断
                    log.debug("料理后事");
                    break;
                }
                try {//sleep时被打断
                    Thread.sleep(1000);
                    log.debug("执行监控记录");
                } catch (InterruptedException e) {
                    //直接判断stop, 所以不需要重新设置Interrupted的值
                }
            }
        }, "thread");
        thread.start();
    }
    public void stop(){
        stop = true;
        thread.interrupt();//可以不加, 加上主要是为了不等待线程休息的时间, 而是立刻打断
    }
}

```
注意:
可见性仅仅是保证之后的读能够读到最新的结果，但不能保证读跑到它前面去


# 有序性
单线程不存在指令重排, 所以不用担心有序性, 多线程CPU会对指令优化, 可能发生指令重排.

Clock Cycle Time(CCT,时钟周期时间): 等于主频的倒数, CPU 能够识别的最小时间单位, 比如4G主频的CPU的CCT就是 0.25 ns，墙上挂钟的XCCT是1s.
Cycles Per Instruction(CPI,平均时钟周期数): 指令需要更多的时钟周期时间, 一条指令需要用到的时钟周期数
CPU 执行时间: 指令数 * CPI * CCP

现代 CPU 支持多级指令流水线，例如支持同时执行:
1. 取指令 instruction fetch (IF)
2. 指令译码 instruction decode (ID)
3. 执行指令 execute (EX)
4. 内存访问 memory access (MEM)
5. 数据写回 register write back (WB)
这时 CPU 可以在一个时钟周期内，同时运行五条指令的不同阶段（相当于一条执行时间最长的复杂指令），本质上，流水线技术并不能缩短单条指令的执行时间，但它变相地提高了指令地吞吐率。

[顺序执行](png)

[重排后]


```java
// 可以重排的例子, 各自赋值, a和b点到顺序也没关系
int a = 10; // 指令1
int b = 20; // 指令2
System.out.println( a + b );
// 不能重排的例子, b需要用到a ,所以a的赋值必须在b的前面
int a = 10; // 指令1
int b = a - 5; // 指令2
```



volatile保证有序性
写屏障会确保指令重排序时，不会将写屏障之前的代码排在写屏障之后
```java
public void actor2(I_Result r) {
 num = 2;
 ready = true; // ready 是 volatile 赋值带写屏障
 // 写屏障
}
```

读屏障会确保指令重排序时，不会将读屏障之后的代码排在读屏障之前
```java
public void actor1(I_Result r) {
    // 读屏障
    // ready 是 volatile 读取值带读屏障
    if(ready) {
        r.r1 = num + num;
    } else {
        r.r1 = 1;
    }
    }
```
注意:
有序性的保证也只是保证了本线程内相关代码不被重排序

#  double-checked locking 问题
多线程下的单例模式:
- 首次使用getInstance()才使用 synchronized 加锁，防止多个线程第一次访问, 创建多个实例, 后续使用时无需加锁.
所以会有两个`if(INSTANCE == null)`:
第一个是:后续使用无需加锁
第二个是:第一次访问, 需加锁, 防止多个线程创建多个实例
- 有隐含的，但很关键的一点：第一个 if 使用了 INSTANCE 变量，是在同步块之外, 但这也是一个隐患, 因为此代码段, 未能保证有序性(synchronized只能保证它所保护的代码块内的可见性,此处`private static Singleton INSTANCE = null;`在synchronized外面.)
```java
public final class Singleton {
    private Singleton() { }
    private static Singleton INSTANCE = null;
    public static Singleton getInstance() {
    if(INSTANCE == null) { //这个地方未能保证有序性
        synchronized(Singleton.class) {// 首次访问会同步，而之后的使用没有synchronized
            if (INSTANCE == null) {
                INSTANCE = new Singleton();
            }
        }
    }
    return INSTANCE;
    }
}
```
第一个if使用了`INSTANCE`变量，是在同步块之外,但在多线程环境上, 上面的代码是有问题的, getInstance方法对应的字节码为：
```java
0: getstatic #2      // 对应if(INSTANCE == null), 获取静态变量INSTANCE
3: ifnonnull 37         // 判断是否为null, 如果不是null, 跳转到37行
6: ldc #3            // 获得类对象
8: dup                  //复制Singleton.class类引用地址, 将来解锁用
9: astore_0             //将指针存下来
10: monitorenter        //进入同步代码块
11: getstatic #2     // 对应if(INSTANCE == null), 获取静态变量INSTANCE
14: ifnonnull 27       // 判断是否为null, 如果不是null, 跳转到27行
* 17: new #3           // new Singleton();
* 20: dup               // 复制对象的引用
* 21: invokespecial #4 // 根据引用地址, 调用构造方法
* 24: putstatic #2     // 将新new的对象, 放回static INSTANCE
27: aload_0             //拿出Singleton.class类对象
28: monitorexit         //解锁
29: goto 37
32: astore_1
33: aload_0
34: monitorexit
35: aload_1
36: athrow
37: getstatic #2     // 对应return INSTANCE, 获取静态变量INSTANCE
40: areturn             // 返回
```
注意17-24这段指令, 可能JVM会将代码优化为先执行24, 再执行21.
也既是说
1. 该线程先把引用地址给了 static INSTANCE
2. 再对其进行构造初始化
问题的根源就在于此:
1. Thread1, 执行先执行24, 把应用地址给了 static INSTANCE, 此时的地址不为null, 已经有了地址
2. Thread2, 执行了`if(INSTANCE == null) {`(注意该句没有被`synchronized`修饰, 所以Thread2可以调用), 条件为false(Thread1 已经给INSTANCE了地址, 只是还没初始化对象)
3. Thread2, 执行`return INSTANCE;`, 将拿到一个还没有初始化完毕的对象.


问题解决:
`private static volatile Singleton INSTANCE = null;`



```java
public final class Singleton {
    private Singleton() { }
    private static volatile Singleton INSTANCE = null;
    public static Singleton getInstance() {
        if (INSTANCE == null) {
            synchronized (Singleton.class) {
                if (INSTANCE == null) {
                    INSTANCE = new Singleton();
                }
            }
        }
        return INSTANCE;
    }
}
```
原理解析:
```java
// -------------------------------------> 加入对 INSTANCE 变量的读屏障
0: getstatic #2      // 对应if(INSTANCE == null), 获取静态变量INSTANCE
3: ifnonnull 37         // 判断是否为null, 如果不是null, 跳转到37行
6: ldc #3            // 获得类对象
8: dup                  //复制Singleton.class类引用地址, 将来解锁用
9: astore_0             //将指针存下来
10: monitorenter        //进入同步代码块                        -----------------------> 保证原子性、可见性
11: getstatic #2     // 对应if(INSTANCE == null), 获取静态变量INSTANCE
14: ifnonnull 27       // 判断是否为null, 如果不是null, 跳转到27行
* 17: new #3           // new Singleton();
* 20: dup               // 复制对象的引用
* 21: invokespecial #4 // 根据引用地址, 调用构造方法
* 24: putstatic #2     // 将新new的对象, 放回static INSTANCE
// -------------------------------------> 加入对 INSTANCE 变量的写屏障
27: aload_0             //拿出Singleton.class类对象
28: monitorexit         //解锁                                 ------------------------> 保证原子性、可见性
29: goto 37
32: astore_1
33: aload_0
34: monitorexit
35: aload_1
36: athrow
37: getstatic #2     // 对应return INSTANCE, 获取静态变量INSTANCE
40: areturn             // 返回
```

在24指令`putstatic`后加入写屏障, 避免了该指令之前的指令, 重排到其后. 所以这里21指令`invokespecial`必须在其前执行,就不会发生对象未初始化的情况.


# happens-before
happens-before是可见性与有序性的一套规则总结，抛开以下happens-before规则, JMM并不能保证一个线程对共享变量的写，对于其它线程对该共享变量的读可见.
- 线程解锁m之前对变量的写对于接下来对m加锁的其它线程对该变量的读可见
原因是synchronized退出时, 会putstatic
```java
static int x;
static Object m = new Object();
new Thread(()->{
    synchronized(m) {
    x = 10;
    }
},"t1").start();
new Thread(()->{
    synchronized(m) {
    System.out.println(x);
    }
},"t2").start();
```

- 线程对 volatile 变量的写，对接下来其它线程对该变量的读可见
下面代码假设t1先于t2执行
```java
volatile static int x;
new Thread(()->{
    x = 10;
},"t1").start();
new Thread(()->{
    System.out.println(x);
},"t2").start();
```

- 线程start前对变量的写，对该线程start后对该变量的读可见
下面代码,在t2`start()`之前已经对x经行了写入操作, 所以对t2是可见的
```java
static int x;
x = 10;
new Thread(()->{
    System.out.println(x);
},"t2").start();

```

- 线程结束前对变量的写，对其它线程得知它结束后的读可见
比如使用`join()`
```java
static int x;
Thread t1 = new Thread(()->{
    x = 10;
},"t1");
t1.start();
t1.join();
System.out.println(x);
```

- 线程 t1 打断 t2（interrupt）前对变量的写，对于其他线程得知 t2 被打断后对变量的读可见
```java
static int x;
public static void main(String[] args) {
    Thread t2 = new Thread(()->{
        while(true) {
            if(Thread.currentThread().isInterrupted()) {
                System.out.println(x);
                break;
            }
        }
    },"t2");
    t2.start();
    new Thread(()->{
        sleep(1);
        x = 10;
        t2.interrupt();
    },"t1").start();
    while(!t2.isInterrupted()) {
        Thread.yield();
    }
    System.out.println(x);
}
```

- 配合 volatile 的防指令重排
因为volatile是修饰x, 所以对y的赋值操作会在对x之前完成
```java
volatile static int x;
static int y;
new Thread(()->{
    y = 10;
    x = 20;
},"t1").start();
new Thread(()->{
    // x=20 对 t2 可见, 同时 y=10 也对 t2 可见
    System.out.println(x);
},"t2").start();

```

- 对变量默认值（0，false，null）的写，对其它线程对该变量的读可见