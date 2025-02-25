const s=JSON.parse('{"key":"v-6275e5e9","path":"/2%E6%95%B0%E6%8D%AE%E6%8C%96%E6%8E%98/3%E6%A6%82%E7%8E%87%E8%AE%BA/3%E7%A6%BB%E6%95%A3%E9%9A%8F%E6%9C%BA%E5%8F%98%E9%87%8F/%E7%A6%BB%E6%95%A3/%E6%9C%9F%E6%9C%9B.html","title":"期望","lang":"zh-CN","frontmatter":{"description":"期望 概率期望与数学均值的关系 一名气步枪运动员的打靶成绩如下（最高10环）： \\\\begin{array}{c|c} \\\\hline &amp;\\\\quad 第一次\\\\quad&amp;\\\\quad 第二次\\\\quad&amp;\\\\quad 第三次\\\\quad&amp;\\\\quad 第四次\\\\quad&amp;\\\\quad 第五次\\\\quad\\\\\\\\ \\\\hline \\\\\\\\ \\\\quad 小明\\\\quad &amp; 4 &amp; 10 &amp; 4 &amp; 4 &amp; 10 \\\\\\\\ \\\\hline \\\\end{array} 小明​第一次4​第二次10​第三次4​第四次4​第五次10​​","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/2%E6%95%B0%E6%8D%AE%E6%8C%96%E6%8E%98/3%E6%A6%82%E7%8E%87%E8%AE%BA/3%E7%A6%BB%E6%95%A3%E9%9A%8F%E6%9C%BA%E5%8F%98%E9%87%8F/%E7%A6%BB%E6%95%A3/%E6%9C%9F%E6%9C%9B.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"期望"}],["meta",{"property":"og:description","content":"期望 概率期望与数学均值的关系 一名气步枪运动员的打靶成绩如下（最高10环）： \\\\begin{array}{c|c} \\\\hline &amp;\\\\quad 第一次\\\\quad&amp;\\\\quad 第二次\\\\quad&amp;\\\\quad 第三次\\\\quad&amp;\\\\quad 第四次\\\\quad&amp;\\\\quad 第五次\\\\quad\\\\\\\\ \\\\hline \\\\\\\\ \\\\quad 小明\\\\quad &amp; 4 &amp; 10 &amp; 4 &amp; 4 &amp; 10 \\\\\\\\ \\\\hline \\\\end{array} 小明​第一次4​第二次10​第三次4​第四次4​第五次10​​"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T10:13:52.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-25T10:13:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"期望\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-25T10:13:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"概率期望与数学均值的关系","slug":"概率期望与数学均值的关系","link":"#概率期望与数学均值的关系","children":[]},{"level":2,"title":"离散的数学期望","slug":"离散的数学期望","link":"#离散的数学期望","children":[]},{"level":2,"title":"数学期望的性质","slug":"数学期望的性质","link":"#数学期望的性质","children":[{"level":3,"title":"线性","slug":"线性","link":"#线性","children":[]}]},{"level":2,"title":"彩票例子","slug":"彩票例子","link":"#彩票例子","children":[{"level":3,"title":"简化","slug":"简化","link":"#简化","children":[]}]},{"level":2,"title":"辛普森悖论","slug":"辛普森悖论","link":"#辛普森悖论","children":[]}],"git":{"createdTime":1740478432000,"updatedTime":1740478432000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":3.86,"words":1158},"filePathRelative":"2数据挖掘/3概率论/3离散随机变量/离散/期望.md","localizedDate":"2025年2月25日","excerpt":"<h1> 期望</h1>\\n<h2> 概率期望与数学均值的关系</h2>\\n<p>一名气步枪运动员的打靶成绩如下（最高10环）：</p>\\n<p class=\\"katex-block\\"><span class=\\"katex-display\\"><span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\" display=\\"block\\"><semantics><mrow></mrow><annotation encoding=\\"application/x-tex\\">\\n\\\\begin{array}{c|c}\\n    \\\\hline\\n    &amp;\\\\quad 第一次\\\\quad&amp;\\\\quad 第二次\\\\quad&amp;\\\\quad 第三次\\\\quad&amp;\\\\quad 第四次\\\\quad&amp;\\\\quad 第五次\\\\quad\\\\\\\\\\n    \\\\hline\\n    \\\\\\\\\\n    \\\\quad 小明\\\\quad &amp; 4 &amp; 10 &amp; 4 &amp; 4 &amp; 10 \\\\\\\\\\n    \\\\hline\\n\\\\end{array}\\n</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:3.64em;vertical-align:-1.55em;\\"></span><span class=\\"mord\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:2.09em;\\"><span style=\\"top:-4.05em;\\"><span class=\\"pstrut\\" style=\\"height:4.05em;\\"></span><span class=\\"mtable\\"><span class=\\"arraycolsep\\" style=\\"width:0.5em;\\"></span><span class=\\"col-align-c\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:2.05em;\\"><span style=\\"top:-4.21em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"mord\\"></span></span><span style=\\"top:-3.01em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"mord\\"></span></span><span style=\\"top:-1.81em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"mord\\"><span class=\\"mspace\\" style=\\"margin-right:1em;\\"></span><span class=\\"mord cjk_fallback\\">小明</span><span class=\\"mspace\\" style=\\"margin-right:1em;\\"></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.55em;\\"><span></span></span></span></span></span><span class=\\"arraycolsep\\" style=\\"width:0.5em;\\"></span><span class=\\"vertical-separator\\" style=\\"height:3.6em;border-right-width:0.04em;border-right-style:solid;margin:0 -0.02em;vertical-align:-1.55em;\\"></span><span class=\\"arraycolsep\\" style=\\"width:0.5em;\\"></span><span class=\\"col-align-c\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:2.05em;\\"><span style=\\"top:-4.21em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"mord\\"><span class=\\"mspace\\" style=\\"margin-right:1em;\\"></span><span class=\\"mord cjk_fallback\\">第一次</span><span class=\\"mspace\\" style=\\"margin-right:1em;\\"></span></span></span><span style=\\"top:-1.81em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\">4</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.55em;\\"><span></span></span></span></span></span><span class=\\"arraycolsep\\" style=\\"width:0.5em;\\"></span><span class=\\"arraycolsep\\" style=\\"width:0.5em;\\"></span><span class=\\"col-align-c\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:2.05em;\\"><span style=\\"top:-4.21em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"mord\\"><span class=\\"mspace\\" style=\\"margin-right:1em;\\"></span><span class=\\"mord cjk_fallback\\">第二次</span><span class=\\"mspace\\" style=\\"margin-right:1em;\\"></span></span></span><span style=\\"top:-1.81em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\">10</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.55em;\\"><span></span></span></span></span></span><span class=\\"arraycolsep\\" style=\\"width:0.5em;\\"></span><span class=\\"arraycolsep\\" style=\\"width:0.5em;\\"></span><span class=\\"col-align-c\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:2.05em;\\"><span style=\\"top:-4.21em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"mord\\"><span class=\\"mspace\\" style=\\"margin-right:1em;\\"></span><span class=\\"mord cjk_fallback\\">第三次</span><span class=\\"mspace\\" style=\\"margin-right:1em;\\"></span></span></span><span style=\\"top:-1.81em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\">4</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.55em;\\"><span></span></span></span></span></span><span class=\\"arraycolsep\\" style=\\"width:0.5em;\\"></span><span class=\\"arraycolsep\\" style=\\"width:0.5em;\\"></span><span class=\\"col-align-c\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:2.05em;\\"><span style=\\"top:-4.21em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"mord\\"><span class=\\"mspace\\" style=\\"margin-right:1em;\\"></span><span class=\\"mord cjk_fallback\\">第四次</span><span class=\\"mspace\\" style=\\"margin-right:1em;\\"></span></span></span><span style=\\"top:-1.81em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\">4</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.55em;\\"><span></span></span></span></span></span><span class=\\"arraycolsep\\" style=\\"width:0.5em;\\"></span><span class=\\"arraycolsep\\" style=\\"width:0.5em;\\"></span><span class=\\"col-align-c\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:2.05em;\\"><span style=\\"top:-4.21em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"mord\\"><span class=\\"mspace\\" style=\\"margin-right:1em;\\"></span><span class=\\"mord cjk_fallback\\">第五次</span><span class=\\"mspace\\" style=\\"margin-right:1em;\\"></span></span></span><span style=\\"top:-1.81em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\">10</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.55em;\\"><span></span></span></span></span></span><span class=\\"arraycolsep\\" style=\\"width:0.5em;\\"></span></span></span><span style=\\"top:-2.5em;\\"><span class=\\"pstrut\\" style=\\"height:4.05em;\\"></span><span class=\\"hline\\" style=\\"border-bottom-width:0.04em;\\"></span></span><span style=\\"top:-4.9em;\\"><span class=\\"pstrut\\" style=\\"height:4.05em;\\"></span><span class=\\"hline\\" style=\\"border-bottom-width:0.04em;\\"></span></span><span style=\\"top:-6.1em;\\"><span class=\\"pstrut\\" style=\\"height:4.05em;\\"></span><span class=\\"hline\\" style=\\"border-bottom-width:0.04em;\\"></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.55em;\\"><span></span></span></span></span></span></span></span></span></span></p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{s as data};
