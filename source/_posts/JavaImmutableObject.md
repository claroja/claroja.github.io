---
title: JavaImmutableObject
toc: true
date: 2021-07-11 11:33:05
tags:
categories:
---
# 问题引出
`DateTimeFormatter`是可变类型, 多线程调用会报错
```java
public static void main(String[] args) {
    SimpleDateFormat stf = SimpleDateFormat.ofPattern("yyyy-MM-dd");
    for (int i = 0; i < 10; i++) {
        new Thread(() -> {
            TemporalAccessor parse = stf.parse("1951-04-21");
            log.debug("{}", parse);
        }).start();
    }
}
```
可以使用`synchronized`来解决:
```java
public static void main(String[] args) {
    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
    for (int i = 0; i < 10; i++) {
        new Thread(() -> {
            synchronized (sdf) {
                try {
                    log.debug("{}", sdf.parse("1951-04-21"));
                } catch (Exception e) {
                    log.error("{}", e);
                }
            }
        }).start();
    }
}
```
可以使用不可变类`DateTimeFormatter`来解决:
```java
public static void main(String[] args) {
    DateTimeFormatter stf = DateTimeFormatter.ofPattern("yyyy-MM-dd");
    for (int i = 0; i < 10; i++) {
        new Thread(() -> {
            TemporalAccessor parse = stf.parse("1951-04-21");
            log.debug("{}", parse);
        }).start();
    }
}
```

# 不可变设计
```java
public final class String //final修饰, 不可被继承, 防止子类无意改变其特性
    implements java.io.Serializable, Comparable<String>, CharSequence {
    private final char value[]; // final修饰, 不可被更改
    private int hash; // 私有的, 不可被更改(没有set方法)
    // ...

}
```
# 不不可变类String
`substring()`实际是创建了新的String对象
```java
public String substring(int beginIndex) {
    return (beginIndex == 0) ? this : new String(value, beginIndex, subLen);
}
```
`Arrays.copyOfRange()`方法进行深拷贝, 保证`String`实例指向的数组值时唯一的, 不是和别人共享的.
```java
public String(char value[], int offset, int count) {
    this.value = Arrays.copyOfRange(value, offset, offset+count);
}
```


# 享元模式(Flyweight pattern)
A flyweight is an object that minimizes memory usage by sharing as much data as
possible with other similar objects

1. 包装类
Boolean，Byte，Short，Integer，Long，Character 等包装类提供了 valueOf 方法，例如 Long 的
valueOf 会缓存 -128~127 之间的 Long 对象，在这个范围之间会重用对象，大于这个范围，才会新建 Long 对
象：
```java
public static Long valueOf(long l) {
    final int offset = 128;
        if (l >= -128 && l <= 127) { // will cache
        return LongCache.cache[(int)l + offset];
    }
    return new Long(l);
}

private static class LongCache {
    private LongCache(){}
    static final Long cache[] = new Long[-(-128) + 127 + 1];//首先胡初始化256长度的cache数组
    static {
        for(int i = 0; i < cache.length; i++)
            cache[i] = new Long(i - 128);
    }
}

```

2. String串池


3. BigDecimal BigInteger


# 自定义连接池

```java
public class Test {
    public static void main(String[] args) {
        Pool pool = new Pool(2);
        for (int i = 0; i < 5; i++) {
            new Thread(() -> {
                MockConnection conn = pool.get();
                try {
                    Thread.sleep(new Random().nextInt(1000));
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                pool.free(conn);
            }).start();
        }
    }
}

class Pool {
    private final int poolSize;//固定大小
    private MockConnection[] connections;// 连接对象数组
    private AtomicIntegerArray states;// 连接状态数组 0 表示空闲， 1 表示繁忙
    // 4. 构造方法初始化
    public Pool(int poolSize) {
        this.poolSize = poolSize;
        this.connections = new MockConnection[poolSize];
        this.states = new AtomicIntegerArray(new int[poolSize]);
        for (int i = 0; i < poolSize; i++) {
            connections[i] = new MockConnection("连接" + (i+1));
        }
    }

    public MockConnection get() {//拿出连接
        while(true) {
            for (int i = 0; i < poolSize; i++) {
                if(states.get(i) == 0) {
                    if (states.compareAndSet(i, 0, 1)) {
                        log.debug("get {}", connections[i]);
                        return connections[i];
                    }
                }
            }
            synchronized (this) {// 如果没有空闲连接，当前线程进入等待
                try {
                    log.debug("wait...");
                    this.wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }
    public void free(MockConnection conn) {//归还连接
        for (int i = 0; i < poolSize; i++) {
            if (connections[i] == conn) {
                states.set(i, 0);
                synchronized (this) {
                    log.debug("free {}", conn);
                    this.notifyAll();
                }
                break;
            }
        }
    }
}

class MockConnection{
    private String name;
    MockConnection(String name){
        this.name = name;
    }
}
```

# final 原理
```java
public class TestFinal {
    final int a = 20;
}
```
字节码
```s
0: aload_0
1: invokespecial #1 // Method java/lang/Object."<init>":()V
4: aload_0
5: bipush 20
7: putfield #2 // Field a:I
 <-- 写屏障(之前的指令不会重排到后面, 且会同步到主存)
10: return
```
final 变量的赋值也会通过 putfield 指令来完成，同样在这条指令之后也会加入写屏障，保证在其它线程读到它的值时不会出现为 0 的情况
如果不加`final`, `int a = 20;`其实是两步操作:
1. `int a = 0`开辟空间赋值为0
2. `a = 20` 
如果没有final(写屏障), 那么多线程可能会重排, 其他线程可能会看到a = 0的情况