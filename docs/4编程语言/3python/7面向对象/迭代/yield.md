# yield


To understand what `yield` does, you must understand what `generators` are. And before you can understand generators, you must understand `iterables`.


## Iterables
When you create a list, you can read its items one by one. Reading its items one by one is called iteration:
```python
mylist = [1, 2, 3]
for i in mylist:
   print(i)
## 1
## 2
## 3
```
Everything you can use `for... in...` on is an `iterable`; lists, strings, files...

These iterables are handy because you can read them as much as you wish, but you store all the values in memory and this is not always what you want when you have a lot of values.

## Generators
`Generators` are `iterators`, a kind of iterable you can **only iterate over once**. Generators do not store all the values in memory, they generate the values on the fly:

```python
mygenerator = (x*x for x in range(3))
for i in mygenerator:
   print(i)
## 0
## 1
## 4
```
It is just the same except you used `()` instead of `[]`. BUT, you cannot perform for i in mygenerator a second time since generators can only be used once: they calculate 0, then forget about it and calculate 1, and end calculating 4, one by one.

## yield
`yield` is a keyword that is used like return, except the function will return a generator.

```python
def create_generator():
   mylist = range(3)
   for i in mylist:
       yield i*i
mygenerator = create_generator() # create a generator

for i in mygenerator:
    print(i)
## 0
## 1
## 4
```
The first time the `for` calls the generator object created from your function, it will run the code in your function from the beginning until it hits `yield`, then it'll return the first value of the loop. 
Then, each subsequent call will run another iteration of the loop you have written in the function and return the next value. 
This will continue until the `generator` is considered empty, which happens when the function runs without hitting `yield`. That can be because the loop has come to an end, or because you no longer satisfy an "if/else".
To master yield, you must understand that when you call the function, the code you have written in the function body does not run. The function only returns the generator object, this is a bit tricky.
your function will return a huge set of values that you will only need to read once.












python提供yield表达式，简化迭代器的创建。
```python
from collections.abc import *
def MyRange(end):
    start = 0
    while start < end:
        yield start
        start += 1



a = MyRange(4)
print(isinstance(a, Iterator)) # True
print(isinstance(a, Iterable)) # True
for i in a:
    print(i)
```
1.当我们调用这个生成器函数的时候，它返回的是一个迭代器叫做生成器。生成器是一种特殊的迭代器。
2.yield经常配合while使用
3.上述代码等同于等同于 在python __iter__&__next__中已经实现了迭代器和迭代对象，如下
```python
class MyRange(object):
    def __init__(self, end):
        self.start = 0
        self.end = end

    def __iter__(self):
        return self

    def __next__(self):
        if self.start < self.end:
            ret = self.start
            self.start += 1
            return ret
        else:
            raise StopIteration

a = MyRange(4)

for i in a:
    print(i)
```


参考：
https://stackoverflow.com/questions/231767/what-does-the-yield-keyword-do/231855#231855
https://www.jianshu.com/p/5ee724a8c366