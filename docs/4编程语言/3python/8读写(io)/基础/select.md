# select

select作用:
1.监听哪些文件描述符(最多监听1024个fd)的哪些事件
(每次调用select,都会会所有的socket进行一次线性扫描)
2.内核监听到数据后,不告诉是哪个连接有数据,用户只能通过轮询的方式来获取数据
(如:监视10个socket,当有1个连接有数据后,内核就通知用户10个socket中有数据了)


select过程:
1.将fd从用户空间复制到内核空间
2.遍历所有fd,查看对应事件是否发生
3.发生:将唤醒,未发生将阻塞
4.返回遍历后的fd
5.将fd从内核空间赋值到用户空间

```python
fd_r_list, fd_w_list, fd_e_list = select.select(rlist, wlist, xlist, [timeout])
```
参数|描述
--|--
rlist|满足可读条件,获取发生变化的fd,并添加到fd_r_list
wlist|
xlist|满足发生错误时,将发生错误的fd添加到fd_e_list
timeout|为空,select会一直阻塞,直到监听的fd发生变化.如果设置为n,则过n秒,且没有检测到变化,则返回三个空列表

服务端
```python
import socket
import select

server1 = socket.socket()
server1.bind(('0.0.0.0', 8001))
server1.listen()

server2 = socket.socket()
server2.bind(('0.0.0.0', 8002))
server2.listen()

inputs = [server1, server2, ]

while True:
    r_list, w_list, e_list = select.select(inputs,[],[],1)
    print(f'r_list:{r_list}')
    for ser in r_list:
        conn, address = ser.accept()
        conn.send('您好'.encode())
        conn.close()
```

客户端
```python
import socket

client = socket.socket()
client.connect(('127.0.0.1', 8001))
print(client.recv(1024).decode())
```




参考:
https://www.jb51.net/article/111899.htm
https://www.jianshu.com/p/e26594304e11