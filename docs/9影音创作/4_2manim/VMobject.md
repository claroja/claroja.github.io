# VMobject

向量化的Mobject


## 参数

`class VMobject(fill_color=None, fill_opacity=0.0, stroke_color=None, stroke_opacity=1.0, stroke_width=4, background_stroke_color=ManimColor('#000000'), background_stroke_opacity=1.0, background_stroke_width=0, sheen_factor=0.0, joint_type=None, sheen_direction=array([-1., 1., 0.]), close_new_points=False, pre_function_handle_to_anchor_scale_factor=0.01, make_smooth_after_applying_functions=False, background_image=None, shade_in_3d=False, tolerance_for_point_equality=1e-06, n_points_per_cubic_curve=4, cap_style=CapStyleType.AUTO, **kwargs)`


## 属性

- animate：用于为自身任意方法的应用添加动画效果
- animation_overrides：动画覆盖配置
- color：颜色
- depth：几何对象的深度
- fill_color：填充色（若为渐变色则返回第一种颜色）
- height：几何对象的高度
- n_points_per_curve：每条曲线的点数
- sheen_factor：光泽系数
- stroke_color：描边色
- width：几何对象的宽度

## 方法

- `add_cubic_bezier_curve_to(handle1, handle2, anchor)`: 贝塞尔曲线
- `add_line_to(point)`: 在VMobject最后的点为起点划线到参数指定的点
- `add_points_as_corners(points)`: 
- `add_quadratic_bezier_curve_to(handle, anchor)`
- `add_smooth_curve_to(*points)`
- `align_points(vmobject)`: 对齐VMobject, 使他们有相同的subpath和point
- `append_points(new_points)`: 添加点
- `change_anchor_mode(mode)`: 修改贝塞尔曲线的锚点
- `consider_points_equals_2d(p0, p1)`: 两个点是否足够近
- `property fill_color: ManimColor`:
- `force_direction(target_direction)`: 点是顺时针还是逆时针
- `gen_cubic_bezier_tuples_from_points(points)`:
- `generate_rgbas_array(color, opacity)`:
- `get_anchors()`: 获得曲线的锚点
- `get_anchors_and_handles()`
- `get_arc_length(sample_points_per_curve=None)`
- `get_color()`
- `get_curve_functions()`: 获得曲线的方法
- `get_curve_functions_with_lengths(**kwargs)`: 
- `get_direction()`
- `get_end_anchors()`
- `get_fill_color()`
- `get_fill_opacity()`
- `static get_mobject_type_class()`
- `get_nth_curve_function(n)`
- `get_nth_curve_function_with_length(n, sample_points=None)`
- `get_nth_curve_length(n, sample_points=None)`
- `get_nth_curve_length_pieces(n, sample_points=None)`
- `get_nth_curve_points(n)`
- `get_num_curves()`
- `get_point_mobject(center=None)`
- `get_start_anchors()`
- `get_subcurve(a, b)`
- `get_subpaths()`
- `init_colors(propagate_colors=True)`
- `insert_n_curves(n)`
- `insert_n_curves_to_point_list(n, points)`
- `point_from_proportion(alpha)`
- `pointwise_become_partial(vmobject, a, b)`
- `proportion_from_point(point)`
- `resize_points(new_length, resize_func=<function resize_array>)`
- `reverse_direction()`
- `rotate(angle, axis=array([0., 0., 1.]), about_point=None, **kwargs)`
- `rotate_sheen_direction(angle, axis=array([0., 0., 1.]), family=True)`
- `scale(scale_factor, scale_stroke=False, **kwargs)`
- `scale_handle_to_anchor_distances(factor)`
- `set_anchors_and_handles(anchors1, handles1, handles2, anchors2)`
- `set_cap_style(cap_style)`
- `set_color(color, family=True)`
- `set_fill(color=None, opacity=None, family=True)`
- `set_points_as_corners(points)`
- `set_sheen(factor, direction=None, family=True)`
- `set_sheen_direction(direction, family=True)`
- `start_new_path(point)`



## 参考

- https://docs.manim.community/en/stable/reference/manim.mobject.types.vectorized_mobject.VMobject.html












