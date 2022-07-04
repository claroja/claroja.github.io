---
title: dom_elementPos
toc: true
date: 2021-01-20 22:03:54
---

三大系列大小对比|作用
--|--
element.offsetWidth|返回自身包括padding、边框、内容区的宽度，返回数值不带单位
element.clientWidth|返回自身包括padding、内容区的宽度， 不含边框，返回数值不带单位
element.scrollWidth|返回自身实际的宽度，不含边框，返回数值不带单位


[1.png](1.png)

他们主要用法:
1.offset系列 经常用于获得元素位置offsetLeft offsetTop
2. client 经常用于获取元素大小clientWidth clientHeight
3. scroll经常用于获取滚动距离scrollTop scrolleft
4.注意页面滚动的距离通过window. pagexoffset获得