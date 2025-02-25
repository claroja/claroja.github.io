const e=JSON.parse('{"key":"v-5b33cad2","path":"/1%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1%E7%AE%97%E6%B3%95%E5%8E%9F%E7%90%86/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/3%E7%89%B9%E5%BE%81%E7%BC%96%E7%A0%81/3_1_10%E7%89%B9%E5%BE%81%E7%BC%96%E7%A0%81_WOE.html","title":"OWE编码(WOEEncoder)","lang":"zh-CN","frontmatter":{"description":"OWE编码(WOEEncoder) WOE（Weight of Evidence）叫做证据权重, 只能用于二进制目标变量，即0/1的目标变量。 处理缺失值：当数据源没有100%覆盖时，那就会存在缺失值，此时可以把null单独作为一个分箱。这点在分数据源建模时非常有用，可以有效将覆盖率哪怕只有20%的数据源利用起来。 处理异常值：当数据中存在离群点时，可以把其通过分箱离散化处理，从而提高变量的鲁棒性（抗干扰能力）。例如，age若出现200这种异常值，可分入“age &gt; 60”这个分箱里，排除影响。 业务解释性：我们习惯于线性判断变量的作用，当x越来越大，y就越来越大。但实际x与y之间经常存在着非线性关系，此时可经过WOE变换。","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/1%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1%E7%AE%97%E6%B3%95%E5%8E%9F%E7%90%86/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/3%E7%89%B9%E5%BE%81%E7%BC%96%E7%A0%81/3_1_10%E7%89%B9%E5%BE%81%E7%BC%96%E7%A0%81_WOE.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"OWE编码(WOEEncoder)"}],["meta",{"property":"og:description","content":"OWE编码(WOEEncoder) WOE（Weight of Evidence）叫做证据权重, 只能用于二进制目标变量，即0/1的目标变量。 处理缺失值：当数据源没有100%覆盖时，那就会存在缺失值，此时可以把null单独作为一个分箱。这点在分数据源建模时非常有用，可以有效将覆盖率哪怕只有20%的数据源利用起来。 处理异常值：当数据中存在离群点时，可以把其通过分箱离散化处理，从而提高变量的鲁棒性（抗干扰能力）。例如，age若出现200这种异常值，可分入“age &gt; 60”这个分箱里，排除影响。 业务解释性：我们习惯于线性判断变量的作用，当x越来越大，y就越来越大。但实际x与y之间经常存在着非线性关系，此时可经过WOE变换。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T10:13:52.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-25T10:13:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"OWE编码(WOEEncoder)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-25T10:13:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"pandas","slug":"pandas","link":"#pandas","children":[]},{"level":2,"title":"category_encoders","slug":"category-encoders","link":"#category-encoders","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1740478432000,"updatedTime":1740478432000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":2.13,"words":638},"filePathRelative":"1机器学习/1算法原理/2机器学习流程/3特征编码/3_1_10特征编码_WOE.md","localizedDate":"2025年2月25日","excerpt":"<h1> OWE编码(WOEEncoder)</h1>\\n<p>WOE（Weight of Evidence）叫做证据权重, 只能用于二进制目标变量，即0/1的目标变量。</p>\\n<ol>\\n<li>处理缺失值：当数据源没有100%覆盖时，那就会存在缺失值，此时可以把null单独作为一个分箱。这点在分数据源建模时非常有用，可以有效将覆盖率哪怕只有20%的数据源利用起来。</li>\\n<li>处理异常值：当数据中存在离群点时，可以把其通过分箱离散化处理，从而提高变量的鲁棒性（抗干扰能力）。例如，age若出现200这种异常值，可分入“age &gt; 60”这个分箱里，排除影响。</li>\\n<li>业务解释性：我们习惯于线性判断变量的作用，当x越来越大，y就越来越大。但实际x与y之间经常存在着非线性关系，此时可经过WOE变换。</li>\\n</ol>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
