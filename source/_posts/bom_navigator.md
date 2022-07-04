---
title: bom_navigator
toc: true
date: 2021-01-20 22:03:54
---

# navigator 对象
navigator 对象包含有关浏览器的信息，它有很多属性，我们最常用的是 userAgent，该属性可以返回由客户机发送服务器的 user-agent 头部的值。
判断用户那个终端打开页面，实现跳转
```js
if((navigator.userAgent.match("/(phone|pad|pod|iPhone|)"))) {
    window.location.href = "";     //手机
 } else {
    window.location.href = "";     //电脑
 }

```