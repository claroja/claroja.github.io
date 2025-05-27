# Line



```python
from manim import *

class MovingDots(Scene):
    def construct(self):
        l1=Line(LEFT,RIGHT).set_color(RED)
        l1.add_updater(lambda z, dt: z.become(Line(LEFT+dt*1,RIGHT+dt*1).set_color(YELLOW)))
        self.add(l1)
```
直接使用`updater`的`dt`无法控制动画的长短
![](./Line/2.gif)


```python
from manim import *

class MovingDots(Scene):
    def construct(self):
        tracker = ValueTracker(0)
        l1=Line(LEFT,RIGHT).set_color(RED)
        l1.add_updater(lambda z, dt: z.become(Line(LEFT+tracker.get_value(),RIGHT+tracker.get_value())))
        self.add(l1)
        self.play(tracker.animate.set_value(3),run_time=3)
```
1. 使用`play`来控制动画的时间
2. 使用`ValueTracker()`来控制数量变化



[](./Line/3.gif)






```python
from manim import *

class MovingDots(Scene):
    def construct(self):
        d1,d2=Dot(color=BLUE),Dot(color=GREEN)
        l1=Line(d1.get_center(),d2.get_center()).set_color(RED)
        x=ValueTracker(0)
        y=ValueTracker(0)
        d1.add_updater(lambda z: z.set_x(x.get_value()))
        d2.add_updater(lambda z: z.set_y(y.get_value()))
        l1.add_updater(lambda z: z.become(Line(d1.get_center(),d2.get_center())))
        self.add(d1,d2,l1)
        self.play(x.animate.set_value(5))
        self.play(y.animate.set_value(4))
        self.wait()
```


![](./Line/1.gif)