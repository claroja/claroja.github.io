# interface



```python
## 接口,所有方法都是抽象方法的抽象类
from abc import abstractmethod, ABCMeta
class Person(metaclass = ABCMeta):
    @abstractmethod
    def say(self):
        pass
    @abstractmethod
    def eat(self):
        pass
    @property  # 定义接口属性
    @abstractmethod
    def age(self):
        pass


class Teacher(Person):
    age = 18
    def say(self):
        print("teacher")

    def eat(self):
        print("shitang")

teacher = Teacher()
teacher.say()
teacher.eat()
print(teacher.age)
```


