---
title: css_transition
toc: true
date: 2021-01-20 22:03:54
---
语法：
```css
transition: 要过渡的属性  花费时间  运动曲线  何时开始;
```

- 属性: 想要变化的css属性, 宽度高度 背景颜色 内外边距都可以. 如果想要所有的属性都变化过渡, 写一个all 就可以
- 花费时间： 单位是 秒（必须写单位） 比如 0.5s 
- 运动曲线： 默认是 ease （可以省略）
- 何时开始：单位是 秒（必须写单位）可以设置延迟触发时间, 默认是 0s

例子:

步骤：
- 创建两个div的盒子，属于的嵌套关系，外层类名叫 bar，里层类名叫 bar_in
- 给外层的bar 这个盒子设置边框，宽高，圆角边框
- 给里层的bar_in  设置 初试的宽度，背景颜色，过渡效果
- 给外层的 bar 添加 hover事件，当触发了hover事件 让里层的bar_in 来进行宽度的变化

代码：
```html
<head>
    ...
    <style>
        .bar {
            width: 150px;
            height: 15px;
            border: 1px solid red;
            border-radius: 7px;
            padding: 1px;
        }
        .bar_in {
            width: 50%;
            height: 100%;
            background-color: red;
            /* 谁做过渡给谁加 */
            transition: all .7s;
        }
        .bar:hover .bar_in {
            width: 100%;
        }
    </style>
</head>
<body>
    <div class="bar">
        <div class="bar_in"></div>
    </div>
</body>
```
