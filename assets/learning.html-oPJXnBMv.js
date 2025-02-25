const s=JSON.parse('{"key":"v-f048c7ea","path":"/1%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1%E7%AE%97%E6%B3%95%E5%8E%9F%E7%90%86/4%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0/3optimize/learning.html","title":"learning","lang":"zh-CN","frontmatter":{"description":"learning 图像问题不同的解决思路: 1.png 深度学习的优势是构建end-to-end的方式, 是通用的解决问题的模式 损失函数(loss function) 损失函数表示当前的网络权重对监督数据有多大程度的不拟合, 一般使用均方误和交叉熵误差. 均方误(MSE) 均方误差(mean squared error) E=12∑k(yk−tk)2E=\\\\frac{1}{2}\\\\sum_k(y_k-t_k)^2E=21​∑k​(yk​−tk​)2 yky_kyk​表示神经网络的输出, tkt_ktk​表示监督数据, kkk表示数据的维数, 如在手写数字识别例子中yk,tky_k,t_kyk​,tk​为","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/1%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1%E7%AE%97%E6%B3%95%E5%8E%9F%E7%90%86/4%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0/3optimize/learning.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"learning"}],["meta",{"property":"og:description","content":"learning 图像问题不同的解决思路: 1.png 深度学习的优势是构建end-to-end的方式, 是通用的解决问题的模式 损失函数(loss function) 损失函数表示当前的网络权重对监督数据有多大程度的不拟合, 一般使用均方误和交叉熵误差. 均方误(MSE) 均方误差(mean squared error) E=12∑k(yk−tk)2E=\\\\frac{1}{2}\\\\sum_k(y_k-t_k)^2E=21​∑k​(yk​−tk​)2 yky_kyk​表示神经网络的输出, tkt_ktk​表示监督数据, kkk表示数据的维数, 如在手写数字识别例子中yk,tky_k,t_kyk​,tk​为"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T10:13:52.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"learning"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-25T10:13:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"learning\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2025-02-25T10:13:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"损失函数(loss function)","slug":"损失函数-loss-function","link":"#损失函数-loss-function","children":[]},{"level":2,"title":"均方误(MSE)","slug":"均方误-mse","link":"#均方误-mse","children":[]},{"level":2,"title":"交叉熵误差(cross entropy error)","slug":"交叉熵误差-cross-entropy-error","link":"#交叉熵误差-cross-entropy-error","children":[]},{"level":2,"title":"mini-batch学习","slug":"mini-batch学习","link":"#mini-batch学习","children":[]},{"level":2,"title":"学习算法实现","slug":"学习算法实现","link":"#学习算法实现","children":[]},{"level":2,"title":"进行训练","slug":"进行训练","link":"#进行训练","children":[]}],"git":{"createdTime":1740478432000,"updatedTime":1740478432000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":6.12,"words":1835},"filePathRelative":"1机器学习/1算法原理/4深度学习/3optimize/learning.md","localizedDate":"2025年2月25日","excerpt":"<h1> learning</h1>\\n<p>图像问题不同的解决思路:\\n<a href=\\"1.png\\">1.png</a>\\n深度学习的优势是构建<code>end-to-end</code>的方式, 是通用的解决问题的模式</p>\\n<h2> 损失函数(loss function)</h2>\\n<p>损失函数表示当前的网络权重对监督数据有多大程度的不拟合, 一般使用均方误和交叉熵误差.</p>\\n<h2> 均方误(MSE)</h2>\\n<p>均方误差(mean squared error)\\n<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mo>∑</mo><mi>k</mi></msub><mo stretchy=\\"false\\">(</mo><msub><mi>y</mi><mi>k</mi></msub><mo>−</mo><msub><mi>t</mi><mi>k</mi></msub><msup><mo stretchy=\\"false\\">)</mo><mn>2</mn></msup></mrow><annotation encoding=\\"application/x-tex\\">E=\\\\frac{1}{2}\\\\sum_k(y_k-t_k)^2</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05764em;\\">E</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.1901em;vertical-align:-0.345em;\\"></span><span class=\\"mord\\"><span class=\\"mopen nulldelimiter\\"></span><span class=\\"mfrac\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8451em;\\"><span style=\\"top:-2.655em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span><span style=\\"top:-3.23em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"frac-line\\" style=\\"border-bottom-width:0.04em;\\"></span></span><span style=\\"top:-3.394em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">1</span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.345em;\\"><span></span></span></span></span></span><span class=\\"mclose nulldelimiter\\"></span></span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mop\\"><span class=\\"mop op-symbol small-op\\" style=\\"position:relative;top:0em;\\">∑</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.1864em;\\"><span style=\\"top:-2.4003em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.03148em;\\">k</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.2997em;\\"><span></span></span></span></span></span></span><span class=\\"mopen\\">(</span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">y</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3361em;\\"><span style=\\"top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.03148em;\\">k</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">−</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.0641em;vertical-align:-0.25em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">t</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3361em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.03148em;\\">k</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mclose\\"><span class=\\"mclose\\">)</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8141em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span></span></span></span></span></span></span></span>\\n<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msub><mi>y</mi><mi>k</mi></msub></mrow><annotation encoding=\\"application/x-tex\\">y_k</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.625em;vertical-align:-0.1944em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">y</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3361em;\\"><span style=\\"top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.03148em;\\">k</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span></span></span></span>表示神经网络的输出, <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msub><mi>t</mi><mi>k</mi></msub></mrow><annotation encoding=\\"application/x-tex\\">t_k</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.7651em;vertical-align:-0.15em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">t</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3361em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.03148em;\\">k</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span></span></span></span>表示监督数据, <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\\"application/x-tex\\">k</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6944em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03148em;\\">k</span></span></span></span>表示数据的维数, 如在手写数字识别例子中<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msub><mi>y</mi><mi>k</mi></msub><mo separator=\\"true\\">,</mo><msub><mi>t</mi><mi>k</mi></msub></mrow><annotation encoding=\\"application/x-tex\\">y_k,t_k</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8095em;vertical-align:-0.1944em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">y</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3361em;\\"><span style=\\"top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.03148em;\\">k</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">t</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3361em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.03148em;\\">k</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span></span></span></span>为</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{s as data};
