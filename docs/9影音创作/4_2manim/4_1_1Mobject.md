# Mobject

数学对象(Mathematical Object), 是Manim中最底层的类.


## 最佳实践

- MObject对象添加删除

    - `add(*mobjects)`: 添加mobject对象作为子mobject对象
    - `copy()`: 复制Mobject，包含所有子Mobject、属性和updater，复制后修改不影响原对象
    - `flip(axis=array([0., 1., 0.]), **kwargs)`: 围绕指定轴翻转Mobject（镜像效果）
    - `insert(index, mobject)`: 在指定位置插入子Mobject
    - `remove(*mobjects)`: 删除子Mobject，从当前对象的子对象列表中移除指定对象

- 位置

    - `center()`: 将Mobject的中心移动到scene的中心
    - `to_corner(corner=array([-1., -1., 0.]), buff=0.5)`: 将Mobject移动到屏幕的指定角
    - `to_edge(edge=array([-1., 0., 0.]), buff=0.5)`: 将Mobject移动到屏幕的指定边，不影响另一维度的位置
    - `move_to(point_or_mobject, aligned_edge=array([0., 0., 0.]), coor_mask=array([1, 1, 1]))`: 将Mobject移动到指定点或目标对象的位置
    - `next_to(mobject_or_point, direction=array([1., 0., 0.]), buff=0.25, aligned_edge=array([0., 0., 0.]), submobject_to_align=None, index_of_submobject_to_align=None, coor_mask=array([1, 1, 1]))`: 将当前Mobject移动到目标对象或点的旁边
    - `shift(*vectors)`: 按指定向量平移Mobject，支持多个向量叠加（如`shift(RIGHT, UP)`表示向右上方平移）
    - `set_x(x, direction=array([0., 0., 0.]))`: 设置Mobject中心的x坐标值
    - `set_y(y, direction=array([0., 0., 0.]))`: 设置Mobject中心的y坐标值
    - `set_z(z, direction=array([0., 0., 0.]))`: 设置Mobject中心的z坐标值
    - `set_z_index(z_index_value, family=True)`: 设置Mobject的z轴层级（控制渲染顺序，值越大越靠上）
    - `set_z_index_by_z_Point3D()`: 根据Mobject的z坐标自动设置z轴层级，z值越大层级越高，确保3D场景中渲染顺序正确
- 变换
    
    - `rotate(angle, axis=array([0., 0., 1.]), about_point=None, **kwargs)`: 旋转Mobject
    - `rotate_about_origin(angle, axis=array([0., 0., 1.]), axes=[])`: 绕原点（[0,0,0]）旋转Mobject
    - `scale(scale_factor, **kwargs)`: 按指定比例伸缩Mobject的尺寸
    - `scale_to_fit_depth(depth, **kwargs)`: 依据指定深度伸缩Mobject，保持宽高比例不变，使深度刚好适配目标值
    - `scale_to_fit_height(height, **kwargs)`: 依据指定高度伸缩Mobject，保持宽深比例不变，使高度刚好适配目标值
    - `scale_to_fit_width(width, **kwargs)`: 依据指定宽度伸缩Mobject，保持高深度比例不变，使宽度刚好适配目标值
    - `stretch_to_fit_depth(depth, **kwargs)`: 拉伸Mobject以适配指定深度，不保持宽高比例，强制深度等于目标值
    - `stretch_to_fit_height(height, **kwargs)`: 拉伸Mobject以适配指定高度，不保持宽深比例，强制高度等于目标值
    - `stretch_to_fit_width(width, **kwargs)`: 拉伸Mobject以适配指定宽度，不保持高深度比例，强制宽度等于目标值
    - `become(mobject, match_height=False, match_width=False, match_depth=False, match_center=False, stretch=False)`: 从一个Mobject转换为另一个Mobject，复制目标对象的点、颜色和子对象结构
    - `property height: float`: 返回Mobject的高度（沿y轴方向的尺寸，即 bounding box 顶部与底部的y值差）
    - `length_over_dim(dim)`: 在指定方向测量Mobject的长度（沿维度轴的尺寸）
    - `match_depth(mobject, **kwargs)`: 匹配目标对象的深度（z轴方向尺寸），使当前Mobject的深度与mobject一致
    - `property width: float`: 返回Mobject的宽度（沿x轴方向的尺寸，即 bounding box 左侧与右侧的x值差）

- 颜色

    - `set_color(color=ManimColor('#FFFF00'), family=True)`: 设置Mobject的颜色（同时应用于填充色和描边色）
    - `set_color_by_gradient(*colors)`: 按渐变设置Mobject的颜色，从第一个颜色过渡到最后一个颜色
    - `get_color()`: 返回Mobject的主颜色（若为渐变色则返回第一种颜色）
    - `add_background_rectangle(color=None, opacity=0.75, **kwargs)`: 添加一个背景矩形作为子mobject对象, 背景矩形在其他子对象后面. 主要作用是突出显示该mobject

- 动画

    - `property animate: _AnimationBuilder | Self`: 将应用在自身的方法动画化.
        - 方法: `square.set_fill(WHITE)`
        - 方法链: `my_mobject.animate.shift(RIGHT).rotate(PI)`
        - 动画化: `square.animate.set_fill(WHITE)`
        - 播放动画: `Scene.play()`:
            - 播放动画: `self.play(my_mobject.animate(rate_func=linear).shift(RIGHT))`
            - 同时播放多个动画:

                ```python
                self.play(
                    mobject1.animate(run_time=2).rotate(PI),
                    mobject2.animate(rate_func=there_and_back).shift(RIGHT),
                )
    - `repeat(count)`: 重复执行当前Mobject的动画效果（通常用于动画链中）

- MObject对齐

    - `align_data(mobject, skip_point_alignment=False)`: 对齐mobject的数据, 两者将有相同数量的子mobject, 以及相同的父结构
    - `align_on_border(direction, buff=0.5)`: 将Mobject对齐到屏幕边框，方向由2D向量指定（如RIGHT、UP等）。
    - `align_to(mobject_or_point, direction=array([0., 0., 0.]))`: 在指定方向上和其他mobject或点对齐. 使当前Mobject的指定方向关键点与目标对象的对应关键点重合
    - `null_point_align(mobject)`: 当当前Mobject含有点而目标mobject无点时，将两者视为组对象对齐，避免因点数量不匹配导致的对齐失败

- 对象组

    - `arrange(direction=array([1., 0., 0.]), buff=0.25, center=True, **kwargs)`: 一维排列VGroup中的Mobject，按指定方向（默认水平向右）相邻分布
    - `arrange_in_grid(rows=None, cols=None, buff=0.25, cell_alignment=array([0., 0., 0.]), row_alignments=None, col_alignments=None, row_heights=None, col_widths=None, flow_order='rd', **kwargs)`: 二维排列VGroup中的Mobject，按网格形式分布
    - `arrange_submobjects(*args, **kwargs)`: 排列当前Mobject的所有子Mobject，参数与`arrange`一致，仅作用于子对象层级
    - `interpolate(mobject1, mobject2, alpha, path_func=<function interpolate>)`: 将当前Mobject转换为mobject1和mobject2的插值状态，实现平滑过渡
    - `invert(recursive=False)`: 倒排所有子Mobject的顺序
    - `shuffle(recursive=False)`: 随机打乱子Mobject的顺序
    - `shuffle_submobjects(*args, **kwargs)`: 随机打乱当前Mobject的子Mobject顺序，参数与`shuffle`一致
    - `sort(point_to_num_func=<function Mobject.<lambda>>, submob_func=None)`: 给子Mobject排序，默认按中心x坐标升序排列
    - `sort_submobjects(*args, **kwargs)`: 对子Mobject进行排序，参数与`sort`一致，仅作用于子对象层级
    - `add_to_back(*mobjects)`: 添加子mobject对象到最后面（底层），不改变现有子对象层级顺序，仅新增对象置于最下方

- 匹配

    - `match_color(mobject)`: 使用其他Mobject的颜色，复制其填充色、描边色等颜色属性
    - `match_coord(mobject, dim, direction=array([0., 0., 0.]))`: 匹配其他对象的指定维度坐标，使当前Mobject在该维度的位置与目标对象一致
    - `match_depth(mobject, **kwargs)`: 匹配目标对象的深度（z轴方向尺寸），使当前Mobject的深度与mobject一致
    - `match_dim_size(mobject, dim, **kwargs)`: 匹配目标对象指定维度的尺寸，使当前Mobject在该维度的大小与mobject一致
    - `match_height(mobject, **kwargs)`: 使用其他Mobject的高，使当前Mobject的高度与目标对象一致
    - `match_points(mobject, copy_submobjects=True)`: 匹配目标对象的点坐标和子对象结构，保持自身样式（颜色、描边等）不变
    - `match_updaters(mobject)`: 匹配指定Mobject的updater，复制其所有更新函数（覆盖当前对象的updater）
    - `match_width(mobject, **kwargs)`: 匹配目标对象的宽度（沿x轴方向尺寸），使当前Mobject的宽度与mobject一致
    - `match_x(mobject, direction=array([0., 0., 0.]))`: 匹配目标对象的x坐标，使当前Mobject在x轴的位置与mobject一致
    - `match_y(mobject, direction=array([0., 0., 0.]))`: 匹配目标对象的y坐标，使当前Mobject在y轴的位置与mobject一致
    - `match_z(mobject, direction=array([0., 0., 0.]))`: 匹配目标对象的z坐标，使当前Mobject在z轴的位置与mobject一致


- 更新器

    - `add_updater(update_function, index=None, call_updater=False)`: 添加一个更新方法, 每一帧都会被调用.
    - `clear_updaters(recursive=True)`: 删除所有的updaters
    - `get_time_based_updaters()`: 获得所有使用`dt`参数的updater（即基于时间间隔的更新函数）
    - `get_updaters()`: 返回所有的updater，以列表形式返回
    - `has_time_based_updater()`: 检测当前Mobject是否包含基于时间的updater（即接收`dt`参数的更新函数），返回布尔值
    - `remove_updater(update_function)`: 删除指定的updater，停止该更新函数的调用
    - `resume_updating(recursive=True)`: 恢复启用updater和动画的更新功能，使每一帧都调用更新函数
    - `suspend_updating(recursive=True)`: 暂停updater和动画的更新功能，临时停止所有更新函数调用
    - `update(dt=0, recursive=True)`: 手动触发所有updater的调用，应用更新逻辑
  
- 获取点

    - `get_all_points()`: 返回当前Mobject及所有子Mobject的所有点坐标，以合并后的numpy数组形式返回
    - `get_bottom()`: 返回包围Mobject的轴对齐 bounding box 底部的3D坐标（y值最小点）
    - `get_center()`: 返回包围Mobject的轴对齐 bounding box 中心的3D坐标
    - `get_coord(dim, direction=array([0., 0., 0.]))`: 返回指定维度的坐标值，是get_x、get_y、get_z的通用化方法
    - `get_corner(direction)`: 获得包围Mobject的 bounding box 指定角的3D坐标
    - `get_critical_point(direction)`: 返回Mobject边界上的关键点位3D坐标，即 bounding box 沿指定方向的极值点（如方向RIGHT对应右边界中点）
    - `get_edge_center(direction)`: 指定方向的边的中心3D坐标，即 bounding box 对应边的中点
    - `get_end()`: 返回Mobject描边的终点3D坐标（适用于线条、曲线类对象，按点顺序的最后一个点）
    - `get_left()`: 返回包围Mobject的 bounding box 左侧的3D坐标（x值最小点）
    - `get_merged_array(array_attr)`: 返回当前Mobject及所有子Mobject的指定数组属性的合并结果
    - `get_midpoint()`: 获得Mobject路径的中点3D坐标（适用于线条、曲线，按路径长度的中点）
    - `get_nadir()`: 返回包围3D Mobject的 bounding box 天底点的3D坐标（z值最小点，即最下方点）
    - `get_point_mobject(center=None)`: 返回一个与当前Mobject形状对应的最简点Mobject（通常为中心点或边界点集合），用于快速创建参考对象
    - `get_right()`: 右边的Point3D（包围Mobject的 bounding box 右侧x值最大点）
    - `get_start()`: 返回Mobject描边的起点3D坐标（适用于线条、曲线类对象，按点顺序的第一个点）
    - `get_start_and_end()`: 返回Mobject描边的起点和终点3D坐标，以元组`(start_point, end_point)`形式返回
    - `get_top()`: 上边的Point3D（包围Mobject的 bounding box 顶部y值最大点）
    - `get_x(direction=array([0., 0., 0.]))`: 返回Mobject中心3D坐标的x值（浮点型），若指定方向则返回对应边界点的x值
    - `get_y(direction=array([0., 0., 0.]))`: 返回Mobject中心3D坐标的y值（浮点型），若指定方向则返回对应边界点的y值
    - `get_z(direction=array([0., 0., 0.]))`: 返回Mobject中心3D坐标的z值（浮点型），若指定方向则返回对应边界点的z值
    - `get_zenith()`: zenith Point3D（包围3D Mobject的 bounding box 天顶点的3D坐标，z值最大点，即最上方点）
    - `has_no_points()`: 检查Mobject是否不包含任何点坐标，返回布尔值`True`（无点）或`False`（有点）
    - `has_points()`: 检查Mobject是否包含点坐标，返回布尔值`True`（有点）或`False`（无点），与`has_no_points()`互为反函数
    - `reset_points()`: 将points变为空数组，清空Mobject的形状定义，需重新调用`generate_points()`才能恢复

- 其他
    - `apply_complex_function(function, **kwargs)`: 给Mobject应用复变函数（如旋转、缩放、平移的复合变换），通过函数映射改变其点坐标实现复杂形状变换
    - `apply_to_family(func)`: 将方法应用到Mobject以及所有子Mobject上，递归作用于整个对象家族
    - `restore()`: 还原之前`save_state()`保留的状态（包括位置、颜色、尺寸、点坐标等所有属性）
    - `save_state()`: 保存当前Mobject的所有状态（位置、颜色、尺寸、点坐标、updater等），供后续`restore()`调用恢复
    - `set(**kwargs)`: 批量设置Mobject的属性，关键字参数为属性名（如`set(fill_color=RED, stroke_width=2)`）

## 参数

`class Mobject(color=ManimColor('#FFFFFF'), name=None, dim=3, target=None, z_index=0)`

## 方法

以下是补充完整所有未添加解释的方法说明，保持格式统一、参数清晰且与前文功能一致：

- `add(*mobjects)`: 添加mobject对象作为子mobject对象
- `add_background_rectangle(color=None, opacity=0.75, **kwargs)`: 添加一个背景矩形作为子mobject对象, 背景矩形在其他子对象后面. 主要作用是突出显示该mobject
- `add_to_back(*mobjects)`: 添加子mobject对象到最后面（底层），不改变现有子对象层级顺序，仅新增对象置于最下方
- `add_updater(update_function, index=None, call_updater=False)`: 添加一个更新方法, 每一帧都会被调用.
    - `update_function (Updater)`: 将该Mobject作为第一个参数. 第二个参数是`dt`, 设置间隔多少秒调用一次
    - `index (int | None)`: Updater的索引, 如果不指定, 则放在最后一个
    - `call_updater (bool)`: 如果为`True`则立刻调用, 即`dt=0`
- `align_data(mobject, skip_point_alignment=False)`: 对齐mobject的数据, 两者将有相同数量的子mobject, 以及相同的父结构
- `align_on_border(direction, buff=0.5)`: 将Mobject对齐到屏幕边框，方向由2D向量指定（如RIGHT、UP等）。
- `align_to(mobject_or_point, direction=array([0., 0., 0.]))`: 在指定方向上和其他mobject或点对齐. 使当前Mobject的指定方向关键点与目标对象的对应关键点重合
- `property animate: _AnimationBuilder | Self`: 将应用在自身的方法动画化.
    - 方法: `square.set_fill(WHITE)`
    - 方法链: `my_mobject.animate.shift(RIGHT).rotate(PI)`
    - 动画化: `square.animate.set_fill(WHITE)`
    - 播放动画: `Scene.play()`:
        - 播放动画: `self.play(my_mobject.animate(rate_func=linear).shift(RIGHT))`
        - 同时播放多个动画:

            ```python
            self.play(
                mobject1.animate(run_time=2).rotate(PI),
                mobject2.animate(rate_func=there_and_back).shift(RIGHT),
            )
            ```
- `apply_complex_function(function, **kwargs)`: 给Mobject应用复变函数（如旋转、缩放、平移的复合变换），通过函数映射改变其点坐标实现复杂形状变换
- `apply_to_family(func)`: 将方法应用到Mobject以及所有子Mobject上，递归作用于整个对象家族
- `arrange(direction=array([1., 0., 0.]), buff=0.25, center=True, **kwargs)`: 一维排列VGroup中的Mobject，按指定方向（默认水平向右）相邻分布
- `arrange_in_grid(rows=None, cols=None, buff=0.25, cell_alignment=array([0., 0., 0.]), row_alignments=None, col_alignments=None, row_heights=None, col_widths=None, flow_order='rd', **kwargs)`: 二维排列VGroup中的Mobject，按网格形式分布
- `arrange_submobjects(*args, **kwargs)`: 排列当前Mobject的所有子Mobject，参数与`arrange`一致，仅作用于子对象层级
- `become(mobject, match_height=False, match_width=False, match_depth=False, match_center=False, stretch=False)`: 从一个Mobject转换为另一个Mobject，复制目标对象的点、颜色和子对象结构）
- `center()`: 将Mobject的中心移动到scene的中心
- `clear_updaters(recursive=True)`: 删除所有的updaters
- `copy()`: 复制Mobject，包含所有子Mobject、属性和updater，复制后修改不影响原对象
- `flip(axis=array([0., 1., 0.]), **kwargs)`: 围绕指定轴翻转Mobject（镜像效果）
- `generate_points()`: 初始化Mobject的点坐标，定义其基础形状（如多边形的顶点、曲线的采样点），是绘制对象的核心初始化步骤
- `get_all_points()`: 返回当前Mobject及所有子Mobject的所有点坐标，以合并后的numpy数组形式返回
- `get_bottom()`: 返回包围Mobject的轴对齐 bounding box 底部的3D坐标（y值最小点）
- `get_center()`: 返回包围Mobject的轴对齐 bounding box 中心的3D坐标
- `get_color()`: 返回Mobject的主颜色（若为渐变色则返回第一种颜色）
- `get_coord(dim, direction=array([0., 0., 0.]))`: 返回指定维度的坐标值，是get_x、get_y、get_z的通用化方法
- `get_corner(direction)`: 获得包围Mobject的 bounding box 指定角的3D坐标
- `get_critical_point(direction)`: 返回Mobject边界上的关键点位3D坐标，即 bounding box 沿指定方向的极值点（如方向RIGHT对应右边界中点）
- `get_edge_center(direction)`: 指定方向的边的中心3D坐标，即 bounding box 对应边的中点
- `get_end()`: 返回Mobject描边的终点3D坐标（适用于线条、曲线类对象，按点顺序的最后一个点）
- `get_left()`: 返回包围Mobject的 bounding box 左侧的3D坐标（x值最小点）
- `get_merged_array(array_attr)`: 返回当前Mobject及所有子Mobject的指定数组属性的合并结果
- `get_midpoint()`: 获得Mobject路径的中点3D坐标（适用于线条、曲线，按路径长度的中点）
- `get_nadir()`: 返回包围3D Mobject的 bounding box 天底点的3D坐标（z值最小点，即最下方点）
- `get_point_mobject(center=None)`: 返回一个与当前Mobject形状对应的最简点Mobject（通常为中心点或边界点集合），用于快速创建参考对象
- `get_right()`: 右边的Point3D（包围Mobject的 bounding box 右侧x值最大点）
- `get_start()`: 返回Mobject描边的起点3D坐标（适用于线条、曲线类对象，按点顺序的第一个点）
- `get_start_and_end()`: 返回Mobject描边的起点和终点3D坐标，以元组`(start_point, end_point)`形式返回
- `get_time_based_updaters()`: 获得所有使用`dt`参数的updater（即基于时间间隔的更新函数）
- `get_top()`: 上边的Point3D（包围Mobject的 bounding box 顶部y值最大点）
- `get_updaters()`: 返回所有的updater，以列表形式返回
- `get_x(direction=array([0., 0., 0.]))`: 返回Mobject中心3D坐标的x值（浮点型），若指定方向则返回对应边界点的x值
- `get_y(direction=array([0., 0., 0.]))`: 返回Mobject中心3D坐标的y值（浮点型），若指定方向则返回对应边界点的y值
- `get_z(direction=array([0., 0., 0.]))`: 返回Mobject中心3D坐标的z值（浮点型），若指定方向则返回对应边界点的z值
- `get_zenith()`: zenith Point3D（包围3D Mobject的 bounding box 天顶点的3D坐标，z值最大点，即最上方点）
- `has_no_points()`: 检查Mobject是否不包含任何点坐标，返回布尔值`True`（无点）或`False`（有点）
- `has_points()`: 检查Mobject是否包含点坐标，返回布尔值`True`（有点）或`False`（无点），与`has_no_points()`互为反函数
- `has_time_based_updater()`: 检测当前Mobject是否包含基于时间的updater（即接收`dt`参数的更新函数），返回布尔值
- `property height: float`: 返回Mobject的高度（沿y轴方向的尺寸，即 bounding box 顶部与底部的y值差）
- `init_colors()`: 初始化Mobject及其子对象的颜色属性，应用默认颜色或预设置颜色，确保渲染时颜色正常显示
- `insert(index, mobject)`: 在指定位置插入子Mobject
- `interpolate(mobject1, mobject2, alpha, path_func=<function interpolate>)`: 将当前Mobject转换为mobject1和mobject2的插值状态，实现平滑过渡
- `invert(recursive=False)`: 倒排所有子Mobject的顺序
- `length_over_dim(dim)`: 在指定方向测量Mobject的长度（沿维度轴的尺寸）
- `match_color(mobject)`: 使用其他Mobject的颜色，复制其填充色、描边色等颜色属性
- `match_coord(mobject, dim, direction=array([0., 0., 0.]))`: 匹配其他对象的指定维度坐标，使当前Mobject在该维度的位置与目标对象一致
- `match_depth(mobject, **kwargs)`: 匹配目标对象的深度（z轴方向尺寸），使当前Mobject的深度与mobject一致
- `match_dim_size(mobject, dim, **kwargs)`: 匹配目标对象指定维度的尺寸，使当前Mobject在该维度的大小与mobject一致
- `match_height(mobject, **kwargs)`: 使用其他Mobject的高，使当前Mobject的高度与目标对象一致
- `match_points(mobject, copy_submobjects=True)`: 匹配目标对象的点坐标和子对象结构，保持自身样式（颜色、描边等）不变
- `match_updaters(mobject)`: 匹配指定Mobject的updater，复制其所有更新函数（覆盖当前对象的updater）
- `match_width(mobject, **kwargs)`: 匹配目标对象的宽度（沿x轴方向尺寸），使当前Mobject的宽度与mobject一致
- `match_x(mobject, direction=array([0., 0., 0.]))`: 匹配目标对象的x坐标，使当前Mobject在x轴的位置与mobject一致
- `match_y(mobject, direction=array([0., 0., 0.]))`: 匹配目标对象的y坐标，使当前Mobject在y轴的位置与mobject一致
- `match_z(mobject, direction=array([0., 0., 0.]))`: 匹配目标对象的z坐标，使当前Mobject在z轴的位置与mobject一致
- `move_to(point_or_mobject, aligned_edge=array([0., 0., 0.]), coor_mask=array([1, 1, 1]))`: 将Mobject移动到指定点或目标对象的位置
- `next_to(mobject_or_point, direction=array([1., 0., 0.]), buff=0.25, aligned_edge=array([0., 0., 0.]), submobject_to_align=None, index_of_submobject_to_align=None, coor_mask=array([1, 1, 1]))`: 将当前Mobject移动到目标对象或点的旁边
- `null_point_align(mobject)`: 当当前Mobject含有点而目标mobject无点时，将两者视为组对象对齐，避免因点数量不匹配导致的对齐失败
- `reduce_across_dimension(reduce_func, dim)`: 对当前Mobject及所有子对象的指定维度坐标应用聚合函数，返回计算结果
- `remove(*mobjects)`: 删除子Mobject，从当前对象的子对象列表中移除指定对象
- `remove_updater(update_function)`: 删除指定的updater，停止该更新函数的调用
- `repeat(count)`: 重复执行当前Mobject的动画效果（通常用于动画链中）
- `reset_points()`: 将points变为空数组，清空Mobject的形状定义，需重新调用`generate_points()`才能恢复
- `restore()`: 还原之前`save_state()`保留的状态（包括位置、颜色、尺寸、点坐标等所有属性）
- `resume_updating(recursive=True)`: 恢复启用updater和动画的更新功能，使每一帧都调用更新函数
- `rotate(angle, axis=array([0., 0., 1.]), about_point=None, **kwargs)`: 旋转Mobject
- `rotate_about_origin(angle, axis=array([0., 0., 1.]), axes=[])`: 绕原点（[0,0,0]）旋转Mobject
- `save_image(name=None)`: 保存Mobject对象图片为PNG格式，默认保存到媒体输出目录
- `save_state()`: 保存当前Mobject的所有状态（位置、颜色、尺寸、点坐标、updater等），供后续`restore()`调用恢复
- `scale(scale_factor, **kwargs)`: 按指定比例伸缩Mobject的尺寸
- `scale_to_fit_depth(depth, **kwargs)`: 依据指定深度伸缩Mobject，保持宽高比例不变，使深度刚好适配目标值
- `scale_to_fit_height(height, **kwargs)`: 依据指定高度伸缩Mobject，保持宽深比例不变，使高度刚好适配目标值
- `scale_to_fit_width(width, **kwargs)`: 依据指定宽度伸缩Mobject，保持高深度比例不变，使宽度刚好适配目标值
- `set(**kwargs)`: 批量设置Mobject的属性，关键字参数为属性名（如`set(fill_color=RED, stroke_width=2)`）
- `set_color(color=ManimColor('#FFFF00'), family=True)`: 设置Mobject的颜色（同时应用于填充色和描边色）
- `set_color_by_gradient(*colors)`: 按渐变设置Mobject的颜色，从第一个颜色过渡到最后一个颜色
- `set_x(x, direction=array([0., 0., 0.]))`: 设置Mobject中心的x坐标值
- `set_y(y, direction=array([0., 0., 0.]))`: 设置Mobject中心的y坐标值
- `set_z(z, direction=array([0., 0., 0.]))`: 设置Mobject中心的z坐标值
- `set_z_index(z_index_value, family=True)`: 设置Mobject的z轴层级（控制渲染顺序，值越大越靠上）
- `set_z_index_by_z_Point3D()`: 根据Mobject的z坐标自动设置z轴层级，z值越大层级越高，确保3D场景中渲染顺序正确
- `shift(*vectors)`: 按指定向量平移Mobject，支持多个向量叠加（如`shift(RIGHT, UP)`表示向右上方平移）
- `shuffle(recursive=False)`: 随机打乱子Mobject的顺序
- `shuffle_submobjects(*args, **kwargs)`: 随机打乱当前Mobject的子Mobject顺序，参数与`shuffle`一致
- `sort(point_to_num_func=<function Mobject.<lambda>>, submob_func=None)`: 给子Mobject排序，默认按中心x坐标升序排列
- `sort_submobjects(*args, **kwargs)`: 对子Mobject进行排序，参数与`sort`一致，仅作用于子对象层级
- `stretch_to_fit_depth(depth, **kwargs)`: 拉伸Mobject以适配指定深度，不保持宽高比例，强制深度等于目标值
- `stretch_to_fit_height(height, **kwargs)`: 拉伸Mobject以适配指定高度，不保持宽深比例，强制高度等于目标值
- `stretch_to_fit_width(width, **kwargs)`: 拉伸Mobject以适配指定宽度，不保持高深度比例，强制宽度等于目标值
- `suspend_updating(recursive=True)`: 暂停updater和动画的更新功能，临时停止所有更新函数调用
- `to_corner(corner=array([-1., -1., 0.]), buff=0.5)`: 将Mobject移动到屏幕的指定角
- `to_edge(edge=array([-1., 0., 0.]), buff=0.5)`: 将Mobject移动到屏幕的指定边，不影响另一维度的位置

- `update(dt=0, recursive=True)`: 手动触发所有updater的调用，应用更新逻辑
- `property width: float`: 返回Mobject的宽度（沿x轴方向的尺寸，即 bounding box 左侧与右侧的x值差）



## 参考
- https://docs.manim.community/en/stable/reference/manim.mobject.mobject.Mobject.html


