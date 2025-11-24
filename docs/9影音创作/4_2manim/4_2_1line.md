# line

## line

- `line = Line((0, 0, 0),(1, 1, 0), buff=1)`: 从(0, 0, 0)到(1, 1, 0)做直线, 距离两点buff个单位距离
- `line = Line(start_point, end_point, path_arc = 2)`: 设置弧度, path_arc是弧线的圆心角

- `line = Line((0, 0, 0),(1, 1, 0), stroke_width=2)`: 线宽stroke_width

- `line.put_start_and_end_on(start_point,end_point)`: 更改线断的开始和结束
- `line.scale(3)`: 长度拉伸3倍, 但是宽度不变

## arrow

- `arrow = Arrow((0, 0, 0), (1, 1, 0), buff = 1)`: 从(0, 0, 0)到(1, 1, 0)做箭头, 距离两点buff个单位距离
- `arrow = Arrow((0, 0, 0), (1, 1, 0), tip_length = 1)`: 改变箭头的大小比例
- `arrow = Arrow((0, 0, 0), (1, 1, 0), max_tip_length_to_length_ratio = 1)`: 线长不变, 改变箭头的最大最小比例
- `arrow = Arrow((0, 0, 0), (1, 1, 0), max_stroke_width_to_length_ratio = 1)`: 线长不变, 改变粗细的最大最小比例
- `arrow = DoubleArrow((-2, -2, 0), (-1,0,0))`

## 其他

- `vec=Vector(UP*2+LEFT*1)`: 类似于Arrow, 只需传入一个坐标, 表示由圆点开始的向量
- `arc=Arc(angle=TAU/3).add_tip(at_start=True)`: 给圆弧两端加箭头
cir=Circle()

## 切线

`line=TangentLine(cir,alpha=0.63,length=5)`

## 参考

- <https://www.bilibili.com/video/BV1kA411b7kq>
