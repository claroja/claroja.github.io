---
title: python_io_epoll
toc: true
date: 2021-11-02 8:14:54
tags:
---


1.Linux2.6出现epoll,西能最好的多路I/O就绪通知方法
2.epoll同时支持水平触发和边缘触发(只触发1次,再发生变化不会告知)
3.使用mmap技术,省去了fd在系统调用时复制的开销
4.epoll采用事件就绪通知方式,类似于callback机制

方法|描述
--|--
select.epoll([sizehint=-1])|返回epoll对象
epoll.poll(timeout=-1[, maxevnets=-1])|等待事件，timeout(float)的单位是秒（second）
epoll.close()|关闭epoll对象的文件描述符。
epoll.fileno|返回control fd的文件描述符number。
epoll.fromfd(fd)|用给予的fd来创建一个epoll对象。
epoll.register(fd[, eventmask])|在epoll对象中注册一个文件描述符。（如果文件描述符已经存在，将会引起一个IOError）
epoll.modify(fd, eventmask)|修改一个已经注册的文件描述符。
epoll.unregister(fd)|注销一个文件描述符。

```python
from socket import *
import select
serSocket = socket(AF_INET, SOCK_STREAM)
serSocket.bind(('', 8000))
epoll = select.epoll()  # 注意win环境下是没有epoll的
epoll.register(serSocket.fileno(), select.EPOLLIN|select.EPOLLET)  # 读就绪|边缘触发
connections = {}
adress = {}

while True:
    epoll_list = epoll.epoll() # epoll 进行 fd 扫描的地方 扫描出能满足条件的套接字，添加进列表中
    for fd, events in epoll_list:
        if fd == serSocket.fileno(): #对epoll列表中的文件描述符、事件进行扫描
            conn, addr = serSocket.accept()#表示有客户端连接了服务器套接字
            connections[conn.fileno()] = conn
            adress[addr.fileno()] = addr
            epoll.register(conn.fileno(), select.EPOLLIN|select.EPOLLET)
        elif events == select.EPOLLIN: # 读就绪,既客户端发来信息
            recvData = connections[fd].recv(1024)
            if len(recvData) > 0:
                print('%s %s'%(str(addr), recvData.decode('utf-8')))
            else:
                epoll.unregister(fd)
                connections[fd].colse()

```






参考:
https://blog.csdn.net/wangbowj123/article/details/77885294