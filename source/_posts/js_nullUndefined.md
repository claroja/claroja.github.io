---
title: js_nullUndefined
toc: true
date: 2021-01-20 22:03:54
---

# undefined和null
```js
// 如果一个变量声明未赋值 就是 undefined 未定义数据类型
var str;
console.log(str);
var variable = undefined;
console.log(variable + 'pink'); // undefinedpink
console.log(variable + 1); // NaN  undefined 和数字相加 最后的结果是 NaN
// null 空值
var space = null;
console.log(space + 'pink'); // nullpink
console.log(space + 1); // 1
```
