const t=JSON.parse(`{"key":"v-21e424fb","path":"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/nodejs/%E9%83%A8%E7%BD%B2%E4%BE%9D%E8%B5%96%E6%A8%A1%E5%9D%97/axios.html","title":"axios","lang":"zh-CN","frontmatter":{"description":"axios 基础 &lt;script src=\\"https://cdn.bootcdn.net/ajax/libs/axios/0.21.1/axios.js\\"&gt;&lt;/script&gt; &lt;script type=\\"text/javascript\\"&gt; axios.get('http://localhost:3000/adata').then(function(ret){ // 注意data属性是固定的用法，用于获取后台的实际数据 console.log(ret) // console.log(ret.data) //这个是服务器传回来的具体信息 }) &lt;/script&gt;","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/nodejs/%E9%83%A8%E7%BD%B2%E4%BE%9D%E8%B5%96%E6%A8%A1%E5%9D%97/axios.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"axios"}],["meta",{"property":"og:description","content":"axios 基础 &lt;script src=\\"https://cdn.bootcdn.net/ajax/libs/axios/0.21.1/axios.js\\"&gt;&lt;/script&gt; &lt;script type=\\"text/javascript\\"&gt; axios.get('http://localhost:3000/adata').then(function(ret){ // 注意data属性是固定的用法，用于获取后台的实际数据 console.log(ret) // console.log(ret.data) //这个是服务器传回来的具体信息 }) &lt;/script&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-01T12:59:38.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-12-01T12:59:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"axios\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-01T12:59:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"基础","slug":"基础","link":"#基础","children":[]},{"level":2,"title":"同步与异步","slug":"同步与异步","link":"#同步与异步","children":[]},{"level":2,"title":"全局配置","slug":"全局配置","link":"#全局配置","children":[]},{"level":2,"title":"拦截器","slug":"拦截器","link":"#拦截器","children":[]}],"git":{"createdTime":1701435578000,"updatedTime":1701435578000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.63,"words":189},"filePathRelative":"编程语言/nodejs/部署依赖模块/axios.md","localizedDate":"2023年12月1日","excerpt":"<h1> axios</h1>\\n<h2> 基础</h2>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code> <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span> <span class=\\"token attr-name\\">src</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>https://cdn.bootcdn.net/ajax/libs/axios/0.21.1/axios.js<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>text/javascript<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n    axios<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">get</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'http://localhost:3000/adata'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">then</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">ret</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token comment\\">// 注意data属性是固定的用法，用于获取后台的实际数据</span>\\n      console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>ret<span class=\\"token punctuation\\">)</span>\\n      <span class=\\"token comment\\">// console.log(ret.data) //这个是服务器传回来的具体信息</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n  </span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{t as data};