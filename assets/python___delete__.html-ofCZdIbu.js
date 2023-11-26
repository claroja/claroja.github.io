import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-XqA98pG8.js";const t={},o=e(`<h1 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> <strong>delete</strong></h1><p>当一个类中包含了魔术方法<code>__get__()</code>,<code>__set__()</code>,<code>__delete__()</code>任何一个时, 这个类就称为描述符类. 作用:</p><ol><li>对一个类中的某个成员进行一个详细的管理操作(获取,赋值,删除)</li><li>类似于代理的思想</li></ol><p>下例中, <code>PersionName</code>对应了<code>Person</code>实例的一个属性, 当我们访问<code>Person</code>的属性<code>name</code>时, 是调用了<code>PersonName</code>中的三个描述符方法.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">PersonName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    __name <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span>

    <span class="token keyword">def</span> <span class="token function">__get__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> instance<span class="token punctuation">,</span> owner<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>instance<span class="token punctuation">,</span>owner<span class="token punctuation">)</span>  <span class="token comment"># &lt;__main__.PersonName object&gt;, &lt;__main__.Person object, &lt;class &#39;__main__.Person&#39;&gt;, 第一个是PersonName类, 第二个Person实例, 第三个是Person类</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>__name

    <span class="token keyword">def</span> <span class="token function">__set__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> instance<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>instance<span class="token punctuation">,</span>value<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__delete__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> instance<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>instance<span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    name <span class="token operator">=</span> PersonName<span class="token punctuation">(</span><span class="token punctuation">)</span>


person <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),p=[o];function c(l,i){return s(),a("div",null,p)}const r=n(t,[["render",c],["__file","python___delete__.html.vue"]]);export{r as default};
