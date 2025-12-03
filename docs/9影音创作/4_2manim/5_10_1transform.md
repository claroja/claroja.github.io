# transform

能够实现从一个对象到另一个对象的平滑过渡、复制并变换、直接替换以及状态恢复等多种效果。


- Transform：将一个Mobject平滑地变换为另一个Mobject
- TransformFromCopy：从一个对象复制出一个副本，并将该副本变换为目标对象
- ReplacementTransform：将一个Mobject替换为另一个 Mobject，并且在变换过程中，原始对象会被目标对象完全替代
- Restore：将一个Mobject恢复到其之前保存的状态时使用




- Transform

    Transform 是一个通用的变换类，可以对形状、位置、颜色等多种属性进行变换。变换过程中，原始对象和目标对象都会保留在场景中，直到动画结束。如果需要在变换后移除原始对象，需要手动操作。

    | 参数名称 | 类型 | 说明 |
    | :--- | :--- | :--- |
    | mobject | Mobject | 要被变换的对象 |
    | target_mobject | Mobject | 变换的目标对象 |
    | path_arc | float | 如果使用圆形路径，指定点移动的弧度 |
    | path_func | func | 定义了 mobject 的点在变换过程中所走的路径，可使用 Manim 提供的路径函数或自定义函数 |
    | path_arc_axis | np.ndarray | 如果使用圆形路径，指定旋转的轴 |
    | path_arc_centers | np.ndarray | 若设置此参数且未设置 path_func，会生成沿圆形路径的路径函数，此参数定义圆形路径的中心 |
    | replace_mobject_with_target_in_scene | bool | 控制动画完成后，是否用 target_mobject 替换 mobject |

    ---

- TransformFromCopy

    当需要从一个对象复制出一个副本，并将该副本变换为目标对象时使用TransformFromCopy。例如，在讲解数学公式时，从一个已有的公式中复制一部分并将其变换为新的表达式。TransformFromCopy实际上是Transform的一个变体，它先对原始对象进行复制，然后对复制的对象执行变换动画。原始对象在动画过程中保持不变，变换的是其副本

    它的参数类似Transform的参数。

- ReplacementTransform

    ReplacementTransform用于将一个Mobject替换为另一个Mobject，并且在变换过程中，原始对象会被目标对象完全替代。例如，在展示数学公式推导时，将一个公式直接替换为另一个公式，强调两者的等价性或替换关系。

    ReplacementTransform继承自Transform类，但它在变换完成后会移除原始对象，只保留目标对象。它的参数类似Transform的参数。

- Restore

    当需要将一个Mobject恢复到其之前保存的状态时使用Restore。例如，在对一个图形进行了一系列复杂的变换后，需要将其恢复到初始状态，或者在展示一个对象的多种变换后，恢复到某个特定的中间状态。

    它需要先通过Mobject.save_state()方法保存对象的状态，然后才能使用Restore动画将其恢复。



## 参考

- https://www.cnblogs.com/wang_yb/p/18707646














