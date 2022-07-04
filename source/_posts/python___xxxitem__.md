---
title: python___xxxitem__
toc: true
date: 2021-01-20 22:03:54
---

`__setitem__`:每当属性被赋值的时候都会调用该方法，因此不能再该方法内赋值 self.name = value 会死循环
`__getitem__`:当访问不存在的属性时会调用该方法
`__delitem__`:当删除属性时调用该方法


```python
class A(object): 

    def __setitem__(self,name,value): 
        print("__setitem__被调用")
        self.__dict__[name] = value 
       
    def __getitem__(self,name): 
        print("__getitem__被调用")
        return self.__dict__[name] 
       
    def __delitem__(self,name): 
        print("__delitem__被调用")
        del self.__dict__[name] 
       
if __name__ == "__main__": 
    a = A() 
    a['x']=1
    a['x']
    del a['x']
```


参考：
https://www.cnblogs.com/royfans/p/8191253.html