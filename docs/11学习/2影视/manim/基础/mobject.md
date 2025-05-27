# mobject




常用图形

数学图像的分类:

1. geomerty(几何图形)
    - arc(曲线)
    - boolean_ops(几何操作)
    - line(直线)
    - polygram(多边形)
    - shape_matchers(添加装饰对象)
    - tips(提示)
2. graph(图结构)
3. graphing(数学相关图表绘制)
    - coordinate_systems(坐标系)
    - functions(绘制方程)
    - numberline(绘制刻度线)
    - probability(绘制概率图,比如饼图)
    - scale(刻度转换工具)
4. matrix(绘制矩阵)
5. svg
    - brace(绘制括号)
6. table(绘制表格)
7. text(文字)
    - code_mobject(代码)
    - numbers(数字)
    - tex_mobject(latex文字)
    - text_mobject(普通文字)
8. three_d(3D图形)
9. types(特殊类型)
    - image_mobject(图片)
    - point_cloud_mobject(点分布)
    - vectorized_mobject(批处理)
10. value_tracker(值追踪)
11. vector_field(场)


图形|类型|描述
--|--|--
geometry-arc|[Dot](https://docs.manim.community/en/stable/reference/manim.mobject.geometry.arc.Dot.html)|圆点, 可调`位置`,`半径`,`边缘宽度`,`填充透明度`,`颜色`等
geometry-boolean_ops|[Difference](https://docs.manim.community/en/stable/reference/manim.mobject.geometry.boolean_ops.Difference.html)|取差集
geometry-line|[Line](https://docs.manim.community/en/stable/reference/manim.mobject.geometry.line.Line.html)|直线, 可调`初始点`,`结束点`等
geometry-polygram|[Polygon](https://docs.manim.community/en/stable/reference/manim.mobject.geometry.polygram.Polygon.html)|多边形
geomerty-shape_matchers|[SurroundingRectangle](https://docs.manim.community/en/stable/reference/manim.mobject.geometry.shape_matchers.SurroundingRectangle.html)|给当前对象添加装饰对象
geomerty-tips|[ArrowTip](https://docs.manim.community/en/stable/reference/manim.mobject.geometry.tips.ArrowTip.html)|提示
graph|[Graph](https://docs.manim.community/en/stable/reference/manim.mobject.graph.Graph.html)|图结构
graphing-coordinate_systems|[Axes](https://docs.manim.community/en/stable/reference/manim.mobject.graphing.coordinate_systems.Axes.html#manim.mobject.graphing.coordinate_systems.Axes)|绘制直角坐标系
graphing-functions|[FunctionGraph](https://docs.manim.community/en/stable/reference/manim.mobject.graphing.functions.FunctionGraph.html)|可以根据数学公式绘制图像
graphing-numberline|[NumberLine](https://docs.manim.community/en/stable/reference/manim.mobject.graphing.number_line.NumberLine.html)|绘制有刻度的直线, 比如X轴Y轴
graphing-probability|[BarChart](https://docs.manim.community/en/stable/reference/manim.mobject.graphing.probability.BarChart.html)|饼状图
graphing-scale|[LinearBase](https://docs.manim.community/en/stable/reference/manim.mobject.graphing.scale.LinearBase.html)|刻度转换工具
matrix|[Matrix](https://docs.manim.community/en/stable/reference/manim.mobject.matrix.Matrix.html)|绘制矩阵
svg-brace|[Brace](https://docs.manim.community/en/stable/reference/manim.mobject.svg.brace.Brace.html)|括号
table|[Table](https://docs.manim.community/en/stable/reference/manim.mobject.table.Table.html)|绘制表格
text-code_mobject|[Code](https://docs.manim.community/en/stable/reference/manim.mobject.text.code_mobject.Code.html)|渲染代码, 可以高亮关键字
text-numbers|[DecimalNumber](https://docs.manim.community/en/stable/reference/manim.mobject.text.numbers.DecimalNumber.html)|渲染数字, 可以渲染变化
text-tex_mobject|[MathTex](https://docs.manim.community/en/stable/reference/manim.mobject.text.tex_mobject.MathTex.html)|渲染latex文本
text-text_mobject|[text_mobject](https://docs.manim.community/en/stable/reference/manim.mobject.text.text_mobject.html#module-manim.mobject.text.text_mobject)|渲染非latex文字
three_d|
types-image_mobject|[ImageMobject](https://docs.manim.community/en/stable/reference/manim.mobject.types.image_mobject.ImageMobject.html)|渲染图片
types-point_cloud_mobject|[Point](https://docs.manim.community/en/stable/reference/manim.mobject.types.point_cloud_mobject.Point.html)|渲染点分布图
types-vectorized_mobject|[VGroup](https://docs.manim.community/en/stable/reference/manim.mobject.types.vectorized_mobject.VGroup.html)|批量操作
value_tracker|[ValueTracker](https://docs.manim.community/en/stable/reference/manim.mobject.value_tracker.ValueTracker.html)|追踪值
vector_field|[ArrowVectorField](https://docs.manim.community/en/stable/reference/manim.mobject.vector_field.ArrowVectorField.html)|渲染场


参考:
https://docs.manim.community/en/stable/reference_index/mobjects.html