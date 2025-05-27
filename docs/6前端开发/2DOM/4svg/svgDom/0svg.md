# svg
加载慢是 SVG 的一个缺点。但是 SVG 也有自身的优点，比如它实现了 DOM 接口（比 Canvas 方便），不需要安装第三方扩展。

一个简单的 SVG 文档由 `<svg>` 根元素和基本的形状元素构成。另外还有一个g元素，它用来把若干个基本形状编成一个组。


SVG 是一种`XML`语言, 不同于`html`, 注意:
1. SVG 的元素和属性必须按标准格式书写，因为 XML 是区分大小写的（这一点和 HTML 不同）
2. SVG 里的属性值必须用引号引起来，就算是数值也必须这样做。


## 坐标和单位
SVG 使用的坐标系统或者说网格系统，和 Canvas 用的差不多（所有计算机绘图都差不多）以页面的左上角为 (0,0) 坐标点，坐标以像素为单位，x 轴正方向是向右，y 轴正方向是向下。

SVG 也可以定义绝对大小（比如使用“pt”或“cm”标识维度）同时 SVG 也能使用相对大小，只需给出数字，不标明单位，输出时就会采用用户的单位。

```htm
<svg width="100" height="100">…</svg>
```
上面的元素定义了一个 100*100px 的 SVG 画布，这里 1 用户单位等同于 1 屏幕单位。
```htm
<svg width="200" height="200" viewBox="0 0 100 100">…</svg>
```
上面定义的画布尺寸是 200*200px。但是，viewBox 属性定义了画布上可以显示的区域：从 (0,0) 点开始，100 宽*100 高的区域。这个 100*100 的区域，会放到 200*200 的画布上显示。于是就形成了放大两倍的效果。


## 基本形状
[参考](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Basic_Shapes)

## 路径
[参考](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths)

## 填充和边框
[参考](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Fills_and_Strokes)

不是所有的属性都能用 CSS 来设置。上色和填充的部分一般是可以用 CSS 来设置的，比如fill，stroke，stroke-dasharray等，但是不包括下面会提到的渐变和图案等功能。另外，width、height，以及路径的命令等等，都不能用 CSS 设置。


 SVG 规范将属性区分成 properties 和其他 attributes，前者是可以用 CSS 设置的，后者不能。


## 渐变
[参考](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Gradients)

## Patterns
也是一种渐变
[参考](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Patterns)

## 文本
[参考](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Texts)

## 基础变形(transform)
[参考](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Basic_Transformations)

## 剪切和遮罩

[参考](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Clipping_and_masking)











## 参考
- https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Introduction
- https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element
- https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model#svg_%E6%8E%A5%E5%8F%A3
- https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement


