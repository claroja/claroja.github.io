import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as t,c as p,b as n,d as o,e as l,a as c}from"./app-nD1Z-e8V.js";const i={},r=c(`<h1 id="bind" tabindex="-1"><a class="header-anchor" href="#bind" aria-hidden="true">#</a> bind</h1><h2 id="绑定对象-this就指向了绑定的新对象" tabindex="-1"><a class="header-anchor" href="#绑定对象-this就指向了绑定的新对象" aria-hidden="true">#</a> 绑定对象, this就指向了绑定的新对象</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span><span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&quot;Doe&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fullName</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> member <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span><span class="token string">&quot;Hege&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&quot;Nilsen&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> fullName <span class="token operator">=</span> person<span class="token punctuation">.</span><span class="token function">fullName</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>member<span class="token punctuation">)</span> <span class="token comment">// 绑定member，这时方法内部的this指向了member，而不是person</span>

<span class="token function">fullName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//调用方法，结果是Hege Nilsen</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="绑定原函数参数-在bind过程中就指定好参数" tabindex="-1"><a class="header-anchor" href="#绑定原函数参数-在bind过程中就指定好参数" aria-hidden="true">#</a> 绑定原函数参数, 在bind过程中就指定好参数</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token string">&#39;param&#39;</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span><span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&quot;Doe&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fullName</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> member <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span><span class="token string">&quot;Hege&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&quot;Nilsen&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> fullName <span class="token operator">=</span> person<span class="token punctuation">.</span><span class="token function">fullName</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>member<span class="token punctuation">,</span>value<span class="token punctuation">)</span> <span class="token comment">// 绑定member，这时方法内部的this指向了member，而不是person</span>

<span class="token function">fullName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//调用方法，结果是Hege Nilsen param</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,6),u={href:"https://www.w3schools.com/js/js_function_bind.asp",target:"_blank",rel:"noopener noreferrer"};function d(k,m){const s=e("ExternalLinkIcon");return t(),p("div",null,[r,n("p",null,[n("a",u,[o("参考官网"),l(s)])])])}const h=a(i,[["render",d],["__file","bind.html.vue"]]);export{h as default};
