# object-fit

object-fit属调整可替换元素(replaced element), 如`<video>`,`<img>`, 大小以适应其容器.


1. `object-fit: fill;`: 宽高两个维度将图片填充
2. `object-fit: contain;`: 保持自身的宽高比(aspect ratio), 宽或高一个维度将图片拉伸, 仅需某一个维度到达最大值
3. `object-fit: cover;`: 保持本身的宽高比(aspect ratio)来适应容器, 超过容器区域的将不再展示
4. `object-fit: none;`: 居中显示, 不调整大小










## 参考
1. https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit