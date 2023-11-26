import{_}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,e as a}from"./app-XqA98pG8.js";const t={},e=a(`<h1 id="dir" tabindex="-1"><a class="header-anchor" href="#dir" aria-hidden="true">#</a> <strong>dir</strong></h1><p>python的实例和类都有<code>__dir__()</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    bar <span class="token operator">=</span> <span class="token string">&#39;spam&#39;</span>

Foo<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__dict__ <span class="token comment"># {}</span>
Foo<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__dir__<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># [&#39;__module__&#39;, &#39;bar&#39;, &#39;__dict__&#39;, &#39;__weakref__&#39;, &#39;__doc__&#39;, &#39;__repr__&#39;, &#39;__hash__&#39;, &#39;__str__&#39;, &#39;__getattribute__&#39;, &#39;__setattr__&#39;, &#39;__delattr__&#39;, &#39;__lt__&#39;, &#39;__le__&#39;, &#39;__eq__&#39;, &#39;__ne__&#39;, &#39;__gt__&#39;, &#39;__ge__&#39;, &#39;__init__&#39;, &#39;__new__&#39;, &#39;__reduce_ex__&#39;, &#39;__reduce__&#39;, &#39;__subclasshook__&#39;, &#39;__init_subclass__&#39;, &#39;__format__&#39;, &#39;__sizeof__&#39;, &#39;__dir__&#39;, &#39;__class__&#39;]</span>
Foo<span class="token punctuation">.</span>__dict__<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># [(&#39;__dict__&#39;, &lt;attribute &#39;__dict__&#39; of &#39;Foo&#39; objects&gt;), (&#39;__weakref__&#39;, &lt;attribute &#39;__weakref__&#39; of &#39;Foo&#39; objects&gt;), (&#39;__module__&#39;, &#39;__main__&#39;), (&#39;bar&#39;, &#39;spam&#39;), (&#39;__doc__&#39;, None)]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>__dir__</code>包含了类的<code>__dict__</code>的属性和实例的<code>__dict__</code>, 以及所有祖先类的属性 总结:</p><ul><li><code>__dir__</code>会搜集实例的<code>__dict__</code>(可能不存在), 还会搜集它的类, 它的祖先类, 然后返回所有可用的属性和方法</li><li><code>__dict__</code>只会返回实例的本地的属性和方法(当然类也本质也是一种实例)</li></ul>`,5),o=[e];function c(i,p){return n(),s("div",null,o)}const r=_(t,[["render",c],["__file","python___dir__.html.vue"]]);export{r as default};