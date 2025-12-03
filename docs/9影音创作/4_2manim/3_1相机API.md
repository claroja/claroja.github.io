# cameras





## API

- camera：将场景（Scene）中包含的对象（mobjects）转换为像素数组的相机

    - BackgroundColoredVMobjectDisplayer：辅助类，用于处理带有设定背景图像的矢量化对象（vectorized mobjects）的显示
    - Camera：相机基类（所有相机类的基础父类）


- mapping_camera：支持对象间映射功能的相机

    - MappingCamera：支持对象间映射功能的相机对象（与之前的 mapping_camera 含义一致，仅类名首字母大写，符合 Manim 类命名规范）
    - OldMultiCamera：旧版多视角相机（历史版本的多视角相机实现）
    - SplitScreenCamera：分屏相机（支持将场景画面拆分为多个分屏显示的相机）


- moving_camera：能够在场景中移动的相机

    - MovingCamera：与自身“帧”（一个矩形 Rectangle）的高度、宽度和位置保持一致的移动相机

- multi_camera：支持多视角的相机

    - MultiCamera：支持多视角的相机对象（可同时呈现场景的多个不同视角）

- three_d_camera：可在三维空间中调整位置和朝向的相机

    - ThreeDCamera















