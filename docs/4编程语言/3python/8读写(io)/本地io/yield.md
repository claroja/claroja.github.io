# yield




```python
def func():
    print('a')
    yield # 暂停代码 保存现场
    print('b')

gen_func = func()
gen_func.__next__() # 或者调用next(gen_func)
```




我们可以在异步调用读写io方法后使用yield来切换不同的函数，实现协程

```python

import time

def task_1():
    while True:
        print("--This is task 1!--before")
        yield
        print("--This is task 1!--after")
        time.sleep(0.5)

def task_2():
    while True:
        print("--This is task 2!--before")
        yield
        print("--This is task 2!--after")
        time.sleep(0.5)
        
if __name__ == "__main__":
    t1 = task_1()  # 生成器对象
    t2 = task_2()
    # print(t1, t2)
    while True:
        next(t1)  # 1、唤醒生成器t1，执行到yield后，保存上下文，挂起任务；下次再次唤醒之后，从yield继续往下执行
        print("\nThe main thread!\n")  # 2、继续往下执行
        next(t2)  # 3、唤醒生成器t2，....

```

