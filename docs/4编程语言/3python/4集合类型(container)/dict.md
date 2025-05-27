# dict





## 构造方法

```python
a = dict(one=1, two=2, three=3)  # **kwargs创建
b = {'one': 1, 'two': 2, 'three': 3}  # {}创建
c = dict({'three': 3, 'one': 1, 'two': 2})  # {}创建
d = dict(zip(['one', 'two', 'three'], [1, 2, 3]))  # 列表:列表创建
e = dict([('two', 2), ('one', 1), ('three', 3)])  # 列表[元组()]创建
a == b == c == d == e  # True
```

## 对象方法
方法|描述
--|--
len(d)|元素个数
d[key]|取值, `get(key[, default])`, 如果有等价`d[key]`, 没有则取`default`
d[key] = value|赋值, 如果没有则添加元素; `update({key,value})`,有则更新, 无则添加; `setdefault(key[, default])`, 如果有返回值, 如果没有则插入`default`,并返回`default`
del d[key]| 删除值
items()| 返回所有`(key, value)`对
values()| 返回所有的value
keys()|返回所有的key
pop(key[, default])|如果在字典中, 删除并返回
popitem()| 删除并返回`(key, value)`对


## 常用操作
1. 合并两个字典
```python
d1 = {'a':1, 'b':2}
d2 = {'c':3, 'd':4}
nd = {**d1, **d2}
nd = {d1, **d2} # 和上述等价
```

2. 两个列表转换为字典
```python
list1 = ["x","y","z"]
list2 = [1,2,3]
[{"a":i,"b":j} for i,j in zip(list1,list2)]  # [{'a': 'x', 'b': 1}, {'a': 'y', 'b': 2}, {'a': 'z', 'b': 3}]
dict(zip(list1,list2))  # {'x': 1, 'y': 2, 'z': 3}
```

3. 键值对反转
```python
kv = {'a': 1, 'b':2 , 'c': 3}
vk = dict(zip(kv.values(), kv.keys()))
```

4. 字典排序
```python
d = {'a': 1, 'b':2 , 'c': 3}
sorted(d.items(),key = lambda x:x[1],reverse = True) # sorted方法的使用,按value排序
sorted(d.items(),key = lambda x:x[0],reverse = True) # sorted方法的使用,按key排序
sorted(zip(d.values(),d.keys()))  # 按value排序,sorted方法默认按元组第一位排序
sorted(zip(d.keys(),d.values()))  # 按key排序
```

5. 取最大值和最小值
字典也是可迭代对象, 注意每次迭代的是key.

```python
d = {"a":1,"b":2}
max(d)  # 'b'  取最大的key
d[max(d)]  # 2 取最大key对应的value
max(d,key=lambda x:d[x])  # 'b', 取最大value对应的key,也可以简写成max(d,key=d.get)
d[max(d,key=lambda x:d[x])]  # 2 取最大value,也可以简写成d[max(d,key=d.get)], 或max(d.values())
```

6. 字典转对象

```python
class User(object):
    def __init__(self, entries): # entries既是字典
        self.__dict__.update(**entries) # __dict__本质是字典存储对象的属性
```

7. 字典推导

```python
dict={'a':1,'b':2, 'c':3, 'd':4, 'e':5}
{str(x):2*x for x in range(5)}  # {'0': 0, '1': 2, '2': 4, '3': 6, '4': 8}
{str(x):2*x for x in range(5) if x%2==0}  # {'0': 0, '2': 4, '4': 8}
{x:2*y for x,y in dict.items()}  # {'a': 2, 'b': 4, 'c': 6, 'd': 8, 'e': 10}

{str(x):2*x if x%2==0 else str(2*x):x for x in range(5)} # 还未支持
## File "<stdin>", line 1
## {str(x):2*x if x%2==0 else str(2*x):x for x in range(5)} # 还未支持
##                                        ^
## SyntaxError: invalid syntax
```