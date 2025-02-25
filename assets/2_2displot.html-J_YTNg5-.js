import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as o}from"./app-nD1Z-e8V.js";const e={},t=o(`<h1 id="displot" tabindex="-1"><a class="header-anchor" href="#displot" aria-hidden="true">#</a> displot</h1><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><h2 id="displot基础" tabindex="-1"><a class="header-anchor" href="#displot基础" aria-hidden="true">#</a> displot基础</h2><ol><li>Figure-level方法</li><li>分布图像</li><li>通过kind控制底层方法 <ol><li>histplot() (with kind=&quot;hist&quot;)</li><li>kdeplot() (with kind=&quot;kde&quot;)</li><li>ecdfplot() (with kind=&quot;ecdf&quot;)</li></ol></li><li>布局使用FacetGrid</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>seaborn<span class="token punctuation">.</span>displot<span class="token punctuation">(</span>
    data<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>          <span class="token comment"># pandas.DataFrame, numpy.ndarray, mapping, or sequence. </span>
    <span class="token operator">*</span><span class="token punctuation">,</span> 
    x<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>             <span class="token comment"># vectors or keys in data. 在x轴绘制</span>
    y<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>             <span class="token comment"># vectors or keys in data. 在y轴绘制 </span>
    hue<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>           <span class="token comment"># vector or key in data, 不同分类用不同颜色表示</span>
    row<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>           <span class="token comment"># vectors or keys in data, 不同分类多列展示</span>
    col<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>           <span class="token comment"># vectors or keys in data, 不同分类多行展示</span>
    weights<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>       <span class="token comment"># vector or key in data, 就散分布时用的权重</span>
    kind<span class="token operator">=</span><span class="token string">&#39;hist&#39;</span><span class="token punctuation">,</span>        <span class="token comment"># {“hist”, “kde”, “ecdf”}, 分布, 密度, 累积</span>
    rug<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>          <span class="token comment"># bool. True: 使用rugplot()绘制</span>
    rug_kws<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>       <span class="token comment"># dict. rugplot()的方法</span>
    log_scale<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>     <span class="token comment"># bool or number, or pair of bools or numbers. 对数缩放.</span>
    legend<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>        <span class="token comment"># bool. False: 不显示</span>
    palette<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>       <span class="token comment"># string, list, dict, or matplotlib.colors.Colormap. hue所使用的调色盘. string: 传入color_palette(); list和dict对应不同的分类.</span>
    hue_order<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>     <span class="token comment"># vector of strings. hue的顺序</span>
    hue_norm<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>      <span class="token comment"># tuple or matplotlib.colors.Normalize. </span>
    color<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>         <span class="token comment"># matplotlib color. 当没有hue映射时, 使用.</span>
    col_wrap<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>      <span class="token comment"># int. 每一行包含的列数, 超过自动换行.</span>
    row_order<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>     <span class="token comment"># vector of strings. 图行指定顺序.</span>
    col_order<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>     <span class="token comment"># vector of strings. 图列指定顺序.</span>
    height<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span>           <span class="token comment"># scalar. 每个facet的高度</span>
    aspect<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>           <span class="token comment"># scalar. width = aspect * height</span>
    facet_kws<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>     <span class="token comment"># dict. FacetGrid()的参数</span>
    <span class="token operator">**</span>kwargs
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回</p><p>FacetGrid</p>`,7),p=[t];function l(c,i){return s(),a("div",null,p)}const u=n(e,[["render",l],["__file","2_2displot.html.vue"]]);export{u as default};
