# semaphore



## Semaphore Objects
和Lock一样, 但是多了计数器, 用来计算锁的数量

### 构造方法
`class threading.Semaphore(value=1)`是一个factory function, value是锁数量, 每当一个thread获得锁, 计数器减1

### 对象方法
方法|描述
--|--
acquire(blocking=True, timeout=None)|获得锁
release()|释放锁