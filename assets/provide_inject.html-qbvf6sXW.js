import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-yeyEmHfz.js";const t={},p=e(`<h1 id="provide-inject" tabindex="-1"><a class="header-anchor" href="#provide-inject" aria-hidden="true">#</a> provide&amp;inject</h1><h2 id="vue3-cli" tabindex="-1"><a class="header-anchor" href="#vue3-cli" aria-hidden="true">#</a> vue3-cli</h2><ul><li>作用：实现祖孙组件间通信</li><li>套路：父组件有一个 <code>provide</code> 选项来提供数据，后代组件有一个 <code>inject</code> 选项来开始使用这些数据</li><li>具体写法：</li></ul><ol><li>祖组件中：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token operator">...</span><span class="token operator">...</span>
    <span class="token keyword">let</span> car <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;奔驰&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">price</span><span class="token operator">:</span><span class="token string">&#39;40万&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;car&#39;</span><span class="token punctuation">,</span>car<span class="token punctuation">)</span>
    <span class="token operator">...</span><span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>后代组件中：<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span>context</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token operator">...</span><span class="token operator">...</span>
    <span class="token keyword">const</span> car <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;car&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>car<span class="token punctuation">}</span>
<span class="token operator">...</span><span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,6),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","provide_inject.html.vue"]]);export{d as default};
