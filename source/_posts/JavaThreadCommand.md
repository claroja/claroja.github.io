---
title: JavaThreadCommand
toc: true
date: 2021-07-11 10:32:11
tags:
categories:
---
# 查看Process/Thread方法
## win
查看进程
- `tasklist | findstr java`
- `jps`
杀死进程
- `taskkill /F /PID`杀死进程

## Linux
- `ps -fe | grep java` 查看所有java进程
- `ps -fT -p <PID>` 查看某个进程的所有线程
- `top` 动态查看所有进程
- `top -H -p <PID>` 动态查看某进程的所有线程
- `jps`
- `jstack <PID>` 更详细的信息

## 远程监控 jconsole
1. 运行java类:
```s
java -Djava.rmi.server.hostname=`ip地址` -Dcom.sun.management.jmxremote -
Dcom.sun.management.jmxremote.port=`连接端口` -Dcom.sun.management.jmxremote.ssl=是否安全连接(false) -
Dcom.sun.management.jmxremote.authenticate=是否认证(false) java类
```
2. 远程运行`jconsole`

杀死进程
`kill PID`