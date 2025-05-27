# forkspaw




实际上，Python 创建的子进程执行的内容，和启动该进程的方式有关。而根据不同的平台，启动进程的方式大致可分为以下 3 种：
- spawn：使用此方式启动的进程，只会执行和 target 参数或者 run() 方法相关的代码。Windows 平台只能使用此方法，事实上该平台默认使用的也是该启动方式。相比其他两种方式，此方式启动进程的效率最低。
- fork：使用此方式启动的进程，基本等同于主进程（即主进程拥有的资源，该子进程全都有）。因此，该子进程会从创建位置起，和主进程一样执行程序中的代码。注意，此启动方式仅适用于 UNIX 平台，os.fork() 创建的进程就是采用此方式启动的。
- forserver：使用此方式，程序将会启动一个服务器进程。即当程序每次请求启动新进程时，父进程都会连接到该服务器进程，请求由服务器进程来创建新进程。通过这种方式启动的进程不需要从父进程继承资源。注意，此启动方式只在 UNIX 平台上有效。



## fork() copies everything in memory
```python
import logging
from multiprocessing import Pool
from os import getpid

def runs_in_subprocess():
    logging.info(
        "I am the child, with PID {}".format(getpid()))

if __name__ == '__main__':
    logging.basicConfig(
        format='GADZOOKS %(message)s', level=logging.DEBUG)

    logging.info(
        "I am the parent, with PID {}".format(getpid()))

    with Pool() as pool:
        pool.apply(runs_in_subprocess)

## GADZOOKS I am the parent, with PID 3884
## GADZOOKS I am the child, with PID 3885
```
注意child processes继承了parent process的logging configuration. 也即是说, 任何在parent module中的配置, 都会被child process继承.

## fork() doesn’t copy everything
比如fork()并没有复制threads.任何在parent process的threads都不会在child process的存在.

```python
from threading import Thread, enumerate #enumerate()是线程的数量
from os import fork
from time import sleep

## Start a thread:
Thread(target=lambda: sleep(60)).start()

if fork():
    print("The parent process has {} threads".format(
        len(enumerate())))
else:
    print("The child process has {} threads".format(
        len(enumerate())))

## The parent process has 2 threads
## The child process has 1 threads
```

## fork()的问题
```python
from os import fork
from threading import Lock

## Lock is acquired in the parent process:
lock = Lock()
lock.acquire()

if fork() == 0:
    # In the child process, try to grab the lock:
    print("Acquiring lock...")
    lock.acquire()
    print("Lock acquired! (This code will never run)")

```



## spawn
```python
from multiprocessing import set_start_method
set_start_method("spawn")
```
this solves our problem, because module state isn’t inherited by child processes: it starts from scratch.

另外一个写法

```python
from multiprocessing import get_context
def your_func():
    with get_context("spawn").Pool() as pool:
        # ... everything else is unchanged
```




参考:
https://pythonspeed.com/articles/python-multiprocessing/
https://britishgeologicalsurvey.github.io/science/python-forking-vs-spawn/
http://c.biancheng.net/view/2633.html