# svg_defs
建议把所有需要再次使用的引用元素定义在`defs`元素里面, 可以参考[defs](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/defs)的介绍


## 使用`url()`来引用defs
```xml
<defs>
    <linearGradient id="Gradient01">
        <stop offset="20%" stop-color="#39F" />
        <stop offset="90%" stop-color="#F3F" />
    </linearGradient>
</defs>

<rect x="10" y="10" width="60" height="10" fill="url(#Gradient01)"  />

```

## 使用`use`来引用defs
[参考](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/use)



```xml
<defs>
    <g id="Port">
        <circle style="fill:inherit" r="10"/>
    </g>
</defs>

<use x="50" y="10" xlink:href="#Port" />
```

