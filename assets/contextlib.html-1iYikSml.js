const t=JSON.parse('{"key":"v-69c9e74e","path":"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/7%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/%E6%A0%87%E5%87%86%E6%96%B9%E6%B3%95/contextlib.html","title":"contextlib","lang":"zh-CN","frontmatter":{"description":"contextlib from contextlib import contextmanager @contextmanager def wfunc(): print(\\"类似__enter__\\") yield # 这里隔断__enter__和__exit__ print(\\"类似__exit__\\") with wfunc(): print(\\"hello world\\") &gt;&gt;&gt; 类似__enter__ &gt;&gt;&gt; hello world &gt;&gt;&gt; 类似__exit__","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/7%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/%E6%A0%87%E5%87%86%E6%96%B9%E6%B3%95/contextlib.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"contextlib"}],["meta",{"property":"og:description","content":"contextlib from contextlib import contextmanager @contextmanager def wfunc(): print(\\"类似__enter__\\") yield # 这里隔断__enter__和__exit__ print(\\"类似__exit__\\") with wfunc(): print(\\"hello world\\") &gt;&gt;&gt; 类似__enter__ &gt;&gt;&gt; hello world &gt;&gt;&gt; 类似__exit__"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-01T12:59:38.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-12-01T12:59:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"contextlib\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-01T12:59:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1701435578000,"updatedTime":1701435578000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.46,"words":139},"filePathRelative":"编程语言/python/7面向对象/标准方法/contextlib.md","localizedDate":"2023年12月1日","excerpt":"<h1> contextlib</h1>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">from</span> contextlib <span class=\\"token keyword\\">import</span> contextmanager\\n<span class=\\"token decorator annotation punctuation\\">@contextmanager</span>\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">wfunc</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"类似__enter__\\"</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">yield</span> <span class=\\"token comment\\"># 这里隔断__enter__和__exit__</span>\\n    <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"类似__exit__\\"</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token keyword\\">with</span> wfunc<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"hello world\\"</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token operator\\">&gt;&gt;</span><span class=\\"token operator\\">&gt;</span> 类似__enter__\\n<span class=\\"token operator\\">&gt;&gt;</span><span class=\\"token operator\\">&gt;</span> hello world\\n<span class=\\"token operator\\">&gt;&gt;</span><span class=\\"token operator\\">&gt;</span> 类似__exit__\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{t as data};
