# 剪切(clipPath)

裁剪路径(cliping path)由path, text或者基本图形组成的图形。所有在裁剪路径内的图形都可见，所有在裁剪路径外的图形都不可见。


```xml
<svg>
  <defs>
    <clipPath id="cut-off-bottom">
      <rect x="0" y="0" width="200" height="100" />
    </clipPath>
  </defs>

  <circle cx="100" cy="100" r="100" clip-path="url(#cut-off-bottom)" />
</svg>
```

1. 在 (100,100) 创建一个圆形，半径是 100。属性clip-path引用了一个`<clipPath>`元素。
2. clipPath元素经常放在一个defs元素内, 内部是 rect 元素, 这个矩形将把画布的上半部分涂黑。该 rect 不会被绘制。只绘制其覆盖的部分




## 参考
1. https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Clipping_and_masking















