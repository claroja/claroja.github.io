---
title: python_classStaticMethod
toc: true
date: 2021-01-20 22:03:54
---

# 类属性方法&实例属性方法
类型|描述
--|--
类变量(静态变量)|所有实例共有,每个实例可以不加`self`调用
类方法(静态方法)|所有实例共有,每个实例都可以调用
实例变量(非静态变量)|单个实例所有,需通过`self`调用
实例方法(非静态方法)|单个实例所有
下例中
`class_name`是类属性,所有的实例都具有该属性,而且任何一个实例修改都可以修改该属性,修改后,其他实例也会改变
`object_name`是实例属性,只有实例具有,智能通过`__init__`来创建

```python
class Foo(object):
    class_name = 'wang'
    def __init__(self,na):
        self.object_name = 'wei'

# 查看类的成员,只有class_name,没有object_name
print(Foo.__dict__)
print(dir(Foo))

# 查看对象成员,既有class_name,又有object_name
obj = Foo('zhao')
print(obj.__dict__)
print(dir(obj))
```

# `instancemethod`,`classmethod`和`staticmethod`

```python
class A(object):
    def foo(self, x):
        print "executing foo(%s, %s)" % (self, x)
    @classmethod
    def class_foo(cls, x):
        print "executing class_foo(%s, %s)" % (cls, x)
    @staticmethod
    def static_foo(x):
        print "executing static_foo(%s)" % x    
a = A()
```

`instancemethod`
在定义`foo(self,x)`方法时，将`self`作为第一个参数，而调用时就隐式地将`a`作为第一个参数传入，而我们只要传一个参数即可。
```python
a.foo(1)
# executing foo(<__main__.A object at 0xb7dbef0c>,1)
```
`classmethod`
类似instancemethod，只是第一个参数变成了`cls`
```python
a.class_foo(1)
# executing class_foo(<class '__main__.A'>,1)
```

`staticmethods`
`slef`(the object instance)和`cls`(the class)都不会传入方法，这个和再类外定义一个函数没有区别，只是有些时候某些方法在逻辑上属于某个类的时候，才用。
```python
a.static_foo(1)
# executing static_foo(1)

```
总结:
`foo`只是一个方法，当使用`a.foo`时，将instance作为第一个参数与`foo`进行绑定。
当使用`A.class_foo`时，将类A作为第一个参数与之相绑定。
档使用`A.static_foo`时，没有与instance和class绑定，定义和调用时都只是一个参数。


参考:
https://stackoverflow.com/questions/136097/difference-between-staticmethod-and-classmethod?r=SearchResults