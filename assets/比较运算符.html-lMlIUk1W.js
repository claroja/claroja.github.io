const n=JSON.parse(`{"key":"v-33add743","path":"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/javascript/4%E6%93%8D%E4%BD%9C%E7%AC%A6(operator)/%E6%AF%94%E8%BE%83%E8%BF%90%E7%AE%97%E7%AC%A6.html","title":"比较运算符","lang":"zh-CN","frontmatter":{"description":"比较运算符 console.log(3 &gt;= 5); // false console.log(2 &lt;= 4); // true //1. 我们程序里面的等于符号 是 == 默认转换数据类型 会把字符串型的数据转换为数字型 只要求值相等就可以 console.log(3 == 5); // false console.log('pink老师' == '刘德华'); // flase console.log(18 == 18); // true console.log(18 == '18'); // true console.log(18 != 18); // false // 2. 我们程序里面有全等 一模一样 要求 两侧的值 还有 数据类型完全一致才可以 true console.log(18 === 18); console.log(18 === '18'); // false","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/javascript/4%E6%93%8D%E4%BD%9C%E7%AC%A6(operator)/%E6%AF%94%E8%BE%83%E8%BF%90%E7%AE%97%E7%AC%A6.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"比较运算符"}],["meta",{"property":"og:description","content":"比较运算符 console.log(3 &gt;= 5); // false console.log(2 &lt;= 4); // true //1. 我们程序里面的等于符号 是 == 默认转换数据类型 会把字符串型的数据转换为数字型 只要求值相等就可以 console.log(3 == 5); // false console.log('pink老师' == '刘德华'); // flase console.log(18 == 18); // true console.log(18 == '18'); // true console.log(18 != 18); // false // 2. 我们程序里面有全等 一模一样 要求 两侧的值 还有 数据类型完全一致才可以 true console.log(18 === 18); console.log(18 === '18'); // false"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-01T12:59:38.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-12-01T12:59:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"比较运算符\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-01T12:59:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1701435578000,"updatedTime":1701435578000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.44,"words":133},"filePathRelative":"编程语言/javascript/4操作符(operator)/比较运算符.md","localizedDate":"2023年12月1日","excerpt":"<h1> 比较运算符</h1>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code>console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">3</span> <span class=\\"token operator\\">&gt;=</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// false</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">2</span> <span class=\\"token operator\\">&lt;=</span> <span class=\\"token number\\">4</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// true</span>\\n<span class=\\"token comment\\">//1. 我们程序里面的等于符号 是 ==  默认转换数据类型 会把字符串型的数据转换为数字型 只要求值相等就可以</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">3</span> <span class=\\"token operator\\">==</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// false</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'pink老师'</span> <span class=\\"token operator\\">==</span> <span class=\\"token string\\">'刘德华'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// flase</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">18</span> <span class=\\"token operator\\">==</span> <span class=\\"token number\\">18</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// true</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">18</span> <span class=\\"token operator\\">==</span> <span class=\\"token string\\">'18'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// true</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">18</span> <span class=\\"token operator\\">!=</span> <span class=\\"token number\\">18</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// false</span>\\n<span class=\\"token comment\\">// 2. 我们程序里面有全等 一模一样  要求 两侧的值 还有 数据类型完全一致才可以 true</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">18</span> <span class=\\"token operator\\">===</span> <span class=\\"token number\\">18</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">18</span> <span class=\\"token operator\\">===</span> <span class=\\"token string\\">'18'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// false</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
