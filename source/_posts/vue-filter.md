---
title: vue-filter
toc: true
date: 2021-10-25 22:03:54
tags:
---

# 基础
1. 对要显示的数据进行特定格式化后再显示。
2. 注册过滤器：`Vue.filter(name,callback)` 或 `new Vue{filters:{}}`
3. 使用过滤器：`{{ xxx | 过滤器名}}`  或  v-bind:属性 = "xxx | 过滤器名"
在渲染name的时候先调用filterFn方法

# 样例
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
</head>

<body>
    <div id='filter'>
        <p>{{msg | msgFormat1('Format1')}}</p>
        <p>{{msg | msgFormat2('Format2')}}</p>
    </div>
    <script>
        //过滤器定义方法filter(方法名,方法体),Vue.filter创建的是全局过滤器,所有的vue对象共享
        Vue.filter('msgFormat1', function (msg, arg) {
            return msg + arg
        })
        var filter = new Vue({
            el: '#filter',
            data: {
                msg: 'hello'
            },
            filters: {
                //也可以定义为一个vue对象私有的过滤器
                msgFormat2: function (msg, arg) {
                    return msg + arg
                }
            }
        })
    </script>
</body>
</html>
```
