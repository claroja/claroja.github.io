const s=JSON.parse('{"key":"v-647a4705","path":"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/7%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/%E7%BB%A7%E6%89%BF/%E8%8F%B1%E5%BD%A2%E7%BB%A7%E6%89%BF.html","title":"","lang":"zh-CN","frontmatter":{"description":"MRO (Method Resolution order)，主要用来解决继承中歧义的消除 1.在python2.2之前，菱形继承的顺序是：left-to-right，depth-first class A: ^ ^ def save(self): ... / \\\\ / \\\\ / \\\\ / \\\\ class B class C: ^ ^ def save(self): ... \\\\ / \\\\ / \\\\ / \\\\ / class D","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/7%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/%E7%BB%A7%E6%89%BF/%E8%8F%B1%E5%BD%A2%E7%BB%A7%E6%89%BF.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:description","content":"MRO (Method Resolution order)，主要用来解决继承中歧义的消除 1.在python2.2之前，菱形继承的顺序是：left-to-right，depth-first class A: ^ ^ def save(self): ... / \\\\ / \\\\ / \\\\ / \\\\ class B class C: ^ ^ def save(self): ... \\\\ / \\\\ / \\\\ / \\\\ / class D"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-01T12:59:38.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-12-01T12:59:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-01T12:59:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1701435578000,"updatedTime":1701435578000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":3.47,"words":1042},"filePathRelative":"编程语言/python/7面向对象/继承/菱形继承.md","localizedDate":"2023年12月1日","excerpt":"<h1> </h1>\\n<p>MRO (Method Resolution order)，主要用来解决继承中歧义的消除</p>\\n<p>1.在python2.2之前，菱形继承的顺序是：left-to-right，depth-first</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>      <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">A</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token operator\\">^</span> <span class=\\"token operator\\">^</span>  <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">save</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span>\\n       <span class=\\"token operator\\">/</span>   \\\\\\n      <span class=\\"token operator\\">/</span>     \\\\\\n     <span class=\\"token operator\\">/</span>       \\\\\\n    <span class=\\"token operator\\">/</span>         \\\\\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">B</span>     <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">C</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token operator\\">^</span>         <span class=\\"token operator\\">^</span>  <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">save</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span>\\n     \\\\       <span class=\\"token operator\\">/</span>\\n      \\\\     <span class=\\"token operator\\">/</span>\\n       \\\\   <span class=\\"token operator\\">/</span>\\n        \\\\ <span class=\\"token operator\\">/</span>\\n      <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">D</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{s as data};
