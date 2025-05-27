`man 7 signal`

信号四要素
1. 编号 2. 名称 3. 事件 4. 默认处理动作 


处理动作
Term：终止进程
Ign： 忽略信号 (默认即时对该种信号忽略操作)
Core：终止进程，生成Core文件。(查验进程死亡原因， 用于gdb调试)
Stop：停止（暂停）进程
Cont：继续运行进程


	信号的处理方式: 
1. 执行默认动作 
2. 忽略(丢弃) 
3. 捕捉(调用户处理函数)

9号19号信号不能捕捉,忽略和阻塞



阻塞信号集
将某些信号加入集合，对他们设置屏蔽，当屏蔽x信号后，再收到该信号，该信号的处理将推后
未决信号集: 
信号产生，未决信号集中描述该信号的位立刻翻转为1，表信号处于未决状态。当信号被处理对应位翻转回为0。

信号产生
键盘
    Ctrl + c  → 2) SIGINT（终止/中断）	 "INT" ----Interrupt
    Ctrl + z  → 20) SIGTSTP（暂停/停止）  "T" ----Terminal 终端。
    Ctrl + \  → 3) SIGQUIT（退出）	
硬件异常产生信号
    除0操作   → 8) SIGFPE (浮点数例外)	"F" -----float 浮点数。
    非法访问内存  → 11) SIGSEGV (段错误)
    总线错误  → 7) SIGBUS


kill命令产生信号：kill -SIGKILL pid(SIGKILL 代号 就是 9)
kill函数：给指定进程发送指定信号
    `int kill(pid_t pid, int sig);`	 成功：0；失败：-1 (ID非法，信号非法，普通用户杀init进程等权级问题)，设置errno
	sig：不推荐直接使用数字，应使用宏名，因为不同操作系统信号编号可能不同，但名称一致。
    pid > 0:  发送信号给指定的进程。
	pid = 0:  发送信号给 与调用kill函数进程属于同一进程组的所有进程。
	pid < 0:  取|pid|发给对应进程组。
	pid = -1：发送给进程有权限发送的系统中所有进程。



# raise abort
raise 函数：
给当前进程发送指定信号
`raise(signo) == kill(getpid(), signo);`
   `int raise(int sig); //成功：0，失败非0`
abort 函数：
给自己发送异常终止信号 6) SIGABRT 信号，终止并产生core文件
  `void abort(void); `



# alarm&setitimer

定时发送14）SIGALRM信号,默认动作终止。
每个进程都有且只有唯一个定时器。


`unsigned int alarm(unsigned int seconds); //返回0或剩余的秒数，无失败。`




` int setitimer(int which, const struct itimerval *new_value, struct itimerval *old_value);	//成功：0；失败：-1，设置errno`



which:
		① 自然定时：ITIMER_REAL → 14）SIGLARM				 		计算自然时间
		② 虚拟空间计时(用户空间)：ITIMER_VIRTUAL → 26）SIGVTALRM  	 只计算进程占用cpu的时间
		③ 运行时计时(用户+内核)：ITIMER_PROF → 27）SIGPROF		 计算cup调用时间


参考:
https://www.cnblogs.com/xiaoshiwang/p/10895795.html