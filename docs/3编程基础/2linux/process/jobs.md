# jobs

jobs是终端的一个概念,一个终端开启一个进程,就生成了一个工作(job),这个工作只在这个终端里有效.

使用`Ctrl+Z`可以使作业暂停,而后可以选择是终止进程(kill命令),还是继续执行(发送SIGCONT信号)
|	参数	|	描述	|
|	--	|	--	|
| |默认只查看作业号
|	-l	|	列出进程的PID以及作业号	|
|	-n	|	只列出上次shell发出的通知后改变了状态的作业	|
|	-p	|	只列出作业的PID	|
|	-r	|	只列出运行中的作业	|
|	-s	|	只列出已停止的作业	|


## jobs
1.添加三个作业,每次都添加后,都立刻使用`Ctrl+Z`暂停
```shell
@:~/code/test$ sh test.sh
@:~/code/test$ sh test.sh
@:~/code/test$ sh test.sh
```

2.使用`jobs`查看
`[1]`是作业号,通过作业号来`bg`或者`fg`运行
`+`是默认作业,如果`bg`,`fg`没有指定作业号,则会执行此`job`
`-`是当`+`默认作业执行完,`-`号就会成为默认作业
`+`和`-`各自只会存在一个

```shell
@:~/code/test$ jobs
[1]   Stopped                 sh test.sh
[2]-  Stopped                 sh test.sh
[3]+  Stopped                 sh test.sh
```

## fg
`fg`可以将暂停的工作,放在前台继续运行
```shell
fg 工作号
```


## bg
`bg`可以将暂停的工作,放在后台,相当于`&`号后台运行
```shell
bg 工作号
```

## SIGHUP
SIGHUP在用户结束终端连接时发出(关闭终端,断开ssh),系统对SIGHUP信号的默认处理是终止收到该信号的进程.所以若是程序中没有捕捉该信号,当收到该信号时,进程就会退出.

如果想在终端退出,程序正常运行的话,就要使用`nohup`命令



参考:
https://www.cnblogs.com/lizhouwei/p/10122742.html