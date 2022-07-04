---
title: js_variable
toc: true
date: 2021-01-20 22:03:54
---

# 变量
```js
// 1. 定义变量
let myname = 'wang';
console.log(myname);
// 2. 声明变量的特殊情况
// 3.1 只声明不赋值 结果是？  程序也不知道里面存的是啥 所以结果是 undefined  未定义的
let sex;
console.log(sex); // undefined
```
# 变量类型
7中基础数据类型
类型|描述
--|--
Number|An integer or floating point number. For example: 42 or 3.14159.
BigInt|An integer with arbitrary precision. For example: 9007199254740992n.
String|A sequence of characters that represent a text value. For example: "Howdy"
Boolean.|true and false.
null|A special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)
undefined|A top-level property whose value is not defined.
Symbol (new in ECMAScript 2015)| A data type whose instances are unique and immutable.

```js
typeof ""                  // 返回 "string"
typeof "Bill"              // 返回 "string"**
typeof 0                   // 返回 "number"
typeof 314                 // 返回 "number"
typeof true				   // 返回 "boolean"
var person; typeof person;   // 值是 undefined，类型是 undefined
typeof undefined              // undefined
typeof null                   // object
null === undefined            // false
null == undefined             // true
```
# typeof
typeof是关键字, 不是方法
```js
var num = 10;
console.log(typeof num); // number
var str = 'pink';
console.log(typeof str); // string
var flag = true;
console.log(typeof flag); // boolean
var vari = undefined;
console.log(typeof vari); // undefined
var timer = null;
console.log(typeof timer); // object
```


参考:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types