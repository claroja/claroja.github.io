# reflection



## get instance object

in definition, we can get instance object by `self`

```python
class test(object):
    def __init__(self):
        print(self)
```

## get class object
commonly, we can get instance's class object by `__class__`
in `@classmethod`, we cat get it by `cls`. and `cls` equals `__class__`
```python
class test(object):
    def __init__(self):
        print(self.__class__)

    @classmethod
    def func(cls):
        print(cls)
        print(__class__)
a = test()
a.__class__
a.func()
```










通过字符串操作对象的属性或方法(注意模块也是对象,所以也可以通过字符串操作模块)


```python
class Teacher(object):
    def __init__(self,name):
        self.name = name


teacher = Teacher('wang')

## hasattr(object,'attrName') 判断instance中是否包含某个属性
hasattr(teacher,'name')

## getattr(object,'attrName',default=None) 获得实例中的属性
getattr(teacher,'name',None)

## setattr(object,'attrName',value) 给实例设置属性
setattr(teacher,'age',18)

## delattr(object,'attrName') 删除实例的属性
delattr(teacher,'age')

```





应用:

1. `flask`中通过传入`url`来调取具体的方法,就是用的反射

2. add or delete the method, according to the init parameters.


```python
class test(object):

    def __init__(self,a):
        if a == True:
            # delattr(self.class, "a")
            del self.a

    def a(self):
        print("a")

x = test(a=False)
hasattr(x,"a")
delattr(x.__class__,"a")

```
