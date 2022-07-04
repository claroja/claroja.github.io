---
title: js_arrayBuffer
toc: true
date: 2021-01-20 22:03:54
---

存储字节的列表,不能直接操作`ArrayBuffer`,而是需要操作`typed array objects`或者`DataView`

# 构造
`ArrayBuffer()`
参数
`length`|长度,最大是2**53
返回
`ArrayBuffer`,初始值为0
例子:
```js
var buffer = new ArrayBuffer(8);
var view   = new Int32Array(buffer);
```

# 属性

ArrayBuffer.length|
get ArrayBuffer[@@species]|
ArrayBuffer.prototype|允许新加属性
ArrayBuffer.prototype.byteLength|

# 方法
ArrayBuffer.isView(arg)|
ArrayBuffer.prototype.slice()|


# 例子
```js
var buffer = new ArrayBuffer(8);
var view   = new Int32Array(buffer);
```



参考:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer