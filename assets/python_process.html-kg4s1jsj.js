import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-XqA98pG8.js";const p={},e=t(`<h1 id="process" tabindex="-1"><a class="header-anchor" href="#process" aria-hidden="true">#</a> process</h1><p>进程是资源分配的最⼩单位 进程间不能共享全局变量, 每个进程都会复制一份主进程的变量到自己的空间</p><h3 id="构造方法" tabindex="-1"><a class="header-anchor" href="#构造方法" aria-hidden="true">#</a> 构造方法</h3><p><code>class multiprocessing.Process(group=None, target=None, name=None, args=(), kwargs={}, *, daemon=None)</code><code>multiprocessing.Process</code> 和 <code>threading.Thread</code> 有相同的设计.</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>run()</td><td>不直接操作, 只重写</td></tr><tr><td>start()</td><td>启动进程</td></tr><tr><td>join([timeout])</td><td>阻塞主进程(调用进程), 等待被调用了<code>join()</code>的<code>process</code>执行玩完毕</td></tr><tr><td>name</td><td>进程名称</td></tr><tr><td>is_alive()</td><td>是否存活</td></tr><tr><td>daemon</td><td>在<code>start()</code>方法之前设置</td></tr><tr><td>pid</td><td>进程的id, 在开始前为<code>None</code></td></tr><tr><td>exitcode</td><td>进程退出时的code</td></tr><tr><td>authkey</td><td></td></tr><tr><td>sentinel</td><td></td></tr><tr><td>terminate()</td><td>使用<code>SIGTERM</code>结束进程, 其子进程不会结束, 而会成为orphaned</td></tr><tr><td>kill()</td><td>使用<code>SIGKILL</code>结束进程</td></tr><tr><td>close()</td><td>关闭进程,并释放所有资源</td></tr></tbody></table><h3 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h3><h4 id="_1-获得进程信息" tabindex="-1"><a class="header-anchor" href="#_1-获得进程信息" aria-hidden="true">#</a> 1.获得进程信息</h4><p>通过<code>multiprocessing.current_process()</code>来获得当前进程的信息, 比如id和name等</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">import</span> multiprocessing
<span class="token keyword">def</span> <span class="token function">work1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;running work1&quot;</span><span class="token punctuation">,</span> multiprocessing<span class="token punctuation">.</span>current_process<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>pid<span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span>
        
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    process_obj <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>work1<span class="token punctuation">)</span>
    process_obj<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;main end&quot;</span><span class="token punctuation">,</span>multiprocessing<span class="token punctuation">.</span>current_process<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>pid<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-传参" tabindex="-1"><a class="header-anchor" href="#_2-传参" aria-hidden="true">#</a> 2.传参</h4><p><code>Process([group [,target[,name[,args[,kwargs]]]]])</code></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>target</td><td>如果传递了函数的引⽤，这个⼦进程就执⾏这⾥(函数)的代码</td></tr><tr><td>args</td><td>给target指定的函数传递的参数，以元组的⽅式传递</td></tr><tr><td>kwargs</td><td>给target指定的函数传递命名参数</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span> Process

<span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;子进程&quot;</span><span class="token punctuation">,</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    p <span class="token operator">=</span> Process<span class="token punctuation">(</span>target<span class="token operator">=</span>func<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;wang&#39;</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">,</span>kwargs<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-获得子进程执行结果" tabindex="-1"><a class="header-anchor" href="#_2-获得子进程执行结果" aria-hidden="true">#</a> 2.获得子进程执行结果</h4><ol><li>手动process创建子进程无法获得执行的结果</li><li>使用pool可以</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span> Pool
<span class="token keyword">import</span> time
<span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">:</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> p<span class="token operator">*</span>p
<span class="token keyword">if</span> __name__<span class="token operator">==</span><span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    res_lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    pool <span class="token operator">=</span> Pool<span class="token punctuation">(</span>processes<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        res <span class="token operator">=</span> pool<span class="token punctuation">.</span>apply_async<span class="token punctuation">(</span>test<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        res_lst<span class="token punctuation">.</span>append<span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    pool<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
    pool<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">[</span><span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">for</span> result <span class="token keyword">in</span> res_lst<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-父子进程关系" tabindex="-1"><a class="header-anchor" href="#_3-父子进程关系" aria-hidden="true">#</a> 3.父子进程关系</h4><h5 id="默认-主进程结束-等待子进程" tabindex="-1"><a class="header-anchor" href="#默认-主进程结束-等待子进程" aria-hidden="true">#</a> 默认: 主进程结束, 等待子进程</h5><p>默认<code>Process.daemon=false</code>: 主进程结束后, 等待子进程结束. 子进程全部结束后, 主进程结束.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">import</span> multiprocessing
<span class="token keyword">def</span> <span class="token function">work1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;running work1&quot;</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    process_obj <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>work1<span class="token punctuation">,</span>args<span class="token punctuation">)</span>
    process_obj<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;main end&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="主进程结束-不等待子进程" tabindex="-1"><a class="header-anchor" href="#主进程结束-不等待子进程" aria-hidden="true">#</a> 主进程结束, 不等待子进程</h5><p>设置<code>Process.daemon=true</code>: 主进程结束后, 直接杀死子进程.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span> Process

<span class="token keyword">def</span> <span class="token function">work1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;running work1&quot;</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;work1 end&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    p <span class="token operator">=</span> Process<span class="token punctuation">(</span>target<span class="token operator">=</span>work1<span class="token punctuation">)</span>
    p<span class="token punctuation">.</span>daemon <span class="token operator">=</span> <span class="token boolean">True</span>
    p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;main end&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 主进程结束后,子进程立刻结束</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="主进程任意地方等待子进程" tabindex="-1"><a class="header-anchor" href="#主进程任意地方等待子进程" aria-hidden="true">#</a> 主进程任意地方等待子进程</h5><p><code>Process.deamon=false</code>, 子进程只有在主进程执行到最后一行时, 才能阻塞主进程. <code>Process.join()</code>, 可以让子进程在主进程的任何位置阻塞主进程</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span> Process

<span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;running work1&quot;</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;work1 end&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    p <span class="token operator">=</span> Process<span class="token punctuation">(</span>target<span class="token operator">=</span>func<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;xiaobai&#39;</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;父进程执行&quot;</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;父进程阻塞, 等待子进程&quot;</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;父进程结束&quot;</span><span class="token punctuation">)</span>
    <span class="token comment"># p.join() # 默认deamon=false, 相当于在最后加了join</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-创建多个线程" tabindex="-1"><a class="header-anchor" href="#_4-创建多个线程" aria-hidden="true">#</a> 4.创建多个线程</h4><ol><li>手工循环创建 用列表保存每个子线程对象 当然子线程也可以使用join来让主进程等待</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">from</span> threading <span class="token keyword">import</span> Thread

<span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;线程 %d执行&quot;</span> <span class="token operator">%</span> name <span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    t_lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        t <span class="token operator">=</span> Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>func<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        t<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
        t_lst<span class="token punctuation">.</span>append<span class="token punctuation">(</span>p<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;父线程结束&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>使用线程池 创建进程需要消耗时间，销毁进程（空间，变量，文件信息等等的内容）也需要消耗时间。 定义一个池子，在里面放上固定数量的进程，有需求来了，就拿一个池中的进程来处理任务，等到处理完毕，进程并不关闭，而是将进程再放回进程池中继续等待任务。 不会增加操作系统的调度难度，还节省了开闭进程的时间，也一定程度上能够实现并发效果。</li></ol><h4 id="_5-其他" tabindex="-1"><a class="header-anchor" href="#_5-其他" aria-hidden="true">#</a> 5.其他</h4><p>通过<code>os.getpid()</code>获得当前进程id 通过<code>os.getppid()</code>获得父进程id</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span> Process

<span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;我是子进程: %d；我的父进程是：%d&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>os<span class="token punctuation">.</span>getpid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>getppid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    p <span class="token operator">=</span> Process<span class="token punctuation">(</span>target<span class="token operator">=</span>func<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;xiaobai&#39;</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;我是父进程：%d&quot;</span> <span class="token operator">%</span> os<span class="token punctuation">.</span>getpid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),o=[e];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","python_process.html.vue"]]);export{d as default};