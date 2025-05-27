# ps

## 查询进程
1.列出所有进程 `ps -aux`
2.列出指定命令进程 `ps -aux | grep python`
3.查看某个端口打开的文件 lsof -i :3306
4.查看某个网络协议打开的文件 lsof -i tcp


## 终止进程

`kill  pid` 默认发送`TERM`信号,不能保证进程被杀死,`TERM`信号可以被捕获,屏蔽或忽略
`kill [-signal] pid` `kill -9 pid`,发送`KILL`信号,强制杀死,`KILL`不能被捕获,屏蔽或忽略


参考:
https://www.jianshu.com/p/a37efe9fe5a3