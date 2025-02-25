import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-nD1Z-e8V.js";const p={},e=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>model_selection <span class="token keyword">import</span> train_test_split
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>tree <span class="token keyword">import</span> DecisionTreeClassifier<span class="token punctuation">,</span> plot_tree
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>metrics <span class="token keyword">import</span> accuracy_score
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>model_selection <span class="token keyword">import</span> GridSearchCV

data_all <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_csv<span class="token punctuation">(</span>
    <span class="token string">&#39;./data/test/titanic.csv&#39;</span><span class="token punctuation">,</span> 
    usecols<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;Survived&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Pclass&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Age&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;SibSp&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Parch&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Fare&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sex&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Embarked&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

data_all <span class="token operator">=</span> data_all<span class="token punctuation">.</span>dropna<span class="token punctuation">(</span><span class="token punctuation">)</span>

data_all <span class="token operator">=</span> pd<span class="token punctuation">.</span>merge<span class="token punctuation">(</span>data_all<span class="token punctuation">,</span> pd<span class="token punctuation">.</span>get_dummies<span class="token punctuation">(</span>data_all<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;Sex&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Embarked&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> how<span class="token operator">=</span><span class="token string">&quot;inner&quot;</span><span class="token punctuation">,</span> left_index<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> right_index<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
data_all <span class="token operator">=</span> data_all<span class="token punctuation">.</span>drop<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;Sex&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Embarked&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>

data_y <span class="token operator">=</span> data_all<span class="token punctuation">[</span><span class="token string">&#39;Survived&#39;</span><span class="token punctuation">]</span>
data_x <span class="token operator">=</span> data_all<span class="token punctuation">.</span>drop<span class="token punctuation">(</span><span class="token string">&#39;Survived&#39;</span><span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>


X_train<span class="token punctuation">,</span> X_test<span class="token punctuation">,</span> y_train<span class="token punctuation">,</span> y_test <span class="token operator">=</span> train_test_split<span class="token punctuation">(</span>data_x<span class="token punctuation">,</span> data_y<span class="token punctuation">,</span> random_state <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">)</span>

params <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;criterion&#39;</span><span class="token punctuation">:</span>  <span class="token punctuation">[</span><span class="token string">&#39;gini&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;entropy&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&#39;splitter&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;best&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;random&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&#39;max_depth&#39;</span><span class="token punctuation">:</span>  <span class="token punctuation">[</span><span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&#39;max_features&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token string">&#39;sqrt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;log2&#39;</span><span class="token punctuation">,</span> <span class="token number">0.2</span><span class="token punctuation">,</span> <span class="token number">0.4</span><span class="token punctuation">,</span> <span class="token number">0.6</span><span class="token punctuation">,</span> <span class="token number">0.8</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&#39;random_state&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span>
    
<span class="token punctuation">}</span>

clf_grid <span class="token operator">=</span> GridSearchCV<span class="token punctuation">(</span>
    estimator<span class="token operator">=</span>DecisionTreeClassifier<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    param_grid<span class="token operator">=</span>params<span class="token punctuation">,</span>
    cv<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span>
    n_jobs<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span>
    verbose<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

clf_grid<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>X_train<span class="token punctuation">,</span> y_train<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>accuracy_score<span class="token punctuation">(</span>y_test<span class="token punctuation">,</span> clf_grid<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>X_test<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 0.79</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","2_5_3决策树实践_scikitlearn_超参搜索.html.vue"]]);export{k as default};
