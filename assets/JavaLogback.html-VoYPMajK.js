const t=JSON.parse('{"key":"v-1c485b09","path":"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/java/%E5%85%B6%E4%BB%96/JavaLogback.html","title":"","lang":"zh-CN","frontmatter":{"description":"依赖 &lt;!--slf4j 日志门面--&gt; &lt;dependency&gt; &lt;groupId&gt;org.slf4j&lt;/groupId&gt; &lt;artifactId&gt;slf4j-api&lt;/artifactId&gt; &lt;/dependency&gt; &lt;!--logback 日志实现--&gt; &lt;dependency&gt; &lt;groupId&gt;ch.qos.logback&lt;/groupId&gt; &lt;artifactId&gt;logback-classic&lt;/artifactId&gt; &lt;/dependency&gt;","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/java/%E5%85%B6%E4%BB%96/JavaLogback.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:description","content":"依赖 &lt;!--slf4j 日志门面--&gt; &lt;dependency&gt; &lt;groupId&gt;org.slf4j&lt;/groupId&gt; &lt;artifactId&gt;slf4j-api&lt;/artifactId&gt; &lt;/dependency&gt; &lt;!--logback 日志实现--&gt; &lt;dependency&gt; &lt;groupId&gt;ch.qos.logback&lt;/groupId&gt; &lt;artifactId&gt;logback-classic&lt;/artifactId&gt; &lt;/dependency&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-28T13:15:02.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-28T13:15:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-28T13:15:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"依赖","slug":"依赖","link":"#依赖","children":[]},{"level":2,"title":"配置文件位置","slug":"配置文件位置","link":"#配置文件位置","children":[]},{"level":2,"title":"logback组件","slug":"logback组件","link":"#logback组件","children":[]},{"level":2,"title":"具体配置","slug":"具体配置","link":"#具体配置","children":[{"level":3,"title":"property","slug":"property","link":"#property","children":[]},{"level":3,"title":"appender","slug":"appender","link":"#appender","children":[]},{"level":3,"title":"日志继承","slug":"日志继承","link":"#日志继承","children":[]}]}],"git":{"createdTime":1701177302000,"updatedTime":1701177302000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":2.79,"words":836},"filePathRelative":"编程语言/java/其他/JavaLogback.md","localizedDate":"2023年11月28日","excerpt":"<h2> 依赖</h2>\\n<div class=\\"language-xml line-numbers-mode\\" data-ext=\\"xml\\"><pre class=\\"language-xml\\"><code><span class=\\"token comment\\">&lt;!--slf4j 日志门面--&gt;</span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>org.slf4j<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>slf4j-api<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token comment\\">&lt;!--logback 日志实现--&gt;</span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>ch.qos.logback<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>logback-classic<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{t as data};
