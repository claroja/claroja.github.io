# async&await

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

- 如果表达式是 promise 对象, await 返回的是 promise 成功的值
- 如果表达式是其它值,  直接将此值作为 await 的返回值 

注意:

- await 必须写在 async 函数中,  但 async 函数中可以没有 await 
- 如果 await 的 promise 失败了,  就会抛出异常,  需要通过 try...catch 捕获处理 


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


## 应用
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
