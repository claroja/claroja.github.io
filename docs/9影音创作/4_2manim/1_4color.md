# color

## 最佳实践


直接使用常量调用, 注意全部都是大写:

```python
from manim import RED, GREEN, BLUE
RED
## '#FC6255'
```




## 预设颜色

Manim 中有多种预定义颜色可供使用：

- color.manim_colors 中列出的颜色会加载到 Manim 的全局命名空间中。
- color.AS2700、color.BS381、color.DVIPSNAMES、color.SVGNAMES、color.X11 和 color.XKCD 中的颜色，需通过其对应模块（已在 Manim 全局命名空间中可用）访问。例如：

```python
from manim import XKCD
XKCD.AVOCADO
ManimColor('#90B134')
```

以下模块包含预定义颜色常量：

- [manim_colors](https://docs.manim.community/en/stable/reference/manim.utils.color.manim_colors.html)：已纳入全局命名空间的颜色
- [AS2700](https://docs.manim.community/en/stable/reference/manim.utils.color.AS2700.html)：澳大利亚颜色标准
- [BS381](https://docs.manim.community/en/stable/reference/manim.utils.color.BS381.html)：英国颜色标准
- [DVIPSNAMES](https://docs.manim.community/en/stable/reference/manim.utils.color.DVIPSNAMES.html)：dvips 颜色体系
- [SVGNAMES](https://docs.manim.community/en/stable/reference/manim.utils.color.SVGNAMES.html)：SVG 1.1 颜色标准
- [XKCD](https://docs.manim.community/en/stable/reference/manim.utils.color.XKCD.html)：源自 XKCD 颜色名称调查的颜色
- [X11](https://docs.manim.community/en/stable/reference/manim.utils.color.X11.html)：X11 颜色体系









