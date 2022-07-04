---
title: python_generator
toc: true
date: 2021-01-20 22:03:54
---

1.使用列表占用内存大
```python
def fab(max):
    L = []
    n, a, b = 0, 0, 1
    while n < max:
        L.append(b)
        a, b = b, a + b
        n += 1
    return L
```

2.使用迭代器减少内存占用
```python
class Fab:
    def __init__(self, max):
        self.max = max
        self.n, self.a, self.b = 0, 0, 1

    def __iter__(self):
        return self

    def __next__(self):
        if self.n > self.max:
            raise StopIteration
        else:
            r = self.b
            self.a, self.b = self.b, self.a + self.b
            self.n += 1
            return r

for i in Fab(3):
    print(i)
```

3.使用yield生成器简化迭代器定义
```python
def fab(max):
    n, a, b = 0, 0, 1
    while n < max:
        yield b
        a, b = b, a + b
        n += 1
```

yield 会把一个函数变为一个 generator；即带有 yield 的函数不再是一个普通的函数，Python 解释起会将其视为 generator，调用 fab(5) 不会执行 fab()，而是返回一个 iterable object。




参考：
https://www.jianshu.com/p/1e909ef808b9