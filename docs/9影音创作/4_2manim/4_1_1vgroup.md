# vgroup



vgroup类似python的list

- `add()`: 添加到最前
- `add_to_back()`: 添加到最后
- `remove()`: 删除mobject对象

通过下标可以访问



vgroup整体也是一个vmobject, 可以使用相应的方法, 比如移动`shift()`


## 方法

- `arrange()`|本质是对相邻元素进行`next_to()`操作
- `shuffle`|随机排列子mobject, `VGroup`
- `sort`|随机排列子mobject

```python
from manim import *

class ArcShapeIris(Scene):
    def construct(self):
        vg = VGroup()
        triangle, square = Triangle(), Square()
        vg.add(triangle, square)
        # vg[0]
        self.add(vg[0])
```



## 参考:

- https://docs.manim.community/en/stable/reference/manim.mobject.types.vectorized_mobject.VGroup.html
- https://www.bilibili.com/video/BV1kA411b7kq/