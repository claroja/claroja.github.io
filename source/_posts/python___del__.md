---
title: python___del__
toc: true
date: 2021-01-20 22:03:54
---


```py
class Person:
    def __del__(self):
        print("del")

wang = Person()  # 创建实例
del wang
```