# barrier



## Barrier Objects
建立一个Barrier来阻止parties(一定数量)的threads.调用`wait()`方法来阻塞, 直到阻塞的thread的数量达到了barrier设置的值.


### 构造方法
`class threading.Barrier(parties, action=None, timeout=None)`
参数|描述
--|--
parties|阻塞线程的数量
action|如果提供, 将被阻塞的其中一个线程调用
timeout|超时时间

对象方法
方法|描述
--|--
wait(timeout=None)|每个线程调用, 就会增加Barrier计数, 直到满足其设置的值
reset()|重置Barrier计数
abort()|将Barrier的状态设置为broken
parties|越过Barrier的最大thread数量
n_waiting|当前Barrier前等待的thread数量
broken|如果Barrier的状态是Broken则返回`true`

### 样例

```python
import threading
import time

b = threading.Barrier(2, timeout=5)


def task1():
    time.sleep(3)
    print('start task1')
    b.wait()
    print('end task1')


def task2():
    time.sleep(1)
    print('start task2')
    b.wait()
    print('end task2')


threading.Thread(target=task1).start()
threading.Thread(target=task2).start()
print('over')
```
