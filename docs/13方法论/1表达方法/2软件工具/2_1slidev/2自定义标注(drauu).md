
# 标注(drauu)



在录制视频的时候不想显示drauu的工具栏. 有两种方法:

1. (建议)使用演讲者模式, 在演讲窗口标注, 会实时在展示窗口显示
2. 自定义标注插件

    主要实现两个目的:
    1. 使用快捷键激活标注模式
    2. 隐藏左上方的标注的控制条

    [使用快捷键激活标注模式](https://cn.sli.dev/custom/config-shortcuts).

    ```js
    {
        key: 'enter',
        fn: () => nav.toggleDrawing(),
        autoRepeat: true,
    },
    ```

    隐藏标注的控制条与更改默认颜色

    1. 找到`node_modules\@slidev\client\internals\DrawingControls.vue`
    2. 在`<template>`的`<Draggable>`组件上加上样式`style="visibility:hidden;"`
    3. 在`<script>`中添加`drauu.brush.color = 'skyblue'`

