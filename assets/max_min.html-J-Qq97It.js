const a=JSON.parse(`{"key":"v-7520a358","path":"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/6%E6%96%B9%E6%B3%95(function)/max_min.html","title":"max&min","lang":"zh-CN","frontmatter":{"description":"max&amp;min sorted get the key of max value in a dictionary, the key point is that max()'s second parameters' lambda's x is dictionary's key. stats = {'a': 1, 'b': 2, 'c': 3} max(stats, key=stats.get) max(stats, key=lambda x:stats.get(x)) max(stats, key=lambda x:stats[x])","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/6%E6%96%B9%E6%B3%95(function)/max_min.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"max&min"}],["meta",{"property":"og:description","content":"max&amp;min sorted get the key of max value in a dictionary, the key point is that max()'s second parameters' lambda's x is dictionary's key. stats = {'a': 1, 'b': 2, 'c': 3} max(stats, key=stats.get) max(stats, key=lambda x:stats.get(x)) max(stats, key=lambda x:stats[x])"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-01T12:59:38.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-12-01T12:59:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"max&min\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-01T12:59:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1701435578000,"updatedTime":1701435578000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.29,"words":87},"filePathRelative":"编程语言/python/6方法(function)/max&min.md","localizedDate":"2023年12月1日","excerpt":"<h1> max&amp;min</h1>\\n<p>sorted</p>\\n<p>get the <code>key</code> of max value in a dictionary, the key point is that <code>max()</code>'s second parameters' <code>lambda</code>'s <code>x</code> is dictionary's <code>key</code>.</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>stats <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token string\\">'a'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'b'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'c'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">}</span>\\n<span class=\\"token builtin\\">max</span><span class=\\"token punctuation\\">(</span>stats<span class=\\"token punctuation\\">,</span> key<span class=\\"token operator\\">=</span>stats<span class=\\"token punctuation\\">.</span>get<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token builtin\\">max</span><span class=\\"token punctuation\\">(</span>stats<span class=\\"token punctuation\\">,</span> key<span class=\\"token operator\\">=</span><span class=\\"token keyword\\">lambda</span> x<span class=\\"token punctuation\\">:</span>stats<span class=\\"token punctuation\\">.</span>get<span class=\\"token punctuation\\">(</span>x<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token builtin\\">max</span><span class=\\"token punctuation\\">(</span>stats<span class=\\"token punctuation\\">,</span> key<span class=\\"token operator\\">=</span><span class=\\"token keyword\\">lambda</span> x<span class=\\"token punctuation\\">:</span>stats<span class=\\"token punctuation\\">[</span>x<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{a as data};