---
title: js_typedArray
toc: true
date: 2021-01-20 22:03:54
---

`ArrayBuffer`不能直接读取, 需要用`TypedArray`. 
为什么这么设置? `ArrayBuffer`主要是用来做缓存的, 所以这一层不关心具体数据是如何, 只管存和取. `TypedArray`则是进行具体的操作.

# 应用
`int8Array`是将`ArrayBuffer`中的一个字节当成一个元素,`Int16Array`则是将`ArrayBuffer`中的两个字节当成一个元素. 依次类推:
例如:
1)`ArrayBuffer`中有8个字节,分别为`1 2 3 4 5 6 7 8`
2)分别根据这个`ArrayBuffer`创建Uint8,Uint16,和Unit32
```js
var u8 = new Uint8Array(buffer); // length为8  
var u16 = new Uint16Array(buffer); // length为4 
var u32 = new Uint32Array(buffer); // length为2  
```
3)结果为
```js
[1, 2, 3, 4, 5, 6, 7, 8] //u8
[513, 1027, 1541, 2055] //u16
[67305985, 134678021] //u32
```



# 类型
Type|	Value Range|	Size in bytes|	Description|	Web IDL type|	Equivalent C type|
--|--|--|--|--|--
Int8Array|	-128 to 127|	1	|8-bit two's complement signed integer	|byte	|int8_t
Uint8Array|	0 to 255|	1	|8-bit unsigned integer	|octet	|uint8_t
Uint8ClampedArray|	0 to 255|	1	|8-bit unsigned integer (clamped)	|octet	|uint8_t
Int16Array|	-32768 to 32767|	2	|16-bit two's complement signed integer	|short	|int16_t
Uint16Array|	0 to 65535|	2	|16-bit unsigned integer	|unsigned short	|uint16_t
Int32Array|	-2147483648 to 2147483647|	4	|32-bit two's complement signed integer|	long	i|nt32_t
Uint32Array|	0 to 4294967295|	4	|32-bit unsigned integer	|unsigned long	|uint32_t
Float32Array|	1.2×10-38 to 3.4×1038|	4	|32-bit IEEE floating point number (7 significant digits e.g., 1.1234567)	|unrestricted float	|float
Float64Array|	5.0×10-324 to 1.8×10308|	8	|64-bit IEEE floating point number (16 significant digits e.g., 1.123...15)	|unrestricted double	|double
BigInt64Array|	-263 to 263-1|	8	|64-bit two's complement signed integer|	bigint	|int64_t (signed long long)
BigUint64Array|	0 to 264-1|	8	|64-bit unsigned integer	|bigint|	uint64_t (unsigned long long)




参考:
https://www.jb51.net/article/147112.htm
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax