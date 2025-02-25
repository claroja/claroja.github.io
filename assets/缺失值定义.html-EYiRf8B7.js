import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as p}from"./app-nD1Z-e8V.js";const t={},e=p(`<h2 id="缺失值的定义" tabindex="-1"><a class="header-anchor" href="#缺失值的定义" aria-hidden="true">#</a> 缺失值的定义</h2><ol><li><p>pandas使用<code>NA</code>表示, <code>StringDtype</code>, <code>Int64Dtype</code>, <code>Float64Dtype</code>, <code>BooleanDtype</code>, <code>ArrowDtype</code>.</p><ol><li><p>当不指定类型时</p><ol><li><p>默认使用numpy的缺失值表示方法<code>NAN</code>, 对应数据类型是数据类型<code>float64</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
pd<span class="token punctuation">.</span>Series<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># [1.0, NaN], dtype: float64</span>
pd<span class="token punctuation">.</span>Series<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># [1.0, NaN], dtype: float64</span>

pd<span class="token punctuation">.</span>Series<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span><span class="token string">&quot;Int64&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># [1, NA], dtype: Int64</span>
pd<span class="token punctuation">.</span>Series<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span><span class="token string">&quot;Int64&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># [1, NA], dtype: int64</span>

pd<span class="token punctuation">.</span>Series<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span><span class="token string">&quot;Float64&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># [1.0, NA], dtype: Float64</span>
pd<span class="token punctuation">.</span>Series<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span><span class="token string">&quot;Float64&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># [1.0, NA], dtype: Float64</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>默认使用</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pd<span class="token punctuation">.</span>Series<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># [&#39;a&#39;, None], dtype: object</span>
pd<span class="token punctuation">.</span>Series<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span><span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token comment"># [&#39;a&#39;, NA], dtype: string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>pandas的<code>Int</code>和<code>Float</code>参数对应的都是大写开头, 小写开头, 会认为是numpy的数据类型. 而字符串<code>string</code>类型则是小写开头</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
pd<span class="token punctuation">.</span>Series<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span><span class="token string">&quot;float64&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># [1.0, NaN], dtype: float64</span>
pd<span class="token punctuation">.</span>Series<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span><span class="token string">&quot;int64&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># ??</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>pandas使用<code>NaT</code>表示<code>np.datetime64</code>, <code>np.timedelta64</code>和<code>PeriodDtype</code>的缺失值.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pd<span class="token punctuation">.</span>Series<span class="token punctuation">(</span><span class="token punctuation">[</span>pd<span class="token punctuation">.</span>Timestamp<span class="token punctuation">(</span><span class="token string">&#39;20180310&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># [2018-03-10, NaT], dtype: dtype: datetime64[ns]</span>
pd<span class="token punctuation">.</span>Series<span class="token punctuation">(</span><span class="token punctuation">[</span>pd<span class="token punctuation">.</span>Timestamp<span class="token punctuation">(</span><span class="token string">&#39;20180310&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span><span class="token string">&#39;datetime64[ns]&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># [2018-03-10, NaT], dtype: dtype: datetime64[ns]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="缺失值检测" tabindex="-1"><a class="header-anchor" href="#缺失值检测" aria-hidden="true">#</a> 缺失值检测</h2><p>使用<code>isna()</code>和<code>notna()</code>检测<code>NaT</code>和<code>NA</code>, 应为<code>NA</code>代替了numpy的<code>np.NaT</code>, 所以<code>np.NaT</code>也可以检测出来</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

pd<span class="token punctuation">.</span>Series<span class="token punctuation">(</span><span class="token punctuation">[</span>np<span class="token punctuation">.</span>NaN<span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">,</span> pd<span class="token punctuation">.</span>NA<span class="token punctuation">,</span> pd<span class="token punctuation">.</span>NaT<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>isna<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># [True, True, True, True]</span>
pd<span class="token punctuation">.</span>Series<span class="token punctuation">(</span><span class="token punctuation">[</span>np<span class="token punctuation">.</span>NaN<span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">,</span> pd<span class="token punctuation">.</span>NA<span class="token punctuation">,</span> pd<span class="token punctuation">.</span>NaT<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>isnull<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># [True, True, True, True]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>✨isnull是isna的别名</p>`,6),o=[e];function c(u,l){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","缺失值定义.html.vue"]]);export{k as default};
