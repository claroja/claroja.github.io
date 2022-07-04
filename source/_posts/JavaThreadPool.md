---
title: JavaThreadPool
toc: true
date: 2021-07-11 11:33:37
tags:
categories:
---
# ThreadPoolExecutor

# 线程池状态
ThreadPoolExecutor 使用 int 的高 3 位来表示线程池状态，低 29 位表示线程数量
状态名|高3位|接收新任务|处理阻塞队列任务|说明
--|--|--|--|--
RUNNING| 111| Y |Y |
SHUTDOWN| 000| N| Y|不会接收新任务,但会处理阻塞队列剩余任务
STOP| 001| N| N|会中断正在执行的任务，并抛弃阻塞队列任务
TIDYING| 010| -| -|任务全执行完毕，活动线程为 0 即将进入终结
TERMINATED| 011| -| - |终结状态
TERMINATED > TIDYING > STOP > SHUTDOWN > RUNNING(高三位表示, RUNNING第一位是1,是负数).
为什么是使用一个int, 存放线程状态和线程数量, 而不是分开存储?
这些信息存储在一个原子变量 ctl 中，目的是将线程池状态与线程个数合二为一，这样就可以用一次 cas 原子操作
进行赋值:
```java
// c 为旧值， ctlOf 返回结果为新值
ctl.compareAndSet(c, ctlOf(targetState, workerCountOf(c))));
// rs 为高 3 位代表线程池状态， wc 为低 29 位代表线程个数，ctl 是合并它们
private static int ctlOf(int rs, int wc) { return rs | wc; }
```

# 构造方法
```java
public ThreadPoolExecutor(int corePoolSize,
    int maximumPoolSize,
    long keepAliveTime,
    TimeUnit unit,
    BlockingQueue<Runnable> workQueue,
    ThreadFactory threadFactory,
    RejectedExecutionHandler handler)
```
参数|描述
corePoolSize |核心线程数目 (最多保留的线程数)
maximumPoolSize |如果任务超过了`corePoolSize`,则动态扩容到最大线程数目(救急线程在任务执行完毕会销毁掉)
workQueue |如果任务超过了`maximumPoolSize`,则进入阻塞队列
keepAliveTime |生存时间 - 针对救急线程(maximumPoolSize-corePoolSize)的线程, 称为救急线程
unit |时间单位 - 针对救急线程
threadFactory |线程工厂 - 可以为线程创建时起个名字
handler |拒绝策略

JDK拒绝策略
- AbortPolicy 抛出RejectedExecutionException异常, 这是默认策略
- CallerRunsPolicy 让调用者运行任务
- DiscardPolicy 放弃本次任务
- DiscardOldestPolicy 放弃队列中最早的任务，本任务取而代之
三方拒绝策略:
- Dubbo在抛出RejectedExecutionException 异常之前会记录日志, 并dump 线程栈信息, 方便定位问题
- Netty 创建一个新线程来执行任务
- ActiveMQ 带超时等待（60s）尝试放入队列，类似我们之前自定义的拒绝策略
- PinPoint 使用一个拒绝策略链，会逐一尝试策略链中每种拒绝策略


## newFixedThreadPool
固定大小线程池: 核心线程数 == 最大线程数（没有救急线程被创建），因此也无需超时时间
阻塞队列是无界的, 可以放任意数量的任务
```java
public static ExecutorService newFixedThreadPool(int nThreads) {
    return new ThreadPoolExecutor(nThreads, nThreads,
    0L, TimeUnit.MILLISECONDS,
    new LinkedBlockingQueue<Runnable>());
}
```

## newCachedThreadPool
```java
public static ExecutorService newCachedThreadPool() {
    return new ThreadPoolExecutor(0, Integer.MAX_VALUE,
    60L, TimeUnit.SECONDS,
    new SynchronousQueue<Runnable>());
}
```
核心线程数是 0, 最大线程数是 Integer.MAX_VALUE, 救急线程的空闲生存时间是 60s:
- 全部都是救急线程（60s 后可以回收）
- 救急线程可以无限创建
- 队列采用了 SynchronousQueue 实现, 随存随取

## newSingleThreadExecutor
```java
public static ExecutorService newSingleThreadExecutor() {
    return new FinalizableDelegatedExecutorService
    (new ThreadPoolExecutor(1, 1, 0L, TimeUnit.MILLISECONDS,new LinkedBlockingQueue<Runnable>()));
}
```
线程数固定为 1，任务数多于 1 时，会放入无界队列排队。任务执行完毕，这唯一的线程
也不会被释放。
和自己创建线程的区别: 自己创建一个单线程串行执行任务，如果任务执行失败而终止那么没有任何补救措施，而线程池还会新建一个线程，保证池的正常工作
和`newFixedThreadPool(1)`的区别:FinalizableDelegatedExecutorService 应用的是装饰器模式，只对外暴露了 ExecutorService 接口，因此不能调用 ThreadPoolExecutor 中特有的方法, 就是不能修改线程数


# 提交任务
- `void execute(Runnable command);`无返回值
- `<T> Future<T> submit(Callable<T> task);`Future接收返回值

使用保护性暂停模式接收结果:
```java
ExecutorService pool = Executors.newFixedThreadPool(1);
Future<String> future = pool.submit(() -> {
    log.debug("running");
    Thread.sleep(1000);
    return "ok";
});

log.debug("{}", future.get());
```
- `<T> List<Future<T>> invokeAll(Collection<? extends Callable<T>> tasks, long timeout, TimeUnit unit) throws InterruptedException;`
提交 tasks 中所有任务，带超时时间

```java
ExecutorService pool = Executors.newFixedThreadPool(2);
List<Future<String>> futures = pool.invokeAll(Arrays.asList(
        () -> {
            log.debug("begin");
            Thread.sleep(1000);
            return "1";
        },
        () -> {
            log.debug("begin");
            Thread.sleep(500);
            return "2";
        },
        () -> {
            log.debug("begin");
            Thread.sleep(2000);
            return "3";
        }
));

futures.forEach( f ->  {
    try {
        log.debug("{}", f.get());
    } catch (InterruptedException | ExecutionException e) {
        e.printStackTrace();
    }
});
    

```



- `<T> T invokeAny(Collection<? extends Callable<T>> tasks, long timeout, TimeUnit unit) throws InterruptedException, ExecutionException, TimeoutException;`
提交 tasks 中所有任务，哪个任务先成功执行完毕，返回此任务执行结果，其它任务取消，带超时时间

```java
ExecutorService pool = Executors.newFixedThreadPool(3);
String result = pool.invokeAny(Arrays.asList(
        () -> {
            log.debug("begin 1");
            Thread.sleep(1000);
            log.debug("end 1");
            return "1";
        },
        () -> {
            log.debug("begin 2");
            Thread.sleep(500);
            log.debug("end 2");
            return "2";
        },
        () -> {
            log.debug("begin 3");
            Thread.sleep(2000);
            log.debug("end 3");
            return "3";
        }
));
log.debug("{}", result);
```

# 停止
shutdown: 线程池状态变为 SHUTDOWN, 不会接收新任务, 但已提交任务会执行完
shutdownNow: 线程池状态变为 STOP, 不会接收新任务, 将队列中的任务返回, 并用 interrupt 的方式中断正在执行的任务
boolean isShutdown(): 不在RUNNING状态的线程池，此方法就返回true
boolean isTerminated(): 线程池状态是否是 TERMINATED
boolean awaitTermination(): 于调用线程并不会等待所有任务运行结束,此方法可以在线程池 TERMINATED 后做些事

```java
ExecutorService pool = Executors.newFixedThreadPool(2);
Future<Integer> result1 = pool.submit(() -> {
    log.debug("task 1 running...");
    Thread.sleep(1000);
    log.debug("task 1 finish...");
    return 1;
});

Future<Integer> result2 = pool.submit(() -> {
    log.debug("task 2 running...");
    Thread.sleep(1000);
    log.debug("task 2 finish...");
    return 2;
});

Future<Integer> result3 = pool.submit(() -> {
    log.debug("task 3 running...");
    Thread.sleep(1000);
    log.debug("task 3 finish...");
    return 3;
});

log.debug("shutdown");
//        pool.shutdown();//shutdown不会阻塞主线程
//        pool.awaitTermination(5, TimeUnit.SECONDS);//主线程等待时间
List<Runnable> runnables = pool.shutdownNow();//队列中的任务, 可以返回
log.debug("{}" , runnables);
```


# 定时线程池: newScheduledThreadPool
1. 延迟1s执行
```java
ScheduledExecutorService pool = Executors.newScheduledThreadPool(2);
pool.schedule(() -> {
    log.debug("task1");
}, 1, TimeUnit.SECONDS);
```

2. 多个线程, 不相互影响
```java
ScheduledExecutorService pool = Executors.newScheduledThreadPool(2);
pool.schedule(() -> {
    log.debug("task1");
    sleep(2);//此处不会影响线程池其他的任务
}, 1, TimeUnit.SECONDS);

pool.schedule(() -> {
    log.debug("task2");
}, 1, TimeUnit.SECONDS);
```

3. 设置period, 重复执行.注意period是该线程执行的时间, 如果该任务执行时间超过了period, 则会覆盖
```java
ScheduledExecutorService pool = Executors.newScheduledThreadPool(1);
log.debug("start...");
pool.scheduleAtFixedRate(() -> {
    Thread.sleep(2000);
    log.debug("running...");
}, 1, 1, TimeUnit.SECONDS);//间隔2s执行一次, sleep时间大于period
```

4. `newFixedThreadPool`固定间隔线程池
```java
ExecutorService pool = Executors.newFixedThreadPool(1);
pool.submit(() -> {
    Thread.sleep(2000);
    log.debug("running");
},1, 1, TimeUnit.SECONDS);//间隔3s之心过一次, sleep+period时间
```
5. 定时任务
```java
// 每周四 18:00:00 定时执行
LocalDateTime now = LocalDateTime.now();//  获取当前时间
System.out.println(now);
LocalDateTime time = now.withHour(18).withMinute(0).withSecond(0).withNano(0).with(DayOfWeek.THURSDAY);// 获取周四时间
System.out.println(time);
// 如果 当前时间 > 本周周四，必须找到下周周四
if(now.compareTo(time) > 0) {
    time = time.plusWeeks(1);
}
System.out.println(time);
// initailDelay 代表当前时间和周四的时间差
// period 一周的间隔时间
long initailDelay = Duration.between(now, time).toMillis();
long period = 1000 * 60 * 60 * 24 * 7;
ScheduledExecutorService pool = Executors.newScheduledThreadPool(1);
pool.scheduleAtFixedRate(() -> {
    System.out.println("running...");
}, initailDelay, period, TimeUnit.MILLISECONDS);
```

# 异常处理

1. 自行处理
```java
ScheduledExecutorService pool = Executors.newScheduledThreadPool(1);
pool.schedule(() -> {
    try {
        log.debug("task1");
        int i = 1 / 0;
    } catch (Exception e) {
        log.error("error:", e);
    }
}, 1, TimeUnit.SECONDS);
```

2. 通过获得结果处理
```java
ExecutorService pool2 = Executors.newFixedThreadPool(1);
Future<Boolean> f = pool.submit(() -> {
        log.debug("task1");
        int i = 1 / 0;
        return true;
});
log.debug("{}",f.get());
```

# Fork/join
适用于能够进行任务拆分的 cpu 密集型
Fork/Join 在分治的基础上加入了多线程，可以把每个任务的分解和合并交给不同的线程来完成
默认会创建与 cpu 核心数大小相同的线程池

```java
Slf4j(topic = "test2")
public class TestForkJoin2 {
    public static void main(String[] args) {
        ForkJoinPool pool = new ForkJoinPool(4);
        System.out.println(pool.invoke(new MyTask(15)));
        // new MyTask(5)  5+ new MyTask(4)  4 + new MyTask(3)  3 + new MyTask(2)  2 + new MyTask(1)
    }
}
// 1~n 之间整数的和
@Slf4j(topic = "test1")
class MyTask extends RecursiveTask<Integer> {
    private int n;
    public MyTask(int n) {
        this.n = n;
    }
    @Override
    public String toString() {
        return "{" + n + '}';
    }
    @Override
    protected Integer compute() {
        if (n == 1) {// 如果 n 已经为 1，可以求得结果了
            log.debug("join() {}", n);
            return n;
        }
        // 将任务进行拆分(fork)
        MyTask t1 = new MyTask(n - 1);
        t1.fork();
        log.debug("fork() {} + {}", n, t1);
        // 合并(join)结果
        int result = n + t1.join();
        log.debug("join() {} + {} = {}", n, t1, result);
        return result;
    }
}

```

# 其他
- 饥饿
    固定大小线程池会有饥饿现象, 
    - 解决方法可以增加线程池的大小，
    - 不同的任务类型，采用不同的线程
- 线程池中线程数量
    - 过小会导致程序不能充分地利用系统资源、容易导致饥饿
    - 过大会导致更多的线程上下文切换，占用更多内存
- CPU 密集型运算
通常采用cpu核数+1能够实现最优的CPU利用率, +1是保证当线程由于操作系统或其它原因导致暂停时，额外的这个线程就能顶上去，保证 CPU 时钟周期不被浪费.
- I/O 密集型运算
目标还是把CPU打满.
线程数 = 核数 * 期望 CPU 利用率/IOCPU利用率
例如 4 核 CPU 计算时间是 10% ，其它等待时间是 90%，期望 cpu 被 100% 利用，套用公式
4 * 100% / 10% = 40

# 补充Tomcat原理

