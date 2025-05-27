# become

将一个`VMobject`对象转换为另一`VMobject`对象



```python
from manim import *

class BecomeScene(Scene):
    def construct(self):
        vmo = VMobject()
        circ = Circle(fill_color=RED, fill_opacity=0.8)
        square = Square(fill_color=BLUE, fill_opacity=0.2)
        
        self.add(vmo)
        self.wait(0.5)
        vmo.become(circ)
        self.wait(0.5)
        circ.become(square)
        self.wait(0.5)
```









参考:
https://docs.manim.community/en/stable/reference/manim.mobject.mobject.Mobject.html?highlight=add_updater#manim.mobject.mobject.Mobject.become