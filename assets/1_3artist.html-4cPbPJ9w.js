import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-nD1Z-e8V.js";const t={},o=e('<h1 id="artist" tabindex="-1"><a class="header-anchor" href="#artist" aria-hidden="true">#</a> artist</h1><p>有两种<code>Artists</code>:<code>primitives</code>和<code>containers</code></p><ol><li><code>primitives</code>指的是基本的图像对象, 比如<code>Line2D</code>, <code>Rectangle</code>, <code>Text</code>...</li><li><code>containers</code>指的是<code>Figure</code>, <code>Axes</code>, <code>Axis</code></li></ol><p>基本的绘图流程是:</p><ol><li>创建<code>Figure</code>对象, <code>matplotlib.pyplot.figure()</code></li><li>使用<code>Figure</code>创建<code>Axes</code>对象, <code>fig.add_subplot(2, 1, 1)</code> 或 <code>fig.add_axes</code></li><li>使用<code>Axes</code>创建<code>primitives</code>对象</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fig <span class="token operator">=</span> plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 创建fig</span>\nax <span class="token operator">=</span> fig<span class="token punctuation">.</span>add_axes<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0.15</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token number">0.7</span><span class="token punctuation">,</span> <span class="token number">0.3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 使用`add_axes`创建`axes`对象(实际中进场使用`subplot`,`subplot`是`Axes`的子类)</span>\nline<span class="token punctuation">,</span> <span class="token operator">=</span> ax<span class="token punctuation">.</span>plot<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment"># 创建primitives对象, 这里创建的是Line2D对象</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ax.plot</code>创建了<code>Line2D</code>对象, 并将其加入到<code>Axes</code>. 可以使用<code>Axes.lines</code>获得刚刚创建的<code>Line2D</code>对象</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ax<span class="token punctuation">.</span>lines<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>  <span class="token comment"># &lt;matplotlib.lines.Line2D at 0x19a95710&gt;</span>\nline  <span class="token comment"># &lt;matplotlib.lines.Line2D at 0x19a95710&gt;</span>\nline<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 移除对象</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://matplotlib.org/stable/tutorials/intermediate/artists.html</p>',9),c=[o];function p(i,l){return s(),a("div",null,c)}const r=n(t,[["render",p],["__file","1_3artist.html.vue"]]);export{r as default};
