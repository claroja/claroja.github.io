const t=JSON.parse('{"key":"v-6253744c","path":"/1%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1%E7%AE%97%E6%B3%95%E5%8E%9F%E7%90%86/3%E6%A0%91%E6%A8%A1%E5%9E%8B/8CatBoost/10CatBoost.html","title":"","lang":"zh-CN","frontmatter":{"description":"CatBoost是俄罗斯的搜索巨头 Yandex 在2017年开源的机器学习库，也是Boosting族算法的一种，同前面介绍过的XGBoost和LightGBM类似，依然是在GBDT算法框架下的一种改进实现，是一种基于对称决策树（oblivious trees）算法的参数少、支持类别型变量和高准确性的GBDT框架，主要说解决的痛点是高效合理地处理类别型特征，这个从它的名字就可以看得出来，CatBoost是由catgorical和boost组成，另外是处理梯度偏差（Gradient bias）以及预测偏移（Prediction shift）问题，提高算法的准确性和泛化能力。 与XGBoost、LightGBM相比，CatBoost的创新点有：","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/1%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1%E7%AE%97%E6%B3%95%E5%8E%9F%E7%90%86/3%E6%A0%91%E6%A8%A1%E5%9E%8B/8CatBoost/10CatBoost.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:description","content":"CatBoost是俄罗斯的搜索巨头 Yandex 在2017年开源的机器学习库，也是Boosting族算法的一种，同前面介绍过的XGBoost和LightGBM类似，依然是在GBDT算法框架下的一种改进实现，是一种基于对称决策树（oblivious trees）算法的参数少、支持类别型变量和高准确性的GBDT框架，主要说解决的痛点是高效合理地处理类别型特征，这个从它的名字就可以看得出来，CatBoost是由catgorical和boost组成，另外是处理梯度偏差（Gradient bias）以及预测偏移（Prediction shift）问题，提高算法的准确性和泛化能力。 与XGBoost、LightGBM相比，CatBoost的创新点有："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T10:13:52.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-25T10:13:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-25T10:13:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"类别型特征","slug":"类别型特征","link":"#类别型特征","children":[{"level":3,"title":"类别型特征的相关工作","slug":"类别型特征的相关工作","link":"#类别型特征的相关工作","children":[]},{"level":3,"title":"目标变量统计（Target Statistics）","slug":"目标变量统计-target-statistics","link":"#目标变量统计-target-statistics","children":[]},{"level":3,"title":"特征组合","slug":"特征组合","link":"#特征组合","children":[]},{"level":3,"title":"CatBoost处理Categorical features总结","slug":"catboost处理categorical-features总结","link":"#catboost处理categorical-features总结","children":[]}]},{"level":2,"title":"克服梯度偏差","slug":"克服梯度偏差","link":"#克服梯度偏差","children":[]},{"level":2,"title":"预测偏移和排序提升","slug":"预测偏移和排序提升","link":"#预测偏移和排序提升","children":[{"level":3,"title":"预测偏移","slug":"预测偏移","link":"#预测偏移","children":[]},{"level":3,"title":"排序提升","slug":"排序提升","link":"#排序提升","children":[]}]},{"level":2,"title":"快速评分","slug":"快速评分","link":"#快速评分","children":[]},{"level":2,"title":"基于GPU实现快速训练","slug":"基于gpu实现快速训练","link":"#基于gpu实现快速训练","children":[]},{"level":2,"title":"CatBoost的优缺点","slug":"catboost的优缺点","link":"#catboost的优缺点","children":[{"level":3,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":3,"title":"缺点","slug":"缺点","link":"#缺点","children":[]}]},{"level":2,"title":"实例","slug":"实例","link":"#实例","children":[{"level":3,"title":"数据集","slug":"数据集","link":"#数据集","children":[]},{"level":3,"title":"不加Categorical features选项的代码","slug":"不加categorical-features选项的代码","link":"#不加categorical-features选项的代码","children":[]},{"level":3,"title":"有Categorical features选项的代码","slug":"有categorical-features选项的代码","link":"#有categorical-features选项的代码","children":[]}]},{"level":2,"title":"CatBoost与XGBoost、LightGBM的联系与区别","slug":"catboost与xgboost、lightgbm的联系与区别","link":"#catboost与xgboost、lightgbm的联系与区别","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1740478432000,"updatedTime":1740478432000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":20.83,"words":6250},"filePathRelative":"1机器学习/1算法原理/3树模型/8CatBoost/10CatBoost.md","localizedDate":"2025年2月25日","excerpt":"<p>CatBoost是俄罗斯的搜索巨头 Yandex 在2017年开源的机器学习库，也是Boosting族算法的一种，同前面介绍过的XGBoost和LightGBM类似，依然是在GBDT算法框架下的一种改进实现，是一种基于对称决策树（oblivious trees）算法的参数少、支持类别型变量和高准确性的GBDT框架，主要说解决的痛点是高效合理地处理类别型特征，这个从它的名字就可以看得出来，CatBoost是由catgorical和boost组成，另外是处理梯度偏差（Gradient bias）以及预测偏移（Prediction shift）问题，提高算法的准确性和泛化能力。</p>\\n<p>与XGBoost、LightGBM相比，CatBoost的创新点有：</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{t as data};
