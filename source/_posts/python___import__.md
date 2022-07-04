`__import__(name, globals=None, locals=None, fromlist=(), level=0)`

1. 该函数会导入 name 模块
2. 有可能使用给定的 globals 和 locals 来确定如何在包的上下文中解读名称。标准实现完全不使用其 locals 参数，而仅使用 globals 参数来确定import语句的包上下文。
3. fromlist 给出了应该从由 name 指定的模块导入对象或子模块的名称。当 name 变量的形式为 package.module 时，通常将会返回最高层级的包（第一个点号之前的名称），而 不是 以 name 命名的模块。 但是，当给出了非空的 fromlist 参数时，则将返回以 name 命名的模块。
4. level 指定是使用绝对还是相对导入。 0 (默认值) 意味着仅执行绝对导入。 level 为正数值表示相对于模块调用__import__()的目录，

`__import__(module)`相当于import module
`__import__(package.module)`相当于`from package import name`，如果`fromlist`不传入值，则返回`package`对应的模块，如果`fromlist`传入值，则返回`package.module`对应的模块。


```python
import a
# 等价于
a = __import__("a", globals(), locals())
```
`globals()`和`locals()`看起来很奇怪, 在上面的例子中是不需要的, 但是在实现`import`关键字的时候是传入的, 所以我们这么做.

```python
import a.b
# 不等价
a = __import__("a.b", globals(), locals())
```
我们在使用关键字`import`导入的是`a.b`, 而使用`__import__()`方法时仍然是赋值给`a`, 因为`__import__()`确认`a.b`存在后, 让然返回的是`a`

```python
from a.b import c
# 等价于
c = __import__('a.b', globals(), locals(), ['c']).c
```
1. 参数中, 多了`['c']`, 这仅仅表示`__import__()`确认`a.b`中是否包含了`c`
2. `__import__()`返回的是`a.b`(这次返回的不是`a`)
3. 因为返回的是`a.b`所以我们要加上`.c`才能真正访问到`a.b.c`


```python
from ..a import b
# 等价于
b = __import__('a', globals(), locals(), ['b'], 2).b
```
`..a`中前两个`..`作为了`__import__()`的最后一个参数(这里是2)



```python
import a as b
# 等价于
b = __import__("a", globals(), locals())
```


```python
from a.b import c as d
# 等价于
d = __import__('a.b', globals(), locals(), ['c'], 0).c
```

参考:
https://snarky.ca/unravelling-the-import-statement/
https://alltodev.com/how-to-use-the-__import__-function-to-import-a-name-from-a-submodule