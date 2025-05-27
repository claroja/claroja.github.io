# svg_gradient



## 线性渐变
[线性渐变参考](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Gradients#%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98)

```xml
<linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
    <stop offset="0%" stop-color="red" />
    <stop offset="50%" stop-color="black" stop-opacity="0" />
    <stop offset="100%" stop-color="blue" />
</linearGradient>


<rect x="10" y="120" rx="15" ry="15" width="100" height="100" fill="url(#Gradient2)" />

```


`<stop>`结点，这些结点通过指定位置的`offset`（偏移）属性和`stop-colo`（颜色中值）属性来说明在渐变的特定位置上应该是什么颜色.

偏移量应该始终从0%开始（或者 0 也可以，百分号可以扔掉），到 100%（或 1）结束

在一个对象的属性`fill`或属性`stroke`中引用它，这和在`CSS`中使用url引用元素的方法一样。

属性 x1、x2、y1 和 y2，这些属性定义了渐变路线走向。上例中`x1="0" x2="0" y1="0" y2="1"`就是垂直渐变


该示例中指明了渐变开始颜色为红色，到中间位置时变成半透明的黑色，最后变成蓝色。




## 径向渐变
[线性渐变参考](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Gradients#%E5%BE%84%E5%90%91%E6%B8%90%E5%8F%98)



```xml
<defs>
    <radialGradient id="RadialGradient2" cx="0.25" cy="0.25" r="0.25">
        <stop offset="0%" stop-color="red" />
        <stop offset="100%" stop-color="blue" />
    </radialGradient>
</defs>


<rect x="10" y="120" rx="15" ry="15" width="100" height="100" fill="url(#RadialGradient2)" />
```



## 参考
- https://www.cainiaojc.com/svg/svg-gradients.html