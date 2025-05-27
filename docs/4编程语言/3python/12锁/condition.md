# condition


## Condition Objects
condition variable也是一种Lock.
`wait()`方法释放锁, 然后block自己, 直到另外一个thread使用`notify()`来唤醒. 唤醒后和普通线程一样, 继续竞争锁.

### 构造方法
`class threading.Condition(lock=None)`是一个factory function, lock参数可以传入Lock对象或者RLock对象, 作为底层的锁对象.

### 对象方法

方法|描述
--|--
acquire(*args)|获得底层锁
release()|释放底层锁
wait(timeout=None)|释放底层锁, 并且被阻塞(进入等候室), 直到其他thread调用`notify()`方法来唤醒
wait_for(predicate, timeout=None)|等待直到条件计算为 True，predicate 是一个可调用对象且它的返回值可被解释为一个布尔值。
notify(n=1)|唤醒一个等待该condition instance的thread
notify_all()|唤醒所有等待该condition instance的thread