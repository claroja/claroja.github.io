const s=JSON.parse('{"key":"v-f0312f36","path":"/2%E6%95%B0%E6%8D%AE%E6%8C%96%E6%8E%98/3%E6%A6%82%E7%8E%87%E8%AE%BA/3%E7%A6%BB%E6%95%A3%E9%9A%8F%E6%9C%BA%E5%8F%98%E9%87%8F/%E7%A6%BB%E6%95%A3%E5%88%86%E5%B8%83/%E4%BA%8C%E9%A1%B9%E5%88%86%E5%B8%83.html","title":"二项分布","lang":"zh-CN","frontmatter":{"description":"二项分布 概念 二项分布(binomial distribution)是按照成功概率为p进行了n次伯努利试验时的成功次数的分布. 因为成功的次数可以从0次到n次, 可以取值是(0,1,2,3,...,n)(0,1,2,3,...,n)(0,1,2,3,...,n). 二项分布参数有成功概率p和试验次数n两个, 记作Bin(n,p). 它的概率函数如下, 其中CnxC_n^xCnx​称为组合数, 表示从n个不同的事物中选择x个, Cnx=n!x!(n−x)!C_n^x = \\\\frac{n!}{x!(n-x)!}Cnx​=x!(n−x)!n!​:","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/2%E6%95%B0%E6%8D%AE%E6%8C%96%E6%8E%98/3%E6%A6%82%E7%8E%87%E8%AE%BA/3%E7%A6%BB%E6%95%A3%E9%9A%8F%E6%9C%BA%E5%8F%98%E9%87%8F/%E7%A6%BB%E6%95%A3%E5%88%86%E5%B8%83/%E4%BA%8C%E9%A1%B9%E5%88%86%E5%B8%83.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"二项分布"}],["meta",{"property":"og:description","content":"二项分布 概念 二项分布(binomial distribution)是按照成功概率为p进行了n次伯努利试验时的成功次数的分布. 因为成功的次数可以从0次到n次, 可以取值是(0,1,2,3,...,n)(0,1,2,3,...,n)(0,1,2,3,...,n). 二项分布参数有成功概率p和试验次数n两个, 记作Bin(n,p). 它的概率函数如下, 其中CnxC_n^xCnx​称为组合数, 表示从n个不同的事物中选择x个, Cnx=n!x!(n−x)!C_n^x = \\\\frac{n!}{x!(n-x)!}Cnx​=x!(n−x)!n!​:"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T10:13:52.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"二项分布"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-25T10:13:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"二项分布\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2025-02-25T10:13:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":2,"title":"scipy","slug":"scipy","link":"#scipy","children":[]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[{"level":3,"title":"如何判断是不是二项分布","slug":"如何判断是不是二项分布","link":"#如何判断是不是二项分布","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1740478432000,"updatedTime":1740478432000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":4.44,"words":1331},"filePathRelative":"2数据挖掘/3概率论/3离散随机变量/离散分布/二项分布.md","localizedDate":"2025年2月25日","excerpt":"<h1> 二项分布</h1>\\n<h2> 概念</h2>\\n<p>二项分布(binomial distribution)是按照成功概率为p进行了n次伯努利试验时的成功次数的分布. 因为成功的次数可以从0次到n次, 可以取值是<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mo stretchy=\\"false\\">(</mo><mn>0</mn><mo separator=\\"true\\">,</mo><mn>1</mn><mo separator=\\"true\\">,</mo><mn>2</mn><mo separator=\\"true\\">,</mo><mn>3</mn><mo separator=\\"true\\">,</mo><mi mathvariant=\\"normal\\">.</mi><mi mathvariant=\\"normal\\">.</mi><mi mathvariant=\\"normal\\">.</mi><mo separator=\\"true\\">,</mo><mi>n</mi><mo stretchy=\\"false\\">)</mo></mrow><annotation encoding=\\"application/x-tex\\">(0,1,2,3,...,n)</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mopen\\">(</span><span class=\\"mord\\">0</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\">1</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\">2</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\">3</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\">...</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord mathnormal\\">n</span><span class=\\"mclose\\">)</span></span></span></span>.\\n二项分布参数有成功概率p和试验次数n两个, 记作Bin(n,p). 它的概率函数如下, 其中<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msubsup><mi>C</mi><mi>n</mi><mi>x</mi></msubsup></mrow><annotation encoding=\\"application/x-tex\\">C_n^x</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.9303em;vertical-align:-0.247em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.07153em;\\">C</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.6644em;\\"><span style=\\"top:-2.453em;margin-left:-0.0715em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\">n</span></span></span><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\">x</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.247em;\\"><span></span></span></span></span></span></span></span></span></span>称为组合数, 表示从n个不同的事物中选择x个, <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msubsup><mi>C</mi><mi>n</mi><mi>x</mi></msubsup><mo>=</mo><mfrac><mrow><mi>n</mi><mo stretchy=\\"false\\">!</mo></mrow><mrow><mi>x</mi><mo stretchy=\\"false\\">!</mo><mo stretchy=\\"false\\">(</mo><mi>n</mi><mo>−</mo><mi>x</mi><mo stretchy=\\"false\\">)</mo><mo stretchy=\\"false\\">!</mo></mrow></mfrac></mrow><annotation encoding=\\"application/x-tex\\">C_n^x = \\\\frac{n!}{x!(n-x)!}</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.9303em;vertical-align:-0.247em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.07153em;\\">C</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.6644em;\\"><span style=\\"top:-2.453em;margin-left:-0.0715em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\">n</span></span></span><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\">x</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.247em;\\"><span></span></span></span></span></span></span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.4001em;vertical-align:-0.52em;\\"></span><span class=\\"mord\\"><span class=\\"mopen nulldelimiter\\"></span><span class=\\"mfrac\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8801em;\\"><span style=\\"top:-2.655em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\">x</span><span class=\\"mclose mtight\\">!</span><span class=\\"mopen mtight\\">(</span><span class=\\"mord mathnormal mtight\\">n</span><span class=\\"mbin mtight\\">−</span><span class=\\"mord mathnormal mtight\\">x</span><span class=\\"mclose mtight\\">)!</span></span></span></span><span style=\\"top:-3.23em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"frac-line\\" style=\\"border-bottom-width:0.04em;\\"></span></span><span style=\\"top:-3.394em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\">n</span><span class=\\"mclose mtight\\">!</span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.52em;\\"><span></span></span></span></span></span><span class=\\"mclose nulldelimiter\\"></span></span></span></span></span>:</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{s as data};
