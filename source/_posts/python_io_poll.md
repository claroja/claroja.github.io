---
title: python_io_poll
toc: true
date: 2021-11-02 8:14:54
tags:
---

本质上和select没有区别,只是没了最大文件描述符的限制

方法|描述
--|--
select.poll()|返回poll对象,用来注册文件描述符和事件
poll.register(fd[, eventmask])|fd是整数,可以是fileno()方法返回;eventmask:事件类型
poll.modify(fd, eventmask)|更新注册信息
poll.unregister(fd)|注销fd
poll.poll([timeout])|检测注册后的fd,返回[(fd,event),()...];如果返回空说明超时,且没有事件发生,否则阻塞


事件类型|描述
--|--
POLLIN	|读就绪
POLLOUT|	写就绪
POLLHUP	|挂起
POLLPRT	|有数据紧急读取
POLLERR	|某些错误情况出现
POLLNVAL|	无效请求:描述无法打开



```python
import select, socket

response = b"hello world"

serversocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
serversocket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
serversocket.bind(('localhost', 8000))
serversocket.listen(1)
serversocket.setblocking(0)

poll = select.poll()
poll.register(serversocket.fileno(), select.POLLIN)  # 监听数据读取事件

connections = {}
while True:
    for fd, event in poll.poll():
        if event == select.POLLIN: # 读就绪
            if fd == serversocket.fileno():  # 注意这个是监听描述符,不是连接文件描述符,这个是用来判断有没有连接进来
                con, addr = serversocket.accept()
                poll.register(con.fileno(), select.POLLIN) # 这个是用来监听连接的文件描述符,服务端和客户端创建连接后,会使用新的文件描述符
                connections[con.fileno()] = con  # 将连接描述符放入字典管理
            else:
                con = connections[fd]  # 获取连接的fd,和连接对象
                data = con.recv(1024)
                if data:  # 如果获得客户端发来的数据,就将连接的注册事件更改为写就绪,进入到下面的elif
                    poll.modify(con.fileno(), select.POLLOUT)
        elif event == select.POLLOUT:  # 监听到写就绪事件,就发送消息
            con = connections[fd]
            con.send(response)
            poll.unregister(con.fileno())  # 注销该连接,既从连接池里删除
            con.close()

```


参考:
https://www.cnblogs.com/qianyuliang/p/6551553.html