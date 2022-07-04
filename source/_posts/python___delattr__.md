---
title: python___delattr__
toc: true
date: 2021-01-20 22:03:54
---

当对象成员删除时触发
作用: 可以限制成员对象的删除, 还可以删除不存在成员时, 防止误报
注意: `__delattr__()`方法中, 不能直接删除对象, 会触发递归

```py
class Person(object):
    def __init__(self, name):
        self.name = name

    def __delattr__(self, key):
        print("del:{}".format(key))


person = Person("wang")
del person.name  # del:name
delattr(person,"name")  # del:name
```

