import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-qxiCM96p.js";const e={},p=t(`<h1 id="getattr" tabindex="-1"><a class="header-anchor" href="#getattr" aria-hidden="true">#</a> getattr</h1><p>当访问不存在的成员时, 触发.比<code>__getattribute__</code>的优先级低, 既如果定义了<code>__getattribute__</code>, 则不会触发<code>__getattr__</code></p><p>下例中, 当访问不存在的<code>age</code>的时候, 会触发<code>__getattr__</code>方法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

    <span class="token keyword">def</span> <span class="token function">__getattr__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;getting:{}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>

person <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token string">&quot;wang&quot;</span><span class="token punctuation">)</span>
person<span class="token punctuation">.</span>name  <span class="token comment"># &#39;wang&#39;</span>
person<span class="token punctuation">.</span>age  <span class="token comment"># getting:age</span>
<span class="token builtin">getattr</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># &#39;wang&#39;</span>
<span class="token builtin">getattr</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span> <span class="token comment"># getting:age</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","getattr.html.vue"]]);export{d as default};
