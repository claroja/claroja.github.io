import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as t}from"./app-j3zK2x6_.js";const e={},p=t(`<h1 id="sub" tabindex="-1"><a class="header-anchor" href="#sub" aria-hidden="true">#</a> sub</h1><p>Python 的 re 模块提供了re.sub用于替换字符串中的匹配项，sub是substitute表示替换。 语法: <code>sub(pattern, repl, string, count=0, flags=0)</code> 参数:</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>pattern</td><td>该参数表示正则中的模式字符串；</td></tr><tr><td>repl</td><td>如果是字符串，则处理其中的反斜杠转义。如果是match对象，并且必须返回要使用的替换字符串</td></tr><tr><td>string</td><td>该参数表示要被处理（查找替换）的原始字符串；</td></tr><tr><td>count</td><td>可选参数，表示是要替换的最大次数，而且必须是非负整数，该参数默认为0，即所有的匹配都会被替换；</td></tr><tr><td>flags</td><td>可选参数，表示编译时用的匹配模式（如忽略大小写、多行模式等），数字形式，默认为0。</td></tr></tbody></table><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><ol><li>普通替换</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> re
<span class="token comment">#替换s中的hello为123,</span>
s <span class="token operator">=</span> <span class="token string">&quot;hello,world!!!&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">r&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">r&quot;123&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#123,world!!!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>分组替换</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> re
<span class="token comment">## 替换时间格式 01/11/2021 替换成 2021/01/11</span>
s <span class="token operator">=</span> <span class="token string">&quot;today is 09-12-2021&quot;</span>
day <span class="token operator">=</span> re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">r&#39;(\\d{2})-(\\d{2})-(\\d{4})&#39;</span><span class="token punctuation">,</span> <span class="token string">r&#39;\\3-\\2-\\1&#39;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>day<span class="token punctuation">)</span> <span class="token comment"># today is 2021-12-09</span>
<span class="token comment">## 也可以用g&lt;3&gt;-g&lt;2&gt;-g&lt;1&gt;</span>
day2 <span class="token operator">=</span> re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">r&#39;(\\d{2})-(\\d{2})-(\\d{4})&#39;</span><span class="token punctuation">,</span> <span class="token string">r&#39;g&lt;3&gt;-g&lt;2&gt;-g&lt;1&gt;&#39;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>day<span class="token punctuation">)</span> <span class="token comment"># today is 2021-12-09</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>repl传函数</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> re

<span class="token keyword">def</span> <span class="token function">fun</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> m<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&#39; &#39;</span><span class="token operator">+</span>m<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">#首字符大写</span>
str1<span class="token operator">=</span><span class="token string">&#39;hello world ~~~~~~~~~&#39;</span>
str1<span class="token operator">=</span>re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">r&quot;(\\w+) (\\w+)&quot;</span><span class="token punctuation">,</span>fun<span class="token punctuation">,</span>str1<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span>
<span class="token comment">## Hello World ~~~~~~~~~</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>count替换次数</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> re

<span class="token comment">## 替换字符串中的空格为123，只替换一次</span>
s <span class="token operator">=</span> <span class="token string">&quot;We are happy&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">,</span> count<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">## We123are happy</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>subn方法使用</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 替换字符串中的空格为123</span>
s <span class="token operator">=</span> <span class="token string">&quot;We are happy&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>re<span class="token punctuation">.</span>subn<span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token comment">#(&#39;We123are123happy&#39;, 2)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://www.cnblogs.com/lvhuayan/p/15260375.html</p>`,15),o=[p];function l(c,i){return s(),a("div",null,o)}const d=n(e,[["render",l],["__file","regex_sub.html.vue"]]);export{d as default};