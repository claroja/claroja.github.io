# threadlocal




多线程环境下，每一个线程均可以使用所属进程的全局变量。如果一个线程对全局变量进行了修改，将会影响到其他所有的线程对全局变量的计算作，从而出现数据混乱，即为脏数据。为了避免逗哥线程同时对变量进行修改，引入了线程同步机制，通过互斥锁、条件变量或者读写锁来控制对全局变量的访问。

```python
import threading
global_num = 0

def thread_cal():
    global global_num
    for i in range(100000):
        global_num += 1

threads = []
for i in range(10):
    threads.append(threading.Thread(target=thread_cal))
    threads[i].start()
for i in range(10): # 必须在全部start之后再join,不然每启动一个线程,主线程都会被阻塞,既10个线程依次进行
    threads[i].join()
print(global_num) # 值不确定
```




　　只用全局变量并不能满足多线程环境的需求，很多时候线程还需要拥有自己的私有数据，这些数据对于其他线程来说是不可见的。因此线程中也可以使用局部变量，局部变量只有线程自身可以访问，同一个进程下的其他线程不可访问。
```python
import threading

def thread_cal():
    local_num = 0
    for _ in range(1000):
        local_num += 1
    print(threading.current_thread().getName(), local_num)

threads = []
for i in range(10):
    threads.append(threading.Thread(target=thread_cal))
    threads[i].start()
```

　　有时候使用局部变量不太方便，因此 Python 还提供了ThreadLocal 变量，它本身是一个全局变量，但是每个线程却可以利用它来保存属于自己的私有数据，这些私有数据对其他线程也是不可见的。
　　ThreadLocal 真正做到了线程之间的数据隔离。



实际生产环境中，我们可能会调用很多函数，每个函数都需要很多局部变量，每个方法都设置局部变量会很不方便。
为了解决这个问题，一个直观的的方法就是建立一个全局字典，保存进程 ID 到该进程局部变量的映射关系，运行中的线程可以根据自己的 ID 来获取本身拥有的数据。这样，就可以避免在函数调用中传递参数，如下示例：
```python
import threading
global_data = {}
def thread_cal():
    global global_data
    cur_thread = threading.current_thread()
    global_data[cur_thread] = 0
    for _ in range(1000):
        global_data[cur_thread] += 1
    print(cur_thread.getName(), global_data[cur_thread])

threads = []
for i in range(10):
    threads.append(threading.Thread(target=thread_cal))
    threads[i].start()
```
1.这种做法并不完美。首先，每个函数在需要线程局部数据时，都需要先取得自己的线程ID，略显繁琐。
2.更糟糕的是，这里并没有真正做到线程之间数据的隔离，因为每个线程都可以读取到全局的字典，每个线程都可以对字典内容进行更改。
为了更好解决这个问题，python 线程库实现了 ThreadLocal 变量（很多语言都有类似的实现，比如Java）。
    它本身是一个全局变量，但是每个线程却可以利用它来保存属于自己的私有数据，这些私有数据对其他线程也是不可见的。
　　ThreadLocal 真正做到了线程之间的数据隔离。


```python
import threading
global_data = threading.local()

def thread_cal():
    global_data.num = 0 # 每个线程调取各自的num
    for _ in range(1000):
        global_data.num += 1
    print(threading.current_thread().getName(), global_data.num)

threads = []
for i in range(10):
    threads.append(threading.Thread(target=thread_cal))
    threads[i].start()

print("Main thread: ", global_data.__dict__)
```
全局变量`global_data`就是一个`ThreadLocal`对象，每个线程对它都可以读写`num`属性，但互不影响。可以把`global_data`看成全局变量，但每个属性如`global_data.num`都是线程的局部变量，可以任意读写而互不干扰，也不用管理锁的问题，ThreadLocal内部会处理。


## 应用
ThreadLocal最常用的地方就是为每个线程绑定一个数据库连接，HTTP请求，用户身份信息等，这样一个线程的所有调用到的处理函数都可以非常方便地访问这些资源。