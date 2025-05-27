# template

`<template>`中主要操作指令来进行渲染.

## 指令的概念

指令是带有`v-`的属性. 一个指令的任务是在其表达式的值变化时响应式地更新 DOM。下例中, `v-if` 指令会基于表达式 `seen` 的值的真假来移除/插入该 `<p>` 元素。

```htm
<p v-if="seen">Now you see me</p>
```

## 参数

### 一般参数

一些指令会需要参数, 例如用 `v-bind` 指令来响应式地更新一个 HTML 属性. 举两个例子:

1. 下例中 `href` 就是一个参数，它告诉 `v-bind` 指令将表达式 `url` 的值绑定到元素的 `href` 属性上。

    ```htm
    <a v-bind:href="url"> ... </a>
    ```

2. 下例中的参数是要监听的事件名称：click。

    ```htm
    <a v-on:click="doSomething"> ... </a>

    <!-- 简写 -->
    <a @click="doSomething"> ... </a>
    ```

### 动态参数

这里的 attributeName 会作为一个 JavaScript 表达式被动态执行，计算得到的值会被用作最终的参数。举例来说，如果你的组件实例有一个数据属性 attributeName，其值为 "href"，那么这个绑定就等价于 v-bind:href。

```htm
<a v-bind:[attributeName]="url"> ... </a>

<!-- 简写 -->
<a :[attributeName]="url"> ... </a>
```

相似地，你还可以将一个函数绑定到动态的事件名称上：

```htm
<a v-on:[eventName]="doSomething"> ... </a>

<!-- 简写 -->
<a @[eventName]="doSomething"> ... </a>
```


## 修饰符(Modifiers)

修饰符是以点开头的特殊后缀，表明指令需要以一些特殊的方式被绑定。例如 .prevent 修饰符会告知 v-on 指令对触发的事件调用 event.preventDefault()：

```htm
<form @submit.prevent="onSubmit">...</form>
```


## 指令总结


![指令](https://cn.vuejs.org/assets/directive.DtZKvoAo.png)

## 参考
1. https://cn.vuejs.org/guide/essentials/template-syntax.html