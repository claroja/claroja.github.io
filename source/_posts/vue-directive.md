---
title: vue-directive
toc: true
date: 2021-10-25 22:03:54
tags:
---


# 基础
1. 局部指令: `new Vue({directives:{指令名:配置对象}`  或  `directives{指令名:回调函数}})`																
2. 全局指令：`Vue.directive(指令名,配置对象)` 或   `Vue.directive(指令名,回调函数)`
3. 配置对象中常用的3个回调：
    (1).bind：指令与元素成功绑定时调用。
    (2).inserted：指令所在元素被插入页面时调用。
    (3).update：指令所在模板结构被重新解析时调用。
4. 指令定义时不加v-，但使用时要加v-；
5. 指令名如果是多个单词，要使用kebab-case命名方式，不要用camelCase命名。

# 样例
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Document</title>
    <script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
</head>

<body>
    <p>通过指令获得第二个输入框的输入焦点,指令定义的focus方法,但是在调用的时候要添加v-既v-focus</p>
    <p>v-color后面的参数,在vue里根据binding.value来获得</p>
    <p>在vue对象里使用directives属性来设置局部的指令</p>
    <div id="directive">
        <input type="text">
        <input type="text" v-focus>
        <input type="text" v-color1="'red'">
        <input type="text" v-color2="'blue'">
    </div>

    <script>
        //el参数就是document对象,可以直接调用相应的方法,
        //bind是和元素绑定的时间,inserted是元素插入dom的时间,updated是元素更新的时间,焦点实在dom加载完成后才有的,所以要在inserted里绑定,bind里绑定无效
        Vue.directive('focus', {
            bind: function () {},
            inserted: function (el) {
                el.focus()
            },
            updated: function () {}
        })
        //color在元素绑定的时候就可以设置,然后一起插入到dom中
        //v-color="参数"可以通过binding的value属性来获得

        Vue.directive('color1', {
            bind: function (el, binding) {
                el.style.color = binding.value
            },
            inserted: function () {},
            updated: function () {}
        })

        var directive = new Vue({
            el: '#directive',
            data: {
                msg: 'hello'
            },
            directives: {
                'color2': {
                    bind: function (el, binding) {
                        el.style.color = binding.value
                    }
                }
            }
        })
    </script>
</body>

</html>
```
