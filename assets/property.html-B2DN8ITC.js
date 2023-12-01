const n=JSON.parse(`{"key":"v-55a22a93","path":"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/7%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/%E5%9F%BA%E7%A1%80/property.html","title":"property","lang":"zh-CN","frontmatter":{"description":"property class C(object): def __init__(self): self._x = None def getx(self): return self._x def setx(self, value): self._x = value def delx(self): del self._x x = property(getx, setx, delx, \\"I'm the 'x' property.\\")","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/7%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/%E5%9F%BA%E7%A1%80/property.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"property"}],["meta",{"property":"og:description","content":"property class C(object): def __init__(self): self._x = None def getx(self): return self._x def setx(self, value): self._x = value def delx(self): del self._x x = property(getx, setx, delx, \\"I'm the 'x' property.\\")"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-01T12:59:38.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-12-01T12:59:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"property\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-01T12:59:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1701435578000,"updatedTime":1701435578000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.39,"words":117},"filePathRelative":"编程语言/python/7面向对象/基础/property.md","localizedDate":"2023年12月1日","excerpt":"<h1> property</h1>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">C</span><span class=\\"token punctuation\\">(</span><span class=\\"token builtin\\">object</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">__init__</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        self<span class=\\"token punctuation\\">.</span>_x <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">None</span>\\n\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">getx</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token keyword\\">return</span> self<span class=\\"token punctuation\\">.</span>_x\\n\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">setx</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">,</span> value<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        self<span class=\\"token punctuation\\">.</span>_x <span class=\\"token operator\\">=</span> value\\n\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">delx</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token keyword\\">del</span> self<span class=\\"token punctuation\\">.</span>_x\\n\\n    x <span class=\\"token operator\\">=</span> <span class=\\"token builtin\\">property</span><span class=\\"token punctuation\\">(</span>getx<span class=\\"token punctuation\\">,</span> setx<span class=\\"token punctuation\\">,</span> delx<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"I'm the 'x' property.\\"</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
