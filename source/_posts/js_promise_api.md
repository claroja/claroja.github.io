---
title: js_promise_api
toc: true
date: 2021-01-20 22:03:54
---
# Promise 构造函数: 
`Promise (excutor) {}`
1. executor 函数, 执行器`(resolve, reject) => {}`   executor 会在 Promise 内部立即同步调用
2. resolve 函数, 内部定义成功时我们调用的函数`value => {}`
3. reject 函数, 内部定义失败时我们调用的函数`reason => {}`


# Promise.prototype.then 

方法: (onResolved, onRejected) => {} 
1. onResolved 函数:  成功的回调函数    (value) => {} 
2. onRejected 函数:  失败的回调函数  (reason) => {} 
说明:  指定用于得到成功 value 的成功回调和用于得到失败 reason 的失败回调 
返回一个新的 promise 对象 

# Promise.prototype.catch 
方法: (onRejected) => {} 
1. onRejected 函数:  失败的回调函数  (reason) => {} 
说明: then()的语法糖,  相当于: then(undefined, onRejected)

```js
let p = new Promise((resolve, reject) => {
    // ** 同步调用
    // console.log(111);
    //修改 promise 对象的状态
    reject('error');
});

// console.log(222);

//执行 catch 方法
p.catch(reason => {
    console.log(reason);
});
```


# Promise.resolve 
方法: (value) => {} 是类方法, 不是实例方法
1. value:  成功的数据或 promise 对象 
说明:  返回一个成功/失败的 promise 对象

```js
let p1 = Promise.resolve(521);
//如果传入的参数为 非Promise类型的对象, 则返回的结果为成功promise对象
//如果传入的参数为 Promise 对象, 则参数的结果决定了 resolve 的结果
let p2 = Promise.resolve(new Promise((resolve, reject) => {
    // resolve('OK');
    reject('Error');
}));
// console.log(p2);
p2.catch(reason => {
    console.log(reason);
})
```

# Promise.reject 
方法: (reason) => {} 是类方法, 不是实例方法
1. reason:  失败的原因 
说明:  返回一个失败的 promise 对象 
```js
// let p = Promise.reject(521);
// let p2 = Promise.reject('iloveyou');
let p3 = Promise.reject(new Promise((resolve, reject) => {
    resolve('OK');
}));

console.log(p3);
```

1. Promise.all 方法: (promises) => {} 是类方法, 不是实例方法
1. promises:  包含 n 个 promise 的数组 
说明:  返回一个新的 promise,  只有所有的 promise 都成功才成功,  只要有一个失败了就
直接失败 
```js
let p1 = new Promise((resolve, reject) => {
    resolve('OK');
})
// let p2 = Promise.resolve('Success');
let p2 = Promise.reject('Error');
let p3 = Promise.resolve('Oh Yeah');

const result = Promise.all([p1, p2, p3]);
console.log(result);
```

# Promise.race 
方法: (promises) => {} 
1. promises:  包含 n 个 promise 的数组 
说明:  返回一个新的 promise,  第一个完成的 promise 的结果状态就是最终的结果状态
```js
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK');
    }, 1000);
})
let p2 = Promise.resolve('Success');
let p3 = Promise.resolve('Oh Yeah');

//调用
const result = Promise.race([p1, p2, p3]);
console.log(result);
```