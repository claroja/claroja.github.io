import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-XqA98pG8.js";const t={},c=e(`<h1 id="datasets-process" tabindex="-1"><a class="header-anchor" href="#datasets-process" aria-hidden="true">#</a> datasets_process</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> datasets <span class="token keyword">import</span> load_dataset
dataset <span class="token operator">=</span> load_dataset<span class="token punctuation">(</span><span class="token string">&#39;glue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mrpc&#39;</span><span class="token punctuation">,</span> split<span class="token operator">=</span><span class="token string">&#39;train&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sort-shuffle-select-split-and-shard" tabindex="-1"><a class="header-anchor" href="#sort-shuffle-select-split-and-shard" aria-hidden="true">#</a> Sort, shuffle, select, split, and shard</h2><p><code>Sort, shuffle, select, Shard</code>, 不常用一般在<code>pandas</code>中处理</p><h3 id="split" tabindex="-1"><a class="header-anchor" href="#split" aria-hidden="true">#</a> split</h3><p><code>Dataset.train_test_split()</code>, return <code></code> object ,includes train and test splits</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>dataset<span class="token punctuation">.</span>train_test_split<span class="token punctuation">(</span>test_size<span class="token operator">=</span><span class="token number">0.1</span><span class="token punctuation">)</span>
<span class="token comment">## {&#39;train&#39;: Dataset(schema: {&#39;sentence1&#39;: &#39;string&#39;, &#39;sentence2&#39;: &#39;string&#39;, &#39;label&#39;: &#39;int64&#39;, &#39;idx&#39;: &#39;int32&#39;}, num_rows: 3301),</span>
<span class="token comment">## &#39;test&#39;: Dataset(schema: {&#39;sentence1&#39;: &#39;string&#39;, &#39;sentence2&#39;: &#39;string&#39;, &#39;label&#39;: &#39;int64&#39;, &#39;idx&#39;: &#39;int32&#39;}, num_rows: 367)}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rename-remove-cast-and-flatten" tabindex="-1"><a class="header-anchor" href="#rename-remove-cast-and-flatten" aria-hidden="true">#</a> Rename, remove, cast, and flatten</h2><h3 id="rename" tabindex="-1"><a class="header-anchor" href="#rename" aria-hidden="true">#</a> rename</h3><p><code>Dataset.rename_column()</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>dataset
<span class="token comment">## Dataset({</span>
<span class="token comment">##     features: [&#39;sentence1&#39;, &#39;sentence2&#39;, &#39;label&#39;, &#39;idx&#39;],</span>
<span class="token comment">##     num_rows: 3668</span>
<span class="token comment">## })</span>
dataset <span class="token operator">=</span> dataset<span class="token punctuation">.</span>rename_column<span class="token punctuation">(</span><span class="token string">&quot;sentence1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;sentenceA&quot;</span><span class="token punctuation">)</span>
dataset <span class="token operator">=</span> dataset<span class="token punctuation">.</span>rename_column<span class="token punctuation">(</span><span class="token string">&quot;sentence2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;sentenceB&quot;</span><span class="token punctuation">)</span>
dataset
<span class="token comment">## Dataset({</span>
<span class="token comment">##     features: [&#39;sentenceA&#39;, &#39;sentenceB&#39;, &#39;label&#39;, &#39;idx&#39;],</span>
<span class="token comment">##     num_rows: 3668</span>
<span class="token comment">## })</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="remove" tabindex="-1"><a class="header-anchor" href="#remove" aria-hidden="true">#</a> remove</h3><p><code>Dataset.remove_columns()</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>dataset
<span class="token comment">## Dataset({</span>
<span class="token comment">##     features: [&#39;sentence1&#39;, &#39;sentence2&#39;, &#39;label&#39;, &#39;idx&#39;],</span>
<span class="token comment">##     num_rows: 3668</span>
<span class="token comment">## })</span>

dataset <span class="token operator">=</span> dataset<span class="token punctuation">.</span>remove_columns<span class="token punctuation">(</span><span class="token string">&quot;label&quot;</span><span class="token punctuation">)</span>
dataset
<span class="token comment">## Dataset({</span>
<span class="token comment">##     features: [&#39;sentence1&#39;, &#39;sentence2&#39;, &#39;idx&#39;],</span>
<span class="token comment">##     num_rows: 3668</span>
<span class="token comment">## })</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cast" tabindex="-1"><a class="header-anchor" href="#cast" aria-hidden="true">#</a> cast</h3><ol><li><code>cast(Features)</code> 先创建好整体的Features, 再进行转换</li><li><code>cast_column(name,newtype)</code> 转换指定的某一个column</li></ol><p>注意: 不要使用 <code>dataset[&#39;column_name&#39;]=ClassLabel(names=[&quot;negative&quot;, &quot;positive&quot;]) </code>这种写法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>dataset<span class="token punctuation">.</span>features
<span class="token comment">## {&#39;sentence1&#39;: Value(dtype=&#39;string&#39;, id=None),</span>
<span class="token comment">## &#39;sentence2&#39;: Value(dtype=&#39;string&#39;, id=None),</span>
<span class="token comment">## &#39;label&#39;: ClassLabel(num_classes=2, names=[&#39;not_equivalent&#39;, &#39;equivalent&#39;], names_file=None, id=None),</span>
<span class="token comment">## &#39;idx&#39;: Value(dtype=&#39;int32&#39;, id=None)}</span>

<span class="token keyword">from</span> datasets <span class="token keyword">import</span> ClassLabel<span class="token punctuation">,</span> Value
new_features <span class="token operator">=</span> dataset<span class="token punctuation">.</span>features<span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token punctuation">)</span>
new_features<span class="token punctuation">[</span><span class="token string">&quot;label&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> ClassLabel<span class="token punctuation">(</span>names<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;negative&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;positive&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
new_features<span class="token punctuation">[</span><span class="token string">&quot;idx&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> Value<span class="token punctuation">(</span><span class="token string">&quot;int64&quot;</span><span class="token punctuation">)</span>
dataset <span class="token operator">=</span> dataset<span class="token punctuation">.</span>cast<span class="token punctuation">(</span>new_features<span class="token punctuation">)</span>
<span class="token comment">## dataset.features</span>
<span class="token comment">## {&#39;sentence1&#39;: Value(dtype=&#39;string&#39;, id=None),</span>
<span class="token comment">## &#39;sentence2&#39;: Value(dtype=&#39;string&#39;, id=None),</span>
<span class="token comment">## &#39;label&#39;: ClassLabel(num_classes=2, names=[&#39;negative&#39;, &#39;positive&#39;], names_file=None, id=None),</span>
<span class="token comment">## &#39;idx&#39;: Value(dtype=&#39;int64&#39;, id=None)}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flatten" tabindex="-1"><a class="header-anchor" href="#flatten" aria-hidden="true">#</a> flatten</h3><p><code>answers</code>列中包含了<code>text</code>和<code>answer_start</code>个子列, <code>flatten</code>之后从子列升级为 <code>answers.text</code>和<code>answers.answer_start</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>dataset<span class="token punctuation">.</span>features
<span class="token comment">## {&#39;answers&#39;: Sequence(feature={&#39;text&#39;: Value(dtype=&#39;string&#39;, id=None), &#39;answer_start&#39;: Value(dtype=&#39;int32&#39;, id=None)}, length=-1, id=None),</span>
<span class="token comment">## &#39;context&#39;: Value(dtype=&#39;string&#39;, id=None),</span>
<span class="token comment">## &#39;id&#39;: Value(dtype=&#39;string&#39;, id=None),</span>
<span class="token comment">## &#39;question&#39;: Value(dtype=&#39;string&#39;, id=None),</span>
<span class="token comment">## &#39;title&#39;: Value(dtype=&#39;string&#39;, id=None)}</span>
dataset<span class="token punctuation">.</span>flatten<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## Dataset({</span>
<span class="token comment">##     features: [&#39;id&#39;, &#39;title&#39;, &#39;context&#39;, &#39;question&#39;, &#39;answers.text&#39;, &#39;answers.answer_start&#39;],</span>
<span class="token comment">##  num_rows: 87599</span>
<span class="token comment">## })</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="align" tabindex="-1"><a class="header-anchor" href="#align" aria-hidden="true">#</a> Align</h3><p><code>Dataset.align_labels_with_mapping()</code> function aligns a dataset label id with the label name.</p><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h3><p><code>Dataset.map()</code> allows you to apply a processing function to each example in a dataset, independently or in batches.</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>func</td><td>func to process data</td></tr><tr><td>num_proc</td><td>num of cups for multiprocessing</td></tr><tr><td>batched</td><td>default false, if true, 1000 examples one batch or set the num</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>updated_dataset <span class="token operator">=</span> dataset<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> example<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">&#39;new_sentence&#39;</span><span class="token punctuation">:</span> example<span class="token punctuation">[</span><span class="token string">&#39;sentence1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span> remove_columns<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;sentence1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
updated_dataset<span class="token punctuation">.</span>column_names
<span class="token punctuation">[</span><span class="token string">&#39;sentence2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;label&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;idx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;new_sentence&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="export" tabindex="-1"><a class="header-anchor" href="#export" aria-hidden="true">#</a> export</h2><p><code>Dataset.to_pandas()</code><code>Dataset.to_dict()</code></p><p>参考: https://huggingface.co/docs/datasets/process</p>`,30),i=[c];function o(p,l){return s(),a("div",null,i)}const u=n(t,[["render",o],["__file","transformers_datasets_process.html.vue"]]);export{u as default};
