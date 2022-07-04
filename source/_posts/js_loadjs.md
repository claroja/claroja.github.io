---
title: js_loadjs
toc: true
date: 2021-01-20 22:03:54
---

- 内嵌在`<script>`标签内
- 在`<script src="">`中引入
- 在标签内部, 与具体时间绑定

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style></style>
    <!-- 1.内嵌式的js -->
    <script>
        // alert('沙漠骆驼');
    </script>
    <!-- 2. 外部js script 双标签 -->
    <script src="my.js"></script>
</head>
<body>
    <!-- 3. 行内式的js 直接写到元素的内部 -->
    <!-- <input type="button" value="hello" onclick="alert('world')"> -->
</body>
</html>
```