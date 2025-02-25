import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,a as d}from"./app-nD1Z-e8V.js";const i={},n=d("<table><thead><tr><th>函数</th><th>描述</th><th>返回</th></tr></thead><tbody><tr><td>int sigemptyset(sigset_t *set);</td><td>信号集清0</td><td>成功：0；失败：-1</td></tr><tr><td>int sigfillset(sigset_t *set);</td><td>信号集置1</td><td>成功：0；失败：-1</td></tr><tr><td>int sigaddset(sigset_t *set, int signum);</td><td>将信号加入信号集</td><td>成功：0；失败：-1</td></tr><tr><td>int sigdelset(sigset_t *set, int signum);</td><td>将信号清出信号集</td><td>成功：0；失败：-1</td></tr><tr><td>int sigismember(const sigset_t *set, int signum);</td><td>判断某个信号是否在信号集中</td><td>返回值：在集合：1；不在：0；出错：-1</td></tr></tbody></table><p>sigprocmask 读取或修改进程的信号屏蔽字(PCB中) <code>int sigprocmask(int how, const sigset_t *set, sigset_t *oldset);// 成功：0；失败：-1，设置errno</code></p><p>sigpending 读取当前进程的未决信号集</p><p><code>int sigpending(sigset_t *set); //set传出参数。 返回值：成功：0；失败：-1，设置errno</code></p>",4),r=[n];function o(_,c){return s(),e("div",null,r)}const m=t(i,[["render",o],["__file","6_2信号集处理.html.vue"]]);export{m as default};
