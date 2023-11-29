const n=JSON.parse('{"key":"v-bb4d3f22","path":"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/%E5%A4%9A%E7%BA%BF%E7%A8%8B/pool.html","title":"pool","lang":"zh-CN","frontmatter":{"description":"pool 创建多个线程 from concurrent.futures import ThreadPoolExecutor def func(p): return p*p if __name__ == \\"__main__\\": r_lst = [] tp = ThreadPoolExecutor(5) for i in range(10): ret = tp.submit(func, i) r_lst.append(ret) tp.shutdown() # 阻塞，就有线程池完成任务才继续向下执行 [print(ret.result()) for ret in r_lst]","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/%E5%A4%9A%E7%BA%BF%E7%A8%8B/pool.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"pool"}],["meta",{"property":"og:description","content":"pool 创建多个线程 from concurrent.futures import ThreadPoolExecutor def func(p): return p*p if __name__ == \\"__main__\\": r_lst = [] tp = ThreadPoolExecutor(5) for i in range(10): ret = tp.submit(func, i) r_lst.append(ret) tp.shutdown() # 阻塞，就有线程池完成任务才继续向下执行 [print(ret.result()) for ret in r_lst]"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T13:17:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-27T13:17:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"pool\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-27T13:17:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1701091021000,"updatedTime":1701091021000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.2,"words":61},"filePathRelative":"编程语言/python/多线程/pool.md","localizedDate":"2023年11月27日","excerpt":"<h1> pool</h1>\\n<p>创建多个线程</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">from</span> concurrent<span class=\\"token punctuation\\">.</span>futures <span class=\\"token keyword\\">import</span> ThreadPoolExecutor\\n\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">func</span><span class=\\"token punctuation\\">(</span>p<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">return</span> p<span class=\\"token operator\\">*</span>p\\n\\n<span class=\\"token keyword\\">if</span> __name__ <span class=\\"token operator\\">==</span> <span class=\\"token string\\">\\"__main__\\"</span><span class=\\"token punctuation\\">:</span>\\n    r_lst <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span>\\n    tp <span class=\\"token operator\\">=</span> ThreadPoolExecutor<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">5</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">for</span> i <span class=\\"token keyword\\">in</span> <span class=\\"token builtin\\">range</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">10</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        ret <span class=\\"token operator\\">=</span> tp<span class=\\"token punctuation\\">.</span>submit<span class=\\"token punctuation\\">(</span>func<span class=\\"token punctuation\\">,</span> i<span class=\\"token punctuation\\">)</span>\\n        r_lst<span class=\\"token punctuation\\">.</span>append<span class=\\"token punctuation\\">(</span>ret<span class=\\"token punctuation\\">)</span>\\n    tp<span class=\\"token punctuation\\">.</span>shutdown<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 阻塞，就有线程池完成任务才继续向下执行</span>\\n    <span class=\\"token punctuation\\">[</span><span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>ret<span class=\\"token punctuation\\">.</span>result<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">for</span> ret <span class=\\"token keyword\\">in</span> r_lst<span class=\\"token punctuation\\">]</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};