# traceback

`python`会在抛出`exceptions`时打印`traceback`, 来帮助你查找出错的地方.

创建以下代码, 可以看到形参是`someone`, 而在函数里面, 我们写成了`someon`, 所以在调用的时候会报错.
```python
def greet(someone):
    print('Hello, ' + someon)

greet('Chad')
```

```sh
$ python example.py
Traceback (most recent call last):
  File "/path/to/example.py", line 4, in <module>
    greet('Chad')
  File "/path/to/example.py", line 2, in greet
    print('Hello, ' + someon)
NameError: name 'someon' is not defined
```

我们要从下往上阅读`traceback`, 最后一行是错误信息, 往上以`File`为分组, 最下面的是最栈中最低(最内层的)的方法调用:
1. `NameError`: 是`exception`的类型, `name 'someon' is not defined`, 是`exception`的具体内容
2. `File "/path/to/example.py", line 2, in greet`, 告诉我们出错的文件和行等, `print('Hello, ' + someon)`告诉我们哪一行的具体是什么


当我们在使用`try``except`时, 如果`except`中再遇到`Exception`就会出现`During handling of the above exception, another exception occurred`

```python
def test():
    try:
        1/0
    except Exception:
        1/0

test()


## Traceback (most recent call last):
##   File "<stdin>", line 3, in test
## ZeroDivisionError: division by zero
## 
## During handling of the above exception, another exception occurred:
## 
## Traceback (most recent call last):
##   File "<stdin>", line 1, in <module>
##   File "<stdin>", line 5, in test
## ZeroDivisionError: division by zero
```


## Common Tracebacks in Python?

### AttributeError
当调用对象没有的属性时, 抛出. 如下代码, `int`对象没有`an_attribute`这个属性.

```python
an_int = 1
an_int.an_attribute
## Traceback (most recent call last):
##   File "<stdin>", line 1, in <module>
## AttributeError: 'int' object has no attribute 'an_attribute'
```

另外, 我们还会遇到`AttributeError: 'NoneType' object has no attribute 'append'.`这个时候就要看函数是否返回了None.

### ImportError
在使用`import`模块时, 遇到的. 
```python
## 1. 没有这个模块
import asdf 
## Traceback (most recent call last):
##   File "<stdin>", line 1, in <module>
## ModuleNotFoundError: No module named 'asdf'
## 2. 模块中没有子模块, 子方法或子包
from collections import asdf
## Traceback (most recent call last):
##   File "<stdin>", line 1, in <module>
## ImportError: cannot import name 'asdf'
```
### IndexError
在索引`sequence`对象(比如`list`,`tuple`等)时, 超出了下表范围时
```python
a_list = ['a', 'b']
a_list[3]
## Traceback (most recent call last):
##   File "<stdin>", line 1, in <module>
## IndexError: list index out of range
```
### KeyError
在`map`对象(比如`dict`时)中索引不存在的key
```python
a_dict['b']
## Traceback (most recent call last):
##   File "<stdin>", line 1, in <module>
## KeyError: 'b'
```

### NameError
是引用不存在的`variable`, `module`, `class`, `function`的名称时抛出.

```python
def greet(person):
    print(f'Hello, {persn}')
greet('World')
## Traceback (most recent call last):
##   File "<stdin>", line 1, in <module>
##   File "<stdin>", line 2, in greet
## NameError: name 'persn' is not defined
```

### SyntaxError
当遇到语法错误时抛出.
注意`SyntaxError`不会有`Traceback (most recent call last)`, 因为此时`python`的代码还没有执行, 仅仅是检查语法.
```python
def greet(person)
##   File "<stdin>", line 1
##     def greet(person)
##                     ^
## SyntaxError: invalid syntax
```

### TypeError

```python
1 + '1'
## Traceback (most recent call last):
##   File "<stdin>", line 1, in <module>
## TypeError: unsupported operand type(s) for +: 'int' and 'str'
'1' + 1
## Traceback (most recent call last):
##   File "<stdin>", line 1, in <module>
## TypeError: must be str, not int
len(1)
## Traceback (most recent call last):
##   File "<stdin>", line 1, in <module>
## TypeError: object of type 'int' has no len()
```


### ValueError

```python
a, b, c = [1, 2]
## Traceback (most recent call last):
##   File "<stdin>", line 1, in <module>
## ValueError: not enough values to unpack (expected 3, got 2)
a, b = [1, 2, 3]
## Traceback (most recent call last):
##   File "<stdin>", line 1, in <module>
## ValueError: too many values to unpack (expected 2)
```

参考:
https://realpython.com/python-traceback/