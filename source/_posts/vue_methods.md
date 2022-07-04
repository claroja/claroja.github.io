---
title: vue_methods
toc: true
date: 2021-12-05 22:03:54
---

methods中配置的函数，都是被Vue所管理的函数，this的指向是vm 或 组件实例对象
methods中配置的函数，不要用箭头函数！否则this就不是vm
两个重要的小原则：
    1.所被Vue管理的函数，最好写成普通函数，这样this的指向才是vm 或 组件实例对象。
    2.所有不被Vue所管理的函数（定时器的回调函数、ajax的回调函数等、Promise的回调函数），最好写成箭头函数(这时this会跳出该函数的范围)，这样this的指向才是vm 或 组件实例对象。


```html
<div id="this">
    <input type="button" v-bind:value="msg" v-on:click="sub">
</div>
<hr>
<script>
    var _this = new Vue({
        el: '#this',
        data: {
            msg: 9
        },
        methods: {
            sub() {
                this.msg = this.msg -1
            }
        },
    })
</script>
```