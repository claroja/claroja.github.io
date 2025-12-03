# frame

## 画布

画布(frame)的高是通过`frame_height`控制, 宽是通过`frame_width`来控制.

- 高度值`frame_height=8.0`, 既8个距离单位(unit), 范围是(-8,8)
- 宽度值`frame_weight=14.22`, 既14.22个距离单位(unit), 范围是(-7.11, 7.11)

![alt text](基础概念/frame_height_width.png)

## 距离单位

- RIGHT, 右移1个单位, (1, 0, 0)
- LEFT, 左移1个单位, (-1, 0, 0)
- UP, 上移1个单位, (0, 1, 0)
- DOWN, 下移1个单位, (0, -1, 0)
- UR, 上右(1, 1, 0)
- UL, 上左(-1, 1, 0)
- DR, 下右(1, -1, 0)
- DL, 下左(-1, -1, 0)

在3D中还有两个:

- OUT, 屏幕前, (0, 0, 1)
- IN, 屏幕后, (0, 0, -1)

距离单位可以直接根据向量运算, 比如:

- $2*RIGHT$ 等价于 $2*(1, 0, 0) = (2, 0, 0)$
- $RIHGT + LEFT$ 等价于 $(1, 0, 0) + (-1, 0, 0) = (0, 0, 0)$

## 坐标

画布的中心坐标是(0, 0, 0), 因为高度为8.0, 宽度为14.22, 所以四个边界值分别为:

- RIGHT_SIDE, (7.11, 0, 0)
- LEFT_SIDE, (-7.11, 0, 0)
- TOP, (0, 4, 0)
- DOWN, (0, -4, 0)

## 相关配置如下

- frame_rate: `60.0`
- frame_height: `8.0`, 画布的高是8个单位,
- frame_width: `14.222222222222221`
- pixel_height: `1080`
- pixel_width: `1920`
- frame_x_radius: `None`
- frame_y_radius: `None`

## 参考

- <https://www.bilibili.com/video/BV1p54y197cC>
