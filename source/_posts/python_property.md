---
title: python_property
toc: true
date: 2021-01-20 22:03:54
---
```python
class C(object):
    def __init__(self):
        self._x = None

    def getx(self):
        return self._x

    def setx(self, value):
        self._x = value

    def delx(self):
        del self._x

    x = property(getx, setx, delx, "I'm the 'x' property.")
```

如果`c`是`C`的实例, 则
1. `c.x`会引用`getx`方法
2. `c.x=value`会引用`setx`方法
3. `del c.x`会引用`delx`方法

`property`方法有对应的装饰器, 上面的写法等价于:
```python
class C(object):
    def __init__(self):
        self._x = None
    @property
    def x(self):
        return self._x

    @x.setter
    def x(self, value):
        self._x = value

    @x.deleter
    def x(self):
        del self._x
```