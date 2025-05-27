# setattr



当给对象成员进行赋值时(包括添加和修改), 比如`__init__()`中赋值, `object.attr`赋值, 或直接调用`setattr()`方法
作用: 可以限制和管理成员的添加和修改操作
参数: 1. self 2. 设置的成员名 3.设置的成员值
返回值: 无
注意: 使用用父类`object`来调用`__setattr__()`,来避免死循环


```py
class Person(object):
    def __init__(self, name):
        self.name = name

    def __setattr__(self, key, value):
        print("setting:{},  with:{}".format(key, value))
        return object.__setattr__(self, key, value)  # 因为子类重写父类方法，所以要返回父类该方法完成在__dict__的注册，父类的__setattr__本质上是完成了·self.__dict__[key] = value·

person = Person("wang")  # setting:name,  with:wang, 直接使用`__init__()`来赋值也会触发
person.__dict__  # {'name': 'wang'}

person.age=13  # setting:age,  with:13, 直接赋值也会触发
person.__dict__  # {'name': 'wang', 'age': 13}

setattr(person,"gender","man")  # setting:gender,  with:man, 使用setarrt方法也会触发
person.__dict__  # {'name': 'wang', 'age': 13, 'gender': 'man'}
```





应用:
1. 将字典转为类属性
```py
class Foo(object):
    def __init__(self):
        self.values = {
            'x':'wang',
            'y':'wei',
        }
        for k,v in self.values.items():
            setattr(self,k,v)
obj = Foo()
print(obj.x)
```