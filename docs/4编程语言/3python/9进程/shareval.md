# shareval




## 1.共享数值型
```python
from multiprocessing import Process, Value
def  func(num):  
    num.value=11  #子进程改变数值的值，主进程跟着改变  
  
if  __name__=="__main__":  
    num=multiprocessing.Value("d",10.0) #在内存中开辟共享空间，所以要指定类型"d"
    print(num.value)  
    p=multiprocessing.Process(target=func,args=(num,))  
    p.start()  
    p.join()  
    print(num.value)  

```

## 2.共享数组型

```python
import multiprocessing  
  
def  func(num):  
    num[0]=0
if  __name__=="__main__":  
    num=multiprocessing.Array("i",[1,2,3,4,5])
    print(num[:])
  
    p=multiprocessing.Process(target=func,args=(num,))  
    p.start()   
    p.join()  
    print(num[:])  
```


## 3.共享字典
```python
import multiprocessing
  
def func(mydict):  
    mydict["index1"]="aaaaaa"  

if __name__=="__main__":  
    mydict=multiprocessing.Manager().dict() 
    p=multiprocessing.Process(target=func,args=(mydict,))  
    p.start()  
    p.join()  
    print(mydict)  

```