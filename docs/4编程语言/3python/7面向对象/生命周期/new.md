# new

当我们调用`__init__()`方法来来初始化对象时:
```python
class Person(object):
    def __init__(self, age):
        self.age = age
a = Person(100)
a.age # 100
```
其实已经隐含了调用`__new__()`方法, 完整的写法是这样
```python
class Person(object):
    def __new__(cls, *args, **kwargs):
        return super().__new__(cls)
    def __init__(self, age):
        self.age = age
a = Person(100)
a.age # 100
```
`__new__()`方法的作用是, 构造实例对象. 它的第一个参数`cls`是我们定义的类, 剩下的参数`*args`是我们创建实例传入的参数.
在创建对象时首先执行`__new__()`方法, 创建对象, 然后再执行`__init__()`.

```python
class Person(object):
    # 构造方法
    def __new__(cls, *args):
        print("调用__new__(构造方法)")  # 1.先调用__new__方法构造对象
        print(cls)  # <class '__main__.Person'>  # 我们传入的类
        print(args)  # ('wang', 13), 我们传入的参数
        return object.__new__(cls)  # 使用父类的__new__方法返回一个实例, 如果不返回(可以注释掉实验)则不会调用__init__方法, 也不会有对象创建, Persion()的返回结果None
        # return super().__new__(cls)  # super() 等价 object, 都是父类
    # 初始化方法
    def __init__(self, age):
        print("调用__init__(初始化方法)")
        self.age = age

wang = Person(13)
print(wang)
```


1. 为什么`__new__`的第一个参数是`cls`而不是`self`。因为调用`__new__`的时候，实例对象还没有被创建, `__new__`是一个静态方法。第一个参数cls表示当前的class, 既用当前的定义的类, 来创建对象.
2. python已经帮我们实现：使用父类的`__new__()`方法来创建对象并返回. 所以除了特殊情况下, 不需要关系`__new__()`
3. `__new__()`与`__init__()`的参数关系
`__new__`方法如果返回cls的对象`return super().__new__(cls)`，则对象的`__init__`方法将自动被调用，相同的参数`*args`和`**kwargs`将被传入`__init__()`方法。也既是说`__new__()`和`__init__()`方法共享的参数，除了第一个从`cls`变成了`self`。如果__new__没有返回实例对象，则__init__方法不会被调用。



# 应用
1. 单例模式

```python
class A:
	__flag = False  # 私有变量,表明该类是否被实例化过
	def __init__(self, name):
		self.name = name

	def __new__(cls, *args, **kwargs):
		if cls.__flag:  # 如果被实例化了
			return cls.__flag  # 返回实例化对象
		cls.__flag = object.__new__(cls)  # 否则实例化
		return cls.__flag  # 返回实例化的对象

# 实例化三个对象
a = A('wang')
b = A('wei')

# 打印三个对象的地址，结果都是一个地址
print(a)  # <__main__.A object at 0x7fbfd0aec6d8>
print(b)  # <__main__.A object at 0x7fbfd0aec6d8>

# 改变 a 对象的 name 属性，查看 b , c 的 name 属性
a.name = 'zhao'
print(a.name)  # zhao
print(b.name)  # zhao

```


1. 在创建实例前, 判断条件
而放在`__init__`也可以实现相同的效果, 但是已经创建了实例(执行了`__new__()`), 浪费了一定的资源
```python
class Person(object):
    def __new__(cls, age): 
        if age>100:
            return "年龄age需小于100,对象未创建"
        else:
            return super().__new__(cls) 
    def __init__(self, age): 
        self.age = age

Person(200)
'年龄age需小于100,年龄age需小于200,对象未创建'
```

2. 返回其他实例(不常用)
```py
class Foo(object):
    def __new__(cls,*args,**kwagrs):
        return object.__new__(cls,*args,**kwagrs)
    
    def __init__(self,name):
        self.name = name

class Bar(object):
    def __new__(cls,*agrs,**kwagrs):
        return object.__new__(Foo,*agrs,**kwagrs)
    
bar = Bar()
print(type(bar)) #foo其实是Stranger类的实例。
```

参考:
https://www.codevoila.com/post/68/new-and-init-in-python