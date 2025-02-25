import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-nD1Z-e8V.js";const e={},p=t(`<h1 id="stdio" tabindex="-1"><a class="header-anchor" href="#stdio" aria-hidden="true">#</a> stdio</h1><h2 id="stdin" tabindex="-1"><a class="header-anchor" href="#stdin" aria-hidden="true">#</a> stdin</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys
a<span class="token operator">=</span>sys<span class="token punctuation">.</span>stdin<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 包含了换行符,一般都要使用strip</span>
b<span class="token operator">=</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 不包含换行符\`\\n\`</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token builtin">len</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 5 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="stdout" tabindex="-1"><a class="header-anchor" href="#stdout" aria-hidden="true">#</a> stdout</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token operator">*</span>objects<span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">&#39; &#39;</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&#39;\\n&#39;</span><span class="token punctuation">,</span> <span class="token builtin">file</span><span class="token operator">=</span>sys<span class="token punctuation">.</span>stdout<span class="token punctuation">,</span> flush<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>print</code>默认写入的是标准输出,既控制台</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>sys<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span> <span class="token operator">+</span> <span class="token string">&#39;\\n&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","stdio.html.vue"]]);export{r as default};
