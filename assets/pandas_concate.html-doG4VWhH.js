import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as t}from"./app-j3zK2x6_.js";const e={},p=t(`<h1 id="concate" tabindex="-1"><a class="header-anchor" href="#concate" aria-hidden="true">#</a> concate</h1><p>横向合并表优先考虑使用<code>Merge</code>, 备选使用<code>join</code>和<code>concat</code> 纵向合并表优先考虑使用<code>concat</code>, 备选使用<code>append</code></p><h2 id="方法的解释" tabindex="-1"><a class="header-anchor" href="#方法的解释" aria-hidden="true">#</a> 方法的解释</h2><ol><li><code>Concat</code> gives the flexibility to join based on the axis( all rows or all columns)</li><li><code>Append</code> is the specific case(axis=0, join=&#39;outer&#39;) of concat (being deprecated use concat)</li><li><code>Join</code> is based on the indexes (set by set_index) on how variable =[&#39;left&#39;,&#39;right&#39;,&#39;inner&#39;,&#39;couter&#39;]</li><li><code>Merge</code> is based on any particular column each of the two dataframes, this columns are variables on like &#39;left_on&#39;, &#39;right_on&#39;, &#39;on&#39;</li></ol><h2 id="数据准备" tabindex="-1"><a class="header-anchor" href="#数据准备" aria-hidden="true">#</a> 数据准备</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>df1 <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;A&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;A0&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;A1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;A2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;A3&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&quot;B&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;B0&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B3&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&quot;C&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;C0&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C3&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&quot;D&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;D0&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;D1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;D2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;D3&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    index<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

df2 <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;B&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;B2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B6&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B7&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&quot;D&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;D2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;D3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;D6&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;D7&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&quot;F&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;F2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;F3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;F6&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;F7&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    index<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="横向合并" tabindex="-1"><a class="header-anchor" href="#横向合并" aria-hidden="true">#</a> 横向合并</h2><table><thead><tr><th>Merge method</th><th>SQL Join Name</th><th>Description</th></tr></thead><tbody><tr><td>left</td><td>LEFT OUTER JOIN</td><td>Use keys from left frame only</td></tr><tr><td>right</td><td>RIGHT OUTER JOIN</td><td>Use keys from right frame only</td></tr><tr><td>outer</td><td>FULL OUTER JOIN</td><td>Use union of keys from both frames</td></tr><tr><td>inner</td><td>INNER JOIN</td><td>Use intersection of keys from both frames</td></tr><tr><td>cross</td><td>CROSS JOIN</td><td>Create the cartesian product of rows of both frames</td></tr></tbody></table><h3 id="left" tabindex="-1"><a class="header-anchor" href="#left" aria-hidden="true">#</a> left</h3><h4 id="按column" tabindex="-1"><a class="header-anchor" href="#按column" aria-hidden="true">#</a> 按column</h4><ol><li><code>B0,B1</code>在右表中查询不到, 所以<code>D_y,F</code>为<code>NaN</code></li><li><code>D_x</code>是左表的<code>D</code>列, <code>D_y</code>是右表的<code>D</code>列</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pd<span class="token punctuation">.</span>merge<span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> how<span class="token operator">=</span><span class="token string">&quot;left&quot;</span><span class="token punctuation">,</span> on<span class="token operator">=</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span>
<span class="token comment">##     A   B   C D_x  D_y    F</span>
<span class="token comment">## 0  A0  B0  C0  D0  NaN  NaN</span>
<span class="token comment">## 1  A1  B1  C1  D1  NaN  NaN</span>
<span class="token comment">## 2  A2  B2  C2  D2   D2   F2</span>
<span class="token comment">## 3  A3  B3  C3  D3   D3   F3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="按index" tabindex="-1"><a class="header-anchor" href="#按index" aria-hidden="true">#</a> 按index</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pd<span class="token punctuation">.</span>merge<span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> how<span class="token operator">=</span><span class="token string">&quot;left&quot;</span><span class="token punctuation">,</span>left_index<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> right_index<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
left<span class="token punctuation">.</span>join<span class="token punctuation">(</span>right<span class="token punctuation">,</span>how<span class="token operator">=</span><span class="token string">&quot;left&quot;</span><span class="token punctuation">,</span>lsuffix<span class="token operator">=</span><span class="token string">&#39;_x&#39;</span><span class="token punctuation">,</span> rsuffix<span class="token operator">=</span><span class="token string">&#39;_y&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 等价</span>
<span class="token comment">##     A B_x   C D_x  B_y  D_y    F</span>
<span class="token comment">## 0  A0  B0  C0  D0  NaN  NaN  NaN</span>
<span class="token comment">## 1  A1  B1  C1  D1  NaN  NaN  NaN</span>
<span class="token comment">## 2  A2  B2  C2  D2   B2   D2   F2</span>
<span class="token comment">## 3  A3  B3  C3  D3   B3   D3   F3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="right" tabindex="-1"><a class="header-anchor" href="#right" aria-hidden="true">#</a> right</h3><h4 id="按column-1" tabindex="-1"><a class="header-anchor" href="#按column-1" aria-hidden="true">#</a> 按column</h4><ol><li><code>B6,B7</code>在左表中查询不到, 所以<code>D_y,F</code>为<code>NaN</code></li><li><code>D_x</code>是左表的<code>D</code>列, <code>D_y</code>是右表的<code>D</code>列</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pd<span class="token punctuation">.</span>merge<span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> how<span class="token operator">=</span><span class="token string">&quot;right&quot;</span><span class="token punctuation">,</span> on<span class="token operator">=</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span>
<span class="token comment">##      A   B    C  D_x D_y   F</span>
<span class="token comment">## 0   A2  B2   C2   D2  D2  F2</span>
<span class="token comment">## 1   A3  B3   C3   D3  D3  F3</span>
<span class="token comment">## 2  NaN  B6  NaN  NaN  D6  F6</span>
<span class="token comment">## 3  NaN  B7  NaN  NaN  D7  F7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="按index-1" tabindex="-1"><a class="header-anchor" href="#按index-1" aria-hidden="true">#</a> 按index</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pd<span class="token punctuation">.</span>merge<span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> how<span class="token operator">=</span><span class="token string">&quot;right&quot;</span><span class="token punctuation">,</span>left_index<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> right_index<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
left<span class="token punctuation">.</span>join<span class="token punctuation">(</span>right<span class="token punctuation">,</span>how<span class="token operator">=</span><span class="token string">&quot;right&quot;</span><span class="token punctuation">,</span>lsuffix<span class="token operator">=</span><span class="token string">&#39;_x&#39;</span><span class="token punctuation">,</span> rsuffix<span class="token operator">=</span><span class="token string">&#39;_y&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 等价</span>
<span class="token comment">##      A  B_x    C  D_x B_y D_y   F</span>
<span class="token comment">## 2   A2   B2   C2   D2  B2  D2  F2</span>
<span class="token comment">## 3   A3   B3   C3   D3  B3  D3  F3</span>
<span class="token comment">## 6  NaN  NaN  NaN  NaN  B6  D6  F6</span>
<span class="token comment">## 7  NaN  NaN  NaN  NaN  B7  D7  F7</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="outer" tabindex="-1"><a class="header-anchor" href="#outer" aria-hidden="true">#</a> outer</h3><h4 id="按column-2" tabindex="-1"><a class="header-anchor" href="#按column-2" aria-hidden="true">#</a> 按column</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pd<span class="token punctuation">.</span>merge<span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> how<span class="token operator">=</span><span class="token string">&quot;outer&quot;</span><span class="token punctuation">,</span> on<span class="token operator">=</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span>
pd<span class="token punctuation">.</span>concat<span class="token punctuation">(</span><span class="token punctuation">[</span>left<span class="token punctuation">,</span>right<span class="token punctuation">]</span><span class="token punctuation">,</span> ignore_index<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> join <span class="token operator">=</span> <span class="token string">&quot;outer&quot;</span><span class="token punctuation">,</span>axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment"># 等价</span>
<span class="token comment">##      A   B    C  D_x  D_y    F</span>
<span class="token comment">## 0   A0  B0   C0   D0  NaN  NaN</span>
<span class="token comment">## 1   A1  B1   C1   D1  NaN  NaN</span>
<span class="token comment">## 2   A2  B2   C2   D2   D2   F2</span>
<span class="token comment">## 3   A3  B3   C3   D3   D3   F3</span>
<span class="token comment">## 4  NaN  B6  NaN  NaN   D6   F6</span>
<span class="token comment">## 5  NaN  B7  NaN  NaN   D7   F7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="按index-2" tabindex="-1"><a class="header-anchor" href="#按index-2" aria-hidden="true">#</a> 按index</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pd<span class="token punctuation">.</span>merge<span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> how<span class="token operator">=</span><span class="token string">&quot;outer&quot;</span><span class="token punctuation">,</span>left_index<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> right_index<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
left<span class="token punctuation">.</span>join<span class="token punctuation">(</span>right<span class="token punctuation">,</span>how<span class="token operator">=</span><span class="token string">&quot;outer&quot;</span><span class="token punctuation">,</span>lsuffix<span class="token operator">=</span><span class="token string">&#39;_x&#39;</span><span class="token punctuation">,</span> rsuffix<span class="token operator">=</span><span class="token string">&#39;_y&#39;</span><span class="token punctuation">)</span>
<span class="token comment">##      A  B_x    C  D_x  B_y  D_y    F</span>
<span class="token comment">## 0   A0   B0   C0   D0  NaN  NaN  NaN</span>
<span class="token comment">## 1   A1   B1   C1   D1  NaN  NaN  NaN</span>
<span class="token comment">## 2   A2   B2   C2   D2   B2   D2   F2</span>
<span class="token comment">## 3   A3   B3   C3   D3   B3   D3   F3</span>
<span class="token comment">## 6  NaN  NaN  NaN  NaN   B6   D6   F6</span>
<span class="token comment">## 7  NaN  NaN  NaN  NaN   B7   D7   F7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="inner" tabindex="-1"><a class="header-anchor" href="#inner" aria-hidden="true">#</a> inner</h3><h4 id="按column-3" tabindex="-1"><a class="header-anchor" href="#按column-3" aria-hidden="true">#</a> 按column</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pd<span class="token punctuation">.</span>merge<span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> how<span class="token operator">=</span><span class="token string">&quot;inner&quot;</span><span class="token punctuation">,</span> on<span class="token operator">=</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span>
pd<span class="token punctuation">.</span>concat<span class="token punctuation">(</span><span class="token punctuation">[</span>left<span class="token punctuation">,</span>right<span class="token punctuation">]</span><span class="token punctuation">,</span> ignore_index<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> join <span class="token operator">=</span> <span class="token string">&quot;inner&quot;</span><span class="token punctuation">,</span>axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># 等价</span>
<span class="token comment">##     A   B   C D_x D_y   F</span>
<span class="token comment">## 0  A2  B2  C2  D2  D2  F2</span>
<span class="token comment">## 1  A3  B3  C3  D3  D3  F3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="按索引" tabindex="-1"><a class="header-anchor" href="#按索引" aria-hidden="true">#</a> 按索引</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pd<span class="token punctuation">.</span>merge<span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> how<span class="token operator">=</span><span class="token string">&quot;inner&quot;</span><span class="token punctuation">,</span>left_index<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> right_index<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
left<span class="token punctuation">.</span>join<span class="token punctuation">(</span>right<span class="token punctuation">,</span>how<span class="token operator">=</span><span class="token string">&quot;inner&quot;</span><span class="token punctuation">,</span>lsuffix<span class="token operator">=</span><span class="token string">&#39;_x&#39;</span><span class="token punctuation">,</span> rsuffix<span class="token operator">=</span><span class="token string">&#39;_y&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 等价</span>
<span class="token comment">##     A B_x   C D_x B_y D_y   F</span>
<span class="token comment">## 2  A2  B2  C2  D2  B2  D2  F2</span>
<span class="token comment">## 3  A3  B3  C3  D3  B3  D3  F3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cross" tabindex="-1"><a class="header-anchor" href="#cross" aria-hidden="true">#</a> cross</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pd<span class="token punctuation">.</span>merge<span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> how<span class="token operator">=</span><span class="token string">&quot;cross&quot;</span><span class="token punctuation">)</span>
<span class="token comment">##      A B_x   C D_x B_y D_y   F</span>
<span class="token comment">## 0   A0  B0  C0  D0  B2  D2  F2</span>
<span class="token comment">## 1   A0  B0  C0  D0  B3  D3  F3</span>
<span class="token comment">## 2   A0  B0  C0  D0  B6  D6  F6</span>
<span class="token comment">## 3   A0  B0  C0  D0  B7  D7  F7</span>
<span class="token comment">## 4   A1  B1  C1  D1  B2  D2  F2</span>
<span class="token comment">## 5   A1  B1  C1  D1  B3  D3  F3</span>
<span class="token comment">## 6   A1  B1  C1  D1  B6  D6  F6</span>
<span class="token comment">## 7   A1  B1  C1  D1  B7  D7  F7</span>
<span class="token comment">## 8   A2  B2  C2  D2  B2  D2  F2</span>
<span class="token comment">## 9   A2  B2  C2  D2  B3  D3  F3</span>
<span class="token comment">## 10  A2  B2  C2  D2  B6  D6  F6</span>
<span class="token comment">## 11  A2  B2  C2  D2  B7  D7  F7</span>
<span class="token comment">## 12  A3  B3  C3  D3  B2  D2  F2</span>
<span class="token comment">## 13  A3  B3  C3  D3  B3  D3  F3</span>
<span class="token comment">## 14  A3  B3  C3  D3  B6  D6  F6</span>
<span class="token comment">## 15  A3  B3  C3  D3  B7  D7  F7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="纵向拼贴" tabindex="-1"><a class="header-anchor" href="#纵向拼贴" aria-hidden="true">#</a> 纵向拼贴</h2><ol><li><p>axis控制拼贴的方向</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pd<span class="token punctuation">.</span>concat<span class="token punctuation">(</span><span class="token punctuation">[</span>df1<span class="token punctuation">,</span> df2<span class="token punctuation">]</span><span class="token punctuation">,</span> ignore_index<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>axis<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
    A   B    C   D    F
0   A0  B0   C0  D0  NaN
1   A1  B1   C1  D1  NaN
2   A2  B2   C2  D2  NaN
3   A3  B3   C3  D3  NaN
2  NaN  B2  NaN  D2   F2
3  NaN  B3  NaN  D3   F3
4  NaN  B6  NaN  D6   F6
5  NaN  B7  NaN  D7   F7
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>ignore_index</code>相当于合并后进行<code>reset_index()</code>, 重新生成索引</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pd<span class="token punctuation">.</span>concat<span class="token punctuation">(</span><span class="token punctuation">[</span>df1<span class="token punctuation">,</span> df2<span class="token punctuation">]</span><span class="token punctuation">,</span> ignore_index<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>axis<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
    A   B    C   D    F
0   A0  B0   C0  D0  NaN
1   A1  B1   C1  D1  NaN
2   A2  B2   C2  D2  NaN
3   A3  B3   C3  D3  NaN
4  NaN  B2  NaN  D2   F2
5  NaN  B3  NaN  D3   F3
6  NaN  B6  NaN  D6   F6
7  NaN  B7  NaN  D7   F7
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>inner</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pd<span class="token punctuation">.</span>concat<span class="token punctuation">(</span><span class="token punctuation">[</span>df1<span class="token punctuation">,</span> df2<span class="token punctuation">]</span><span class="token punctuation">,</span> ignore_index<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>join<span class="token operator">=</span><span class="token string">&quot;inner&quot;</span><span class="token punctuation">,</span>axis<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
    B   D
0  B0  D0
1  B1  D1
2  B2  D2
3  B3  D3
4  B2  D2
5  B3  D3
6  B6  D6
7  B7  D7
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>拼贴Series</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> pd<span class="token punctuation">.</span>Series<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;X0&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;X1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;X2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;X3&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> index<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;D&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
A    X0
B    X1
C    X2
D    X3
&quot;&quot;&quot;</span>

pd<span class="token punctuation">.</span>concat<span class="token punctuation">(</span><span class="token punctuation">[</span>df1<span class="token punctuation">,</span> s<span class="token punctuation">.</span>to_frame<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>T<span class="token punctuation">]</span><span class="token punctuation">,</span> ignore_index<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
    A   B   C   D
0  A0  B0  C0  D0
1  A1  B1  C1  D1
2  A2  B2  C2  D2
3  A3  B3  C3  D3
4  X0  X1  X2  X3
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="repeat-rows" tabindex="-1"><a class="header-anchor" href="#repeat-rows" aria-hidden="true">#</a> repeat rows</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string">&quot;a&quot;</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&quot;b&quot;</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

pd<span class="token punctuation">.</span>concat<span class="token punctuation">(</span><span class="token punctuation">[</span>df<span class="token punctuation">,</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token punctuation">[</span>df<span class="token punctuation">[</span>df<span class="token punctuation">[</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">*</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://pandas.pydata.org/docs/user_guide/merging.html#concatenating-objects https://pandas.pydata.org/docs/user_guide/merging.html#database-style-dataframe-or-named-series-joining-merging</p>`,37),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","pandas_concate.html.vue"]]);export{r as default};