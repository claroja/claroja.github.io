---
title: js_promise
toc: true
date: 2021-01-20 22:03:54
---
# 简介
1. Promise 是一门新的技术(ES6 规范) 
2. Promise 是 JS 中进行异步编程的新解决方案, 旧方案是单纯使用回调函数
3.  promise 对象用来封装一个异步操作并可以获取其成功/
失败的结果值

补充1: 常见的异步操作
1. fs 文件操作
```js
require('fs').readFile('./index.html', (err,data)=>{})
```
2. 数据库操作, AJAX 
```js
$.get('/server', (data)=>{})
```
3. 定时器 
```js
setTimeout(()=>{}, 2000);
```

# 优势

1. 旧的:  必须在启动异步任务前指定回调函数
2. promise:  启动异步任务  =>  返回 promie 对象  =>  给 promise 对象绑定回调函
数(甚至可以在异步任务结束后指定/多个) 


# 状态
实例对象中的一个属性 『PromiseState』
[1.png](1.png)
1. 创建Promise对象(new Promise())时, 状态是pending
2. 执行异步操作, 
2.1 成功的话pending 变为 resolved 
2.2 失败的话pending 变为 rejected 
一个 promise 对象只能改变一次 
无论变为成功还是失败,  都会有一个结果数据 成功的结果数据一般称为 value,  失败的结果数据一般称为 reason 
3. 最终返回一个新的Promise对象

# 对象的值
实例对象中的另一个属性 『PromiseResult』
保存着异步任务『成功/失败』的结果
`resolve()`和`reject()`对`PromiseResult`的值进行修改

# 代码
```js
    // 1. 创建 promise 对象(pending 状态), 指定执行器函数 
    const p = new Promise((resolve, reject) => { 
    // 2. 在执行器函数中启动异步任务 
    setTimeout(() => { 
        const time = Date.now() 
        // 3. 根据结果做不同处理 
        // 3.1 如果成功了, 调用 resolve(), 指定成功的 value(参数就是value), 对应.then方法的第一个参数, 变为 resolved 状态 
        if (time%2===1) { 
        resolve('成功的值 '+ time) 
    // 3.2 如果失败了, 调用 reject(), 指定失败的 reason(参数就是value)对应.then方法的第二个参数, 变为rejected 状态 
        } else { 
        reject('失败的值' + time) 
        } 
    }, 2000) 
  }) 
    // 4. 能promise指定成功或失败的回调函数来获取成功的 vlaue 或失败的 reason 
    p.then( 
    value => { // 成功的回调函数 onResolved, 得到成功的 vlaue 
        console.log('成功的 value: ', value) 
    }, 
    reason => { // 失败的回调函数 onRejected, 得到失败的 reason 
        console.log('失败的 reason: ', reason) 
    } 
  ) 
```



# async和await

## async函数
函数的返回值为 promise 对象, 和`.then`很相似.

```js
//then
async function main(){
    //1. 如果返回值是一个非Promise类型的数据, 结果是成功的promise对象
    // return 521;
    //2. 如果返回的是一个Promise对象, 结果是Promise对象
    // return new Promise((resolve, reject) => {
    //     // resolve('OK');
    //     reject('Error');
    // });
    //3. 抛出异常, 结果是失败的promise对象
    throw "Oh NO";
}
let result = main();
console.log(result);
```


## await表达式
await 右侧的表达式一般为 promise 对象,  但也可以是其它的值 
1. 如果表达式是 promise 对象, await 返回的是 promise 成功的值
2. 如果表达式是其它值,  直接将此值作为 await 的返回值 
注意:
1. await 必须写在 async 函数中,  但 async 函数中可以没有 await 
2. 如果 await 的 promise 失败了,  就会抛出异常,  需要通过 try...catch 捕获处理 


```js
async function main(){
    let p = new Promise((resolve, reject) => {
        // resolve('OK');
        reject('Error');
    })
    //1. 右侧为promise的情况
    // let res = await p;
    //2. 右侧为其他类型的数据
    // let res2 = await 20;
    //3. 如果promise是失败的状态
    try{
        let res3 = await p;
    }catch(e){
        console.log(e);
    }
}

main();
```


# 应用
```js
/**
 * resource  1.html  2.html 3.html 文件内容
 */

const fs = require('fs');
const util = require('util');
const mineReadFile = util.promisify(fs.readFile);

//回调函数的方式
// fs.readFile('./resource/1.html', (err, data1) => {
//     if(err) throw err;
//     fs.readFile('./resource/2.html', (err, data2) => {
//         if(err) throw err;
//         fs.readFile('./resource/3.html', (err, data3) => {
//             if(err) throw err;
//             console.log(data1 + data2 + data3);
//         });
//     });
// });

//async 与 await
async function main(){
    try{
        //读取第一个文件的内容
        let data1 = await mineReadFile('./resource/1x.html');
        let data2 = await mineReadFile('./resource/2.html');
        let data3 = await mineReadFile('./resource/3.html');
        console.log(data1 + data2 + data3);
    }catch(e){
        console.log(e.code);
    }
}
main();
```