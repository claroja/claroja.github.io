---
title: js_flowControl
toc: true
date: 2021-01-20 22:03:54
---

# 条件语句的流程控制
条件语句只有在前面的条件判定为true时, 后面的才会继续执行判断. 这样的特性就可以用来实现"前面必须为真才执行后面"的逻辑.参考operator文章中的逻辑中断章节.

```js
true && console.log("hello") // hello, 前面半句是true, 所以console执行了
false && console.log("hello") // false, 前面的逻辑是false, 所以console没有执行
true && false //false
true && false && console.log("hello") //false, 因为前面 true && false的结果为false, 所以后面没有执行
```
又因为空字符串`""`和`0`都会中断逻辑, 所以也可以实现以下的逻辑判断:
```js
"" && "" && console.log("hello")  //''
"123" && "" && console.log("hello") //''
"123" && "123" && console.log("hello") //hello
```
# if
```js
if (条件表达式1) {
    // 语句1;
} else if (条件表达式2) {
    // 语句2;
} else if (条件表达式3) {
    // 语句3;
} else {
    // 最后的语句;
}
```

# 三元表达式
语法:
条件表达式 ？ 表达式1 ： 表达式2
执行思路
/如果条件表达式结果为真 则 返回 表达式1 的值 如果条件表达式结果为假 则返回 表达式2 的值
```js
var num = 10;
var result = num > 5 ? '是的' : '不是的'; // 我们知道表达式是有返回值的
console.log(result);
// if (num > 5) {
//     result = '是的';
// } else {
//     result = '不是的';
// }

```

# switch
switch 转换、开关  case 小例子或者选项的意思
语法: 
switch (表达式) {
    case value1:
        执行语句1;
        break;
    case value2:
        执行语句2;
        break;
        ...
        default:
            执行最后的语句;
}
执行逻辑:
利用我们的表达式的值 和 case 后面的选项值相匹配 如果匹配上，就执行该case 里面的语句  如果都没有匹配上，那么执行 default里面的语句

```js
var num = 1;
switch (num) {
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
        break;
}
// 1. 我们开发里面 表达式我们经常写成变量
// 2. 我们num 的值 和 case 里面的值相匹配的时候是 全等   必须是值和数据类型一致才可以 num === 1
// 3. break 如果当前的case里面没有break 则不会退出switch 是继续执行下一个case
```



# for
语法:
```js
for (初始化变量; 条件表达式; 操作表达式) {
    // 循环体
}
```
- 初始化变量 就是用var 声明的一个普通变量， 通常用于作为计数器使用 
- 条件表达式 就是用来决定每一次循环是否继续执行 就是终止的条件
- 操作表达式 是每次循环最后执行的代码 经常用于我们计数器变量进行更新（递增或者递减）
```js
for (var i = 1; i <= 100; i++) {
    console.log('你好吗');
}
```

# while
语法:
```js
while (条件表达式) {
    // 循环体
}
```
执行逻辑:
当条件表达式结果为true 则执行循环体 否则 退出循环
```js
var num = 1;
while (num <= 100) {
    console.log('好啊有');
    num
```
do while 语法:
// 1.do while 循环 语法结构
```js

do {
    // 循环体
} while (条件表达式)

```
执行逻辑: 
跟while不同的地方在于 do while 先执行一次循环体 在判断条件 如果条件表达式结果为真，则继续执行循环体，否则退出循环
```js
var i = 1;
do {
    console.log('how are you?');
    i++;
} while (i <= 100)
```

# continue
continue 
退出本次当前次的循环, 继续执行剩余次数循环

```js
for (var i = 1; i <= 5; i++) {
    if (i == 3) {
        continue; // 只要遇见 continue就退出本次循环 直接跳到 i++
    }
    console.log('我正在吃第' + i + '个包子');

}
```

# break
break 退出整个循环
```js
for (var i = 1; i <= 5; i++) {
    if (i == 3) {
        break;
    }
    console.log('我正在吃第' + i + '个包子');
}
```