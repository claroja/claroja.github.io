# signal

1.linux系统通过信号管理进程,系统规定了进程接收到信号的行为
2.一个进程接收到信号,就会打断原来程序执行流程来处理信号
3.信号只用来通知进程发生了什么事件,不会给进程传递任何数据

信号编号	|行为	|默认动作	|说明
--|--|--|--
1	|SIGHUP	|终止进程|当用户退出终端时,默认动作为终止进程,向该会话的所有进程发送，可捕获屏蔽
2	|SIGINT|	终止进程	| Interrupt（Ctrl + C）可捕获屏蔽
3	|SIGQUIT|	终止进程|	Quit（Ctrl + \）可捕获屏蔽
4	|GIGILL	|dump|	非法指令引起
5	|SIGTRAP|	dump|	debug中断
6	|SIGABRT/SIGIOT|	dump|	异常中止
7	|SIGBUS/SIGEMT|	dump|	总线异常/EMT指令
8	|SIGFPE|	dump|	浮点运算溢出
9	|SIGKILL|	终止|	无条件终止进程。本信号不能被忽略，处理和阻塞。默认动作为终止进程
10	|SIGUSR1|	终止	|用户信号, 进程可自定义用途
11	|SIGSEGV|	dump|	非法内存地址引起
12	|SIGUSR2|	终止	用户信号, 进程可自定义用途
13	|SIGPIPE|	终止	|向某个没有读取的管道中写入数据。默认动作为终止进程。
14	|SIGALRM	|终止|	定时发送终止信号,就是表明是定时发送的
15	|SIGTERM|	终止|	执行shell命令Kill时,与SIGKILL不同的是，该信号可以被阻塞和终止。通常用来要示程序正常退出。默认动作为终止进程。
16	|SIGSTKFLT|	终止|	协处理器栈错误
17	|SIGCHLD|	忽略|	子进程结束时，父进程会收到这个信号。默认动作为忽略这个信号。
18	|SIGCONT|	继续	|如果进程已停止，则使其继续运行。默认动作为继续/忽略。
19	|SIGSTOP|	暂停	|Stop（Ctrl + Z）不可捕获屏蔽
20	|SIGSTP|	暂停|	停止终端交互进程的运行。按下<ctrl+z>组合键时发出这个信号。默认动作为暂停进程。
21	|SIGTTIN|	暂停|	后台进程请求输入
22	|SIGTTOU|	暂停|	后台进程请求输出
23	|SIGURG|	忽略|	socket发送紧急情况
24	|SIGXCPU|	dump|	CPU时间限制被打破
25	|SIGXFSZ|	dump|	文件大小限制被打破
26	|SIGVTALRM|	终止|	虚拟定时时钟
27	|SIGPROF|	终止|	profile timer clock
28	|SIGWINCH	|忽略|	窗口尺寸调整
29	|SIGIO/SIGPOLL|	终止|	I/O可用
30	|SIGPWR|	终止|	电源异常
31	|SIGSYS/SYSUNUSED|	dump	|系统调用异常




信号生命周期:诞生,注册,执行,注销


## 信号诞生:
1.硬件:`ctrl+c`
2.程序异常:`SIGFPE`,`SIGSEGV`
3.软件:`kill`,`raise`,`alarm`,`settimer`,`sigqueue`


## 信号注册
1. 给进程发送信号,就是修改PCB中信号结构体的pending位图(sigset_t),将相应的位置设为1.
	1. PCB(Processing Control Block),在创建进程时,创建PCB
		1. 程序ID(PID)
		2. 特征信息:系统进程,用户进程,内核进程
		3. 进程状态:运行/就绪/阻塞
		4. 优先级:获得CPU控制权的优先级大小
		5. 通信信息:进程之间的通信关系
		6. 现场保护区:保护阻塞进程作用
		7. 资源需求/分配控制信息
		8. 进程实体信息,程序路径/名称/
		9. 其他
	2. 非可靠信号(1~31)不支持排队,非实时信号 ,将对应位置0换为1,如果重复不操作
	3. 可靠信号(32~)支持排队,不管有没有注册都置为1,并添加节点到链表中


2. 信号阻塞,建立和pending相同的表,来阻塞不想处理的信号.注意和忽略信号不是一个概念
	1. `SIGKILL`,`SIGSTOP`不可被阻塞
	2. sigset_t信号集
		1. 每个信号用一个比特位来表示,0/1表示信号未决或阻塞
		2. 只能使用信号集函数操作,不能直接访问结构体
		3. pending结构体是未决信号集,里面放了注册但是未处理的信号
		4. block结构体中是阻塞信号集,放了被阻塞的信号
		5. 相关函数` int sigemptyset` `int sigfillset` `int sigaddset` ` int sigdelset` ` int sigismembert` `sigprocmask`

3. 信号注销
	1. 删除链表中节点,相应位图置为0
	2. 删除节点,判断是否还有相同信号节点,如果灭有位图置为0,如果有不置0




## 信号处理(捕获/安装)
1.确定信号值及进程对该信号值的动作之间的映射关系.`signal()` `sigaction()`





参考:
https://blog.csdn.net/httpdrestart/article/details/80744352
https://www.jianshu.com/p/e0a69beb98bb
https://blog.csdn.net/ENSHADOWER/article/details/83866359
http://m.elecfans.com/article/579913.html
https://www.jianshu.com/p/c8edab99173d
