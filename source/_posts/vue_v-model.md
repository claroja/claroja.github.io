---
title: vue_v-model
toc: true
date: 2021-10-25 22:03:54
tags:
---
# 基础
1. `v-model`是双向数据绑定, this.msg修改后界面会改变,这是由m到v; 界面修改保存到this.msg,既由v到m. 区别于`v-bind:`的单向绑定
2. `v-model`主要用在表单元素中input select checkbox
3. `v-model`默认的就是和`value`值绑定, 所以可以将`v-model:value="msg"`简写为`v-model="msg"`

# 例子
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>v-model</title>
    <script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
</head>

<body>
    <div id="model">
        <input type="text" v-model="msg"> 
        <p v-text="msg"></p>
    </div>
    <script>
        var model = new Vue({
            el: '#model',
            data: {
                msg: "hello"
            },
        })
    </script>
</body>
</html>

```