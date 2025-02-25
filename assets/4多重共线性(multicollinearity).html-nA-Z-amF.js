const t=JSON.parse('{"key":"v-6207f965","path":"/2%E6%95%B0%E6%8D%AE%E6%8C%96%E6%8E%98/5%E7%BB%9F%E8%AE%A1%E5%AD%A6/12%E5%A4%9A%E5%85%83%E7%BA%BF%E6%80%A7%E5%9B%9E%E5%BD%92/4%E5%A4%9A%E9%87%8D%E5%85%B1%E7%BA%BF%E6%80%A7(multicollinearity).html","title":"多重共线性","lang":"zh-CN","frontmatter":{"description":"多重共线性 多重共线性（Multicollinearity）是指线性回归模型中的解释变量之间由于存在精确相关关系或高度相关关系而使模型估计失真或难以估计准确。 因为多重共线性其实指的是自变量之间存在线性关系，既然是之间，那至少得有两个自变量，两个及两个以上即为多，所以称之为多重。如果含两个及以上自变量的Logistic回归被称为多重Logistic回归（一般叫法是多因素Logistic回归），含两个及以上自变量的Cox回归被称为多重Cox回归(一般叫做多因素Cox回归)，那么和多重线性回归一样，多重Logistic回归，多重Cox回归中也可能存在多重共线性的问题。","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/2%E6%95%B0%E6%8D%AE%E6%8C%96%E6%8E%98/5%E7%BB%9F%E8%AE%A1%E5%AD%A6/12%E5%A4%9A%E5%85%83%E7%BA%BF%E6%80%A7%E5%9B%9E%E5%BD%92/4%E5%A4%9A%E9%87%8D%E5%85%B1%E7%BA%BF%E6%80%A7(multicollinearity).html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"多重共线性"}],["meta",{"property":"og:description","content":"多重共线性 多重共线性（Multicollinearity）是指线性回归模型中的解释变量之间由于存在精确相关关系或高度相关关系而使模型估计失真或难以估计准确。 因为多重共线性其实指的是自变量之间存在线性关系，既然是之间，那至少得有两个自变量，两个及两个以上即为多，所以称之为多重。如果含两个及以上自变量的Logistic回归被称为多重Logistic回归（一般叫法是多因素Logistic回归），含两个及以上自变量的Cox回归被称为多重Cox回归(一般叫做多因素Cox回归)，那么和多重线性回归一样，多重Logistic回归，多重Cox回归中也可能存在多重共线性的问题。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T10:13:52.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"多重共线性"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-25T10:13:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"多重共线性\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2025-02-25T10:13:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"线代理解多重共线性","slug":"线代理解多重共线性","link":"#线代理解多重共线性","children":[]},{"level":2,"title":"直观解释","slug":"直观解释","link":"#直观解释","children":[]},{"level":2,"title":"具体案例","slug":"具体案例","link":"#具体案例","children":[]},{"level":2,"title":"方差膨胀因子","slug":"方差膨胀因子","link":"#方差膨胀因子","children":[]},{"level":2,"title":"多重共线性问题的处理","slug":"多重共线性问题的处理","link":"#多重共线性问题的处理","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1740478432000,"updatedTime":1740478432000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":4.68,"words":1405},"filePathRelative":"2数据挖掘/5统计学/12多元线性回归/4多重共线性(multicollinearity).md","localizedDate":"2025年2月25日","excerpt":"<h1> 多重共线性</h1>\\n<p>多重共线性（Multicollinearity）是指线性回归模型中的解释变量之间由于存在精确相关关系或高度相关关系而使模型估计失真或难以估计准确。</p>\\n<p>因为多重共线性其实指的是自变量之间存在线性关系，既然是之间，那至少得有两个自变量，两个及两个以上即为多，所以称之为多重。如果含两个及以上自变量的Logistic回归被称为多重Logistic回归（一般叫法是多因素Logistic回归），含两个及以上自变量的Cox回归被称为多重Cox回归(一般叫做多因素Cox回归)，那么和多重线性回归一样，多重Logistic回归，多重Cox回归中也可能存在多重共线性的问题。</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{t as data};
