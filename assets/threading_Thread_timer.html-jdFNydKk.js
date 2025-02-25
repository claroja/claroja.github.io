import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-nD1Z-e8V.js";const e={},p=t(`<h1 id="threading-thread-timer" tabindex="-1"><a class="header-anchor" href="#threading-thread-timer" aria-hidden="true">#</a> threading&amp;Thread&amp;timer</h1><h2 id="threading" tabindex="-1"><a class="header-anchor" href="#threading" aria-hidden="true">#</a> Threading</h2><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>active_count()</td><td>当前活着的线程数量</td></tr><tr><td>enumerate()</td><td>当前活着的线程的列表</td></tr><tr><td>current_thread()</td><td>返回当前线程对象</td></tr><tr><td>get_native_id()</td><td>返回系统分配的线程id</td></tr><tr><td>main_thread()</td><td>返回主线程对象</td></tr><tr><td>TIMEOUT_MAX</td><td>Lock.acquire(), Condition.wait()等的最大等待时间</td></tr></tbody></table><h2 id="thread-objects" tabindex="-1"><a class="header-anchor" href="#thread-objects" aria-hidden="true">#</a> Thread Objects</h2><p><code>class threading.Thread(group=None, target=None, name=None, args=(), kwargs={}, *, daemon=None)</code></p><ol><li>通过想constructor中传入callable object活着overding run()方法</li><li>调用<code>start()</code>会invokes<code>run()</code>方法, 来激活thread object</li><li>当<code>start()</code>调用后, thread object就是<code>alive</code>状态, 使用<code>is_alive()</code>来查看.</li></ol><h3 id="构造方法" tabindex="-1"><a class="header-anchor" href="#构造方法" aria-hidden="true">#</a> 构造方法</h3><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>group</td><td>通常默认即可，作为日后扩展 ThreadGroup 类实现而保留。</td></tr><tr><td>target</td><td>callable object, 会被<code>run()</code>方法调用</td></tr><tr><td>name</td><td>thread的名称,默认使用<code>Thread-N</code>来代替</td></tr><tr><td>args</td><td>tuple类型, target对应的参数</td></tr><tr><td>kwargs</td><td>dict类型, target对应的参数</td></tr><tr><td>daemon</td><td></td></tr></tbody></table><ul><li>守护线程：守护线程在程序关闭时会突然关闭，可能会导致资源不能被正确释放的的问题，如：已经打开的文档等。</li><li>非守护线程：通常我们创建的线程默认就是非守护线程，Python 程序退出时，如果还有非守护线程在运行，程序会等待所有非守护线程运行完毕才会退出。</li></ul><h3 id="对象方法" tabindex="-1"><a class="header-anchor" href="#对象方法" aria-hidden="true">#</a> 对象方法</h3><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>start()</td><td>启动线程, 调用<code>run()</code>方法</td></tr><tr><td>run()</td><td>subclass重写, 不直接调用</td></tr><tr><td>join(timeout=None)</td><td>当前线程等待, 直到该被调用用<code>join()</code>的thread object terminates.</td></tr><tr><td>name</td><td>线程的名称</td></tr><tr><td>native_id</td><td>系统分配的threadid</td></tr><tr><td>is_alive()</td><td>是否在运行</td></tr><tr><td>daemon</td><td>设置是否是守护线程, 必须在<code>start()</code>方法前使用, 默认是继承current thread的值</td></tr></tbody></table><h3 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h3><h4 id="_1-线程共享全局变量" tabindex="-1"><a class="header-anchor" href="#_1-线程共享全局变量" aria-hidden="true">#</a> 1. 线程共享全局变量</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> threading <span class="token keyword">import</span> Thread
<span class="token keyword">import</span> time
 
g_num <span class="token operator">=</span> <span class="token number">100</span>
 
<span class="token keyword">def</span> <span class="token function">work1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> g_num
    g_num <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;work1, g_num:</span><span class="token interpolation"><span class="token punctuation">{</span>g_num<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
 
 
<span class="token keyword">def</span> <span class="token function">work2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> g_num
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;work2, g_num:</span><span class="token interpolation"><span class="token punctuation">{</span>g_num<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
 
 
t1 <span class="token operator">=</span> Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>work1<span class="token punctuation">)</span>
t1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># work1, g_num:101</span>
 
time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">#保证t1线程中的事情做完</span>
 
t2 <span class="token operator">=</span> Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>work2<span class="token punctuation">)</span>
t2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># work2, g_num:101</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-线程传参" tabindex="-1"><a class="header-anchor" href="#_2-线程传参" aria-hidden="true">#</a> 2.线程传参</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> threading <span class="token keyword">import</span> Thread
<span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;子进程&quot;</span><span class="token punctuation">,</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    t <span class="token operator">=</span> Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>func<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;wang&#39;</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">,</span>kwargs<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    t<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-获得线程程执行结果" tabindex="-1"><a class="header-anchor" href="#_3-获得线程程执行结果" aria-hidden="true">#</a> 3.获得线程程执行结果</h4><ol><li>手动<code>Thread</code>创建子线程无法获得执行的结果, 使用<code>ThreadPoolExecutor</code>可以</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> concurrent<span class="token punctuation">.</span>futures <span class="token keyword">import</span> ThreadPoolExecutor

<span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> p<span class="token operator">*</span>p

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    r_lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    tp <span class="token operator">=</span> ThreadPoolExecutor<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        ret <span class="token operator">=</span> tp<span class="token punctuation">.</span>submit<span class="token punctuation">(</span>func<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        r_lst<span class="token punctuation">.</span>append<span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
    tp<span class="token punctuation">.</span>shutdown<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 阻塞，就有线程池完成任务才继续向下执行</span>
    <span class="token punctuation">[</span><span class="token keyword">print</span><span class="token punctuation">(</span>ret<span class="token punctuation">.</span>result<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">for</span> ret <span class="token keyword">in</span> r_lst<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>不通过return获得子进程返回结果，而是通过更改共享变量</li></ol><h4 id="_4-线程阻塞" tabindex="-1"><a class="header-anchor" href="#_4-线程阻塞" aria-hidden="true">#</a> 4.线程阻塞</h4><p>调用线程实例<code>join()</code>方法, 让当前线程(主线程)等待被调用<code>join()</code>方法的线程的结束</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> threading <span class="token keyword">import</span> Thread
<span class="token keyword">import</span> time
<span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;子线程结束&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    p <span class="token operator">=</span> Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>func<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;wang&#39;</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># p.join() #子线程加上join后，主线程会阻塞直到该子线程结束</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;主线程结束&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-父子线程关系-daemon" tabindex="-1"><a class="header-anchor" href="#_5-父子线程关系-daemon" aria-hidden="true">#</a> 5.父子线程关系-daemon</h4><p>由于<code>daemon=true</code>, 父线程结束后，子线程立刻结束，所以没有打印子线程结束</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">from</span> threading <span class="token keyword">import</span> Thread

<span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;子线程结束&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    t <span class="token operator">=</span> Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>func<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;xiaobai&#39;</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    t<span class="token punctuation">.</span>daemon <span class="token operator">=</span> <span class="token boolean">True</span>
    t<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;主线程结束&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-创建多个线程" tabindex="-1"><a class="header-anchor" href="#_6-创建多个线程" aria-hidden="true">#</a> 6.创建多个线程</h4><ol><li>手工循环创建 用列表保存每个子线程对象, 当然子线程也可以使用join来让主进程等待</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>使用线程池 首先，创建进程需要消耗时间，销毁进程（空间，变量，文件信息等等的内容）也需要消耗时间。 定义一个池子，在里面放上固定数量的进程，有需求来了，就拿一个池中的进程来处理任务，等到处理完毕，进程并不关闭，而是将进程再放回进程池中继续等待任务。 不会增加操作系统的调度难度，还节省了开闭进程的时间，也一定程度上能够实现并发效果。</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> concurrent<span class="token punctuation">.</span>futures <span class="token keyword">import</span> ThreadPoolExecutor

<span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> p<span class="token operator">*</span>p

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    r_lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    tp <span class="token operator">=</span> ThreadPoolExecutor<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        ret <span class="token operator">=</span> tp<span class="token punctuation">.</span>submit<span class="token punctuation">(</span>func<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        r_lst<span class="token punctuation">.</span>append<span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
    tp<span class="token punctuation">.</span>shutdown<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 阻塞，就有线程池完成任务才继续向下执行</span>
    <span class="token punctuation">[</span><span class="token keyword">print</span><span class="token punctuation">(</span>ret<span class="token punctuation">.</span>result<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">for</span> ret <span class="token keyword">in</span> r_lst<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="timer-objects" tabindex="-1"><a class="header-anchor" href="#timer-objects" aria-hidden="true">#</a> Timer Objects</h2><p>可以设置一定时间, 然后执行线程.</p><h3 id="构造方法-1" tabindex="-1"><a class="header-anchor" href="#构造方法-1" aria-hidden="true">#</a> 构造方法</h3><p><code>class threading.Timer(interval, function, args=None, kwargs=None)</code></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>interval</td><td>间隔是时间</td></tr></tbody></table><h3 id="对象方法-1" tabindex="-1"><a class="header-anchor" href="#对象方法-1" aria-hidden="true">#</a> 对象方法</h3><p>继承了thread的方法, 只增加了<code>cancel()</code>方法</p><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>cancel()</td><td>在线程执行前, 取消</td></tr></tbody></table><h2 id="with-statement" tabindex="-1"><a class="header-anchor" href="#with-statement" aria-hidden="true">#</a> with statement</h2><p>Lock, RLock, Condition, Semaphore对象都有<code>acquire()</code> 和 <code>release()</code>, 所以可以使用with语句来管理.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">with</span> some_lock<span class="token punctuation">:</span>
    <span class="token comment"># do something...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>等价于</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>some_lock<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token comment"># do something...</span>
<span class="token keyword">finally</span><span class="token punctuation">:</span>
    some_lock<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,44),o=[p];function c(i,l){return s(),a("div",null,o)}const u=n(e,[["render",c],["__file","threading_Thread_timer.html.vue"]]);export{u as default};
