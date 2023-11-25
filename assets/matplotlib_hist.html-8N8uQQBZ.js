import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o,c,a as s,e as n,b as i,d as a}from"./app-j3zK2x6_.js";const l={},u=a(`<h1 id="hist" tabindex="-1"><a class="header-anchor" href="#hist" aria-hidden="true">#</a> hist</h1><p>直方图主要用来查看数据的分布.</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
mu<span class="token punctuation">,</span> sigma <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">15</span>
data <span class="token operator">=</span> mu <span class="token operator">+</span> sigma <span class="token operator">*</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>randn<span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span>
fig <span class="token operator">=</span> plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span>figsize<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
axs <span class="token operator">=</span> fig<span class="token punctuation">.</span>subplots<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>


<span class="token comment">## 在[0,0]位置绘制频数图</span>
n<span class="token punctuation">,</span> bins<span class="token punctuation">,</span> patches <span class="token operator">=</span> axs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>hist<span class="token punctuation">(</span>data<span class="token punctuation">,</span>bins<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span>
axs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span>title<span class="token operator">=</span><span class="token string">&quot;frequency&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## 在[0,1]位置绘制频率图, 这里需要指定的是每个数据点的权重, 纵轴表示的是权重的相加</span>
weights <span class="token operator">=</span> np<span class="token punctuation">.</span>ones_like<span class="token punctuation">(</span>data <span class="token punctuation">)</span><span class="token operator">/</span><span class="token builtin">float</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
n<span class="token punctuation">,</span> bins<span class="token punctuation">,</span> patches <span class="token operator">=</span> axs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>hist<span class="token punctuation">(</span>data<span class="token punctuation">,</span>bins<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span>weights<span class="token operator">=</span>weights<span class="token punctuation">)</span>
axs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span>title<span class="token operator">=</span><span class="token string">&quot;relative frequency&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## 绘制概率密度函数, 这里y轴是没有实际含义的</span>
<span class="token triple-quoted-string string">&#39;&#39;&#39;
y轴的f(x)可以用正态分布的性质反推出来，可以说是没有具体意义的数值, 核心是：我们使用正态分布的时候通常考虑的是在某个区间$(\\mu \\pm \\sigma)$发生的概率, 是积分的面积.所以y轴的值并不像传统的$y=f(x)$因此正态分布的y(x)是可以由其应有的性质反推出来的。
$\\mu$确定了正态分布的平分线, 标准差确定了钟型的宽窄, 积分面积为1, 所以y轴的值是为了其他参数而存在的
&#39;&#39;&#39;</span>
mu <span class="token operator">=</span> np<span class="token punctuation">.</span>mean<span class="token punctuation">(</span>data<span class="token punctuation">)</span>
sigma <span class="token operator">=</span> np<span class="token punctuation">.</span>std<span class="token punctuation">(</span>data<span class="token punctuation">)</span>
y <span class="token operator">=</span> norm<span class="token punctuation">.</span>pdf<span class="token punctuation">(</span>bins<span class="token punctuation">,</span> mu<span class="token punctuation">,</span> sigma<span class="token punctuation">)</span>
axs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>plot<span class="token punctuation">(</span>bins<span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token string">&#39;r--&#39;</span><span class="token punctuation">)</span>
axs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>hist<span class="token punctuation">(</span>data<span class="token punctuation">,</span>bins<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span>density<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
axs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span>title<span class="token operator">=</span><span class="token string">&quot;probability density function&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## 绘制累计密度函数</span>
axs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>hist<span class="token punctuation">(</span>data<span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span>density<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>cumulative<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
axs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span>title<span class="token operator">=</span><span class="token string">&quot;cumulative distribution function&quot;</span><span class="token punctuation">)</span>




fig<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>频数图和累计图</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
mu<span class="token punctuation">,</span> sigma <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">15</span>
data <span class="token operator">=</span> mu <span class="token operator">+</span> sigma <span class="token operator">*</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>randn<span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span>
fig <span class="token operator">=</span> plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span>figsize<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
ax1 <span class="token operator">=</span> fig<span class="token punctuation">.</span>add_subplot<span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span>
<span class="token comment">## 将Y轴大小不同的图表放在与ax1相同的区域上</span>
ax2 <span class="token operator">=</span> ax1<span class="token punctuation">.</span>twinx<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">## 为了制作相对频数的直方图，需要用频数除以数据的数量</span>
<span class="token comment">## 这可以通过指定hist的参数weight来实现</span>
weights <span class="token operator">=</span> np<span class="token punctuation">.</span>ones_like<span class="token punctuation">(</span>english_scores<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token builtin">len</span><span class="token punctuation">(</span>english_scores<span class="token punctuation">)</span>
rel_freq<span class="token punctuation">,</span> _<span class="token punctuation">,</span> _ <span class="token operator">=</span> ax1<span class="token punctuation">.</span>hist<span class="token punctuation">(</span>data<span class="token punctuation">,</span> bins<span class="token operator">=</span><span class="token number">25</span><span class="token punctuation">,</span>
                          <span class="token builtin">range</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span> weights<span class="token operator">=</span>weights<span class="token punctuation">)</span>

cum_rel_freq <span class="token operator">=</span> np<span class="token punctuation">.</span>cumsum<span class="token punctuation">(</span>rel_freq<span class="token punctuation">)</span>
class_value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">//</span><span class="token number">2</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token comment">## 折线图的绘制</span>
<span class="token comment">## 将参数1s设为‘--’，使直线变成虚线</span>
<span class="token comment">## 通过将参数marker设为‘o’，将数据点显示为圆形</span>
<span class="token comment">## 将参数color设为‘gray’，将数据点和线条显示为灰色</span>
ax2<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>class_value<span class="token punctuation">,</span> cum_rel_freq<span class="token punctuation">,</span>
         ls<span class="token operator">=</span><span class="token string">&#39;--&#39;</span><span class="token punctuation">,</span> marker<span class="token operator">=</span><span class="token string">&#39;o&#39;</span><span class="token punctuation">,</span> color<span class="token operator">=</span><span class="token string">&#39;gray&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## 删除折线图中的网格</span>
ax2<span class="token punctuation">.</span>grid<span class="token punctuation">(</span>visible<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>

ax1<span class="token punctuation">.</span>set_xlabel<span class="token punctuation">(</span><span class="token string">&#39;分数&#39;</span><span class="token punctuation">)</span>
ax1<span class="token punctuation">.</span>set_ylabel<span class="token punctuation">(</span><span class="token string">&#39;相对频数&#39;</span><span class="token punctuation">)</span>
ax2<span class="token punctuation">.</span>set_ylabel<span class="token punctuation">(</span><span class="token string">&#39;累积相对频数&#39;</span><span class="token punctuation">)</span>
ax1<span class="token punctuation">.</span>set_xticks<span class="token punctuation">(</span>np<span class="token punctuation">.</span>linspace<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>x</td><td>sequence,</td></tr><tr><td>bins</td><td>int or sequence, 如果是int则直接在range中划分成int个bins. 如果是sequence, 比如[1,2,3,4], 第一个bin是<code>[1,2)</code>,第二个是<code>[2,3)</code>, 最后一个是<code>[3,4]</code>注意只有最后是个右闭的</td></tr><tr><td>range</td><td>tuple, 默认是<code>(x.min(), x.max())</code></td></tr><tr><td>density</td><td>boole, 默认是False, 如果为True, 则返回probability density: 每个bin将数量除以总数量</td></tr><tr><td>weights</td><td>sequence, 默认为None, 每个bin的权重</td></tr><tr><td>cumulative</td><td>bool, 默认为False</td></tr><tr><td>bottom</td><td>array-like or scalar, 每个bin的位置, 每个bin的位置是bottom to bottom + hist(x, bins). 如果是scalar, 所有的同时移动</td></tr><tr><td>histtype</td><td>{&#39;bar&#39;, &#39;barstacked&#39;, &#39;step&#39;, &#39;stepfilled&#39;}, default: &#39;bar&#39;</td></tr><tr><td>align</td><td>{&#39;left&#39;, &#39;mid&#39;, &#39;right&#39;}, default: &#39;mid&#39;</td></tr><tr><td>orientation</td><td>{&#39;vertical&#39;, &#39;horizontal&#39;}, default: &#39;vertical&#39;</td></tr><tr><td>color</td><td>color or array-like of colors, 默认为None</td></tr><tr><td>label</td><td>str, 默认为None</td></tr><tr><td>stackedbool</td><td>default: False</td></tr></tbody></table><h3 id="返回" tabindex="-1"><a class="header-anchor" href="#返回" aria-hidden="true">#</a> 返回</h3><table><thead><tr><th>返回</th><th>描述</th></tr></thead><tbody><tr><td><code>n</code>: <code>array or list of arrays</code></td><td>array, 每个bin的值</td></tr><tr><td><code>bins</code>: <code>array</code></td><td>array, bin边缘对应的值, 长度是bins的数量+1, 因为从第一个的左边缘一直到最后一个的右边缘</td></tr><tr><td><code>patches</code>: <code>BarContainer or list of a single Polygon</code></td><td>一些artists</td></tr></tbody></table><h2 id="np-histogram" tabindex="-1"><a class="header-anchor" href="#np-histogram" aria-hidden="true">#</a> np.histogram</h2>`,12),r={href:"https://numpy.org/doc/stable/reference/generated/numpy.histogram.html",target:"_blank",rel:"noopener noreferrer"},d=s("code",null,"numpy",-1),k=s("code",null,"histogram",-1),m=a(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>rand<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
hist<span class="token punctuation">,</span>bins <span class="token operator">=</span> np<span class="token punctuation">.</span>histogram<span class="token punctuation">(</span>a<span class="token punctuation">,</span>bins<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token builtin">range</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>hist<span class="token punctuation">)</span>  <span class="token comment"># [19 30 15 16 20]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>bins<span class="token punctuation">)</span>  <span class="token comment"># [ 0.   0.2  0.4  0.6  0.8  1. ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h3><p><code>histogram(a,bins=10,range=None,weights=None,density=False)</code></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>a</td><td>是待统计数据的数组；</td></tr><tr><td>bins</td><td>指定统计的区间个数；</td></tr><tr><td>range</td><td>是一个长度为2的元组，表示统计范围的最小值和最大值，默认值None，表示范围由数据的范围决定</td></tr><tr><td>weights</td><td>为数组的每个元素指定了权值,histogram()会对区间中数组所对应的权值进行求和</td></tr><tr><td>density</td><td>为True时，返回每个区间的概率密度；为False，返回每个区间中元素的个数</td></tr></tbody></table><h3 id="返回-1" tabindex="-1"><a class="header-anchor" href="#返回-1" aria-hidden="true">#</a> 返回</h3><table><thead><tr><th>返回值</th><th>描述</th></tr></thead><tbody><tr><td>hist array</td><td>The values of the histogram. See density and weights for a description of the possible semantics.</td></tr><tr><td>bin_edgesarray of dtype float</td><td>Return the bin edges (length(hist)+1).</td></tr></tbody></table>`,6);function b(v,h){const t=e("ExternalLinkIcon");return o(),c("div",null,[u,s("p",null,[s("a",r,[n("官网API"),i(t)]),n(" 直方图(hist), 本质是还是条形图(bar). x轴是bin的坐标, y轴的bin中数据的个数. "),d,n("中的"),k,n("可以生成x和y的数据.")]),m])}const f=p(l,[["render",b],["__file","matplotlib_hist.html.vue"]]);export{f as default};