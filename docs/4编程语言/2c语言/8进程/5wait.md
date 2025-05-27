# 基础
1. `wait()`父进程调用,返回子进程状态的变化(由运行到结束)
2. 当父进程调用`wait()`将会阻塞,直到子进程状态发生变化
3. `wait`返回子子进程的pid,如果没有子进程,则返回-1
4. `wait`需要整型指针参数,记录子进程退出的状态
5. 当status为NULL时只要有一个子进程退出,主进程就退出,如果参数status的值不是NULL，wait就会把子进程退出时的状态取出并存入其中，这是一个整数值(int),使用宏(macro)来判断
	1. WIFEXITED(status)：这个宏用来指出子进程是否为正常退出的,正常返回非0
	2. WEXITSTATUS(status)：当WIFEXITED返回非零值时，我们可以用这个宏来提取子进程的返回值，如果子进程调用exit(5)退出，WEXITSTATUS(status)就会返回5
6. `#include <sys/types.h>`,`#include <sys/wait.h>` 原型`pid_t wait(int *status);`
7. 当进程终止时,操作系统会:
	1. 关闭所有文件描述符
	2. 释放分配的内存空间
	3. 但是内核的PCB仍存在,其中保存着(正常终止→退出值；异常终止→终止信号)



```c
/*get_exitstatus.c*/
#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>

#include <sys/types.h>
#include <sys/wait.h>

int main(){

  pid_t c_pid, pid;
  int status;

  c_pid = fork(); //duplicate

  if( c_pid == 0 ){
    //child
    pid = getpid();

    printf("Child: %d: I'm the child\n", pid, c_pid);
    printf("Child: sleeping for 2-seconds, then exiting with status 12\n");

    //sleep for 2 seconds
    sleep(2);

    //exit with statys 12
    exit(12);

  }else if (c_pid > 0){
    //parent

    //waiting for child to terminate
    pid = wait(&status);

    if ( WIFEXITED(status) ){
      printf("Parent: Child exited with status: %d\n", WEXITSTATUS(status));
    }

  }else{
    //error: The return of fork() is negative
    perror("fork failed");
    _exit(2); //exit failure, hard
  }

  return 0; //success                                                                                                                                                        
}
```


参考:https://blog.csdn.net/thanksgining/article/details/41979699


# waitpid
1. `include <sys/sypes.h>` `#include <sys/wait.h>` 原型 `pid_t waitpid(pid_t pid,int *status, int options)`
2. 参数

参数|描述
--|--
pid|>0,等待指定pid子进程退出;=0,等待组任一子进程退出;=-1,等待任一子进程退出,同waite;<-1,等待起?
status|同`wait()`
options|WNOHANG,不阻塞,直接返回,如果子进程没结束,返回0;WUNTRACED,;0,同`wait()`

3. 返回
正常:返回退出子进程的进程号,WNOHANG,没有子进程退出返回0
错误:返回-1


参考:https://blog.csdn.net/yasi_xi/article/details/46341733













# 孤儿进程
孤儿进程:父进程死,子进程被init领养
子进程被领养后,ctrl+c不能停止,因为该bash已经没有子进程了,只能通过kill杀死

```c
#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

int main(void)
{
    pid_t pid;
    pid = fork();
    
    if (pid == 0) {
        while (1) {
            printf("子进程,我的父 = %d\n", getppid());
            sleep(1);
        }
    } else if (pid > 0) {
            printf("父进程,我的子 = %d\n", getpid());
            sleep(9);
            printf("------------parent going to die------------\n");
    } else {
        perror("fork");
        return 1;
    }

    return 0;
}
```



# 僵尸进程
僵尸进程:子进程死了,父进程没有回收子进程的资源(PCB)
僵尸进程不能用kill命令清掉,因为僵尸进程已经终止了.可以通过杀死父进程,来杀死僵尸进程.
```c

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/wait.h>

int main(void)
{
    pid_t pid, wpid;
    pid = fork();

    if (pid == 0) {
            printf("子进程,我的父= %d, going to sleep 10s\n", getppid());
            sleep(10);
            printf("-------------child die--------------\n");
    } else if (pid > 0) {
        while (1) {
            printf("父进程, pid = %d, 我的子 = %d\n", getpid(), pid);
            sleep(1);
        }
    } else {
        perror("fork");
        return 1;
    }

    return 0;
}
```








```c
pid_t wait(int *status); 	成功：清理掉的子进程ID；失败：-1 (没有子进程)
```



```c
pid_t waitpid(pid_t pid, int *status, in options);	成功：返回清理掉的子进程ID；失败：-1(无子进程)
```



