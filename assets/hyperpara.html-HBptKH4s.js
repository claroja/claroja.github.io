import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as l,c as p,e as n,a as s,b as a}from"./app-qxiCM96p.js";const e="/assets/1-Hy86dXpz.png",c={},o=n('<h1 id="hyperpara" tabindex="-1"><a class="header-anchor" href="#hyperpara" aria-hidden="true">#</a> hyperpara</h1><p>超参数(hyper-parameter)是指各层的神经元数量,batch大小,参数更新的学习率等.</p><h2 id="验证数据" tabindex="-1"><a class="header-anchor" href="#验证数据" aria-hidden="true">#</a> 验证数据</h2><p>我们将数据集分为训练数据和测试数据, 训练数据用于学习, 测试数据用来评估泛化能力.</p><p>我们要对超参数设置各种各样的值以进行验证. 需要注意: 不能使用测试数据集评估超参数的性能. 因为使用测试数据调整超参数, 超参数的值会对测试数据发生过拟合. 换句话说, 用测试数据确认超参数的值的&quot;好坏&quot;, 会导致超参数的值被调整为只拟合测试数据, 泛化能力就会降低.</p><p>因此, 调整超参数时, 必须使用超参数专用的确认数据, 我们称为验证数据(validation data).</p><h2 id="超参数的最优化" tabindex="-1"><a class="header-anchor" href="#超参数的最优化" aria-hidden="true">#</a> 超参数的最优化</h2><p>进行超参数的最优化时, 是指一开始先大致设定一个范围，从这个范围中随机选出一个超参数（采样），用这个采样到的值进行识别精度的评估；然后，多次重复该操作，观察识别精度的结果.</p>',8),m=s("p",null,[a("最初使用"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("msup",null,[s("mn",null,"0"),s("mrow",null,[s("mo",null,"−"),s("mn",null,"3")])]),s("mo",{separator:"true"},","),s("mn",null,"1"),s("msup",null,[s("mn",null,"0"),s("mn",null,"3")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"(10^{-3},10^3)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mord"},[s("span",{class:"mord"},"0"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"−"),s("span",{class:"mord mtight"},"3")])])])])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mord"},[s("span",{class:"mord"},"0"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"3")])])])])])])]),s("span",{class:"mclose"},")")])])]),a("随机采样进行超参数验证. 权重衰减系数的初始范围为"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("msup",null,[s("mn",null,"0"),s("mrow",null,[s("mo",null,"−"),s("mn",null,"8")])]),s("mo",{separator:"true"},","),s("mn",null,"1"),s("msup",null,[s("mn",null,"0"),s("mrow",null,[s("mo",null,"−"),s("mn",null,"10")])]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"(10^{-8},10^{-10})")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mord"},[s("span",{class:"mord"},"0"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"−"),s("span",{class:"mord mtight"},"8")])])])])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mord"},[s("span",{class:"mord"},"0"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"−"),s("span",{class:"mord mtight"},"10")])])])])])])])]),s("span",{class:"mclose"},")")])])]),a("; 学习率的初始范围为"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("msup",null,[s("mn",null,"0"),s("mrow",null,[s("mo",null,"−"),s("mn",null,"6")])]),s("mo",{separator:"true"},","),s("mn",null,"1"),s("msup",null,[s("mn",null,"0"),s("mrow",null,[s("mo",null,"−"),s("mn",null,"2")])]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"(10^{-6},10^{-2})")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mord"},[s("span",{class:"mord"},"0"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"−"),s("span",{class:"mord mtight"},"6")])])])])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mord"},[s("span",{class:"mord"},"0"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"−"),s("span",{class:"mord mtight"},"2")])])])])])])])]),s("span",{class:"mclose"},")")])])]),a(":")],-1),i=n(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>weight_decay <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">**</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>uniform<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">)</span>
lr <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">**</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>uniform<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>多次使用各种超参数的值重复进行学习, 观察合乎逻辑的超参数在哪.如图: <img src="`+e+`" alt="" loading="lazy"> 可以看到best前5学习都很顺利, 结果如下:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Best<span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">(</span>val acc<span class="token punctuation">:</span><span class="token number">0.83</span><span class="token punctuation">)</span> <span class="token operator">|</span> lr<span class="token punctuation">:</span><span class="token number">0.0092</span><span class="token punctuation">,</span> weight decay<span class="token punctuation">:</span><span class="token number">3.86e-07</span>
Best<span class="token operator">-</span><span class="token number">2</span> <span class="token punctuation">(</span>val acc<span class="token punctuation">:</span><span class="token number">0.78</span><span class="token punctuation">)</span> <span class="token operator">|</span> lr<span class="token punctuation">:</span><span class="token number">0.00956</span><span class="token punctuation">,</span> weight decay<span class="token punctuation">:</span><span class="token number">6.04e-07</span>
Best<span class="token operator">-</span><span class="token number">3</span> <span class="token punctuation">(</span>val acc<span class="token punctuation">:</span><span class="token number">0.77</span><span class="token punctuation">)</span> <span class="token operator">|</span> lr<span class="token punctuation">:</span><span class="token number">0.00571</span><span class="token punctuation">,</span> weight decay<span class="token punctuation">:</span><span class="token number">1.27e-06</span>
Best<span class="token operator">-</span><span class="token number">4</span> <span class="token punctuation">(</span>val acc<span class="token punctuation">:</span><span class="token number">0.74</span><span class="token punctuation">)</span> <span class="token operator">|</span> lr<span class="token punctuation">:</span><span class="token number">0.00626</span><span class="token punctuation">,</span> weight decay<span class="token punctuation">:</span><span class="token number">1.43e-05</span>
Best<span class="token operator">-</span><span class="token number">5</span> <span class="token punctuation">(</span>val acc<span class="token punctuation">:</span><span class="token number">0.73</span><span class="token punctuation">)</span> <span class="token operator">|</span> lr<span class="token punctuation">:</span><span class="token number">0.0052</span><span class="token punctuation">,</span> weight decay<span class="token punctuation">:</span><span class="token number">8.97e-06</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),r=s("p",null,[a("可以看出学习率在0.001到0.01, 权重衰减系数在"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1"),s("msup",null,[s("mn",null,"0"),s("mrow",null,[s("mo",null,"−"),s("mn",null,"8")])]),s("mtext",null,"到"),s("mn",null,"1"),s("msup",null,[s("mn",null,"0"),s("mrow",null,[s("mo",null,"−"),s("mn",null,"6")])])]),s("annotation",{encoding:"application/x-tex"},"10^{-8}到10^{-6}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mord"},[s("span",{class:"mord"},"0"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"−"),s("span",{class:"mord mtight"},"8")])])])])])])])]),s("span",{class:"mord cjk_fallback"},"到"),s("span",{class:"mord"},"1"),s("span",{class:"mord"},[s("span",{class:"mord"},"0"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"−"),s("span",{class:"mord mtight"},"6")])])])])])])])])])])]),a("之间时学习可以顺利进行.")],-1),u=[o,m,i,r];function h(d,g){return l(),p("div",null,u)}const y=t(c,[["render",h],["__file","hyperpara.html.vue"]]);export{y as default};
