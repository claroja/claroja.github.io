import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,a as e}from"./app-nD1Z-e8V.js";const o={},p=e(`<h1 id="index" tabindex="-1"><a class="header-anchor" href="#index" aria-hidden="true">#</a> index</h1><h2 id="_1-表创建前创建索引" tabindex="-1"><a class="header-anchor" href="#_1-表创建前创建索引" aria-hidden="true">#</a> 1.表创建前创建索引</h2><p>1).普通索引</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> mytable<span class="token punctuation">(</span>
       ID <span class="token keyword">INT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> 
       username <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> 
       <span class="token keyword">INDEX</span> indexName <span class="token punctuation">(</span>username<span class="token punctuation">)</span>
 <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2).唯一索引</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> mytable<span class="token punctuation">(</span>
       ID <span class="token keyword">INT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> 
       username <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> 
       <span class="token keyword">UNIQUE</span> indexName <span class="token punctuation">(</span>username<span class="token punctuation">)</span>
 <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3).主键索引</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> mytable<span class="token punctuation">(</span>
       ID <span class="token keyword">INT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> 
       username <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> 
       <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>ID<span class="token punctuation">)</span>
 <span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-表创建后创建索引" tabindex="-1"><a class="header-anchor" href="#_2-表创建后创建索引" aria-hidden="true">#</a> 2.表创建后创建索引</h2><p>1).普通索引<code>ALTER TABLE table_name ADD INDEX index_name ( column ) </code> 2).唯一索引<code>ALTER TABLE table_name ADD UNIQUE ( column ) </code> 3).主键索引<code>ALTER TABLE table_name ADD PRIMARY KEY ( column ) </code> 4).全文索引<code>ALTER TABLE table_name ADD FULLTEXT ( column)</code> 5).外键索引，一般不用</p><h2 id="_3-删除索引" tabindex="-1"><a class="header-anchor" href="#_3-删除索引" aria-hidden="true">#</a> 3.删除索引</h2><p>1)普通索引<code>alter table table_name drop index index_name ;</code> 2)唯一索引<code>alter table table_name drop index index_name ;</code> 3)主键索引<code>alter table table_name drop primary key ;</code> 4)全文索引<code>alter table table_name drop index index_name ;</code></p>`,12),t=[p];function l(c,d){return a(),s("div",null,t)}const u=n(o,[["render",l],["__file","index.html.vue"]]);export{u as default};
