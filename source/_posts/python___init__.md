---
title: python___init__
toc: true
date: 2021-01-20 22:03:54
---
`__init__(self,*args)`方法用来初始化实例属性.
`self`表示实例本身
`*args`是具体要初始化的参数.

在`__init__()`方法中的属性, 都是实例属性, 而在外面的属性是类属性. 类属性可以通过`__class__`来访问

```py
class Person:
    name = "li"

    def __init__(self, name):
        self.name = name


wang = Person(name="wang")
print(wang.name)  # wang, 实例属性覆盖了类属性
print(wang.__class__)  # <class '__main__.Person'>, 获得类
print(wang.__class__.name)  # li, 获得类属性
print(Person.name)  # li, 获得类属性

```