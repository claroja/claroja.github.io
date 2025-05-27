# ValueTracker

一个可以用来追踪值变化的`mobject`

```python
from manim import *

class ValueTrackerExample(Scene):
    def construct(self):
        tracker = ValueTracker(0)
        label = Dot(radius=3).add_updater(lambda x : x.set_x(tracker.get_value()))
        self.add(label, tracker)
        tracker.add_updater(lambda mobject, dt: mobject.increment_value(dt))
        self.wait(2)
```

![](./ValueTracker/1.gif)















参考:
https://docs.manim.community/en/stable/reference/manim.mobject.value_tracker.ValueTracker.html?highlight=ValueTracker#valuetracker