import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as i,e as t}from"./app-yeyEmHfz.js";const n={},r=t('<h1 id="singlabelclassification" tabindex="-1"><a class="header-anchor" href="#singlabelclassification" aria-hidden="true">#</a> singlabelClassification</h1><h2 id="进程和线程" tabindex="-1"><a class="header-anchor" href="#进程和线程" aria-hidden="true">#</a> 进程和线程</h2><ul><li>线程存在于进程内，是进程的一个子集</li><li>进程拥有共享的资源(资源分配最小单位)，如内存空间等，供其内部的线程(资源调度最小单位)共享</li><li>通信 同一台计算机的进程通信称为 IPC（Inter-process communication）, 不同计算机之间的进程通信，需要通过网络，并遵守共同的协议，例如 HTTP 多个线程可以访问同一个共享变量</li><li>线程更轻量，线程上下文切换成本一般上要比进程上下文切换低</li></ul><h2 id="并行与并发" tabindex="-1"><a class="header-anchor" href="#并行与并发" aria-hidden="true">#</a> 并行与并发</h2><p>并发(concurrent): 单核cpu下，线程实际还是串行执行的。操作系统通过任务调度器，将cpu的时间片(毫秒级)分给不同的程序,物理时间先后发生, 由于cpu在线程间（时间片很短）的切换非常快，给人感觉是同时运行的. 并行(parallel): 多个cpu下, 不同cpu同一时刻, 同时执行指令, 物理时间同时发生.</p><h2 id="同步与异步" tabindex="-1"><a class="header-anchor" href="#同步与异步" aria-hidden="true">#</a> 同步与异步</h2><p>需要等待结果返回，才能继续运行就是同步 不需要等待结果返回，就能继续运行就是异步</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ol><li>单核cpu下，多线程不能实际提高程序运行效率 但是IO操作不占用cpu, 线程虽然不用cpu，但需要一直等待IO结束, 此时虽然是单核cpu, 也可用多线程.</li><li>多核cpu下, 可以</li></ol><h2 id="同步和异步" tabindex="-1"><a class="header-anchor" href="#同步和异步" aria-hidden="true">#</a> 同步和异步</h2><p>以调用方角度来讲</p><ul><li>需要等待子线程结果返回，才能继续运行就是同步</li><li>不需要等待子线程结果返回，就能继续运行就是异步</li></ul><h2 id="操作系统的五中状态" tabindex="-1"><a class="header-anchor" href="#操作系统的五中状态" aria-hidden="true">#</a> 操作系统的五中状态</h2><p>New: 进程创建, 没有和系统关联 Ready: 等待系统调度, 分配CPU时间 Running: 获得CPU时间片, 正在运行 Blocked: 比如等待IO, 直到收到IO完成 event, 才会进入Ready状态 Exit:退出 参考:https://www.tecmint.com/linux-process-management/</p><h2 id="java-thread-六种状态" tabindex="-1"><a class="header-anchor" href="#java-thread-六种状态" aria-hidden="true">#</a> Java Thread 六种状态</h2><ul><li>New: Thread创建, 未调用<code>start()</code></li><li>Runnable: 调用<code>start()</code>后, 包含了系统的(可运行,运行与阻塞状态)</li><li>Blocked: acquiring a lock</li><li>Waited: waiting for notification</li><li>Timed_Waitting: waitingg for timeout notification</li><li>Terminated: 方法执行完终止</li></ul><h3 id="new-runnable" tabindex="-1"><a class="header-anchor" href="#new-runnable" aria-hidden="true">#</a> NEW --&gt; RUNNABLE</h3><ul><li>调用<code>t.start()</code></li></ul><h3 id="runnable-waiting" tabindex="-1"><a class="header-anchor" href="#runnable-waiting" aria-hidden="true">#</a> RUNNABLE &lt;--&gt; WAITING</h3><ul><li>调用<code>obj.wait()</code>, 线程从 RUNNABLE --&gt; WAITING</li><li>调用<code>obj.notify()</code>,<code>obj.notifyAll()</code>,<code>t.interrupt()</code><ul><li>竞争锁成功，t 线程从 WAITING --&gt; RUNNABLE</li><li>竞争锁失败，t 线程从 WAITING --&gt; BLOCKED</li></ul></li><li>调用<code>t.join()</code>时，当前线程从 RUNNABLE --&gt; WAITING t 线程运行结束，或调用了当前线程的<code>interrupt()</code>时，当前线程从 WAITING --&gt; RUNNABLE</li><li>当前线程调用<code>LockSupport.park()</code>方法会让当前线程从 RUNNABLE --&gt; WAITING 调用<code>LockSupport.unpark()</code>或调用了线程的<code>interrupt()</code>, 会让目标线程从 WAITING --&gt; RUNNABLE</li></ul><h3 id="runnable-timed-waiting" tabindex="-1"><a class="header-anchor" href="#runnable-timed-waiting" aria-hidden="true">#</a> RUNNABLE &lt;--&gt; TIMED_WAITING</h3><ul><li>线程调用<code>synchronized(obj)</code>获取了对象锁后 调用<code>obj.wait(long n)</code>方法时, 线程从 RUNNABLE --&gt; TIMED_WAITING 线程等待时间超过了 n 毫秒，或调用 obj.notify(), obj.notifyAll(), t.interrupt() 时 竞争锁成功，t 线程从 TIMED_WAITING --&gt; RUNNABLE 竞争锁失败，t 线程从 TIMED_WAITING --&gt; BLOCKED</li><li>当前线程调用<code>join(long n)</code> 方法时，当前线程从 RUNNABLE --&gt; TIMED_WAITING 当前线程等待时间超过了 n 毫秒，或t 线程运行结束，或调用了当前线程的 interrupt() 时，当前线程从TIMED_WAITING --&gt; RUNNABLE</li><li>当前线程调用 Thread.sleep(long n), 当前线程从 RUNNABLE --&gt; TIMED_WAITING 当前线程等待时间超过了 n 毫秒，当前线程从 TIMED_WAITING --&gt; RUNNABLE</li><li>当前线程调用 LockSupport.parkNanos(long nanos) 或 LockSupport.parkUntil(long millis) 时， 当前线程从 RUNNABLE --&gt; TIMED_WAITING 调用 LockSupport.unpark(目标线程) 或调用了线程 的 interrupt(), 或是等待超时，会让目标线程从TIMED_WAITING--&gt; RUNNABLE</li></ul><h3 id="runnable-blocked" tabindex="-1"><a class="header-anchor" href="#runnable-blocked" aria-hidden="true">#</a> RUNNABLE &lt;--&gt; BLOCKED</h3><p>t 线程用 synchronized(obj) 获取了对象锁时如果竞争失败，从 RUNNABLE --&gt; BLOCKED 持 obj 锁线程的同步代码块执行完毕，会唤醒该对象上所有 BLOCKED 的线程重新竞争，如果其中 t 线程竞争 成功，从 BLOCKED --&gt; RUNNABLE ，其它失败的线程仍然 BLOCKED</p><h3 id="runnable-terminated" tabindex="-1"><a class="header-anchor" href="#runnable-terminated" aria-hidden="true">#</a> RUNNABLE &lt;--&gt; TERMINATED</h3><p>当前线程所有代码运行完毕，进入 TERMINATED</p><p>参考: https://www.baeldung.com/java-thread-lifecycle https://www.geeksforgeeks.org/lifecycle-and-states-of-a-thread-in-java/</p>',27),l=[r];function d(o,c){return a(),i("div",null,l)}const s=e(n,[["render",d],["__file","javaConcurrency.html.vue"]]);export{s as default};
