# color


1. 直接使用常量调用, 注意全部都是大写:
```python
from manim import RED, GREEN, BLUE
RED
## '#FC6255'
```
2. 使用`Colors`对象调用`value`
对应的值可参考[官网](https://docs.manim.community/en/stable/reference/manim.utils.color.Colors.html)
```python
from manim.utils.color import Colors
Colors.red.value
## '#FC6255'
```
