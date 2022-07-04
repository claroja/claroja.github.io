---
title: python_socket
toc: true
date: 2021-11-02 8:14:54
tags:
---

socket(简称 套接字) 是进程间通信的一种方式，实现不同主机间的进程间通信，比如QQ 

```
socket.socket(AddressFamily, Type)
```
Address Family：可以选择 AF_INET（用于 Internet 进程间通信） 或者 AF_UNIX（用于同一台机器进程间通信）,实际工作中常用AF_INET
Type：套接字类型，可以是 SOCK_STREAM（流式套接字，主要用于 TCP 协议）或者 SOCK_DGRAM（数据报套接字，主要用于 UDP 协议）

# UDP发送数据
```
from socket import *
udpSocket = socket(AF_INET, SOCK_DGRAM)# 创建套接字
sendAddr = ('192.168.1.1', 8080)# 发送到的ip和端口
sendData = "hello" # 发送的内容
udpSocket.sendto(sendData, sendAddr) #发送
udpSocket.close() # 关闭套接字
```
# UDP接收数据
```
from socket import *
udpSocket = socket(AF_INET, SOCK_DGRAM)# 创建套接字
bindAddr = ('', 7788)# 绑定本机的端口，ip地址为空表示本机的任何一个ip
udpSocket.bind(bindAddr)#绑定本机的端口
recvData = udpSocket.recvfrom(1024)# 等待接收的数据，1024表示本次接收的最大字节数
print(recvData)
udpSocket.close()# 关闭套接字
```

# udp广播
```
import socket, sys
dest = ('<broadcast>', 7788)# 这里<broadcst>可以写成当前网段的广播地址
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM) # 创建udp套接字
s.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST,1)# 设置成能发送广播数据
s.sendto("Hi", dest)# 发送广播
```


TCP：传输控制协议，稳定，慢一些，web服务器（HTTP）使用tcp
UDP：用户数据包协议，不稳定，快一些
TCP三次握手，四次挥手
TCP十种状态
TTL是指经过路由器的个数
MSL数据包在网络上存活的最长时间

# TCP
socket默认是TCP
```python
def __init__(self, family=socket.AF_INET, type=socket.SOCK_STREAM,
             proto=0, *args, **kwargs):
```


# TCP服务端
1.socket创建一个套接字
2.bind绑定ip和port
3.listen使套接字变为监听状态
4.accept等待客户端的信息
5.recv/send接收发送数据



```
from socket import *
tcpSerSocket = socket(AF_INET, SOCK_STREAM) # 创建TCPsocket
address = ('', 7788) #绑定本地的ip和端口
tcpSerSocket.bind(address) 
tcpSerSocket.listen(5)# 将socket变为监听状态，listen是建立连接的**队列**的个数，linux之中这个值是默认的，更改无效，阻塞
newSocket, clientAddr = tcpSerSocket.accept()#如果有客户端连接，则生成一个专门的套接字进行通讯，阻塞
recvData = newSocket.recv(1024) #获得客户端发送过来的消息
newSocket.send("thank you !")# 向客户端发送消息
newSocket.close() #关闭该客户端的套接字
tcpSerSocket.close() #关闭监听的套接字
```

# TCP客户端

```
from socket import *
tcpClientSocket = socket(AF_INET, SOCK_STREAM)# 创建TCP socket
serAddr = ('192.168.1.102', 7788)
tcpClientSocket.connect(serAddr) #连接服务器
tcpClientSocket.send("hello") #向服务器发送消息
recvData = tcpClientSocket.recv(1024) # 接收消息
tcpClientSocket.close() # 关闭套接字
```


# 常见TCP攻击
DDOS SYN洪水攻击
客户端发完SYN，不发ACK
DNS攻击
DNS服务器劫持，换域名对应的IP
arp 中间人攻击



# API
## socket类
```python
socket.socket(family=AF_INET, type=SOCK_STREAM, proto=0, fileno=None) # 返回socket对象
```
参数|描述
--|--
family|AF_INET(默认值),AF_INET6,AF_UNIX,AF_CAN
type|SOCK_STREAM(默认值),SOCK_DGRAM,SOCK_RAW
proto|默认为0,只有在AF_CAN的情况下,协议应为CAN_RAW或CAN_BCM之一
[fileno](https://docs.python.org/zh-cn/3/library/socket.html#socket.socket)|如果指定了fileno,则其他参数将被忽略,导致带有指定文件描述符的套接字返回


## Socket Families(网络层)
类型|描述
--|--
socket.AF_INET|IPV4
socket.AF_INET6|IPV6
socket.AF_UNIX|unix本地通信(多进程通信)
socket.AF_CAN|[总线套接](https://www.cnblogs.com/FZLGYZ/p/11750462.html)

## Socket Types(传输层)
类型|描述
--|--
SOCK_STREAM|使用TCP(Transmission Control Protocol)
SOCK_DGRAM|使用UDP(User Datagram Protocol)
SOCK_RAW|未处理的IP数据包, 而流套接字只能读取TCP协议的数据, 数据报套接字只能读取UDP协议的数据
SOCK_RAW可以处理ICMP/IGMP,可以通过DP_HDRIMCL选项构造IP头,模拟洪水攻击,伪装大量源地址




## socket对象
### 服务端套接字方法
方法|描述
--|--
bind(address)|`('0.0.0.0', 8001)`,绑定主机和端口,并占用,传入主机,端口号
[listen(\[backlog\])](https://www.cnblogs.com/gaohuayan/p/11139397.html)|默认空,建立连接池,没有一个连接就放入队列中,参数是限制可连接的个数,如果不填会默认合理值
accept()|默认空,从`listen`连接池中顺序取出连接,阻塞等待消息,返回(conn, address),conn是连接对象，可以用来接收和发送数据。address是连接客户端的地址。

### 客户端套接字方法
方法|描述
--|--
connect(address)|连接远程服务端socket,可能抛出socket.timeout
connect_ex(address)|客户端连接,出错返回错误码


### 公共用途套接字
方法|描述
--|--
send(bytes[,flags])|发送数据,返回值是发送数据的量
sendall(bytes[,flags])|它会一直发送完为止,发送成功返回None,否则报错
sendto(bytes, flags, address)|和send相同
sendmsg(buffers[, ancdata[, flags[, address]]])|
sendfile(file, offset=0, count=None)|
recv(bufsize[, flags])|接收数据,byte类型,bufsize指定最多可以接收的数量
recvfrom(bufsize[, flags]) |除了接收数据,还有发送的地址(data,address)
recvmsg(bufsize[, ancbufsize[, flags]])|接收文件，附件,ancbufsize设定附件接收缓冲区类似于bufsize.,返回`(data, ancdata, msg_flags, address)`
close()|底层操作也会关闭(如文件描述符)
getpeername() |连接到当前套接字的远端的地址
getsockname()|当前套接字的地址
detach()|关闭,但底层的文件描述符并没关,返回文件描述符
dup()|复制socket
fileno()|返回文件描述符
makefile()|返回文件对象和`open()`函数一样

### 面向锁的套接字
方法|描述
--|--
s.setblocking()|设置套接字的阻塞与非阻塞模式
s.settimeout() |设置阻塞套接字操作的超时时间
s.gettimeout() |得到阻塞套接字操作的超时时间


### 面向文件的套接字
方法|描述
--|--
s.fileno()|套接字的文件描述符
s.makefile()|创建一个与该套接字相关的文件




参考:
https://www.cnblogs.com/Xuuuuuu/p/10321696.html