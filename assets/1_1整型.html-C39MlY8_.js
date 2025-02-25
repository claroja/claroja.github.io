import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as s,a}from"./app-nD1Z-e8V.js";const e={},o=a(`<h2 id="整形" tabindex="-1"><a class="header-anchor" href="#整形" aria-hidden="true">#</a> 整形</h2><table><thead><tr><th>Name</th><th>Description</th><th>Size*</th><th>Range*signed:</th><th>Range*unsigned:</th></tr></thead><tbody><tr><td>short</td><td>Short Integer.</td><td>2bytes</td><td>-32768 to 32767</td><td>0 to 65535</td></tr><tr><td>int</td><td>Integer.</td><td>4bytes</td><td>-2147483648 to 2147483647</td><td>0 to 4294967295</td></tr><tr><td>long</td><td>Long integer.</td><td>Windows为4字节，Linux为4字节(32位)，8字节(64位)</td><td>-2147483648 to 2147483647</td><td>0 to 4294967295</td></tr><tr><td>long long</td><td>Long Long</td><td>8bytes</td><td></td><td></td></tr></tbody></table><ol><li>默认根据数字大小选择相应的类型，如果一个数太大无法用int表示，也会被当成long类型处理</li><li>long类型以l或者L结尾，如123445L,这个使用场景是<code>#define</code>声明时,让看代码的人一目了然.</li><li>无符号常量用u或者U来表示，比如ul表示unsigned long类型</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">short</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> d <span class="token operator">=</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\t%d\\t%d\\t%d\\t\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字面值" tabindex="-1"><a class="header-anchor" href="#字面值" aria-hidden="true">#</a> 字面值</h2><table><thead><tr><th>整型常量</th><th>所需类型</th></tr></thead><tbody><tr><td>10</td><td>代表int类型</td></tr><tr><td>10l, 10L</td><td>代表long类型</td></tr><tr><td>10ll, 10LL</td><td>代表long long类型</td></tr><tr><td>10u, 10U</td><td>代表unsigned int类型</td></tr><tr><td>10ul, 10UL</td><td>代表unsigned long类型</td></tr><tr><td>10ull, 10ULL</td><td>代表unsigned long long类型</td></tr></tbody></table>`,6),d=[o];function p(c,l){return t(),s("div",null,d)}const u=n(e,[["render",p],["__file","1_1整型.html.vue"]]);export{u as default};
