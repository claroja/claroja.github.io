# server
```c
string.h>
#include <arpa/inet.h>
int main(void)
{
    // 创建套接字
    int fd = socket(AF_INET, SOCK_DGRAM, 0);
    // 绑定IP和端口
    struct sockaddr_in serv;
    memset(&serv, 0, sizeof(serv));
    serv.sin_family = AF_INET;
    serv.sin_port = htons(9999);
    serv.sin_addr.s_addr = htonl(INADDR_ANY);
    int ret = bind(fd, (struct sockaddr*)&serv, sizeof(serv));

    struct sockaddr_in client;
    socklen_t cli_len = sizeof(client);
    // 通信
    char buf[1024] = {0};
    while(1)
    {
        int recvlen = recvfrom(fd, buf, sizeof(buf), 0, (struct sockaddr*)&client, &cli_len); //接收客户端数据
        printf("buf: %s\n", buf);
        sendto(fd, buf, strlen(buf)+1, 0, (struct sockaddr*)&client, sizeof(client));//发送数据
    }
    close(fd);
    return 0;
}
```


# client

```c
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <string.h>
#include <arpa/inet.h>

int main(int argc, const char* argv[])
{
    int fd = socket(AF_INET, SOCK_DGRAM, 0);
    // 绑定IP和端口
    struct sockaddr_in serv;
    memset(&serv, 0, sizeof(serv));
    serv.sin_family = AF_INET;
    serv.sin_port = htons(9999);
    inet_pton(AF_INET, "127.0.0.1", &serv.sin_addr.s_addr);
    // 通信
    while(1)
    {
        char buf[1024] = {0};
        fgets(buf, sizeof(buf), stdin);
        sendto(fd, buf, strlen(buf)+1, 0, (struct sockaddr*)&serv, sizeof(serv));
        recvfrom(fd, buf, sizeof(buf), 0, NULL, NULL);
        printf("buf: %s\n", buf);
    }
    close(fd);
    return 0;
}
```