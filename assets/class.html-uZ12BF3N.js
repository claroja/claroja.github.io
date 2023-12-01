const n=JSON.parse('{"key":"v-9ffdf35c","path":"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/7%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/%E5%9F%BA%E7%A1%80/class.html","title":"class","lang":"zh-CN","frontmatter":{"description":"class class Name(object): # 大驼峰命名方法 \\tclass_prop= #类属性 \\t__private_class_prop= #类私有属性 \\tdef __int__(self,arg1,arg2):#初始化实例对象 \\t\\tself.instance_prop= arg1#实例对象属性 \\t\\tself.__private_instance_prop= arg2 #实例对象私有属性 \\tdef instance_func(self): #实例独享方法 \\tdef __private_instance_func(self): #实例对象私有方法 \\t@classmethod \\tdef func(cls): #类对象方法 \\t@staticmethod def func():","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/7%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/%E5%9F%BA%E7%A1%80/class.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"class"}],["meta",{"property":"og:description","content":"class class Name(object): # 大驼峰命名方法 \\tclass_prop= #类属性 \\t__private_class_prop= #类私有属性 \\tdef __int__(self,arg1,arg2):#初始化实例对象 \\t\\tself.instance_prop= arg1#实例对象属性 \\t\\tself.__private_instance_prop= arg2 #实例对象私有属性 \\tdef instance_func(self): #实例独享方法 \\tdef __private_instance_func(self): #实例对象私有方法 \\t@classmethod \\tdef func(cls): #类对象方法 \\t@staticmethod def func():"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-01T12:59:38.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-12-01T12:59:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"class\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-01T12:59:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1701435578000,"updatedTime":1701435578000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.03,"words":308},"filePathRelative":"编程语言/python/7面向对象/基础/class.md","localizedDate":"2023年12月1日","excerpt":"<h1> class</h1>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Name</span><span class=\\"token punctuation\\">(</span><span class=\\"token builtin\\">object</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span> <span class=\\"token comment\\"># 大驼峰命名方法</span>\\n\\tclass_prop<span class=\\"token operator\\">=</span> <span class=\\"token comment\\">#类属性</span>\\n\\t__private_class_prop<span class=\\"token operator\\">=</span> <span class=\\"token comment\\">#类私有属性</span>\\n\\t<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">__int__</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">,</span>arg1<span class=\\"token punctuation\\">,</span>arg2<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span><span class=\\"token comment\\">#初始化实例对象</span>\\n\\t\\tself<span class=\\"token punctuation\\">.</span>instance_prop<span class=\\"token operator\\">=</span> arg1<span class=\\"token comment\\">#实例对象属性</span>\\n\\t\\tself<span class=\\"token punctuation\\">.</span>__private_instance_prop<span class=\\"token operator\\">=</span> arg2 <span class=\\"token comment\\">#实例对象私有属性</span>\\n\\t<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">instance_func</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span> <span class=\\"token comment\\">#实例独享方法</span>\\n\\t<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">__private_instance_func</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span> <span class=\\"token comment\\">#实例对象私有方法</span>\\n\\t<span class=\\"token decorator annotation punctuation\\">@classmethod</span>\\n\\t<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">func</span><span class=\\"token punctuation\\">(</span>cls<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span> <span class=\\"token comment\\">#类对象方法</span>\\n\\t<span class=\\"token decorator annotation punctuation\\">@staticmethod</span>\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">func</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};
