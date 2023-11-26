import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-XqA98pG8.js";const t={},o=e(`<h1 id="count" tabindex="-1"><a class="header-anchor" href="#count" aria-hidden="true">#</a> count</h1><h2 id="统计总量" tabindex="-1"><a class="header-anchor" href="#统计总量" aria-hidden="true">#</a> 统计总量</h2><p><code>select count(*), count(age), count(distinct age) from student</code></p><ul><li><code>count(*)</code>和<code>count(age)</code>结果相同, 都是统计总数据数量</li><li><code>count(distinct age)</code>则是统计不重复数据数量</li></ul><h2 id="按条件统计" tabindex="-1"><a class="header-anchor" href="#按条件统计" aria-hidden="true">#</a> 按条件统计</h2><h3 id="统计单个age下student数量" tabindex="-1"><a class="header-anchor" href="#统计单个age下student数量" aria-hidden="true">#</a> 统计单个age下student数量</h3><p><code>select count(*) from student group by age</code></p><h3 id="统计某个范围age下student数量" tabindex="-1"><a class="header-anchor" href="#统计某个范围age下student数量" aria-hidden="true">#</a> 统计某个范围age下student数量</h3><p>比如统计学生总数量和18岁以上学生的数量</p><ol><li>简单版可以使用<code>union</code>, 缺点是计算量大, 两次<code>select</code>扫描了两次全表</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> student
<span class="token keyword">union</span>
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> student <span class="token keyword">where</span> age <span class="token operator">&gt;</span><span class="token number">18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>进阶版可以使用<code>case when then end</code> + <code>sum</code>的组合</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">case</span> <span class="token keyword">when</span> age <span class="token operator">&gt;</span> <span class="token number">18</span> <span class="token keyword">then</span> <span class="token number">1</span> <span class="token keyword">else</span> <span class="token number">0</span> <span class="token keyword">end</span><span class="token punctuation">)</span> <span class="token keyword">from</span> student
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>终极版可以使用<code>count(case when then end)</code></li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">case</span> <span class="token keyword">when</span> age <span class="token operator">&gt;</span> <span class="token number">18</span> <span class="token keyword">then</span> age <span class="token keyword">else</span> <span class="token boolean">null</span> <span class="token keyword">end</span><span class="token punctuation">)</span> <span class="token keyword">from</span> student
<span class="token comment">-- 之所以称为终极版, 是因为sum无法处理需要统计非重复数据的情况, distinct加在sum前, 会将所有的1去重</span>
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">distinct</span> <span class="token keyword">case</span> <span class="token keyword">when</span> age <span class="token operator">&gt;</span> <span class="token number">18</span> <span class="token keyword">then</span> age <span class="token keyword">else</span> <span class="token boolean">null</span> <span class="token keyword">end</span><span class="token punctuation">)</span> <span class="token keyword">from</span> student
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://blog.csdn.net/iamlaosong/article/details/73930674</p>`,16),c=[o];function p(l,d){return s(),a("div",null,c)}const i=n(t,[["render",p],["__file","sql_count.html.vue"]]);export{i as default};