import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-qxiCM96p.js";const p={},e=t(`<h1 id="super" tabindex="-1"><a class="header-anchor" href="#super" aria-hidden="true">#</a> super</h1><p>语法：<code>super(type[, object-or-type])</code></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>type</td><td>类名</td></tr><tr><td>object-or-type</td><td>self(实例对象)或cls(类对象)</td></tr></tbody></table><p>主要使用场景有两种： 1.对象 2.类 在<code>python3</code>中可以简写成<code>super()</code>，而不必输入参数。</p><h2 id="对象中的使用" tabindex="-1"><a class="header-anchor" href="#对象中的使用" aria-hidden="true">#</a> 对象中的使用</h2><p><code>super(类名,self)</code>或<code>super()</code>返回父类实例</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;funA&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;funB&quot;</span><span class="token punctuation">)</span>

test <span class="token operator">=</span> B<span class="token punctuation">(</span><span class="token punctuation">)</span> 
test<span class="token punctuation">.</span>func<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment"># funB </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;funA&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># print(&quot;funB&quot;)</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span>B<span class="token punctuation">,</span>self<span class="token punctuation">)</span><span class="token punctuation">.</span>func<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># super() 返回父类A,然后调用A的func方法.(B,self)在python3中是默认值,不需要填写.B是指本类名,不能用cls代替,self是本类实例化的对象</span>
        <span class="token comment"># super(B,self).func() # 与super(B,self).func()等价</span>
test <span class="token operator">=</span> B<span class="token punctuation">(</span><span class="token punctuation">)</span>
test<span class="token punctuation">.</span>func<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># funA</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-类中使用" tabindex="-1"><a class="header-anchor" href="#_2-2-类中使用" aria-hidden="true">#</a> 2.2.类中使用</h3><p>super(类名,cls) 注意这里第二个参数，不是<code>self</code>而是<code>cls</code>，这里是调用的类实例。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>无论在对象中使用<code>super(类名,self)</code>还是在类中使用<code>super(类名,cls)</code>，在python3中，都可以简写为<code>super()</code></p><p>super的原理:是遍历<code>__mro__</code>列表 <code>mro</code>列表遵循: 1)子类永远在父类之前 2)多个父类,根据在列表中的位置检查,选择第一个父类</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code> <span class="token keyword">def</span> <span class="token function">super</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> inst<span class="token punctuation">)</span><span class="token punctuation">:</span>
    mro <span class="token operator">=</span> inst<span class="token punctuation">.</span>__class__<span class="token punctuation">.</span>mro<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> mro<span class="token punctuation">[</span>mro<span class="token punctuation">.</span>index<span class="token punctuation">(</span>cls<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如下菱形继承:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Base</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;enter Base&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;leave Base&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">(</span>Base<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;enter A&quot;</span><span class="token punctuation">)</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;leave A&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">(</span>Base<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;enter B&quot;</span><span class="token punctuation">)</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span>B<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;leave B&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">C</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span> B<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;enter C&quot;</span><span class="token punctuation">)</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span>C<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;leave C&quot;</span><span class="token punctuation">)</span>

c <span class="token operator">=</span> C<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">#enter C</span>
<span class="token comment">#enter A</span>
<span class="token comment">#enter B  # 如果是父类的话,这里由A就应该跳到Base,而并没有</span>
<span class="token comment">#enter Base</span>
<span class="token comment">#leave Base</span>
<span class="token comment">#leave B</span>
<span class="token comment">#leave A</span>
<span class="token comment">#leave C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","super.html.vue"]]);export{k as default};
