---
title: css_loadCSS
toc: true
date: 2021-01-20 22:03:54
---
# 导入css样式

## 写在html文件中, 使用style标签

```html
<head>
    <style>
            div {
                color: pink;
            }
     </style>
</head>
<body>
    <div>写到style标签内部.</div>
</body>
```
## 写在标签中
```html
<p style="color: pink; font-size: 20px;">写在具体标签内部</p>
```

## 从外部导入
```html
<link rel="stylesheet" href="style.css">
```
