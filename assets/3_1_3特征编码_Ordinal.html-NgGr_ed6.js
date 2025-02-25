const e=JSON.parse('{"key":"v-365df551","path":"/1%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1%E7%AE%97%E6%B3%95%E5%8E%9F%E7%90%86/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/3%E7%89%B9%E5%BE%81%E7%BC%96%E7%A0%81/3_1_3%E7%89%B9%E5%BE%81%E7%BC%96%E7%A0%81_Ordinal.html","title":"顺序编码(OrdinalEncoder)","lang":"zh-CN","frontmatter":{"description":"顺序编码(OrdinalEncoder) 序号编码通常用于处理类别间具有大小关系的数据。如产品等级分为高、中、低三档，存在“高&gt;中&gt;低”的排序关系, 则高表示为3，中表示为2，低表示为1 最佳实践 打比赛中, 测试集是批量给出的, 使用pandas的map方法更快 真实应用中, 用于生产是单条, 单条处理, 适用scikit进行单调转换(虽然也可以用map转换, 但是one-hot编码pandas对单条处理不友好, 为了和onehot保持一致, 所以建议使用scikit)","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/1%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1%E7%AE%97%E6%B3%95%E5%8E%9F%E7%90%86/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/3%E7%89%B9%E5%BE%81%E7%BC%96%E7%A0%81/3_1_3%E7%89%B9%E5%BE%81%E7%BC%96%E7%A0%81_Ordinal.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"顺序编码(OrdinalEncoder)"}],["meta",{"property":"og:description","content":"顺序编码(OrdinalEncoder) 序号编码通常用于处理类别间具有大小关系的数据。如产品等级分为高、中、低三档，存在“高&gt;中&gt;低”的排序关系, 则高表示为3，中表示为2，低表示为1 最佳实践 打比赛中, 测试集是批量给出的, 使用pandas的map方法更快 真实应用中, 用于生产是单条, 单条处理, 适用scikit进行单调转换(虽然也可以用map转换, 但是one-hot编码pandas对单条处理不友好, 为了和onehot保持一致, 所以建议使用scikit)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T10:13:52.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-25T10:13:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"顺序编码(OrdinalEncoder)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-25T10:13:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[]},{"level":2,"title":"OrdinalEncoder","slug":"ordinalencoder","link":"#ordinalencoder","children":[{"level":3,"title":"最佳实践","slug":"最佳实践-1","link":"#最佳实践-1","children":[]},{"level":3,"title":"构造参数","slug":"构造参数","link":"#构造参数","children":[]},{"level":3,"title":"属性","slug":"属性","link":"#属性","children":[]}]},{"level":2,"title":"pandas","slug":"pandas","link":"#pandas","children":[]},{"level":2,"title":"category_encoders","slug":"category-encoders","link":"#category-encoders","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1740478432000,"updatedTime":1740478432000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":2.62,"words":787},"filePathRelative":"1机器学习/1算法原理/2机器学习流程/3特征编码/3_1_3特征编码_Ordinal.md","localizedDate":"2025年2月25日","excerpt":"<h1> 顺序编码(OrdinalEncoder)</h1>\\n<p>序号编码通常用于处理类别间具有大小关系的数据。如产品等级分为高、中、低三档，存在“高&gt;中&gt;低”的排序关系, 则高表示为3，中表示为2，低表示为1</p>\\n<h2> 最佳实践</h2>\\n<ol>\\n<li>打比赛中, 测试集是批量给出的, 使用pandas的map方法更快</li>\\n<li>真实应用中, 用于生产是单条, 单条处理, 适用scikit进行单调转换(虽然也可以用map转换, 但是one-hot编码pandas对单条处理不友好, 为了和onehot保持一致, 所以建议使用scikit)</li>\\n</ol>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
