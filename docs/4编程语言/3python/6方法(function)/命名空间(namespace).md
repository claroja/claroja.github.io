# namespace

## namespace

可以把`namespace`当成一个`dict`, `key`是`object`的名称, `value`是`object`本身.

`python`总共有4种`namespace`:

1. Built-In
2. Global
3. Enclosing
4. Local

### built-in namespace
`built-in namespace`包含了`python`所有内置的`object`.这些`variable`可以在`python`运行时的任何地方调用.
```python
dir(__builtins__)  # 查看所有built-in对象
```

### global namespace
`global namespace`包含了所有在`main`程序里的`variable`. 在`main`程序执行时创建, 结束时销毁.
严格的来讲当我们使用`import`导入`module`时,`interpreter`也会给`module`创建`namespace`.


### Local and Enclosing Namespaces
`interpreter`在`function`执行时, 会为其创建`namespace`.
在方法执行时撞见, 方法执行完销毁.
在下面的代码中, 给`g()``function`创建的称为`local namespace`, 给`f()``function`创建的称为`enclosing namespace`.

```python
 def f():
    print('Start f()')

    def g():
        print('Start g()')
        print('End g()')
        return

    g()

    print('End f()')
    return


f()
## Start f()
## Start g()
## End g()
## End f()
```

## Variable Scope
`namespace`的主要作用就是管理`variable`, 即使有重名的`variable`, 如果是在不同的`namespace`中, 也是可以共存的.

假设你想引用名称为`x`的`variable`, `interpreter`按顺序在一下的`namespace`中寻找:
1. `local` 如果`x`在一个`function`中, `interpreter`会在最小的`function`的`scope`中引用

    ```python
    x = 'global'

    def f():
        x = 'enclosing'
        def g():
            x = 'local'
            print(x)
        g()

    f() # local
    ```

2. `enclose` 如果`x`是在外层的`function`中, `interpreter`会在`ecclosing function's scope`中引用

    ```python
    x = 'global'

    def f():
        x = 'enclosing'
        def g():
            print(x)
        g()
        
    f() # enclosing
    ```


3. 如果在`local`和`enclose`中都找不到, 则会在`global`中引用


    ```python
    x = 'global'
    def f():
        def g():
            print(x)

        g()

    f() # 'global'
    ```


4. 如果以上都找不到, 则会在`built-in`中引用.

    ```python
    def f():
        def g():
            print(x)

        g()

    f()

    # Traceback (most recent call last):
    #   File "<stdin>", line 1, in <module>
    #   File "<stdin>", line 6, in f
    #   File "<stdin>", line 4, in g
    # NameError: name 'x' is not defined
    ```


## Python Namespace Dictionaries
`python`提供了`globals()`和`locals()`两个`builit-in funtions`来获得`namespace dict`.

### The globals() function

```python
x = 'foo'

globals()
## {'__name__': '__main__', '__doc__': None, '__package__': None,
## '__loader__': <class '_frozen_importlib.BuiltinImporter'>, '__spec__': None,
## '__annotations__': {}, '__builtins__': <module 'builtins' (built-in)>,
## 'x': 'foo'}

x  # 'foo'
globals()['x']  # 'foo'
x is globals()['x']  # True
```

### The locals() function


```python
def f(x, y):
    s = 'foo'
    print(locals())

f(10, 0.5)
## {'s': 'foo', 'y': 0.5, 'x': 10}
```



## Modify Variables Out of Scope
`global`关键字, 可以当`local variable`变成`global variable`
```python
x = 20
def f():
    global x
    x = 40
    print(x)

f() # 40
x # 40
```
`global`关键字, 不能改变`enclosing variable`

```python
def f():
    x = 20
    def g():
        global x
        x = 40
    g()
    print(x)

f() # 20
x # 40
```
`nonlocal`关键字, 可以改变`enclosing variable`
```python
def f():
    x = 20
    def g():
        nonlocal x
        x = 40
    g()
    print(x)

f() # 40
```



参考:
https://realpython.com/python-namespaces-scope/