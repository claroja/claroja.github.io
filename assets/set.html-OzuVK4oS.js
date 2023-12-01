import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e}from"./app-qxiCM96p.js";const t={},i=e(`<h1 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> set</h1><p>python_set</p><h2 id="operation" tabindex="-1"><a class="header-anchor" href="#operation" aria-hidden="true">#</a> operation</h2><figure><img src="http://res.cloudinary.com/dyd911kmh/image/upload/f_auto,q_auto:best/v1526998740/15_union_intersection_difference_symmetric.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>dataScientist <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;Python&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;R&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;SQL&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Git&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tableau&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;SAS&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
dataEngineer <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;Python&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Java&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Scala&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Git&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;SQL&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Hadoop&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="union" tabindex="-1"><a class="header-anchor" href="#union" aria-hidden="true">#</a> union</h3><p>A union, denoted dataScientist <code>∪</code> dataEngineer, is the set of all values that are values of dataScientist, or dataEngineer, or both.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## set built-in function union</span>
dataScientist<span class="token punctuation">.</span>union<span class="token punctuation">(</span>dataEngineer<span class="token punctuation">)</span>
<span class="token comment">## Equivalent Result</span>
dataScientist <span class="token operator">|</span> dataEngineer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="intersection" tabindex="-1"><a class="header-anchor" href="#intersection" aria-hidden="true">#</a> intersection</h3><p>An intersection of two sets dataScientist and dataEngineer, denoted dataScientist ∩ dataEngineer, is the set of all values that are values of both dataScientist and dataEngineer.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## Intersection operation</span>
dataScientist<span class="token punctuation">.</span>intersection<span class="token punctuation">(</span>dataEngineer<span class="token punctuation">)</span>

<span class="token comment">## Equivalent Result</span>
dataScientist <span class="token operator">&amp;</span> dataEngineer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="difference" tabindex="-1"><a class="header-anchor" href="#difference" aria-hidden="true">#</a> difference</h3><p>A difference of two sets dataScientist and dataEngineer, denoted dataScientist \\ dataEngineer, is the set of all values of dataScientist that are not values of dataEngineer.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## Difference Operation</span>
dataScientist<span class="token punctuation">.</span>difference<span class="token punctuation">(</span>dataEngineer<span class="token punctuation">)</span>

<span class="token comment">## Equivalent Result</span>
dataScientist <span class="token operator">-</span> dataEngineer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="symmetric-difference" tabindex="-1"><a class="header-anchor" href="#symmetric-difference" aria-hidden="true">#</a> symmetric_difference</h3><p>A symmetric difference of two sets dataScientist and dataEngineer, denoted dataScientist △ dataEngineer, is the set of all values that are values of exactly one of two sets, but not both.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## Symmetric Difference Operation</span>
dataScientist<span class="token punctuation">.</span>symmetric_difference<span class="token punctuation">(</span>dataEngineer<span class="token punctuation">)</span>

<span class="token comment">## Equivalent Result</span>
dataScientist <span class="token operator">^</span> dataEngineer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考： https://www.datacamp.com/tutorial/sets-in-python</p>`,18),c=[i];function o(p,d){return a(),s("div",null,c)}const u=n(t,[["render",o],["__file","set.html.vue"]]);export{u as default};
