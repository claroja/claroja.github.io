import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-XqA98pG8.js";const t={},p=e(`<h1 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> javascript</h1><p>可以通过执行<code>javascript</code>代码来获得元素. 建议使用<code>querySelector</code>方法, 因为:</p><ol><li><p>选择器是通用的, 在<code>bs4</code>中也可以使用</p></li><li><p>选择器的书写比较简单, 比写<code>getElementByID</code>这些方法简便</p></li><li><p>通过<code>js</code>获得元素</p></li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>elem <span class="token operator">=</span> driver<span class="token punctuation">.</span>execute_script<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;return document.querySelector(&quot;p&quot;)&#39;</span></span><span class="token punctuation">)</span>
df_item <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_html<span class="token punctuation">(</span>elem<span class="token punctuation">.</span>get_attribute<span class="token punctuation">(</span><span class="token string">&#39;outerHTML&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>可以给<code>execute_script</code>添加参数, 表示已经获得的元素.</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## Stores the header element</span>
header <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>CSS_SELECTOR<span class="token punctuation">,</span> <span class="token string">&quot;h1&quot;</span><span class="token punctuation">)</span>
<span class="token comment">## Executing JavaScript to capture innerText of header element</span>
driver<span class="token punctuation">.</span>execute_script<span class="token punctuation">(</span><span class="token string">&#39;return arguments[0].innerText&#39;</span><span class="token punctuation">,</span> header<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","selenium_javascript.html.vue"]]);export{d as default};
