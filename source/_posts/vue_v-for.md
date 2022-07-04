---
title: vue_v-for
toc: true
date: 2021-10-25 22:03:54
tags:
---


# 基础
1. 语法：v-for="(item, index) in xxx" :key="yyy"
2. 最好使用每条数据的唯一标识作为key, 比如id等唯一值。
    如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，
    使用index作为key是没有问题的。

# 实战
## 基础使用
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Document</title>
    <script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
</head>

<body>
    <div id="for">
        <p v-for="item in 5" :key="item">{{item}}</p>
        <p v-for="item in 5" :key="item">{{item}}</p>
        <p v-for="(item,index) in list" :key="index">item:{{item}}--index:{{index}}</p>
        <p v-for="(value,key) in map" :key="key">value:{{value}}--key:{{key}}</p>
    </div>
    <hr>

    <script>
        var list = new Vue({
            el: '#for',
            data: {
                list: ['a', 'b', 'c', 'd', 'e'],
                map: {
                    'key1': 'value1',
                    'key2': 'value2',
                    'key3': 'value3'
                }
            },
        })
    </script>
</body>

</html>
```

## v-for中定义临时变量
参考：
https://github.com/vuejs/core/issues/1172
https://stackoverflow.com/questions/43999618/how-to-define-a-temporary-variable-in-vue-js-template

使用`v-bind` 来绑定`set`属性， 定义一个临时变量
```html
<script setup>
</script>

<template>
<div v-for="i in [1,2,3]" :set="j=i+1">
  <p>
    {{  j  }}
  </p>
  
</div>
</template>

```