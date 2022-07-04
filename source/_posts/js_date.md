---
title: js_date
toc: true
date: 2021-01-20 22:03:54
---
# 构建方法
```js
//1.获取当前时间
new Date();
//2.根据字符串获取
new Date('December 17, 1995 03:24:00'); //根据GMT格式构建
new Date('1995-12-17T03:24:00');//根据UTC构建
//3.根据数字年月日获取
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
```


# 对象方法
1.操作时间
默认获得是当前时区的时间,加上`UTC`获得是标准时间
Local|UTC(zero)|描述
--|--|--
getFullYear|getUTCFullYear|四位数的年份
getMonth|getUTCMonth|月份
getDate|getUTCDate|月中第几天
getHours|getUTCHours|小时
getMinute|getUTCMinute|分钟
getSeconds|getUTCSeconds|秒
getMilliseconds|getUTCMilliseconds|毫秒
getDay|getUTCDay|周中第几天

2.获得时间戳
`getTime()`

3.获得时区偏移
返回的是以分钟计算,比如北京是8时区,则返回的是`-480`
`getTimezoneOffset`


4.字符串转换
`new Date().toISOString()`方法和`new Date()`对象可以直接被`mybatis`识别,其他的不可.(是不是指定格式就行了?)
```js
//1.UTC格式
new Date().toISOString()
"2021-02-08T15:15:16.259Z"

//2.GMT格式
new Date().toString()
"Mon Feb 08 2021 23:15:00 GMT+0800 (中国标准时间)"

new Date().toGMTString()
"Mon, 08 Feb 2021 15:16:57 GMT"
```

5.转换为本地时间
```js
//1.第一个参数可以指定格式,可选项参考语言（文化）代码与国家地区对照表
new Date().toLocaleString()
"2021/2/8下午11:23:07"
new Date().toLocaleString('en-GB')
"08/02/2021, 23:22:52"

//2.第二个参数可以指定时区
new Date().toLocaleString({ timeZone: 'UTC' })
"08/02/2021, 15:24:01"
```


参考:
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date

[语言（文化）代码与国家地区对照表](https://www.cnblogs.com/tangyuanby2/p/6991753.html)