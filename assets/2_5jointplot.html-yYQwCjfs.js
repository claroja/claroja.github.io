const n=JSON.parse('{"key":"v-b3092426","path":"/1%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/3%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/8seaborn/2_5jointplot.html","title":"jointplot","lang":"zh-CN","frontmatter":{"description":"jointplot 最佳实践 绘制联合分布和边缘分布 import seaborn as sns penguins = sns.load_dataset(\\"penguins\\") sns.jointplot(data=penguins, x=\\"bill_length_mm\\", y=\\"bill_depth_mm\\", hue=\\"species\\") 自定义联合分布和边缘分布 import seaborn as sns penguins = sns.load_dataset(\\"penguins\\") g = sns.jointplot(data=penguins, x=\\"bill_length_mm\\", y=\\"bill_depth_mm\\") g.plot_joint(sns.kdeplot, color=\\"r\\", zorder=0, levels=6) g.plot_marginals(sns.rugplot, color=\\"r\\", height=-.15, clip_on=False)","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/1%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/3%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/8seaborn/2_5jointplot.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"jointplot"}],["meta",{"property":"og:description","content":"jointplot 最佳实践 绘制联合分布和边缘分布 import seaborn as sns penguins = sns.load_dataset(\\"penguins\\") sns.jointplot(data=penguins, x=\\"bill_length_mm\\", y=\\"bill_depth_mm\\", hue=\\"species\\") 自定义联合分布和边缘分布 import seaborn as sns penguins = sns.load_dataset(\\"penguins\\") g = sns.jointplot(data=penguins, x=\\"bill_length_mm\\", y=\\"bill_depth_mm\\") g.plot_joint(sns.kdeplot, color=\\"r\\", zorder=0, levels=6) g.plot_marginals(sns.rugplot, color=\\"r\\", height=-.15, clip_on=False)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T10:13:52.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-25T10:13:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"jointplot\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-25T10:13:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[]},{"level":2,"title":"jointplot","slug":"jointplot-1","link":"#jointplot-1","children":[]},{"level":2,"title":"jointplot","slug":"jointplot-2","link":"#jointplot-2","children":[]}],"git":{"createdTime":1740478432000,"updatedTime":1740478432000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.83,"words":250},"filePathRelative":"1机器学习/3分析工具/8seaborn/2_5jointplot.md","localizedDate":"2025年2月25日","excerpt":"<h1> jointplot</h1>\\n<h2> 最佳实践</h2>\\n<ol>\\n<li>\\n<p>绘制联合分布和边缘分布</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> seaborn <span class=\\"token keyword\\">as</span> sns\\npenguins <span class=\\"token operator\\">=</span> sns<span class=\\"token punctuation\\">.</span>load_dataset<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"penguins\\"</span><span class=\\"token punctuation\\">)</span>\\nsns<span class=\\"token punctuation\\">.</span>jointplot<span class=\\"token punctuation\\">(</span>data<span class=\\"token operator\\">=</span>penguins<span class=\\"token punctuation\\">,</span> x<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"bill_length_mm\\"</span><span class=\\"token punctuation\\">,</span> y<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"bill_depth_mm\\"</span><span class=\\"token punctuation\\">,</span> hue<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"species\\"</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>自定义联合分布和边缘分布</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> seaborn <span class=\\"token keyword\\">as</span> sns\\npenguins <span class=\\"token operator\\">=</span> sns<span class=\\"token punctuation\\">.</span>load_dataset<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"penguins\\"</span><span class=\\"token punctuation\\">)</span>\\ng <span class=\\"token operator\\">=</span> sns<span class=\\"token punctuation\\">.</span>jointplot<span class=\\"token punctuation\\">(</span>data<span class=\\"token operator\\">=</span>penguins<span class=\\"token punctuation\\">,</span> x<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"bill_length_mm\\"</span><span class=\\"token punctuation\\">,</span> y<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"bill_depth_mm\\"</span><span class=\\"token punctuation\\">)</span>\\ng<span class=\\"token punctuation\\">.</span>plot_joint<span class=\\"token punctuation\\">(</span>sns<span class=\\"token punctuation\\">.</span>kdeplot<span class=\\"token punctuation\\">,</span> color<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"r\\"</span><span class=\\"token punctuation\\">,</span> zorder<span class=\\"token operator\\">=</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> levels<span class=\\"token operator\\">=</span><span class=\\"token number\\">6</span><span class=\\"token punctuation\\">)</span>\\ng<span class=\\"token punctuation\\">.</span>plot_marginals<span class=\\"token punctuation\\">(</span>sns<span class=\\"token punctuation\\">.</span>rugplot<span class=\\"token punctuation\\">,</span> color<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"r\\"</span><span class=\\"token punctuation\\">,</span> height<span class=\\"token operator\\">=</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">.15</span><span class=\\"token punctuation\\">,</span> clip_on<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">False</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ol>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};
