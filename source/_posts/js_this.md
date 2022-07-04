---
title: js_this
toc: true
date: 2021-01-20 22:03:54
---

this指的是本"对象"

如果函数属于全局,则`this`代表的是全局对象
```js
var x = myFunction();            // x 将成为 window 对象

function myFunction() {
   return this;
}
```

如果函数属于某个对象,则`this`代表的是该对象


```js
function Person(name, age) {
    this.name = first;
    this.age = age;
}
var father = new Person("wang", 18);
```
参考:
https://www.w3school.com.cn/js/js_function_invocation.asp