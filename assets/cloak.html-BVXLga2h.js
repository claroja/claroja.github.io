const t=JSON.parse(`{"key":"v-540f3a1b","path":"/%E5%89%8D%E7%AB%AF/vue/%E6%9C%AA%E5%88%86%E7%B1%BB/cloak.html","title":"cloak","lang":"zh-CN","frontmatter":{"description":"cloak v-cloak指令（没有值）： 1.本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性。 2.使用css配合v-cloak可以解决网速慢时页面展示出{{xxx}}的问题。 &lt;!DOCTYPE html&gt; &lt;html&gt; \\t&lt;head&gt; \\t\\t&lt;meta charset=\\"UTF-8\\" /&gt; \\t\\t&lt;title&gt;v-cloak指令&lt;/title&gt; \\t\\t&lt;style&gt; \\t\\t\\t[v-cloak]{ \\t\\t\\t\\tdisplay:none; \\t\\t\\t} \\t\\t&lt;/style&gt; \\t\\t&lt;!-- 引入Vue --&gt; \\t&lt;/head&gt; \\t&lt;body&gt; \\t\\t&lt;!-- \\t\\t\\t\\tv-cloak指令（没有值）： \\t\\t\\t\\t\\t\\t1.本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性。 \\t\\t\\t\\t\\t\\t2.使用css配合v-cloak可以解决网速慢时页面展示出{{xxx}}的问题。 \\t\\t--&gt; \\t\\t&lt;!-- 准备好一个容器--&gt; \\t\\t&lt;div id=\\"root\\"&gt; \\t\\t\\t&lt;h2 v-cloak&gt;{{name}}&lt;/h2&gt; \\t\\t&lt;/div&gt; \\t\\t&lt;script type=\\"text/javascript\\" src=\\"http://localhost:8080/resource/5s/vue.js\\"&gt;&lt;/script&gt; \\t&lt;/body&gt; \\t \\t&lt;script type=\\"text/javascript\\"&gt; \\t\\tconsole.log(1) \\t\\tVue.config.productionTip = false //阻止 vue 在启动时生成生产提示。 \\t\\t \\t\\tnew Vue({ \\t\\t\\tel:'#root', \\t\\t\\tdata:{ \\t\\t\\t\\tname:'尚硅谷' \\t\\t\\t} \\t\\t}) \\t&lt;/script&gt; &lt;/html&gt;","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E5%89%8D%E7%AB%AF/vue/%E6%9C%AA%E5%88%86%E7%B1%BB/cloak.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"cloak"}],["meta",{"property":"og:description","content":"cloak v-cloak指令（没有值）： 1.本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性。 2.使用css配合v-cloak可以解决网速慢时页面展示出{{xxx}}的问题。 &lt;!DOCTYPE html&gt; &lt;html&gt; \\t&lt;head&gt; \\t\\t&lt;meta charset=\\"UTF-8\\" /&gt; \\t\\t&lt;title&gt;v-cloak指令&lt;/title&gt; \\t\\t&lt;style&gt; \\t\\t\\t[v-cloak]{ \\t\\t\\t\\tdisplay:none; \\t\\t\\t} \\t\\t&lt;/style&gt; \\t\\t&lt;!-- 引入Vue --&gt; \\t&lt;/head&gt; \\t&lt;body&gt; \\t\\t&lt;!-- \\t\\t\\t\\tv-cloak指令（没有值）： \\t\\t\\t\\t\\t\\t1.本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性。 \\t\\t\\t\\t\\t\\t2.使用css配合v-cloak可以解决网速慢时页面展示出{{xxx}}的问题。 \\t\\t--&gt; \\t\\t&lt;!-- 准备好一个容器--&gt; \\t\\t&lt;div id=\\"root\\"&gt; \\t\\t\\t&lt;h2 v-cloak&gt;{{name}}&lt;/h2&gt; \\t\\t&lt;/div&gt; \\t\\t&lt;script type=\\"text/javascript\\" src=\\"http://localhost:8080/resource/5s/vue.js\\"&gt;&lt;/script&gt; \\t&lt;/body&gt; \\t \\t&lt;script type=\\"text/javascript\\"&gt; \\t\\tconsole.log(1) \\t\\tVue.config.productionTip = false //阻止 vue 在启动时生成生产提示。 \\t\\t \\t\\tnew Vue({ \\t\\t\\tel:'#root', \\t\\t\\tdata:{ \\t\\t\\t\\tname:'尚硅谷' \\t\\t\\t} \\t\\t}) \\t&lt;/script&gt; &lt;/html&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-28T13:15:02.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-28T13:15:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"cloak\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-28T13:15:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1701177302000,"updatedTime":1701177302000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.7,"words":209},"filePathRelative":"前端/vue/未分类/cloak.md","localizedDate":"2023年11月28日","excerpt":"<h1> cloak</h1>\\n<p>v-cloak指令（没有值）：\\n1.本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性。\\n2.使用css配合v-cloak可以解决网速慢时页面展示出{{xxx}}的问题。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">!</span><span class=\\"token constant\\">DOCTYPE</span> html<span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token operator\\">&lt;</span>html<span class=\\"token operator\\">&gt;</span>\\n\\t<span class=\\"token operator\\">&lt;</span>head<span class=\\"token operator\\">&gt;</span>\\n\\t\\t<span class=\\"token operator\\">&lt;</span>meta charset<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"UTF-8\\"</span> <span class=\\"token operator\\">/</span><span class=\\"token operator\\">&gt;</span>\\n\\t\\t<span class=\\"token operator\\">&lt;</span>title<span class=\\"token operator\\">&gt;</span>v<span class=\\"token operator\\">-</span>cloak指令<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>title<span class=\\"token operator\\">&gt;</span>\\n\\t\\t<span class=\\"token operator\\">&lt;</span>style<span class=\\"token operator\\">&gt;</span>\\n\\t\\t\\t<span class=\\"token punctuation\\">[</span>v<span class=\\"token operator\\">-</span>cloak<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t\\t<span class=\\"token literal-property property\\">display</span><span class=\\"token operator\\">:</span>none<span class=\\"token punctuation\\">;</span>\\n\\t\\t\\t<span class=\\"token punctuation\\">}</span>\\n\\t\\t<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>style<span class=\\"token operator\\">&gt;</span>\\n\\t\\t<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">!</span><span class=\\"token operator\\">--</span> 引入Vue <span class=\\"token operator\\">--</span><span class=\\"token operator\\">&gt;</span>\\n\\t<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>head<span class=\\"token operator\\">&gt;</span>\\n\\t<span class=\\"token operator\\">&lt;</span>body<span class=\\"token operator\\">&gt;</span>\\n\\t\\t<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">!</span><span class=\\"token operator\\">--</span> \\n\\t\\t\\t\\tv<span class=\\"token operator\\">-</span>cloak指令（没有值）：\\n\\t\\t\\t\\t\\t\\t<span class=\\"token number\\">1.</span>本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v<span class=\\"token operator\\">-</span>cloak属性。\\n\\t\\t\\t\\t\\t\\t<span class=\\"token number\\">2.</span>使用css配合v<span class=\\"token operator\\">-</span>cloak可以解决网速慢时页面展示出<span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">{</span>xxx<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">}</span>的问题。\\n\\t\\t<span class=\\"token operator\\">--</span><span class=\\"token operator\\">&gt;</span>\\n\\t\\t<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">!</span><span class=\\"token operator\\">--</span> 准备好一个容器<span class=\\"token operator\\">--</span><span class=\\"token operator\\">&gt;</span>\\n\\t\\t<span class=\\"token operator\\">&lt;</span>div id<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"root\\"</span><span class=\\"token operator\\">&gt;</span>\\n\\t\\t\\t<span class=\\"token operator\\">&lt;</span>h2 v<span class=\\"token operator\\">-</span>cloak<span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">{</span>name<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">}</span><span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>h2<span class=\\"token operator\\">&gt;</span>\\n\\t\\t<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>div<span class=\\"token operator\\">&gt;</span>\\n\\t\\t<span class=\\"token operator\\">&lt;</span>script type<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"text/javascript\\"</span> src<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"http://localhost:8080/resource/5s/vue.js\\"</span><span class=\\"token operator\\">&gt;</span><span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>script<span class=\\"token operator\\">&gt;</span>\\n\\t<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>body<span class=\\"token operator\\">&gt;</span>\\n\\t\\n\\t<span class=\\"token operator\\">&lt;</span>script type<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"text/javascript\\"</span><span class=\\"token operator\\">&gt;</span>\\n\\t\\tconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\n\\t\\tVue<span class=\\"token punctuation\\">.</span>config<span class=\\"token punctuation\\">.</span>productionTip <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">false</span> <span class=\\"token comment\\">//阻止 vue 在启动时生成生产提示。</span>\\n\\t\\t\\n\\t\\t<span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Vue</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t<span class=\\"token literal-property property\\">el</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">'#root'</span><span class=\\"token punctuation\\">,</span>\\n\\t\\t\\t<span class=\\"token literal-property property\\">data</span><span class=\\"token operator\\">:</span><span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t\\t<span class=\\"token literal-property property\\">name</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">'尚硅谷'</span>\\n\\t\\t\\t<span class=\\"token punctuation\\">}</span>\\n\\t\\t<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>script<span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>html<span class=\\"token operator\\">&gt;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{t as data};
