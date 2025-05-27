# svg_pattern
[参考官网](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Patterns)


`<pattern>`需要放在`SVG`文档的`<defs>`内部。

在 pattern 元素内部你可以包含任何之前包含过的其他基本形状


如下图, 在 pattern 中绘制两个矩形（两个矩形互相重叠，一个矩形是另一个矩形大小的二倍，且用于填充整个 pattern）和一个圆。

```xml

<defs>
<linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
    <stop offset="5%" stop-color="red" />
    <stop offset="95%" stop-color="orange" />
</linearGradient>

<pattern id="Pattern" x="0" y="0" width=".25" height=".25">
    <rect x="0" y="0" width="50" height="50" fill="skyblue" />
    <rect x="0" y="0" width="25" height="25" fill="url(#Gradient2)" />
</pattern>
</defs>

<rect fill="url(#Pattern)" stroke="black" x="0" y="0" width="200" height="200" />

```








