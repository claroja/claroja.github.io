const a=JSON.parse('{"key":"v-6fdd9acd","path":"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/java/%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8/JavaImmutableObject.html","title":"animations_addUpdater","lang":"zh-CN","frontmatter":{"description":"animations_addUpdater 问题引出 DateTimeFormatter是可变类型, 多线程调用会报错 public static void main(String[] args) { SimpleDateFormat stf = SimpleDateFormat.ofPattern(\\"yyyy-MM-dd\\"); for (int i = 0; i &lt; 10; i++) { new Thread(() -&gt; { TemporalAccessor parse = stf.parse(\\"1951-04-21\\"); log.debug(\\"{}\\", parse); }).start(); } }","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/java/%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8/JavaImmutableObject.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"animations_addUpdater"}],["meta",{"property":"og:description","content":"animations_addUpdater 问题引出 DateTimeFormatter是可变类型, 多线程调用会报错 public static void main(String[] args) { SimpleDateFormat stf = SimpleDateFormat.ofPattern(\\"yyyy-MM-dd\\"); for (int i = 0; i &lt; 10; i++) { new Thread(() -&gt; { TemporalAccessor parse = stf.parse(\\"1951-04-21\\"); log.debug(\\"{}\\", parse); }).start(); } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"animations_addUpdater\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"问题引出","slug":"问题引出","link":"#问题引出","children":[]},{"level":2,"title":"不可变设计","slug":"不可变设计","link":"#不可变设计","children":[]},{"level":2,"title":"不不可变类String","slug":"不不可变类string","link":"#不不可变类string","children":[]},{"level":2,"title":"享元模式(Flyweight pattern)","slug":"享元模式-flyweight-pattern","link":"#享元模式-flyweight-pattern","children":[]},{"level":2,"title":"自定义连接池","slug":"自定义连接池","link":"#自定义连接池","children":[]},{"level":2,"title":"final 原理","slug":"final-原理","link":"#final-原理","children":[]}],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":2.85,"words":854},"filePathRelative":"编程语言/java/线程安全/JavaImmutableObject.md","localizedDate":"2023年11月25日","excerpt":"<h1> animations_addUpdater</h1>\\n<h2> 问题引出</h2>\\n<p><code>DateTimeFormatter</code>是可变类型, 多线程调用会报错</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> args<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token class-name\\">SimpleDateFormat</span> stf <span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">SimpleDateFormat</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">ofPattern</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"yyyy-MM-dd\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Thread</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">-&gt;</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token class-name\\">TemporalAccessor</span> parse <span class=\\"token operator\\">=</span> stf<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">parse</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"1951-04-21\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            log<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">debug</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"{}\\"</span><span class=\\"token punctuation\\">,</span> parse<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">start</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{a as data};