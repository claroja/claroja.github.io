# iter



`iter(object)`会调用object的`__iter__`方法，所以需要在`__iter__`方法中返回一个可迭代的对象。
可迭代对象应该实现`__next__`方法，供`next`方法来调用，以实现迭代效果。

下例中`iter(A())`调用了A中的`__iter__`方法，返回了B的对象实例。
`next(obj)`调用B对象实例中的`__next__`方法来进行迭代

```python
class A(object):
    def __iter__(self):
        return B()

class B(object):
    def __init__(self):
        self.data = 1
    def __next__(self):
        self.data += 1
        return self.data

obj = iter(A())

next(obj)
```


应用1：实现range
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
https://blog.csdn.net/xmlbm/article/details/99985678