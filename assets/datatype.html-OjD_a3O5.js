import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as n,e}from"./app-MTzDpLgJ.js";const l={},t=e(`<h1 id="datatype" tabindex="-1"><a class="header-anchor" href="#datatype" aria-hidden="true">#</a> datatype</h1><h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2><p><strong>建议不使用引号的写法</strong>shell之所以允许无冒号的字符串存在是应为在command中 的输入也是不需要引号的 比如 <code>ls ~/</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>name <span class="token operator">=</span> hello  //1.可以解析变量 <span class="token number">2</span>.不能出现空格.
name <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span>   //1.可以解析变量 <span class="token number">2</span>.可以出现转义的双引号
name <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>   //1.变量不会被解析 <span class="token number">2</span>.不能出现转义的双引号<span class="token punctuation">(</span><span class="token punctuation">\\</span>&quot;<span class="token punctuation">\\</span>&quot;<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以直接在不加引号的字符串中使用<code>\${变量名}</code> 写法 比如hello<code>\${变量名}</code></p><h2 id="没有数字类型" tabindex="-1"><a class="header-anchor" href="#没有数字类型" aria-hidden="true">#</a> 没有数字类型</h2><p>在Shell中所有的变量默认都是字符串型，不能直接进行运算</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token variable">$a</span>+<span class="token variable">$b</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1+2 如果需要数据运算需要使用<code>“$((运算式))”或“$[运算式]”</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span>$a<span class="token operator">+</span>$b<span class="token variable">))</span></span>
<span class="token builtin class-name">echo</span> $<span class="token punctuation">[</span><span class="token variable">$a</span>+<span class="token variable">$b</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2><p>bash中有数组定义,但是dash中没有,所以使用字符串定义 定义： 数组名=&quot;值1 值2 ... 值n&quot;</p><p>参考： https://www.linuxidc.com/Linux/2019-07/159455.htm</p>`,13),o=[t];function p(c,i){return s(),n("div",null,o)}const u=a(l,[["render",p],["__file","datatype.html.vue"]]);export{u as default};