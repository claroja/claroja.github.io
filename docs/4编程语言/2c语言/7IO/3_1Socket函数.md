

# socket
```c
#include<sys/types.h>
#include<sys/socket.h>
int socket(int domain, int type, int protocol);
```
参数|描述
--|--
domain|设置通信域(本地(PF_LOCAL),ipv4(AF_INET),ipv6()等)
type|设置套接字通信类型(TCP,双向字节流(SOCK_STREAM),UDP(SOCK_DGRAM))
protocol|某个协议的特定类型,既type类型中某个类型.通常只有一个类型,所以设置成0


# 本地和网络字节转换
网络字节顺序NBO（Network Byte Order）,按从高到底顺序存储,(大端：低位存放在高字节)
主机字节顺序（HBO，Host Byte Order）（小端：低位存放在低字节）

方法|描述
--|--
htonl()|"Host to Network Long int"     |32Bytes
ntohl()|"Network to Host Long int"    | 32Bytes
htons()|"Host to Network Short int"  |16Bytes
ntohs()|"Network to Host Short int"   |16Bytes


INADDR_ANY 就是0.0.0.0,意思就是本机所有的网卡(因为有些机子不止一块网卡).在多卡的情况下,如果我们绑定了某个具体的ip地址,那么就只能监听所设置的ip地址所在的网卡端口,其他的两块网卡无法监听端口.



# sockaddr_in
```
struct sockaddr_in {
　　short int sin_family; /*指代协议族，在socket编程中只能是AF_INET */
　　unsigned short int sin_port; /* 端口号 */
　　struct in_addr sin_addr; /* IP地址, in_addr这个数据结构,下面会有对in_addr的介绍*/
　　unsigned char sin_zero[8]; /* Same size as struct sockaddr */
　　};

struct in_addr {
　　union {
　　struct{ unsigned char s_b1,s_b2, s_b3,s_b4;} S_un_b;
　　struct{ unsigned short s_w1, s_w2;} S_un_w;
　　unsigned long S_addr;
　　} S_un;
　　} IN_ADDR;
```


# socklent_t
在32位下`size_t`和`int`长度相同,都是32bit,
在64位下`sie_t`和`int`长度不同,分别是32bit和64bit
而socket中accpet函数的第三个参数必须和int长度相同,所以变设置了socklen_t的类型


# accept
提取所监听套接字的第一个链接请求,创建新的套接字,并返回文件描述符,新建立的套接字准备发送send()和接收数据recv()
```c
#include <sys/types.h>
#include <sys/socket.h>
int accept(int sockfd,struct sockaddr *addr,socklen_t *addrlen);
```
参数|描述
--|--
sockfd|经过绑定(bind),监听(listen)的socket套接字描述符
addr|客户端的地址结构体
addrlen|sizeof(struct sockaddr_in),客户端地址结构体的大小


参考文献:
https://blog.csdn.net/xc_tsao/article/details/44123331
https://blog.csdn.net/haoxiaodao/article/details/73162663
https://blog.csdn.net/Qiana_/article/details/79552087
[accept](https://blog.csdn.net/u010144805/article/details/78276659)
