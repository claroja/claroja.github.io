# bool

当使用`bool()`函数转换时触发

```python
class Person():

    def __bool__(self):
        return False


wang = Person()  # 创建实例
bool(wang) # False
```