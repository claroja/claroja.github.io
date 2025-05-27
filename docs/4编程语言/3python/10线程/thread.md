# thread




线程（英语：thread）是操作系统能够进行运算调度的最小单位。同一进程中的多条线程将共享该进程中的全部系统资源，如虚拟地址空间，文件描述符和信号处理等等。但同一进程中的多个线程有各自的调用栈（call stack），自己的寄存器环境（register context），自己的线程本地存储（thread-local storage）

由于[Global Interpreter Lock](https://docs.python.org/3/glossary.html#term-global-interpreter-lock)的原因, 只有一个thread可以执行python的代码.如果想让python充分的利用computational resources of multi-core machines, 建议使用[multiprocessing](https://docs.python.org/3/library/multiprocessing.html#module-multiprocessing). 然而threading对multiple I/O-bound 任务仍然有效, 比如读写文件, 网络请求等.


并行: 多个线程在多个cpu上运行, 物理时间上同时运行
并发: 多个线程在同一个cpu上运行,通过快速切换任务,形成多个线程同时运行的现象.物理时间上先后执行.

同步: 多个任务之间执⾏的时候要求有先后顺序, 必须⼀个先执⾏完成之后, 另⼀个才能继续执⾏, 只有⼀个主线.
异步: 多个任务之间执⾏没有先后顺序, 可以同时运⾏, 执⾏的先后顺序不会有什么影响, 存在的多条运⾏主线.


python Threading模块主要包括:

1. 线程
threading类: 获得当前线程等操作
Thread对象: 多线程
timer对象: 可定时执行线程

2. 锁
lock: 最基本的锁
rlock: 可重入锁
semaphore: 计数锁, 当小于规定阈值线程数量时, 可执行, 并获得锁
barrier: 计数锁, 当小于规定阈值线程数量时, 会阻塞, 知道大于阈值时, 才可执行
condition: 调用`wait()`来进入等待室, 调用`notify()`方法来唤醒, 好处是一个线程可以反复使用
event: 类似于condition


互斥锁为(变量)映入:锁定/⾮锁定两种状态.
某个线程要更改共享数据时，给变量上锁，其他线程不能更改; 线程操作完毕离开, 给变量解锁. 互斥锁保证了每次只有⼀个线程进⾏写⼊操作，从⽽保证了多线程情况下数据的正确性.


- `lock=threading.Lock()`  # 获得锁
- `lock.acquire()` # 上锁
- `lock.release()` # 解锁


```python
import threading
import time
g_num = 0
def work1():
    global g_num
    for i in range(1000000):
        lock.acquire()
        g_num += 1
        lock.release()
    print("work1:", g_num)
def work2():
    global g_num
    for i in range(1000000):
        lock.acquire()
        g_num -= 1
        lock.release()
    print("work2:", g_num)
if __name__ == '__main__':
    lock=threading.Lock()
    t1 = threading.Thread(target=work1)
    t2 = threading.Thread(target=work2)
    t1.start()
    t2.start()
    time.sleep(4)
    print("main:", g_num)  
```

　　当⼀个线程调⽤锁的acquire()⽅法获得锁时，变量就进⼊“locked”状态。
　　当变量进入"locked"状态, 来访问的该线程就会变为“blocked”状态，称为“阻塞”，直到拥有锁的线程调⽤锁的release()⽅法释放锁之后，锁进
⼊“unlocked”状态。该线程获得变量, 上锁, 进入running状态.



3. threadlocal
和线程绑定, 比在不同的方法中分别定义局部变量方便, 特别是设计到嵌套方法的时候, 同一个线程, 保存不同嵌套方法的变量.











参考:
https://docs.python.org/3/library/threading.html