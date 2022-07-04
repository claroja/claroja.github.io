---
title: python_process_signal
toc: true
date: 2021-11-02 8:14:54
tags:
---

参数|描述
--|--
signal.SIG_DFL|执行信号的默认函数
signal.SIG_IGN|忽略信号
signal.NSIG|
signal.ITIMER_REAL|
signal.ITIMER_VIRTUAL|
signal.ITIMER_PROF|
signal.SIG_BLOC|
signal.SIG_UNBLOCK|
signal.SIG_SETMASK|



方法|描述
--|--
signal.alarm(time)|定时发送`SIGALAEM`信号,
signal.getsignal(signalnum)|返回信号处理函数(python对象, signal.SIG_IGN, signal.SIG_DFL,None)
signal.strsignal(signalnum)|对信号的描述
signal.valid_signals()|当前系统可用的信号
signal.pause()|阻塞,直到收到信号
signal.raise_signal(signum)|给当前进程发送信号
signal.pthread_kill(thread_id, signalnum)|向线程发送信号
signal.pthread_sigmask(how, mask)|
signal.setitimer(which, seconds, interval=0.0)|定时发送SIGALRM
signal.getitimer(which)|
signal.set_wakeup_fd(fd, *, warn_on_full_buffer=True)|
signal.siginterrupt(signalnum, flag)|
signal.signal(signalnum, handler)|捕获信号,设置处理方法
signal.sigpending()|
signal.sigwait(sigset)|
signal.sigwaitinfo(sigset)|
signal.sigtimedwait(sigset, timeout)|


```python
import signal
# Define signal handler function
def myHandler(signum, frame):
    print('I received: ', signum)

# register signal.SIGTSTP's handler
signal.signal(signal.SIGTSTP, myHandler)
signal.pause()
print('End of Signal Demo')


```




参考:
https://docs.python.org/3/library/signal.html#module-signal
https://www.cnblogs.com/madsnotes/articles/5688681.html
https://www.jianshu.com/p/c8edab99173d
参数|描述
--|--
which|ITIMER_REAL:系统真实时间;ITIMER_VIRTUAL:用户态花费的时间;ITIMER_PROF:用户态内核态总时间





signal.CTRL_C_EVENT|win|Ctrl+C 击键事件的信号
signal.CTRL_BREAK_EVENT|win|` Ctrl+Break`
