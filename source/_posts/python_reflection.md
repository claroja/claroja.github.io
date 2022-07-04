---
title: python_reflection
toc: true
date: 2021-01-20 22:03:54
---

通过字符串操作对象的属性或方法(注意模块也是对象,所以也可以通过字符串操作模块)


```python
class Teacher(object):
    def __init__(self,name):
        self.name = name


teacher = Teacher('wang')

# hasattr(object,'attrName') 判断instance中是否包含某个属性
hasattr(teacher,'name')

# getattr(object,'attrName',default=None) 获得实例中的属性
getattr(teacher,'name',None)

# setattr(object,'attrName',value) 给实例设置属性
setattr(teacher,'age',18)

# delattr(object,'attrName') 删除实例的属性
delattr(teacher,'age')

```


应用:
`flask`中通过传入`url`来调取具体的方法,就是用的反射