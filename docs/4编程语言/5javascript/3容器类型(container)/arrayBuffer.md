# arrayBuffer

属性

ArrayBuffer.length|
get ArrayBuffer[@@species]|
ArrayBuffer.prototype|允许新加属性
ArrayBuffer.prototype.byteLength|

## 方法
ArrayBuffer.isView(arg)|
ArrayBuffer.prototype.slice()|


## 例子
```js
var buffer = new ArrayBuffer(8);
var view   = new Int32Array(buffer);
```



参考:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer