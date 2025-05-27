# threading&Thread&timer



## Threading
方法|描述
--|--
active_count()|当前活着的线程数量
enumerate()|当前活着的线程的列表
current_thread()|返回当前线程对象
get_native_id()|返回系统分配的线程id
main_thread()|返回主线程对象
TIMEOUT_MAX|Lock.acquire(), Condition.wait()等的最大等待时间


## Thread Objects
`class threading.Thread(group=None, target=None, name=None, args=(), kwargs={}, *, daemon=None)`

1. 通过想constructor中传入callable object活着overding run()方法
2. 调用`start()`会invokes`run()`方法, 来激活thread object
3. 当`start()`调用后, thread object就是`alive`状态, 使用`is_alive()`来查看.

### 构造方法
参数|描述
--|--
group|通常默认即可，作为日后扩展 ThreadGroup 类实现而保留。
target|callable object, 会被`run()`方法调用
name|thread的名称,默认使用`Thread-N`来代替
args|tuple类型, target对应的参数
kwargs|dict类型, target对应的参数
daemon|

- 守护线程：守护线程在程序关闭时会突然关闭，可能会导致资源不能被正确释放的的问题，如：已经打开的文档等。
- 非守护线程：通常我们创建的线程默认就是非守护线程，Python 程序退出时，如果还有非守护线程在运行，程序会等待所有非守护线程运行完毕才会退出。


### 对象方法
方法|描述
--|--
start()|启动线程, 调用`run()`方法
run()|subclass重写, 不直接调用
join(timeout=None)|当前线程等待, 直到该被调用用`join()`的thread object terminates.
name|线程的名称
native_id|系统分配的threadid
is_alive()|是否在运行
daemon|设置是否是守护线程, 必须在`start()`方法前使用, 默认是继承current thread的值


### 应用

#### 1. 线程共享全局变量
```python
from threading import Thread
import time
 
g_num = 100
 
def work1():
    global g_num
    g_num += 1
    print(f"work1, g_num:{g_num}")
 
 
def work2():
    global g_num
    print(f"work2, g_num:{g_num}")
 
 
t1 = Thread(target=work1)
t1.start() # work1, g_num:101
 
time.sleep(1) #保证t1线程中的事情做完
 
t2 = Thread(target=work2)
t2.start() # work2, g_num:101
```


#### 2.线程传参

```python
from threading import Thread
def func(name,age):
    print("子进程",name,age)
if __name__ == '__main__':
    t = Thread(target=func, args=('wang',),kwargs={"age":10})
    t.start()
```

#### 3.获得线程程执行结果
1. 手动`Thread`创建子线程无法获得执行的结果, 使用`ThreadPoolExecutor`可以
```python
from concurrent.futures import ThreadPoolExecutor

def func(p):
    return p*p

if __name__ == "__main__":
    r_lst = []
    tp = ThreadPoolExecutor(5)
    for i in range(10):
        ret = tp.submit(func, i)
        r_lst.append(ret)
    tp.shutdown()  # 阻塞，就有线程池完成任务才继续向下执行
    [print(ret.result()) for ret in r_lst]
```
2. 不通过return获得子进程返回结果，而是通过更改共享变量

#### 4.线程阻塞
调用线程实例`join()`方法, 让当前线程(主线程)等待被调用`join()`方法的线程的结束

```python
from threading import Thread
import time
def func(name):
    time.sleep(1)
    print('子线程结束')

if __name__ == '__main__':
    p = Thread(target=func, args=('wang',))
    p.start()
    # p.join() #子线程加上join后，主线程会阻塞直到该子线程结束
    print("主线程结束")
```

#### 5.父子线程关系-daemon
由于`daemon=true`, 父线程结束后，子线程立刻结束，所以没有打印子线程结束

```python
import time
from threading import Thread

def func(name):
    time.sleep(1)
    print('子线程结束')

if __name__ == '__main__':
    t = Thread(target=func, args=('xiaobai',))
    t.daemon = True
    t.start()
    print("主线程结束")
```

#### 6.创建多个线程
1. 手工循环创建
用列表保存每个子线程对象, 当然子线程也可以使用join来让主进程等待
```python
import time
from threading import Thread

def func(name):
    print("线程 %d执行" % name )
    time.sleep(0.1)

if __name__ == '__main__':
    t_lst = []
    for i in range(10):
        t = Thread(target=func, args=(i,))
        t.start()
        t_lst.append(p)
    print("父线程结束")
```


2. 使用线程池
首先，创建进程需要消耗时间，销毁进程（空间，变量，文件信息等等的内容）也需要消耗时间。
定义一个池子，在里面放上固定数量的进程，有需求来了，就拿一个池中的进程来处理任务，等到处理完毕，进程并不关闭，而是将进程再放回进程池中继续等待任务。
不会增加操作系统的调度难度，还节省了开闭进程的时间，也一定程度上能够实现并发效果。

```python
from concurrent.futures import ThreadPoolExecutor

def func(p):
    return p*p

if __name__ == "__main__":
    r_lst = []
    tp = ThreadPoolExecutor(5)
    for i in range(10):
        ret = tp.submit(func, i)
        r_lst.append(ret)
    tp.shutdown()  # 阻塞，就有线程池完成任务才继续向下执行
    [print(ret.result()) for ret in r_lst]
```

## Timer Objects
可以设置一定时间, 然后执行线程.

### 构造方法
`class threading.Timer(interval, function, args=None, kwargs=None)`

参数|描述
--|--
interval|间隔是时间

### 对象方法
继承了thread的方法, 只增加了`cancel()`方法

方法|描述
--|--
cancel()|在线程执行前, 取消

## with statement
Lock, RLock, Condition, Semaphore对象都有`acquire()` 和 `release()`, 所以可以使用with语句来管理.
```python
with some_lock:
    # do something...
```

等价于

```python
some_lock.acquire()
try:
    # do something...
finally:
    some_lock.release()

```