---
title: js_encode
toc: true
date: 2021-01-20 22:03:54
---
将字符串(unicode, utf8)转换为二进制
```js
let uint8array: Uint8Array= new TextEncoder().encode("王");
console.log(uint8array)  // Uint8Array(3) [ 231, 142, 139 ]  "王"用了三个字节来存储
let string: String = new TextDecoder().decode(uint8array);
console.log(string)  //
```


参考:
https://stackoverflow.com/questions/8936984/uint8array-to-string-in-javascript