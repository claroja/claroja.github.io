---
title: js_json
toc: true
date: 2021-01-20 22:03:54
---


1.`JSON.parse()`
字符串转对象
```js
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
```

2.`JSON.stringify()`
对象转字符串

```js
console.log(JSON.stringify({ x: 5, y: 6 }));
```


参考:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON