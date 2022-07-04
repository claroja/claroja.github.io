---
title: python_contextlib
toc: true
date: 2021-01-20 22:03:54
---

```python
from contextlib import contextmanager
@contextmanager
def wfunc():
    print("类似__enter__")
    yield # 这里隔断__enter__和__exit__
    print("类似__exit__")

with wfunc():
    print("hello world")

>>> 类似__enter__
>>> hello world
>>> 类似__exit__
```


`closing`会自动调用实例的`close`方法

```python
from contextlib import closing
class Door(object):
    def open(self):
        print('Door is opened')
 
    def close(self):
        print('Door is closed')
 
with closing(Door()) as door:
    door.open()
```


源码:
```python

class closing(object):
    """Context to automatically close something at the end of a block.
    Code like this:
        with closing(<module>.open(<arguments>)) as f:
            <block>
    is equivalent to this:
        f = <module>.open(<arguments>)
        try:
            <block>
        finally:
            f.close()
    """
    def __init__(self, thing):
        self.thing = thing
    def __enter__(self):
        return self.thing
    def __exit__(self, *exc_info):

```



参考：
https://blog.csdn.net/emaste_r/article/details/78105713
https://docs.python.org/dev/library/contextlib.html