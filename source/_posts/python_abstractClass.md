---
title: python_abstractClass
toc: true
date: 2021-01-20 22:03:54
---


通过`abc`模块来创建,类似于`java`中的`abstract class`

```python
import abc
class Animal(metaclass=abc.ABCMeta):
    @abc.abstractmethod
    def say(self):
        pass
    def eat(self):
        print("eat food")

# a = Animal() # 抽象类不能被实例化

class Dog(Animal):
    def say(self):
        print("dog")

dog = Dog()
dog.say()
dog.eat()

```