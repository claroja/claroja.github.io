const n=JSON.parse('{"key":"v-44ede63e","path":"/%E5%89%8D%E7%AB%AF/vue/7%E6%8F%92%E4%BB%B6/pinia.html","title":"民法典-总则-第一章基本规定","lang":"zh-CN","frontmatter":{"description":"民法典-总则-第一章基本规定 官网 state和getters 可以使用storeToRefs来解构. 注意pinia中的actions不能解构出来. getter和computed很像, 都是由其他值计算出来的值. 他本质是个值, 不是方法. // counter.js import {defineStore} from \\"pinia\\" export const useCounterStore = defineStore(\\"counter\\", { state: () =&gt; ({count: 0}), getters: { double: (state) =&gt; state.count * 2, }, actions: { increment() { this.count++ }, }, })","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E5%89%8D%E7%AB%AF/vue/7%E6%8F%92%E4%BB%B6/pinia.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"民法典-总则-第一章基本规定"}],["meta",{"property":"og:description","content":"民法典-总则-第一章基本规定 官网 state和getters 可以使用storeToRefs来解构. 注意pinia中的actions不能解构出来. getter和computed很像, 都是由其他值计算出来的值. 他本质是个值, 不是方法. // counter.js import {defineStore} from \\"pinia\\" export const useCounterStore = defineStore(\\"counter\\", { state: () =&gt; ({count: 0}), getters: { double: (state) =&gt; state.count * 2, }, actions: { increment() { this.count++ }, }, })"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-30T12:42:23.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-30T12:42:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"民法典-总则-第一章基本规定\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-30T12:42:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1701348143000,"updatedTime":1701348143000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.53,"words":158},"filePathRelative":"前端/vue/7插件/pinia.md","localizedDate":"2023年11月30日","excerpt":"<h1> 民法典-总则-第一章基本规定</h1>\\n<p><a href=\\"https://pinia.vuejs.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官网</a></p>\\n<ol>\\n<li>state和getters 可以使用<code>storeToRefs</code>来解构. 注意pinia中的actions不能解构出来.</li>\\n<li>getter和computed很像, 都是由其他值计算出来的值. 他本质是个值, 不是方法.</li>\\n</ol>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// counter.js</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span>defineStore<span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"pinia\\"</span>\\n\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">const</span> useCounterStore <span class=\\"token operator\\">=</span> <span class=\\"token function\\">defineStore</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"counter\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function-variable function\\">state</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span><span class=\\"token literal-property property\\">count</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token literal-property property\\">getters</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token function-variable function\\">double</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">state</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> state<span class=\\"token punctuation\\">.</span>count <span class=\\"token operator\\">*</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token literal-property property\\">actions</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token function\\">increment</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>count<span class=\\"token operator\\">++</span>\\n        <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};