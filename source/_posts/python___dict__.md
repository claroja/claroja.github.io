---
title: python___dict__
toc: true
date: 2021-01-20 22:03:54
---


`__dict__`用来查看类或对象的成员
1. `类`的`__dict__`保存了普通方法,类方法,静态方法,全局变量,内置方法和属性
2. `对象`的`__dict__`保存了`__init__()`方法里的属性,既`self.xx`
```python
class A(object):
    a = 0
    b = 3

    def __init__(self):
        self.a = 2
        self.c = 1

    def test(self):
        print('normal func.')

    @staticmethod
    def static_test(self):
        print('static func.')

    @classmethod
    def class_test(self):
        print('calss func.')

obj = A()

print (A.__dict__) # {'__module__': '__main__', '__doc__': '\n    Class A.\n    ', 'a': 0, 'b': 3, '__init__': <function A.__init__ at 0x0000022BAC955730>, 'test': <function A.test at 0x0000022BAC9557B8>, 'static_test': <staticmethod object at 0x0000022BAC953C88>, 'class_test': <classmethod object at 0x0000022BAC953CF8>, '__dict__': <attribute '__dict__' of 'A' objects>, '__weakref__': <attribute '__weakref__' of 'A' objects>}

print (obj.__dict__) # {'a': 2, 'c': 1}
```

# 继承中的`__dict__`
1)每个类的类变量都放在自己的`__dict__`,即使被重写
2)每个类实例化的对象的`__dict__`是相同的


# `__slots__`
当使用了`__slots__`对属性进行限定后, 将不会有`__dict__`属性
```py
class Foo(object):
    __slots__ = ('bar',)
    bar = 'spam'

Foo().__dict__
#Traceback (most recent call last):
#  File "<stdin>", line 1, in <module>
#AttributeError: 'Foo' object has no attribute '__dict__'
dir(Foo())
#['__class__', '__delattr__', '__doc__', '__format__', '__getattribute__', '__hash__', '__init__', '__module__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__slots__', '__str__', '__subclasshook__', 'bar']
```

# `__dir__()`
python的实例和类都有`__dir__()`
```py
class Foo(object):
    bar = 'spam'

Foo().__dict__ # {}
Foo.__dict__.items() # [('__dict__', <attribute '__dict__' of 'Foo' objects>), ('__weakref__', <attribute '__weakref__' of 'Foo' objects>), ('__module__', '__main__'), ('bar', 'spam'), ('__doc__', None)]
```
`__dir__`包含了类的`__dict__`的属性和实例的`__dict__`, 以及所有祖先类的属性
总结:
- `__dir__`会搜集实例的`__dict__`(可能不存在), 还会搜集它的类, 它的祖先类, 然后返回所有可用的属性和方法
- `__dict__`只会返回实例的本地的属性和方法(当然类也本质也是一种实例)




参考:
https://www.cnblogs.com/alvin2010/p/9102344.html
https://stackoverflow.com/questions/14361256/whats-the-biggest-difference-between-dir-and-dict-in-python