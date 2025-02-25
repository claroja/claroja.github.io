import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o,c as p,b as n,d as a,e as t,a as c}from"./app-nD1Z-e8V.js";const u={},r=c(`<h1 id="scatter" tabindex="-1"><a class="header-anchor" href="#scatter" aria-hidden="true">#</a> scatter</h1><p>绘制散点图</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt

fig<span class="token punctuation">,</span> ax <span class="token operator">=</span> plt<span class="token punctuation">.</span>subplots<span class="token punctuation">(</span><span class="token punctuation">)</span>
ax<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span>
    xlim<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    ylim<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>


x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
y <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
sizes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">]</span>
colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;yellow&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;green&quot;</span><span class="token punctuation">]</span>
scatters <span class="token operator">=</span> ax<span class="token punctuation">.</span>scatter<span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> s<span class="token operator">=</span>sizes<span class="token punctuation">,</span> c<span class="token operator">=</span>colors<span class="token punctuation">)</span>
scatters<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span>color<span class="token operator">=</span><span class="token string">&quot;red&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 可以再次操作颜色</span>
fig<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>`,4),i={href:"https://matplotlib.org/stable/api/_as_gen/matplotlib.axes.Axes.scatter.html#matplotlib.axes.Axes.scatter",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"Axes.scatter(x, y, s=None, c=None, marker=None, cmap=None, norm=None, vmin=None, vmax=None, alpha=None, linewidths=None, *, edgecolors=None, plotnonfinite=False, data=None, **kwargs)",-1),k=n("h3",{id:"参数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参数","aria-hidden":"true"},"#"),a(" 参数")],-1),m=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"参数"),n("th",null,"描述")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("code",null,"x, y"),a(": "),n("code",null,"float or array-like, shape (n, )")]),n("td",null,"点的位置")]),n("tr",null,[n("td",null,[n("code",null,"s"),a(": "),n("code",null,"float or array-like, shape (n, ), optional")]),n("td",null,"点的大小")]),n("tr",null,[n("td",null,[n("code",null,"c"),a(": "),n("code",null,"array-like or list of colors or color, optional")]),n("td",null,"点的颜色")]),n("tr",null,[n("td",null,[n("code",null,"marker"),a(": "),n("code",null,"MarkerStyle default: 'o'")]),n("td",null,"点的形状")]),n("tr",null,[n("td",null,[n("code",null,"cmap"),a(": "),n("code",null,"str or Colormap default: 'viridis'")]),n("td",null,"颜色映射")]),n("tr",null,[n("td",null,[n("code",null,"norm"),a(": "),n("code",null,"str or Normalize, optional")]),n("td",null,[a("将标量数据映射到"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mo",{stretchy:"false"},"["),n("mn",null,"0"),n("mo",{separator:"true"},","),n("mn",null,"1"),n("mo",{stretchy:"false"},"]")]),n("annotation",{encoding:"application/x-tex"},"[0,1]")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mopen"},"["),n("span",{class:"mord"},"0"),n("span",{class:"mpunct"},","),n("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),n("span",{class:"mord"},"1"),n("span",{class:"mclose"},"]")])])]),a(", 然后使用cmap来映射")])]),n("tr",null,[n("td",null,[n("code",null,"vmin, vmax"),a(": "),n("code",null,"float, optional")]),n("td")]),n("tr",null,[n("td",null,[n("code",null,"alpha"),a(": "),n("code",null,"float, default: None")]),n("td")]),n("tr",null,[n("td",null,[n("code",null,"linewidths"),a(": "),n("code",null,"float or array-like, default: 1.5")]),n("td",null,"marker的边缘宽度")]),n("tr",null,[n("td",null,[n("code",null,"edgecolors"),a(": "),n("code",null,"{'face', 'none', None} or color or sequence of color default: 'face'")]),n("td",null,"marker的边缘颜色")])])],-1),h=n("h3",{id:"返回",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#返回","aria-hidden":"true"},"#"),a(" 返回")],-1),b={href:"https://matplotlib.org/stable/api/collections_api.html#matplotlib.collections.PathCollection",target:"_blank",rel:"noopener noreferrer"},v=n("p",null,"参考: https://matplotlib.org/stable/api/_as_gen/matplotlib.axes.Axes.scatter.html",-1);function _(f,x){const s=l("ExternalLinkIcon");return o(),p("div",null,[r,n("p",null,[n("a",i,[a("参考"),t(s)]),d]),k,m,h,n("ol",null,[n("li",null,[a("路径的集合对象"),n("a",b,[a("PathCollection"),t(s)])])]),v])}const N=e(u,[["render",_],["__file","5scatter.html.vue"]]);export{N as default};
