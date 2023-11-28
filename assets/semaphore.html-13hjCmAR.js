import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as p}from"./app-yeyEmHfz.js";const t={},e=p(`<h1 id="semaphore" tabindex="-1"><a class="header-anchor" href="#semaphore" aria-hidden="true">#</a> semaphore</h1><p>Semaphore信号量相比Lock锁，可以控制进入进程的数量 Lock一次只允许一个进程进入 Semaphore(n)则可以允许n个进程进入</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span> Process<span class="token punctuation">,</span>Lock<span class="token punctuation">,</span>Semaphore
<span class="token keyword">import</span> os<span class="token punctuation">,</span>time
<span class="token keyword">def</span> <span class="token function">work</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span>lock<span class="token punctuation">)</span><span class="token punctuation">:</span>
    lock<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s: %s is running&#39;</span> <span class="token operator">%</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span>os<span class="token punctuation">.</span>getpid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s:%s is done&#39;</span> <span class="token operator">%</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span>os<span class="token punctuation">.</span>getpid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    lock<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    lock<span class="token operator">=</span>Semaphore<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        p<span class="token operator">=</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>work<span class="token punctuation">,</span>args<span class="token operator">=</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>lock<span class="token punctuation">)</span><span class="token punctuation">)</span>
        p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(i,u){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","semaphore.html.vue"]]);export{k as default};
