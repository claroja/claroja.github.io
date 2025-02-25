const e=JSON.parse('{"key":"v-57af12e4","path":"/2%E6%95%B0%E6%8D%AE%E6%8C%96%E6%8E%98/8cda/level3/4_7%E5%85%B3%E8%81%94%E8%A7%84%E5%88%99.html","title":"","lang":"zh-CN","frontmatter":{"description":"关联规则的概念 关联规则的评估指标 - 支持度、置信度 Apriori 算法 - 暴力法的弊端 Apriori 算法 - Apriori 算法的实例说明 - 候选项集的产生 Apriori 算法 - Apriori 算法的实例说明 - 候选项集的缩减 Apriori 算法的缺点及瓶颈 FP-Growth 算法 再谈评估指标 支持度与置信度的问题、提升度指标、关联规则的生成 关联规则的延伸 虚拟商品、负向关联规则、相依性网络 Association Rule Mining Finding frequent patterns or associations among itemsets in transaction databases Applications Market basket analysis (marketing strategy: items to put on sale at reduced prices), cross-marketing, catalog design, shelf space layout design, etc. Examples Rule form: Body → Head [Support, Confidence] buys(x, \\"Computer\\") → buys(x, \\"Software\\") [2 %, 60 %] major(x, \\"CS\\") Λ takes (x, \\"DB) → grade(x, \\"A\\") [1 %, 75%]","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/2%E6%95%B0%E6%8D%AE%E6%8C%96%E6%8E%98/8cda/level3/4_7%E5%85%B3%E8%81%94%E8%A7%84%E5%88%99.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:description","content":"关联规则的概念 关联规则的评估指标 - 支持度、置信度 Apriori 算法 - 暴力法的弊端 Apriori 算法 - Apriori 算法的实例说明 - 候选项集的产生 Apriori 算法 - Apriori 算法的实例说明 - 候选项集的缩减 Apriori 算法的缺点及瓶颈 FP-Growth 算法 再谈评估指标 支持度与置信度的问题、提升度指标、关联规则的生成 关联规则的延伸 虚拟商品、负向关联规则、相依性网络 Association Rule Mining Finding frequent patterns or associations among itemsets in transaction databases Applications Market basket analysis (marketing strategy: items to put on sale at reduced prices), cross-marketing, catalog design, shelf space layout design, etc. Examples Rule form: Body → Head [Support, Confidence] buys(x, \\"Computer\\") → buys(x, \\"Software\\") [2 %, 60 %] major(x, \\"CS\\") Λ takes (x, \\"DB) → grade(x, \\"A\\") [1 %, 75%]"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T10:13:52.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-25T10:13:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-25T10:13:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Rule Measures:Support and Confidence","slug":"rule-measures-support-and-confidence","link":"#rule-measures-support-and-confidence","children":[]},{"level":2,"title":"Apriori算法","slug":"apriori算法","link":"#apriori算法","children":[]},{"level":2,"title":"Apriori算法的实例说明","slug":"apriori算法的实例说明","link":"#apriori算法的实例说明","children":[]},{"level":2,"title":"Performance Bottlenecks","slug":"performance-bottlenecks","link":"#performance-bottlenecks","children":[]},{"level":2,"title":"FP-Growth算法","slug":"fp-growth算法","link":"#fp-growth算法","children":[]},{"level":2,"title":"再谈评估指标","slug":"再谈评估指标","link":"#再谈评估指标","children":[]},{"level":2,"title":"关联规则的生成","slug":"关联规则的生成","link":"#关联规则的生成","children":[]},{"level":2,"title":"关联规则的延伸","slug":"关联规则的延伸","link":"#关联规则的延伸","children":[]},{"level":2,"title":"序列模式","slug":"序列模式","link":"#序列模式","children":[]}],"git":{"createdTime":1740478432000,"updatedTime":1740478432000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":4.9,"words":1470},"filePathRelative":"2数据挖掘/8cda/level3/4_7关联规则.md","localizedDate":"2025年2月25日","excerpt":"<p>关联规则的概念\\n关联规则的评估指标 - 支持度、置信度\\nApriori 算法 - 暴力法的弊端\\nApriori 算法 - Apriori 算法的实例说明 - 候选项集的产生\\nApriori 算法 - Apriori 算法的实例说明 - 候选项集的缩减\\nApriori 算法的缺点及瓶颈\\nFP-Growth 算法</p>\\n<ul>\\n<li>\\n<p>再谈评估指标</p>\\n</li>\\n<li>\\n<p>支持度与置信度的问题、提升度指标、关联规则的生成</p>\\n</li>\\n<li>\\n<p>关联规则的延伸</p>\\n</li>\\n<li>\\n<p>虚拟商品、负向关联规则、相依性网络</p>\\n</li>\\n<li>\\n<p>Association Rule Mining\\nFinding frequent patterns or associations among itemsets in transaction databases</p>\\n</li>\\n<li>\\n<p>Applications\\nMarket basket analysis (marketing strategy: items to put on sale at reduced prices), cross-marketing, catalog design, shelf space layout design, etc.</p>\\n</li>\\n<li>\\n<p>Examples</p>\\n<ul>\\n<li>Rule form: Body → Head [Support, Confidence]</li>\\n<li>buys(x, \\"Computer\\") → buys(x, \\"Software\\") [2 %, 60 %]</li>\\n<li>major(x, \\"CS\\") Λ takes (x, \\"DB) → grade(x, \\"A\\") [1 %, 75%]</li>\\n</ul>\\n</li>\\n</ul>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
