import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as l,c as i,a as t,b as e,d as n,e as s}from"./app-yeyEmHfz.js";const r={},c=t("h1",{id:"axes",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#axes","aria-hidden":"true"},"#"),e(" axes")],-1),p=t("code",null,"matplotlib.axes.Axes",-1),h=t("code",null,"primitives artist",-1),u={href:"https://matplotlib.org/stable/api/axes_api.html",target:"_blank",rel:"noopener noreferrer"},x=s(`<p>比如创建一个<code>Line2D</code>对象:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>line<span class="token punctuation">,</span> <span class="token operator">=</span> ax<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">,</span> color<span class="token operator">=</span><span class="token string">&#39;blue&#39;</span><span class="token punctuation">,</span> linewidth<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
line  <span class="token comment"># &lt;matplotlib.lines.Line2D at 0xd378b0c&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>plot()</code>返回包含多个<code>Line2D</code>对象的列表, 因为我们可以传入的<code>x,y</code>可以是列表. 这里我们使用<code>,</code>进行解包. 该<code>Line2D</code>同时被加入到了<code>Axes.lines</code>列表中</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>ax<span class="token punctuation">.</span>lines<span class="token punctuation">)</span>  <span class="token comment"># [&lt;matplotlib.lines.Line2D at 0xd378b0c&gt;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>有些图像, 比如直方图(hist)会包含多个<code>primitives artist</code>对象</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>n<span class="token punctuation">,</span> bins<span class="token punctuation">,</span> rectangles <span class="token operator">=</span> ax<span class="token punctuation">.</span>hist<span class="token punctuation">(</span>np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>randn<span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="axes创建primitives-artist" tabindex="-1"><a class="header-anchor" href="#axes创建primitives-artist" aria-hidden="true">#</a> axes创建primitives artist</h2><table><thead><tr><th>Axes helper method</th><th>Artist</th><th>Container</th><th>例子</th></tr></thead><tbody><tr><td><code>ax.annotate</code> - text annotations</td><td>Annotation</td><td>ax.texts</td><td><code>ax.annotate(&#39;local max&#39;, xy=(2, 1), xytext=(3, 1.5),arrowprops=dict(facecolor=&#39;black&#39;, shrink=0.05))</code></td></tr><tr><td>bar - bar charts</td><td>Rectangle</td><td>ax.patches</td><td></td></tr><tr><td>errorbar - error bar plots</td><td>Line2D and Rectangle</td><td>ax.lines and ax.patches</td><td></td></tr><tr><td>fill - shared area</td><td>Polygon</td><td>ax.patches</td><td></td></tr><tr><td>hist - histograms</td><td>Rectangle</td><td>ax.patches</td><td></td></tr><tr><td>imshow - image data</td><td>AxesImage</td><td>ax.images</td><td></td></tr><tr><td><code>ax.legend()</code> - Axes legend</td><td>Legend</td><td>ax.get_legend()</td><td><code>ax.legend((&quot;phase field&quot;, &quot;level set&quot;, &quot;sharp interface&quot;),shadow=True, loc=(0.01, 0.48), handlelength=1.5, fontsize=16)</code></td></tr><tr><td><code>ax.plot()</code> - xy plots</td><td>Line2D</td><td>ax.lines</td><td></td></tr><tr><td>scatter - scatter charts</td><td>PolyCollection</td><td>ax.collections</td><td></td></tr><tr><td><code>ax.text()</code> - text</td><td>Text</td><td>ax.texts</td><td><code>ax.text(0, 0.1, r&quot;$\\delta$&quot;,color=&quot;black&quot;, fontsize=24,horizontalalignment=&quot;center&quot;, verticalalignment=&quot;center&quot;,bbox=dict(boxstyle=&quot;round&quot;, fc=&quot;white&quot;, ec=&quot;black&quot;, pad=0.2))</code></td></tr><tr><td><code>ax.grid()</code></td><td>参考线</td><td></td><td></td></tr><tr><td><code>ax.secondary_xaxis()</code> - 绘制第二坐标轴</td><td></td><td><code>ax.secondary_xaxis(&#39;top&#39;, functions=(np.rad2deg, np.deg2rad))</code></td><td></td></tr><tr><td><code>ax.xaxis(yaxis)</code> - 获得坐标轴, 不需要绘制</td><td>Axis</td><td><code>ax.xaxis(yaxis)</code></td><td></td></tr></tbody></table><h2 id="设置样式" tabindex="-1"><a class="header-anchor" href="#设置样式" aria-hidden="true">#</a> 设置样式</h2>`,9),b=t("code",null,"matplotlib.axes.Axes.set()",-1),m={href:"https://matplotlib.org/stable/api/_as_gen/matplotlib.axes.Axes.set.html",target:"_blank",rel:"noopener noreferrer"},g=s('<table><thead><tr><th>参数</th><th>描述</th><th>举例</th></tr></thead><tbody><tr><td>alpha</td><td>透明度</td><td></td></tr><tr><td>facecolor</td><td>背景颜色</td><td></td></tr><tr><td>title</td><td>标题</td><td><code>ax.set_title(r&#39;$\\sigma_i=15$&#39;)</code></td></tr><tr><td>xlabel(ylabel)</td><td>x,y轴名称</td><td></td></tr><tr><td>xlim(ylim)</td><td>x,y轴区间范围</td><td><code>ax.set(xlim=(0, 8))</code></td></tr><tr><td>xscale(yscale)</td><td>x,y轴标尺,比如<code>log</code>, 默认是<code>linear</code></td><td><code>ax.set_yscale(&#39;log&#39;)</code></td></tr><tr><td>xticks(yticks)</td><td>显示刻度值范围及步长</td><td><code>set_xticks(np.arange(0, 100, 30), [&#39;zero&#39;, &#39;30&#39;, &#39;sixty&#39;, &#39;90&#39;])</code></td></tr><tr><td>xticklabels(yticklabels)</td><td>显示刻度的样式, 设置为空数组<code>[]</code>则不显示</td><td><code>ax.set(xticklabels={labels:[&quot;$-1$&quot;, r&quot;$\\pm 0$&quot;, &quot;$+1$&quot;], color:&quot;k&quot;, size:20})</code></td></tr></tbody></table><h2 id="api参考说明" tabindex="-1"><a class="header-anchor" href="#api参考说明" aria-hidden="true">#</a> API参考说明</h2><h3 id="plotting-绘制对象" tabindex="-1"><a class="header-anchor" href="#plotting-绘制对象" aria-hidden="true">#</a> Plotting 绘制对象</h3>',3),_={href:"https://matplotlib.org/stable/api/axes_api.html#plotting",target:"_blank",rel:"noopener noreferrer"},k=s('<ol><li>基础图形(Basic), 比如折线图, 点图, 条形图等</li><li>Spans</li><li>Spectral</li><li>统计图形(statistics), 比如箱型图</li><li>Binned, 比如hist</li><li>Contours,</li><li>2D arrays, 比如展示图片</li><li>Unstructured triangles</li><li>Text and annotations, 比如文本说明等</li><li></li></ol><h3 id="clearing-清除图像" tabindex="-1"><a class="header-anchor" href="#clearing-清除图像" aria-hidden="true">#</a> Clearing 清除图像</h3>',2),f={href:"https://matplotlib.org/stable/api/axes_api.html#clearing",target:"_blank",rel:"noopener noreferrer"},y=t("h3",{id:"appearance",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#appearance","aria-hidden":"true"},"#"),e(" Appearance")],-1),v={href:"https://matplotlib.org/stable/api/axes_api.html#appearance",target:"_blank",rel:"noopener noreferrer"},q=t("ol",null,[t("li",null,"获得axis坐标轴对象"),t("li",null,"设置坐标轴展示与否"),t("li",null,"设置参考线grid"),t("li",null,"设置背景颜色facecolor")],-1),A=t("h3",{id:"axis-limits",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#axis-limits","aria-hidden":"true"},"#"),e(" Axis / limits")],-1),L={href:"https://matplotlib.org/stable/api/axes_api.html#axis-limits",target:"_blank",rel:"noopener noreferrer"},$=t("ol",null,[t("li",null,"Axis limits and direction, 设置坐标轴的范围"),t("li",null,"Axis labels, title, and legend, 设置坐标轴的标签, 标题 还有事例(legend)"),t("li",null,"Axis scales, 设置坐标轴的缩放"),t("li",null,"Ticks and tick labels, 设置坐标轴的刻度名")],-1);function D(w,C){const a=o("ExternalLinkIcon");return l(),i("div",null,[c,t("p",null,[p,e(" container, 是坐标系, 用来绘制具体的图像,可以用来创建"),h,e("对象, 并设置他们的样式. "),t("a",u,[e("API参考"),n(a)])]),x,t("p",null,[e("直接使用"),b,e("方法来设置坐标轴相关的对象, "),t("a",m,[e("参考官网"),n(a)]),e(".")]),g,t("p",null,[e("可以绘制各种对象, 在官方文档的"),t("a",_,[e("plotting章节"),n(a)]),e(", 大致分为:")]),k,t("p",null,[e("清空坐标系内容, 参考"),t("a",f,[e("Clearing章节"),n(a)])]),y,t("p",null,[e("参考"),t("a",v,[e("Appearance"),n(a)])]),q,A,t("p",null,[e("参考"),t("a",L,[e("Axis / limits"),n(a)])]),$])}const I=d(r,[["render",D],["__file","axes.html.vue"]]);export{I as default};
