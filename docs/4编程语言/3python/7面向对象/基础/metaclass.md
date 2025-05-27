# metaclass



metaclass 是 class 的 class.
一个 class 定义了 object的行为, 而一个metaclass 定义了class的行为.
object是class的instance, 而class是metaclass的instance.

## class也是object
`classe`描述了如何创建一个`object`, 如下面的代码:
```python
class ObjectCreator(object):
      pass
my_object = ObjectCreator()
print(my_object)  # <__main__.ObjectCreator object at 0x8974f2c>
```
而在python中, `class`也是一种`object`. 当我们使用关键字`class`时, python的解释器执行它, 并创建了一个`object`.
```py
class ObjectCreator(object):
      pass
```
如上面的代码, 在内存中创建了一个名为`ObjectCreator`的`object`.这个`object`(class)具有创建`object`(instance)的能力, 所以才称他为`class`.
但是, 它也是一个`object`, 所以:
1. 可以赋值给变量
2. 可以复制它
3. 可以添加属性
4. 可以传递给方法

## 动态创建class
因为`class`是`object`, 所以可以
```python
def choose_class(name):
    if name == 'foo':
        class Foo(object):
            pass
        return Foo # return the class, not an instance
    else:
        class Bar(object):
            pass
        return Bar

MyClass = choose_class('foo')
print(MyClass) #  <class '__main__.Foo'>  方法返回了一个class, 而不是instance
print(MyClass()) # <__main__.Foo object at 0x89c6d4c>, 通过class创建了一个instance
```
但是, 这还不够动态, 因为我们使用`class`关键字, 当python解释器读到`class`关键字时, 会通过`type`方法来创建`class`.
`type`的基本用法是返回`object`的类型:
```py
print(type(1))  # <type 'int'>
print(type("1"))  # <type 'str'>
print(type(ObjectCreator))  # <type 'type'>
print(type(ObjectCreator()))  # <class '__main__.ObjectCreator'>
```
而`type`另外一个重要的功能是创建一个`class`. 语法是`type(name, bases, attrs)`
- name: class的名称
- bases: 父类, 元组, 因为可以多继承
- attrs: 成员属性和方法

属性的例子(方法也一样)
```py
class Foo(object):
      bar = True
```
等价于
```python
Foo = type('Foo', (), {'bar':True})
```
继承例子
```py
class FooChild(Foo):
      pass
```
等价于
```py
FooChild = type('FooChild', (Foo,), {})
```

## metaclass
`metaclass`可以创建`class`, 我们使用`class`来创建`object`, 使用`metaclass`创建`class`.
```python
MyClass = MetaClass()
my_object = MyClass()
```
我们知道可以使用`type`来创建`class`:
```py
MyClass = type('MyClass', (), {})
```
这是因为`type`实际上就是`metaclass`. 在python中所有的都是对象, 包括integers, strings, functions, classes. 
```python
age = 35
age.__class__  # <type 'int'>
name = 'bob'
name.__class__  # <type 'str'>
def foo(): pass
foo.__class__  # <type 'function'>
class Bar(object): pass
b = Bar()
b.__class__  # <class '__main__.Bar'>
```
那么`__class__`的`__class__`是什么呢?
```py
age.__class__.__class__  # <type 'type'>
name.__class__.__class__  # <type 'type'>
foo.__class__.__class__  # <type 'type'>
b.__class__.__class__  # <type 'type'>
```
`type`是内置的`metaclass`(为什么不是首字母大写`Type`, 可能是因为他还是一个判断类型的函数)




应用:

应用1.`abs`实现抽象类就是需要修改`metaclass`
应用2.`django`中的orm也是修改`metaclass`
应用3:创建类的时候将类的属性都大写
```python
class UpperAttrMetaclass(type):
    # 因为继承type,所以第一个参数是类的名称,第二个是基类,第三个是属性
    def __new__(cls, clsname, bases, attrs): 
        uppercase_attrs = {
            attr if attr.startswith("__") else attr.upper(): v
            for attr, v in attrs.items()
        }
        return type(clsname, bases, uppercase_attrs)
        # return type.__new__(cls, clsname, bases, uppercase_attrs)
        # return super(UpperAttrMetaclass, cls).__new__(cls, clsname, bases, uppercase_attrs)

class Foo(metaclass=UpperAttrMetaclass):
    bar = 'bip'

hasattr(Foo, 'bar') # False
hasattr(Foo, 'BAR') # True
```

应用4：通过mytype创建对象,实现继承
```python
class MyType(type):
    def __init__(self, *args, **kwargs):
        super(MyType, self).__init__(*args, **kwargs)

    def __call__(cls, *args, **kwargs):
        print('xxxx')
        return super(MyType, cls).__call__(*args, **kwargs)

## Base = MyType('Base', (object,), {})
## MyType('Base', (object,), {}) 是有MyType创建； metaclass=MyType
## 1. type可以创建类metaclass=type；MyType也可以创建类metaclass=MyType
## 2. Base = MyType('Base', (object,), {}) -->
## class Base(metaclass=MyType):
##     pass
## class Foo(Base):
##     pass

class Foo(MyType('Base', (object,), {})):
    pass
obj = Foo()

```

应用5：通过封装函数来创建新的对象,更加方便
```python
class MyType(type):
    def __init__(self, *args, **kwargs):
        super(MyType, self).__init__(*args, **kwargs)

    def __call__(cls, *args, **kwargs):
        return super(MyType, cls).__call__(*args, **kwargs)


def with_metaclass(base):
    return MyType('XX', (base,), {})


class Foo(with_metaclass(object)):
    pass
```

6. 记录有多个类被创建
```python
class MyMeta(type):
    counter = 0

    def __init__(cls, name, bases, dic):
        type.__init__(cls, name, bases, dic)
        cls._order = MyMeta.counter
        MyMeta.counter += 1

class MyType1(metaclass=MyMeta):
    pass
class MyType2(metaclass=MyMeta):
    pass

MyMeta.counter # 2, 有两个class被创建
```