import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as p}from"./app-yeyEmHfz.js";const t={},o=p(`<h1 id="常见分布" tabindex="-1"><a class="header-anchor" href="#常见分布" aria-hidden="true">#</a> 常见分布</h1><p>重点掌握:</p><ol><li>正态分布</li><li>指数分布</li><li>卡方分布</li><li>t分布</li><li>f分布</li></ol><p>他们之间的关系:</p><ol><li>正态分布是大一统, 任何分布最终都趋近于正态分布</li><li>指数分布是泊松分布的连续形式</li><li>卡方分布来源于正态分布</li><li>t分布来源于正态分布和卡方分布</li><li>f分布来源于卡方分布</li></ol><p>为了方便确认连续型概率分布的性质, 事先准备了几个函数.<code>E(X)</code>是计算期望的函数, <code>V(X)</code>是计算方差的函数, <code>check_prob</code>将随机变量作为参数, 计算期望值和方差并返回, <code>plot_prob</code>以随机变量和区间为参数的函数, 显示随机变量的密度和分布函数.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
<span class="token keyword">from</span> scipy <span class="token keyword">import</span> stats<span class="token punctuation">,</span> integrate
<span class="token keyword">from</span> scipy<span class="token punctuation">.</span>optimize <span class="token keyword">import</span> minimize_scalar


<span class="token keyword">def</span> <span class="token function">E</span><span class="token punctuation">(</span>X<span class="token punctuation">,</span> g<span class="token operator">=</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span>
    x_range<span class="token punctuation">,</span> f <span class="token operator">=</span> X
    <span class="token keyword">def</span> <span class="token function">integrand</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> g<span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">*</span> f<span class="token punctuation">(</span>x<span class="token punctuation">)</span>
    <span class="token keyword">return</span> integrate<span class="token punctuation">.</span>quad<span class="token punctuation">(</span>integrand<span class="token punctuation">,</span> <span class="token operator">-</span>np<span class="token punctuation">.</span>inf<span class="token punctuation">,</span> np<span class="token punctuation">.</span>inf<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

<span class="token keyword">def</span> <span class="token function">V</span><span class="token punctuation">(</span>X<span class="token punctuation">,</span> g<span class="token operator">=</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span>
    x_range<span class="token punctuation">,</span> f <span class="token operator">=</span> X
    mean <span class="token operator">=</span> E<span class="token punctuation">(</span>X<span class="token punctuation">,</span> g<span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">integrand</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>g<span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">-</span> mean<span class="token punctuation">)</span> <span class="token operator">**</span> <span class="token number">2</span> <span class="token operator">*</span> f<span class="token punctuation">(</span>x<span class="token punctuation">)</span>
    <span class="token keyword">return</span> integrate<span class="token punctuation">.</span>quad<span class="token punctuation">(</span>integrand<span class="token punctuation">,</span> <span class="token operator">-</span>np<span class="token punctuation">.</span>inf<span class="token punctuation">,</span> np<span class="token punctuation">.</span>inf<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

<span class="token keyword">def</span> <span class="token function">check_prob</span><span class="token punctuation">(</span>X<span class="token punctuation">)</span><span class="token punctuation">:</span>
    x_range<span class="token punctuation">,</span> f <span class="token operator">=</span> X
    f_min <span class="token operator">=</span> minimize_scalar<span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">.</span>fun
    <span class="token keyword">assert</span> f_min <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;密度函数取负值&#39;</span>
    prob_sum <span class="token operator">=</span> np<span class="token punctuation">.</span><span class="token builtin">round</span><span class="token punctuation">(</span>integrate<span class="token punctuation">.</span>quad<span class="token punctuation">(</span>f<span class="token punctuation">,</span> <span class="token operator">-</span>np<span class="token punctuation">.</span>inf<span class="token punctuation">,</span> np<span class="token punctuation">.</span>inf<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span>
    <span class="token keyword">assert</span> prob_sum <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-interpolation"><span class="token string">f&#39;概率之和</span><span class="token interpolation"><span class="token punctuation">{</span>prob_sum<span class="token punctuation">}</span></span><span class="token string">等于&#39;</span></span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;期望值为</span><span class="token interpolation"><span class="token punctuation">{</span>E<span class="token punctuation">(</span>X<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token format-spec">.3f</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;方差为</span><span class="token interpolation"><span class="token punctuation">{</span>V<span class="token punctuation">(</span>X<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token format-spec">.3f</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
    
<span class="token keyword">def</span> <span class="token function">plot_prob</span><span class="token punctuation">(</span>X<span class="token punctuation">,</span> x_min<span class="token punctuation">,</span> x_max<span class="token punctuation">)</span><span class="token punctuation">:</span>
    x_range<span class="token punctuation">,</span> f <span class="token operator">=</span> X
    <span class="token keyword">def</span> <span class="token function">F</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> integrate<span class="token punctuation">.</span>quad<span class="token punctuation">(</span>f<span class="token punctuation">,</span> <span class="token operator">-</span>np<span class="token punctuation">.</span>inf<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

    xs <span class="token operator">=</span> np<span class="token punctuation">.</span>linspace<span class="token punctuation">(</span>x_min<span class="token punctuation">,</span> x_max<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>

    fig <span class="token operator">=</span> plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span>figsize<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    ax <span class="token operator">=</span> fig<span class="token punctuation">.</span>add_subplot<span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span>
    ax<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>xs<span class="token punctuation">,</span> <span class="token punctuation">[</span>f<span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token keyword">for</span> x <span class="token keyword">in</span> xs<span class="token punctuation">]</span><span class="token punctuation">,</span>
            label<span class="token operator">=</span><span class="token string">&#39;f(x)&#39;</span><span class="token punctuation">,</span> color<span class="token operator">=</span><span class="token string">&#39;gray&#39;</span><span class="token punctuation">)</span>
    ax<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>xs<span class="token punctuation">,</span> <span class="token punctuation">[</span>F<span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token keyword">for</span> x <span class="token keyword">in</span> xs<span class="token punctuation">]</span><span class="token punctuation">,</span>
            label<span class="token operator">=</span><span class="token string">&#39;F(x)&#39;</span><span class="token punctuation">,</span> ls<span class="token operator">=</span><span class="token string">&#39;--&#39;</span><span class="token punctuation">,</span> color<span class="token operator">=</span><span class="token string">&#39;gray&#39;</span><span class="token punctuation">)</span>

    ax<span class="token punctuation">.</span>legend<span class="token punctuation">(</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),e=[o];function c(l,i){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","常见分布.html.vue"]]);export{r as default};
