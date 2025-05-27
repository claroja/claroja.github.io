# process


进程是资源分配的最⼩单位
进程间不能共享全局变量, 每个进程都会复制一份主进程的变量到自己的空间



### 构造方法

`class multiprocessing.Process(group=None, target=None, name=None, args=(), kwargs={}, *, daemon=None)`
`multiprocessing.Process` 和 `threading.Thread` 有相同的设计.

参数|描述
--|--
run()|不直接操作, 只重写
start()|启动进程
join([timeout])|阻塞主进程(调用进程), 等待被调用了`join()`的`process`执行玩完毕
name|进程名称
is_alive()|是否存活
daemon|在`start()`方法之前设置
pid|进程的id, 在开始前为`None`
exitcode|进程退出时的code
authkey|
sentinel|
terminate()|使用`SIGTERM`结束进程, 其子进程不会结束, 而会成为orphaned
kill()|使用`SIGKILL`结束进程
close()|关闭进程,并释放所有资源

### 应用

#### 1.获得进程信息
通过`multiprocessing.current_process()`来获得当前进程的信息, 比如id和name等
```python
import time
import multiprocessing
def work1():
    for i in range(10):
        print("running work1", multiprocessing.current_process().pid)
        time.sleep(0.5)
        
if __name__ == '__main__':
    process_obj = multiprocessing.Process(target=work1)
    process_obj.start()
    print("main end",multiprocessing.current_process().pid)
```

#### 2.传参
`Process([group	[,target[,name[,args[,kwargs]]]]])`

参数|描述
--|--
target|如果传递了函数的引⽤，这个⼦进程就执⾏这⾥(函数)的代码
args|给target指定的函数传递的参数，以元组的⽅式传递
kwargs|给target指定的函数传递命名参数

```python
import os
from multiprocessing import Process

def func(name,age):
    print("子进程",name,age)
if __name__ == '__main__':
    p = Process(target=func, args=('wang',),kwargs={"age":10})
    p.start()
```

#### 2.获得子进程执行结果
1. 手动process创建子进程无法获得执行的结果
2. 使用pool可以
```python
from multiprocessing import Pool
import time
def test(p):
    time.sleep(1)
    return p*p
if __name__=="__main__":
    res_lst = []
    pool = Pool(processes=2)
    for i in range(10):
        res = pool.apply_async(test, args=(i,))
        res_lst.append(res)
    pool.close()
    pool.join()
    [print(result.get()) for result in res_lst]

```
#### 3.父子进程关系
##### 默认: 主进程结束, 等待子进程
默认`Process.daemon=false`: 主进程结束后, 等待子进程结束. 子进程全部结束后, 主进程结束.

```python
import time
import multiprocessing
def work1():
    for i in range(10):
        print("running work1")
        time.sleep(0.5)
if __name__ == '__main__':
    process_obj = multiprocessing.Process(target=work1,args)
    process_obj.start()
    print("main end")
```

##### 主进程结束, 不等待子进程
设置`Process.daemon=true`: 主进程结束后, 直接杀死子进程.
```python
import time
from multiprocessing import Process

def work1():
    for i in range(10):
        print("running work1")
        time.sleep(0.5)
        print("work1 end")
if __name__ == '__main__':
    p = Process(target=work1)
    p.daemon = True
    p.start()
    time.sleep(1)
    print("main end") # 主进程结束后,子进程立刻结束
```

##### 主进程任意地方等待子进程
`Process.deamon=false`, 子进程只有在主进程执行到最后一行时, 才能阻塞主进程.
`Process.join()`, 可以让子进程在主进程的任何位置阻塞主进程

```python
import time
from multiprocessing import Process

def func(name):
    for i in range(10):
        print("running work1")
        time.sleep(0.5)
        print("work1 end")

if __name__ == '__main__':
    p = Process(target=func, args=('xiaobai',))
    p.start()
    print("父进程执行")
    time.sleep(0.5)
    print("父进程阻塞, 等待子进程")
    p.join()
    print("父进程结束")
    # p.join() # 默认deamon=false, 相当于在最后加了join
```

#### 4.创建多个线程
1. 手工循环创建
用列表保存每个子线程对象
当然子线程也可以使用join来让主进程等待
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
创建进程需要消耗时间，销毁进程（空间，变量，文件信息等等的内容）也需要消耗时间。
定义一个池子，在里面放上固定数量的进程，有需求来了，就拿一个池中的进程来处理任务，等到处理完毕，进程并不关闭，而是将进程再放回进程池中继续等待任务。
不会增加操作系统的调度难度，还节省了开闭进程的时间，也一定程度上能够实现并发效果。


#### 5.其他
通过`os.getpid()`获得当前进程id
通过`os.getppid()`获得父进程id

```python
import os
from multiprocessing import Process

def func(name):
    print('hello', name)
    print("我是子进程: %d；我的父进程是：%d" % (os.getpid(), os.getppid()))
if __name__ == '__main__':
    p = Process(target=func, args=('xiaobai',))
    p.start()
    print("我是父进程：%d" % os.getpid())
```