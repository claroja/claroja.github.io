# getattr



当访问不存在的成员时, 触发.比`__getattribute__`的优先级低, 既如果定义了`__getattribute__`, 则不会触发`__getattr__`


下例中, 当访问不存在的`age`的时候, 会触发`__getattr__`方法
```python
class Person(object):
    def __init__(self, name):
        self.name = name

    def __getattr__(self, key):
        print("getting:{}".format(key))
        return False

person = Person("wang")
person.name  # 'wang'
person.age  # getting:age
getattr(person,"name")  # 'wang'
getattr(person,"age") # getting:age
```