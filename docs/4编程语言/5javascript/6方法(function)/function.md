# function

## 函数
函数使用分为两步： 声明函数 和 调用函数

声明函数

```js
function 函数名() {
    // 函数体
}
```

调用函数

```js
function sayHi() {
    console.log('hi~~');

}
```


## 函数定义
```js
function funcName(a, b) { return a * b };  //普通函数定义
var funcName = function(a, b){ return a * b}; //匿名函数,使用变量接收
const funcName = (x, y) => x * y;// 匿名函数的简写形式
const funcName = (x, y) => { return x * y };// 如果函数体逻辑复杂,考虑保留花括号
```


## 参数
- 函数参数（Function parameters）是在函数定义中所列的名称。
- 函数参数（Function arguments）是当调用函数时由函数接收的真实的值。\


```js
function 函数名(形参1,形参2...) { // 在声明函数的小括号里面是 形参 （形式上的参数）
}
```

```js
function cook(aru) { // 形参是接受实参的  aru = '酸辣土豆丝' 形参类似于一个变量
    console.log(aru);
}
cook('酸辣土豆丝');
```


## 返回值
语法:
```js
function 函数名() {
    return 需要返回的结果;
}
```

```js
function getResult() {
    return 666;
}
getResult(); // getResult()   = 666
console.log(getResult());
```

注意:
1. return 终止函数
2. return 只能返回一个值
3. 我们求任意两个数的 加减乘数结果
4. 我们的函数如果有return 则返回的是 return 后面的值，如果函数么有 return 则返回undefined


## arguments

只有函数才有 arguments对象, 而且是每个函数都内置好了这个arguments

```js
function fn() {
    // console.log(arguments); // 里面存储了所有传递过来的实参  arguments = [1,2,3]
    // console.log(arguments.length);
    // console.log(arguments[2]);
    // 我们可以按照数组的方式遍历arguments
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
fn(1, 2, 3);
```


## 作用域

JavaScript作用域: 就是代码名字（变量）在某个范围内起作用和效果 目的是为了提高程序的可靠性更重要的是减少命名冲突

```js
// 全局作用域： 整个script标签 或者是一个单独的js文件
var num = 10;
var num = 30;
console.log(num);

// 局部作用域（函数作用域） 在函数内部就是局部作用域 这个代码的名字只在函数内部起效果和作用
function fn() {
    // 局部作用域
    var num = 20;
    console.log(num);

}
fn();
```

```js
// 我们js 也是在 es6 的时候新增的块级作用域
// 块级作用域 {}   if {}  for {}
// java 
// if(xx) {
//     int num = 10;
// }
// 外面的是不能调用num的
if (3 < 5) {
    var num = 10;
}
console.log(num);
```

## 自调用函数
使用`()`将函数体包围,并在后面添加`()`来调用该函数
```js
(function () {
    var x = "Hello!!";      //我会调用我自己
})();
```

## 值传递引用传递
1. 原始类型(primitive)是值传递
2. 容器类型和对象是引用传递