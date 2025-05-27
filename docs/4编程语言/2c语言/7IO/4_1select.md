```c
#include <sys/select.h>
int select(int nfds, fd_set *readfds, fd_set *writefds,
			fd_set *exceptfds, struct timeval *timeout);
```

参数|描述
--|--
nfds|监听文件描述符中最大的+1,或者填1024
readfds|读集合
writefds|写集合
exceptfds|异常集合
timeout|定时阻塞监控时间，3种情况
				
timeout:
1.NULL，永远等下去
2.设置timeval，等待固定时间
3.设置timeval里时间均为0，检查描述字后立即返回，轮询



文件描述符操作函数

函数|描述
--|--
void FD_CLR(int fd, fd_set *set); 	|清0
int FD_ISSET(int fd, fd_set *set); 	|是否置1
void FD_SET(int fd, fd_set *set); 	|fd位置1
void FD_ZERO(fd_set *set); 			|所有位清0



```c
//创建一个文件描述符表
fd_st reads,temp;
//初始化
fd_zero(&reads);
//将监听的描述符添加到读集合
fd_set(lfd,&reads);
//内核检测
while(1){
	temp = reads;
	int ret = select(maxfd+1,&reads,NULL,NULL,NULL);
	//是不是鉴定的
	if(fd_isset(lfd,&temp)){
	int cfd = accept();
	//cfd加入读集合
	fd_set(cfd,&reads);
	//更新maxfd
	maxfd=maxfd<cfd?cfd:maxfd;
	}
	//客户端发送数据
	for(int i = lfd+1;i<=maxfd;++i){
		if(fd_isset(i,&temp){
			int len = read();
			if(len ==0){
				//cfd 从读集合中删除
				fd_clr(i, &reads);
			}
			write();
		}
	}
	

}
```


select
优点:
跨平台
缺点:
1.select仅支持1024个文件描述符
2.用户空间和内核空间相互拷贝浪费资源
3.遍历也很浪费资源