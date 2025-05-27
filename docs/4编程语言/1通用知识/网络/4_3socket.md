# socket

## socket
本地的进程间通信（IPC） 有很多种⽅式队列, 同步（互斥锁、 条件变量等）.
在本地可以通过进程PID来唯⼀标识⼀个进程， 但是在⽹络中这是⾏不通的。 ⽹络层的“ip地址”可以唯⼀
标识⽹络中的主机， ⽽传输层的“协议+端⼝”可以唯⼀标识主机中的应⽤程序（进程） 。这样利⽤ ip地址， 协议， 端⼝ 就可以标识⽹络的进程了， ⽹络中的进程通信就可以利⽤这个标志与其它进程进⾏交互.

### 创建
`socket.socket(AddressFamily, Type)`
- `Address Family`： 可以选择 AF_INET（⽤于 Internet 进程间通信） 或者AF_UNIX（⽤于同⼀台机器进程间通信） ,实际⼯作中常⽤AF_INET
- `Type`： 套接字类型， 可以是 SOCK_STREAM（流式套接字， 主要⽤于TCP 协议） 或者 SOCK_DGRAM（数据报套接字， 主要⽤于 UDP 协议）