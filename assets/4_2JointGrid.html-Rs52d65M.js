const n=JSON.parse('{"key":"v-56220fe7","path":"/1%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/3%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/8seaborn/4_2JointGrid.html","title":"JointGrid","lang":"zh-CN","frontmatter":{"description":"JointGrid 最佳实践 分别绘制联合分布和边缘分布 import seaborn as sns penguins = sns.load_dataset(\\"penguins\\") g = sns.JointGrid(data=penguins, x=\\"bill_length_mm\\", y=\\"bill_depth_mm\\") g.plot_joint(sns.scatterplot, s=100, alpha=.5) g.plot_marginals(sns.histplot, kde=True) 自定义边缘分布 import seaborn as sns penguins = sns.load_dataset(\\"penguins\\") g = sns.JointGrid() x, y = penguins[\\"bill_length_mm\\"], penguins[\\"bill_depth_mm\\"] sns.scatterplot(x=x, y=y, ec=\\"b\\", fc=\\"none\\", s=100, linewidth=1.5, ax=g.ax_joint) sns.histplot(x=x, fill=False, linewidth=2, ax=g.ax_marg_x) sns.kdeplot(y=y, linewidth=2, ax=g.ax_marg_y)","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/1%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/3%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/8seaborn/4_2JointGrid.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"JointGrid"}],["meta",{"property":"og:description","content":"JointGrid 最佳实践 分别绘制联合分布和边缘分布 import seaborn as sns penguins = sns.load_dataset(\\"penguins\\") g = sns.JointGrid(data=penguins, x=\\"bill_length_mm\\", y=\\"bill_depth_mm\\") g.plot_joint(sns.scatterplot, s=100, alpha=.5) g.plot_marginals(sns.histplot, kde=True) 自定义边缘分布 import seaborn as sns penguins = sns.load_dataset(\\"penguins\\") g = sns.JointGrid() x, y = penguins[\\"bill_length_mm\\"], penguins[\\"bill_depth_mm\\"] sns.scatterplot(x=x, y=y, ec=\\"b\\", fc=\\"none\\", s=100, linewidth=1.5, ax=g.ax_joint) sns.histplot(x=x, fill=False, linewidth=2, ax=g.ax_marg_x) sns.kdeplot(y=y, linewidth=2, ax=g.ax_marg_y)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T10:13:52.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-25T10:13:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JointGrid\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-25T10:13:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[]},{"level":2,"title":"JointGrid","slug":"jointgrid-1","link":"#jointgrid-1","children":[]}],"git":{"createdTime":1740478432000,"updatedTime":1740478432000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.91,"words":273},"filePathRelative":"1机器学习/3分析工具/8seaborn/4_2JointGrid.md","localizedDate":"2025年2月25日","excerpt":"<h1> JointGrid</h1>\\n<h2> 最佳实践</h2>\\n<ol>\\n<li>\\n<p>分别绘制联合分布和边缘分布</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> seaborn <span class=\\"token keyword\\">as</span> sns\\npenguins <span class=\\"token operator\\">=</span> sns<span class=\\"token punctuation\\">.</span>load_dataset<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"penguins\\"</span><span class=\\"token punctuation\\">)</span>\\n\\ng <span class=\\"token operator\\">=</span> sns<span class=\\"token punctuation\\">.</span>JointGrid<span class=\\"token punctuation\\">(</span>data<span class=\\"token operator\\">=</span>penguins<span class=\\"token punctuation\\">,</span> x<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"bill_length_mm\\"</span><span class=\\"token punctuation\\">,</span> y<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"bill_depth_mm\\"</span><span class=\\"token punctuation\\">)</span>\\ng<span class=\\"token punctuation\\">.</span>plot_joint<span class=\\"token punctuation\\">(</span>sns<span class=\\"token punctuation\\">.</span>scatterplot<span class=\\"token punctuation\\">,</span> s<span class=\\"token operator\\">=</span><span class=\\"token number\\">100</span><span class=\\"token punctuation\\">,</span> alpha<span class=\\"token operator\\">=</span><span class=\\"token number\\">.5</span><span class=\\"token punctuation\\">)</span>\\ng<span class=\\"token punctuation\\">.</span>plot_marginals<span class=\\"token punctuation\\">(</span>sns<span class=\\"token punctuation\\">.</span>histplot<span class=\\"token punctuation\\">,</span> kde<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">True</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>自定义边缘分布</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> seaborn <span class=\\"token keyword\\">as</span> sns\\npenguins <span class=\\"token operator\\">=</span> sns<span class=\\"token punctuation\\">.</span>load_dataset<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"penguins\\"</span><span class=\\"token punctuation\\">)</span>\\ng <span class=\\"token operator\\">=</span> sns<span class=\\"token punctuation\\">.</span>JointGrid<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\nx<span class=\\"token punctuation\\">,</span> y <span class=\\"token operator\\">=</span> penguins<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"bill_length_mm\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> penguins<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"bill_depth_mm\\"</span><span class=\\"token punctuation\\">]</span>\\nsns<span class=\\"token punctuation\\">.</span>scatterplot<span class=\\"token punctuation\\">(</span>x<span class=\\"token operator\\">=</span>x<span class=\\"token punctuation\\">,</span> y<span class=\\"token operator\\">=</span>y<span class=\\"token punctuation\\">,</span> ec<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"b\\"</span><span class=\\"token punctuation\\">,</span> fc<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"none\\"</span><span class=\\"token punctuation\\">,</span> s<span class=\\"token operator\\">=</span><span class=\\"token number\\">100</span><span class=\\"token punctuation\\">,</span> linewidth<span class=\\"token operator\\">=</span><span class=\\"token number\\">1.5</span><span class=\\"token punctuation\\">,</span> ax<span class=\\"token operator\\">=</span>g<span class=\\"token punctuation\\">.</span>ax_joint<span class=\\"token punctuation\\">)</span>\\nsns<span class=\\"token punctuation\\">.</span>histplot<span class=\\"token punctuation\\">(</span>x<span class=\\"token operator\\">=</span>x<span class=\\"token punctuation\\">,</span> fill<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">False</span><span class=\\"token punctuation\\">,</span> linewidth<span class=\\"token operator\\">=</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> ax<span class=\\"token operator\\">=</span>g<span class=\\"token punctuation\\">.</span>ax_marg_x<span class=\\"token punctuation\\">)</span>\\nsns<span class=\\"token punctuation\\">.</span>kdeplot<span class=\\"token punctuation\\">(</span>y<span class=\\"token operator\\">=</span>y<span class=\\"token punctuation\\">,</span> linewidth<span class=\\"token operator\\">=</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> ax<span class=\\"token operator\\">=</span>g<span class=\\"token punctuation\\">.</span>ax_marg_y<span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ol>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};
