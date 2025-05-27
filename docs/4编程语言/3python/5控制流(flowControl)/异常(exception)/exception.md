# exception



## Raising an Exception
使用`raise`来抛出一个`Exception`

```python
x = 10
if x > 5:
    raise Exception('x should not exceed 5. The value of x was: {}'.format(x))


## Traceback (most recent call last):
##   File "<input>", line 4, in <module>
## Exception: x should not exceed 5. The value of x was: 10
```

## The AssertionError Exception
如果`assert`后面是`True`, 则程序会继续运行. 如果是`False` 则会抛出`AssertionError`

```python
import sys
assert ('linux' in sys.platform), "This code runs on Linux only." # 如果在linux会正常运行, 如果在windows上会报错

## Traceback (most recent call last):
##   File "<input>", line 2, in <module>
## AssertionError: This code runs on Linux only.

```


## The try and except Block: Handling Exceptions
`try`和`except`是用来捕获和操作`Exception`

```python
def linux_interaction():
    assert ('linux' in sys.platform), "Function can only run on Linux systems."
    print('Doing something.')


## 捕获方法异常
try:
    linux_interaction()
except AssertionError as error:
    print(error)
    print('The linux_interaction() function was not executed')

## 如果在windows上运行, 会得到如下的信息
## Function can only run on Linux systems.  # assert 输出
## The linux_interaction() function was not executed  # except 输出

## 捕获多个异常
try:  
    linux_interaction()
    with open('file.log') as file:
        read_data = file.read()
except FileNotFoundError as fnf_error:
    print(fnf_error)
except AssertionError as error:
    print(error)
    print('Linux linux_interaction() function was not executed')

## 如果在windows上运行, 会得到和`捕获方法异常`一样的记过
## 如果在linux上运行, 则会得到`[Errno 2] No such file or directory: 'file.log'`
## 1. try里面的代码, 会在遇到第一个exception时停止
## 2. 在except中, 决定如果处理try中遇到的exception
## 3. 不建议使用`except Exception as error`, 可在https://docs.python.org/3/library/exceptions.html查看具体的exception
```

## The else Clause
`else`是在`except`没有执行的话时, 执行
```python
def linux_interaction():
    assert ('linux' in sys.platform), "Function can only run on Linux systems."
    print('Doing something.')

try:
    linux_interaction()
except AssertionError as error:
    print(error)
else:
    print('Executing the else clause.')

## 如果在linux上运行会得到
## Doing something.
## Executing the else clause.
```


## Cleaning Up After Using finally

`finally`是无论如何都会执行的
```python
try:
    linux_interaction()
except AssertionError as error:
    print(error)
else:
    try:
        with open('file.log') as file:
            read_data = file.read()
    except FileNotFoundError as fnf_error:
        print(fnf_error)
finally:
    print('Cleaning up, irrespective of any exceptions.')
```

## 总结

```python
try:
    "run this code"
except:
    "Execute this code when there is an exception"
else:
    "No exceptions? Run this code"
finally:
    "Always run this code."
```


参考:
https://realpython.com/python-exceptions/