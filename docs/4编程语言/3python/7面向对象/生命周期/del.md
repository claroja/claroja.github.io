# del

```py
class Person:
    def __del__(self):
        print("del")

wang = Person()  # 创建实例
del wang
```