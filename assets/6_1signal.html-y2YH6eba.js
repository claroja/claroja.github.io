import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as t,a as o}from"./app-nD1Z-e8V.js";const r={},a=o(`<p><code>man 7 signal</code></p><p>信号四要素</p><ol><li>编号 2. 名称 3. 事件 4. 默认处理动作</li></ol><p>处理动作 Term：终止进程 Ign： 忽略信号 (默认即时对该种信号忽略操作) Core：终止进程，生成Core文件。(查验进程死亡原因， 用于gdb调试) Stop：停止（暂停）进程 Cont：继续运行进程</p><pre><code>信号的处理方式: 
</code></pre><ol><li>执行默认动作</li><li>忽略(丢弃)</li><li>捕捉(调用户处理函数)</li></ol><p>9号19号信号不能捕捉,忽略和阻塞</p><p>阻塞信号集 将某些信号加入集合，对他们设置屏蔽，当屏蔽x信号后，再收到该信号，该信号的处理将推后 未决信号集: 信号产生，未决信号集中描述该信号的位立刻翻转为1，表信号处于未决状态。当信号被处理对应位翻转回为0。</p><p>信号产生 键盘 Ctrl + c → 2) SIGINT（终止/中断） &quot;INT&quot; ----Interrupt Ctrl + z → 20) SIGTSTP（暂停/停止） &quot;T&quot; ----Terminal 终端。 Ctrl + \\ → 3) SIGQUIT（退出） 硬件异常产生信号 除0操作 → 8) SIGFPE (浮点数例外) &quot;F&quot; -----float 浮点数。 非法访问内存 → 11) SIGSEGV (段错误) 总线错误 → 7) SIGBUS</p><p>kill命令产生信号：kill -SIGKILL pid(SIGKILL 代号 就是 9) kill函数：给指定进程发送指定信号 <code>int kill(pid_t pid, int sig);</code> 成功：0；失败：-1 (ID非法，信号非法，普通用户杀init进程等权级问题)，设置errno sig：不推荐直接使用数字，应使用宏名，因为不同操作系统信号编号可能不同，但名称一致。 pid &gt; 0: 发送信号给指定的进程。 pid = 0: 发送信号给 与调用kill函数进程属于同一进程组的所有进程。 pid &lt; 0: 取|pid|发给对应进程组。 pid = -1：发送给进程有权限发送的系统中所有进程。</p><h1 id="raise-abort" tabindex="-1"><a class="header-anchor" href="#raise-abort" aria-hidden="true">#</a> raise abort</h1><p>raise 函数： 给当前进程发送指定信号 <code>raise(signo) == kill(getpid(), signo);</code><code>int raise(int sig); //成功：0，失败非0</code> abort 函数： 给自己发送异常终止信号 6) SIGABRT 信号，终止并产生core文件 <code>void abort(void); </code></p><h1 id="alarm-setitimer" tabindex="-1"><a class="header-anchor" href="#alarm-setitimer" aria-hidden="true">#</a> alarm&amp;setitimer</h1><p>定时发送14）SIGALRM信号,默认动作终止。 每个进程都有且只有唯一个定时器。</p><p><code>unsigned int alarm(unsigned int seconds); //返回0或剩余的秒数，无失败。</code></p><p><code> int setitimer(int which, const struct itimerval *new_value, struct itimerval *old_value); //成功：0；失败：-1，设置errno</code></p><p>which: ① 自然定时：ITIMER_REAL → 14）SIGLARM 计算自然时间 ② 虚拟空间计时(用户空间)：ITIMER_VIRTUAL → 26）SIGVTALRM 只计算进程占用cpu的时间 ③ 运行时计时(用户+内核)：ITIMER_PROF → 27）SIGPROF 计算cup调用时间</p><p>参考: https://www.cnblogs.com/xiaoshiwang/p/10895795.html</p>`,18),l=[a];function n(c,d){return e(),t("div",null,l)}const I=i(r,[["render",n],["__file","6_1signal.html.vue"]]);export{I as default};
