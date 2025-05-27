# dataframe_sql


## 线程安全类
- 过时的线程安全集合(用synchronized修饰, 效率低): Hashtable(map实现), Vector(list实现)
- 使用Collections装饰的线程安全集合(装饰器模式, 只是拿来做了封装): Collections.synchronizedMap, Collections.synchronizedSet等
- java.util.concurrent:
    - Blocking 大部分实现基于锁，并提供用来阻塞的方法, 使用ReentrantLock实现
    - CopyOnWrite 使用深拷贝模式, 避免不安全, 适用于读多写少的
    - Concurrent cas做优化, 性能比较多, 做推荐


注意
```java
public static void main(String[] args) {
    demo(//未能保证原子性, 因为虽然ConcurrentHashMap的get,put是线程安全的, 但是他们组合使用并非安全
        () -> new ConcurrentHashMap<String, Integer>(),
        (map, words) -> {
            for (String word : words) {
                Integer counter = map.get(word);
                int newValue = counter == null ? 1 : counter + 1;
                map.put(word, newValue);
            }
        }
    );

    demo(
            () -> new ConcurrentHashMap<String, LongAdder>(8,0.75f,8),
            (map, words) -> {
                for (String word : words) {
                    // 如果缺少一个 key，则计算生成一个 value , 然后将  key value 放入 map
                    //                  a      0
                    LongAdder value = map.computeIfAbsent(word, (key) -> new LongAdder());
                    // 执行累加
                    value.increment(); // 2
                }
            }
    );
}

private static <V> void demo(Supplier<Map<String, V>> supplier, BiConsumer<Map<String, V>, List<String>> consumer) {
    Map<String, V> counterMap = supplier.get();
    List<Thread> ts = new ArrayList<>();
    for (int i = 1; i <= 10000; i++) {
        int idx = i;
        Thread thread = new Thread(() -> {
            List<String> words = Arrays.asList("a","b");
            consumer.accept(counterMap, words);
        });
        ts.add(thread);
    }
    ts.forEach(t -> t.start());
    ts.forEach(t -> {
        try {
            t.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    });
    System.out.println(counterMap);
}
```


## 原理
JDK1.7 HashMap数据结构是数组+链表的结构
1. 当调用put()方法时, 会根据key计算hash值, 然后对整个数组的长度求模, 算出桶下标
2. 当通下标相同(hash碰撞)时, 则在该位置形成链表(jdk7会在头部加, jdk8在尾部加,七上八下)
3. 当达到数组的扩容阈值时, 会数组会进行扩容, 并重新计算hash值(这个方法可以降低hash碰撞)



JDK1.8 HashMap 底层结构进行彻底重构，使用数组加链表/红黑树方式这种组合结构。链表元素数量超过 8 之后，自动转为红黑树,提高了查找效率。
由于 JDK1.8 链表采用尾插入法，从而避免并发扩容情况下链表形成死链的可能。
但是HashMap在JDK1.8仍然不适合用于并发场景，依然是无法避免并发扩容情况下的死链问题。（并发赋值时被覆盖、size 计算问题）
参考:
https://zhuanlan.zhihu.com/p/372561504
https://www.pianshen.com/article/42821264881/