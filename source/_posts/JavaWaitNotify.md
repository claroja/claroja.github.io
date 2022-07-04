---
title: JavaWaitNotify
toc: true
date: 2021-07-11 10:34:49
tags:
categories:
---
# wait/notify
- obj.wait() 让进入 object 监视器的线程到 waitSet 等待, 可以加入param 超时参数(超过时间则不等待唤醒, 自己叫醒自己)
- obj.notify() 在 object 上正在 waitSet 等待的线程中挑一个唤醒
- obj.notifyAll() 让 object 上正在 waitSet 等待的线程全部唤醒

必须获得此对象的锁(既在synchronized(lock)锁住的代码片段)，才能调用以上几个方法:

## wait
```java
static final Object object = new Object();
public static void main(String[] args) {
    synchronized (object) {
        try {
            lock.wait();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```
## notify
```java
final static Object obj = new Object();
public static void main(String[] args) {
    new Thread(() -> {
        synchronized (obj) {
            log.debug("执行....");
            try {
                obj.wait(); // 让线程在obj上一直等待下去
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            log.debug("继续执行....");
        }
    },"t1").start();

    new Thread(() -> {
        synchronized (obj) {
            log.debug("执行....");
            try {
                obj.wait(); // 让线程在obj上一直等待下去
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            log.debug("继续执行....");
        }
    },"t2").start();
    sleep(0.5);
    log.debug("唤醒obj上的wait Thread");
    synchronized (obj) {
//      obj.notify(); // 随机唤醒obj上一个线程
        obj.notifyAll(); // 唤醒obj上所有等待线程
    }
}
```

## notifyAll
notifyAll会唤醒所有waite的线程,可以根据互通的condition来唤醒对应的线程
```java
static final Object room = new Object();
static boolean condition1 = false;
static boolean condition2 = false;

public static void main(String[] args) {
    new Thread(() -> {
        synchronized (room) {
            log.debug("condition1 [{}]", condition1);
            while (!condition1) {//循环判断条件, 每次判断完, 都进行wait, 所以不占用CPU
                log.debug("没有满足condition1, 继续等待");
                try {
                    room.wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            log.debug("condition1条件满足, 执行...");

        }
    }, "t1").start();

    new Thread(() -> {
        synchronized (room) {
            log.debug("condition2 [{}]", condition2);
            while (!condition2) {//循环判断条件, 每次判断完, 都进行wait, 所以不占用CPU
                log.debug("没有满足condition2, 继续等待");
                try {
                    room.wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            log.debug("condition2条件满足, 执行...");
        }
    }, "t2").start();
    sleep(1);
    new Thread(() -> {
        synchronized (room) {
            condition2 = true;
            log.debug("主线程满足condition2条件");
            room.notifyAll();//唤醒所有线程, 让线程自己判断条件
        }
    }, "main").start();
}

```
# 原理
![1.png](1.png)



# sleep和wait区别
- sleep 是 Thread 方法，而 wait 是 Object 的方法
- sleep 不需要强制和 synchronized 配合使用，但 wait 需要和 synchronized 一起用
- sleep 在睡眠的同时，不会释放对象锁的，但 wait 在等待的时候会释放对象锁
- 它们状态都是 TIMED_WAITING


# Guarded Suspension 模式(保护性暂停)
- 有一个结果需要从一个线程传递到另一个线程，让他们关联同一个 GuardedObject
- JDK 中，join 的实现、Future 的实现，采用的就是此模式
原始通过`GuardedObject`中间对象上锁, 来实现读写的阻塞

```java
public class Test {
    public static void main(String[] args) throws InterruptedException {
        GuardedObject guardedObject = new GuardedObject();
        new Thread(()->{
            log.debug("等待结果");
            String res = guardedObject.get();
            log.debug("{}",res);
        },"t1").start();

        new Thread(()->{
            log.debug("执行命令");
            try {
                Thread.sleep(5000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            guardedObject.complete("png");

        },"t2").start();
    }
}

class GuardedObject {
    private String response;
    public String get() {//获取结果
        synchronized (this) {
            while (response == null) {
                try {
                    this.wait(); 
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            return response;
        }
    }

    public void complete(String response) {// 产生结果
        synchronized (this) {
            this.response = response;
            this.notifyAll();
        }
    }
}
```


# produce/consume模式
```java
public class Test {
    public static void main(String[] args) {
        MessageQueue queue = new MessageQueue(2);
        for (int i = 0; i < 3; i++) {
            int id = i;//lambda要求变量值不能更改, 所以要设定一个局部的变量
            new Thread(() -> {
                queue.put("产品");
            }, "生产者" + i).start();
        }
        new Thread(() -> {
            while(true) {
                sleep(1);
                String message = queue.take();
            }
        }, "消费者").start();
    }

}

// 消息队列类 
class MessageQueue {
    private LinkedList<String> list = new LinkedList<>();
    private int capcity;
    public MessageQueue(int capcity) {
        this.capcity = capcity;
    }

    public String take() {
        synchronized (list) {
            while(list.isEmpty()) {
                try {
                    log.debug("队列为空, 消费者等待");
                    list.wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            String message = list.removeFirst();
            log.debug("已消费消息 {}", message);
            list.notifyAll();
            return message;
        }
    }

    public void put(String message) {
        synchronized (list) {
            while(list.size() == capcity) {
                try {
                    log.debug("队列已满, 生产者等待");
                    list.wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            list.addLast(message);
            log.debug("已生产消息 {}", message);
            list.notifyAll();
        }
    }
}
```

# 顺序执行设计模式
1. wait/notify实现
```java
static final Object lock = new Object();
static boolean t2runned = false;
public static void main(String[] args) {
    Thread t1 = new Thread(() -> {
        synchronized (lock) {
            while (!t2runned) {
                try {
                    lock.wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            log.debug("1");
        }
    }, "t1");
    
    Thread t2 = new Thread(() -> {
        synchronized (lock) {
            log.debug("2");
            t2runned = true;
            lock.notify();
        }
    }, "t2");
    t1.start();
    t2.start();
}
```
# 交替执行设计模式
waitnotify实现
线程1, 打印a, 检验当前的flag是1, 打印完设置flag为2
......

```java
public class Test27 {
    public static void main(String[] args) {
        WaitNotify wn = new WaitNotify(1, 5);
        new Thread(() -> {
            wn.print("a", 1, 2);
        }).start();
        new Thread(() -> {
            wn.print("b", 2, 3);
        }).start();
        new Thread(() -> {
            wn.print("c", 3, 1);
        }).start();
    }
}

class WaitNotify {
    public void print(String str, int waitFlag, int nextFlag) {
        for (int i = 0; i < loopNumber; i++) {
            synchronized (this) {
                while(flag != waitFlag) {
                    try {
                        this.wait();
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
                System.out.print(str);
                flag = nextFlag;
                this.notifyAll();
            }
        }
    }
    
    private int flag; // 2
    private int loopNumber;

    public WaitNotify(int flag, int loopNumber) {
        this.flag = flag;
        this.loopNumber = loopNumber;
    }
}
```