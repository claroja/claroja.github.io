# text

`Text`对象用来处理文字, 它继承的继承关系是:
`TextMobject`(Text Math object) -> `SVGMobject`(SVG Vectorized Math object) -> `VMobject`(Vectorized Math object) -> `Mobject`(Math object)

所以`Text`也可以使用`SVGMobject`, `VMobject`和`Mobject`的方法.




```python
from manim import *

class MultipleFonts(Scene):
    def construct(self):
        morning = Text("வணக்கம்", font="sans-serif")
        japanese = Text(
            "日本へようこそ", t2c={"日本": BLUE}
        )  # works same as ``Text``.
        mess = Text("Multi-Language", weight=BOLD)
        russ = Text("Здравствуйте मस नम म ", font="sans-serif")
        hin = Text("नमस्ते", font="sans-serif")
        arb = Text(
            "صباح الخير \n تشرفت بمقابلتك", font="sans-serif"
        )  # don't mix RTL and LTR languages nothing shows up then ;-)
        chinese = Text("臂猿「黛比」帶著孩子", font="sans-serif")
        self.add(morning, japanese, mess, russ, hin, arb, chinese)
        for i,mobj in enumerate(self.mobjects):
            mobj.shift(DOWN*(i-3))
```
![](./text/1.png)
