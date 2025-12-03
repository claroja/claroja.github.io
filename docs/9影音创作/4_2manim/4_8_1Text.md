# [Text](https://docs.manim.community/en/stable/reference/manim.mobject.text.text_mobject.Text.html)

继承关系:

Text -> SVGMobject -> VMobject -> Mobject

Text对象实际上是导入了字体的SVG的图片.

重要参数:

- `text` (`str`): 文本内容
- `font` (`str`): 字体

    - `Text("你好", font="KaiTi")`: 楷体
    - `Text("你好", font="Microsoft YaHei UI")`: 微软雅黑

    查看所有可使用的字体:

    ```python
    import manimpango
    print(manimpango.list_fonts())
    ```

- `warn_missing_font` (`bool`): 字体缺失时是否警告提示
- `fill_opacity` (`float`): 透明度
- `stroke_width` (`float`): 字体线条粗细
- `color` (`str`): 颜色
    - `Text("你好", color=RED)`: 单一颜色
- `gradient` (`tuple`): 渐变色
    - `Text("你好", gradient=(RED, BLUE))`: 渐变色

- `line_spacing` (`float`): 行间距（多行文本时生效）

    - `Text("你好", line_spacing=2)`

- `slant` (`str`): 斜体
    - `Text("Hello Manim", slant=ITALIC)`
- `weight` (`float`): 粗体

    - `Text("Hello Manim", weight=BOLD)`
- 文字局部设置
    - `t2f` (`dict`): 设置文本局部的字体

        ```python
        text = Text(
            "Hello Manim",
            t2f={
                "Hello": "STLiti",
                "Manim": "Harrington",
            },
        )
        ```

    - `t2w` (`dict`): 设置文本局部的粗体
    - `t2s` (`dict`): 设置文本局部的斜体

        ```python
        text = Text(
            "Hello Manim",
            t2s={"Hello": ITALIC},
            t2w={"Manim": BOLD},
        )
        ```

    - `t2c` (`dict`): 设置文本局部的颜色

        ```python
        text = Text(
            "Hello Manim",
            t2c={
                "Hello": RED,
                "Manim": GREEN,
            },
        )
        ```

    - `t2g` (`dict`): 设置文本局部的渐变色

        ```python
        text = Text(
            "Hello1 Manim2",
            t2g={
                "ello1": (RED, BLUE),
                "anim2": (BLUE, GREEN),
            },
        )
        ```

- `height` (`float`): 文本SVG高度
- `width` (`float`): 文本SVG宽度

    ✨注意如果`Text("一")`中是一个字, 则该字就是一个SVG图片, 如果`Text("一二")`是两个字, 则这两个字是一个SVG图片.

## 两行字, 列对齐

每个字的svg图片大小不一样, 在使用arrange时会导致两行字无法对齐. 使用widht限制字体的大小可以解决, 但是字体会变的大小不一.

```python
from manim import *
left_list = ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
right_List = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]

class CreateCircle(Scene):
    def construct(self):

        vg1 = VGroup(*[Text(i,width=0.5,font='KaiTi') for i in left_list]).arrange(RIGHT,buff=0.2)
        vg2 = VGroup(*[Text(i,width=0.5,font='KaiTi') for i in right_List]).arrange(RIGHT,buff=0.2)
        vg1.center().shift(UP * 0.3)
        vg2.align_to(vg1, LEFT).shift(DOWN * 0.3)
        self.add(vg1,vg2)
```

所以实现两行字的对齐不要使用vgroup和arrange, 而是单独给每个

```python
from manim import *

left_list = ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
right_List = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]

class CreateCircle(Scene):
    def construct(self):

        vg1 = VGroup(*[Text(item,font_size=35,font='KaiTi').to_edge(LEFT, buff=0.7*i) for i,item in enumerate(left_list)])
        vg2 = VGroup(*[Text(item,font_size=35,font='KaiTi').to_edge(LEFT, buff=0.7*i) for i,item in enumerate(right_List)])
        vg1.to_edge(LEFT).shift(UP * 0.3)
        vg2.to_edge(LEFT).shift(DOWN * 0.3)
        self.add(vg1,vg2)
```

## 参考

- <https://www.cnblogs.com/wang_yb/p/18284013>
