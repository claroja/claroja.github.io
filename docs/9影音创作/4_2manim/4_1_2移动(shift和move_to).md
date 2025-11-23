# 移动(shift和move_to)



## shift

是移动多少个单位的距离


- `shift(LEFT*5)`: 表示向左移动5个单位距离
- `shift(UP+RIGHT)`: 表示上移一个的单位距离, 再右移一个单位距离, 等价于`shift(UR)`
- `shift(UP, RIGHT)`: 表示上移一个的单位距离, 再右移一个单位距离, 注意和`shift(UP+RIGHT)`是一个参数, 而该方法是两个参数.


## move_to

是移动到指定的坐标点


- `move_to(LEFT)`: 移动到(-1, 0, 0)点, 默认是将mobject的中心点和目标点重合
- `move_to(LEFT, aligned_edge=LEFT)`: 移动到(-1, 0, 0)点, 并将mobject的做边缘和目标点对齐
- `move_to(UP, coor_mask=(1, 0, 1))`: 移动到(0, 0, 0)点, coor_mask屏蔽了UP(0, 1, 0)方向的距离量







## 参考
- https://www.bilibili.com/video/BV1p54y197cC/

