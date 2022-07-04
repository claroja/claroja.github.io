---
title: python_super
toc: true
date: 2021-01-20 22:03:54
---

语法：`super(type[, object-or-type])`
参数|描述
--|--
type|类名
object-or-type|self(实例对象)或cls(类对象)

主要使用场景有两种：
1.对象
2.类
在`python3`中可以简写成`super()`，而不必输入参数。

# 对象中的使用
`super(类名,self)`或`super()`返回父类实例

```python
class A(object):
    def func(self):
        print("funA")

class B(A):
    def func(self):
        print("funB")

test = B() 
test.func()# funB 
```

```python
class A(object):
    def func(self):
        print("funA")

class B(A):
    def func(self):
        # print("funB")
        super(B,self).func()  # super() 返回父类A,然后调用A的func方法.(B,self)在python3中是默认值,不需要填写.B是指本类名,不能用cls代替,self是本类实例化的对象
        # super(B,self).func() # 与super(B,self).func()等价
test = B()
test.func()  # funA
```



## 2.2.类中使用
super(类名,cls)
注意这里第二个参数，不是`self`而是`cls`，这里是调用的类实例。


## 总结

无论在对象中使用`super(类名,self)`还是在类中使用`super(类名,cls)`，在python3中，都可以简写为`super()`


super的原理:是遍历`__mro__`列表
`mro`列表遵循:
1)子类永远在父类之前
2)多个父类,根据在列表中的位置检查,选择第一个父类

```python
 def super(cls, inst):
    mro = inst.__class__.mro()
    return mro[mro.index(cls) + 1]
```


如下菱形继承:
```python
class Base(object):
    def __init__(self):
        print("enter Base")
        print("leave Base")

class A(Base):
    def __init__(self):
        print("enter A")
        super(A, self).__init__()
        print("leave A")

class B(Base):
    def __init__(self):
        print("enter B")
        super(B, self).__init__()
        print("leave B")

class C(A, B):
    def __init__(self):
        print("enter C")
        super(C, self).__init__()
        print("leave C")

c = C()

#enter C
#enter A
#enter B  # 如果是父类的话,这里由A就应该跳到Base,而并没有
#enter Base
#leave Base
#leave B
#leave A
#leave C
```