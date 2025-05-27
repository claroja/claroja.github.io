# json


## 创建Thread
当程序运行时, 自动创建了一个Main Thread, Main Thread和我们创建的Thread地位平等地被系统调度.
### 方法1: extend Thread
不推荐, 使用匿名内部类
```java
Thread t = new Thread("t1"){
    @Override
    public void run() {
        log.debug("running");
    }
};
t.start();
```
### 方法2: implements Runnable
推荐, 更为灵活
```java
Runnable r = () -> {log.debug("running");};
Thread t = new Thread(r, "t2");
t.start();
```

**注意**:
`Runnable`只有一个方法, 并且被`@FunctionalInterface`注解, 所以可以被lambda简化.
```java
@FunctionalInterface
public interface Runnable {
    public abstract void run();
}
```

原始写法:
```java
Runnable r = new Runnable() {
    @Override
    public void run() {
        log.debug("running");
    }
};

Thread t = new Thread(r, "t0");
```
简化写法:
```java
Runnable r = () -> log.debug("running");
Thread t = new Thread(r, "t0");
```
继续简化:
```java
Thread t = new Thread(()->{ log.debug("running"); }, "t0");
```

### 方法3: FutureTask
这个方法可以获得线程的执行结果
```java
FutureTask<Integer> task = new FutureTask<>(() -> {
    log.debug("hello");
    return 100;
});
new Thread(task, "t0").start();
// 主线程阻塞，同步等待 task 执行完毕的结果
Integer result = task.get();
log.debug("{}", result);
```

## 线程运行原理
1. stack
Java Virtual Machine Stacks(虚拟机栈),JVM 中由堆、栈、方法区所组成,每个线程启动后，虚拟
机就会为其分配一块栈内存。
- 每个栈由多个栈帧（Frame）组成，对应着每次方法调用时所占用的内存
- 每个线程只能有一个活动栈帧，对应着当前正在执行的那个方法
2. Context Switch
Thread Context Switch
由于:
- 线程的cpu时间片用完
- 垃圾回收
- 有更高优先级的线程需要运行
- 线程自己调用了sleep、yield、wait、join、park、synchronized、lock等方法
导致cpu 不再执行当前的线程，转而执行另一个线程的代码.
当 Context Switch 发生时，需要由操作系统保存当前线程的状态，并恢复另一个线程的状态. 程序计数器（Program Counter Register），它的作用是记住下一条 jvm 指令的执行地址. Context Switch 频繁发生会影响性能.
3. 系统调度
`t1`和`t2`两个进程在运行过程中, 被系统调度, 交替执行
```java
new Thread(() -> {
    while(true) {
        log.debug("running, t1");
    }
},"t1").start();
new Thread(() -> {
    while(true) {
        log.debug("running, t2");
    }
},"t2").start();
```




## 常用命令
`stop()`, `suspend()`, `resume()`不推荐使用
### start() & run()
- start()方法只是让线程进入就绪, CPU的时间片还没分给它.
- 每个线程对象的start方法只能调用一次，如果调用了多次会抛出`IllegalThreadStateException`
IllegalThreadStateException
```java
Thread t1 = new Thread("t1") {
    @Override
    public void run() {
        log.debug("running...");
    }
};
t1.run();//此方法被主线程mian()调用
t1.start();//此方法新建Thread调用
```

### sleep & yield
#### sleep
1. 调用sleep会让当前线程从Running进入Timed Waiting(阻塞)
2. 其它线程可以使用`interrupt`方法打断正在睡眠的线程,这时sleep方法会抛出`InterruptedException`
3. 睡眠结束后的线程等待系统调度
4. 建议用TimeUnit的sleep代替Thread的sleep, 其本质还是调用Thread的sleep

```java
Thread t1 = new Thread("t1") {
    @Override
    public void run() {
        log.debug("enter sleep...");
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            log.debug("wake up...");
            e.printStackTrace();
        }
    }
};
t1.start();
Thread.sleep(1000);
log.debug("interrupt...");
t1.interrupt();
```

sleep的应用
当响应请求时, 会使用`while(true)`, 如果不加sleep, 或其他阻塞.会浪费cpu
```java
while(true) {
    try {
        Thread.sleep(50);
    } catch (InterruptedException e) {
        e.printStackTrace();
    }
}
```


#### yield
1. 调用yield会让当前线程从Running进入`Runnable`就绪状态，然后调度执行其它线程, 如果没有其他线程, 还是执行该线程
`Runnable`: 是就绪, 系统可以随时调度
`Timed Waiting`: 是等待, 系统必须等待Timed waiting完成后才能调度.
```java
Runnable task1 = () -> {
    int count = 0;
    for (;;) {
        System.out.println("---->1 " + count++);
    }
};
Runnable task2 = () -> {
    int count = 0;
    for (;;) {
        Thread.yield();
        System.out.println("<----2 " + count++);
    }
};
Thread t1 = new Thread(task1, "t1");
Thread t2 = new Thread(task2, "t2");
t1.start();
t2.start();
```
没有给task2加`yield`时, 两者计数差不多, 加了`yield`, task2会不断让出CPU时间, 所以task1会明显比taks2多.


### setPriority
优先级`setPriority(Thread.MIN_PRIORITY)`

- 线程优先级会提示（hint）调度器优先调度该线程，但它仅仅是一个提示
- 如果 cpu 比较忙，那么优先级高的线程会获得更多的时间片, 但cpu闲时, 优先级几乎没作用
```java
        Runnable task1 = () -> {
            int count = 0;
            for (;;) {
                System.out.println("---->1 " + count++);
            }
        };
        Runnable task2 = () -> {
            int count = 0;
            for (;;) {
                System.out.println("<----2 " + count++);
            }
        };
        Thread t1 = new Thread(task1, "t1");
        Thread t2 = new Thread(task2, "t2");
        t1.setPriority(Thread.MAX_PRIORITY);
        t2.setPriority(Thread.MIN_PRIORITY);
        t1.start();
        t2.start();
```
t1的优先级高, 所以会打印更多次.


### join
- 主线的程调用, 阻塞主线程, 等待join()的子线程运行结束.
- join()可以传入时间参数, 如果超过该时间参数, 则不会继续等待(不阻塞), 继续向下运行.
```java
log.debug("开始");
Thread t1 = new Thread(() -> {
    log.debug("开始");
    sleep(1);
    r = 10;
    log.debug("结束");
},"t1");
t1.start();
t1.join();
log.debug("结果为:{}", r);
log.debug("结束");
```

### interrupt
- `interrupt()`打断线程
如果打断的线程是sleep, wait, join会抛出`InterruptedException`, 并设置`isInterrupted()`为`false`.
如果打断的线程正在运行, 则会设置`isInterrupted()`为`true`
- `isInterrupted()`,判断是否被打断, 不会改变`isInterrupted()`
- `interrupted()`,短短是否被打断, 并设置`isInterrupted()`为`false`

#### 打断 `sleep`,`wait`,`join`线程
会抛出异常, 并将`isInterrupted`设置为false.
```java
Thread t1 = new Thread(() -> {
    log.debug("sleep...");
    try {
        Thread.sleep(5000); // wait, join
    } catch (InterruptedException e) {
        e.printStackTrace();
    }
},"t1");
t1.start();
Thread.sleep(1000);
log.debug("interrupt");
t1.interrupt();
log.debug("{}", t1.isInterrupted());
```

#### 打断正在运行的线程
打断正在运行的线程, 并不会终止线程的运行, 但可以改变`isInterrupted()`的状态为`true`
```java
Thread t1 = new Thread(() -> {
    while(true) {
    }
}, "t1");
t1.start();
Thread.sleep(1000);
log.debug("interrupt");
t1.interrupt();
log.debug("{}",t1.isInterrupted());
```
被打断的线程, 可以利用`isInterrupted()`来判断自己是否被打断, 来决定自己的执行

```java
Thread t1 = new Thread(() -> {
    while(true) {
        if(Thread.currentThread().isInterrupted()) {
            log.debug("被打断了, 退出线程");
            break;
        }
    }
}, "t1");
t1.start();
Thread.sleep(1000);
log.debug("interrupt");
t1.interrupt();
log.debug("{}",t1.isInterrupted());
```

#### 应用-两阶段终止模式
- 使用`stop()`方法停止线程(@Depracated)
`stop()`暴力杀死线程, 如果线程锁住了共享资源，暴力杀死不会释放锁，其它线程将永远无法获取锁
- 使用 `System.exit(int)` 方法停止线程
目的仅是停止一个线程，但这种做法会让整个程序都停止

两阶段是指:
- 运行阶段被打断, `isInterrupted()`为`true`, 可直接处理
- sleep阶段被打断, `isInterrupted()`为`false`, 通过异常处理, 在进行`current.interrupt()`打断, 处理打断
```java
@Slf4j(topic = "TwoPhaseTermination")
public class Test13 {
    public static void main(String[] args) throws InterruptedException {
        TwoPhaseTermination tpt = new TwoPhaseTermination();
        tpt.start();
        Thread.sleep(2000);
        tpt.stop();

    }
}

@Slf4j(topic = "TwoPhaseTermination")
class TwoPhaseTermination {
    private Thread thread;
    public void start() {
        thread = new Thread(() -> {
            while (true) {
                Thread current = Thread.currentThread();
                if (current.isInterrupted()) {//运行时被打断
                    log.debug("料理后事");
                    break;
                }
                try {//sleep时被打断
                    Thread.sleep(1000);
                    log.debug("执行");
                } catch (InterruptedException e) {
                    e.printStackTrace();
                    current.interrupt();
                }
            }
        }, "thread");
        thread.start();
    }
    public void stop(){
        thread.interrupt();
    }
}

```


## LockSupport.park()
和sleep不同, park被打断后不会抛出异常, 而是直接向下执行
```java
Thread t1 = new Thread(() -> {
    log.debug("park...");
    LockSupport.park();
    log.debug("unpark...");
    log.debug("{}", Thread.currentThread().isInterrupted());
}, "t1");
t1.start();
sleep(1);
t1.interrupt();
```
当打断后,`isInterrupted()`为`true`, 当再执行`LockSupport.park()`则不起作用, 想要再起作用可以通过`interrupted()`将`isInterrupted()`为`false`
```java
Thread t1 = new Thread(() -> {
    log.debug("park...");
    LockSupport.park();
    log.debug("unpark...");
    log.debug("{}", Thread.currentThread().interrupted());
    log.debug("park...");
    LockSupport.park();
    log.debug("unpark...");
}, "t1");
t1.start();
sleep(1);
t1.interrupt();
sleep(1);
t1.interrupt();
```

## 主线程和守护线程
默认状态, 主线程运行结束, 既会结束. 子线程继续运行, 两者不相干.(但只要有线程没结束, 进程就不会结束).
当给子线程`setDaemon(true)`时, 主线程结束, 子线程也会结束.
```java
Thread t1 = new Thread(() -> {
    while (true) {
    }
}, "t1");
//t1.setDaemon(true);
t1.start();
Thread.sleep(1000);
log.debug("结束");
```