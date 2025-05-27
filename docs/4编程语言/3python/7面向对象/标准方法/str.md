# str


`__str__(self)`可以来控制`print()`和`str()`方法的返回

```python
class Person():

    def __str__(self):
        return "重写了父类的__str__方法"


wang = Person()  # 创建实例
str(wang)  # '重写了父类的__str__方法'
print(str(wang))  # 重写了父类的__str__方法, 如果不重写会默认使用父类的__str__()方法, 打印<__main__.Person object at 0x000001B31434CA30>
```