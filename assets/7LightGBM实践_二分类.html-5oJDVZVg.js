import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as p}from"./app-nD1Z-e8V.js";const t={},o=p(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>model_selection <span class="token keyword">import</span> train_test_split
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>metrics <span class="token keyword">import</span> accuracy_score
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>model_selection <span class="token keyword">import</span> GridSearchCV
<span class="token keyword">from</span> lightgbm <span class="token keyword">import</span> LGBMClassifier


data_all <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_csv<span class="token punctuation">(</span>
    <span class="token string">&#39;./data/train.csv&#39;</span><span class="token punctuation">,</span> 
    usecols<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;Survived&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Pclass&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sex&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Age&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;SibSp&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Parch&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Fare&#39;</span><span class="token punctuation">,</span>  <span class="token string">&#39;Embarked&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

data_all <span class="token operator">=</span> data_all<span class="token punctuation">.</span>dropna<span class="token punctuation">(</span><span class="token punctuation">)</span>

data_all<span class="token punctuation">[</span><span class="token string">&#39;Sex&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> data_all<span class="token punctuation">[</span><span class="token string">&#39;Sex&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;male&#39;</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token string">&#39;female&#39;</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>astype<span class="token punctuation">(</span><span class="token string">&#39;category&#39;</span><span class="token punctuation">)</span>
data_all<span class="token punctuation">[</span><span class="token string">&#39;Embarked&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> data_all<span class="token punctuation">[</span><span class="token string">&#39;Embarked&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;S&#39;</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token string">&#39;C&#39;</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;Q&#39;</span><span class="token punctuation">:</span><span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>astype<span class="token punctuation">(</span><span class="token string">&#39;category&#39;</span><span class="token punctuation">)</span>

df_train <span class="token operator">=</span> data_all<span class="token punctuation">.</span>groupby<span class="token punctuation">(</span><span class="token string">&#39;Survived&#39;</span><span class="token punctuation">,</span> group_keys<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">apply</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">.</span>sample<span class="token punctuation">(</span>frac<span class="token operator">=</span><span class="token number">0.8</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
df_test <span class="token operator">=</span> data_all<span class="token punctuation">.</span>drop<span class="token punctuation">(</span>df_train<span class="token punctuation">.</span>index<span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>

params <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;n_estimators&#39;</span><span class="token punctuation">:</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment"># &#39;max_depth&#39;:  [None, 2, 4, 6, 8, 10],</span>
    <span class="token comment"># &#39;criterion&#39;:  [&#39;gini&#39;, &#39;entropy&#39;],</span>
    <span class="token comment"># &#39;max_features&#39;: [None, &#39;sqrt&#39;, &#39;log2&#39;, 0.2, 0.4, 0.6, 0.8],</span>
<span class="token punctuation">}</span>

clf_grid <span class="token operator">=</span> GridSearchCV<span class="token punctuation">(</span>
    estimator<span class="token operator">=</span>LGBMClassifier<span class="token punctuation">(</span>objective<span class="token operator">=</span><span class="token string">&#39;binary&#39;</span><span class="token punctuation">,</span> random_state<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    param_grid<span class="token operator">=</span>params<span class="token punctuation">,</span>
    cv<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span>
    n_jobs<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span>
    verbose<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

clf_grid<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>df_train<span class="token punctuation">.</span>loc<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> df_train<span class="token punctuation">.</span>columns <span class="token operator">!=</span> <span class="token string">&#39;Survived&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> df_train<span class="token punctuation">[</span><span class="token string">&#39;Survived&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>accuracy_score<span class="token punctuation">(</span>df_test<span class="token punctuation">[</span><span class="token string">&#39;Survived&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> clf_grid<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>df_test<span class="token punctuation">.</span>loc<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> df_test<span class="token punctuation">.</span>columns <span class="token operator">!=</span> <span class="token string">&#39;Survived&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 0.7921348314606742</span>
clf_grid<span class="token punctuation">.</span>best_params_ 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),e=[o];function c(l,i){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","7LightGBM实践_二分类.html.vue"]]);export{k as default};
