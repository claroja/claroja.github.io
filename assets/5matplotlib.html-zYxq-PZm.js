import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,a as t}from"./app-nD1Z-e8V.js";const p={},e=t(`<ol><li><p>通过axes_level方法, 返回的axes对象直接控制artist对象:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ax <span class="token operator">=</span> sns<span class="token punctuation">.</span>scatterplot<span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
ax<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span>
    xlabel<span class="token operator">=</span><span class="token string">&quot;The x label&quot;</span><span class="token punctuation">,</span>
    ylabel<span class="token operator">=</span><span class="token string">&quot;The y label&quot;</span><span class="token punctuation">,</span>
    title<span class="token operator">=</span><span class="token string">&quot;The title&quot;</span>
    xlim<span class="token operator">=</span><span class="token punctuation">(</span>xmin<span class="token punctuation">,</span> xmax<span class="token punctuation">)</span><span class="token punctuation">,</span>
    xticks<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    xticklabels<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>通过figure-level方法, 该方法不能直接调用axes对象, 而是返回一个FacetGrid对象, 其中包含了axes对象.</p><ol><li><p>如果是单个axes:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>g <span class="token operator">=</span> sns<span class="token punctuation">.</span>displot<span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
g<span class="token punctuation">.</span>ax<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如果是多个axes, 适用FacetGrid.axes(二维数组)来定位</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>g <span class="token operator">=</span> sns<span class="token punctuation">.</span>displot<span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span> col<span class="token operator">=</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
g<span class="token punctuation">.</span>axes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ol><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://seaborn.pydata.org/faq.html#how-can-i-can-i-change-something-about-the-figure</li><li>https://seaborn.pydata.org/faq.html#how-do-i-use-seaborn-with-matplotlib-s-object-oriented-interface</li></ol>`,3),o=[e];function c(l,i){return a(),s("div",null,o)}const d=n(p,[["render",c],["__file","5matplotlib.html.vue"]]);export{d as default};
