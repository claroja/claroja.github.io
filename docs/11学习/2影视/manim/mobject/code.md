# code


`Code`对象继承了`VGroup`, 包含了三个对象:
1. `listing.background_mobject` 背景
2. `listing.line_numbers` 代码行数, 是一个`Paragraph`对象
3. `listing.code` 代码, 也是一个`Paragraph`

通过`Paragraph`对象, 我们可以获得每一行的代码和代码的行数

```python
from manim import *

class CodeFromString(Scene):
    def construct(self):
        code = '''from manim import Scene, Square
class FadeInSquare(Scene):
    def construct(self):
        s = Square()
        self.play(FadeIn(s))
        self.play(s.animate.scale(2))
        self.wait()
'''
        rendered_code = Code(code=code, tab_width=4, background="rectangle",
                            language="Python", font="Monospace")
        # 展示代码的外框background_mobject
        self.play(Create(rendered_code.background_mobject))
        self.play(Uncreate(rendered_code.background_mobject))
        # 展示代码的编号line_numbers
        self.play(Create(rendered_code.line_numbers ))
        self.play(Uncreate(rendered_code.line_numbers ))
        # 展示代码code
        # self.play(Create(rendered_code.code))
        # self.play(Uncreate(rendered_code.code)) # Create包含了add, 而Uncreate包含了remove. 如果不注释,则不能按行显示
        # 按行展示代码code[i]
        for i in range(len(rendered_code.code)):
            line_code = Create(rendered_code.code[i])
            line_rec = Create(SurroundingRectangle(rendered_code.code[i], corner_radius=0.2))
            self.play(line_code)
            self.play(line_rec)
            # self.play(Uncreate(rendered_code.code[i]))
            # self.play(Uncreate(SurroundingRectangle(rendered_code.code[i], corner_radius=0.2)))

```

参考:
https://docs.manim.community/en/stable/reference/manim.mobject.text.code_mobject.Code.html