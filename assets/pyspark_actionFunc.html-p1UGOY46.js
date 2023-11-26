import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e as p}from"./app-XqA98pG8.js";const e={},t=p(`<h1 id="actionfunc" tabindex="-1"><a class="header-anchor" href="#actionfunc" aria-hidden="true">#</a> actionFunc</h1><h2 id="countbykey" tabindex="-1"><a class="header-anchor" href="#countbykey" aria-hidden="true">#</a> countByKey</h2><p>统计key出现的次数</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>textFile<span class="token punctuation">(</span><span class="token string">&quot;../data/input/words.txt&quot;</span><span class="token punctuation">)</span>
rdd2 <span class="token operator">=</span> rdd<span class="token punctuation">.</span>flatMap<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">## 通过countByKey来对key进行计数, 这是一个Action算子</span>
result <span class="token operator">=</span> rdd2<span class="token punctuation">.</span>countByKey<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="collect" tabindex="-1"><a class="header-anchor" href="#collect" aria-hidden="true">#</a> collect</h2><p>将RDD各个分区的数据，统一收集到Driver中，形成一个list对象</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd<span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="reduce" tabindex="-1"><a class="header-anchor" href="#reduce" aria-hidden="true">#</a> reduce</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd<span class="token punctuation">.</span>sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
rdd<span class="token punctuation">.</span><span class="token builtin">reduce</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> a<span class="token punctuation">,</span> b<span class="token punctuation">:</span> a<span class="token operator">+</span> b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fold" tabindex="-1"><a class="header-anchor" href="#fold" aria-hidden="true">#</a> fold</h2><p>类似reduce，但聚合是有初始值的，初始值会作用在：</p><ul><li>分区内聚合</li><li>分区间聚合</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment">## 10 + (10+1+2+3) + (10+4+5+6) + (10 + 7 + 8 + 9)</span>
rdd<span class="token punctuation">.</span>fold<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token keyword">lambda</span> a<span class="token punctuation">,</span> b<span class="token punctuation">:</span> a <span class="token operator">+</span> b<span class="token punctuation">)</span>  <span class="token comment"># 85</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="first" tabindex="-1"><a class="header-anchor" href="#first" aria-hidden="true">#</a> first</h2><p>取出RDD的第一个元素</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd<span class="token punctuation">.</span>first<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="take" tabindex="-1"><a class="header-anchor" href="#take" aria-hidden="true">#</a> take</h2><p>取出RDD的前N个元素</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd<span class="token punctuation">.</span>take<span class="token punctuation">(</span>n<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="top" tabindex="-1"><a class="header-anchor" href="#top" aria-hidden="true">#</a> top</h2><p>对RDD进行降序排序，取出前N个</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd<span class="token punctuation">.</span>top<span class="token punctuation">(</span>n<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="count" tabindex="-1"><a class="header-anchor" href="#count" aria-hidden="true">#</a> count</h2><p>计算RDD有多少条数据</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="takesample" tabindex="-1"><a class="header-anchor" href="#takesample" aria-hidden="true">#</a> takeSample</h2><p>随机抽样RDD数据</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
rdd<span class="token punctuation">.</span>takeSample<span class="token punctuation">(</span><span class="token boolean">False</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># [6, 3, 1, 1, 8] </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="takeordered" tabindex="-1"><a class="header-anchor" href="#takeordered" aria-hidden="true">#</a> takeOrdered</h2><p>对RDD进行排序取前N个</p><ul><li>参数1： 要几个数据</li><li>参数2：控制升序还是降序</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
rdd<span class="token punctuation">.</span>takeOrdered<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment"># [1, 2, 3]</span>
rdd<span class="token punctuation">.</span>takeOrdered<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token keyword">lambda</span> x<span class="token punctuation">:</span> <span class="token operator">-</span>x<span class="token punctuation">)</span>  <span class="token comment"># [9, 7, 6]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> foreach</h2><p>对RDD的每一个元素执行操作，没有返回值 保存数据，不经过dirver，每个分区在Executor直接执行</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
rdd<span class="token punctuation">.</span>foreach<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> <span class="token keyword">print</span><span class="token punctuation">(</span>x <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="saveastextfile" tabindex="-1"><a class="header-anchor" href="#saveastextfile" aria-hidden="true">#</a> saveAsTextFile</h2><p>保存数据，不经过dirver，每个分区在Executor直接写出，每个分区各有一个文件</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
rdd<span class="token punctuation">.</span>saveAsTextFile<span class="token punctuation">(</span><span class="token string">&quot;hdfs://node1:8020/output/out1&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>refs: pyspark_actionFunc</p>`,39),c=[t];function o(u,l){return a(),s("div",null,c)}const d=n(e,[["render",o],["__file","pyspark_actionFunc.html.vue"]]);export{d as default};
