# import


## module
一个`module`拥有一个命名空间(namespace),包含了各种各种各样的python对象, 其他的module可以导入, 以复用.

### 命名空间
我们没有直接调用`pi`, 而是调用`math.pi`, 这里`math`就是`namespace`, 通过它将所有的属性在`math`的空间下. 可以通过`dir()`来查看命名空间下所有的属性.
```py
import math
math.pi  # 3.141592653589793
dir()  # ['__annotations__', '__builtins__', ..., 'math'], global namespace全局的命名空间
globals() # {'__name__': '__main__', ... ,'pi': 3.141592653589793}, 详细的全局命名空间
dir(math)  # ['__doc__', ..., 'nan', 'pi', 'pow', ...], math namespace math的命名空间
```

直接导入`math`的属性`pi`, 此时`pi`在global namespace空间中.
```python
from math import pi
pi  # 3.141592653589793
['__annotations__', ..., '__spec__', 'pi']
```

### 别名
可以使用`as`给导入的modules或attributes取别名
```python
import math as m
m.pi  # 3.141592653589793
from math import pi as PI
PI  # 3.141592653589793

```
**注意**:
module的命名空间可以通过`.__dict__()`来访问, 而管局的命名空间, 可以通过`globals()`来访问:
```python
import math
math.__dict__["pi"]  # 3.141592653589793
```
## packages
python定义了两种packages, `regular packages`和`namespace packages`.`regular packages`包含了`__init__.py`文件, 当`regular package`被`import`时, `__init__.py`文件将被执行.在`__init__.py`文件夹下, 可以添加一些代码和导入module.


### regular package
在实际使用中, `regular package`是一个包含了python文件的文件夹, 可以使用`package`来组织`modules`. 该文件夹的根目录包含了`__init__.py`文件. `__init__.py`中可以写入`package`所有可导入的内容, 因此`__init__.py`就是该`package`的`module`形式, 我们在导入`package`文件时, 实际导入的就是`__init__.py`文件.
通常情况下, 当我们导入一个`package`时, 它的子`module`和子`package`没有被导入, 可以在`__init__.py`中加入子`module`和子`package`.


让我们创建一个名为`world`的`package`, 根目录是`world`, 二级目录是世界区域(非洲africa, 欧洲europe), 三级目录是国家(津巴布韦zimbabwe, 希腊greece, 挪威norway, 西班牙spain), 目录结构如下:

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

每一个国家都会打印国家的名字, 注意:
1. 非洲africa的`__init__.py`文件没有导入任何东西
2. 欧洲europe的`__init__.py`文件导入了希腊greece和挪威norway
3. 世纪world的`__init__.py`文件导入了非洲africa

```py
## world/africa/__init__.py  (Empty file)

## world/africa/zimbabwe.py
print("津巴布韦zimbabwe")

## world/europe/__init__.py
from . import greece
from . import norway

## world/europe/greece.py
print("希腊Greek")

## world/europe/norway.py
print("挪威norway")

## world/europe/spain.py
print("西班牙spain")

## world/__init__.py
from . import africa
```



1. 单独导入package时, 只有在`package/__init__.py`中存在模块才可以直接调用, 因为`import package`本质就是`import package/__init__.py`
```python
## 1. 将world导入全局命名空间
import world
dir() # [..., 'world'] 'world'加入了全局命名空间, 所以可以直接使用
world  # <module 'world' from 'world/__init__.py'>, 注意world被当成了module, 而且指向的是__init__.py

## 2. world的命名空间中只有africa, 因为world/__init__.py只导入了africa, 可以使用world.africa, 而不能使用world.europe
dir(world) # [..., 'africa']
world.africa  # <module 'world.africa' from 'world/africa/__init__.py'>
world.europe  # AttributeError: module 'world' has no attribute 'europe'
```

2. `from`关键词后面的`package`不会被导入命名空间, 也就是说python不会运行`from`后面的`package/__init__.py`后面的module
```python
## 通过绝对路径, 直接导入europe
from world import europe
## 希腊greece
## 挪威norway
dir() # [..., 'europe'] europe加进了全局的命名空间, 而world没有加入命名空间
dir(world) # NameError: name 'world' is not defined

## 1 因为'europe/__init__.py'中导入了希腊greece, 所以可以直接使用
europe.greece  # <module 'world.europe.greece' from 'world/europe/greece.py'>

## 2 因为'from world import europe', 所以欧洲europe可以通过world来获取了
europe.norway  # <module 'world.europe.norway' from 'world/europe/norway.py'>

## 3 西班牙spain不在欧洲europe的'__init__.py'文件中, 所以不能直接引用
europe.spain  # AttributeError: module 'world.europe' has no attribute 'spain'
```

3. `import`后面的`package`会导入命名空间, 也就是说python会运行`import`后面的`package/__init__.py`

```python
## 通过绝对路径, 直接导入spain
import world.europe.spain  # 西班牙spain
## 希腊greece
## 挪威norway
## 西班牙spain

dir()  # [..., 'world'] # world加入了全局命名空间, import后面的模块都会加入命名空间
dir(world)  # [..., 'africa', 'europe']  # africa是world本身具有的, europe是通过import绝对路径导入的
dir(world.europe)  # [..., 'greece', 'norway', 'spain']  # greece和norway是europe本身具有的, spain是import 导入的
world.europe.spain  # <module 'world.europe.spain' from 'world/europe/spain.py'>

from world.europe import norway  # 不会重复导入norway模块, 但是却将norway加入到了全局的命名空间中
norway  # <module 'world.europe.norway' from 'world/europe/norway.py'>
```




**总结**
建议将`子packages`和子`modules`都在`__init__.py`文件中导入, 这样对使用者会更友好. 可以参考`requests`的[例子](https://github.com/psf/requests/blob/v2.23.0/requests/__init__.py#L112)



### namespace package
在没有`__init__.py`的时候, package的名字只起到了`namespace`的作用, 这就是`namespace package`的由来.

假设有一下的目录结构, `mod1.py`文件中有`foo()`方法, `mod2.py`中有`bar()`方法
```sh
pkg/
│
├── mod1.py/
├── mod2.py/
```
```python
import pkg  # 不能调用pkg.mod1, 因为pkg仅仅是一个路径
import pkg.mod1, pkg.mod2  # 导入两个模块, pkg仍然是路径
from pkg import mod1  # 导入一个模块, pkg仍然是一个模块
from pkg.mod1 import foo
```


### 绝对和相对导入
在` world/__init__.py`文件中, 有下列代码:
```python
from . import africa
```

- 相对导入:`from . import africa`中的`.`表示current package, 这句话可以理解为`从当前的package中导入subpackage africa`
- 绝对导入:`from world import africa`

[PEP 8 style guide](https://www.python.org/dev/peps/pep-0008/#imports)建议使用绝对路径导入. 更详细的比较可以参考[Absolute vs Relative Imports in Python](https://realpython.com/absolute-vs-relative-python-imports/)


## import path
可以通过`sys.path`来获得python导入包时搜索的路径, 它主要包含了3种:

1. 当前的python运行的current directory, 注意不是所运行python文件的路径
2. 我们配置的`PYTHONPATH`环境变量
3. 安装的第三方包installation-dependent directories
```python
import sys
sys.path
['', # 当前工作路径
'D:\\Program Files\\Python310\\python310.zip', 'D:\\Program Files\\Python310\\DLLs', # 默认的
'D:\\Program Files\\Python310\\lib', # 默认的
'D:\\Program Files\\Python310', # 默认的
'E:\\code\\aitrainer\\.env', # 默认的
'E:\\code\\aitrainer\\.env\\lib\\site-packages' # 第三方包
]
```
**注意**:上面并没有`PYTHONPATH`, 因为我们并没有设置. 当我们使用`os.environ['PYTHONPATH']`, 会报错. 可以通过`export PYTHONPATH="${PYTHONPATH}:/my/other/path"`来设置.

python会按照以上顺序, 来寻找所导入的包, 所以注意在工作目录下自己创建的module和package不要使用内置的和第三方的名称, 否则会被覆盖.


假设有如下的目录结构:
```sh
package/
│
├── module_A.py
└── run_package.py
```

`module_A.py`
```python
def func():
    print("module_A")
```

`run_package.py`
```python
import module_A
def main():
    module_A.func()

if __name__ == "__main__":
    main()
```

`run_package.py`通过绝对位置引入`module_A.py`, 意为着`module_A`必须在`import path`中.幸运的是, 程序的运行目录就是当前的目录.但是, 如果其他人想要直接使用`package`而将他直接复制到他们的工程下, 就会出现问题. 比如将目录改成如下结构:
```sh
other/
│
├── package/
│   ├── module_A.py
│   └── run_package.py
│
└── cli.py
```
`cli.py`
```python
from package.run_package import main
if __name__ == "__main__":
    main()
```

当我们运行`python cli.py`会报错, 因为, 我们在运行`cli.py`时, 改变了工作目录(`cli.py`所在的路径是`other/`), 进而改变了`import path`. `module_A`现在不在`other/`的工作目录下, 既不在`import path`下.
```sh
python cli.py
## ModuleNotFoundError: No module named 'module_A'
```


一个解决办法是, 在`run_package.py`中添加如下的代码, 手动修改`import path`. 也就说将`other/package`路径也加入到了`import path`中. 现在的`import path`中既含有`cli.py`的路径`other/`, 也还有`run_package.py, module_A.py`的路径`other/package`.
```python
import sys
import pathlib
sys.path.insert(0, str(pathlib.Path(__file__).parent)) # 或者 sys.path.append(str(pathlib.Path(__file__).parent)
## __file__  # other\package\run_package.py
## pathlib.Path(__file__)  # other\package\run_package.py
## pathlib.Path(__file__).parent  # other\package
import module_A
```

另外一种解决方法是, 使用相对路径, 修改`run_package.py`.
```python
from . import module_A
```
但使用相对路径后, 我们就不能直接再运行`run_package.py`了
```sh
python ./package/module_A.py  # ImportError: attempted relative import with no known parent package
## 即使进入到package/路径下也不行
cd package
python ./module_A.py  # ImportError: attempted relative import with no known parent package
```

如果想要既能被其他人使用, 又可以自己运行package, 可以使用`try...except`方法. 修改`run_package.py`的相关方法.
```python
try:
    from . import module_A
except Exception as e:
    import module_A

```

然而更建议的方式是安装本地的package. 当使用`pip`命令从`PyPI`上安装package时, package可以被所有的脚本使用. 当然我们也可以在本地安装package.
创建本地的package, 首先需要创建两个文件:
1. `setup.cfg`
`name`和`version`可以任意指定, 建议`name`使用`local_`开头, 以区分本地和网络的安装

```python
[metadata]
name = local_structure
version = 0.1.0

[options]
packages = package
```
2. `setup.py`
```python
setuptools.setup()
```

然后运行`pip`安装命令, 这个命令将会把包安装到系统中, 可以在`import path`中看到.这样就不需要关系模块的路径, 相对引入等问题.
`-e`(editable)指我们可以直接更改安装好的源码, 而不需要重新编辑, 重新安装包.
```sh
python -m pip install -e .
```

安装好后, 我们就可以在任意路径下的脚本中使用:
```sh
## Local imports
from package import module_A
```

**TIPS**:
脚本(script)意为着可以运行(run)
包(library)意为着可以被引入(imported)

## Resource Import
有些时候开发的package中可能包含一些数据, 图片文件, 这时会遇到一些问题:
1. 路径问题, 用户运行的路径和开发路径不同, 一些情况下可以通过package的`__file__`和`__path__`来解决
2. 你的package可能在zip压缩文件中

python 3.7之后提供了`importlib.resources`包来解决这些问题.`resource`表示package中的文件.之前的版本如果想使用, 需要首先安装`importlib_resources`, 可以写如下的代码:
```python
try:
    from importlib import resources
except ImportError:
    import importlib_resources as resources
```
例子:
```sh
package/
│
├── resources/
│   └── test.txt
│
└── main.py
```
其中`main.py`
```python
from importlib import resources
with resources.path("book.resources", "test.txt") as path:
    print(path)
```
当我们在其他目录导入`package.main`模块时`from book import main`即可打印出`text.txt`的绝对路径`E:\code\test_python\book\resources\test.txt`.
另外`resources`还提供了`open_text()`和`open_binary()`方法, 等价于`open()`方法.


## 动态导入
`import`关键字实际上调用了`importlib` package.
下面的例子中`importlib.import_module("module_name")`和`import module_name`效果一样, 需要注意的是前者传入的参数是字符串类型.
```python
import importlib
module_name = input("Name of module? ")
module = importlib.import_module(module_name)
print(module.__doc__)
```

## import原理
当我们使用`import`关键字时, 其实是执行了
1. python解释器首先检查`sys.modules`是否已经包含了相关的`module`, 如果有跳过.如果没有, 则执行2
2. 使用`finders`来查到, 查找的顺序是: built-in modules-> frozen modules -> import path(sys.path)
    2.1 当前文件夹的下
    2.2 `PYTHONPATH`环境变量
    2.3 Other, installation-dependent directories
3. 使用`loader`来加载, `loader`会根据不同的类型(built-in, frozen...)来加载
4. 绑定命名空间

当使用`import`时, 上述四步会自动执行, 而当我们使用`importlib`时, 只自动执行了前三步, 我们要手动给模块指定变量或命名空间.
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

## Reloading Modules
假设我们新建了`number.py`, 并定义了变量:
```python
## number.py
answer = 0
```
我们在python终端里导入, 并输出
```python
import number
number.answer  # 0
```
不关闭python终端, 修改`number.py`:
```python
## number.py
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


参考:
https://realpython.com/python-import/