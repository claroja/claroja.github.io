import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-nD1Z-e8V.js";const p={},o=t(`<h1 id="boxplot" tabindex="-1"><a class="header-anchor" href="#boxplot" aria-hidden="true">#</a> boxplot</h1><p>箱形图（Box plot）一般用来展现数据的分布（如上下四分位值、中位数等），同时，也可以用箱线图来反映数据的异常情况。因图形如箱子，且在上下四分位数之外常有线条像胡须延伸出去而得名。</p><p>箱型图主要包含六个数据节点，将一组数据从大到小排列，分别计算出上边缘，上四分位数Q3，中位数，下四分位数Q1，下边缘，还有异常值。</p><p>下四分位数Q1：是数据集下半部分的中位数。 中位数media：数据集中的中间值 上四分位数Q3：数据集上半部分的中位数 四分位距（IQR, Inter-Quartile Range） ：上下四分位数之间的距离 边缘（晶须）边界的另一个流行选择是基于 1.5IQR 值。从上四分位数(Q3)上方，测量出IQR的1.5倍的距离为上边缘；从下四分位数（Q1）下方，测量出IQR的1.5倍距离为下边缘</p><p>在matplotlib中对于箱型图的绘制采用1.5倍IQR的方式进行绘制，如下图所示：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>     Q1<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">.</span>5IQR   Q1   median  Q3   Q3<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">.</span>5IQR
                  <span class="token operator">|</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">|</span>
  o      <span class="token operator">|</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">|</span>     <span class="token punctuation">:</span>     <span class="token operator">|</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">|</span>    o  o
                  <span class="token operator">|</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">|</span>
异常值             <span class="token operator">&lt;</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">&gt;</span>            异常值
                       IQR
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>seed<span class="token punctuation">(</span><span class="token number">19900108</span><span class="token punctuation">)</span>  <span class="token comment"># 设置随机数生成器的种子,使每次生成的随机数相同方便后续的复现</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
生成随机数randomData,以及异常数据outlier_low，outlier_high
rand()返回的随机数是大于等于 0 及小于 1 的均匀分布随机实数
ones()返回为1的随机数
&quot;&quot;&quot;</span>
randomData<span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>rand<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span>
outlier_high <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>rand<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token number">100</span>
outlier_low <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>rand<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token operator">-</span><span class="token number">100</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
数据拼接，将上面产生的三组随机数进行拼接
&quot;&quot;&quot;</span>
data <span class="token operator">=</span> np<span class="token punctuation">.</span>concatenate<span class="token punctuation">(</span><span class="token punctuation">(</span>randomData<span class="token punctuation">,</span>outlier_high<span class="token punctuation">,</span> outlier_low<span class="token punctuation">)</span><span class="token punctuation">)</span>

fig<span class="token punctuation">,</span>ax <span class="token operator">=</span> plt<span class="token punctuation">.</span>subplots<span class="token punctuation">(</span>figsize<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#创建箱型图</span>
ax<span class="token punctuation">.</span>boxplot<span class="token punctuation">(</span>data<span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><p><code>matplotlib.pyplot.boxplot(x, notch=None, sym=None, vert=None, whis=None, positions=None, widths=None, patch_artist=None, bootstrap=None, usermedians=None, conf_intervals=None, meanline=None, showmeans=None, showcaps=None, showbox=None, showfliers=None, boxprops=None, labels=None, flierprops=None, medianprops=None, meanprops=None, capprops=None, whiskerprops=None, manage_ticks=True, autorange=False, zorder=None, *, data=None) </code></p><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>x</td><td>指定要绘制箱线图的数据；</td></tr><tr><td>labels</td><td>为箱线图添加标签，类似于图例的作用；</td></tr><tr><td>notch</td><td>是否是凹口的形式展现箱线图，默认非凹口；</td></tr><tr><td>sym</td><td>指定异常点的形状，默认为+号显示；</td></tr><tr><td>vert</td><td>是否需要将箱线图垂直摆放，默认垂直摆放；</td></tr><tr><td>whis</td><td>指定上下须与上下四分位的距离，默认为1.5倍的四分位差；</td></tr><tr><td>positions</td><td>指定箱线图的位置，默认为[0,1,2…]；</td></tr><tr><td>widths</td><td>指定箱线图的宽度，默认为0.5；</td></tr><tr><td>patch_artist</td><td>是否填充箱体的颜色；</td></tr><tr><td>meanline</td><td>是否用线的形式表示均值，默认用点来表示；</td></tr><tr><td>showmeans</td><td>是否显示均值，默认不显示；</td></tr><tr><td>showcaps</td><td>是否显示箱线图顶端和末端的两条线，默认显示；</td></tr><tr><td>showbox</td><td>是否显示箱线图的箱体，默认显示；</td></tr><tr><td>showfliers</td><td>是否显示异常值，默认显示；</td></tr><tr><td>boxprops</td><td>设置箱体的属性，如边框色，填充色等；</td></tr><tr><td>filerprops</td><td>设置异常值的属性，如异常点的形状、大小、填充色等；</td></tr><tr><td>medianprops</td><td>设置中位数的属性，如线的类型、粗细等；</td></tr><tr><td>meanprops</td><td>设置均值的属性，如点的大小、颜色等；</td></tr><tr><td>capprops</td><td>设置箱线图顶端和末端线条的属性，如颜色、粗细等；</td></tr><tr><td>whiskerprops</td><td>设置须的属性，如颜色、粗细、线的类型等；</td></tr></tbody></table><h3 id="返回" tabindex="-1"><a class="header-anchor" href="#返回" aria-hidden="true">#</a> 返回</h3><p>返回包含箱型图各个部分的字典, 它的key为:</p><ol><li><code>boxes</code>:</li><li><code>medians</code></li><li><code>whiskers</code></li><li><code>caps</code></li><li><code>fliers</code></li><li><code>means</code></li></ol><h2 id="多组数据" tabindex="-1"><a class="header-anchor" href="#多组数据" aria-hidden="true">#</a> 多组数据</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> matplotlib

<span class="token triple-quoted-string string">&quot;&quot;&quot;
font:设置中文
unicode_minus:显示负好
&quot;&quot;&quot;</span>
matplotlib<span class="token punctuation">.</span>rcParams<span class="token punctuation">[</span><span class="token string">&#39;font.family&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Heiti TC&#39;</span><span class="token punctuation">]</span>
matplotlib<span class="token punctuation">.</span>rcParams<span class="token punctuation">[</span><span class="token string">&#39;axes.unicode_minus&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token boolean">False</span>     <span class="token comment"># 正常显示负号</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
设置随机数生成器的种子,使每次生成的随机数相同方便后续的复现
&quot;&quot;&quot;</span>
np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>seed<span class="token punctuation">(</span><span class="token number">19900108</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
生成三组随机数进行多组数据的展示
numpy.random.normal()函数来创建一组基于正态分布的随机数据，该函数有三个参数，分别是正态分布的平均值、标准差以及期望值的数量
&quot;&quot;&quot;</span>
data_1 <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>normal<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>
data_2 <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>normal<span class="token punctuation">(</span><span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>
data_3 <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>normal<span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>
data_to_plot<span class="token operator">=</span><span class="token punctuation">[</span>data_1<span class="token punctuation">,</span>data_2<span class="token punctuation">,</span>data_3<span class="token punctuation">]</span>

fig<span class="token punctuation">,</span>ax <span class="token operator">=</span> plt<span class="token punctuation">.</span>subplots<span class="token punctuation">(</span>figsize<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#创建箱型图</span>
ax<span class="token punctuation">.</span>boxplot<span class="token punctuation">(</span>data_to_plot<span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小提琴图" tabindex="-1"><a class="header-anchor" href="#小提琴图" aria-hidden="true">#</a> 小提琴图</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> matplotlib

<span class="token triple-quoted-string string">&quot;&quot;&quot;
font:设置中文
unicode_minus:显示负号
&quot;&quot;&quot;</span>
matplotlib<span class="token punctuation">.</span>rcParams<span class="token punctuation">[</span><span class="token string">&#39;font.family&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Heiti TC&#39;</span><span class="token punctuation">]</span>
matplotlib<span class="token punctuation">.</span>rcParams<span class="token punctuation">[</span><span class="token string">&#39;axes.unicode_minus&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token boolean">False</span>     <span class="token comment"># 正常显示负号</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
设置随机数生成器的种子,使每次生成的随机数相同方便后续的复现
&quot;&quot;&quot;</span>
np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>seed<span class="token punctuation">(</span><span class="token number">19900108</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
生成随机数data
numpy.random.normal()函数来创建一组基于正态分布的随机数据，该函数有三个参数，分别是正态分布的平均值、标准差以及期望值的数量
&quot;&quot;&quot;</span>
data <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>normal<span class="token punctuation">(</span><span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
fig<span class="token punctuation">,</span>axes<span class="token operator">=</span>plt<span class="token punctuation">.</span>subplots<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span>figsize<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#绘制箱型图</span>
axes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>boxplot<span class="token punctuation">(</span>data<span class="token punctuation">)</span>
axes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>set_title<span class="token punctuation">(</span><span class="token string">&quot;箱型图&quot;</span><span class="token punctuation">)</span>
<span class="token comment">#绘制小提琴图</span>
axes<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>violinplot<span class="token punctuation">(</span>data<span class="token punctuation">,</span>showmeans<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> showmedians<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
axes<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>set_title<span class="token punctuation">(</span><span class="token string">&quot;小提琴图&quot;</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考： https://blog.csdn.net/zhulove86/article/details/124764644 https://matplotlib.org/stable/api/_as_gen/matplotlib.axes.Axes.boxplot.html</p>`,20),e=[o];function l(c,i){return s(),a("div",null,e)}const d=n(p,[["render",l],["__file","5boxplot.html.vue"]]);export{d as default};
