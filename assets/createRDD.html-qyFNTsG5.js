import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e}from"./app-yeyEmHfz.js";const t={},p=e(`<h1 id="createrdd" tabindex="-1"><a class="header-anchor" href="#createrdd" aria-hidden="true">#</a> createRDD</h1><h2 id="parallelized-本地对象" tabindex="-1"><a class="header-anchor" href="#parallelized-本地对象" aria-hidden="true">#</a> parallelized 本地对象</h2><p><code>rdd = sc.parallelize(集合对象,分区数)</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 本地集合 -&gt; 分布式对象(RDD)</span>
rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>  <span class="token comment"># 指定分区量，默认是cpu数量 </span>
rdd<span class="token punctuation">.</span>getNumPartitions<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 查看分区数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="external-data-读取文件" tabindex="-1"><a class="header-anchor" href="#external-data-读取文件" aria-hidden="true">#</a> external data 读取文件</h2><h3 id="textfile" tabindex="-1"><a class="header-anchor" href="#textfile" aria-hidden="true">#</a> textFile</h3><p><code>rdd = sc.textFile(文件路径,分区数量)</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>textFile<span class="token punctuation">(</span>&quot;<span class="token punctuation">.</span><span class="token operator">/</span>text<span class="token punctuation">.</span>txt<span class="token punctuation">)</span>
rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>textFile<span class="token punctuation">(</span><span class="token string">&quot;../data/input/words.txt&quot;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>  <span class="token comment"># 最小分区数是参考值, Spark有自己的判断, 你给的太大Spark不会理会</span>
rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>textFile<span class="token punctuation">(</span><span class="token string">&quot;hdfs://node1:8020/input/words.txt&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wholetextfiles" tabindex="-1"><a class="header-anchor" href="#wholetextfiles" aria-hidden="true">#</a> wholeTextFiles</h3><p><code>sc.wholeTextFiles(路径)</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd<span class="token operator">=</span> sc<span class="token punctuation">.</span>wholeTextFiles<span class="token punctuation">(</span><span class="token string">&quot;../data/input/tiny_files&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>refs:</p>`,12),o=[p];function c(l,i){return a(),s("div",null,o)}const d=n(t,[["render",c],["__file","createRDD.html.vue"]]);export{d as default};
