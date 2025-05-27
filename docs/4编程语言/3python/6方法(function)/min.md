# min




`def max(*args, key=None)`
max和min是返回可迭代对象(iterable)的最大或最小值.
```python
a = [1,2,3]
max(a)  # 3
```
参数`key`可以指定比较的对象:
```python
b = ["11","100","2"]
max(b)  # '2', 是因为在字符串比较时, 默认比较的是第一位字符的ascii码
max(b,key=lambda x:len(x))  # 这里传入len, 既比较列表b中len(x), 然后取最大值. 可简写成max(b,key=len)
max(b,key=lambda x:int(x))  # 传入int方法, 既比较int(x), 然后取最大值. 等价于max(b,key=int)
```

```python
lis = [(3,'a'), (2,'b'), (1,'c')]
max(lis)  # (3, 'a')  默认, 比较元组的第0位元素
max(lis, key=lambda x:x[1])  # (1, 'c'), 使用key, 比较元组的第1位元素
```


## 字典
字典也是可迭代对象, 注意每次迭代的是key.

```python
d = {"a":1,"b":2}
max(d)  # 'b'  取最大的key
d[max(d)]  # 2 取最大key对应的value
max(d,key=lambda x:d[x])  # 'b', 取最大value对应的key,也可以简写成max(d,key=d.get)
d[max(d,key=lambda x:d[x])]  # 2 取最大value,也可以简写成d[max(d,key=d.get)], 或max(d.values())
```