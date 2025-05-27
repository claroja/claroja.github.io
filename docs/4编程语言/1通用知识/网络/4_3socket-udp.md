# socket-udp




## UDP介绍
UDP --- ⽤户数据报协议， 是⼀个⽆连接的简单的⾯向数据报的运输层协议。 UDP不提供可靠性， 它只是把应⽤程序传给IP层的数据报发送出去， 但是并不能保证它们能到达⽬ 的地。 由于UDP在传输数据报前不⽤在客户和服务器之间建⽴⼀个连接， 且没有超时重发等机制， 故⽽传输速度很快。
UDP是⼀种⾯向⽆连接的协议， 每个数据报都是⼀个独⽴的信息， 包括完整源地址或⽬ 的地址， 它在⽹络上以任何可能的路径传往⽬ 的地， 因此能否到达⽬ 的地， 到达⽬ 的地的时间以及内容的正确性都是不能被保证的。

### 特点
UDP是⾯向⽆连接的通讯协议， UDP数据包括⽬ 的端⼝号和源端⼝号信息，由于通讯不需要连接， 所以可以实现⼴播发送。 UDP传输数据时有⼤⼩限制， 每个被传输的数据报必须限定在64KB之内。 UDP是⼀个不可靠的协议， 发送⽅所发送的数据报并不⼀定以相同的次序到达接收⽅。
### 适⽤情况
UDP操作简单， ⽽且仅需要较少的监护， 因此通常⽤于局域⽹⾼可靠性的分散系统中client/server应⽤程序。 例如视频会议系统， 并不要求⾳频视频数据绝对的正确， 只要保证连贯性就可以了， 这种情况下显然使⽤UDP会更合理⼀些。

- 语⾳⼴播
- 视频
- QQ
- TFTP(简单⽂件传送）
- SNMP（简单⽹络管理协议）
- RIP（路由信息协议， 如报告股票市场， 航空信息）
- DNS(域名解释）


### udp⽹络程序-发送数据
创建⼀个udp客户端程序的流程是简单， 具体步骤如下：
1. 创建客户端套接字
2. 发送/接收数据
3. 关闭套接字
```python
from socket import *
#1. 创建套接字
udpSocket = socket(AF_INET, SOCK_DGRAM)
#2. 准备接收⽅的地址
sendAddr = ('192.168.1.103', 8080)
#3. 从键盘获取数据
sendData = raw_input("请输⼊要发送的数据:")
#4. 发送数据到指定的电脑上
udpSocket.sendto(sendData, sendAddr)
#5. 关闭套接字
udpSocket.close()
```

### 创建udp⽹络程序-接收数据
```python
#coding=utf-8
from socket import *
#1. 创建套接字
udpSocket = socket(AF_INET, SOCK_DGRAM)
#2. 准备接收⽅的地址
sendAddr = ('192.168.1.103', 8080)
#3. 从键盘获取数据
sendData = raw_input("请输⼊要发送的数据:")
#4. 发送数据到指定的电脑上
udpSocket.sendto(sendData, sendAddr)
#5. 等待接收对⽅发送的数据
recvData = udpSocket.recvfrom(1024) # 1024表示本次接收的最⼤字节数
#6. 显示对⽅发送的数据
print(recvData)
#7. 关闭套接字
udpSocket.close()
```

### udp⽹络程序-端⼝问题
⽹络程序在运⾏的过程中， IP+Port就唯⼀标识这个程序，所以如果其他电脑上的⽹络程序如果想要向此程序发送数据， 那么就需要向这个数字（即端⼝） 标识的程序发送即可

⼀个udp⽹络程序， 可以不绑定， 此时操作系统会随机进⾏分配⼀个端⼝， 如果重新运⾏次程序端⼝可能会发⽣变化
⼀个udp⽹络程序， 也可以绑定信息（ip地址， 端⼝号） ， 如果绑定成功， 那么操作系统⽤这个端⼝号来进⾏区别收到的⽹络数据是否是此进程的
```python
#coding=utf-8
from socket import *
#1. 创建套接字
udpSocket = socket(AF_INET, SOCK_DGRAM)
#2. 绑定本地的相关信息， 如果⼀个⽹络程序不绑定， 则系统会随机分配
bindAddr = ('', 7788) # ip地址和端⼝号， ip⼀般不⽤写， 表示本机的任何⼀个ip
udpSocket.bind(bindAddr)
#3. 等待接收对⽅发送的数据
recvData = udpSocket.recvfrom(1024) # 1024表示本次接收的最⼤字节数
#4. 显示接收到的数据
print recvData
#5. 关闭套接字
udpSocket.close()
```

### udp⽹络通信过程
[](./socket-udp/2.png)

### 简单聊天室
```python
from socket import *

def main():
    udpSocket = socket(AF_INET, SOCK_DGRAM)

    udpSocket.bind(("", 6789))

    #收，打印
    while True:
        recvInfor = udpSocket.recvfrom(1024)
        print("[%s]:%s"%(str(recvInfor[1]), recvInfor[0].decode("gb2312")))


if __name__ == "__main__":
    main()
```

### 实现QQ

```python
from threading import Thread
from socket import *

#1. 收数据，然后打印
def recvData():
    while True:
        recvInfo = udpSocket.recvfrom(1024)
        print(">>%s:%s"%(str(recvInfo[1]), recvInfo[0]))

#2. 检测键盘，发数据
def sendData():
    while True:
        sendInfo = input("<<")
        udpSocket.sendto(sendInfo.encode("gb2312"), (destIp, destPort))

udpSocket = None
destIp = ""
destPort = 0

def main():
    
    global udpSocket
    global destIp
    global destPort 

    destIp = input("对方的ip:")
    destPort = int(input("对方的ip:"))

    udpSocket = socket(AF_INET, SOCK_DGRAM)
    udpSocket.bind(("", 4567))

    tr = Thread(target=recvData)
    ts = Thread(target=sendData)

    tr.start()
    ts.start()

    tr.join()
    ts.join()

if __name__ == "__main__":
    main()
```


### UDP 广播
TCP没有广播, 只有UDP有广告博

```python
#coding=utf-8
import socket, sys
dest = ('<broadcast>', 7788)
## 创建udp套接字
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
## 对这个需要发送⼴播数据的套接字进⾏修改设置， 否则不能发送⼴播数据
s.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST,1)
## 以⼴播的形式发送数据到本⽹络的所有电脑中
s.sendto("Hi", dest)
print "等待对⽅回复（按ctrl+c退出） "
while True:
    (buf, address) = s.recvfrom(2048)
    print "Received from %s: %s" % (address, buf)
```


