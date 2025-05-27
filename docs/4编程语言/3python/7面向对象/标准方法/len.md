# len

当使用`len()`函数时触发, 必须返回一个整型


```python
class Person():
    lis = [1,2,3]

    def __len__(self):
        return len(self.lis)


wang = Person()  # 创建实例
len(wang)  # 3
```