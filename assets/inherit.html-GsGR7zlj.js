const n=JSON.parse(`{"key":"v-f5a76dca","path":"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/7%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/%E7%BB%A7%E6%89%BF/inherit.html","title":"inherit","lang":"zh-CN","frontmatter":{"description":"inherit 继承就是子类可以引用父类的成员属性和方法 class Animal(object): def __init__(self,name): self.name=name def speak(self): print(\\"animal\\") class Cat(Animal): pass tom=Cat(\\"tom\\") tom.name # 'tom' tom.speak() # animal","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/7%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/%E7%BB%A7%E6%89%BF/inherit.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"inherit"}],["meta",{"property":"og:description","content":"inherit 继承就是子类可以引用父类的成员属性和方法 class Animal(object): def __init__(self,name): self.name=name def speak(self): print(\\"animal\\") class Cat(Animal): pass tom=Cat(\\"tom\\") tom.name # 'tom' tom.speak() # animal"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-01T12:59:38.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-12-01T12:59:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"inherit\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-01T12:59:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"父类的__init__","slug":"父类的-init","link":"#父类的-init","children":[]},{"level":2,"title":"Mixin","slug":"mixin","link":"#mixin","children":[]}],"git":{"createdTime":1701435578000,"updatedTime":1701435578000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.83,"words":548},"filePathRelative":"编程语言/python/7面向对象/继承/inherit.md","localizedDate":"2023年12月1日","excerpt":"<h1> inherit</h1>\\n<p>继承就是子类可以引用父类的成员属性和方法</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Animal</span><span class=\\"token punctuation\\">(</span><span class=\\"token builtin\\">object</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">__init__</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">,</span>name<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        self<span class=\\"token punctuation\\">.</span>name<span class=\\"token operator\\">=</span>name\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">speak</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"animal\\"</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Cat</span><span class=\\"token punctuation\\">(</span>Animal<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">pass</span>\\n\\ntom<span class=\\"token operator\\">=</span>Cat<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"tom\\"</span><span class=\\"token punctuation\\">)</span>\\ntom<span class=\\"token punctuation\\">.</span>name  <span class=\\"token comment\\"># 'tom'</span>\\ntom<span class=\\"token punctuation\\">.</span>speak<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># animal</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};