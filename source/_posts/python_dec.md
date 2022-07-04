---
title: python_dec
toc: true
date: 2021-07-11 12:43:57
---
# 1.基础知识
想理解装饰器，就得知道以下两点：
1.1 闭包特性（内函数能捕捉到外函数的环境变量）
```python
def line(a, b): # 生成了一个确定了ab的线性函数，结果只需要给x值就可以判断y值
    def line(x):
        return a*x + b
    return line # 返回值为闭包，就是内层函数
line1 = line(1, 1) # 用line1接受a=1，b=1的闭包函数
line2 = line(-1, 1) # 用line2接收a=1，b=-1的闭包函数

line1(1)  # 2
line2(1)  # 0
```

1.2 return一个函数,相当于调用了它


# @原理
@装饰符号的作用是将被装饰的函数当成参数传入装饰器函数
`wrap()`就是装饰器函数
`dec()`的作用主要是整合所有的操作
```python
def wrap(func):  # 修饰符的函数名,该函数内只包含修饰函数,其他不要操作,参数是函数引用
    def dec(): # 修饰函数,可以传参,函数内部写对原函数的修饰逻辑,然后返回
        print("在dec函数中添加操作")
        func()
    return dec

def test1():
    print("我没使用@, 直接当成参数传入")

wrap(test1)()
>>> 在dec函数中添加操作
>>> 我没使用@, 直接当成参数传入

@wrap # 对应wrap函数
def test2():
    print("我使用了@") # 等价于wrap(test2)()
test2()
>>> 在dec函数中添加操作
>>> 我使用了@

```



# return
@原理中的例子中被装饰函数`func`没有返回值，所以在`dec`中是可以直接调用，而不需要`return`的。
但当`func`有返回值的时候是需要用`return func()`来调用的，注意这里`return`的是`func()`的调用，而不是`func`本身。
```python
def wrap(func):  # 修饰符的函数名,该函数内只包含修饰函数,其他不要操作,参数是函数引用
    def dec(): # 修饰函数,可以传参,函数内部写对原函数的修饰逻辑,然后返回
        print("在dec函数中添加一下操作")
        return func()
    return dec
    
@wrap # 对应wrap函数
def test():
    return "返回值"

a = test()  # 在dec函数中添加一下操作
print(a)  # 返回值
```



# 给被装饰函数传参
在`dec()`就需要传入参数了, 这个比较难理解, 直接记住就行
```python
def wrap(func):
    def dec(*args,**kwargs):  # 调用test()时,是从这里开始执行, 所以要传入
        print('装饰开始')
        func2 = func(*args,**kwargs)  # decorater的参数传给被修饰函数func
        print('装饰结束')
        return func2
    return dec

@wrap
def test(num):
    print('我是被装饰的函数')
    return num+1

a = test(2)
# 装饰开始
# 我是被装饰的函数
# 装饰结束
print(a)  # 3
```


# 装饰器传入参数
```python
def warpp(*args, **kwargs):  # 
    def wrap(func):
        def dec(*argsdec, **kwargsdec):
            print("装饰器参数",args, kwargs)
            print("被装饰参数",argsdec,kwargsdec)
            print('现在开始装饰')
            func()
            print('现在结束装饰')
        return dec
    return wrap


@warpp('index.html/')
def test():
    print('我是被装饰的函数')

test()

>>> ('index.html/',) {}
>>> () {}
>>> 现在开始装饰
>>> 我是被装饰的函数
>>> 现在结束装饰
```

# 多层装饰器

```python
def wrap1(fn):
    def decorater():
        print('1')
        return fn() + '1'
    return decorater
    
def wrap2(fn):
    def decorater():
        print('2')
        return fn() + '2'
    return decorater
@wrap1
@wrap2
def test3():
    return "hello"
test3()
```


装饰器: 先装饰(从下往上),后调用(从上往下) 
简单的来讲，就是被装饰的函数会被转换为装饰函数闭包的函数。




# 



