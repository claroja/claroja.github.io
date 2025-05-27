# with



```python
class test:
    def __enter__(self):
        return "enter"
    def __exit__(self, exc_type, exc_value, traceback):
        if exc_type == IndexError:
            print(exc_value, type(exc_value))
            print(traceback)
            return True

with test() as test: # test()不是调用的__call__方法，而是__enter__方法
    print(A)
    a = []
    a[0]
```

`__enter__`在`with`语句后自动调用，可以给`as`后的变量赋值

`__exit__`用于捕获异常，返回`boolean`对象，如果为`True`异常被忽略，如果为`False`异常被抛出
三个参数分别是：
1.`exc_type` 异常类型
2.`exc_value`异常值
3.`traceback`

参考：
https://www.jianshu.com/p/fc25fe7d7cf2