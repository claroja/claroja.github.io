import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as p,c as o,a as n,b as s,d as c,e as i}from"./app-yeyEmHfz.js";const l={},u=i(`<h1 id="group" tabindex="-1"><a class="header-anchor" href="#group" aria-hidden="true">#</a> group</h1><h2 id="分组定义" tabindex="-1"><a class="header-anchor" href="#分组定义" aria-hidden="true">#</a> 分组定义</h2><p>分组是用圆括号“()”括起来的正则表达式，匹配出的内容就表示一个分组。</p><ol><li>序号分组<code>(exp)</code>: 把括号内的正则作为一个分组，系统自动分配组号，可以通过分组号引用该分组, 比如 <code>\\1</code>,<code>\\2</code>.</li><li>命名分组<code>(?P&lt;name&gt;exp)</code>: 定义一个命名分组，系统为该分组分配分组号，可以通过分组名或分组号引用该分组；</li><li>不捕获分组<code>(?:exp)</code> ：定义一个不捕获分组，该分组只在当前位置匹配文本，在该分组之后，无法引用该分组，因为该分组没有分组名，没有分组号，也不会占用分组编号；</li></ol><h2 id="分组引用" tabindex="-1"><a class="header-anchor" href="#分组引用" aria-hidden="true">#</a> 分组引用</h2><p>引用分组的目的是对重复出现的文本进行匹配，注意，不是出现重复的模式，而是出现重复的文本。由于分组有编号和名称，因此，可以通过名称和编号来引用前面已经出现的分组。</p><p>正则表达式中，可以通过分组名或分组号来引用：</p><ol><li><code>\\n</code>：使用分组的编号来引用分组，分组按照正则表达式中出现的顺序编号1、2、3、... <code>(\\w+)\\1</code>等价于<code>(\\w+)(\\w+)</code>, 也就是是<code>\\1</code>表示第一个分组<code>(\\w+)</code></li><li><code>(?P=name)</code>：引用名称为name的分组, <code>(?P&lt;word&gt;\\w+)(?P=word)</code>等价于<code>(\\w+)(\\w+)</code>, 也就是<code>(?P=word)</code>表示组名为<code>word</code>的<code>(?P&lt;word&gt;\\w+)</code></li></ol><h2 id="python引用分组结果" tabindex="-1"><a class="header-anchor" href="#python引用分组结果" aria-hidden="true">#</a> python引用分组结果</h2><p>在python中, 正则表达式匹配的结果, 是<code>re.Match</code>对象, 需要通过<code>group()</code>方法来获取最终的字符串.</p><h3 id="group-1" tabindex="-1"><a class="header-anchor" href="#group-1" aria-hidden="true">#</a> group()</h3><p>获取序号分组的结果:</p><ul><li><code>group()</code>默认参数是<code>0</code>, 即<code>group(0)</code>就是匹配正则表达式整体结果</li><li><code>group(1)</code> 列出第一个括号匹配部分，<code>group(2)</code> 列出第二个括号匹配部分，<code>group(3)</code> 列出第三个括号匹配部分。</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> re
a <span class="token operator">=</span> <span class="token string">&quot;123abc456&quot;</span>
re<span class="token punctuation">.</span>search<span class="token punctuation">(</span><span class="token string">&quot;([0-9]*)([a-z]*)([0-9]*)&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>   <span class="token comment">#123abc456,返回整体</span>
re<span class="token punctuation">.</span>search<span class="token punctuation">(</span><span class="token string">&quot;([0-9]*)([a-z]*)([0-9]*)&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>   <span class="token comment">#123</span>
re<span class="token punctuation">.</span>search<span class="token punctuation">(</span><span class="token string">&quot;([0-9]*)([a-z]*)([0-9]*)&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>   <span class="token comment">#abc</span>
re<span class="token punctuation">.</span>search<span class="token punctuation">(</span><span class="token string">&quot;([0-9]*)([a-z]*)([0-9]*)&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>   <span class="token comment">#456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="groupdict" tabindex="-1"><a class="header-anchor" href="#groupdict" aria-hidden="true">#</a> groupdict()</h3><p>获取命名分组的结果</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>m <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">r&#39;(?P&lt;user&gt;\\w+)@(?P&lt;website&gt;\\w+)\\.(?P&lt;extension&gt;\\w+)&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;myname@hackerrank.com&#39;</span><span class="token punctuation">)</span>
m<span class="token punctuation">.</span>groupdict<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span><span class="token string">&#39;website&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;hackerrank&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;myname&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;extension&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;com&#39;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="groups" tabindex="-1"><a class="header-anchor" href="#groups" aria-hidden="true">#</a> groups()</h3><p>它返回一个包含所有匹配子群的元组。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>m <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">r&quot;(\\d+)\\.(\\d+)&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;24.1632&quot;</span><span class="token punctuation">)</span>
m<span class="token punctuation">.</span>groups<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## (&#39;24&#39;, &#39;1632&#39;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分组序号" tabindex="-1"><a class="header-anchor" href="#分组序号" aria-hidden="true">#</a> 分组序号</h2><p>在正则表达式中，分组编号是自动进行的。当使用圆括号表示分组时，从正则表达式的左边开始看，看到的第一个左括号 “(” 表示第一个分组，第二个 &quot;(&quot; 表示第二个分组，依次类推，需要注意的是，有一个隐含的全局分组（分组编号是0），就是整个正则表达式。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> re

<span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&#39;abcabcabcabcdedede&#39;</span>
result <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">&#39;((abc)+)((de)+)&#39;</span><span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># abcabcabcabc</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># abc</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># dedede</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># de</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><h3 id="有条件的筛选" tabindex="-1"><a class="header-anchor" href="#有条件的筛选" aria-hidden="true">#</a> 有条件的筛选</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 将整个字符串用字符串某个部分替换</span>
re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">r&#39;\\d\\d(\\d)\\d&#39;</span><span class="token punctuation">,</span> <span class="token string">r&#39;\\1&#39;</span> <span class="token punctuation">,</span><span class="token string">&#39;2131&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串对换位置" tabindex="-1"><a class="header-anchor" href="#字符串对换位置" aria-hidden="true">#</a> 字符串对换位置</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> re
<span class="token comment">## 替换时间格式 01/11/2021 替换成 2021/01/11</span>
s <span class="token operator">=</span> <span class="token string">&quot;today is 09-12-2021&quot;</span>
day <span class="token operator">=</span> re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">r&#39;(\\d{2})-(\\d{2})-(\\d{4})&#39;</span><span class="token punctuation">,</span> <span class="token string">r&#39;\\3-\\2-\\1&#39;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>day<span class="token punctuation">)</span> <span class="token comment"># today is 2021-12-09</span>

<span class="token comment">## 也可以用g&lt;3&gt;-g&lt;2&gt;-g&lt;1&gt;</span>
day2 <span class="token operator">=</span> re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">r&#39;(\\d{2})-(\\d{2})-(\\d{4})&#39;</span><span class="token punctuation">,</span> <span class="token string">r&#39;g&lt;3&gt;-g&lt;2&gt;-g&lt;1&gt;&#39;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>day<span class="token punctuation">)</span> <span class="token comment"># today is 2021-12-09</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),r={href:"https://blog.csdn.net/chr1991/article/details/80945455",target:"_blank",rel:"noopener noreferrer"};function d(k,m){const a=t("ExternalLinkIcon");return p(),o("div",null,[u,n("p",null,[s("参考: https://www.cnblogs.com/ljhdo/p/10678281.htm "),n("a",r,[s("本段参考"),c(a)])])])}const v=e(l,[["render",d],["__file","group.html.vue"]]);export{v as default};
