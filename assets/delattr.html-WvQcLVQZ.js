const n=JSON.parse('{"key":"v-580d2f43","path":"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/7%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/%E6%88%90%E5%91%98%E6%93%8D%E4%BD%9C/delattr.html","title":"delattr","lang":"zh-CN","frontmatter":{"description":"delattr 当对象成员删除时触发 作用: 可以限制成员对象的删除, 还可以删除不存在成员时, 防止误报 注意: __delattr__()方法中, 不能直接删除对象, 会触发递归 class Person(object): def __init__(self, name): self.name = name def __delattr__(self, key): print(\\"del:{}\\".format(key)) person = Person(\\"wang\\") del person.name # del:name delattr(person,\\"name\\") # del:name","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/7%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/%E6%88%90%E5%91%98%E6%93%8D%E4%BD%9C/delattr.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"delattr"}],["meta",{"property":"og:description","content":"delattr 当对象成员删除时触发 作用: 可以限制成员对象的删除, 还可以删除不存在成员时, 防止误报 注意: __delattr__()方法中, 不能直接删除对象, 会触发递归 class Person(object): def __init__(self, name): self.name = name def __delattr__(self, key): print(\\"del:{}\\".format(key)) person = Person(\\"wang\\") del person.name # del:name delattr(person,\\"name\\") # del:name"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-01T12:59:38.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-12-01T12:59:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"delattr\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-01T12:59:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1701435578000,"updatedTime":1701435578000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.29,"words":88},"filePathRelative":"编程语言/python/7面向对象/成员操作/delattr.md","localizedDate":"2023年12月1日","excerpt":"<h1> delattr</h1>\\n<p>当对象成员删除时触发\\n作用: 可以限制成员对象的删除, 还可以删除不存在成员时, 防止误报\\n注意: <code>__delattr__()</code>方法中, 不能直接删除对象, 会触发递归</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Person</span><span class=\\"token punctuation\\">(</span><span class=\\"token builtin\\">object</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">__init__</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">,</span> name<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        self<span class=\\"token punctuation\\">.</span>name <span class=\\"token operator\\">=</span> name\\n\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">__delattr__</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">,</span> key<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"del:{}\\"</span><span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">format</span><span class=\\"token punctuation\\">(</span>key<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\n\\nperson <span class=\\"token operator\\">=</span> Person<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"wang\\"</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">del</span> person<span class=\\"token punctuation\\">.</span>name  <span class=\\"token comment\\"># del:name</span>\\n<span class=\\"token builtin\\">delattr</span><span class=\\"token punctuation\\">(</span>person<span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"name\\"</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># del:name</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};