# scale

对mobject进行缩放



- `scale(2)`: 放大两倍, 默认以中心点为中心进行缩放
- `scale(2. about_edge=UP)`: 方法两倍, 以上边为中心进行缩放



## rotate
旋转

- `rotate(90*DEGREES, axis=OUT)`: 旋转90度, 绕着Z轴, 逆时针(右手定律, OUT是屏幕朝向)
- `rotate(90*DEGREES, axis=IN)`: 旋转90度, 绕着Z轴, 顺时针(右手定律, IN是屏幕朝向)
- `rotate(90*DEGREES, axis=OUT, about_point=(1, 0, 0))`: 旋转90度, 绕着(1, 0, 0), 逆时针


## flip
翻转

- `flip()`: 左右翻转, 以mobject的中心的垂直线
- `flip(axis=RIGHT)`: 上下翻转, 以mobject的中心的水平线
- `flip(axis=RIGHT, about_point=ORIGIN)`: 上下翻转, 以圆点所在的水平线


## stretch

拉伸


- `stretch(factor=2, dim=0)`: 拉伸2倍, 沿X轴
- `stretch(factor=2, dim=1)`: 拉伸2倍, 沿Y轴
- `stretch(factor=2, dim=3)`: 拉伸2倍, 沿Z轴, 如果是二维平面, 则没有效果
- `stretch(factor=2, dim=0, about_point=(-3, -3, 0))`: 拉伸2倍, 沿X轴, 以(-3, -3, 0)为基准




## 参考

- https://www.bilibili.com/video/BV1p54y197cC/










