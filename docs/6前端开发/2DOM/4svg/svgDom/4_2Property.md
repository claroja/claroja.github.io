[SVG规范](https://www.w3.org/TR/SVG/propidx.html)将属性区分成properties和attributes.
attributes: 不可用CSS设置, 如圆形的x, y, r属性.
properties: 可用CSS设置, 如stroke, fill.





1. fill: 填充色
2. fill-opacity: 填充色透明程度
3. stroke: 描边色
4. stroke-opacity: 描边色透明度
5. stroke-linecap: 描边两端样式, 可选属性有: `butt`, `square`, `round`
6. stroke-linejoin: 控制两条描边线段之间的连接方式, 可选属性有: `miter`, `round`, `bevel`
7. stroke-dasharray:
    1. stroke-dasharray="5,5", 表示先做 5 个像素单位的填色，紧接着是 5 个空白单位，然后又是 5 个单位的填色。
    2. stroke-dasharray="5,10,5", 表示首先渲染 5 个填色单位，10 个空白单位，5 个填色单位，然后回头以这 3 个数字做一次循环



## 参考
1. https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Fills_and_Strokes