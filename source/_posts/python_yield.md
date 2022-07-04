---
title: python_yield
toc: true
date: 2021-01-20 22:03:54
---

python提供yield表达式，简化迭代器的创建。
```python
from collections.abc import *
def MyRange(end):
    start = 0
    while start < end:
        yield start
        start += 1



a = MyRange(4)
print(isinstance(a, Iterator)) # True
print(isinstance(a, Iterable)) # True
for i in a:
    print(i)
```
1.当我们调用这个生成器函数的时候，它返回的是一个迭代器叫做生成器。生成器是一种特殊的迭代器。
2.yield经常配合while使用
3.上述代码等同于等同于 在python __iter__&__next__中已经实现了迭代器和迭代对象，如下
```python
class MyRange(object):
    def __init__(self, end):
        self.start = 0
        self.end = end

    def __iter__(self):
        return self

    def __next__(self):
        if self.start < self.end:
            ret = self.start
            self.start += 1
            return ret
        else:
            raise StopIteration

a = MyRange(4)

for i in a:
    print(i)
```


参考：
https://www.jianshu.com/p/5ee724a8c366