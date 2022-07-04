---
title: python_import
toc: true
date: 2021-01-20 22:03:54
---
# module
一个`module`就是一个`.py`文件, 作用就是可以在其他文件导入, 以复用

```py
import math
math.pi  # 3.141592653589793
```
这里`math`就是`namespace`, 通过它将所有的属性在`math`的空间下. 可以通过`dir()`(`__dir__()`)来查看命名空间下所有的属性.
```py
import math
dir()  # ['__annotations__', '__builtins__', ..., 'math'], global namespace全局的命名空间
dir(math)  # ['__doc__', ..., 'nan', 'pi', 'pow', ...], math namespace math的命名空间
```

直接导入`math`的属性`pi`, 此时`pi`在global namespace空间中.
```python
from math import pi
pi  # 3.141592653589793
```

可以使用`as`给导入的modules或attributes取别名
```python
import math as m
m.pi  # 3.141592653589793
from math import pi as PI
PI  # 3.141592653589793

```


# packages
package是一个包含了python文件的文件夹, 该文件夹的根目录包含了`__init__.py`文件.
通常情况下, 在导入一个package时, submodules 和 subpackages不会被导入, 这时就需要先使用`__init__.py`文件将他们引入才行.
当我们在导入一个package时, 和module没有区别.

```shell
world/
│
├── africa/
│   ├── __init__.py
│   └── zimbabwe.py
│
├── europe/
│   ├── __init__.py
│   ├── greece.py
│   ├── norway.py
│   └── spain.py
│
└── __init__.py
```
```py
# world/africa/__init__.py  (Empty file)

# world/africa/zimbabwe.py
print("Shona: Mhoroyi vhanu vese")
print("Ndebele: Sabona mhlaba")

# world/europe/__init__.py
from . import greece
from . import norway

# world/europe/greece.py
print("Greek: Γειά σας Κόσμε")

# world/europe/norway.py
print("Norwegian: Hei verden")

# world/europe/spain.py
print("Castellano: Hola mundo")

# world/__init__.py
from . import africa
```

`world/__init__.py`中只导入了`africa`, 所以可以使用`world.africa`, 但不能使用`world.europe`
```python
import world
world  # <module 'world' from 'world/__init__.py'>

# The africa subpackage has been automatically imported
world.africa  # <module 'world.africa' from 'world/africa/__init__.py'>

# The europe subpackage has not been imported
world.europe  # AttributeError: module 'world' has no attribute 'europe'
```
因为`world/europe/__init__.py`, 只包含了`greece`和`Norwegian`所以只打印了他们俩, `greece`是不能用的
```python
# Import europe explicitly, 
from world import europe
# Greek: Γειά σας Κόσμε
# Norwegian: Hei verden

# The greece submodule has been automatically imported
europe.greece  # <module 'world.europe.greece' from 'world/europe/greece.py'>

# Because world is imported, europe is also found in the world namespace
world.europe.norway  # <module 'world.europe.norway' from 'world/europe/norway.py'>

# The spain submodule has not been imported
europe.spain  # AttributeError: module 'world.europe' has no attribute 'spain'

# Import spain explicitly inside the world namespace
import world.europe.spain  # Castellano: Hola mundo


# Note that spain is also available directly inside the europe namespace
europe.spain  # <module 'world.europe.spain' from 'world/europe/spain.py'>

# Importing norway doesn't do the import again (no output), but adds
# norway to the global namespace
from world.europe import norway
norway  # <module 'world.europe.norway' from 'world/europe/norway.py'>
```



# 绝对和相对导入
- 相对导入:`from . import africa`中的`.`表示current package, 这句话可以理解为`从当前的package中导入subpackage africa`
- 绝对导入:`from world import africa`


# 动态导入
`import`关键字实际上调用了`importlib` package.
下面的例子中`importlib.import_module("module_name")`和`import module_name`效果一样, 需要注意的是前者传入的参数是字符串类型.
```python
import importlib
module_name = input("Name of module? ")
module = importlib.import_module(module_name)
print(module.__doc__)
```

# import原理
当我们使用`import`关键字时, 其实是执行了
1. python解释器首先检查`sys.modules`是否已经包含了相关的`module`, 如果有跳过.如果没有, 则执行2
2. 使用`finders`来查到, 查找的顺序是: built-in modules-> frozen modules -> import path(sys.path)
    2.1 当前文件夹的下
    2.2 `PYTHONPATH`环境变量
    2.3 Other, installation-dependent directories
3. 使用`loader`来加载, `loader`会根据不同的类型(built-in, frozen...)来加载
4. 绑定命名空间
而当我们使用`importlib`时, 只自动执行了前两步, 我们要手动给模块赋值(指定命名空间)
```python
from math import pi as PI
PI  # 3.141592653589793


import importlib
_tmp = importlib.import_module("math")
PI = _tmp.pi
del _tmp
PI  # 3.141592653589793
```

注意, 即使仅仅引入了module的一个attribute, 整个module也被执行和加载了. 只不过是其他的attribute没有被挂到命名空间里, 可以使用`sys.modules`来验证.`sys.modules`包含了所有导入的模块.(每次导入mudule时都会检查`sys.modules`以免重复导入)
```python
from math import pi
pi # 3.141592653589793

import sys
sys.modules["math"].cos(pi)  # -1.0
```

# reload
假设我们新建了`number.py`, 并定义了变量:
```python
# number.py
answer = 0
```
我们在python终端里导入, 并输出
```python
import number
number.answer  # 0
```
不关闭python终端, 修改`number.py`:
```python
# number.py
answer = 1
```
在python终端中重新导入, 输出结果仍然是0.
这时因为每次`import`导入`mudule`时都会检查`sys.modules`,如果有就不导入, 以免重复导入
```python
import number
number.answer  # 0
```
如果我们想实现热更新, 则需要`importlib.reload()`方法
```python
import importlib
importlib.reload(number)
number.answer  # 1
```

# resources

`importlibresources`和普通读文件最大的特点是可以使用`import`的路径
有以下的文件结构:
```sh
test_package/
│
├── resources/
│   ├── __init__.py
│   ├── test.txt
└── main.py
```
注意`open_text`的第一个参数路径是按导入模块的格式写的.其他的和`open()`函数一样
```python
from importlib import resources
with resources.open_text("test_package.resources", "test.txt") as fid:
    text = fid.readlines()
```


# 命名空间
一般有三种命名空间：

内置名称（built-in names）， Python 语言内置的名称，比如函数名 abs、char 和异常名称 BaseException、Exception 等等。
全局名称（global names），模块中定义的名称，记录了模块的变量，包括函数、类、其它导入的模块、模块级的变量和常量。
局部名称（local names），函数中定义的名称，记录了函数的变量，包括函数的参数和局部定义的变量。（类中定义的也是）


参考:
https://realpython.com/python-import/