# datatype


## 字符串
**建议不使用引号的写法**shell之所以允许无冒号的字符串存在是应为在command中 的输入也是不需要引号的 比如 `ls ~/`


```sh
name = hello  //1.可以解析变量 2.不能出现空格.
name = "hello"   //1.可以解析变量 2.可以出现转义的双引号
name = 'hello'   //1.变量不会被解析 2.不能出现转义的双引号(\"\")
```

我们可以直接在不加引号的字符串中使用`${变量名}` 写法 比如hello`${变量名}` 


## 没有数字类型
在Shell中所有的变量默认都是字符串型，不能直接进行运算
```shell
a=1
b=2
c=$a+$b
echo $c
```
1+2
如果需要数据运算需要使用`“$((运算式))”或“$[运算式]”`
```shell
echo $(($a+$b))
echo $[$a+$b]
```

## 数组
bash中有数组定义,但是dash中没有,所以使用字符串定义
定义：
数组名="值1 值2 ... 值n"

参考：
https://www.linuxidc.com/Linux/2019-07/159455.htm