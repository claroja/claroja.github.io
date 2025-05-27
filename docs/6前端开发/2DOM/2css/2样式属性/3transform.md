# transform
Transform属性应用于元素的2D或3D转换。这个属性允许你将元素旋转，缩放，移动，倾斜等。


## [平移(translate)](https://www.cnblogs.com/yanggeng/p/11286250.html)

参考自己的位置来平移

1. translateX(x): 向X轴平移，填正数往右平移，填负数，往左平移
2. translateY(y): 向Y轴平移，填正数往下平移，填负数，往上平移
3. translateZ(z): 向Z轴平移, 你现在和电脑屏幕的距离，这就是Z轴的距离，电脑屏幕离你越近，那么translateZ() 里面的值 越大，电脑屏幕离你越远， translateZ() 的值就越小。
4. translate(x,y): 同时控制X轴和Y轴转换
5. translate3d(x,y,z): 同时控制X轴, Y轴, Z轴转换



## [缩放(scale)](https://www.cnblogs.com/yanggeng/p/11277199.html)
改变的不是元素的宽高，而是 X 和 Y 轴的刻度. 缩放该元素，>1 放大， <1 缩小  默认值是 1；

1. scaleX(x): 通过设置 X 轴的值来定义缩放转换。
1. scaleY(y): 通过设置 Y 轴的值来定义缩放转换。
1. scaleZ(z): 通过设置 Z 轴的值来定义 3D 缩放转换。
1. scale(x[,y]?): 定义 2D 缩放转换。
1. scale3d(x,y,z): 定义 3D 缩放转换。


## [旋转(旋转)](https://www.cnblogs.com/yanggeng/p/11275771.html)

旋转该元素，配合着transform-origin属性，transform-origin 是设置旋转点的。(没有设置transform-origin 属性也可以，只不过是根据该元素的中心点旋转，也就是center center)

1. rotate(angle): 定义 2D 旋转，在参数中规定角度。
2. rotateX(angle): 定义沿着 X 轴的 3D 旋转。
3. rotateY(angle): 定义沿着 Y 轴的 3D 旋转。
4. rotateZ(angle): 定义沿着 Z 轴的 3D 旋转。
5. rotate3d(x,y,z,angle): 定义 3D 旋转。

## [倾斜(skew)](https://www.cnblogs.com/yanggeng/p/11278028.html)

倾斜该元素，但高度不变

1. skewX(angle): 定义沿着 X 轴的 2D 倾斜转换。
1. skewY(angle): 定义沿着 Y 轴的 2D 倾斜转换。
1. skew(x-angle,y-angle): 定义沿着 X 和 Y 轴的 2D 倾斜转换。


## [perspective](https://www.cnblogs.com/yanggeng/p/11285856.html)

perspective(n)	为 3D 转换元素定义透视视图。


## 参考
1. https://www.runoob.com/cssref/css3-pr-transform.html
2. https://www.cnblogs.com/yanggeng/tag/css3%E7%B3%BB%E5%88%97/default.html?page=1
