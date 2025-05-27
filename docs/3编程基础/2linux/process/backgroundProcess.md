# backgroundProcess


## 测试样例
```shell
#!/bin/bash
## 文件名 test.sh

for i in $(seq 1 10)
do
    #echo $i
    sleep 1
done
```

## 直接运行
1. 会占用命令行界面,程序终止时才能,继续使用命令行界面
2. 命令行窗口关闭, 程序也会终止
```shell
sh test.sh
```

## 后台运行
1. 加上`&`符号,后台运行,会返回`[1] 27227`,`[1]`是指作业号,每个终端命令行都会给自己的进程分配一个作业号,`27227`是进程.
此时,我们可以在终端继续执行其他命令.当程序运行完,我们输入`enter`时,会显示该作业的执行情况.
2. 命令行窗口关闭, 程序也会终止


```shell
sh test.sh &
```

```shell
~/code/test$ sh test.sh &
[1] 27227
~/code/test$  # 输入回车后会看到执行结果
[1]+  Done                    sh test.sh
```

## 重定向输出
虽然在后台运行,但是标准输出还会输出到终端

```sh
sh test.sh &
```

```sh
~/code/test$ sh test.sh &
[1] 27426
~/code/test$ 1
2
3
4
5
6
7
8
9
10

[1]+  Done                    sh test.sh
~/code/test$
```

所以需要将标准输出和标准错误,重定向到文件

```shell
sh test.sh > log 2>&1 &
```



## 脱离控制台nohub
`nohup`阻断发给进程的`SIGHUP`信号,既在退出终端时阻止其下进程的退出
```shell
nohup sh test.sh &
```
因为`nohup`会解除终端与进程的关联,所以进程也就不会和`STDOUT` `STDERR`联系起来.而输出内容会默认保存在`nohup.out`文件里.
```shell
~/code/test$ nohup sh test.sh &
[1] 27500
~/code/test$ nohup: ignoring input and appending output to 'nohup.out'
```

最好手动指定从定向的文件.
```shell
~/code/test$ nohup sh test.sh >log 2>&1 &
```


## 后台执行
1.查看作业号 `jobs`
2.后台执行`&` 与 `bg`
2.1 `./test.h &` 在该终端后台执行
2.2 `./test.h`  然后`Ctrl+Z` 接着`jobs`查看作业号,最后`bg 作业号` 后台执行
3.脱离终端执行`nohup /.test.h`
4.恢复前台执行 `fg 作业号`

总结
形式|命令
--|--
后台运行|`./test.h &` 
后台运行,重定向输出|`/.test.h 1>/dev/null 2>&1 &` &1是引用1的输出,既/dev/null
后台运行,重定向输出,用户/bash退出继续运行|`nohup /.test.h 1>/dev/null 2>&1 &`