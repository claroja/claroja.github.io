import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e as t}from"./app-MTzDpLgJ.js";const e={},p=t(`<h1 id="frame" tabindex="-1"><a class="header-anchor" href="#frame" aria-hidden="true">#</a> frame</h1><p>iframe主要用来展示来自不同域名的网站. selenium值关注最高等级的DOM, 所以我们需要先进入iframe, 才能操作其中的元素.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modal<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>buttonframe<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myframe<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://seleniumhq.github.io<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>Click here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一般写法" tabindex="-1"><a class="header-anchor" href="#一般写法" aria-hidden="true">#</a> 一般写法</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## Store iframe web element</span>
iframe <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>CSS_SELECTOR<span class="token punctuation">,</span> <span class="token string">&quot;#modal &gt; iframe&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## switch to selected iframe</span>
driver<span class="token punctuation">.</span>switch_to<span class="token punctuation">.</span>frame<span class="token punctuation">(</span>iframe<span class="token punctuation">)</span>

<span class="token comment">## Now click on button</span>
driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>TAG_NAME<span class="token punctuation">,</span> <span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用name或id" tabindex="-1"><a class="header-anchor" href="#使用name或id" aria-hidden="true">#</a> 使用name或ID</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## Switch frame by id</span>
driver<span class="token punctuation">.</span>switch_to<span class="token punctuation">.</span>frame<span class="token punctuation">(</span><span class="token string">&#39;buttonframe&#39;</span><span class="token punctuation">)</span>

<span class="token comment">## Now, Click on the button</span>
driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>TAG_NAME<span class="token punctuation">,</span> <span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用索引" tabindex="-1"><a class="header-anchor" href="#使用索引" aria-hidden="true">#</a> 使用索引</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## switching to second iframe based on index</span>
iframe <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_elements<span class="token punctuation">(</span>By<span class="token punctuation">.</span>TAG_NAME<span class="token punctuation">,</span><span class="token string">&#39;iframe&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>

<span class="token comment">## switch to selected iframe</span>
driver<span class="token punctuation">.</span>switch_to<span class="token punctuation">.</span>frame<span class="token punctuation">(</span>iframe<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="离开frame" tabindex="-1"><a class="header-anchor" href="#离开frame" aria-hidden="true">#</a> 离开frame</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## switch back to default content</span>
driver<span class="token punctuation">.</span>switch_to<span class="token punctuation">.</span>default_content<span class="token punctuation">(</span><span class="token punctuation">)</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://www.selenium.dev/documentation/webdriver/interactions/frames/</p>`,12),c=[p];function i(o,l){return a(),s("div",null,c)}const d=n(e,[["render",i],["__file","frame.html.vue"]]);export{d as default};