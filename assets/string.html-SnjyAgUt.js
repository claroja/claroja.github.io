import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-nD1Z-e8V.js";const e={},p=t(`<h1 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> string</h1><h2 id="string-1" tabindex="-1"><a class="header-anchor" href="#string-1" aria-hidden="true">#</a> String</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;我是一个&quot;高富帅&quot;的程序员&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 字符串转义字符  都是用 \\ 开头 但是这些转义字符写道引号里面</span>
<span class="token keyword">var</span> str1 <span class="token operator">=</span> <span class="token string">&quot;我是一个&#39;高富帅&#39;的\\n程序员&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串拼贴注意" tabindex="-1"><a class="header-anchor" href="#字符串拼贴注意" aria-hidden="true">#</a> 字符串拼贴注意</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. 检测获取字符串的长度 length </span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;andy&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4</span>
<span class="token comment">// 2. 字符串的拼接 +  只要有字符串和其他类型相拼接 最终的结果是字符串类型</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;沙漠&#39;</span> <span class="token operator">+</span> <span class="token string">&#39;骆驼&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 字符串的 沙漠骆驼</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;aaa&#39;</span> <span class="token operator">+</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;aaa18&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;aaa&#39;</span> <span class="token operator">+</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// aaatrue</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">12</span> <span class="token operator">+</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 24</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;12&#39;</span> <span class="token operator">+</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;1212&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String</p>`,6),o=[p];function c(l,i){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","string.html.vue"]]);export{k as default};
