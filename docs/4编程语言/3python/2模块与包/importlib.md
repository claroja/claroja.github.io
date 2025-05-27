# importlib


`import_module(name, package=None)`函数，和`__import__()`有一些不同

这两个函数之间最重要的不同点在于`import_module()`返回指定的包或模块 (例如 `pkg.mod`)，而`__import__()`返回最高层级的包或模块 (例如 `pkg`)。如果您只想按名称导入模块(可能在包中)，请使用 `import_module(name, package=None)`


## 应用
1. 动态创建对象
```python
import importlib

module = importlib.import_module('my_package.my_module')
my_class = getattr(module, 'MyClass')
my_instance = my_class()
```

2. 向a模块中导入c.py 中的对象

```sh
a #文件夹
 │a.py
 │__init__.py
b #文件夹
 │b.py
 │__init__.py
 ├─c#文件夹
 │c.py
 │__init__.py

## c.py 中内容
class C:
 
 def c(self):
  pass
```


```py
import importlib

params = importlib.import_module('b.c.c') #绝对导入
params_ = importlib.import_module('.c.c',package='b') #相对导入

## 对象中取出需要的对象
params.C #取出class C
params.C.c #取出class C 中的c 方法
```