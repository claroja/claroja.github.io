import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-XqA98pG8.js";const p="/assets/1-2cCBHHcv.png",o="/assets/2-8bN5G9xg.png",e={},c=t('<h1 id="function" tabindex="-1"><a class="header-anchor" href="#function" aria-hidden="true">#</a> function</h1><h2 id="知识图谱" tabindex="-1"><a class="header-anchor" href="#知识图谱" aria-hidden="true">#</a> 知识图谱</h2><p>知识图谱是使用图结构进行存储的信息的方法, 由节点(node)和边(edge)组成.</p><p>在知识图谱中, 节点保存了实体(entity)信息, 边保存了实体与实体关系(relationship)信息. 下图是最简单的知识图谱. <img src="'+p+'" alt="" loading="lazy"></p><h2 id="知识图谱的表示" tabindex="-1"><a class="header-anchor" href="#知识图谱的表示" aria-hidden="true">#</a> 知识图谱的表示</h2><p>如下图所示, 左边是实体<code>Virat Kohli</code>(人名), 右边是实体<code>Indian cricket team</code>(队名), 边是关系<code>captain of</code>(队长). 这个知识图谱表示的含义就是<code>Virat Kohli is captain of the Indian cricket team</code><img src="'+o+`" alt="" loading="lazy"></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token keyword">import</span> spacy
<span class="token keyword">from</span> spacy<span class="token punctuation">.</span>matcher <span class="token keyword">import</span> Matcher 
<span class="token keyword">import</span> networkx <span class="token keyword">as</span> nx
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt


nlp <span class="token operator">=</span> spacy<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token string">&#39;en_core_web_sm&#39;</span><span class="token punctuation">)</span>
candidate_sentences <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_csv<span class="token punctuation">(</span><span class="token string">&quot;./data.csv&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## 获取实体</span>
<span class="token keyword">def</span> <span class="token function">get_entities</span><span class="token punctuation">(</span>sent<span class="token punctuation">)</span><span class="token punctuation">:</span>
    ent1 <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>  <span class="token comment"># 实体1 source</span>
    ent2 <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>  <span class="token comment"># 实体2</span>
    prv_tok_dep <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>  <span class="token comment"># 前一个token的依存关系</span>
    prv_tok_text <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>  <span class="token comment"># 前一个token</span>
    prefix <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    modifier <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>

    <span class="token keyword">for</span> tok <span class="token keyword">in</span> nlp<span class="token punctuation">(</span>sent<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> tok<span class="token punctuation">.</span>dep_ <span class="token operator">!=</span> <span class="token string">&quot;punct&quot;</span><span class="token punctuation">:</span> <span class="token comment"># 如果token是标点(punctuation)则跳过</span>
            <span class="token keyword">if</span> tok<span class="token punctuation">.</span>dep_ <span class="token operator">==</span> <span class="token string">&quot;compound&quot;</span><span class="token punctuation">:</span>  <span class="token comment"># 如果token是依存关系是复合(compound)</span>
                prefix <span class="token operator">=</span> tok<span class="token punctuation">.</span>text
                <span class="token keyword">if</span> prv_tok_dep <span class="token operator">==</span> <span class="token string">&quot;compound&quot;</span><span class="token punctuation">:</span>  <span class="token comment"># 将相连的依存关系是compound, 链接起来</span>
                    prefix <span class="token operator">=</span> prv_tok_text <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> tok<span class="token punctuation">.</span>text
            <span class="token keyword">if</span> tok<span class="token punctuation">.</span>dep_<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&quot;mod&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token boolean">True</span><span class="token punctuation">:</span>  <span class="token comment"># 如果token是修饰词(modifier)</span>
                modifier <span class="token operator">=</span> tok<span class="token punctuation">.</span>text
                <span class="token keyword">if</span> prv_tok_dep <span class="token operator">==</span> <span class="token string">&quot;compound&quot;</span><span class="token punctuation">:</span>  <span class="token comment"># 将相连的依存关系是compound, 链接起来</span>
                    modifier <span class="token operator">=</span> prv_tok_text <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> tok<span class="token punctuation">.</span>text
            <span class="token keyword">if</span> tok<span class="token punctuation">.</span>dep_<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;subj&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token boolean">True</span><span class="token punctuation">:</span>  <span class="token comment"># 如果是主语</span>
                ent1 <span class="token operator">=</span> modifier <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> prefix <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> tok<span class="token punctuation">.</span>text
                prefix <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
                modifier <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
                prv_tok_dep <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
                prv_tok_text <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
                <span class="token comment">## chunk 4</span>
            <span class="token keyword">if</span> tok<span class="token punctuation">.</span>dep_<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;obj&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token boolean">True</span><span class="token punctuation">:</span>  <span class="token comment"># 如果是宾语</span>
                ent2 <span class="token operator">=</span> modifier <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> prefix <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> tok<span class="token punctuation">.</span>text

            prv_tok_dep <span class="token operator">=</span> tok<span class="token punctuation">.</span>dep_
            prv_tok_text <span class="token operator">=</span> tok<span class="token punctuation">.</span>text
    <span class="token keyword">return</span> <span class="token punctuation">[</span>ent1<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> ent2<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>


get_entities<span class="token punctuation">(</span><span class="token string">&quot;the car film had 200 patents&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># [&#39;car film&#39;, &#39;200  patents&#39;]</span>


entity_pairs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> candidate_sentences<span class="token punctuation">[</span><span class="token string">&quot;sentence&quot;</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
    entity_pairs<span class="token punctuation">.</span>append<span class="token punctuation">(</span>get_entities<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## 获取关系</span>
<span class="token keyword">def</span> <span class="token function">get_relation</span><span class="token punctuation">(</span>sent<span class="token punctuation">)</span><span class="token punctuation">:</span>
    doc <span class="token operator">=</span> nlp<span class="token punctuation">(</span>sent<span class="token punctuation">)</span>
    matcher <span class="token operator">=</span> Matcher<span class="token punctuation">(</span>nlp<span class="token punctuation">.</span>vocab<span class="token punctuation">)</span>
    
    pattern <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&#39;DEP&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;ROOT&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
            <span class="token punctuation">{</span><span class="token string">&#39;DEP&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;prep&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;OP&#39;</span><span class="token punctuation">:</span><span class="token string">&quot;?&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token string">&#39;DEP&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;agent&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;OP&#39;</span><span class="token punctuation">:</span><span class="token string">&quot;?&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>  
            <span class="token punctuation">{</span><span class="token string">&#39;POS&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;ADJ&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;OP&#39;</span><span class="token punctuation">:</span><span class="token string">&quot;?&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>   <span class="token comment"># 定义关系抽取的格式</span>

    matcher<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token string">&quot;matching_1&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>pattern<span class="token punctuation">]</span><span class="token punctuation">)</span> 
    matches <span class="token operator">=</span> matcher<span class="token punctuation">(</span>doc<span class="token punctuation">)</span>
    start <span class="token operator">=</span> matches<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    end<span class="token operator">=</span> matches<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
    span <span class="token operator">=</span> doc<span class="token punctuation">[</span>start<span class="token punctuation">:</span>end<span class="token punctuation">]</span> 
    <span class="token keyword">return</span><span class="token punctuation">(</span>span<span class="token punctuation">.</span>text<span class="token punctuation">)</span>

get_relation<span class="token punctuation">(</span><span class="token string">&quot;John completed the task&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># completed</span>

relations <span class="token operator">=</span> <span class="token punctuation">[</span>get_relation<span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> candidate_sentences<span class="token punctuation">[</span><span class="token string">&#39;sentence&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>

<span class="token comment">## 创建知识图谱</span>
source <span class="token operator">=</span> <span class="token punctuation">[</span>i<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> entity_pairs<span class="token punctuation">]</span>  <span class="token comment"># extract subject</span>
target <span class="token operator">=</span> <span class="token punctuation">[</span>i<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> entity_pairs<span class="token punctuation">]</span>  <span class="token comment"># extract object</span>
kg_df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;source&#39;</span><span class="token punctuation">:</span>source<span class="token punctuation">,</span> <span class="token string">&#39;target&#39;</span><span class="token punctuation">:</span>target<span class="token punctuation">,</span> <span class="token string">&#39;edge&#39;</span><span class="token punctuation">:</span>relations<span class="token punctuation">}</span><span class="token punctuation">)</span>
kg_df

<span class="token comment">## 绘制所有的数据</span>
G<span class="token operator">=</span>nx<span class="token punctuation">.</span>from_pandas_edgelist<span class="token punctuation">(</span>kg_df<span class="token punctuation">,</span> <span class="token string">&quot;source&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;target&quot;</span><span class="token punctuation">,</span> 
                        edge_attr<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> create_using<span class="token operator">=</span>nx<span class="token punctuation">.</span>MultiDiGraph<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span>figsize<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
pos <span class="token operator">=</span> nx<span class="token punctuation">.</span>spring_layout<span class="token punctuation">(</span>G<span class="token punctuation">)</span>
nx<span class="token punctuation">.</span>draw<span class="token punctuation">(</span>G<span class="token punctuation">,</span> with_labels<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> node_color<span class="token operator">=</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> edge_cmap<span class="token operator">=</span>plt<span class="token punctuation">.</span>cm<span class="token punctuation">.</span>Blues<span class="token punctuation">,</span> pos <span class="token operator">=</span> pos<span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">## 仅仅绘制关系为composed by的数据</span>
G<span class="token operator">=</span>nx<span class="token punctuation">.</span>from_pandas_edgelist<span class="token punctuation">(</span>kg_df<span class="token punctuation">[</span>kg_df<span class="token punctuation">[</span><span class="token string">&#39;edge&#39;</span><span class="token punctuation">]</span><span class="token operator">==</span><span class="token string">&quot;composed by&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;source&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;target&quot;</span><span class="token punctuation">,</span> 
                        edge_attr<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> create_using<span class="token operator">=</span>nx<span class="token punctuation">.</span>MultiDiGraph<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span>figsize<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
pos <span class="token operator">=</span> nx<span class="token punctuation">.</span>spring_layout<span class="token punctuation">(</span>G<span class="token punctuation">,</span> k <span class="token operator">=</span> <span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token comment"># k regulates the distance between nodes</span>
nx<span class="token punctuation">.</span>draw<span class="token punctuation">(</span>G<span class="token punctuation">,</span> with_labels<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> node_color<span class="token operator">=</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> node_size<span class="token operator">=</span><span class="token number">1500</span><span class="token punctuation">,</span> edge_cmap<span class="token operator">=</span>plt<span class="token punctuation">.</span>cm<span class="token punctuation">.</span>Blues<span class="token punctuation">,</span> pos <span class="token operator">=</span> pos<span class="token punctuation">,</span> font_weight<span class="token operator">=</span><span class="token string">&#39;bold&#39;</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://analyticsindiamag.com/hands-on-guide-to-building-knowledge-graph-for-named-entity-recognition/ https://stackabuse.com/courses/graphs-in-python-theory-and-implementation/lessons/representing-graphs-in-code/ https://www.kaggle.com/code/nageshsingh/build-knowledge-graph-using-python</p>`,8),i=[c];function l(u,r){return s(),a("div",null,i)}const m=n(e,[["render",l],["__file","knowledgeGraph.html.vue"]]);export{m as default};