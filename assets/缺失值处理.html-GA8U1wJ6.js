import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as l,c as p,b as a,d as n,e as i,a as s}from"./app-nD1Z-e8V.js";const r={},c=s('<h1 id="缺失值处理" tabindex="-1"><a class="header-anchor" href="#缺失值处理" aria-hidden="true">#</a> 缺失值处理</h1><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="查询缺失值" tabindex="-1"><a class="header-anchor" href="#查询缺失值" aria-hidden="true">#</a> 查询缺失值</h3><p>DataFrame.isna()和DataFrame.isnull()</p><ol><li>参数 无</li><li>返回 相同形状的数据框, 缺失值处填True</li></ol>',6),d={href:"https://datascience.stackexchange.com/questions/37878/difference-between-isna-and-isnull-in-pandas",target:"_blank",rel:"noopener noreferrer"},u=s(`<h3 id="删除缺失值" tabindex="-1"><a class="header-anchor" href="#删除缺失值" aria-hidden="true">#</a> 删除缺失值</h3><ol><li><p>参数</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>DataFrame<span class="token punctuation">.</span>dropna<span class="token punctuation">(</span>
    <span class="token operator">*</span><span class="token punctuation">,</span> 
    axis<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>                 <span class="token comment"># {0 or ‘index’, 1 or ‘columns’}, 默认按行丢弃</span>
    how<span class="token operator">=</span><span class="token operator">&lt;</span>no_default<span class="token operator">&gt;</span><span class="token punctuation">,</span>       <span class="token comment"># {‘any’, ‘all’}, any: 只要有一个缺失值就丢弃; all, 所有都是缺失值才丢弃</span>
    thresh<span class="token operator">=</span><span class="token operator">&lt;</span>no_default<span class="token operator">&gt;</span><span class="token punctuation">,</span>    <span class="token comment"># int, 需要多少个缺失值丢弃, 不能和how连用</span>
    subset<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>            <span class="token comment"># column label or sequence of labels, </span>
    inplace<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> 
    ignore_index<span class="token operator">=</span><span class="token boolean">False</span>      <span class="token comment"># bool, 类似于reset_index</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>返回</p><p>DataFrame or None</p></li></ol><h3 id="填充缺失值" tabindex="-1"><a class="header-anchor" href="#填充缺失值" aria-hidden="true">#</a> 填充缺失值</h3><ol><li><p>参数</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>DataFrame<span class="token punctuation">.</span>fillna<span class="token punctuation">(</span>
    value<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>             <span class="token comment"># scalar, dict, Series, or DataFrame, 填充值</span>
    <span class="token operator">*</span><span class="token punctuation">,</span> 
    axis<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> 
    inplace<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> 
    limit<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> 
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例外参考ffill和bfill</p></li><li><p>返回</p><p>Series/DataFrame or None</p></li></ol><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.fillna.html#pandas.DataFrame.fillna</li><li>https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.dropna.html#pandas.DataFrame.dropna</li><li>https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.isna.html#pandas.DataFrame.isna</li><li>https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.isnull.html#pandas.DataFrame.isnull</li></ol>`,6);function h(m,k){const e=t("ExternalLinkIcon");return l(),p("div",null,[c,a("p",null,[n("✨"),a("a",d,[n("isna和isnull的区别是什么"),i(e)])]),u])}const f=o(r,[["render",h],["__file","缺失值处理.html.vue"]]);export{f as default};
