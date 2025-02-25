import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-nD1Z-e8V.js";const e={},c=t(`<h1 id="getattribute" tabindex="-1"><a class="header-anchor" href="#getattribute" aria-hidden="true">#</a> getattribute</h1><p>当访问对象成员时, 触发, 无论成员是否存在. 作用: 在访问成员时, 对其做一些处理. <code>__getattribute__(self,attr)</code>中, 参数attr是属性的名称(注意, 不是属性对应的值)</p><p>下例中: 当访问<code>name</code>属性时，会自动调用<code>__getattribute__</code>方法，<code>name</code>属性也会被传入<code>__getattribute__</code>方法中，既上例中的<code>attr</code>参数。然后调用父类的<code>return object.__getattribute__(self,attr)</code>方法，经过一系列操作后，返回属性的值。 如果省去<code>return object.__getattribute__(self,attr)</code>则无法得到属性。因为父类的<code>__getattribute__</code>会最终调用<code>__getattr__</code>来返回相应的值。 通过类访问的类的属性不会通过<code>__getattribute__</code>方法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Tree</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">def</span> <span class="token function">__getattribute__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>attr<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;__getattribute__ 执行&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>attr<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token builtin">object</span><span class="token punctuation">.</span>__getattribute__<span class="token punctuation">(</span>self<span class="token punctuation">,</span>attr<span class="token punctuation">)</span>


aa <span class="token operator">=</span> Tree<span class="token punctuation">(</span><span class="token string">&quot;wang&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>aa<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

<span class="token comment"># 注意要单独执行文件(不要在python console中逐行输入), 才有以下输出</span>
<span class="token comment"># __getattribute__ 执行</span>
<span class="token comment"># name</span>
<span class="token comment"># wang</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意:</p><ol><li>注意避开无线循环(因为可以访问<code>__dict__</code>,<code>__dict___</code>又可以访问属性，安全的做法是使用父类的方法<code>super().__getattribute__</code></li></ol>`,6),o=[c];function p(i,l){return s(),a("div",null,o)}const r=n(e,[["render",p],["__file","getattribute.html.vue"]]);export{r as default};
