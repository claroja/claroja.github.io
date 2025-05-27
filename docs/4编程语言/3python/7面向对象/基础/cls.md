# cls


`cls`是类本身 `cls(entries)`既`User(entries)`，让后会继续调用`__new__`和`__init__`创建和初始化对象

通过这个方式，既使用`@classmethod`来创建了新的对象

```python
class User(object):
    def __init__(self, entries):
        self.__dict__.update(**entries)

    @classmethod
    def from_json(cls,path="./user.json"):
        entries = json.load(open(path,'r'))
        return cls(entries)
```