import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as p,a as s,b as n,e as l}from"./app-yeyEmHfz.js";const e="/assets/1-cH-yrQfN.png",c={},o=s("h1",{id:"大数定律",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#大数定律","aria-hidden":"true"},"#"),n(" 大数定律")],-1),i=s("h2",{id:"大数定律-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#大数定律-1","aria-hidden":"true"},"#"),n(" 大数定律")],-1),u=s("p",null,"与样本平均值相关的定理中, 与中心极限定理同样重要的还有大数定律(law of large numbers).大数定律主张样本容量越大, 样本平均值越趋向于收敛到总体平均值. 例如, 多次掷骰子, 出现6点的概率接近1/6.",-1),r=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mtext",null,"随机变量"),s("msub",null,[s("mi",null,"X"),s("mn",null,"1")]),s("mo",{separator:"true"},","),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"X"),s("mi",null,"n")]),s("mtext",null,"相互独立地分布于平均值为"),s("mi",null,"μ"),s("mo",{separator:"true"},","),s("mtext",null,"且方差为"),s("msup",null,[s("mi",null,"σ"),s("mn",null,"2")]),s("mtext",null,"的概率分布时"),s("mo",{separator:"true"},","),s("mtext",null,"随着"),s("mi",null,"n"),s("mtext",null,"的增加"),s("mo",{separator:"true"},","),s("mtext",null,"样本平均值将收敛到"),s("mi",null,"μ")]),s("annotation",{encoding:"application/x-tex"}," 随机变量X_1,...,X_n相互独立地分布于平均值为\\mu,且方差为\\sigma^2的概率分布时, 随着n的增加, 样本平均值将收敛到\\mu ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0585em","vertical-align":"-0.1944em"}}),s("span",{class:"mord cjk_fallback"},"随机变量"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0785em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"..."),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0785em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord cjk_fallback"},"相互独立地分布于平均值为"),s("span",{class:"mord mathnormal"},"μ"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord cjk_fallback"},"且方差为"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"σ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mord cjk_fallback"},"的概率分布时"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord cjk_fallback"},"随着"),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mord cjk_fallback"},"的增加"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord cjk_fallback"},"样本平均值将收敛到"),s("span",{class:"mord mathnormal"},"μ")])])])])],-1),m=l(`<p>下面试着确认一下掷骰子出现6点的概率是否满足大数定律. 因为每次的试验都服从Bern(1/6), 随着样本容量的变大, 样本平均值应该能收敛到1/6. 在此先做4次样本容量为10万的随机抽样.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>p <span class="token operator">=</span> <span class="token number">1</span><span class="token operator">/</span><span class="token number">6</span>
rv <span class="token operator">=</span> stats<span class="token punctuation">.</span>bernoulli<span class="token punctuation">(</span>p<span class="token punctuation">)</span>

n <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token number">1e5</span><span class="token punctuation">)</span>
sample <span class="token operator">=</span> rv<span class="token punctuation">.</span>rvs<span class="token punctuation">(</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
space <span class="token operator">=</span> np<span class="token punctuation">.</span>linspace<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">.</span>astype<span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>
plot_list <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span>np<span class="token punctuation">.</span>mean<span class="token punctuation">(</span>sample<span class="token punctuation">[</span><span class="token punctuation">:</span>sp<span class="token punctuation">]</span><span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
                      <span class="token keyword">for</span> sp <span class="token keyword">in</span> space<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>T
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过4次随机抽样, 逐渐增加计算样本平均值时使用的样本容量, 样本平均值发生变化的图像如下:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fig <span class="token operator">=</span> plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span>figsize<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
ax <span class="token operator">=</span> fig<span class="token punctuation">.</span>add_subplot<span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> pl<span class="token punctuation">,</span> ls <span class="token keyword">in</span> <span class="token builtin">zip</span><span class="token punctuation">(</span>plot_list<span class="token punctuation">,</span> linestyles<span class="token punctuation">)</span><span class="token punctuation">:</span>
    ax<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>space<span class="token punctuation">,</span> pl<span class="token punctuation">,</span> ls<span class="token operator">=</span>ls<span class="token punctuation">,</span> color<span class="token operator">=</span><span class="token string">&#39;gray&#39;</span><span class="token punctuation">)</span>
ax<span class="token punctuation">.</span>hlines<span class="token punctuation">(</span>p<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> <span class="token string">&#39;k&#39;</span><span class="token punctuation">)</span>
ax<span class="token punctuation">.</span>set_xlabel<span class="token punctuation">(</span><span class="token string">&#39;样本容量&#39;</span><span class="token punctuation">)</span>
ax<span class="token punctuation">.</span>set_ylabel<span class="token punctuation">(</span><span class="token string">&#39;样本平均值&#39;</span><span class="token punctuation">)</span>

plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>样本容量小时可能有偏差, 但是随着样本容量变大, 无论哪次随机抽样, 其结果都接近1/6.</p>',6),k=[o,i,u,r,m];function d(h,g){return t(),p("div",null,k)}const _=a(c,[["render",d],["__file","大数定律.html.vue"]]);export{_ as default};
