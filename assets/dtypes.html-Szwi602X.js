import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o,c as d,b as n,d as s,e as i,a as t}from"./app-nD1Z-e8V.js";const c={},l=t('<h1 id="dtypes" tabindex="-1"><a class="header-anchor" href="#dtypes" aria-hidden="true">#</a> dtypes</h1><p>pandas的数据类型:</p><table><thead><tr><th>pandas类型</th><th>python类型</th><th>array类型</th><th>字符串别名</th></tr></thead><tbody><tr><td>pd.Int<code>XX</code>Dtype</td><td>int</td><td>arrays.IntegerArray</td><td>&#39;Int8&#39;, &#39;Int16&#39;, &#39;Int32&#39;, &#39;Int64&#39;, &#39;UInt8&#39;, &#39;UInt16&#39;, &#39;UInt32&#39;, &#39;UInt64&#39;</td></tr><tr><td>pd.Float<code>XX</code>Dtype</td><td>float</td><td>arrays.FloatingArray</td><td>&#39;Float32&#39;, &#39;Float64&#39;</td></tr><tr><td>pd.StringDtype</td><td>str</td><td>arrays.StringArray</td><td>&#39;string&#39;</td></tr><tr><td>pd.BooleanDtype</td><td>bool</td><td>arrays.BooleanArray</td><td>&#39;boolean&#39;</td></tr><tr><td>pd.DatetimeTZDtype</td><td>none</td><td>arrays.DatetimeArray</td><td>datetime64[ns, tz]</td></tr><tr><td>Categorical</td><td></td><td>Categorical</td><td>&#39;category&#39;</td></tr></tbody></table>',3),r={href:"https://pandas.pydata.org/docs/user_guide/basics.html#dtypes",target:"_blank",rel:"noopener noreferrer"},u=t(`<p>✨object 类型可以存储任意的类型, 包含字符串.</p><p>举例:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string">&#39;int&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&#39;float&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1.0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&#39;string&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&#39;datetime&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>pd<span class="token punctuation">.</span>Timestamp<span class="token punctuation">(</span><span class="token string">&#39;20180310&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
df<span class="token punctuation">.</span>dtypes

<span class="token comment"># int                  int64</span>
<span class="token comment"># float              float64</span>
<span class="token comment"># string              object</span>
<span class="token comment"># datetime    datetime64[ns]</span>
<span class="token comment"># dtype: object</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>df<span class="token punctuation">[</span><span class="token string">&#39;string&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> df<span class="token punctuation">[</span><span class="token string">&#39;string&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>astype<span class="token punctuation">(</span><span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span>
df<span class="token punctuation">.</span>dtypes

<span class="token comment"># int                  int64</span>
<span class="token comment"># float              float64</span>
<span class="token comment"># string              string</span>
<span class="token comment"># datetime    datetime64[ns]</span>
<span class="token comment"># dtype: object</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://pandas.pydata.org/docs/user_guide/basics.html#dtypes</li></ol>`,6);function m(k,v){const a=p("ExternalLinkIcon");return o(),d("div",null,[l,n("p",null,[s("另外还有一些不常用的数据类型, "),n("a",r,[s("参考"),i(a)])]),u])}const y=e(c,[["render",m],["__file","dtypes.html.vue"]]);export{y as default};
