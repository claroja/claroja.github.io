---
title: css_fontface
toc: true
date: 2021-01-20 22:03:54
---
字体图标使用场景：  主要用于显示网页中通用、常用的一些小图标。
精灵图是有诸多优点的，但是缺点很明显。
1.图片文件还是比较大的。
2.图片本身放大和缩小会失真。
3.一旦图片制作完毕想要更换非常复杂。
此时，有一种技术的出现很好的解决了以上问题，就是**字体图标 iconfont**。
**字体图标**可以为前端工程师提供一种方便高效的图标使用方式，**展示的是图标，本质属于字体**。
### 优点

**轻量级**：一个图标字体要比一系列的图像要小。一旦字体加载了，图标就会马上渲染出来，减少了服务器请求
- 灵活性：本质其实是文字，可以很随意的改变颜色、产生阴影、透明效果、旋转等
- 兼容性：几乎支持所有的浏览器，请放心使用
- 注意： 字体图标不能替代精灵技术，只是对工作中图标部分技术的提升和优化。


**使用步骤**

字体图标是一些网页常见的小图标，我们直接网上下载即可。 因此使用可以分为：

1.字体图标的下载 http://icomoon.io/ 或 http://www.iconfont.cn/
文件的格式是`.eot`,`.svg`,`.ttf`,`.woff`
为什么会有不同的格式? 因为不同浏览器所支持的字体格式是不一样的，字体图标之所以兼容，就是因为我们下载了多种格式. 每个浏览器会根据需要加载不同的格式.


2.字体图标的引入(在 CSS 样式中全局声明字体)

```css
 @font-face {
   font-family: 'icomoon';
   src:  url('fonts/icomoon.eot?7kkyc2');
   src:  url('fonts/icomoon.eot?7kkyc2#iefix') format('embedded-opentype'),
     url('fonts/icomoon.ttf?7kkyc2') format('truetype'),
     url('fonts/icomoon.woff?7kkyc2') format('woff'),
     url('fonts/icomoon.svg?7kkyc2#icomoon') format('svg');
   font-weight: normal;
   font-style: normal;
 }
```
3. html 标签内添加小图标。(空的小方格)
4. 给标签定义字体。

  ```
   span {
     font-family: "icomoon";
   }
  ```

