# inherit


继承就是子类可以引用父类的成员属性和方法
```py
class Animal(object):
    def __init__(self,name):
        self.name=name
    def speak(self):
        print("animal")

class Cat(Animal):
    pass

tom=Cat("tom")
tom.name  # 'tom'
tom.speak()  # animal
```

1. 私有方法和属性，不能被子类继承和访问
2. 子类和各个父类中如果有相同方法，优先调用自己，然后向上寻找最近父类(如果父类有平行类，则按继承顺序从左至右继承，可以用`__mro__`来查看继承顺序）, “覆盖”一词用的并不好，并没有“覆盖”掉，只是调用的顺序不同。
3. 调用被重写父类的方法有两种`super().func()` 或 `name.func(self)`
4. 调用父类同名方法的一个应用就是私有方法和属性不会被继承,但可以通过父类中调用私有方法的方法来调用父类的私有方法

## 父类的__init__
1. 子类的`__init__`会覆盖父类的`__init__`导致父类无法初始化
```python
class A:
    def __init__(self):
        A = 'A'
        self.a = 'a'
        print('init A')
        
class B(A):
    def __init__(self):
        self.b = 'b'
        print('init B')

b = B()
print(b.A) # 由于B中的`__ini__()`方法覆盖了父类A中的,所以A没有被初始化
print(b.a)
```

2. 使用父类的`__init__`来初始化父类
```python
class B(A):
    def __init__(self):
        A.__init__(self) # 在子类中的`__init__`来手动初始化父类,但是写父类的名称还不够智能,可以使用super()来代替
        self.b = 'b'
        print('init B')
b = B()
print(b.A)
print(b.a)
```


3.最终版,使用`super()`
```python
class B(A):
    def __init__(self):
        A.__init__(self) # 可以使用super()来代替,而不需要关系父类的名称是什么
        self.b = 'b'
        print('init B')

b = B()
print(b.A)
print(b.a)
```






## Mixin
java语言中通过 `interface`接口类, 来实现多重继承
python中本身就支持, 可以使用`mixin`来标明

下例中, 交通工具类`vehicle`只有陆地跑的功能, `car`和`airplane`继承后, 可以获得`dirve`的功能. 但是`airplane`还需要飞的功能, 那么就可以再继承一个会飞的父类`FlyTool`即可.
```python
class vehicle():  # 交通工具
    def drive():
        print("陆地上跑")

class FlyTool():
    def fly():
        print("天上飞")

class car(vehicle):
    pass

class airplane(vehicle, FlyTool):
    pass

```