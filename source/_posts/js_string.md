---
title: js_string
toc: true
date: 2021-01-20 22:03:54
---
# String
```js
var str = '我是一个"高富帅"的程序员';
console.log(str);
// 字符串转义字符  都是用 \ 开头 但是这些转义字符写道引号里面
var str1 = "我是一个'高富帅'的\n程序员";
console.log(str1);
```

## 字符串拼贴注意

```js
// 1. 检测获取字符串的长度 length 
var str = 'andy';
console.log(str.length); // 4
// 2. 字符串的拼接 +  只要有字符串和其他类型相拼接 最终的结果是字符串类型
console.log('沙漠' + '骆驼'); // 字符串的 沙漠骆驼
console.log('aaa' + 18); // 'aaa18'
console.log('aaa' + true); // aaatrue
console.log(12 + 12); // 24
console.log('12' + 12); // '1212'
```


参考:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String