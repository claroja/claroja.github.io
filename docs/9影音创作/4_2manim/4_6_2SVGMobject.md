# SVGMobject

从SVG文件创建的VMobject

## 参数

`class SVGMobject(file_name=None, should_center=True, height=2, width=None, color=None, opacity=None, fill_color=None, fill_opacity=None, stroke_color=None, stroke_opacity=None, stroke_width=None, svg_default=None, path_string_config=None, use_svg_cache=True, **kwargs)[source]
`


## 属性

- animate：用于为自身任意方法的应用添加动画效果
- animation_overrides：动画覆盖配置
- color：颜色
- depth：几何对象的深度
- fill_color：填充色（若为渐变色则返回第一种颜色）
- hash_seed：代表生成的几何对象点结果的唯一哈希值
- height：几何对象的高度
- n_points_per_curve：每条曲线的点数
- sheen_factor：光泽系数
- stroke_color：描边色
- width：几何对象的宽度



## 方法
- `static apply_style_to_mobject(mob, shape)`
- `static ellipse_to_mobject(ellipse)`
- `generate_config_style_dict()`: 
- `generate_mobject()`:
- `get_file_path()`:
- `get_mobjects_from(svg)`
- `static handle_transform(mob, matrix)`
- `property hash_seed: tuple`
- `init_svg_mobject(use_svg_cache)`
- `static line_to_mobject(line)`
- `modify_xml_tree(element_tree)`
- `move_into_position()`
- `path_to_mobject(path)`
- `static polygon_to_mobject(polygon)`
- `polyline_to_mobject(polyline)`
- `static rect_to_mobject(rect)`
- `static text_to_mobject(text)`



## 参考

- https://docs.manim.community/en/stable/reference/manim.mobject.svg.svg_mobject.SVGMobject.html












