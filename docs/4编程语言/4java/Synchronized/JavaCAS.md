# 支付结算法律制度


## CAS
compareAndSet(CAS)必须借助volatile才能读取到共享变量的最新值来实现【比较并交换】的效果.
注意:volatile 仅仅保证了共享变量的可见性，让其它线程能够看到最新值，但不能解决指令交错问题（不能保证原
子性）
CAS是基于乐观锁的思想：最乐观的估计，不怕别的线程来修改共享变量，就算改了也没关系，我多尝试, 总会有没改的情况.
synchronized是基于悲观锁的思想：最悲观的估计，得防着其它线程来修改共享变量, 我用完, 其他线程才可以使用
CAS 体现的是无锁并发、无阻塞并发:
- 因为没有使用 synchronized，所以线程不会陷入阻塞，这是效率提升的因素之一.(synchronized 会让线程在没有获得锁的时候，发生上下文切换，进入阻塞。)
- 但如果竞争激烈，可以想到重试必然频繁发生，反而效率会受影响, 适用于线程数少、多核 CPU 的场景下。(多线程,单核由于竞争不到CPU,也会发生阻塞和上下文切换)

```java
public void minus(Integer amount) {
    while(true) {
        // 需要不断尝试，直到成功为止
        while (true) {
            int prev = balance.get();
            int next = prev - amount;
            /*
            compareAndSet 先比较prev与当前值(判断当前值时否被其他线程更改)
            - 不一致，作废，返回 false 表示失败
            比如，别的线程已经做了减法，当前值已经被减成了 990, 那么本线程的这次 990 就作废了，进入 while 下次循环重试
            - 一致，以 next 设置为新值，返回 true 表示成功
            */
            if (balance.compareAndSet(prev, next)) {
            break;
            }
        }
    }
}
```

## 原子整数
- AtomicBoolean
- AtomicInteger
- AtomicLong
```java
System.out.println(new AtomicInteger(1).incrementAndGet());//++i
System.out.println(new AtomicInteger(1).getAndIncrement());//i++
System.out.println(new AtomicInteger(1).getAndAdd(1)); // 1
System.out.println(new AtomicInteger(1).addAndGet(1)); // 2
System.out.println(new AtomicInteger(1).updateAndGet(x->x*10)); // 10
System.out.println(new AtomicInteger(1).getAndUpdate(x->x*10)); // 1
```

## 原子引用
AtomicReference
AtomicMarkableReference
AtomicStampedReference

1. AtomicReference
```java
class DecimalAccountSafeCas{
    AtomicReference<BigDecimal> balance = new AtomicReference<>(balance);
    public void withdraw(BigDecimal amount) {
        while (true) {
            BigDecimal prev = balance.get();
            BigDecimal next = prev.subtract(amount);
            if (ref.compareAndSet(prev, next)) {
                break;
            }
        }
    }
}
```

2. AtomicStampedReference
ABA问题: 如果其他线程更改了AtomicReference, 又恢复为原值, main thread是察觉不到的
```java
static AtomicReference<String> ref = new AtomicReference<>("A");
public static void main(String[] args) throws InterruptedException {
    log.debug("main start...");
    String prev = ref.get();
    other();// 如果中间有其它线程干扰，发生了 ABA 现象
    sleep(1);
    log.debug("change A->C {}", ref.compareAndSet(prev, "C"));// 尝试改为 C
}

private static void other() {
    new Thread(() -> {
        log.debug("change A->B {}", ref.compareAndSet(ref.get(), "B"));
    }, "t1").start();
    sleep(0.5);
    new Thread(() -> {
        log.debug("change B->A {}", ref.compareAndSet(ref.get(), "A"));
    }, "t2").start();
}
```
解决办法:比较值是不够的，需要再加一个版本号
```java
static AtomicStampedReference<String> ref = new AtomicStampedReference<>("A", 0);//第二个参数是版本号
public static void main(String[] args) throws InterruptedException {
    log.debug("main start...");
    String prev = ref.getReference();
    int stamp = ref.getStamp();
    log.debug("版本 {}", stamp);
    other();
    sleep(1);
    log.debug("change A->C {}", ref.compareAndSet(prev, "C", stamp, stamp + 1));
}
private static void other() {
    new Thread(() -> {
        log.debug("change A->B {}", ref.compareAndSet(ref.getReference(), "B", ref.getStamp(), ref.getStamp() + 1));
        log.debug("新版本为{}", ref.getStamp());
    }, "t1").start();
    sleep(0.5);
    new Thread(() -> {
        log.debug("change B->A {}", ref.compareAndSet(ref.getReference(), "A", ref.getStamp(), ref.getStamp() + 1));
        log.debug("新版本为 {}", ref.getStamp());
    }, "t2").start();
}
```

3. AtomicStampedReference
AtomicStampedReference: 以给原子引用加上版本号，追踪原子引用整个的变化过程
AtomicMarkableReference: 并不关心引用变量更改了几次，只是单纯的关心是否更改过
```java
static AtomicMarkableReference<String> ref = new AtomicMarkableReference<String>("A", true);//第二个参数是版本号
public static void main(String[] args) throws InterruptedException {
    log.debug("main start...");
    String prev = ref.getReference();
    other();
    sleep(1);
    log.debug("change A->C {}", ref.compareAndSet(prev, "C", true, true));
}
private static void other() {
    new Thread(() -> {
        log.debug("change A->B {}", ref.compareAndSet(ref.getReference(), "B", true, true));

    }, "t1").start();
    sleep(0.5);
    new Thread(() -> {
        log.debug("change B->A {}", ref.compareAndSet(ref.getReference(), "A",true, false));
    }, "t2").start();
}
```

## 原子数组
AtomicIntegerArray
AtomicLongArray
AtomicReferenceArray


1. AtomicIntegerArray
```java
public static void main(String[] args) {
    demo(
            ()->new int[10],
            (array)->array.length,
            (array, index) -> array[index]++,
            array-> System.out.println(Arrays.toString(array))
    );
    demo(
            ()-> new AtomicIntegerArray(10),
            (array) -> array.length(),
            (array, index) -> array.getAndIncrement(index),
            array -> System.out.println(array)
    );
}
// supplier 提供者 无中生有  ()->结果
// function 函数   一个参数一个结果   (参数)->结果  ,  BiFunction (参数1,参数2)->结果
// consumer 消费者 一个参数没结果  (参数)->void,      BiConsumer (参数1,参数2)->
private static <T> void demo(
        Supplier<T> arraySupplier,
        Function<T, Integer> lengthFun,
        BiConsumer<T, Integer> putConsumer,
        Consumer<T> printConsumer ) {
    T array = arraySupplier.get();
    int length = lengthFun.apply(array);
    List<Thread> ts = new ArrayList<>();
    for (int i = 0; i < length; i++) {
        ts.add(new Thread(() -> {
            for (int j = 0; j < 10000; j++) {
                putConsumer.accept(array, j%length);//每个线程,遍历数组下标,并在对应位置元素+1,共遍历(1000/10)次
            }
        }));
    }

    ts.forEach(t -> t.start()); // 启动所有线程
    ts.forEach(t -> {
        try {
            t.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    });     // 等所有线程结束
    printConsumer.accept(array);
}
```

## 字段更新器
```java
public class Test {

    public static void main(String[] args) {
        Student stu = new Student();
        AtomicReferenceFieldUpdater updater = AtomicReferenceFieldUpdater.newUpdater(Student.class, String.class, "name");
        System.out.println(updater.compareAndSet(stu, null, "张三"));
        System.out.println(stu.name);
    }
}

class Student {
    volatile String name;//必须用volatile修饰
}
```

## 原子累加器
map-reduce的思想: 在有竞争时，设置多个累加单元，Therad-0累加Cell[0], 而 Thread-1 累加Cell[1] ... 最后将结果汇总。这样它们在累加时操作的不同的Cell变量，因此减少 CAS重试失败

```java
public static void main(String[] args) {
    for (int i = 0; i < 5; i++) {
        demo(
                () -> new AtomicLong(0),
                (adder) -> adder.getAndIncrement()
        );
    }

    for (int i = 0; i < 5; i++) {
        demo(
                () -> new LongAdder(),
                adder -> adder.increment()
        );
    }
}
/*
Supplier<T>: () -> 结果    提供累加器对象
Consumer<T>: (参数) ->     执行累加操作
    */
private static <T> void demo(Supplier<T> adderSupplier, Consumer<T> action) {
    T adder = adderSupplier.get();
    List<Thread> ts = new ArrayList<>();
    for (int i = 0; i < 4; i++) {
        ts.add(new Thread(() -> {
            for (int j = 0; j < 500000; j++) {
                action.accept(adder);
            }
        }));
    }
    long start = System.nanoTime();
    ts.forEach(t -> t.start());
    ts.forEach(t -> {
        try {
            t.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    });
    long end = System.nanoTime();
    System.out.println(adder + " cost:" + (end - start) / 1000_000);
}
```

底层原理, 需补充

## usafe
Unsafe 对象提供了非常底层的，操作内存、线程的方法，Unsafe 对象不能直接调用，只能通过反射获得
```java
public class TestUnsafe {
    public static void main(String[] args) throws NoSuchFieldException, IllegalAccessException {
        Field theUnsafe = Unsafe.class.getDeclaredField("theUnsafe");
        theUnsafe.setAccessible(true);
        Unsafe unsafe = (Unsafe) theUnsafe.get(null);
        System.out.println(unsafe);
        // 1. 获取域的偏移地址
        long idOffset = unsafe.objectFieldOffset(Teacher.class.getDeclaredField("id"));
        long nameOffset = unsafe.objectFieldOffset(Teacher.class.getDeclaredField("name"));
        Teacher t = new Teacher();
        // 2. 执行 cas 操作
        unsafe.compareAndSwapInt(t, idOffset, 0, 1);
        unsafe.compareAndSwapObject(t, nameOffset, null, "张三");
        // 3. 验证
        System.out.println(t);
    }
}
@Data
class Teacher {
    volatile int id;
    volatile String name;
}
```
