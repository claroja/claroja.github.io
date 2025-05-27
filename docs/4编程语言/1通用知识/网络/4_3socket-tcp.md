# socket-tcp

## TCP
udp通信模型中， 在通信开始之前， 不需要建⽴相关的链接， 只需要发送数据即可， 类似于⽣活中， "写信""
udp通信模型中， 在通信开始之前， ⼀定要先建⽴相关的链接， 才能发送数据， 类似于⽣活中， "打电话""

如果想要完成⼀个tcp服务器的功能， 需要的流程如下：
1. socket创建⼀个套接字
2. bind绑定ip和port
3. listen使套接字变为可以被动链接
4. accept等待客户端的链接
5. recv/send接收发送数据


### tcp服务器
```python
#coding=utf-8
from socket import *
## 创建socket
tcpSerSocket = socket(AF_INET, SOCK_STREAM)
## 绑定本地信息
address = ('', 7788)
tcpSerSocket.bind(address)
## 使⽤socket创建的套接字默认的属性是主动的， 使⽤listen将其变为被动的， 这样就可以接收
tcpSerSocket.listen(5)
## 如果有新的客户端来链接服务器， 那么就产⽣⼀个新的套接字专⻔为这个客户端服务器
## newSocket⽤来为这个客户端服务
## tcpSerSocket就可以省下来专⻔等待其他新客户端的链接
newSocket, clientAddr = tcpSerSocket.accept()
## 接收对⽅发送过来的数据， 最⼤接收1024个字节
recvData = newSocket.recv(1024)
print '接收到的数据为:',recvData
## 发送⼀些数据到客户端
newSocket.send("thank you !")
## 关闭为这个客户端服务的套接字， 只要关闭了， 就意味着为不能再为这个客户端服务了， 如果还
newSocket.close()
## 关闭监听套接字， 只要这个套接字关闭了， 就意味着整个程序不能再接收任何新的客户端的连接
tcpSerSocket.close()
```

### tcp客户端
tcp的客户端要⽐服务器端简单很多， 如果说服务器端是需要⾃⼰买⼿机、 查⼿机卡、 设置铃声、 等待别⼈打电话流程的话， 那么客户端就只需要找⼀个电话亭， 拿起电话拨打即可， 流程要少很多
```python
#coding=utf-8
from socket import *
## 创建socket
tcpClientSocket = socket(AF_INET, SOCK_STREAM)
## 链接服务器
serAddr = ('192.168.1.102', 7788)
tcpClientSocket.connect(serAddr)
## 提示⽤户输⼊数据
sendData = raw_input("请输⼊要发送的数据： ")
tcpClientSocket.send(sendData)
## 接收对⽅发送过来的数据， 最⼤接收1024个字节
recvData = tcpClientSocket.recv(1024)
print '接收到的数据为:',recvData
## 关闭套接字
tcpClientSocket.close()
```

### TCP模拟QQ聊天

```python
#coding=utf-8
from socket import *
## 创建socket
tcpSerSocket = socket(AF_INET, SOCK_STREAM)
## 绑定本地信息
address = ('', 7788)
tcpSerSocket.bind(address)
## 使⽤socket创建的套接字默认的属性是主动的， 使⽤listen将其变为被动的， 这样就可以接收
tcpSerSocket.listen(5)
while True:
    # 如果有新的客户端来链接服务器， 那么就产⽣⼀个信⼼的套接字专⻔为这个客户端服务器
    # newSocket⽤来为这个客户端服务
    # tcpSerSocket就可以省下来专⻔等待其他新客户端的链接
    newSocket, clientAddr = tcpSerSocket.accept()
    while True:
        # 接收对⽅发送过来的数据， 最⼤接收1024个字节
        recvData = newSocket.recv(1024)
        # 如果接收的数据的⻓度为0， 则意味着客户端关闭了链接
        if len(recvData)>0:
        print 'recv:',recvData
        else:
        break
        # 发送⼀些数据到客户端
        sendData = raw_input("send:")
        newSocket.send(sendData)
        # 关闭为这个客户端服务的套接字， 只要关闭了， 就意味着为不能再为这个客户端服务了， 如
    newSocket.close()
## 关闭监听套接字， 只要这个套接字关闭了， 就意味着整个程序不能再接收任何新的客户端的连接
tcpSerSocket.close()
```

