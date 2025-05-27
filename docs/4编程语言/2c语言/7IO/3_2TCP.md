原理:文件操作(内核的缓冲区)

# server
1. 创建套接字
int lfd = socket
2. 绑定本地IP和端口
struct sockaddr_in serv;
serv.port = htons(port);
serv.IP = htonl(INADDR_ANY);//自动适配ip
bind(lfd,&serv,sizeof(serv));
3. 监听
listen(lfd,128);
4. 等待并接收
struct sockaddr_in client;
int len = sizeof(client);
int cfd = accept(lfd,&client, &len);//cfd用于通信
5. 通信
接收数据:read/recv
发送数据:write/send
6. 关闭
close(lfd);
close(cfd);


```c
#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <strings.h>
#include <string.h>
#include <ctype.h>
#include <arpa/inet.h>

#define SERV_PORT 10000

int main(void)
{
    int sfd, cfd; //server和client的文件描述符
    int len, i;
    char buf[BUFSIZ], clie_IP[BUFSIZ];  //内存缓冲区的大小

    struct sockaddr_in serv_addr, clie_addr;       //创建服务端和客户端的地址结构
    socklen_t clie_addr_len;

    /*创建一个socket 指定IPv4协议族 TCP协议*/
    sfd = socket(AF_INET, SOCK_STREAM, 0);

    /*初始化服务端的地址结构*/
    bzero(&serv_addr, sizeof(serv_addr));           //结构体清零
    serv_addr.sin_family = AF_INET;                 //选择协议族为IPv4
    serv_addr.sin_addr.s_addr = htonl(INADDR_ANY);  //监听本地所有IP地址
    serv_addr.sin_port = htons(SERV_PORT);          //绑定端口号    
	

	//设置端口复用,tcp断开方会等待1分钟,复用后则不会出现此问题
	int flag = 1;
	setsockopt(lfd,SOL_SOCKET,SO_REUSEADDR,&flag,sizeof(flag));//setsockopt可以设置很多属性

    /*绑定服务器和内核缓冲区*/
    bind(sfd, (struct sockaddr *)&serv_addr, sizeof(serv_addr));
    /*开始监听*/
    listen(sfd, 64);                                //开始监听,并设置同时访问数量,此处不阻塞

    /*获取客户端地址结构大小*/ 
    clie_addr_len = sizeof(clie_addr_len);
    cfd = accept(sfd, (struct sockaddr *)&clie_addr, &clie_addr_len);           //这个是通信端的套接字

    while (1) {
        /*读取客户端发送数据*/
        len = read(cfd, buf, sizeof(buf));
        write(STDOUT_FILENO, buf, len);    //在console中打印出客户端发送的内容
        /*处理客户端数据*/
        for (i = 0; i < len; i++)
            buf[i] = toupper(buf[i]);     //对客户端发送的内容进行处理
        /*处理完数据回写给客户端*/
        write(cfd, buf, len);               //将数据发送给客户端
    }
    /*关闭链接*/
    close(sfd);
    close(cfd);
    return 0;
}
```


# client
1. 创建套接字
int fd = socket;
2. 连接服务器
struct sockaddr_in server;
server.port
server.ip=(int)
server.family
connect(fd,&server,sizeof(server));
3. 通信
接收数据:read/recv
发送数据:write/send
4. 关闭
close(fd);


```c
#include <stdio.h>
#include <unistd.h>
#include <string.h>
#include <sys/socket.h>
#include <arpa/inet.h>

#define SERV_IP "127.0.0.1"
#define SERV_PORT 9527

int main(void)
{
    int sfd, len;
    struct sockaddr_in serv_addr;
    char buf[BUFSIZ]; 

    sfd = socket(AF_INET, SOCK_STREAM, 0);
    bzero(&serv_addr, sizeof(serv_addr));
    serv_addr.sin_family = AF_INET;
    inet_pton(AF_INET, SERV_IP, &serv_addr.sin_addr.s_addr);
    serv_addr.sin_port = htons(SERV_PORT); 
    connect(sfd, (struct sockaddr *)&serv_addr, sizeof(serv_addr));

    while (1) {
        fgets(buf, sizeof(buf), stdin);//读取console输入字符
        write(sfd, buf, strlen(buf)); //写入套接字
        len = read(sfd, buf, sizeof(buf));//读取套接字内容
        write(STDOUT_FILENO, buf, len);//将套接字返回内容打印
    }
    close(sfd);
    return 0;
}

```