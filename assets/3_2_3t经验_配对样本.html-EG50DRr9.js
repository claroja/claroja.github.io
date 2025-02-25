const s=JSON.parse('{"key":"v-31dc6162","path":"/2%E6%95%B0%E6%8D%AE%E6%8C%96%E6%8E%98/5%E7%BB%9F%E8%AE%A1%E5%AD%A6/8%E5%81%87%E8%AE%BE%E6%A3%80%E9%AA%8C/3_2_3t%E7%BB%8F%E9%AA%8C_%E9%85%8D%E5%AF%B9%E6%A0%B7%E6%9C%AC.html","title":"配对样本的t检验","lang":"zh-CN","frontmatter":{"description":"配对样本的t检验 配对样本的t检验 配对样本t检验(paired t-test)是对配对样本平均值差异的检验(假定平均值差异服从正态分布时)这个检验可以用于: 对同一个研究对象给与两种不同的处理结果 对同一个研究对象的试验前后效果进行比较 原理就是: 两个样本的均值应该相等, 他们相互间的均值的差或者差的均值服从正态分布. 检验步骤如下: 提出假设 原假设H0:μ=μ1=μ2H_0: \\\\mu=\\\\mu_{1}=\\\\mu_{2}H0​:μ=μ1​=μ2​ 被选假设H1:μ1≠μ2H_1: \\\\mu_{1} \\\\neq \\\\mu_{2}H1​:μ1​=μ2​ 建立检验统计量. 设两个总体XXX和YYY都服从正态分布, 两个样本之差d∼N(μ,σ2)d \\\\sim N(\\\\mu,\\\\sigma^2)d∼N(μ,σ2)","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/2%E6%95%B0%E6%8D%AE%E6%8C%96%E6%8E%98/5%E7%BB%9F%E8%AE%A1%E5%AD%A6/8%E5%81%87%E8%AE%BE%E6%A3%80%E9%AA%8C/3_2_3t%E7%BB%8F%E9%AA%8C_%E9%85%8D%E5%AF%B9%E6%A0%B7%E6%9C%AC.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"配对样本的t检验"}],["meta",{"property":"og:description","content":"配对样本的t检验 配对样本的t检验 配对样本t检验(paired t-test)是对配对样本平均值差异的检验(假定平均值差异服从正态分布时)这个检验可以用于: 对同一个研究对象给与两种不同的处理结果 对同一个研究对象的试验前后效果进行比较 原理就是: 两个样本的均值应该相等, 他们相互间的均值的差或者差的均值服从正态分布. 检验步骤如下: 提出假设 原假设H0:μ=μ1=μ2H_0: \\\\mu=\\\\mu_{1}=\\\\mu_{2}H0​:μ=μ1​=μ2​ 被选假设H1:μ1≠μ2H_1: \\\\mu_{1} \\\\neq \\\\mu_{2}H1​:μ1​=μ2​ 建立检验统计量. 设两个总体XXX和YYY都服从正态分布, 两个样本之差d∼N(μ,σ2)d \\\\sim N(\\\\mu,\\\\sigma^2)d∼N(μ,σ2)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T10:13:52.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-25T10:13:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"配对样本的t检验\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-25T10:13:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":3,"title":"配对样本的t检验","slug":"配对样本的t检验-1","link":"#配对样本的t检验-1","children":[]}],"git":{"createdTime":1740478432000,"updatedTime":1740478432000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":2.96,"words":889},"filePathRelative":"2数据挖掘/5统计学/8假设检验/3_2_3t经验_配对样本.md","localizedDate":"2025年2月25日","excerpt":"<h1> 配对样本的t检验</h1>\\n<h3> 配对样本的t检验</h3>\\n<p><code>配对样本t检验(paired t-test)</code>是对配对样本平均值差异的检验(假定平均值差异服从正态分布时)这个检验可以用于:</p>\\n<ul>\\n<li>对同一个研究对象给与两种不同的处理结果</li>\\n<li>对同一个研究对象的试验前后效果进行比较</li>\\n</ul>\\n<p>原理就是: 两个样本的均值应该相等, 他们相互间的均值的差或者差的均值服从正态分布.</p>\\n<p>检验步骤如下:</p>\\n<ol>\\n<li>\\n<p>提出假设</p>\\n<ul>\\n<li>原假设<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msub><mi>H</mi><mn>0</mn></msub><mo>:</mo><mi>μ</mi><mo>=</mo><msub><mi>μ</mi><mn>1</mn></msub><mo>=</mo><msub><mi>μ</mi><mn>2</mn></msub></mrow><annotation encoding=\\"application/x-tex\\">H_0: \\\\mu=\\\\mu_{1}=\\\\mu_{2}</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8333em;vertical-align:-0.15em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.08125em;\\">H</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:-0.0813em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">0</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">:</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.625em;vertical-align:-0.1944em;\\"></span><span class=\\"mord mathnormal\\">μ</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.625em;vertical-align:-0.1944em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">μ</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">1</span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.625em;vertical-align:-0.1944em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">μ</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span></span></span></span></li>\\n<li>被选假设<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msub><mi>H</mi><mn>1</mn></msub><mo>:</mo><msub><mi>μ</mi><mn>1</mn></msub><mo mathvariant=\\"normal\\">≠</mo><msub><mi>μ</mi><mn>2</mn></msub></mrow><annotation encoding=\\"application/x-tex\\">H_1: \\\\mu_{1} \\\\neq \\\\mu_{2}</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8333em;vertical-align:-0.15em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.08125em;\\">H</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:-0.0813em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">1</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">:</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8889em;vertical-align:-0.1944em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">μ</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">1</span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\"><span class=\\"mrel\\"><span class=\\"mord vbox\\"><span class=\\"thinbox\\"><span class=\\"rlap\\"><span class=\\"strut\\" style=\\"height:0.8889em;vertical-align:-0.1944em;\\"></span><span class=\\"inner\\"><span class=\\"mord\\"><span class=\\"mrel\\"></span></span></span><span class=\\"fix\\"></span></span></span></span></span><span class=\\"mrel\\">=</span></span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.625em;vertical-align:-0.1944em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">μ</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span></span></span></span></li>\\n</ul>\\n</li>\\n<li>\\n<p>建立检验统计量. 设两个总体<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>X</mi></mrow><annotation encoding=\\"application/x-tex\\">X</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.07847em;\\">X</span></span></span></span>和<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>Y</mi></mrow><annotation encoding=\\"application/x-tex\\">Y</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.22222em;\\">Y</span></span></span></span>都服从正态分布, 两个样本之差<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>d</mi><mo>∼</mo><mi>N</mi><mo stretchy=\\"false\\">(</mo><mi>μ</mi><mo separator=\\"true\\">,</mo><msup><mi>σ</mi><mn>2</mn></msup><mo stretchy=\\"false\\">)</mo></mrow><annotation encoding=\\"application/x-tex\\">d \\\\sim N(\\\\mu,\\\\sigma^2)</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6944em;\\"></span><span class=\\"mord mathnormal\\">d</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">∼</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.0641em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.10903em;\\">N</span><span class=\\"mopen\\">(</span><span class=\\"mord mathnormal\\">μ</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">σ</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8141em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span></span></span></span></span><span class=\\"mclose\\">)</span></span></span></span></p>\\n</li>\\n</ol>","copyright":{"author":"王新宇"},"autoDesc":true}');export{s as data};
