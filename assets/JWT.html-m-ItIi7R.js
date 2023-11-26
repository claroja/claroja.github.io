const n=JSON.parse('{"key":"v-13d7d7ab","path":"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/java/%E5%85%B6%E4%BB%96/JWT.html","title":"HTMLElement","lang":"zh-CN","frontmatter":{"description":"HTMLElement JWTs既可以是签名(JWS,Signature),也可以是加密(JWE,Encryption) jwt有三个部分, 使用.来隔开, 每个部分使用 Base64URL进行编码. 第一部分: header 记录该lwt使用什么进行签名 第二部分: body(claims) 要传输的内容 第三部分: signature, 将第一部分header和第二部分加合并进行签名. 安装 &lt;dependency&gt; &lt;groupId&gt;io.jsonwebtoken&lt;/groupId&gt; &lt;artifactId&gt;jjwt-api&lt;/artifactId&gt; &lt;version&gt;0.11.2&lt;/version&gt; &lt;/dependency&gt; &lt;dependency&gt; &lt;groupId&gt;io.jsonwebtoken&lt;/groupId&gt; &lt;artifactId&gt;jjwt-impl&lt;/artifactId&gt; &lt;version&gt;0.11.2&lt;/version&gt; &lt;scope&gt;runtime&lt;/scope&gt; &lt;/dependency&gt; &lt;dependency&gt; &lt;groupId&gt;io.jsonwebtoken&lt;/groupId&gt; &lt;artifactId&gt;jjwt-jackson&lt;/artifactId&gt; &lt;!-- or jjwt-gson if Gson is preferred --&gt; &lt;version&gt;0.11.2&lt;/version&gt; &lt;scope&gt;runtime&lt;/scope&gt; &lt;/dependency&gt;","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/java/%E5%85%B6%E4%BB%96/JWT.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"HTMLElement"}],["meta",{"property":"og:description","content":"HTMLElement JWTs既可以是签名(JWS,Signature),也可以是加密(JWE,Encryption) jwt有三个部分, 使用.来隔开, 每个部分使用 Base64URL进行编码. 第一部分: header 记录该lwt使用什么进行签名 第二部分: body(claims) 要传输的内容 第三部分: signature, 将第一部分header和第二部分加合并进行签名. 安装 &lt;dependency&gt; &lt;groupId&gt;io.jsonwebtoken&lt;/groupId&gt; &lt;artifactId&gt;jjwt-api&lt;/artifactId&gt; &lt;version&gt;0.11.2&lt;/version&gt; &lt;/dependency&gt; &lt;dependency&gt; &lt;groupId&gt;io.jsonwebtoken&lt;/groupId&gt; &lt;artifactId&gt;jjwt-impl&lt;/artifactId&gt; &lt;version&gt;0.11.2&lt;/version&gt; &lt;scope&gt;runtime&lt;/scope&gt; &lt;/dependency&gt; &lt;dependency&gt; &lt;groupId&gt;io.jsonwebtoken&lt;/groupId&gt; &lt;artifactId&gt;jjwt-jackson&lt;/artifactId&gt; &lt;!-- or jjwt-gson if Gson is preferred --&gt; &lt;version&gt;0.11.2&lt;/version&gt; &lt;scope&gt;runtime&lt;/scope&gt; &lt;/dependency&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTMLElement\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"入门案例","slug":"入门案例","link":"#入门案例","children":[]},{"level":2,"title":"jwt原理","slug":"jwt原理","link":"#jwt原理","children":[]},{"level":2,"title":"签名key","slug":"签名key","link":"#签名key","children":[{"level":3,"title":"key简介","slug":"key简介","link":"#key简介","children":[]},{"level":3,"title":"生成安全key","slug":"生成安全key","link":"#生成安全key","children":[]}]},{"level":2,"title":"创建jws","slug":"创建jws","link":"#创建jws","children":[{"level":3,"title":"一般过程","slug":"一般过程","link":"#一般过程","children":[]},{"level":3,"title":"设置head","slug":"设置head","link":"#设置head","children":[]},{"level":3,"title":"设置claims","slug":"设置claims","link":"#设置claims","children":[]},{"level":3,"title":"设置签名","slug":"设置签名","link":"#设置签名","children":[]}]},{"level":2,"title":"读取jws","slug":"读取jws","link":"#读取jws","children":[{"level":3,"title":"一般步骤","slug":"一般步骤","link":"#一般步骤","children":[]},{"level":3,"title":"key","slug":"key","link":"#key","children":[]}]}],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":3.33,"words":998},"filePathRelative":"编程语言/java/其他/JWT.md","localizedDate":"2023年11月25日","excerpt":"<h1> HTMLElement</h1>\\n<p>JWTs既可以是签名(JWS,Signature),也可以是加密(JWE,Encryption)\\njwt有三个部分, 使用<code>.</code>来隔开, 每个部分使用 Base64URL进行编码.</p>\\n<ol>\\n<li>第一部分: header 记录该lwt使用什么进行签名</li>\\n<li>第二部分: body(claims) 要传输的内容</li>\\n<li>第三部分: signature, 将第一部分header和第二部分加合并进行签名.</li>\\n</ol>\\n<!--more-->\\n<h2> 安装</h2>\\n<div class=\\"language-xml line-numbers-mode\\" data-ext=\\"xml\\"><pre class=\\"language-xml\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>io.jsonwebtoken<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>jjwt-api<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>0.11.2<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>io.jsonwebtoken<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>jjwt-impl<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>0.11.2<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>scope</span><span class=\\"token punctuation\\">&gt;</span></span>runtime<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>scope</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>io.jsonwebtoken<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>jjwt-jackson<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token comment\\">&lt;!-- or jjwt-gson if Gson is preferred --&gt;</span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>0.11.2<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>scope</span><span class=\\"token punctuation\\">&gt;</span></span>runtime<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>scope</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};