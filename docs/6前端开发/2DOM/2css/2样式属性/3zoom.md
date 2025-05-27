
# zoom


1. zoom的缩放是相对于左上角的；而scale默认是居中缩放；
2. zoom的缩放改变了元素占据的空间大小；而scale的缩放占据的原始尺寸不变，页面布局不会发生变化；
3. 对文字的缩放规则不一致。zoom缩放依然受限于最小12像素中文大小限制；而scale就是纯粹的对图形进行比例控制，文字50%原来尺寸。
4. 在文档流中zoom加在任意一个元素上都会引起一整个页面的重新渲染，而scale只是在当前的元素上重绘。


## 语法

```css
zoom： <percentage> | <number> | normal | reset
```

1. normal:表示对象采用默认的尺寸大小，相当于zoom值等于1.0或者100%。
2. number:一个浮点数，表示元素的放大倍数，1.0为基数。
3. percentage:百分数，表示元素的放大百分，100%为基数。
4. reset






## 参考
1. https://www.zhangxinxu.com/wordpress/2015/11/zoom-transform-scale-diff/
2. https://developer.mozilla.org/en-US/docs/Web/CSS/zoom