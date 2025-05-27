# 2遮罩(mask)


遮罩/蒙板(mask): 裁剪路径是1位蒙板，也就是说裁剪路径覆盖的对象要么就是全透明(可见的，位于裁剪路径内部)，要么就是全不透明(不可见，位于裁剪路径外部)。而蒙板可以指定不同位置的透明度。

使用蒙版实现和裁剪相同的效果


```xml

<svg>
  <defs>
    <mask id="mask" x="0" y="0" width="50" height="50" >
      <circle cx="50" cy="50" r="25" fill="#ffffff" />
    </mask>
  </defs>

  <rect x="0" y="0" width="100" height="100"  fill= "#0000ff" mask="url(#mask)"/>

</svg>

```
蒙版自带的透明效果, 白色是全透明, 黑色是不透明

```xml
<svg width="500" height="120">
    <defs>
        <mask id="mask" x="0" y="0" width="100" height="100" >
            <circle cx="50" cy="25" r="25" fill="#ffffff" />
            <circle cx="50" cy="75" r="25" fill="#666666" />
        </mask>
    </defs>

    <rect x="0" y="0" width="100" height="100"  fill= "#0000ff" mask="url(#mask)"/>
</svg>

```



## 参考
1. https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Clipping_and_masking