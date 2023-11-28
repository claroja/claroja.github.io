import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as p,c as o,a as n,b as c,d as l,e as a}from"./app-yeyEmHfz.js";const i={},r=a(`<h1 id="step" tabindex="-1"><a class="header-anchor" href="#step" aria-hidden="true">#</a> step</h1><p>阶梯图</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt

fig<span class="token punctuation">,</span> axs  <span class="token operator">=</span> plt<span class="token punctuation">.</span>subplots<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>

x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span>
y <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">49</span><span class="token punctuation">]</span>
axs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>plot<span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>
lines <span class="token operator">=</span> axs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>step<span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>

fig<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>`,5),u={href:"https://matplotlib.org/stable/api/_as_gen/matplotlib.axes.Axes.step.html#matplotlib.axes.Axes.step",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"Axes.step(x, y, *args, where='pre', data=None, **kwargs)",-1),k=a('<h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>x</code>: <code>array-like</code></td><td>x轴的值</td></tr><tr><td><code>y</code>: <code>array-like</code></td><td>y轴的值</td></tr></tbody></table><h3 id="返回" tabindex="-1"><a class="header-anchor" href="#返回" aria-hidden="true">#</a> 返回</h3><p><code>Line2D</code>对象的列表</p><p>参考: https://www.geeksforgeeks.org/matplotlib-pyplot-step-function-in-python/</p>',5);function h(b,m){const s=e("ExternalLinkIcon");return p(),o("div",null,[r,n("p",null,[n("a",u,[c("参考"),l(s)]),d]),k])}const _=t(i,[["render",h],["__file","step.html.vue"]]);export{_ as default};
