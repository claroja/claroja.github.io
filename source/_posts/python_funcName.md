---
title: python_funcName
toc: true
date: 2021-07-11 12:43:57
---
# 外部获取方法名称
```python
def create():
    print("hello word")
    
print(create.__name__)
>>> create
```


# 内部获取方法名称
```python
import sys
def create():
    print(f"当前方法名：{sys._getframe().f_code.co_name}")
    
create()
>>> 当前方法名：create
```

# 获取类及当前方法名称

```python
import sys
class Object():

    def filter(self,*args, **kwargs):
        return Filter(*args, **kwargs)


    def create(self):
        print(f'当前类名称：{self.__class__.__name__}')
        print(f"当前方法名：{sys._getframe().f_code.co_name}")
        

o=Object()
o.create()
>>> 当前类名称：Object
>>> 当前方法名：create
```