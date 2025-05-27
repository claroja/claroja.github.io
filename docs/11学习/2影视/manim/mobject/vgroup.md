# vgroup

## vgroup

`arrange()`|常用于`VGroup`对象
`shuffle`|随机排列子mobject, `VGroup`
`sort`|随机排列子mobject

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



参考:
https://docs.manim.community/en/stable/reference/manim.mobject.types.vectorized_mobject.VGroup.html