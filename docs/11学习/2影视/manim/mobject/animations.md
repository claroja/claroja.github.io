# animations



动画分为两个大的部分:
## mobject自带的`animation`接口
### 位置相关
方法|描述
--|--
`move_to()`|相对于ORIGIN(0,0)点, 绝对位置移动
`next_to()`|放在其他mobject的旁边
`align_to()`|和其他的mobject对齐
`shift()`|相对之前的位置移动
`set_xyz()`|设置坐标
`set_z_index()`|设置上下关系
`to_edge()`|到屏幕边缘
### 风格相关
方法|描述
--|--
`set_stroke()`|设置边 适用于vmobject
`set_fill()`|静态填充 适用于vmobject
`set_color()`| 适用于mobject
`rotate()`|静态旋转

## 全局方法

分类|对象|描述
--|--|--
animation|[Animation](https://docs.manim.community/en/stable/reference/manim.animation.animation.Animation.html)|由各个mobject重写, 不需要我们直接使用
animation|[Wait](https://docs.manim.community/en/stable/reference/manim.animation.animation.Wait.html)|没有操作的动画(静止的动画), 由`scene`调用
changing|[TracedPath](https://docs.manim.community/en/stable/reference/manim.animation.changing.TracedPath.html)|跟踪轨迹
creation|[Create](https://docs.manim.community/en/stable/reference/manim.animation.creation.Create.htmlL)|创建图像
creation|[Uncreate](https://docs.manim.community/en/stable/reference/manim.animation.creation.Uncreate.html#manim.animation.creation.Uncreate)|create的逆
creation|[Write](https://docs.manim.community/en/stable/reference/manim.animation.creation.Write.html#manim.animation.creation.Write)|文字书写
creation|[Unwrite](https://docs.manim.community/en/stable/reference/manim.animation.creation.Unwrite.html#manim.animation.creation.Unwrite)|write逆
fading|[FadeIn](https://docs.manim.community/en/stable/reference/manim.animation.fading.FadeIn.html)|渐入
fading|[FadeOut](https://docs.manim.community/en/stable/reference/manim.animation.fading.FadeOut.html)|渐出
growing|[GrowArrow](https://docs.manim.community/en/stable/reference/manim.animation.growing.GrowArrow.html)|生长
indication|[Flash](https://docs.manim.community/en/stable/reference/manim.animation.indication.Flash.html)|小烟花
movement|[MoveAlongPath](https://docs.manim.community/en/stable/reference/manim.animation.movement.MoveAlongPath.html)|按照路径移动
numbers|
rotation|[Rotate](https://docs.manim.community/en/stable/reference/manim.animation.rotation.Rotate.html)|旋转
specialized|[Broadcast](https://docs.manim.community/en/stable/reference/manim.animation.specialized.Broadcast.html)|广播
speedmodifier|[ChangeSpeed](https://docs.manim.community/en/stable/reference/manim.animation.speedmodifier.ChangeSpeed.html)|速度控制
transform|[ApplyMatrix](https://docs.manim.community/en/stable/reference/manim.animation.transform.ApplyMatrix.html#manim.animation.transform.ApplyMatrix)|矩阵转换
transform_matching_parts|[TransformMatchingShapes](https://docs.manim.community/en/stable/reference/manim.animation.transform_matching_parts.TransformMatchingShapes.html)|仅仅转换字符串不同部分
updaters||


参考:
manim_animations