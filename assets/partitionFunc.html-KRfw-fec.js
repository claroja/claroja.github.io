import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as p}from"./app-M6UUlHgF.js";const t={},e=p(`<h1 id="partitionfunc" tabindex="-1"><a class="header-anchor" href="#partitionfunc" aria-hidden="true">#</a> partitionFunc</h1><h2 id="mappartitions-transformation" tabindex="-1"><a class="header-anchor" href="#mappartitions-transformation" aria-hidden="true">#</a> mapPartitions(transformation)</h2><p>一次传递整个分区的数据</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token builtin">iter</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    result <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> it <span class="token keyword">in</span> <span class="token builtin">iter</span><span class="token punctuation">:</span>
        result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>it <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result
rdd<span class="token punctuation">.</span>mapPartitions<span class="token punctuation">(</span>process<span class="token punctuation">)</span><span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="foreachpartition-action" tabindex="-1"><a class="header-anchor" href="#foreachpartition-action" aria-hidden="true">#</a> foreachPartition(action)</h2><p>一次处理整个分区的数据</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token builtin">iter</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    result <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> it <span class="token keyword">in</span> <span class="token builtin">iter</span><span class="token punctuation">:</span>
        result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>it <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
rdd<span class="token punctuation">.</span>foreachPartition<span class="token punctuation">(</span>process<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="partitionby-transformation" tabindex="-1"><a class="header-anchor" href="#partitionby-transformation" aria-hidden="true">#</a> partitionBy(transformation)</h2><p>对RDD进行自定义分区操作</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;hadoop&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;spark&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;flink&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;hadoop&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;spark&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">## 使用partitionBy 自定义 分区</span>
<span class="token keyword">def</span> <span class="token function">process</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token string">&#39;hadoop&#39;</span> <span class="token operator">==</span> k <span class="token keyword">or</span> <span class="token string">&#39;hello&#39;</span> <span class="token operator">==</span> k<span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token keyword">if</span> <span class="token string">&#39;spark&#39;</span> <span class="token operator">==</span> k<span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token number">1</span>
    <span class="token keyword">return</span> <span class="token number">2</span>
rdd<span class="token punctuation">.</span>partitionBy<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> process<span class="token punctuation">)</span><span class="token punctuation">.</span>glom<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="repartition" tabindex="-1"><a class="header-anchor" href="#repartition" aria-hidden="true">#</a> repartition</h2><p>对RDD的重新分区（仅数量）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment">## repartition 修改分区</span>
rdd<span class="token punctuation">.</span>repartition<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span>getNumPartitions<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="coalesce" tabindex="-1"><a class="header-anchor" href="#coalesce" aria-hidden="true">#</a> coalesce</h2><p>对分区进行数量增减</p><p>参数1：分区数 参数2：boolean，False表示不允许shuffle，也就是不能加分区</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rdd<span class="token punctuation">.</span>coalesce<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> shuffle<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">.</span>getNumPartitions<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>refs:</p>`,18),o=[e];function c(u,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","partitionFunc.html.vue"]]);export{k as default};