---
title: python___dir__
toc: true
date: 2021-01-20 22:03:54
---

python的实例和类都有`__dir__()`
```py
class Foo(object):
    bar = 'spam'

Foo().__dict__ # {}
Foo().__dir__() # ['__module__', 'bar', '__dict__', '__weakref__', '__doc__', '__repr__', '__hash__', '__str__', '__getattribute__', '__setattr__', '__delattr__', '__lt__', '__le__', '__eq__', '__ne__', '__gt__', '__ge__', '__init__', '__new__', '__reduce_ex__', '__reduce__', '__subclasshook__', '__init_subclass__', '__format__', '__sizeof__', '__dir__', '__class__']
Foo.__dict__.items() # [('__dict__', <attribute '__dict__' of 'Foo' objects>), ('__weakref__', <attribute '__weakref__' of 'Foo' objects>), ('__module__', '__main__'), ('bar', 'spam'), ('__doc__', None)]
```
`__dir__`包含了类的`__dict__`的属性和实例的`__dict__`, 以及所有祖先类的属性
总结:
- `__dir__`会搜集实例的`__dict__`(可能不存在), 还会搜集它的类, 它的祖先类, 然后返回所有可用的属性和方法
- `__dict__`只会返回实例的本地的属性和方法(当然类也本质也是一种实例)
