import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-nD1Z-e8V.js";const p={},e=t(`<p>以下是单样本 z 检验的示例代码，用于检验样本均值是否等于某已知总体均值。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> statsmodels<span class="token punctuation">.</span>stats<span class="token punctuation">.</span>weightstats <span class="token keyword">import</span> ztest
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

<span class="token comment"># 示例数据</span>
data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">102</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">97</span><span class="token punctuation">,</span> <span class="token number">103</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">104</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">95</span><span class="token punctuation">]</span>

<span class="token comment"># 原假设: 样本均值等于总体均值 100</span>
z_stat<span class="token punctuation">,</span> p_value <span class="token operator">=</span> ztest<span class="token punctuation">(</span>data<span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;z-statistic:&quot;</span><span class="token punctuation">,</span> z_stat<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;p-value:&quot;</span><span class="token punctuation">,</span> p_value<span class="token punctuation">)</span>

<span class="token keyword">if</span> p_value <span class="token operator">&lt;</span> <span class="token number">0.05</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;拒绝原假设，样本均值显著不同于总体均值&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;不能拒绝原假设，样本均值没有显著差异&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://www.51cto.com/article/802237.html</li></ol>`,4),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","3_3_1z检验_单样本.html.vue"]]);export{k as default};
