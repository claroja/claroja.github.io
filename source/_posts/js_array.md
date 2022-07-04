---
title: js_array
toc: true
date: 2021-01-20 22:03:54
---


# 构造
`Array()` 
`Array.from(arrayLike[, mapFn[, thisArg]])`
`Array.of(element0[, element1[, ...[, elementN]]])`

```js
Array.of(7);       // [7] 
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // array of 7 empty slots
Array(1, 2, 3);    // [1, 2, 3]
```


# 属性
`Array.prototype.length`|


# 方法

## Mutator methods(更新array)
`Array.prototype.copyWithin(target[, start[, end]])`
`Array.prototype.fill(value[, start[, end]])`
`Array.prototype.pop()`
`Array.prototype.push(element1[, ...[, elementN]])`
`Array.prototype.reverse()`
`Array.prototype.shift()`
`Array.prototype.sort()`
`Array.prototype.splice(start[, deleteCount[, item1[, item2[, ...]]]])`
`Array.prototype.unshift(element1[, ...[, elementN]])`


## Accessor methods(存取数据)
`Array.prototype.concat([value1[, value2[, ...[, valueN]]]])`
`Array.prototype.filter(callbackFn(element[, index[, array]])[, thisArg])`
`Array.prototype.includes(valueToFind[, fromIndex])`
`Array.prototype.indexOf(searchElement[, fromIndex])`
`Array.prototype.join([separator])`
`Array.prototype.lastIndexOf(searchElement[, fromIndex])`
`Array.prototype.slice([begin[, end]])`
`Array.prototype.toString()`
`Array.prototype.toLocaleString()`

## Iteration methods(迭代,不更新原array)
`Array.prototype.entries()`|返回下标和值的key-value对
`Array.prototype.every(callbackFn(element[, index[, array]])[, thisArg])`
`Array.prototype.find(callbackFn(element[, index[, array]])[, thisArg])`
`Array.prototype.findIndex(callbackFn(element[, index[, array]])[, thisArg])`
`Array.prototype.forEach(callbackFn(currentValue[, index[, array]])[, thisArg])`
`Array.prototype.keys()`
`Array.prototype.map(callbackFn(currentValue[, index[, array]])[, thisArg])`
`Array.prototype.reduce(callbackFn(accumulator, currentValue[, index[, array]])[, initialValue])`
`Array.prototype.reduceRight(callbackFn(accumulator, currentValue[, index[, array]])[, initialValue])`
`Array.prototype.some(callbackFn(element[, index[, array]])[, thisArg])`
`Array.prototype.values()`


参考:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array