import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-XqA98pG8.js";const e={},p=t(`<h1 id="item" tabindex="-1"><a class="header-anchor" href="#item" aria-hidden="true">#</a> item</h1><p>loss 取纯数值，会用到<code>loss.item()</code>, 返回的是python number类型. 此方法不需要考虑tensor是再GPU还是CPU, 也不需要考虑<code>requires_grad=True</code>而需要调用<code>detach()</code>, <code>item()</code>会自动处理这些.</p><p><code>item()</code>只适用于tensor只包含一个元素的时候(大多数时loss就只有一个值). 如果是多个值可以使用<code>tolist()</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> torch

x <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0.1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> requires_grad<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> device<span class="token operator">=</span><span class="token string">&#39;cuda&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>  <span class="token comment"># tensor([-0.4717], device=&#39;cuda:0&#39;, requires_grad=True)</span>

y <span class="token operator">=</span> x<span class="token punctuation">.</span>item<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>y<span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">## -0.4717346727848053 &lt;class &#39;float&#39;&gt;</span>

x <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0.1</span><span class="token punctuation">,</span><span class="token number">0.2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> requires_grad<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> device<span class="token operator">=</span><span class="token string">&#39;cuda&#39;</span><span class="token punctuation">)</span>
y <span class="token operator">=</span> x<span class="token punctuation">.</span>tolist<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>y<span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","tensor_item.html.vue"]]);export{d as default};
