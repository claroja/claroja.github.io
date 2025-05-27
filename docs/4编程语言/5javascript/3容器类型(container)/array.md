# array

javascript中的Array数组就是list列表的意思


## 构造
1. `Array()` 
主要用来创建空列表
```js
Array(7);          // 7个位置的空数组, 注意和Array.of(7)比较
Array(1, 2, 3);    // [1, 2, 3]
```
2. `Array.from(arrayLike[, mapFn[, thisArg]])`
任何类array的对象都可以转化
```js
Array.from(arrayLike)
```
3. `Array.of(element0[, element1[, ...[, elementN]]])`
```js
Array.of(7);       // [7], 注意和Array(7)对比
Array.of(1, 2, 3); // [1, 2, 3]
```



## 属性

属性|描述
--|--
`Array.length`|长度


## 方法

### map,filter,reduce
方法|描述
--|--
map|`Array.map(callbackFn(currentValue[, index[, array]])[, thisArg])`
filter|`Array.filter(callbackFn(element[, index[, array]])[, thisArg])`
reduce|`Array.reduce(callbackFn(accumulator, currentValue[, index[, array]])[, initialValue])`







### Mutator methods(更新array)
`Array.prototype.copyWithin(target[, start[, end]])`
`Array.prototype.fill(value[, start[, end]])`
`Array.prototype.pop()`
`Array.prototype.push(element1[, ...[, elementN]])`
`Array.prototype.reverse()`
`Array.prototype.shift()`
`Array.prototype.sort()`
`Array.prototype.splice(start[, deleteCount[, item1[, item2[, ...]]]])`
`Array.prototype.unshift(element1[, ...[, elementN]])`


### Accessor methods(存取数据)
`Array.prototype.concat([value1[, value2[, ...[, valueN]]]])`

`Array.prototype.includes(valueToFind[, fromIndex])`
`Array.prototype.indexOf(searchElement[, fromIndex])`
`Array.prototype.join([separator])`
`Array.prototype.lastIndexOf(searchElement[, fromIndex])`
`Array.prototype.slice([begin[, end]])`
`Array.prototype.toString()`
`Array.prototype.toLocaleString()`

### Iteration methods(迭代,不更新原array)
`Array.prototype.entries()`|返回下标和值的key-value对
`Array.prototype.every(callbackFn(element[, index[, array]])[, thisArg])`
`Array.prototype.find(callbackFn(element[, index[, array]])[, thisArg])`
`Array.prototype.findIndex(callbackFn(element[, index[, array]])[, thisArg])`
`Array.prototype.keys()`
`Array.prototype.reduceRight(callbackFn(accumulator, currentValue[, index[, array]])[, initialValue])`
`Array.prototype.some(callbackFn(element[, index[, array]])[, thisArg])`
`Array.prototype.values()`
`Array.forEach(callbackFn(currentValue[, index[, array]])[, thisArg])` 

参考:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array