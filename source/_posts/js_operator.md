---
title: js_operator
toc: true
date: 2021-01-20 22:03:54
---

# 数学运算符

```js
console.log(1 + 1); // 2
console.log(1 - 1); // 0
console.log(1 * 1); // 1
console.log(1 / 1); // 1
// 1. % 取余 （取模）  
console.log(4 % 2); // 0
console.log(5 % 3); // 2
console.log(3 % 5); // 3
// 2. 浮点数 算数运算里面会有问题
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.07 * 100); // 7.000000000000001
// 3. 我们不能直接拿着浮点数来进行相比较 是否相等
var num = 0.1 + 0.2;
console.log(num == 0.3); // false
```

```js
var a = 10;
++a; // ++a  11    a = 11
var b = ++a + 2; // a = 12   ++a = 12
console.log(b); // 14
// 前置递增  先变量自加1, 再表达式
var c = 10;
c++; // c++ 11  c = 11
var d = c++ + 2; //  c++  = 11     c = 12
console.log(d); // 13
// 后置自增  先表达式返回原值 后面变量再自加1
```


# 比较运算符

```js
console.log(3 >= 5); // false
console.log(2 <= 4); // true
//1. 我们程序里面的等于符号 是 ==  默认转换数据类型 会把字符串型的数据转换为数字型 只要求值相等就可以
console.log(3 == 5); // false
console.log('pink老师' == '刘德华'); // flase
console.log(18 == 18); // true
console.log(18 == '18'); // true
console.log(18 != 18); // false
// 2. 我们程序里面有全等 一模一样  要求 两侧的值 还有 数据类型完全一致才可以 true
console.log(18 === 18);
console.log(18 === '18'); // false
```


# 逻辑运算符

```js
// 1. 逻辑与 &&  and 两侧都为true  结果才是 true  只要有一侧为false  结果就为false 
console.log(3 > 5 && 3 > 2); // false
console.log(3 < 5 && 3 > 2); // true
// 2. 逻辑或 || or  两侧都为false  结果才是假 false  只要有一侧为true  结果就是true
console.log(3 > 5 || 3 > 2); // true 
console.log(3 > 5 || 3 < 2); // false
// 3. 逻辑非  not  ！ 
console.log(!true); // false
```
## 逻辑中断
逻辑中断是指当进行逻辑判断时, 只有前面的逻辑判断为真的时候, 后面的逻辑才会继续判断, 例如:
```js
true && console.log("hello")  // 前面的逻辑为true, 才执行了console
false && console.log("hello")  // 前面的逻辑为false, 所以没有执行console
```

`&&`和`||` 不仅可以用于布尔型的值，还可以用于非布尔值，并且返回的结果可以是任何类型的值，例如：
```js
let bool = true && (3 === 4)  // 返回值为 true
let bool = true && 'haha' // 返回值为'haha'
```
由于这个特性, 除了`false`之外, 以下非布尔值也可以让逻辑中断
- null
- NaN
- 0
- 空字符串("" or '' or ``)
- undefined
例如:
```js
'haha' && 1 && null && true // 返回值为 null
'haha' && 1 && 0 && true // 返回值为 0
'haha' && 1 && '' && true // 返回值为 ''
```



# 赋值运算

```js
var num = 10;
// num = num + 1;   num++
// num = num + 2; // num += 2;
// num += 2;
num += 5;
console.log(num);
var age = 2;
age *= 3;
console.log(age);
```