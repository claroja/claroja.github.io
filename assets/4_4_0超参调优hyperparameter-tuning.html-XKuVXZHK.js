const n=JSON.parse(`{"key":"v-55025c73","path":"/1%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1%E7%AE%97%E6%B3%95%E5%8E%9F%E7%90%86/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/4%E6%A8%A1%E5%9E%8B%E6%9E%84%E5%BB%BA/4_4_0%E8%B6%85%E5%8F%82%E8%B0%83%E4%BC%98hyperparameter-tuning.html","title":"","lang":"zh-CN","frontmatter":{"description":"步骤 选择模型 罗列模型需要调整的参数, 建立超参空间 使用不同方法搜索最优参数, 如网格搜索, 随机搜索, 贝叶斯搜索 进行交叉验证, 取均值比较 搜索方法 手动搜索(Manual Search) 手动创建一系列参数组合 import pandas as pd from sklearn.model_selection import train_test_split from sklearn.tree import DecisionTreeClassifier from sklearn.metrics import accuracy_score df = pd.read_csv(\\"pima-indians-diabetes.csv\\") # Train Test Split #df = df.drop(['name','origin','model_year'], axis=1) y = df['class'] X = df.drop(['class'],axis=1) X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=30) # sets of hyperparameters params_1 = {'criterion': 'gini', 'splitter': 'best', 'max_depth': 50} params_2 = {'criterion': 'entropy', 'splitter': 'random', 'max_depth': 70} params_3 = {'criterion': 'gini', 'splitter': 'random', 'max_depth': 60} params_4 = {'criterion': 'entropy', 'splitter': 'best', 'max_depth': 80} params_5 = {'criterion': 'gini', 'splitter': 'best', 'max_depth': 40} # Separate models model_1 = DecisionTreeClassifier(**params_1) model_2 = DecisionTreeClassifier(**params_2) model_3 = DecisionTreeClassifier(**params_3) model_4 = DecisionTreeClassifier(**params_4) model_5 = DecisionTreeClassifier(**params_5) model_1.fit(X_train, y_train) model_2.fit(X_train, y_train) model_3.fit(X_train, y_train) model_4.fit(X_train, y_train) model_5.fit(X_train, y_train) # Prediction sets preds_1 = model_1.predict(X_test) preds_2 = model_3.predict(X_test) preds_3 = model_3.predict(X_test) preds_4 = model_4.predict(X_test) preds_5 = model_5.predict(X_test) print(f'Accuracy on Model 1: {round(accuracy_score(y_test, preds_1), 3)}') # Accuracy on Model 1: 0.693 print(f'Accuracy on Model 2: {round(accuracy_score(y_test, preds_2), 3)}') # Accuracy on Model 2: 0.693 print(f'Accuracy on Model 3: {round(accuracy_score(y_test, preds_3), 3)}') # Accuracy on Model 3: 0.693 print(f'Accuracy on Model 4: {round(accuracy_score(y_test, preds_4), 3)}') # Accuracy on Model 4: 0.736 print(f'Accuracy on Model 5: {round(accuracy_score(y_test, preds_5), 3)}') # Accuracy on Model 5: 0.688","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/1%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1%E7%AE%97%E6%B3%95%E5%8E%9F%E7%90%86/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/4%E6%A8%A1%E5%9E%8B%E6%9E%84%E5%BB%BA/4_4_0%E8%B6%85%E5%8F%82%E8%B0%83%E4%BC%98hyperparameter-tuning.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:description","content":"步骤 选择模型 罗列模型需要调整的参数, 建立超参空间 使用不同方法搜索最优参数, 如网格搜索, 随机搜索, 贝叶斯搜索 进行交叉验证, 取均值比较 搜索方法 手动搜索(Manual Search) 手动创建一系列参数组合 import pandas as pd from sklearn.model_selection import train_test_split from sklearn.tree import DecisionTreeClassifier from sklearn.metrics import accuracy_score df = pd.read_csv(\\"pima-indians-diabetes.csv\\") # Train Test Split #df = df.drop(['name','origin','model_year'], axis=1) y = df['class'] X = df.drop(['class'],axis=1) X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=30) # sets of hyperparameters params_1 = {'criterion': 'gini', 'splitter': 'best', 'max_depth': 50} params_2 = {'criterion': 'entropy', 'splitter': 'random', 'max_depth': 70} params_3 = {'criterion': 'gini', 'splitter': 'random', 'max_depth': 60} params_4 = {'criterion': 'entropy', 'splitter': 'best', 'max_depth': 80} params_5 = {'criterion': 'gini', 'splitter': 'best', 'max_depth': 40} # Separate models model_1 = DecisionTreeClassifier(**params_1) model_2 = DecisionTreeClassifier(**params_2) model_3 = DecisionTreeClassifier(**params_3) model_4 = DecisionTreeClassifier(**params_4) model_5 = DecisionTreeClassifier(**params_5) model_1.fit(X_train, y_train) model_2.fit(X_train, y_train) model_3.fit(X_train, y_train) model_4.fit(X_train, y_train) model_5.fit(X_train, y_train) # Prediction sets preds_1 = model_1.predict(X_test) preds_2 = model_3.predict(X_test) preds_3 = model_3.predict(X_test) preds_4 = model_4.predict(X_test) preds_5 = model_5.predict(X_test) print(f'Accuracy on Model 1: {round(accuracy_score(y_test, preds_1), 3)}') # Accuracy on Model 1: 0.693 print(f'Accuracy on Model 2: {round(accuracy_score(y_test, preds_2), 3)}') # Accuracy on Model 2: 0.693 print(f'Accuracy on Model 3: {round(accuracy_score(y_test, preds_3), 3)}') # Accuracy on Model 3: 0.693 print(f'Accuracy on Model 4: {round(accuracy_score(y_test, preds_4), 3)}') # Accuracy on Model 4: 0.736 print(f'Accuracy on Model 5: {round(accuracy_score(y_test, preds_5), 3)}') # Accuracy on Model 5: 0.688"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T10:13:52.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-25T10:13:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-25T10:13:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"步骤","slug":"步骤","link":"#步骤","children":[]},{"level":2,"title":"搜索方法","slug":"搜索方法","link":"#搜索方法","children":[{"level":3,"title":"手动搜索(Manual Search)","slug":"手动搜索-manual-search","link":"#手动搜索-manual-search","children":[]},{"level":3,"title":"网格搜索(Grid-Search)","slug":"网格搜索-grid-search","link":"#网格搜索-grid-search","children":[]},{"level":3,"title":"随机搜索(Random Search)","slug":"随机搜索-random-search","link":"#随机搜索-random-search","children":[]},{"level":3,"title":"网格搜索和随机搜索比较","slug":"网格搜索和随机搜索比较","link":"#网格搜索和随机搜索比较","children":[]}]},{"level":2,"title":"进行超参搜索和不进行超参搜索比较","slug":"进行超参搜索和不进行超参搜索比较","link":"#进行超参搜索和不进行超参搜索比较","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1740478432000,"updatedTime":1740478432000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":3.21,"words":962},"filePathRelative":"1机器学习/1算法原理/2机器学习流程/4模型构建/4_4_0超参调优hyperparameter-tuning.md","localizedDate":"2025年2月25日","excerpt":"<h2> 步骤</h2>\\n<ol>\\n<li>选择模型</li>\\n<li>罗列模型需要调整的参数, 建立超参空间</li>\\n<li>使用不同方法搜索最优参数, 如网格搜索, 随机搜索, 贝叶斯搜索</li>\\n<li>进行交叉验证, 取均值比较</li>\\n</ol>\\n<h2> 搜索方法</h2>\\n<h3> 手动搜索(Manual Search)</h3>\\n<p>手动创建一系列参数组合</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> pandas <span class=\\"token keyword\\">as</span> pd\\n<span class=\\"token keyword\\">from</span> sklearn<span class=\\"token punctuation\\">.</span>model_selection <span class=\\"token keyword\\">import</span> train_test_split\\n<span class=\\"token keyword\\">from</span> sklearn<span class=\\"token punctuation\\">.</span>tree <span class=\\"token keyword\\">import</span> DecisionTreeClassifier\\n<span class=\\"token keyword\\">from</span> sklearn<span class=\\"token punctuation\\">.</span>metrics <span class=\\"token keyword\\">import</span> accuracy_score\\ndf <span class=\\"token operator\\">=</span> pd<span class=\\"token punctuation\\">.</span>read_csv<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"pima-indians-diabetes.csv\\"</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\"># Train Test Split </span>\\n<span class=\\"token comment\\">#df = df.drop(['name','origin','model_year'], axis=1)</span>\\ny <span class=\\"token operator\\">=</span> df<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'class'</span><span class=\\"token punctuation\\">]</span> \\nX <span class=\\"token operator\\">=</span> df<span class=\\"token punctuation\\">.</span>drop<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'class'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>axis<span class=\\"token operator\\">=</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\nX_train<span class=\\"token punctuation\\">,</span> X_test<span class=\\"token punctuation\\">,</span> y_train<span class=\\"token punctuation\\">,</span> y_test <span class=\\"token operator\\">=</span> train_test_split<span class=\\"token punctuation\\">(</span>X<span class=\\"token punctuation\\">,</span> y<span class=\\"token punctuation\\">,</span> test_size<span class=\\"token operator\\">=</span><span class=\\"token number\\">0.3</span><span class=\\"token punctuation\\">,</span> random_state<span class=\\"token operator\\">=</span><span class=\\"token number\\">30</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\"># sets of hyperparameters</span>\\nparams_1 <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token string\\">'criterion'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'gini'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'splitter'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'best'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'max_depth'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">50</span><span class=\\"token punctuation\\">}</span>\\nparams_2 <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token string\\">'criterion'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'entropy'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'splitter'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'random'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'max_depth'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">70</span><span class=\\"token punctuation\\">}</span>\\nparams_3 <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token string\\">'criterion'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'gini'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'splitter'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'random'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'max_depth'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">60</span><span class=\\"token punctuation\\">}</span>\\nparams_4 <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token string\\">'criterion'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'entropy'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'splitter'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'best'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'max_depth'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">80</span><span class=\\"token punctuation\\">}</span>\\nparams_5 <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token string\\">'criterion'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'gini'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'splitter'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'best'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'max_depth'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">40</span><span class=\\"token punctuation\\">}</span>\\n<span class=\\"token comment\\"># Separate models</span>\\nmodel_1 <span class=\\"token operator\\">=</span> DecisionTreeClassifier<span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">**</span>params_1<span class=\\"token punctuation\\">)</span>\\nmodel_2 <span class=\\"token operator\\">=</span> DecisionTreeClassifier<span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">**</span>params_2<span class=\\"token punctuation\\">)</span>\\nmodel_3 <span class=\\"token operator\\">=</span> DecisionTreeClassifier<span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">**</span>params_3<span class=\\"token punctuation\\">)</span>\\nmodel_4 <span class=\\"token operator\\">=</span> DecisionTreeClassifier<span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">**</span>params_4<span class=\\"token punctuation\\">)</span>\\nmodel_5 <span class=\\"token operator\\">=</span> DecisionTreeClassifier<span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">**</span>params_5<span class=\\"token punctuation\\">)</span>\\nmodel_1<span class=\\"token punctuation\\">.</span>fit<span class=\\"token punctuation\\">(</span>X_train<span class=\\"token punctuation\\">,</span> y_train<span class=\\"token punctuation\\">)</span>\\nmodel_2<span class=\\"token punctuation\\">.</span>fit<span class=\\"token punctuation\\">(</span>X_train<span class=\\"token punctuation\\">,</span> y_train<span class=\\"token punctuation\\">)</span>\\nmodel_3<span class=\\"token punctuation\\">.</span>fit<span class=\\"token punctuation\\">(</span>X_train<span class=\\"token punctuation\\">,</span> y_train<span class=\\"token punctuation\\">)</span>\\nmodel_4<span class=\\"token punctuation\\">.</span>fit<span class=\\"token punctuation\\">(</span>X_train<span class=\\"token punctuation\\">,</span> y_train<span class=\\"token punctuation\\">)</span>\\nmodel_5<span class=\\"token punctuation\\">.</span>fit<span class=\\"token punctuation\\">(</span>X_train<span class=\\"token punctuation\\">,</span> y_train<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\"># Prediction sets</span>\\npreds_1 <span class=\\"token operator\\">=</span> model_1<span class=\\"token punctuation\\">.</span>predict<span class=\\"token punctuation\\">(</span>X_test<span class=\\"token punctuation\\">)</span>\\npreds_2 <span class=\\"token operator\\">=</span> model_3<span class=\\"token punctuation\\">.</span>predict<span class=\\"token punctuation\\">(</span>X_test<span class=\\"token punctuation\\">)</span>\\npreds_3 <span class=\\"token operator\\">=</span> model_3<span class=\\"token punctuation\\">.</span>predict<span class=\\"token punctuation\\">(</span>X_test<span class=\\"token punctuation\\">)</span>\\npreds_4 <span class=\\"token operator\\">=</span> model_4<span class=\\"token punctuation\\">.</span>predict<span class=\\"token punctuation\\">(</span>X_test<span class=\\"token punctuation\\">)</span>\\npreds_5 <span class=\\"token operator\\">=</span> model_5<span class=\\"token punctuation\\">.</span>predict<span class=\\"token punctuation\\">(</span>X_test<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string-interpolation\\"><span class=\\"token string\\">f'Accuracy on Model 1: </span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span><span class=\\"token builtin\\">round</span><span class=\\"token punctuation\\">(</span>accuracy_score<span class=\\"token punctuation\\">(</span>y_test<span class=\\"token punctuation\\">,</span> preds_1<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">'</span></span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># Accuracy on Model 1: 0.693</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string-interpolation\\"><span class=\\"token string\\">f'Accuracy on Model 2: </span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span><span class=\\"token builtin\\">round</span><span class=\\"token punctuation\\">(</span>accuracy_score<span class=\\"token punctuation\\">(</span>y_test<span class=\\"token punctuation\\">,</span> preds_2<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">'</span></span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># Accuracy on Model 2: 0.693</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string-interpolation\\"><span class=\\"token string\\">f'Accuracy on Model 3: </span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span><span class=\\"token builtin\\">round</span><span class=\\"token punctuation\\">(</span>accuracy_score<span class=\\"token punctuation\\">(</span>y_test<span class=\\"token punctuation\\">,</span> preds_3<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">'</span></span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># Accuracy on Model 3: 0.693</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string-interpolation\\"><span class=\\"token string\\">f'Accuracy on Model 4: </span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span><span class=\\"token builtin\\">round</span><span class=\\"token punctuation\\">(</span>accuracy_score<span class=\\"token punctuation\\">(</span>y_test<span class=\\"token punctuation\\">,</span> preds_4<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">'</span></span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># Accuracy on Model 4: 0.736</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string-interpolation\\"><span class=\\"token string\\">f'Accuracy on Model 5: </span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span><span class=\\"token builtin\\">round</span><span class=\\"token punctuation\\">(</span>accuracy_score<span class=\\"token punctuation\\">(</span>y_test<span class=\\"token punctuation\\">,</span> preds_5<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">'</span></span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># Accuracy on Model 5: 0.688</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
