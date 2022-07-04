---
title: python___slots__
toc: true
date: 2021-01-20 22:03:54
---
限制类的属性,只能在`__slots__`中选择

slots可以限制class实例添加的属性，如果实例中添加了非slots中不含有的属性，会报错，这样就可以限制动态语言，修改代码的行为
<font color=red>动态语言：可以在运行的过程中，修改代码;静态语言：编译时已经确定好代码，运行过程中不能修改

```python
class Animal(object):
    __slots__ = ("name")
a=Animal()
a.name="cat"
a.age=20
AttributeError: Animal instance has no attribute 'name'
```