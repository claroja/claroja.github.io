import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,e as t}from"./app-XqA98pG8.js";const p={},e=t(`<h1 id="subclass" tabindex="-1"><a class="header-anchor" href="#subclass" aria-hidden="true">#</a> <strong>subclass</strong></h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">parent</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
<span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
<span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
<span class="token keyword">class</span> <span class="token class-name">C</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>parent<span class="token punctuation">.</span>__subclasses__<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># [&lt;class &#39;__main__.A&#39;&gt;, &lt;class &#39;__main__.B&#39;&gt;, &lt;class &#39;__main__.C&#39;&gt;]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">[</span>cls<span class="token punctuation">.</span>__name__ <span class="token keyword">for</span> cls <span class="token keyword">in</span> parent<span class="token punctuation">.</span>__subclasses__<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[e];function o(l,i){return n(),a("div",null,c)}const k=s(p,[["render",o],["__file","python___subclass__.html.vue"]]);export{k as default};
