# lock


1. 未上锁，异步执行
```python
import os
import time
import random
from multiprocessing import Process

def work(n):
    print('%s: %s is running' %(n,os.getpid()))
    time.sleep(random.random())
    print('%s:%s is done' %(n,os.getpid()))

if __name__ == '__main__':
    for i in range(5):
        p=Process(target=work,args=(i,))
        p.start()

```

2. 上锁后同步执行
```python
from multiprocessing import Process,Lock
import os,time
def work(n,lock):
    lock.acquire()
    print('%s: %s is running' %(n,os.getpid()))
    time.sleep(1)
    print('%s:%s is done' %(n,os.getpid()))
    lock.release()
if __name__ == '__main__':
    lock=Lock()
    for i in range(5):
        p=Process(target=work,args=(i,lock))
        p.start()
```