---
title: vue_intro
toc: true
date: 2021-10-25 22:03:54
---

## vue安装
[vue_cli](/vue_cli/)

## vue对象内部组件
vue通过数据代理的方式, 将各个属性(`data`,`methods`,`computed`等)挂载到vm对象上, 所以可以通过`this`指针直接访问.

属性|描述|参考
--|--|--
el|将vm对象与具体的htmlElement进行绑定|[vue_el_data](/vue_el_data/)
data|挂载的数据|[vue_el_data](/vue_el_data/), v-bind.md, v-model.md, 深层监测.md
methods|挂载的方法|[vue_methods](/vue_methods/), v-on.md
computed|挂载的数据, 该数据是计算得来|[vue-computed](/vue-computed/)
watch|computed的高级版|[vue_watch](/vue_watch/)
set|数据深层监测,比如list中的元素|[vue_set](/vue_set/)
lifecycle|vue的生命周期函数, 用来初始化或销毁时做一些东西|[vue_lifecycle](/vue_lifecycle/)
filters|过滤方法, 用来格式化最终渲染的结果|[vue-filter](/vue-filter/)

## vue对象与htmlElement交互
- vue的数据如何与htmlElement属性绑定
- vue的方法如何与htmlElement事件绑定

指令|描述|参考
--|--|--
v-bind|将标签的属性值与vm对象上的数据进行绑定|[vue_v-bind](/vue_v-bind/)
v-model|同v-bind, 但是双向的|[vue_v-model](/vue_v-model/)
v-on|将元素事件与vm对象的方法进行绑定|[vue_v-on](/vue_v-on/)
ref|引用Element|[vue_ref](/vue_ref/)

## 指令渲染htmlElement部分

指令|描述|参考
--|--|--
`{{}}`|渲染数据|[vue_el_data](/vue_el_data/)
v-for|循环渲染Element|[vue_v-for](/vue_v-for/)
v-if_show|条件渲染Element|[vue_v-if_show](/vue_v-if_show/)
v-once|仅仅渲染一次|[vue_v-once](/vue_v-once/)
v-pre|不编译此Element, 可加快渲染速度|[vue_v-pre](/vue_v-pre/)
directive|自定义指令|[vue-directive](/vue-directive/)


## 组件component
指令|描述|参考
--|--|--
component|定义及使用组件|[vue-component](/vue-component/)
slot|类比props,通过组件标签中的值,向组件中slot位置传值[vue_slot](/vue_slot/)
props|类比slot,通过组件标签属性的值, 向组件中的props传值,然后绑定到data[vue_props](/vue_props/)
mixin|提取公共方法|[vue_mixin](/vue_mixin/)


## 其他插件
插件|描述|参考
--|--|--
vuex|数据存储及交换|[vue_vuex](/vue_vuex/)
router|路由|[vue_router](/vue_router/)
