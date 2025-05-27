# repr

`repr`默认调用的是`__repr__()`方法, 默认实现时为了利于解释器读写
```py
repr("wang")  # "'wang'" , 加了单引号, 更利于解释器阅读
str("wang")   # 'wang', 更利于人阅读
```



```py
class Person():

    def __str__(self):
        return "重写了父类的__str__方法"

    def __repr__(self):
        return "重写了父类的__repr__方法"


wang = Person()  # 创建实例
str(wang)  # '重写了父类的__str__方法'
repr(wang) # "重写了父类的__repr__方法"
print(wang)  # `重写了父类的__str__方法`. __str__()方法覆盖了__repr__()方法
```