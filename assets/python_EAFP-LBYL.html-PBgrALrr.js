const e=JSON.parse('{"key":"v-246cf166","path":"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/%E5%B0%9A%E6%9C%AA%E5%BD%92%E7%B1%BB/python_EAFP-LBYL.html","title":"EAFP-LBYL","lang":"zh-CN","frontmatter":{"description":"EAFP-LBYL 为了增强程序的健壮性，通常会增加一些检查数据项的代码，用术语来说就是防御性编程，在检查的时候通常有一下两种风格: “Easier to Ask for Forgiveness than Permission.”（请求宽恕比许可更容易）— EAFP try: x = test_dict[\\"key\\"] except KeyError: # key 不存在 “Look Before You Leap”（三思而后行 ）— LBYL if \\"key\\" in test_dict: x = test_dict[\\"key\\"] else: # key 不存在","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/%E5%B0%9A%E6%9C%AA%E5%BD%92%E7%B1%BB/python_EAFP-LBYL.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"EAFP-LBYL"}],["meta",{"property":"og:description","content":"EAFP-LBYL 为了增强程序的健壮性，通常会增加一些检查数据项的代码，用术语来说就是防御性编程，在检查的时候通常有一下两种风格: “Easier to Ask for Forgiveness than Permission.”（请求宽恕比许可更容易）— EAFP try: x = test_dict[\\"key\\"] except KeyError: # key 不存在 “Look Before You Leap”（三思而后行 ）— LBYL if \\"key\\" in test_dict: x = test_dict[\\"key\\"] else: # key 不存在"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"EAFP-LBYL\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.08,"words":324},"filePathRelative":"编程语言/python/尚未归类/python_EAFP-LBYL.md","localizedDate":"2023年11月25日","excerpt":"<h1> EAFP-LBYL</h1>\\n<p>为了增强程序的健壮性，通常会增加一些检查数据项的代码，用术语来说就是防御性编程，在检查的时候通常有一下两种风格:</p>\\n<ol>\\n<li>\\n<p>“Easier to Ask for Forgiveness than Permission.”（请求宽恕比许可更容易）— EAFP</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">try</span><span class=\\"token punctuation\\">:</span>\\n    x <span class=\\"token operator\\">=</span> test_dict<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"key\\"</span><span class=\\"token punctuation\\">]</span>\\n<span class=\\"token keyword\\">except</span> KeyError<span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token comment\\"># key 不存在</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>“Look Before You Leap”（三思而后行 ）— LBYL</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">if</span> <span class=\\"token string\\">\\"key\\"</span> <span class=\\"token keyword\\">in</span> test_dict<span class=\\"token punctuation\\">:</span>\\n    x <span class=\\"token operator\\">=</span> test_dict<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"key\\"</span><span class=\\"token punctuation\\">]</span>\\n<span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token comment\\"># key 不存在</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ol>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};