import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-qxiCM96p.js";const p={},t=e(`<h1 id="generator" tabindex="-1"><a class="header-anchor" href="#generator" aria-hidden="true">#</a> generator</h1><p>1.使用列表占用内存大</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">fab</span><span class="token punctuation">(</span><span class="token builtin">max</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    L <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    n<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span>
    <span class="token keyword">while</span> n <span class="token operator">&lt;</span> <span class="token builtin">max</span><span class="token punctuation">:</span>
        L<span class="token punctuation">.</span>append<span class="token punctuation">(</span>b<span class="token punctuation">)</span>
        a<span class="token punctuation">,</span> b <span class="token operator">=</span> b<span class="token punctuation">,</span> a <span class="token operator">+</span> b
        n <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">return</span> L
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.使用迭代器减少内存占用</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Fab</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token builtin">max</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span><span class="token builtin">max</span> <span class="token operator">=</span> <span class="token builtin">max</span>
        self<span class="token punctuation">.</span>n<span class="token punctuation">,</span> self<span class="token punctuation">.</span>a<span class="token punctuation">,</span> self<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span>

    <span class="token keyword">def</span> <span class="token function">__iter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self

    <span class="token keyword">def</span> <span class="token function">__next__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>n <span class="token operator">&gt;</span> self<span class="token punctuation">.</span><span class="token builtin">max</span><span class="token punctuation">:</span>
            <span class="token keyword">raise</span> StopIteration
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            r <span class="token operator">=</span> self<span class="token punctuation">.</span>b
            self<span class="token punctuation">.</span>a<span class="token punctuation">,</span> self<span class="token punctuation">.</span>b <span class="token operator">=</span> self<span class="token punctuation">.</span>b<span class="token punctuation">,</span> self<span class="token punctuation">.</span>a <span class="token operator">+</span> self<span class="token punctuation">.</span>b
            self<span class="token punctuation">.</span>n <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">return</span> r

<span class="token keyword">for</span> i <span class="token keyword">in</span> Fab<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.使用yield生成器简化迭代器定义</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">fab</span><span class="token punctuation">(</span><span class="token builtin">max</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    n<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span>
    <span class="token keyword">while</span> n <span class="token operator">&lt;</span> <span class="token builtin">max</span><span class="token punctuation">:</span>
        <span class="token keyword">yield</span> b
        a<span class="token punctuation">,</span> b <span class="token operator">=</span> b<span class="token punctuation">,</span> a <span class="token operator">+</span> b
        n <span class="token operator">+=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>yield 会把一个函数变为一个 generator；即带有 yield 的函数不再是一个普通的函数，Python 解释起会将其视为 generator，调用 fab(5) 不会执行 fab()，而是返回一个 iterable object。</p><p>参考： https://www.jianshu.com/p/1e909ef808b9</p>`,9),o=[t];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","generator.html.vue"]]);export{k as default};
