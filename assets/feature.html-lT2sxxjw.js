const n=JSON.parse('{"key":"v-7bfce8da","path":"/%E5%89%8D%E7%AB%AF/css/%E5%9F%BA%E7%A1%80/feature.html","title":"feature","lang":"zh-CN","frontmatter":{"description":"feature 层叠性 相同选择器给设置相同的样式，此时一个样式就会覆盖（层叠）另一个的样式。 层叠性原则: 样式冲突，遵循的原则是就近原则，哪个样式离结构近，就执行哪个样式 &lt;!DOCTYPE html&gt; &lt;html lang=\\"en\\"&gt; &lt;head&gt; &lt;meta charset=\\"UTF-8\\"&gt; &lt;title&gt;CSS层叠性&lt;/title&gt; &lt;style&gt; div { color: red; } div { color: pink; } &lt;/style&gt; &lt;/head&gt; &lt;body&gt; &lt;div&gt;最终显示的pink&lt;/div&gt; &lt;/body&gt; &lt;/html&gt;","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E5%89%8D%E7%AB%AF/css/%E5%9F%BA%E7%A1%80/feature.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"feature"}],["meta",{"property":"og:description","content":"feature 层叠性 相同选择器给设置相同的样式，此时一个样式就会覆盖（层叠）另一个的样式。 层叠性原则: 样式冲突，遵循的原则是就近原则，哪个样式离结构近，就执行哪个样式 &lt;!DOCTYPE html&gt; &lt;html lang=\\"en\\"&gt; &lt;head&gt; &lt;meta charset=\\"UTF-8\\"&gt; &lt;title&gt;CSS层叠性&lt;/title&gt; &lt;style&gt; div { color: red; } div { color: pink; } &lt;/style&gt; &lt;/head&gt; &lt;body&gt; &lt;div&gt;最终显示的pink&lt;/div&gt; &lt;/body&gt; &lt;/html&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T13:17:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-27T13:17:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"feature\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-27T13:17:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"层叠性","slug":"层叠性","link":"#层叠性","children":[]},{"level":2,"title":"继承性","slug":"继承性","link":"#继承性","children":[]},{"level":2,"title":"优先级","slug":"优先级","link":"#优先级","children":[]}],"git":{"createdTime":1701091021000,"updatedTime":1701091021000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.56,"words":468},"filePathRelative":"前端/css/基础/feature.md","localizedDate":"2023年11月27日","excerpt":"<h1> feature</h1>\\n<h2> 层叠性</h2>\\n<p>相同选择器给设置相同的样式，此时一个样式就会覆盖（层叠）另一个的样式。\\n层叠性原则:</p>\\n<ul>\\n<li>样式冲突，遵循的原则是就近原则，哪个样式离结构近，就执行哪个样式</li>\\n</ul>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token doctype\\"><span class=\\"token punctuation\\">&lt;!</span><span class=\\"token doctype-tag\\">DOCTYPE</span> <span class=\\"token name\\">html</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>html</span> <span class=\\"token attr-name\\">lang</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>en<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>head</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>meta</span> <span class=\\"token attr-name\\">charset</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>UTF-8<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>title</span><span class=\\"token punctuation\\">&gt;</span></span>CSS层叠性<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>title</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>style</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token style\\"><span class=\\"token language-css\\">\\n       <span class=\\"token selector\\">div</span> <span class=\\"token punctuation\\">{</span>\\n           <span class=\\"token property\\">color</span><span class=\\"token punctuation\\">:</span> red<span class=\\"token punctuation\\">;</span>\\n       <span class=\\"token punctuation\\">}</span>\\n       <span class=\\"token selector\\">div</span> <span class=\\"token punctuation\\">{</span>\\n           <span class=\\"token property\\">color</span><span class=\\"token punctuation\\">:</span> pink<span class=\\"token punctuation\\">;</span>\\n       <span class=\\"token punctuation\\">}</span>\\n    </span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>style</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>head</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>最终显示的pink<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>html</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};