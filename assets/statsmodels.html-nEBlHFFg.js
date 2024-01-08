const t=JSON.parse(`{"key":"v-532b1a6a","path":"/%E6%95%B0%E5%AD%A6/%E7%BB%9F%E8%AE%A1%E5%AD%A6/12%E5%A4%9A%E5%85%83%E7%BA%BF%E6%80%A7%E5%9B%9E%E5%BD%92/statsmodels.html","title":"statsmodels","lang":"zh-CN","frontmatter":{"description":"statsmodels import patsy import statsmodels.api as sm f = 'Rent ~ Zip + Beds' y, X = patsy.dmatrices(f, su_lt_two, return_type='dataframe') results = sm.OLS(y, X).fit() print(results.summary())","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E5%AD%A6/%E7%BB%9F%E8%AE%A1%E5%AD%A6/12%E5%A4%9A%E5%85%83%E7%BA%BF%E6%80%A7%E5%9B%9E%E5%BD%92/statsmodels.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"statsmodels"}],["meta",{"property":"og:description","content":"statsmodels import patsy import statsmodels.api as sm f = 'Rent ~ Zip + Beds' y, X = patsy.dmatrices(f, su_lt_two, return_type='dataframe') results = sm.OLS(y, X).fit() print(results.summary())"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-07T05:43:48.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2024-01-07T05:43:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"statsmodels\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-07T05:43:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1704606228000,"updatedTime":1704606228000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":3.29,"words":987},"filePathRelative":"数学/统计学/12多元线性回归/statsmodels.md","localizedDate":"2024年1月7日","excerpt":"<h1> statsmodels</h1>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> patsy\\n<span class=\\"token keyword\\">import</span> statsmodels<span class=\\"token punctuation\\">.</span>api <span class=\\"token keyword\\">as</span> sm\\nf <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'Rent ~ Zip + Beds'</span>\\ny<span class=\\"token punctuation\\">,</span> X <span class=\\"token operator\\">=</span> patsy<span class=\\"token punctuation\\">.</span>dmatrices<span class=\\"token punctuation\\">(</span>f<span class=\\"token punctuation\\">,</span> su_lt_two<span class=\\"token punctuation\\">,</span> return_type<span class=\\"token operator\\">=</span><span class=\\"token string\\">'dataframe'</span><span class=\\"token punctuation\\">)</span>\\nresults <span class=\\"token operator\\">=</span> sm<span class=\\"token punctuation\\">.</span>OLS<span class=\\"token punctuation\\">(</span>y<span class=\\"token punctuation\\">,</span> X<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>fit<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>results<span class=\\"token punctuation\\">.</span>summary<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{t as data};