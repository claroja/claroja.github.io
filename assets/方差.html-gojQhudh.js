const s=JSON.parse('{"key":"v-308640a4","path":"/2%E6%95%B0%E6%8D%AE%E6%8C%96%E6%8E%98/3%E6%A6%82%E7%8E%87%E8%AE%BA/4%E8%BF%9E%E7%BB%AD%E9%9A%8F%E6%9C%BA%E5%8F%98%E9%87%8F/%E5%9F%BA%E7%A1%80/%E6%96%B9%E5%B7%AE.html","title":"方差","lang":"zh-CN","frontmatter":{"description":"方差 方差 方差的定义依然是： Var(X)=E[(X−E(X))2] Var(X)=E\\\\left[\\\\Big(X-E(X)\\\\Big)^2\\\\right] Var(X)=E[(X−E(X))2]","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/2%E6%95%B0%E6%8D%AE%E6%8C%96%E6%8E%98/3%E6%A6%82%E7%8E%87%E8%AE%BA/4%E8%BF%9E%E7%BB%AD%E9%9A%8F%E6%9C%BA%E5%8F%98%E9%87%8F/%E5%9F%BA%E7%A1%80/%E6%96%B9%E5%B7%AE.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"方差"}],["meta",{"property":"og:description","content":"方差 方差 方差的定义依然是： Var(X)=E[(X−E(X))2] Var(X)=E\\\\left[\\\\Big(X-E(X)\\\\Big)^2\\\\right] Var(X)=E[(X−E(X))2]"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T10:13:52.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-25T10:13:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"方差\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-25T10:13:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"方差","slug":"方差-1","link":"#方差-1","children":[]},{"level":2,"title":"不等式","slug":"不等式","link":"#不等式","children":[]}],"git":{"createdTime":1740478432000,"updatedTime":1740478432000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.56,"words":167},"filePathRelative":"2数据挖掘/3概率论/4连续随机变量/基础/方差.md","localizedDate":"2025年2月25日","excerpt":"<h1> 方差</h1>\\n<h2> 方差</h2>\\n<p>方差的定义依然是：</p>\\n<p class=\\"katex-block\\"><span class=\\"katex-display\\"><span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\" display=\\"block\\"><semantics><mrow><mi>V</mi><mi>a</mi><mi>r</mi><mo stretchy=\\"false\\">(</mo><mi>X</mi><mo stretchy=\\"false\\">)</mo><mo>=</mo><mi>E</mi><mrow><mo fence=\\"true\\">[</mo><mo fence=\\"false\\" stretchy=\\"true\\" minsize=\\"1.8em\\" maxsize=\\"1.8em\\">(</mo><mi>X</mi><mo>−</mo><mi>E</mi><mo stretchy=\\"false\\">(</mo><mi>X</mi><mo stretchy=\\"false\\">)</mo><msup><mo fence=\\"false\\" stretchy=\\"true\\" minsize=\\"1.8em\\" maxsize=\\"1.8em\\">)</mo><mn>2</mn></msup><mo fence=\\"true\\">]</mo></mrow></mrow><annotation encoding=\\"application/x-tex\\">\\nVar(X)=E\\\\left[\\\\Big(X-E(X)\\\\Big)^2\\\\right]\\n</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\">Va</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.02778em;\\">r</span><span class=\\"mopen\\">(</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.07847em;\\">X</span><span class=\\"mclose\\">)</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:2.4em;vertical-align:-0.95em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05764em;\\">E</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"minner\\"><span class=\\"mopen delimcenter\\" style=\\"top:0em;\\"><span class=\\"delimsizing size3\\">[</span></span><span class=\\"mord\\"><span class=\\"delimsizing size2\\">(</span></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.07847em;\\">X</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">−</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05764em;\\">E</span><span class=\\"mopen\\">(</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.07847em;\\">X</span><span class=\\"mclose\\">)</span><span class=\\"mord\\"><span class=\\"mord\\"><span class=\\"delimsizing size2\\">)</span></span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.354em;\\"><span style=\\"top:-3.6029em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span></span></span></span></span><span class=\\"mclose delimcenter\\" style=\\"top:0em;\\"><span class=\\"delimsizing size3\\">]</span></span></span></span></span></span></span></p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{s as data};
