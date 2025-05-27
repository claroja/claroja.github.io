# blob


`Blob`(Binary Large Object).将二进制数据存储为一个单一个体的集合。Blob 通常是影像、声音或多媒体文件。在 JavaScript 中 Blob 类型的对象表示不可变的类似文件对象的原始数据。
`Blob` 由一个可选的字符串 `type`（通常是 MIME 类型）和 `blobParts` 组成.


语法:`var newBlob = new Blob(array, options);`
参数:
`blobParts` 是 Blob/BufferSource/String 类型的值的数组。
`options` 可选对象：
- `type` —— Blob 类型，通常是 MIME 类型，例如 image/png，
- `endings` —— 是否转换换行符，使 Blob 对应于当前操作系统的换行符（\r\n 或 \n）。默认为 "transparent"（啥也不做），不过也可以是 "native"（转换）。



例子:
从`text/html`字符串中读取
```js
var htmlFragment = ['<a id="a"><b id="b">hey!</b></a>'];
var myBlob = new Blob(htmlFragment, {type : 'text/html'});
```
从`application/json`字符串中读取
```js
var obj = { hello: 'world' };
var blob = new Blob([ JSON.stringify(obj) ], {type : 'application/json'});
```
从`text/plain`字符串中读取
```js
let blob = new Blob(["Hello, world!"], {type: 'text/plain'});
```
从`typed array`类型化数组读取
```js
let hello = new Uint8Array([72, 101, 108, 108, 111]); // 二进制格式的 "hello"
```


## 属性
Blob.size|字节数
Blob.type|MIME类型


## 方法
Blob.slice()|
Blob.stream()|
Blob.text()|
Blob.arrayBuffer()|

## 应用
### 读取用户上传图片
文件选择器`<input type="file">`用来让用户选取文件。出于安全考虑，浏览器不允许脚本自行设置这个控件的value属性，即文件必须是用户手动选取的，不能是脚本指定的。
文件选择器返回一个 FileList 对象，该对象是一个类似数组的成员，每个成员都是一个 File 实例对象。File 实例对象是一个特殊的 Blob 实例，增加了name和lastModifiedDate属性。

```js
// HTML 代码如下
// <input type="file" onchange="readfile(this.files[0])"></input>
// <pre id="output"></pre>
function readfile(f) {
    var reader = new FileReader();
    reader.readAsText(f);
    reader.onload = function () {
        var text = reader.result;
        var out = document.getElementById('output');
        out.innerHTML = '';
        out.appendChild(document.createTextNode(text));
    }
    reader.onerror = function(e) {
        console.log('Error', e);
    };
}
```

```js
// HTML 代码如下
// <input type="file" onchange="typefile(this.files[0])"></input>
function typefile(file) {
  // 文件开头的四个字节，生成一个 Blob 对象
  var slice = file.slice(0, 4);
  var reader = new FileReader();
  // 读取这四个字节
  reader.readAsArrayBuffer(slice);
  reader.onload = function (e) {
    var buffer = reader.result;
    // 将这四个字节的内容，视作一个32位整数
    var view = new DataView(buffer);
    var magic = view.getUint32(0, false);
    // 根据文件的前四个字节，判断它的类型
    switch(magic) {
      case 0x89504E47: file.verified_type = 'image/png'; break;
      case 0x47494638: file.verified_type = 'image/gif'; break;
      case 0x25504446: file.verified_type = 'application/pdf'; break;
      case 0x504b0304: file.verified_type = 'application/zip'; break;
    }
    console.log(file.name, file.verified_type);
  };
}
```

## Blob 与 ArrayBuffer 的区别
`ArrayBuffer` 对象用于表示通用的，固定长度的原始二进制数据缓冲区。你不能直接操纵 ArrayBuffer 的内容，而是需要创建一个类型化数组对象或 DataView 对象，该对象以特定格式表示缓冲区，并使用该对象读取和写入缓冲区的内容。
`Blob` 类型的对象表示不可变的类似文件对象的原始数据。Blob 表示的不一定是 JavaScript 原生格式的数据。File 接口基于 Blob，继承了Blob 功能并将其扩展为支持用户系统上的文件。

二者区别:
- 除非你需要使用 ArrayBuffer 提供的写入/编辑的能力，否则 Blob 格式可能是最好的。
- Blob 对象是不可变的，而 ArrayBuffer 是可以通过 TypedArrays 或 DataView 来操作。
- ArrayBuffer 是存在内存中的，可以直接操作。而 Blob 可以位于磁盘、高速缓存内存和其他不可用的位置。
- 虽然 Blob 可以直接作为参数传递给其他函数，比如 window.URL.createObjectURL()。但是，你可能仍需要 FileReader 之类的 File API 才能与 Blob 一起使用。
- Blob 与 ArrayBuffer 对象之间是可以相互转化的：

二者转换:
使用 FileReader 的 readAsArrayBuffer() 方法，可以把 Blob 对象转换为 ArrayBuffer 对象；
使用 Blob 构造函数，如 new Blob([new Uint8Array(data]);，可以把 ArrayBuffer 对象转换为 Blob 对象。

参考:
https://developer.mozilla.org/en-US/docs/Web/API/Blob/
https://wangdoc.com/javascript/bom/arraybuffer.html
https://segmentfault.com/a/1190000022812794