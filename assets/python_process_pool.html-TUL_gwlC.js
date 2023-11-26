import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as p}from"./app-XqA98pG8.js";const t={},e=p(`<h1 id="process-pool" tabindex="-1"><a class="header-anchor" href="#process-pool" aria-hidden="true">#</a> process_pool</h1><p>常规创建多个子进程的方式是通过循环, 但这种方式有个缺点是: 每次都要申请进程的资源, 比如内存空间</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> multiprocessing
<span class="token keyword">import</span> time
<span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span> Process

<span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
   <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;线程 %d执行&quot;</span> <span class="token operator">%</span> multiprocessing<span class="token punctuation">.</span>current_process<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>pid <span class="token punctuation">)</span>
   time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
   t_lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
   <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
       t <span class="token operator">=</span> Process<span class="token punctuation">(</span>target<span class="token operator">=</span>func<span class="token punctuation">)</span>
       t<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
       t_lst<span class="token punctuation">.</span>append<span class="token punctuation">(</span>t<span class="token punctuation">)</span>
   <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;父线程结束&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过线程池<code>multiprocessing.Pool</code>, 可以预先创建几个进程, 复用, 省去了反复创建的时间.</p><h3 id="apply与apply-async" tabindex="-1"><a class="header-anchor" href="#apply与apply-async" aria-hidden="true">#</a> apply与apply_async</h3><p>apply:同步, 立刻阻塞主进程, 每次从线程池取一个进程 apply_async: 异步, 不阻塞主进程, 每次从线程池取所有进程</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span> Pool
<span class="token keyword">import</span> multiprocessing
<span class="token keyword">import</span> time
<span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">:</span>
      <span class="token keyword">print</span><span class="token punctuation">(</span>multiprocessing<span class="token punctuation">.</span>current_process<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>pid <span class="token punctuation">,</span>p<span class="token punctuation">)</span>
      time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> __name__<span class="token operator">==</span><span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
   pool <span class="token operator">=</span> Pool<span class="token punctuation">(</span>processes<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
   <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
       pool<span class="token punctuation">.</span><span class="token builtin">apply</span><span class="token punctuation">(</span>test<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 同步, 每次从池子里取出一个进程, 执行结束后, 再取另一个进程, 不需要阻塞主进程.</span>
   <span class="token comment">#    pool.apply_async(test, args=(i,)) # 异步, 每次从池子里把可用进程全部取出</span>
   <span class="token comment"># pool.close() # apply_async时, join前必须先close(停止向池子中继续添加任务)</span>
   <span class="token comment"># pool.join() # apply_async时, 如果没有join则子进程会立刻结束</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="map-与-map-async" tabindex="-1"><a class="header-anchor" href="#map-与-map-async" aria-hidden="true">#</a> map 与 map_async</h3><p>map: 同步, 立刻阻塞主进程, 每次从线程池取所有进程(区别于apply, 每次只取一个进程) map_async: 异步, 不阻塞主进程, 每次从线程池取所有进程</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span> Pool
<span class="token keyword">import</span> time
<span class="token keyword">import</span> multiprocessing
<span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">:</span>
   <span class="token keyword">print</span><span class="token punctuation">(</span>multiprocessing<span class="token punctuation">.</span>current_process<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>pid<span class="token punctuation">,</span>i<span class="token punctuation">)</span>
   time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
   lists <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
   pool <span class="token operator">=</span> Pool<span class="token punctuation">(</span>processes<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
   <span class="token comment"># pool.map(test, lists)</span>
   pool<span class="token punctuation">.</span>map_async<span class="token punctuation">(</span>target<span class="token operator">=</span>test<span class="token punctuation">,</span> lists<span class="token punctuation">)</span>
   pool<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
   pool<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接受子进程的返回结果" tabindex="-1"><a class="header-anchor" href="#接受子进程的返回结果" aria-hidden="true">#</a> 接受子进程的返回结果</h3><h4 id="apply-async" tabindex="-1"><a class="header-anchor" href="#apply-async" aria-hidden="true">#</a> <code>apply_async</code></h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span> Pool
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span> Pool
<span class="token keyword">import</span> time
<span class="token keyword">import</span> multiprocessing
<span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">:</span>
   <span class="token keyword">print</span><span class="token punctuation">(</span>multiprocessing<span class="token punctuation">.</span>current_process<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>pid<span class="token punctuation">,</span>i<span class="token punctuation">)</span>
   time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
   <span class="token keyword">return</span> i<span class="token operator">*</span>i
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
   lists <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
   pool <span class="token operator">=</span> Pool<span class="token punctuation">(</span>processes<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
   res <span class="token operator">=</span> pool<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span>test<span class="token punctuation">,</span> lists<span class="token punctuation">)</span> <span class="token comment"># 列表对应位置</span>
   <span class="token keyword">print</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="回调函数" tabindex="-1"><a class="header-anchor" href="#回调函数" aria-hidden="true">#</a> 回调函数</h3><p>进程池中一个进程处理完任务之后，这进程可以调用一个函数去处理该进程返回的结果，这个函数就是回调函数。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span> Pool
<span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">:</span>
   <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;回调加工subp方法的返回结果:&quot;</span><span class="token operator">+</span><span class="token builtin">str</span><span class="token punctuation">(</span>info<span class="token operator">/</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">subp</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">:</span>
   <span class="token keyword">return</span> i <span class="token operator">*</span> i

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
   pool <span class="token operator">=</span> Pool<span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
       res <span class="token operator">=</span> pool<span class="token punctuation">.</span>apply_async<span class="token punctuation">(</span>subp<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token punctuation">)</span><span class="token punctuation">,</span> callback<span class="token operator">=</span>func<span class="token punctuation">)</span> <span class="token comment"># subp的返回值作为func的参数传递</span>
   pool<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
   pool<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","python_process_pool.html.vue"]]);export{k as default};
