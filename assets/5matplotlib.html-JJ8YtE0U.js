const n=JSON.parse('{"key":"v-3ff4d46e","path":"/1%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/3%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/8seaborn/5matplotlib.html","title":"","lang":"zh-CN","frontmatter":{"description":"通过axes_level方法, 返回的axes对象直接控制artist对象: ax = sns.scatterplot(...) ax.set( xlabel=\\"The x label\\", ylabel=\\"The y label\\", title=\\"The title\\" xlim=(xmin, xmax), xticks=[...], xticklabels=[...], ) 通过figure-level方法, 该方法不能直接调用axes对象, 而是返回一个FacetGrid对象, 其中包含了axes对象. 如果是单个axes: g = sns.displot(...) g.ax.set(...) 如果是多个axes, 适用FacetGrid.axes(二维数组)来定位 g = sns.displot(..., col=...) g.axes","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/1%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/3%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/8seaborn/5matplotlib.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:description","content":"通过axes_level方法, 返回的axes对象直接控制artist对象: ax = sns.scatterplot(...) ax.set( xlabel=\\"The x label\\", ylabel=\\"The y label\\", title=\\"The title\\" xlim=(xmin, xmax), xticks=[...], xticklabels=[...], ) 通过figure-level方法, 该方法不能直接调用axes对象, 而是返回一个FacetGrid对象, 其中包含了axes对象. 如果是单个axes: g = sns.displot(...) g.ax.set(...) 如果是多个axes, 适用FacetGrid.axes(二维数组)来定位 g = sns.displot(..., col=...) g.axes"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T10:13:52.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-25T10:13:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-25T10:13:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1740478432000,"updatedTime":1740478432000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.48,"words":145},"filePathRelative":"1机器学习/3分析工具/8seaborn/5matplotlib.md","localizedDate":"2025年2月25日","excerpt":"<ol>\\n<li>\\n<p>通过axes_level方法, 返回的axes对象直接控制artist对象:</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>ax <span class=\\"token operator\\">=</span> sns<span class=\\"token punctuation\\">.</span>scatterplot<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">)</span>\\nax<span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">set</span><span class=\\"token punctuation\\">(</span>\\n    xlabel<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"The x label\\"</span><span class=\\"token punctuation\\">,</span>\\n    ylabel<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"The y label\\"</span><span class=\\"token punctuation\\">,</span>\\n    title<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"The title\\"</span>\\n    xlim<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">(</span>xmin<span class=\\"token punctuation\\">,</span> xmax<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    xticks<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n    xticklabels<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>通过figure-level方法, 该方法不能直接调用axes对象, 而是返回一个FacetGrid对象, 其中包含了axes对象.</p>\\n<ol>\\n<li>\\n<p>如果是单个axes:</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>g <span class=\\"token operator\\">=</span> sns<span class=\\"token punctuation\\">.</span>displot<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">)</span>\\ng<span class=\\"token punctuation\\">.</span>ax<span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">set</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>如果是多个axes, 适用FacetGrid.axes(二维数组)来定位</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>g <span class=\\"token operator\\">=</span> sns<span class=\\"token punctuation\\">.</span>displot<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">,</span> col<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">)</span>\\ng<span class=\\"token punctuation\\">.</span>axes\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ol>\\n</li>\\n</ol>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};
