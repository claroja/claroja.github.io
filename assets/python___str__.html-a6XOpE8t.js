const n=JSON.parse(`{"key":"v-41791ef2","path":"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/%E6%A0%87%E5%87%86%E6%96%B9%E6%B3%95/python___str__.html","title":"str","lang":"zh-CN","frontmatter":{"description":"str __str__(self)可以来控制print()和str()方法的返回 class Person(): def __str__(self): return \\"重写了父类的__str__方法\\" wang = Person() # 创建实例 str(wang) # '重写了父类的__str__方法' print(str(wang)) # 重写了父类的__str__方法, 如果不重写会默认使用父类的__str__()方法, 打印&lt;__main__.Person object at 0x000001B31434CA30&gt;","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/%E6%A0%87%E5%87%86%E6%96%B9%E6%B3%95/python___str__.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"str"}],["meta",{"property":"og:description","content":"str __str__(self)可以来控制print()和str()方法的返回 class Person(): def __str__(self): return \\"重写了父类的__str__方法\\" wang = Person() # 创建实例 str(wang) # '重写了父类的__str__方法' print(str(wang)) # 重写了父类的__str__方法, 如果不重写会默认使用父类的__str__()方法, 打印&lt;__main__.Person object at 0x000001B31434CA30&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"str\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.28,"words":83},"filePathRelative":"编程语言/python/标准方法/python___str__.md","localizedDate":"2023年11月25日","excerpt":"<h1> <strong>str</strong></h1>\\n<p><code>__str__(self)</code>可以来控制<code>print()</code>和<code>str()</code>方法的返回</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Person</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">__str__</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token string\\">\\"重写了父类的__str__方法\\"</span>\\n\\n\\nwang <span class=\\"token operator\\">=</span> Person<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 创建实例</span>\\n<span class=\\"token builtin\\">str</span><span class=\\"token punctuation\\">(</span>wang<span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># '重写了父类的__str__方法'</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token builtin\\">str</span><span class=\\"token punctuation\\">(</span>wang<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 重写了父类的__str__方法, 如果不重写会默认使用父类的__str__()方法, 打印&lt;__main__.Person object at 0x000001B31434CA30&gt;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};