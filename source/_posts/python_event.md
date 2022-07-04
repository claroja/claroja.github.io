---
title: python_event
toc: true
date: 2021-10-29 8:14:54
tags:
---

# Event Objects
最简单的线程通信方式, 一个线程发出Event, 另一等待Event. 
Event instance维护了一个flag, 默认为`false`, 通过`set()`方法设置为`true`, 而通过`clear()`方法重置为`false`. `wait()`方法阻塞, 直到flag变为`true`

## 构造方法
`class threading.Event`是一个factory function,

## 对象方法
方法|描述
--|--
is_set()|当flag为`true`时, 返回`true`
set()|将flag设置为`true`
clear()|将flag设置为`false`
wait(timeout=None)|线程阻塞

## 例子
```python
import time
import threading
event = threading.Event()

def dis_class():
    time.sleep(5)
    event.wait()
    print('同学们下课了')

def bell():
    time.sleep(3)
    print('下课铃声响了')
    event.set()

if __name__ == '__main__':
    t1 = threading.Thread(target=bell)
    t2 = threading.Thread(target=dis_class)
    t1.start()
    t2.start()
    t1.join()
    t2.join()
```