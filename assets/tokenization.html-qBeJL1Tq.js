import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-yeyEmHfz.js";const e={},o=t(`<h1 id="tokenization" tabindex="-1"><a class="header-anchor" href="#tokenization" aria-hidden="true">#</a> tokenization</h1><p>将一句话分割成有语义的小片段token</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> spacy

nlp <span class="token operator">=</span> spacy<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token string">&quot;en_core_web_sm&quot;</span><span class="token punctuation">)</span>
doc <span class="token operator">=</span> nlp<span class="token punctuation">(</span><span class="token string">&quot;Apple is looking at buying U.K. startup for $1 billion&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> token <span class="token keyword">in</span> doc<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>token<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://spacy.io/usage/linguistic-features#tokenization</p>`,4),i=[o];function p(c,l){return s(),a("div",null,i)}const d=n(e,[["render",p],["__file","tokenization.html.vue"]]);export{d as default};
