import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-YE2Hltoy.js";const p={},o=t(`<h1 id="datasplit" tabindex="-1"><a class="header-anchor" href="#datasplit" aria-hidden="true">#</a> dataSplit</h1><h2 id="single-labels" tabindex="-1"><a class="header-anchor" href="#single-labels" aria-hidden="true">#</a> single labels</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token keyword">from</span> datasets <span class="token keyword">import</span> Dataset<span class="token punctuation">,</span>DatasetDict
<span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoTokenizer
<span class="token keyword">from</span> torch<span class="token punctuation">.</span>utils<span class="token punctuation">.</span>data <span class="token keyword">import</span> DataLoader
<span class="token keyword">from</span> torch<span class="token punctuation">.</span>optim <span class="token keyword">import</span> AdamW
<span class="token keyword">import</span> torch
<span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoModelForSequenceClassification
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>model_selection <span class="token keyword">import</span> train_test_split
<span class="token keyword">from</span> sklearn <span class="token keyword">import</span> preprocessing
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>metrics <span class="token keyword">import</span> accuracy_score



<span class="token comment">## 1. create test data</span>
df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string">&quot;text&quot;</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token string">&quot;text0&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;text1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;text2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;text3&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;text4&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;text5&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;text6&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&quot;target&quot;</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">## 2. label the target</span>

labels <span class="token operator">=</span> df<span class="token punctuation">[</span><span class="token string">&quot;target&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value_counts<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>index<span class="token punctuation">.</span>tolist<span class="token punctuation">(</span><span class="token punctuation">)</span>
le <span class="token operator">=</span> preprocessing<span class="token punctuation">.</span>LabelEncoder<span class="token punctuation">(</span><span class="token punctuation">)</span>
le<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>labels<span class="token punctuation">)</span>
df<span class="token punctuation">[</span><span class="token string">&quot;labels&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> le<span class="token punctuation">.</span>transform<span class="token punctuation">(</span>df<span class="token punctuation">[</span><span class="token string">&quot;target&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
text_column_name <span class="token operator">=</span> <span class="token string">&quot;text&quot;</span>
labels_column_name <span class="token operator">=</span> <span class="token string">&quot;labels&quot;</span>

<span class="token comment">## 3. split into train and test</span>
df_with_index <span class="token operator">=</span> df<span class="token punctuation">.</span>reset_index<span class="token punctuation">(</span><span class="token punctuation">)</span>
X_train<span class="token punctuation">,</span> X_test<span class="token punctuation">,</span> y_train<span class="token punctuation">,</span> y_test <span class="token operator">=</span> train_test_split<span class="token punctuation">(</span>df_with_index<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>text_column_name<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span>values<span class="token punctuation">,</span>df_with_index<span class="token punctuation">[</span>labels_column_name<span class="token punctuation">]</span><span class="token punctuation">.</span>values<span class="token punctuation">,</span>test_size<span class="token operator">=</span><span class="token number">0.5</span><span class="token punctuation">)</span>
df_with_index<span class="token punctuation">.</span>loc<span class="token punctuation">[</span>df_with_index<span class="token punctuation">[</span><span class="token string">&quot;index&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>isin<span class="token punctuation">(</span>X_train<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&quot;splitmark&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span>
df_with_index<span class="token punctuation">.</span>loc<span class="token punctuation">[</span>df_with_index<span class="token punctuation">[</span><span class="token string">&quot;index&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>isin<span class="token punctuation">(</span>X_test<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;splitmark&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;train&quot;</span>
df_with_splitmark <span class="token operator">=</span> df_with_index<span class="token punctuation">.</span>set_index<span class="token punctuation">(</span><span class="token string">&quot;index&quot;</span><span class="token punctuation">)</span>


<span class="token comment">## 4. tokenize and create dataloader</span>
dataset_train <span class="token operator">=</span> Dataset<span class="token punctuation">.</span>from_pandas<span class="token punctuation">(</span>df_with_splitmark<span class="token punctuation">.</span>loc<span class="token punctuation">[</span>df_with_index<span class="token punctuation">[</span><span class="token string">&quot;splitmark&quot;</span><span class="token punctuation">]</span><span class="token operator">==</span><span class="token string">&quot;train&quot;</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;labels&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
dataset_test <span class="token operator">=</span> Dataset<span class="token punctuation">.</span>from_pandas<span class="token punctuation">(</span>df_with_splitmark<span class="token punctuation">.</span>loc<span class="token punctuation">[</span>df_with_index<span class="token punctuation">[</span><span class="token string">&quot;splitmark&quot;</span><span class="token punctuation">]</span><span class="token operator">==</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;labels&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
datadict <span class="token operator">=</span> DatasetDict<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;train&quot;</span><span class="token punctuation">:</span>dataset_train<span class="token punctuation">,</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">:</span>dataset_test<span class="token punctuation">}</span><span class="token punctuation">)</span>
tokenizer <span class="token operator">=</span> AutoTokenizer<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span><span class="token string">&quot;./pretrained_model/distilbert-base-uncased&quot;</span><span class="token punctuation">)</span>
tokenized_datadict <span class="token operator">=</span> datadict<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span>tokenizer<span class="token punctuation">(</span>x<span class="token punctuation">[</span>text_column_name<span class="token punctuation">]</span><span class="token punctuation">,</span> padding<span class="token operator">=</span><span class="token string">&#39;max_length&#39;</span><span class="token punctuation">,</span> truncation<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> max_length<span class="token operator">=</span><span class="token number">512</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                batched<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>remove_columns <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>text_column_name<span class="token punctuation">]</span><span class="token punctuation">)</span>
tokenized_datadict<span class="token punctuation">.</span>set_format<span class="token punctuation">(</span><span class="token string">&quot;torch&quot;</span><span class="token punctuation">)</span>
train_dataloader <span class="token operator">=</span> DataLoader<span class="token punctuation">(</span>tokenized_datadict<span class="token punctuation">[</span><span class="token string">&quot;train&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> shuffle<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> batch_size<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
test_dataloader <span class="token operator">=</span> DataLoader<span class="token punctuation">(</span>tokenized_datadict<span class="token punctuation">[</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> batch_size<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="multi-labels" tabindex="-1"><a class="header-anchor" href="#multi-labels" aria-hidden="true">#</a> multi labels</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token keyword">from</span> datasets <span class="token keyword">import</span> Dataset<span class="token punctuation">,</span>DatasetDict
<span class="token keyword">from</span> skmultilearn<span class="token punctuation">.</span>model_selection <span class="token keyword">import</span> iterative_train_test_split
<span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoTokenizer
<span class="token keyword">from</span> torch<span class="token punctuation">.</span>utils<span class="token punctuation">.</span>data <span class="token keyword">import</span> DataLoader
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>preprocessing <span class="token keyword">import</span> MultiLabelBinarizer
<span class="token keyword">from</span> torch<span class="token punctuation">.</span>optim <span class="token keyword">import</span> AdamW
<span class="token keyword">import</span> torch
<span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoModelForSequenceClassification
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>metrics <span class="token keyword">import</span> accuracy_score

<span class="token comment">## 1. create test data</span>
df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string">&quot;text&quot;</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token string">&quot;text0&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;text1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;text2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;text3&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;text4&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;text5&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;text6&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&quot;target&quot;</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;b,c&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;b,c&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;b,c&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">## 2. one-hot the target into multicolumns</span>
df<span class="token punctuation">[</span><span class="token string">&quot;labels_list&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> df<span class="token punctuation">[</span><span class="token string">&quot;target&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token builtin">str</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span>
labels <span class="token operator">=</span> df<span class="token punctuation">[</span><span class="token string">&quot;labels_list&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>explode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value_counts<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>index<span class="token punctuation">.</span>tolist<span class="token punctuation">(</span><span class="token punctuation">)</span>
labels<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># write into config, next time, use config.</span>
mlb <span class="token operator">=</span> MultiLabelBinarizer<span class="token punctuation">(</span>classes <span class="token operator">=</span> labels<span class="token punctuation">)</span>
mlb<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>df<span class="token punctuation">[</span><span class="token string">&quot;labels_list&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
df<span class="token punctuation">[</span>labels<span class="token punctuation">]</span> <span class="token operator">=</span> mlb<span class="token punctuation">.</span>transform<span class="token punctuation">(</span>df<span class="token punctuation">[</span><span class="token string">&quot;labels_list&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>


<span class="token comment">## 3. split into train and test</span>
text_column_name <span class="token operator">=</span> <span class="token string">&quot;text&quot;</span>
labels_column_names <span class="token operator">=</span> labels

df_with_index <span class="token operator">=</span> df<span class="token punctuation">.</span>reset_index<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># create &quot;index&quot; column for indexing back.</span>
X_train<span class="token punctuation">,</span> y_train<span class="token punctuation">,</span> X_test<span class="token punctuation">,</span> y_test <span class="token operator">=</span> iterative_train_test_split<span class="token punctuation">(</span>df_with_index<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>text_column_name<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span>values<span class="token punctuation">,</span>df_with_index<span class="token punctuation">[</span>labels_column_names<span class="token punctuation">]</span><span class="token punctuation">.</span>values<span class="token punctuation">,</span>test_size<span class="token operator">=</span><span class="token number">0.5</span><span class="token punctuation">)</span>
df_with_index<span class="token punctuation">.</span>loc<span class="token punctuation">[</span>df_with_index<span class="token punctuation">[</span><span class="token string">&quot;index&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>isin<span class="token punctuation">(</span>X_train<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&quot;splitmark&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span>  <span class="token comment"># index back</span>
df_with_index<span class="token punctuation">.</span>loc<span class="token punctuation">[</span>df_with_index<span class="token punctuation">[</span><span class="token string">&quot;index&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>isin<span class="token punctuation">(</span>X_test<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;splitmark&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;train&quot;</span> <span class="token comment"># index back</span>
df_with_splitmark <span class="token operator">=</span> df_with_index<span class="token punctuation">.</span>set_index<span class="token punctuation">(</span><span class="token string">&quot;index&quot;</span><span class="token punctuation">)</span> <span class="token comment"># set the index column to real index</span>


<span class="token comment">## 4. tokenize and create dataloader</span>
dataset_train <span class="token operator">=</span> Dataset<span class="token punctuation">.</span>from_pandas<span class="token punctuation">(</span>df_with_splitmark<span class="token punctuation">.</span>loc<span class="token punctuation">[</span>df_with_index<span class="token punctuation">[</span><span class="token string">&quot;splitmark&quot;</span><span class="token punctuation">]</span><span class="token operator">==</span><span class="token string">&quot;train&quot;</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;labels&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
dataset_test <span class="token operator">=</span> Dataset<span class="token punctuation">.</span>from_pandas<span class="token punctuation">(</span>df_with_splitmark<span class="token punctuation">.</span>loc<span class="token punctuation">[</span>df_with_index<span class="token punctuation">[</span><span class="token string">&quot;splitmark&quot;</span><span class="token punctuation">]</span><span class="token operator">==</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;labels&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
datadict <span class="token operator">=</span> DatasetDict<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;train&quot;</span><span class="token punctuation">:</span>dataset_train<span class="token punctuation">,</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">:</span>dataset_test<span class="token punctuation">}</span><span class="token punctuation">)</span>
tokenizer <span class="token operator">=</span> AutoTokenizer<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span><span class="token string">&quot;./pretrained_model/distilbert-base-uncased&quot;</span><span class="token punctuation">)</span>
tokenized_datadict <span class="token operator">=</span> datadict<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span>tokenizer<span class="token punctuation">(</span>x<span class="token punctuation">[</span>text_column_name<span class="token punctuation">]</span><span class="token punctuation">,</span> padding<span class="token operator">=</span><span class="token string">&#39;max_length&#39;</span><span class="token punctuation">,</span> truncation<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> max_length<span class="token operator">=</span><span class="token number">512</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                batched<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>remove_columns <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>text_column_name<span class="token punctuation">]</span><span class="token punctuation">)</span>
tokenized_datadict<span class="token punctuation">.</span>set_format<span class="token punctuation">(</span><span class="token string">&quot;torch&quot;</span><span class="token punctuation">)</span>
train_dataloader <span class="token operator">=</span> DataLoader<span class="token punctuation">(</span>tokenized_datadict<span class="token punctuation">[</span><span class="token string">&quot;train&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> shuffle<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> batch_size<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
test_dataloader <span class="token operator">=</span> DataLoader<span class="token punctuation">(</span>tokenized_datadict<span class="token punctuation">[</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> batch_size<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>refs: http://scikit.ml/userguide.html https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.LabelEncoder.html#sklearn.preprocessing.LabelEncoder</p>`,6),e=[o];function c(u,i){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","dataSplit.html.vue"]]);export{r as default};