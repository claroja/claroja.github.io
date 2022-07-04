---
title: python_process_pool
toc: true
date: 2021-11-02 8:14:54
tags:
---

常规创建多个子进程的方式是通过循环, 但这种方式有个缺点是: 每次都要申请进程的资源, 比如内存空间
```python
import multiprocessing
import time
from multiprocessing import Process

def func():
   print("线程 %d执行" % multiprocessing.current_process().pid )
   time.sleep(1)

if __name__ == '__main__':
   t_lst = []
   for i in range(10):
       t = Process(target=func)
       t.start()
       t_lst.append(t)
   print("父线程结束")
```
通过线程池`multiprocessing.Pool`, 可以预先创建几个进程, 复用, 省去了反复创建的时间.



## apply与apply_async
apply:同步, 立刻阻塞主进程, 每次从线程池取一个进程
apply_async: 异步, 不阻塞主进程, 每次从线程池取所有进程

```python
from multiprocessing import Pool
import multiprocessing
import time
def test(p):
      print(multiprocessing.current_process().pid ,p)
      time.sleep(3)
if __name__=="__main__":
   pool = Pool(processes=2)
   for i in range(10):
       pool.apply(test, args=(i,)) # 同步, 每次从池子里取出一个进程, 执行结束后, 再取另一个进程, 不需要阻塞主进程.
   #    pool.apply_async(test, args=(i,)) # 异步, 每次从池子里把可用进程全部取出
   # pool.close() # apply_async时, join前必须先close(停止向池子中继续添加任务)
   # pool.join() # apply_async时, 如果没有join则子进程会立刻结束
```



## map 与 map_async
map: 同步, 立刻阻塞主进程, 每次从线程池取所有进程(区别于apply, 每次只取一个进程)
map_async: 异步, 不阻塞主进程, 每次从线程池取所有进程

```python
from multiprocessing import Pool
import time
import multiprocessing
def test(i):
   print(multiprocessing.current_process().pid,i)
   time.sleep(3)
if __name__ == "__main__":
   lists = [1, 2, 3, 4, 5, 6]
   pool = Pool(processes=2)
   # pool.map(test, lists)
   pool.map_async(target=test, lists)
   pool.close()
   pool.join()
```


## 接受子进程的返回结果
### `apply_async`
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
### map
```python
from multiprocessing import Pool
import time
import multiprocessing
def test(i):
   print(multiprocessing.current_process().pid,i)
   time.sleep(1)
   return i*i
if __name__ == "__main__":
   lists = [1, 2, 3, 4, 5, 6]
   pool = Pool(processes=2)
   res = pool.map(test, lists) # 列表对应位置
   print(res)

```

## 回调函数
进程池中一个进程处理完任务之后，这进程可以调用一个函数去处理该进程返回的结果，这个函数就是回调函数。
```python
from multiprocessing import Pool
def func(info):
   print("回调加工subp方法的返回结果:"+str(info/10))

def subp(i):
   return i * i

if __name__ == '__main__':
   pool = Pool()
   for i in range(7):
       res = pool.apply_async(subp, args=(i, ), callback=func) # subp的返回值作为func的参数传递
   pool.close()
   pool.join()
```
