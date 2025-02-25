const n=JSON.parse('{"key":"v-45cfa44b","path":"/2%E6%95%B0%E6%8D%AE%E6%8C%96%E6%8E%98/5%E7%BB%9F%E8%AE%A1%E5%AD%A6/2%E6%95%B0%E6%8D%AE%E7%9A%84%E6%90%9C%E9%9B%86/%E6%8A%BD%E6%A0%B7python%E5%AE%9E%E7%8E%B0.html","title":"抽样","lang":"zh-CN","frontmatter":{"description":"抽样 随机抽样, 可以设置有放回或无放回, 以及每个样本的权重. 抽样方法 随机抽样(random sampling)是一种消除抽样偏差的方法, 但随机抽样的结果包含了有偏差的样本的可能性. 多次选择同一样本的抽样方法称为有放回抽样(sampling with replacement) 同一个样本值选择一次的抽样方法称为无放回抽样(sampling without replacement) np.random.choice([1, 2, 3], 3) # 默认有放回抽样 np.random.choice([1, 2, 3], 3, replace=False) # replace=False为无放回抽样 np.random.seed(0) # 设置随机种子可以保证代码的可复现性 np.random.choice([1, 2, 3], 3)","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/2%E6%95%B0%E6%8D%AE%E6%8C%96%E6%8E%98/5%E7%BB%9F%E8%AE%A1%E5%AD%A6/2%E6%95%B0%E6%8D%AE%E7%9A%84%E6%90%9C%E9%9B%86/%E6%8A%BD%E6%A0%B7python%E5%AE%9E%E7%8E%B0.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"抽样"}],["meta",{"property":"og:description","content":"抽样 随机抽样, 可以设置有放回或无放回, 以及每个样本的权重. 抽样方法 随机抽样(random sampling)是一种消除抽样偏差的方法, 但随机抽样的结果包含了有偏差的样本的可能性. 多次选择同一样本的抽样方法称为有放回抽样(sampling with replacement) 同一个样本值选择一次的抽样方法称为无放回抽样(sampling without replacement) np.random.choice([1, 2, 3], 3) # 默认有放回抽样 np.random.choice([1, 2, 3], 3, replace=False) # replace=False为无放回抽样 np.random.seed(0) # 设置随机种子可以保证代码的可复现性 np.random.choice([1, 2, 3], 3)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T10:13:52.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-25T10:13:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"抽样\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-25T10:13:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"抽样方法","slug":"抽样方法","link":"#抽样方法","children":[]},{"level":2,"title":"应用","slug":"应用","link":"#应用","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"返回","slug":"返回","link":"#返回","children":[]}]}],"git":{"createdTime":1740478432000,"updatedTime":1740478432000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.09,"words":328},"filePathRelative":"2数据挖掘/5统计学/2数据的搜集/抽样python实现.md","localizedDate":"2025年2月25日","excerpt":"<h1> 抽样</h1>\\n<p>随机抽样, 可以设置有放回或无放回, 以及每个样本的权重.</p>\\n<h2> 抽样方法</h2>\\n<p>随机抽样(random sampling)是一种消除抽样偏差的方法, 但随机抽样的结果包含了有偏差的样本的可能性.\\n多次选择同一样本的抽样方法称为有放回抽样(sampling with replacement)\\n同一个样本值选择一次的抽样方法称为无放回抽样(sampling without replacement)</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>np<span class=\\"token punctuation\\">.</span>random<span class=\\"token punctuation\\">.</span>choice<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 默认有放回抽样</span>\\nnp<span class=\\"token punctuation\\">.</span>random<span class=\\"token punctuation\\">.</span>choice<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> replace<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">False</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># replace=False为无放回抽样</span>\\nnp<span class=\\"token punctuation\\">.</span>random<span class=\\"token punctuation\\">.</span>seed<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 设置随机种子可以保证代码的可复现性</span>\\nnp<span class=\\"token punctuation\\">.</span>random<span class=\\"token punctuation\\">.</span>choice<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};
