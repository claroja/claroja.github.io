import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,e}from"./app-XqA98pG8.js";const t={},o=e(`<h1 id="as-withas" tabindex="-1"><a class="header-anchor" href="#as-withas" aria-hidden="true">#</a> as-withAs</h1><h2 id="使用as取别名" tabindex="-1"><a class="header-anchor" href="#使用as取别名" aria-hidden="true">#</a> 使用as取别名</h2><ol><li>给表取别名 <code>select tb_aliasName.col from tb_name as tb_aliasName</code> 有两个表分别是：&quot;Persons&quot; 和 &quot;Product_Orders&quot;。分别为它们指定别名 &quot;p&quot; 和 &quot;po&quot;。列出 &quot;John Adams&quot; 的所有定单。</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> po<span class="token punctuation">.</span>OrderID<span class="token punctuation">,</span> p<span class="token punctuation">.</span>LastName<span class="token punctuation">,</span> p<span class="token punctuation">.</span>FirstName
<span class="token keyword">FROM</span> Persons <span class="token keyword">AS</span> p<span class="token punctuation">,</span> Product_Orders <span class="token keyword">AS</span> po
<span class="token keyword">WHERE</span> p<span class="token punctuation">.</span>LastName<span class="token operator">=</span><span class="token string">&#39;Adams&#39;</span> <span class="token operator">AND</span> p<span class="token punctuation">.</span>FirstName<span class="token operator">=</span><span class="token string">&#39;John&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>给列取别名 <code>select col_name as col_aliasName from tb_name</code> 查询 Persons 表中的 LastName 列 （为其定义别名 &#39;姓氏&#39;）和 FirstName 列（为其定义别名 ‘名字’），输出所有结果值。</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> LastName <span class="token keyword">AS</span> 姓氏<span class="token punctuation">,</span> FirstName <span class="token keyword">AS</span> 名字
<span class="token keyword">FROM</span> Persons
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="with-as" tabindex="-1"><a class="header-anchor" href="#with-as" aria-hidden="true">#</a> with as</h2><p>其实就是把一大堆重复用到的sql语句放在with as里面，取一个别名，后面的查询就可以用它，这样对于大批量的sql语句起到一个优化的作用，而且清楚明了。</p><ul><li>相当于建了个e临时表</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">with</span> e <span class="token keyword">as</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> scott<span class="token punctuation">.</span>emp e <span class="token keyword">where</span> e<span class="token punctuation">.</span>empno<span class="token operator">=</span><span class="token number">7499</span><span class="token punctuation">)</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> e<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>相当于建了e、d临时表</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">with</span>
e <span class="token keyword">as</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> scott<span class="token punctuation">.</span>emp<span class="token punctuation">)</span><span class="token punctuation">,</span>
d <span class="token keyword">as</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> scott<span class="token punctuation">.</span>dept<span class="token punctuation">)</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> e<span class="token punctuation">,</span> d <span class="token keyword">where</span> e<span class="token punctuation">.</span>deptno <span class="token operator">=</span> d<span class="token punctuation">.</span>deptno<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>可以给列起别名</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">WITH</span> cte <span class="token punctuation">(</span>col1<span class="token punctuation">,</span> col2<span class="token punctuation">)</span> <span class="token keyword">AS</span>
<span class="token punctuation">(</span>
  <span class="token keyword">SELECT</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span>
  <span class="token keyword">UNION</span> <span class="token keyword">ALL</span>
  <span class="token keyword">SELECT</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span>
<span class="token punctuation">)</span>
<span class="token keyword">SELECT</span> col1<span class="token punctuation">,</span> col2 <span class="token keyword">FROM</span> cte<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="create-table-as-select" tabindex="-1"><a class="header-anchor" href="#create-table-as-select" aria-hidden="true">#</a> Create table as select</h2><p>根据select语句创建表</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> table1 <span class="token keyword">as</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> table2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>refs: https://dev.mysql.com/doc/refman/8.0/en/with.html https://blog.csdn.net/qq_36761831/article/details/82892534 https://blog.csdn.net/jia718/article/details/88253918</p>`,18),p=[o];function l(c,i){return a(),n("div",null,p)}const u=s(t,[["render",l],["__file","sql_as-withAs.html.vue"]]);export{u as default};
