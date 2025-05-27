# iterable&iterator



```py
from collections.abc import Iterable,Iterator
class B(object):
    def __next__(self):
        pass

class A(object):
    def __iter__(self):
        return B()
a = A()
b = B()

print(isinstance(a, Iterable)) # True 实现了__iter__方法
print(isinstance(a, Iterator)) # False 实现了__iter__ 未实现__next__

print(isinstance(b, Iterable)) # False 未实现__iter__方法
print(isinstance(b, Iterator)) # False 未实现__iter__方法_next__方法
```
