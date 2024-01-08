import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as p,c as i,a as s,b as a,d as n,e as l}from"./app-YE2Hltoy.js";const r={},c=l(`<h1 id="statsmodels" tabindex="-1"><a class="header-anchor" href="#statsmodels" aria-hidden="true">#</a> statsmodels</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> patsy
<span class="token keyword">import</span> statsmodels<span class="token punctuation">.</span>api <span class="token keyword">as</span> sm
f <span class="token operator">=</span> <span class="token string">&#39;Rent ~ Zip + Beds&#39;</span>
y<span class="token punctuation">,</span> X <span class="token operator">=</span> patsy<span class="token punctuation">.</span>dmatrices<span class="token punctuation">(</span>f<span class="token punctuation">,</span> su_lt_two<span class="token punctuation">,</span> return_type<span class="token operator">=</span><span class="token string">&#39;dataframe&#39;</span><span class="token punctuation">)</span>
results <span class="token operator">=</span> sm<span class="token punctuation">.</span>OLS<span class="token punctuation">(</span>y<span class="token punctuation">,</span> X<span class="token punctuation">)</span><span class="token punctuation">.</span>fit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>results<span class="token punctuation">.</span>summary<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>Dep. Variable: Which variable is the response in the model</p><p>输出Y变量的名称</p></li><li><p>Model: What model you are using in the fit</p><p>使用的模型, 这里是OLS(普通最小二乘, ordinary least squares)</p></li><li><p>Method: How the parameters of the model were calculated</p><p>求解方法: 这里是Least Squares(最小二乘法)</p></li><li><p>Date</p></li><li><p>Time</p></li><li><p>No. Observations: The number of observations (examples)</p><p>样本数目</p></li><li><p>DF Residuals: Degrees of freedom of the residuals. Number of observations - number of parameters</p><p>残差的自由度（等于 观测数(No. Observations)-参数数目(Df Model+1(常量参数))）</p></li><li><p>Df Model: 模型参数个数（不包含常量参数），对应于coef中的行数</p></li><li><p>R-squared: The coefficient of determination. A statistical measure of how well the regression line approximates the real data points</p><p>决定系数, 正常取值范围为[0 1]，越接近1，表明方程的变量对y的解释能力越强，这个模型对数据拟合的也较好</p></li><li><p>Adj.R-squared: The above value adjusted based on the number of observations and the degrees-of-freedom of the residuals</p><p>调整决定系数</p></li><li><p>F-statistic: A measure how significant the fit is. The mean squared error of the model divided by the mean squared error of the residuals</p><p>衡量拟合的显著性, 重要程度。模型的均方误差除以残差的均方误差,值越大,H0 越不可能</p></li><li><p>Prob (F-statistic)</p><ul><li>当prob（F-statistic）&lt;α时，表示拒绝原假设，即认为模型是显著的；</li><li>当prob（F-statistic）&gt;α时，表示接受原假设，即认为模型不是显著的</li></ul></li><li><p>Log-likelihood</p></li><li><p>AIC: Akaike Information Criterion AIC=2k+nln(SSR/n)</p><p>衡量拟合优良性,选择AIC 最小的模型, 引入了惩罚项,避免参数过多,过拟合</p></li><li><p>BIC</p><p>BIC相比AIC在大数据量时对模型参数惩罚得更多，导致BIC更倾向于选择参数少的简单模型。</p></li><li><p>coef: 系数 const表示常数项</p></li><li><p>std err :系数估计的基本标准误差</p></li><li><p>t 统计值,衡量系数统计显著程度的指标</p></li><li><p>P&gt;|t| : 系数=0的零假设为真的P值。如果它小于置信水平，通常为0.05，则表明该术语与响应之间存在统计上显着的关系。</p></li><li></li></ol><p>Omnibus :属于一种统计测验,测试一组数据中已解释方差是否显著大于未解释方差,但omnibus不显著,模型也可能存在合法的显著影响, 比如两个变量中有一个不显著,即便另一个显著.通常用于对比 Prob(Omnibus):将上面的统计数据变成概率</p><p>Durbin-Watson : 残差是否符合正态分布,在2左右说明是服从正态分布的,偏离2太远,解释能力受影响 是否自相关, 受到前后影响 ,与表中上限进行比较,如果D&gt;上限 不存在相关性 . D&lt;下限 存在正相关性,在上下限之间,无法得出结论 Skewness: 偏度, 关于平均值的数据对称性的度量。正态分布误差应是关于平均值对称的分布。 Kurtosis: 峰度, 分布形状的量度,比较接近均值与远离均值的数据量 如果大于三,说明峰的形状比较陡峭,形状较尖 正态分布的峰度（系数）为常数3，均匀分布的峰度（系数）为常数1.8 Jarque-Bera(JB) : Jarque–Bera检验是对样本数据是否具有符合正态分布的偏度和峰度的拟合优度的检验。 其统计测试结果总是非负的。如果结果远大于零，则表示数据不具有正态分布。</p><p>Prob(JB): 上面统计量的概率形式</p><p>Cond. No :多重共线性测试(如果多个参数,这些参数是否相互关联)</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,8),d={href:"https://blog.csdn.net/zm147451753/article/details/83107535",target:"_blank",rel:"noopener noreferrer"},u={href:"https://blog.csdn.net/weixin_44090397/article/details/97922297",target:"_blank",rel:"noopener noreferrer"};function m(h,k){const e=o("ExternalLinkIcon");return p(),i("div",null,[c,s("ul",null,[s("li",null,[s("a",d,[a("statsmodels中的summary解读（使用OLS）"),n(e)])]),s("li",null,[s("a",u,[a("看懂python3 之statsmodels包summary的参数解释"),n(e)])])])])}const v=t(r,[["render",m],["__file","statsmodels.html.vue"]]);export{v as default};