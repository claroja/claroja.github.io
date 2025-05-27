# getattribute

当访问对象成员时, 触发, 无论成员是否存在.
作用: 在访问成员时, 对其做一些处理.
`__getattribute__(self,attr)`中, 参数attr是属性的名称(注意, 不是属性对应的值)


下例中: 
当访问`name`属性时，会自动调用`__getattribute__`方法，`name`属性也会被传入`__getattribute__`方法中，既上例中的`attr`参数。然后调用父类的`return object.__getattribute__(self,attr)`方法，经过一系列操作后，返回属性的值。
如果省去`return object.__getattribute__(self,attr)`则无法得到属性。因为父类的`__getattribute__`会最终调用`__getattr__`来返回相应的值。
通过类访问的类的属性不会通过`__getattribute__`方法
```python
class Tree(object):
    def __init__(self,name):
        self.name = name
    def __getattribute__(self,attr):
        print("__getattribute__ 执行")
        print(attr)
        return object.__getattribute__(self,attr)


aa = Tree("wang")
print(aa.name)

# 注意要单独执行文件(不要在python console中逐行输入), 才有以下输出
# __getattribute__ 执行
# name
# wang

```

注意:
1. 注意避开无线循环(因为可以访问`__dict__`,`__dict___`又可以访问属性，安全的做法是使用父类的方法`super().__getattribute__`