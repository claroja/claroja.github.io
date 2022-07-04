---
title: python_global
toc: true
date: 2021-10-29 8:14:54
tags:
---

当在函数内部使用变量时，会首先在函数内部查找局部变量，如果找不到再去全局查找
```python
number=1 #全局变量

def testGlobal():
     number=2 #局部变量
     return number

num=testGlobal()
print(f"局部number:{num}")  # 2
print(f"全局number:{number}") # 1

```

函数内部没有时, 直接使用全局
```python
number=1 #全局变量

def testGlobal():
    return number

num=testGlobal()
print(f"局部number:{num}")  # 1
print(f"全局number:{number}") # 1
```

如果在函数内部直接使用全局变量，则需要使用global关键字
```python
number=1 #全局变量

def testGlobal():
    global number#告诉编译器我这里的number指的是全局变量number
    number=2
    return number

num=testGlobal()
print(f"局部number:{num}")  # 2
print(f"全局number:{number}") # 2
```