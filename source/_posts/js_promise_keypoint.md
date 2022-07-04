---
title: js_promise_keypoint
toc: true
date: 2021-01-20 22:03:54
---
# 修改promise对象状态
1. resolve(value):  如果当前是 pending 就会变为 resolved 
2. reject(reason):  如果当前是 pending 就会变为 rejected 
3. 抛出异常:  如果当前是 pending 就会变为 rejected 
```js
let p = new Promise((resolve, reject) => {
    //1. resolve 函数
    // resolve('ok'); // pending   => fulfilled (resolved)
    //2. reject 函数
    // reject("error");// pending  =>  rejected 
    //3. 抛出错误
    // throw '出问题了';
});
console.log(p);
```
# 一个 promise 指定多个成功/失败回调函数,  都会调用
当 promise 改变为对应状态时都会调用 

```js
let p = new Promise((resolve, reject) => {
    resolve('OK');
});

///指定回调 - 1
p.then(value => {
    console.log(value);
});

//指定回调 - 2
p.then(value => {
    alert(value);
});
```
# 改变 promise 状态和指定回调函数谁先谁后? 
1. 都有可能, 正常情况下是先指定回调再改变状态, 但也可以先改状态再指定回调 
2. 如何先改状态再指定回调? 
    - 在执行器中直接调用 resolve()/reject() 
    - 延迟更长时间才调用 then() 
3. 什么时候才能得到数据? 
    - 如果先指定的回调,  那当状态发生改变时,  回调函数就会调用,  得到数据 
    - 如果先改变的状态,  那当指定回调时,  回调函数就会调用,  得到数据

```js
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK');
    }, 1000);
});

p.then(value => {
    console.log(value);
},reason=>{
    
})
```


# promise.then()返回的新 promise 的结果状态由什么决定? 
(1)  简单表达:  由 then()指定的回调函数执行的结果决定 
(2)  详细表达: 
①  如果抛出异常,  新 promise 变为 rejected, reason 为抛出的异常 
②  如果返回的是非 promise 的任意值,  新 promise 变为 resolved, value 为返回的值 
③  如果返回的是另一个新 promise,  此 promise 的结果就会成为新 promise 的结果 

```js
let p = new Promise((resolve, reject) => {
    resolve('ok');
});
//执行 then 方法
let result = p.then(value => {
    // console.log(value);
    //1. 抛出错误
    // throw '出了问题';
    //2. 返回结果是非 Promise 类型的对象
    // return 521;
    //3. 返回结果是 Promise 对象
    // return new Promise((resolve, reject) => {
    //     // resolve('success');
    //     reject('error');
    // });
}, reason => {
    console.warn(reason);
});
console.log(result);
```

5.  promise 如何串连多个操作任务? 
1.promise 的 then()返回一个新的 promise,  可以开成 then()的链式调用 
2.通过 then 的链式调用串连多个同步/异步任务 
```js
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK');
    }, 1000);
});

p.then(value => {
    return new Promise((resolve, reject) => {
        resolve("success");
    });
}).then(value => {
    console.log(value);
}).then(value => {
    console.log(value);
})
```

# promise 异常传透? 
1.当使用 promise 的 then 链式调用时,  可以在最后指定失败的回调,   
2.前面任何操作出了异常,  都会传到最后失败的回调中处理 
```js
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK');
        // reject('Err');
    }, 1000);
});

p.then(value => {
    // console.log(111);
    throw '失败啦!';
}).then(value => {
    console.log(222);
}).then(value => {
    console.log(333);
}).catch(reason => {
    console.warn(reason);
});
```

# 中断 promise 链
1. 当使用 promise 的 then 链式调用时,  在中间中断,  不再调用后面的回调函数 
2. 办法:  在回调函数中返回一个 pendding 状态的 promise 对象 

```js
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK');
    }, 1000);
});

p.then(value => {
    console.log(111);
    //有且只有一个方式, 返回pending状态的promise对象
    return new Promise(() => {});
}).then(value => {
    console.log(222);
}).then(value => {
    console.log(333);
}).catch(reason => {
    console.warn(reason);
});
```