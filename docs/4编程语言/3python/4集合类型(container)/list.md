# list

`class list([iterable])`

## 构造方法
- 使用一对方括号表示空列表：`[]`
- 使用方括号，用逗号分隔项目`[a]`, `[a, b, c]`
- 使用列表推导式： `[x for x in iterable]`
- 使用类型构造函数：`list()或list(iterable)`

### 序列通用操作
|	操作	|	结果	|
|	--	|	--	|
|	x in s	|	True如果s的项目等于x，则False	|
|	x not in s	|	False如果s的项目等于x，否则True	|
|	s + t	|	s和t的并置	|
|	s * n or n * s	|	相当于将s添加到自身n次	|
|	s[i]	|	i项目s，来源0	|
|	s[i:j]	|	从i到j的s	|
|	s[i:j:k]	|	slice of s from i to j with step k	|
|	len(s)	|	长度s	|
|	min(s)	|	s的最小项	|
|	max(s)	|	s的最大项目	|
|	s.index（x [， i [， j]]）	|	在s中（在索引i之后或索引j之前）的x	|
|	s.count(x)	|	s中x的总出现次数	|


### 可变序列操作
|	操作	|	结果	|
|	--	|	--	|
|	s [i] = x	|	x替换s的项目i	|
|	s [i：j] = t	|	从可迭代的t的内容替换从i到j的s	|
|	del s [i：j]	|	与s [i：j] = []	|
|	s [i：j：k] = t	|	s[i:j:k]的元素被t取代	|
|	del s [i：j：k]	|	从列表中删除s[i:j:k]的元素	|
|	s.append(x)	|	将x追加到序列的末尾（与s [len（s）：len（s）] = [x]）	|
|	s.clear()	|	从s中删除所有项目（与del s [：]相同）	|
|	s.copy()	|	创建s的浅拷贝（与s[:]相同）	|
|	s.extend(t)或s + = t	|	使用t的内容延伸s（大部分与s [len（s）：len（s）] t3 > = t）	|
|	s * = n	|	更新s，其内容重复n次	|
|	s.insert（i， x）	|	在由i给出的索引处插入x到s（与s [i：i] = [x]）	|
|	s.pop([i])	|	在i检索项目，并从s中删除它	|
|	s.remove(x)	|	从s中移除第一个项目s [i] == x	|
|	s.reverse()	|	反转s的项目	|


**解包方式**

```python
t = (1, 2, 3, 4)
first, *middle, last = t
middle
#[2, 3]
_, *rest = t
rest
#[2, 3, 4]
```


**切片**

```python
list[start:stop:step]
s = slice(start,stop,step)
list[s]
```

**列表推导式**

```python
[2*x for x in range(5)] # 
#[0, 2, 4, 6, 8]
[2*x for x in range(5) if x%2==0] # if过滤
#[0, 4, 8]
[2*x if x%2==0 else 0.5*x for x in range(5)]  # if过滤+更改
#[0, 0.5, 4, 1.5, 8]
[(x,y) for x in range(5) for y in range(5)] # 笛卡尔
#[(0, 0), (0, 1), (0, 2), (0, 3), (0, 4), (1, 0), (1, 1), (1, 2), (1, 3), (1, 4), (2, 0), (2, 1), (2, 2), (2, 3), (2, 4), (3, 0), (3, 1), (3, 2), (3, 3), (3, 4), (4, 0), (4, 1), (4, 2), (4, 3), (4, 4)]
dict={'a':1,'b':2, 'c':3, 'd':4, 'e':5}
[(x,y) for x,y in dict.items()] #根据字典生成
#[('a', 1), ('b', 2), ('c', 3), ('d', 4), ('e', 5)]
```

**索引迭代**
enumerate()可以把一个list变成索引-元素对。

```python
for i, value in enumerate(['A', 'B', 'C']):print(i, value) 
```

**zip**
zip()可以将可迭代的对象作为参数，将对象中对应的元素打包成一个个元组，并返回一个迭代器，常用于同时遍历两个可迭代对象。

```python
li1 = ['Python' ,'JavaScript', 'Java']
li2 = [1, 2, 3]
nl = zip(li1, li2)
#[('Python', 1), ('JavaScript', 2), ('Java', 3)]
```
配合dict可以生成字典
```python
l1 = ['A', 'B', 'C']
l2 = [1, 2, 3]
dict(zip(l1, l2))
{'A': 1, 'B': 2, 'C': 3}
```

同时遍历两个列表:
```python
name_list = ['张三', '李四', '王五']
age_list = [54, 18, 34]
for name, age in zip(name_list, age_list):
    print(name, ':', age)
```


**列表合并**
除了用extend方法还可以用
```python
l1 = [1, 2]
l2 = [3, 4]
l3 = [*l1, *l2]
l4 = sum([l1, l2],[]) # 利用了sum的特性
l5 = li+li # 字典+法的重载
```

**列表值的判定**
```python
a=[1,2]
a==1,2  # 返回一个元组，元组的第二个值是第二个值，这个在numpy中可以应用
(False, 2)
```


**map**

```python
a = [1,2,3,4]
list(map(lambda x:x*2,a))
```

**flatten**
```python
from itertools import chain
a=[[1,3],[1,2]]
list(chain(*a))
```

```python
from itertools import chain
wordsList = ["hello tom hello","aa bb"]
wordsListSplit = list(map(lambda x:x.split(" "),wordsList))
list(chain(*wordsListSplit))
```
scala中有flatmap函数完成这个操作，既先flat再map



**filter**
```python
lst = [("a",3),("b",1),("c",2)]
list(filter(lambda x:x[1]>2,lst))
```

**sort**

```python
sorted("This is a test string from Andrew".split(), key=str.lower, reverse=True)  # 不区分大小写，默认升序reverse=False
student_tuples = [('john', 'A', 15),('jane', 'B', 12),('dave', 'B', 10),]
sorted(student_tuples, key=lambda student: student[2])  # 按元组第二个位置排序
```

**reduce**

```python
from functools import reduce
lst = [1,2,3,4,5]
reduce(lambda x,y: x+y,lst)
```


https://stackoverflow.com/questions/952914/how-to-make-a-flat-list-out-of-list-of-lists/952952?r=SearchResults#952952
