const e=JSON.parse('{"key":"v-7c05794e","path":"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/java/Synchronized/JavaSynchronized.html","title":"object","lang":"zh-CN","frontmatter":{"description":"object synchronized synchronized(对象锁)它采用互斥的方式让同一时刻至多只有一个线程能持有对象锁,其它线程再想获取这个对象锁时就会阻塞住。 语法1: synchronized(instance) // 线程1， 线程2(blocked) { Critical Section }","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/java/Synchronized/JavaSynchronized.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"object"}],["meta",{"property":"og:description","content":"object synchronized synchronized(对象锁)它采用互斥的方式让同一时刻至多只有一个线程能持有对象锁,其它线程再想获取这个对象锁时就会阻塞住。 语法1: synchronized(instance) // 线程1， 线程2(blocked) { Critical Section }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"object"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"object\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"synchronized","slug":"synchronized","link":"#synchronized","children":[{"level":3,"title":"语法1:","slug":"语法1","link":"#语法1","children":[]},{"level":3,"title":"语法2:","slug":"语法2","link":"#语法2","children":[]},{"level":3,"title":"语法3:","slug":"语法3","link":"#语法3","children":[]}]},{"level":2,"title":"变量线程安全分析","slug":"变量线程安全分析","link":"#变量线程安全分析","children":[{"level":3,"title":"成员变量和静态变量","slug":"成员变量和静态变量","link":"#成员变量和静态变量","children":[]},{"level":3,"title":"局部变量","slug":"局部变量","link":"#局部变量","children":[]}]},{"level":2,"title":"synchronized 原理","slug":"synchronized-原理","link":"#synchronized-原理","children":[{"level":3,"title":"Mark Word","slug":"mark-word","link":"#mark-word","children":[]},{"level":3,"title":"重量级锁","slug":"重量级锁","link":"#重量级锁","children":[]},{"level":3,"title":"轻量级锁","slug":"轻量级锁","link":"#轻量级锁","children":[]},{"level":3,"title":"自旋优化","slug":"自旋优化","link":"#自旋优化","children":[]},{"level":3,"title":"偏向锁","slug":"偏向锁","link":"#偏向锁","children":[]}]},{"level":2,"title":"犹豫模式","slug":"犹豫模式","link":"#犹豫模式","children":[]},{"level":2,"title":"线程安全类","slug":"线程安全类","link":"#线程安全类","children":[]}],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":6.6,"words":1979},"filePathRelative":"编程语言/java/Synchronized/JavaSynchronized.md","localizedDate":"2023年11月25日","excerpt":"<h1> object</h1>\\n<h2> synchronized</h2>\\n<p>synchronized(对象锁)它采用互斥的方式让同一时刻至多只有一个线程能持有对象锁,其它线程再想获取这个对象锁时就会阻塞住。</p>\\n<h3> 语法1:</h3>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">synchronized</span><span class=\\"token punctuation\\">(</span>instance<span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// 线程1， 线程2(blocked)</span>\\n<span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token class-name\\">Critical</span> <span class=\\"token class-name\\">Section</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};