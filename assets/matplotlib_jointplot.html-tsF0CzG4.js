const n=JSON.parse(`{"key":"v-2cdde143","path":"/%E6%95%B0%E5%AD%A6/%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/matplotlib-%E6%9C%AA%E5%88%86%E7%B1%BB/matplotlib_jointplot.html","title":"jointplot","lang":"zh-CN","frontmatter":{"description":"jointplot import pandas as pd import matplotlib.pyplot as plt from matplotlib.gridspec import GridSpec df = pd.read_csv('iris.csv') fig = plt.figure() gs = GridSpec(4, 4) ax_scatter = fig.add_subplot(gs[1:4, 0:3]) ax_hist_x = fig.add_subplot(gs[0,0:3]) ax_hist_y = fig.add_subplot(gs[1:4, 3]) ax_scatter.scatter(df['SepalLengthCm'], df['SepalWidthCm']) ax_hist_x.hist(df['SepalLengthCm']) ax_hist_y.hist(df['SepalWidthCm'], orientation = 'horizontal') plt.show()","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E5%AD%A6/%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/matplotlib-%E6%9C%AA%E5%88%86%E7%B1%BB/matplotlib_jointplot.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"jointplot"}],["meta",{"property":"og:description","content":"jointplot import pandas as pd import matplotlib.pyplot as plt from matplotlib.gridspec import GridSpec df = pd.read_csv('iris.csv') fig = plt.figure() gs = GridSpec(4, 4) ax_scatter = fig.add_subplot(gs[1:4, 0:3]) ax_hist_x = fig.add_subplot(gs[0,0:3]) ax_hist_y = fig.add_subplot(gs[1:4, 3]) ax_scatter.scatter(df['SepalLengthCm'], df['SepalWidthCm']) ax_hist_x.hist(df['SepalLengthCm']) ax_hist_y.hist(df['SepalWidthCm'], orientation = 'horizontal') plt.show()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"jointplot\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.68,"words":205},"filePathRelative":"数学/分析工具/matplotlib-未分类/matplotlib_jointplot.md","localizedDate":"2023年11月25日","excerpt":"<h1> jointplot</h1>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> pandas <span class=\\"token keyword\\">as</span> pd\\n<span class=\\"token keyword\\">import</span> matplotlib<span class=\\"token punctuation\\">.</span>pyplot <span class=\\"token keyword\\">as</span> plt\\n<span class=\\"token keyword\\">from</span> matplotlib<span class=\\"token punctuation\\">.</span>gridspec <span class=\\"token keyword\\">import</span> GridSpec\\n\\ndf <span class=\\"token operator\\">=</span> pd<span class=\\"token punctuation\\">.</span>read_csv<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'iris.csv'</span><span class=\\"token punctuation\\">)</span>\\n\\nfig <span class=\\"token operator\\">=</span> plt<span class=\\"token punctuation\\">.</span>figure<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\ngs <span class=\\"token operator\\">=</span> GridSpec<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">4</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">4</span><span class=\\"token punctuation\\">)</span>\\n\\nax_scatter <span class=\\"token operator\\">=</span> fig<span class=\\"token punctuation\\">.</span>add_subplot<span class=\\"token punctuation\\">(</span>gs<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">:</span><span class=\\"token number\\">4</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">:</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\nax_hist_x <span class=\\"token operator\\">=</span> fig<span class=\\"token punctuation\\">.</span>add_subplot<span class=\\"token punctuation\\">(</span>gs<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">:</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\nax_hist_y <span class=\\"token operator\\">=</span> fig<span class=\\"token punctuation\\">.</span>add_subplot<span class=\\"token punctuation\\">(</span>gs<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">:</span><span class=\\"token number\\">4</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n\\nax_scatter<span class=\\"token punctuation\\">.</span>scatter<span class=\\"token punctuation\\">(</span>df<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'SepalLengthCm'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> df<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'SepalWidthCm'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n\\nax_hist_x<span class=\\"token punctuation\\">.</span>hist<span class=\\"token punctuation\\">(</span>df<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'SepalLengthCm'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\nax_hist_y<span class=\\"token punctuation\\">.</span>hist<span class=\\"token punctuation\\">(</span>df<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'SepalWidthCm'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> orientation <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'horizontal'</span><span class=\\"token punctuation\\">)</span>\\n\\nplt<span class=\\"token punctuation\\">.</span>show<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};