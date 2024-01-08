const e=JSON.parse('{"key":"v-3c5592c5","path":"/%E6%95%B0%E5%AD%A6/%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/scikit/processing.html","title":"processing","lang":"zh-CN","frontmatter":{"description":"processing 原始数据处理: 分清哪些数据是连续的, 哪些是离散的 缺失值处理 连续的数值特征进行标准化, 均值为0, 方差为1. 对离散变量进行one-hot编码 将需要转换为离散数据的连续型数据进行二值化 防止过拟合, 对数据进行正则化 在对数据探索后, 返现效果不加, 可以使用多项式方法, 寻找线性关系 1. Standardization(标准化) 将特征数据调整为标准正泰分布, 也叫高斯分布, 使得数据的均值为0, 方差为1.","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E5%AD%A6/%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/scikit/processing.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"processing"}],["meta",{"property":"og:description","content":"processing 原始数据处理: 分清哪些数据是连续的, 哪些是离散的 缺失值处理 连续的数值特征进行标准化, 均值为0, 方差为1. 对离散变量进行one-hot编码 将需要转换为离散数据的连续型数据进行二值化 防止过拟合, 对数据进行正则化 在对数据探索后, 返现效果不加, 可以使用多项式方法, 寻找线性关系 1. Standardization(标准化) 将特征数据调整为标准正泰分布, 也叫高斯分布, 使得数据的均值为0, 方差为1."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T13:17:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-27T13:17:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"processing\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-27T13:17:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"","slug":"","link":"#","children":[{"level":3,"title":"1. Standardization(标准化)","slug":"_1-standardization-标准化","link":"#_1-standardization-标准化","children":[]},{"level":3,"title":"尺度","slug":"尺度","link":"#尺度","children":[]}]},{"level":2,"title":"2. Non-linear transformation","slug":"_2-non-linear-transformation","link":"#_2-non-linear-transformation","children":[]},{"level":2,"title":"3. ormalization(规范化)","slug":"_3-ormalization-规范化","link":"#_3-ormalization-规范化","children":[{"level":3,"title":"OrdinalEncoder","slug":"ordinalencoder","link":"#ordinalencoder","children":[]},{"level":3,"title":"OneHotEncoder","slug":"onehotencoder","link":"#onehotencoder","children":[]}]},{"level":2,"title":"Discretization(离散化)","slug":"discretization-离散化","link":"#discretization-离散化","children":[{"level":3,"title":"KBinsDiscretizer","slug":"kbinsdiscretizer","link":"#kbinsdiscretizer","children":[]},{"level":3,"title":"binarization","slug":"binarization","link":"#binarization","children":[]}]},{"level":2,"title":"缺失值处理","slug":"缺失值处理","link":"#缺失值处理","children":[]},{"level":2,"title":"polynomial features(多项式特征)","slug":"polynomial-features-多项式特征","link":"#polynomial-features-多项式特征","children":[{"level":3,"title":"PolynomialFeatures","slug":"polynomialfeatures","link":"#polynomialfeatures","children":[]}]},{"level":2,"title":"自定义特征转换函数","slug":"自定义特征转换函数","link":"#自定义特征转换函数","children":[]}],"git":{"createdTime":1701091021000,"updatedTime":1701091021000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":5.01,"words":1503},"filePathRelative":"数学/分析工具/scikit/processing.md","localizedDate":"2023年11月27日","excerpt":"<h1> processing</h1>\\n<p>原始数据处理:</p>\\n<ol>\\n<li>分清哪些数据是连续的, 哪些是离散的</li>\\n<li>缺失值处理</li>\\n<li>连续的数值特征进行标准化, 均值为0, 方差为1.</li>\\n<li>对离散变量进行one-hot编码</li>\\n<li>将需要转换为离散数据的连续型数据进行二值化</li>\\n<li>防止过拟合, 对数据进行正则化</li>\\n<li>在对数据探索后, 返现效果不加, 可以使用多项式方法, 寻找线性关系</li>\\n</ol>\\n<h2> </h2>\\n<h3> 1. Standardization(标准化)</h3>\\n<p>将特征数据调整为标准正泰分布, 也叫高斯分布, 使得数据的均值为0, 方差为1.</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};