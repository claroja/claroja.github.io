# [geometry](https://docs.manim.community/en/stable/reference/manim.mobject.geometry.html)

- arc：曲线类几何对象

    - AnnotationDot：用于场景标注的圆点，半径更大且描边加粗
    - AnnularSector：圆环的扇形部分（环形扇形）
    - Annulus：两个同心圆之间的环形区域
    - Arc：圆形弧段（圆弧）
    - ArcBetweenPoints：继承自 Arc，额外接收两个点，弧段将在这两点间延伸
    - ArcPolygon：广义多边形，支持顶点间用弧段连接
    - ArcPolygonFromArcs：广义多边形，支持顶点间用弧段连接
    - Circle：圆形
    - CubicBezier：三次贝塞尔曲线
    - CurvedArrow：弯曲箭头
    - CurvedDoubleArrow：双向弯曲箭头
    - Dot：半径极小的圆点
    - Ellipse：椭圆（含圆形的卵形曲线）
    - LabeledDot：中心包含标签的圆点
    - Sector：圆形的扇形部分
    - TipableVMobject：用于 Arc 和 Line 的共享功能基类（支持添加尖端）

- boolean_ops：二维几何对象的布尔运算（如交集、并集、差集等）

    - Difference：从一个几何对象中减去另一个几何对象（差集运算，保留前者未被后者覆盖的部分）
    - Exclusion：求两个几何对象的异或集（仅保留两个对象互不重叠的部分）
    - Intersection：求两个几何对象的交集（仅保留两者重叠的部分）
    - Union：求两个或多个几何对象的并集（合并所有对象，去除重叠部分的重复绘制）

- labeled：继承自线条类，且沿长度方向包含标签的几何对象

    - Label：由文本和外围边框组成的标签（文本与边框一体化，直接用于标注）
    - LabeledArrow：箭头类标签对象，标签框位于箭头长度方向的任意位置
    - LabeledLine：线条类标签对象，标签框位于线条长度方向的任意位置
    - LabeledPolygram：多角形类标签对象，标签框位于其不可达极点处（即图形内部较空旷的核心位置）

- line：线条及线条变体类几何对象

    - Angle：用于表示两条线夹角的几何对象，形式可为圆弧或直角弯折样式
    - Arrow：单向箭头（带单一尖端的箭头线）
    - DashedLine：虚线（由间断线段组成的线条）
    - DoubleArrow：双向箭头（两端均带尖端的箭头线）
    - Elbow：呈L形的弯折线条，两条线段相互垂直形成直角
    - Line：基础直线（无尖端、连续的纯色线条）
    - RightAngle：用于表示两条线间直角的弯折型几何对象（专门适配直角标注场景）
    - TangentLine：在指定几何对象的特定点处构建的切线
    - Vector：专为图表场景设计的向量线（带方向和长度属性，适配坐标运算）

- polygram：简单几何形状类几何对象

    - ConvexHull：为无序点集构建凸包（包含所有点的最小凸多边形）
    - Cutout：带有小型挖空区域的复合形状
    - Polygon：由单一闭合顶点环构成的多边形
    - Polygram：广义多边形，支持不连通的边集（可含交叉边）
    - Rectangle：具有两组对边平行的四边形
    - RegularPolygon：具有n条等长边的正多边形（如正五边形、正六边形）
    - RegularPolygram：顶点呈规则间隔分布的多角形（如五角星的基础结构）
    - RoundedRectangle：四角为圆角设计的矩形
    - Square：四条边长相等的矩形
    - Star：无交叉线的正多角形（标准化星形结构）
    - Triangle：等边三角形（三条边长相等、内角均为60°）

- shape_matchers：用于标记和注释其他几何对象的几何对象

    - BackgroundRectangle：背景矩形（用于为目标对象添加背景衬托，可自定义颜色、透明度）
    - Cross：十字形（基础交叉线条组成，支持调整线条粗细、交叉角度）
    - SurroundingRectangle：环绕矩形（自动贴合目标几何对象的外围，实现包裹式框选）
    - Underline：下划线（适配文本、图形等对象，可调整长度、厚度与间距）

- tips：适用于 TipableVMobject 的尖端几何对象集合

    - ArrowCircleFilledTip：圆形箭头尖端，尖端为填充样式
    - ArrowCircleTip：圆形箭头尖端（空心样式）
    - ArrowSquareFilledTip：方形箭头尖端，尖端为填充样式
    - ArrowSquareTip：方形箭头尖端（空心样式）
    - ArrowTip：箭头尖端的基类（用于自定义箭头尖端的基础模板）
    - ArrowTriangleFilledTip：三角形箭头尖端，尖端为填充样式
    - ArrowTriangleTip：三角形箭头尖端（空心样式）
    - StealthTip：隐形战机/风筝形箭头尖端（锐利流线型设计）



## arc

## boolean_ops

## labeled


## line


## polygram


## shape_matchers


- [BackgroundRectangle](https://docs.manim.community/en/stable/reference/manim.mobject.geometry.shape_matchers.BackgroundRectangle.html)

    给Mobject增加背景颜色, 类似与word里的纹理. `backgroundRectangle1 = BackgroundRectangle(circle, color=WHITE, fill_opacity=0.15)`

- [Cross](https://docs.manim.community/en/stable/reference/manim.mobject.geometry.shape_matchers.Cross.html)

    给Mobject创建十字标志. `cross = Cross(circle)`


- [SurroundingRectangle](https://docs.manim.community/en/stable/reference/manim.mobject.geometry.shape_matchers.SurroundingRectangle.html)

    给Mobject环绕矩形. `box = SurroundingRectangle(quote, color=YELLOW, buff=MED_LARGE_BUFF)`

## tips