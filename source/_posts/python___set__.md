---
title: python___set__
toc: true
date: 2021-01-20 22:03:54
---
当一个类中包含了魔术方法`__get__()`,`__set__()`,`__delete__()`任何一个时, 这个类就称为描述符类.
作用:
1. 对一个类中的某个成员进行一个详细的管理操作(获取,赋值,删除)
2. 类似于代理的思想


下例中, `PersionName`对应了`Person`实例的一个属性, 当我们访问`Person`的属性`name`时, 是调用了`PersonName`中的三个描述符方法.

```python
class PersonName():
    __name = "abc"

    def __get__(self, instance, owner):
        print(self,instance,owner)  # <__main__.PersonName object>, <__main__.Person object, <class '__main__.Person'>, 第一个是PersonName类, 第二个Person实例, 第三个是Person类
        return self.__name

    def __set__(self, instance, value):
        print(self,instance,value)

    def __delete__(self, instance):
        print(self,instance)

class Person():
    name = PersonName()


person = Person()
print(person.name)
```