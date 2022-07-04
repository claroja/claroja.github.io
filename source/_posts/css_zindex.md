---
title: css_zindex
toc: true
date: 2021-01-20 22:03:54
---
在使用**定位**布局时，可能会**出现盒子重叠的情况**。此时，可以使用 **z-index** 来控制盒子的前后次序 (z轴)
语法:
```css
选择器 { 
z-index: 1; 
}
```
特点:
  1. **属性值**：**正整数**、**负整数**或 **0**，默认值是 0，数值越大，盒子越靠上；
  2. 如果**属性值相同**，则按照书写顺序，**后来居上**；
  3. 数字后面**不能加单位**。
**注意**：`z-index` 只能应用于**相对定位**、**绝对定位**和**固定定位**的元素，其他**标准流**、**浮动**和**静态定位**无效。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>定位的堆叠顺序</title>
    <style>
        .box {
            position: absolute;
            top: 0;
            left: 0;
            width: 200px;
            height: 200px;
        }
        .red {
            background-color: red;
            z-index: 1;
        }
        .green {
            background-color: green;
            left: 50px;
            top: 50px;
            z-index: 2;
        }
        .blue {
            background-color:blue;
            left: 100px;
            top: 100px;
        }
    </style>
</head>
<body>
    <div class="box red">red</div>
    <div class="box green">green</div>
    <div class="box blue">blue</div>
</body>
</html>

```