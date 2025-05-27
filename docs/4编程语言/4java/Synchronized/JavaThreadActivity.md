# 第五编婚姻家庭-第四章离婚


## 死锁
一个线程需要同时获取多把锁，这时就容易发生死锁.
使用 jps 定位进程 id，再用 jstack 定位死锁：
t1 线程获得A对象锁，接下来想获取B对象的锁t2线程 获得B对象锁，接下来想获取A对象的锁：
```java
    private static void test1() {
        Object A = new Object();
        Object B = new Object();
        Thread t1 = new Thread(() -> {
            synchronized (A) {
                log.debug("lock A");
                sleep(1);
                synchronized (B) {
                    log.debug("lock B");
                    log.debug("操作...");
                }
            }
        }, "t1");

        Thread t2 = new Thread(() -> {
            synchronized (B) {
                log.debug("lock B");
                sleep(0.5);
                synchronized (A) {
                    log.debug("lock A");
                    log.debug("操作...");
                }
            }
        }, "t2");
        t1.start();
        t2.start();
```
顺序加锁可以解决死锁


## 活锁
活锁出现在两个线程互相改变对方的结束条件，最后谁也无法结束
```java
static volatile int count = 10;
static final Object lock = new Object();

public static void main(String[] args) {
    new Thread(() -> {
        while (count > 0) {
            sleep(0.2);
            count--;
            log.debug("count: {}", count);
        }
    }, "t1").start();
    new Thread(() -> {
        while (count < 20) {
            sleep(0.2);
            count++;
            log.debug("count: {}", count);
        }
    }, "t2").start();
}
```

## 饥饿
一个线程由于优先级太低，始终得不到 CPU 调度执行，也不能够结束