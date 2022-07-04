---
title: python_class
toc: true
date: 2021-01-20 22:03:54
---

```py
class Name(object): # 大驼峰命名方法
	class_prop= #类属性
	__private_class_prop= #类私有属性
	def __int__(self,arg1,arg2):#初始化实例对象
		self.instance_prop= arg1#实例对象属性
		self.__private_instance_prop= arg2 #实例对象私有属性
	def instance_func(self): #实例独享方法
	def __private_instance_func(self): #实例对象私有方法
	@classmethod
	def func(cls): #类对象方法
	@staticmethod
    def func():
```

1. 类属性`class_prop`
- 被所有实例所共有, 在内存中只有一个地址
- 如果如果实例，添加了类相同的属性名，则会优先调用实例的属性。

2. 实例属性`instance_prop`
- 每个实例各自拥有
- 在 `__init__()`方法里初始化

3. 实例方法`instance_func`
- 每个实例各自拥有

4. 类方法`@classmethod`
类方法，所有的类的对象和实例所共有，第一个参数必须是类对象，一般用"cls"来表示.
5. 静态方法 `@staticmethod`
静态方法和类与实例没有任何联系, 不需要指定第一个参数为`self`或`cls`, 就像普通的方法一样. 在python中用处比较少

6. 下划线的作用
`name`:公有 
`_name`:模块私有,import * 
`__name`:类私有,模块私有,import *;(其实可以用变成了_class__name) 
`__name__`:Python系统方法
`name_`:避免冲突


