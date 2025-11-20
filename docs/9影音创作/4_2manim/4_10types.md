# types


- image_mobject：表示光栅图像的对象集合（Mobjects），用于在场景中导入和展示位图（如 PNG、JPG 等格式的 raster 图像）

    - AbstractImageMobject：自动过滤黑色像素的抽象图像对象（ImageMobject 的父类，提供黑色像素过滤的核心功能）
    - ImageMobject：从 NumPy 数组或文件中加载并显示图像的对象（支持 PNG、JPG 等格式，是光栅图像可视化的核心组件）
    - ImageMobjectFromCamera：从相机获取图像的图像对象（专门用于读取相机捕捉的画面，适配实时图像或相机数据可视化场景）

- point_cloud_mobject：表示点云的对象集合（Mobjects），适配三维/二维点云的可视化场景，用于展示大量离散点组成的集合形态

    - Mobject1D：一维对象（Mobject），用于表示一维维度的可视化元素（如线段、曲线等）
    - Mobject2D：二维对象（Mobject），用于表示二维维度的可视化元素（如平面图形、文本等）
    - PGroup：点对象（point mobjects）的集合组，专门用于管理多个点类对象的组合操作
    - PMobject：由点云（Dots）组成的圆盘状对象，核心是通过离散点模拟圆盘形态
    - Point：表示单个点的对象（Mobject），适配二维/三维空间的基础点标记
    - PointCloudDot：由点云组成的圆盘状对象，与 PMobject 功能类似，通过密集点集呈现圆盘效果

- vectorized_mobject：使用矢量图形的对象集合（Mobjects），核心特点是无损缩放，包含各类基于矢量的图形、文本等组件（如之前的 SVGMobject、VMobject 等均属于此类）

    - CurvesAsSubmobjects：将曲线的元素转换为子对象（用于拆分曲线结构，方便单独操作曲线的局部元素）
    - DashedVMobject：由虚线而非实线组成的矢量对象（VMobject），适配需要虚线样式的图形、线条场景
    - VDict：类 VGroup 的字典式矢量对象组，支持通过键（key）访问子对象，兼具分组管理和字典查询特性
    - VGroup：矢量对象（vectorized mobjects）的集合组，用于统一管理多个矢量对象，方便批量操作（如移动、缩放）
    - VMobject：基础矢量对象，是所有矢量可视化组件的核心父类，提供矢量图形的基础特性（无损缩放、路径编辑等）
    - VectorizedPoint：矢量化点对象，以矢量形式呈现的点标记，适配需要无损缩放的点可视化场景









