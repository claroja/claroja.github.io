每个进程拥有各自的地址空间,一个进程的全局变量在另一个进程中看不到,所以进程之间不能相互访问,要交换数据必须经过内核,在内核中开辟一块缓冲区，进程1把数据从用户空间拷到内核缓冲区，进程2再从内核缓冲区把数据读走，内核提供的这种机制称为进程间通信（IPC，InterProcess Communication）。

常用的IPC方法有:
pipe管道 (使用最简单)
fifo信号 (开销最小)
mmap共享映射区 (无血缘关系)
socket本地套接字 (最稳定)





# 管道(pipe)
管道是内核管理的缓冲区,所以只有有血缘关系(子与父,子与子)的进程之间，完成数据传递。
管道缓冲区不打,被设计为环形数据结构.
当管道没有信息,从管道读取信息的进程会等待,知道另一端放入信息.
当管道放满信息,写入管道的进程会等待,直到另一端进程取出信息.
当两个进程都终结的时候,管道自动消失.

局限:
1.自己读不能自己写
2.不可反复读取,一次遍消失
3.半双工通信,只能在一个方向流动
4.只能在公共祖先的进程使用管道

`int pipe(int pipefd[2]);		成功：0；失败：-1，设置errno`
函数调用成功返回r/w两个文件描述符。无需open，但需手动close。规定：fd[0] → r； fd[1] → w，就像0对应标准输入，1对应标准输出一样。


```c
#include <stdio.h>
#include <unistd.h>
int main(){
	int fd[2];
	pipe(fd);
	pid_t pid = fork();
	if(pid == 0){
		sleep(3);
		write(fd[1],"hello",5);
	}else if(pid >0){
		char buf[12] ={0};
		int ret = read(fd[0],buf,sizeof(buf));
		if(ret >0){
			write(STDOUT_FILENO,buf,ret);
		}
	}
	return 0;
}
```

参考:
https://www.cnblogs.com/biyeymyhjob/archive/2012/11/03/2751593.html