# semaphore



Semaphore信号量相比Lock锁，可以控制进入进程的数量
Lock一次只允许一个进程进入
Semaphore(n)则可以允许n个进程进入

```python
from multiprocessing import Process,Lock,Semaphore
import os,time
def work(n,lock):
    lock.acquire()
    print('%s: %s is running' %(n,os.getpid()))
    time.sleep(1)
    print('%s:%s is done' %(n,os.getpid()))
    lock.release()
if __name__ == '__main__':
    lock=Semaphore(4)
    for i in range(5):
        p=Process(target=work,args=(i,lock))
        p.start()

```