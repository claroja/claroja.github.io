# 基础
1. 进程是父进程的复制,在fork瞬间复制所有信息(复制父进程代码,复制父进程的状态,如变量)
```c
#include <sys/types.h>
#include <unistd.h>
#include <stdio.h>
int main(){
	printf("start");
	pid_t pid = fork();
	printf("end")
	return 0;
```

1)父子相同处: 全局变量、.data、.text、栈、堆、环境变量、用户ID、宿主目录、进程工作目录、信号处理方式...
2)父子不同处: 1.进程ID   2.fork返回值   3.父进程ID    4.进程运行时间    5.闹钟(定时器)   6.未决信号集
3)文件描述符也被复制,这个是管道的基础


```c
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>

int var = 34;

int main(void)
{
    pid_t pid;
    pid = fork();//从这里开始,子进程复制了下面的代码,单独运行,在子进程里pid是0,在父进程里pid是子进程的id
    if (pid == -1 ) {//如果失败的话
        perror("fork error");
        exit(1);
    } else if (pid > 0) {//父进程会执行这里
        sleep(2);//等待子进程的结束,不然子进程会没有父进程
        var = 55;//子进程和父进程不共享全局变量
        printf("I'm parent pid = %d, parentID = %d, var = %d\n", getpid(), getppid(), var);
    } else if (pid == 0) {//子进程会执行这里
        var = 100;
        printf("child  pid = %d, parentID=%d, var = %d\n", getpid(), getppid(), var);
    }
    printf("var = %d\n", var);

    return 0;
}

```

3. 所有的进程都产生于其他进程,最初的进程是init
4. fork方法返回两次,一次是父进程(返回子进程的id),一次是子进程(返回0)
5. 子进程是父进程的镜像
6. 每一个进程都有一个id,叫`pid`
7. `pid`占用2个字节,类型是`pid_t`
8. 父进程`fork`返回子进程的id,子进程`fork`返回0,出错`fork`返回-1,用来判断当前是父进程还是子进程
```c
#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>

int main(){

  pid_t c_pid;
  c_pid = fork(); //duplicate                                                                                                                                                
  if( c_pid == 0 ){
    //child: The return of fork() is zero                                                                                                                                    
    printf("Child: I'm the child: %d\n", c_pid);
  }else if (c_pid > 0){
    //parent: The return of fork() is the process of id of the child                                                                                                         
    printf("Parent: I'm the parent: %d\n", c_pid);
  }else{
    //error: The return of fork() is negative                                                                                                                                
    perror("fork failed");
    _exit(2); //exit failure, hard                                                                                                                                           
  }
  return 0; //success                                                                                                                                                        
}
```



9. `fork`机制,父知道子pid,子不知道父pid,使用`getppid`
10. 父不知道自己的id,使用`getpid`
11. Terminal shell 就是fork,使用`echo $$`查看当前shell的进程
```c
#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>

int main(){
  pid_t pid, ppid;

  //get the process'es pid
  pid = getpid();
  //get the parrent of this process'es pid
  ppid = getppid();
  printf("My pid is: %d\n",pid);
  printf("My parent's pid is %d\n", ppid);
  return 0;
}
```