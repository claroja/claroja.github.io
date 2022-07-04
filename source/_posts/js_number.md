---
title: js_number
toc: true
date: 2021-01-20 22:03:54
---
# Numbner类型
1.javascript只有数值型,不分整形和浮点型
```js
var num = 10; // num 数字型 
// 1. 八进制  0 ~ 7  我们程序里面数字前面加0 表示八进制
var num1 = 010;
console.log(num1); //  010  八进制 转换为 10进制 就是  8 
// 2. 十六进制  0 ~ 9  a ~ f    #ffffff  数字的前面加 0x 表示十六进制
var num3 = 0x9;
console.log(num3);
// 3. 数字型的最大值
console.log(Number.MAX_VALUE);
// 4. 数字型的最小值
console.log(Number.MIN_VALUE);
// 5. 无穷大
console.log(Number.MAX_VALUE * 2); // Infinity 无穷大  
// 6. 无穷小
console.log(-Number.MAX_VALUE * 2); // -Infinity 无穷大

// 7. isNaN() 这个方法用来判断非数字   并且返回一个值 如果是数字返回的是 false 如果不是数字返回的是true
console.log(isNaN(12)); // false
console.log(isNaN('12')); // true
```
参考:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates