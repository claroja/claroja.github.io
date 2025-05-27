# localStorage-sessionStorage


shell使用
<!--more-->
### 变量$()
- 定义变量
变量＝值 (两侧不能有空格)
- 调用变量
`$变量` 全写形式是`${变量}`
- `${}`还能执行命令
`${ls}`

name=wang
echo name # name 这是输出字符串
echo $name # wang 输出变量
echo $name: # wang: 输出变量并拼贴`:`
echo $namew # 空 因为没有`namew`这个变量, 注意`:`等符号不会认为是变量
echo ${name}w # wangw 这样就可以避免上述的情况
echo ${ls} # 输出ls的内容


### 多命令执行 `&&`和`\`
一行可以执行多个命令, 一般配合`\`换行来使用


### export
用户登录到Linux系统后, 系统将启动一个用户shell. 当再次运行以个shell程序时, 则会创建一个子shell. 当子shell运行完后, 会返回到用户shell.
在每个shell中定义的变量只在该shell内有效.
使用`export`关键字, 可以让变量在所有shell中生效.
1.sh
```sh
test=hello
export test
```
2.sh
```sh
echo $test
```