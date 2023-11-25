const n=JSON.parse('{"key":"v-8d4f8b2e","path":"/%E7%88%AC%E8%99%AB/selenium/%E9%A1%B5%E9%9D%A2%E8%A7%A3%E6%9E%90/selenium_finders.html","title":"finders","lang":"zh-CN","frontmatter":{"description":"finders locator 用于定位元素, 返回的结果可作为finders的参数, above, Below, Left of, Right of, Near, Chaining relative locators 获得元素上面的某个元素 email_locator = locate_with(By.TAG_NAME, \\"input\\").above({By.ID: \\"password\\"}) password_locator = locate_with(By.TAG_NAME, \\"input\\").below({By.ID: \\"email\\"}) cancel_locator = locate_with(By.TAG_NAME, \\"button\\").to_left_of({By.ID: \\"submit\\"}) submit_locator = locate_with(By.TAG_NAME, \\"button\\").to_right_of({By.ID: \\"cancel\\"}) email_locator = locate_with(By.TAG_NAME, \\"input\\").near({By.ID: \\"lbl-email\\"}) submit_locator = locate_with(By.TAG_NAME, \\"button\\").below({By.ID: \\"email\\"}).to_right_of({By.ID: \\"cancel\\"})","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%88%AC%E8%99%AB/selenium/%E9%A1%B5%E9%9D%A2%E8%A7%A3%E6%9E%90/selenium_finders.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"finders"}],["meta",{"property":"og:description","content":"finders locator 用于定位元素, 返回的结果可作为finders的参数, above, Below, Left of, Right of, Near, Chaining relative locators 获得元素上面的某个元素 email_locator = locate_with(By.TAG_NAME, \\"input\\").above({By.ID: \\"password\\"}) password_locator = locate_with(By.TAG_NAME, \\"input\\").below({By.ID: \\"email\\"}) cancel_locator = locate_with(By.TAG_NAME, \\"button\\").to_left_of({By.ID: \\"submit\\"}) submit_locator = locate_with(By.TAG_NAME, \\"button\\").to_right_of({By.ID: \\"cancel\\"}) email_locator = locate_with(By.TAG_NAME, \\"input\\").near({By.ID: \\"lbl-email\\"}) submit_locator = locate_with(By.TAG_NAME, \\"button\\").below({By.ID: \\"email\\"}).to_right_of({By.ID: \\"cancel\\"})"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"finders\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"locator","slug":"locator","link":"#locator","children":[]},{"level":2,"title":"finder","slug":"finder","link":"#finder","children":[]},{"level":2,"title":"单个获取","slug":"单个获取","link":"#单个获取","children":[]},{"level":2,"title":"多个获取","slug":"多个获取","link":"#多个获取","children":[]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[]}],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.54,"words":161},"filePathRelative":"爬虫/selenium/页面解析/selenium_finders.md","localizedDate":"2023年11月25日","excerpt":"<h1> finders</h1>\\n<h2> locator</h2>\\n<p>用于定位元素, 返回的结果可作为<code>finders</code>的参数, above, Below, Left of, Right of, Near, Chaining relative locators\\n获得元素上面的某个元素</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>email_locator <span class=\\"token operator\\">=</span> locate_with<span class=\\"token punctuation\\">(</span>By<span class=\\"token punctuation\\">.</span>TAG_NAME<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"input\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>above<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>By<span class=\\"token punctuation\\">.</span>ID<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\\"password\\"</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\npassword_locator <span class=\\"token operator\\">=</span> locate_with<span class=\\"token punctuation\\">(</span>By<span class=\\"token punctuation\\">.</span>TAG_NAME<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"input\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>below<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>By<span class=\\"token punctuation\\">.</span>ID<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\\"email\\"</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\ncancel_locator <span class=\\"token operator\\">=</span> locate_with<span class=\\"token punctuation\\">(</span>By<span class=\\"token punctuation\\">.</span>TAG_NAME<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"button\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>to_left_of<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>By<span class=\\"token punctuation\\">.</span>ID<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\\"submit\\"</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\nsubmit_locator <span class=\\"token operator\\">=</span> locate_with<span class=\\"token punctuation\\">(</span>By<span class=\\"token punctuation\\">.</span>TAG_NAME<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"button\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>to_right_of<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>By<span class=\\"token punctuation\\">.</span>ID<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\\"cancel\\"</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\nemail_locator <span class=\\"token operator\\">=</span> locate_with<span class=\\"token punctuation\\">(</span>By<span class=\\"token punctuation\\">.</span>TAG_NAME<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"input\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>near<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>By<span class=\\"token punctuation\\">.</span>ID<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\\"lbl-email\\"</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\nsubmit_locator <span class=\\"token operator\\">=</span> locate_with<span class=\\"token punctuation\\">(</span>By<span class=\\"token punctuation\\">.</span>TAG_NAME<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"button\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>below<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>By<span class=\\"token punctuation\\">.</span>ID<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\\"email\\"</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>to_right_of<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>By<span class=\\"token punctuation\\">.</span>ID<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\\"cancel\\"</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};