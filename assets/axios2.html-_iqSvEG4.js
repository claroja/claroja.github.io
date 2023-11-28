const a=JSON.parse('{"key":"v-720413fd","path":"/%E5%89%8D%E7%AB%AF/javaScript/%E4%B8%89%E6%96%B9%E5%8C%85/axios2.html","title":"axios","lang":"zh-CN","frontmatter":{"description":"axios 请求模块 一般在src/api`文件夹下 ajax.js 配置请求实例, 做一些请求之前的配置 index.js 统一管理项目接口的模块，用来请求数据 ajax.js 创建axios实例, 统一配置信息 import axios from \\"axios\\"; let requests = axios.create({//创建axios实例 baseURL: \\"/api\\",//基础路径 timeout: 5000,//请求不能超过5S });","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E5%89%8D%E7%AB%AF/javaScript/%E4%B8%89%E6%96%B9%E5%8C%85/axios2.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"axios"}],["meta",{"property":"og:description","content":"axios 请求模块 一般在src/api`文件夹下 ajax.js 配置请求实例, 做一些请求之前的配置 index.js 统一管理项目接口的模块，用来请求数据 ajax.js 创建axios实例, 统一配置信息 import axios from \\"axios\\"; let requests = axios.create({//创建axios实例 baseURL: \\"/api\\",//基础路径 timeout: 5000,//请求不能超过5S });"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-28T13:15:02.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-28T13:15:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"axios\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-28T13:15:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"请求模块","slug":"请求模块","link":"#请求模块","children":[]},{"level":2,"title":"ajax.js","slug":"ajax-js","link":"#ajax-js","children":[{"level":3,"title":"创建axios实例, 统一配置信息","slug":"创建axios实例-统一配置信息","link":"#创建axios实例-统一配置信息","children":[]},{"level":3,"title":"请求拦截器","slug":"请求拦截器","link":"#请求拦截器","children":[]},{"level":3,"title":"响应拦截器","slug":"响应拦截器","link":"#响应拦截器","children":[]},{"level":3,"title":"整体","slug":"整体","link":"#整体","children":[]}]},{"level":2,"title":"index.js","slug":"index-js","link":"#index-js","children":[]}],"git":{"createdTime":1701177302000,"updatedTime":1701177302000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.71,"words":513},"filePathRelative":"前端/javaScript/三方包/axios2.md","localizedDate":"2023年11月28日","excerpt":"<h1> axios</h1>\\n<h2> 请求模块</h2>\\n<p>一般在src/api`文件夹下</p>\\n<ul>\\n<li>ajax.js 配置请求实例, 做一些请求之前的配置</li>\\n<li>index.js 统一管理项目接口的模块，用来请求数据</li>\\n</ul>\\n<h2> ajax.js</h2>\\n<h3> 创建axios实例, 统一配置信息</h3>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">import</span> axios <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"axios\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">let</span> requests <span class=\\"token operator\\">=</span> axios<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">create</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span><span class=\\"token comment\\">//创建axios实例</span>\\n    <span class=\\"token literal-property property\\">baseURL</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"/api\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token comment\\">//基础路径</span>\\n    <span class=\\"token literal-property property\\">timeout</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">5000</span><span class=\\"token punctuation\\">,</span><span class=\\"token comment\\">//请求不能超过5S</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{a as data};
