---
title: python___call__
toc: true
date: 2021-01-20 22:03:54
---


`__call__()`当对象当做函数被调用时触发, 一般用来归纳对象的操作步骤, 方便调用.

```python
class Person:
    def __call__(self):
        print("hello")


wang = Person()  # 创建实例
wang()  # 调用实例的__call__()方法g
```