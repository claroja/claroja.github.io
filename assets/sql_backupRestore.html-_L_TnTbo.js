import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,e}from"./app-XqA98pG8.js";const t={},p=e(`<h1 id="backuprestore" tabindex="-1"><a class="header-anchor" href="#backuprestore" aria-hidden="true">#</a> backupRestore</h1><h2 id="_1-back" tabindex="-1"><a class="header-anchor" href="#_1-back" aria-hidden="true">#</a> 1.back</h2><p>备份原理是将需要备份的数据查询出来，将查询出的数据转换成对应的insert 语句，当我们需要还原这些数据时，只要执行这些 insert 语句，即可将对应的数据还原。</p><p>1.命令</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysqldump <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> 数据库名 <span class="token punctuation">[</span>表名<span class="token punctuation">]</span> <span class="token operator">&gt;</span> 脚本名
mysqldump <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> <span class="token comment">--all-databases [选项]  &gt; 脚本名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.例子</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysqldump <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span> <span class="token builtin class-name">test</span> <span class="token operator">&gt;</span> test.db <span class="token comment"># 备份指定数据库</span>
mysqldump <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span> --all-databases <span class="token operator">&gt;</span> all.db <span class="token comment"># 备份所有数据库</span>
mysqldump <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>  mysql db event <span class="token operator">&gt;</span> table.db <span class="token comment"># 备份指定表</span>
mysqldump <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span> <span class="token builtin class-name">test</span> --ignore-table<span class="token operator">=</span>test.t1 <span class="token operator">&gt;</span> test2.db <span class="token comment"># 备份指定表，排除不需要的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-restore" tabindex="-1"><a class="header-anchor" href="#_2-restore" aria-hidden="true">#</a> 2.restore</h2><p>1)系统命令</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysqladmin <span class="token operator">-</span>uroot <span class="token operator">-</span>p <span class="token keyword">create</span> db_name 
mysql <span class="token operator">-</span>uroot <span class="token operator">-</span>p  db_name <span class="token operator">&lt;</span> db_name<span class="token punctuation">.</span>db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2）source方法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>mysql <span class="token operator">&gt;</span> use db_name
mysql <span class="token operator">&gt;</span> source db_name<span class="token punctuation">.</span>db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> output</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 列名 <span class="token keyword">FROM</span> <span class="token keyword">table</span> <span class="token punctuation">[</span><span class="token keyword">WHERE</span> 语句<span class="token punctuation">]</span> <span class="token keyword">INTO</span> <span class="token keyword">OUTFILE</span> <span class="token string">&#39;目标文件&#39;</span><span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> input</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">USE</span> db1<span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">LOAD</span> <span class="token keyword">DATA</span> <span class="token keyword">INFILE</span> <span class="token string">&#39;t1.txt&#39;</span> <span class="token keyword">INTO</span> <span class="token keyword">TABLE</span> t1
       <span class="token keyword">FIELDS</span> <span class="token keyword">TERMINATED</span> <span class="token keyword">BY</span> <span class="token string">&#39;,&#39;</span> <span class="token keyword">FIELDS</span> <span class="token keyword">ENCLOSED</span> <span class="token keyword">BY</span> <span class="token string">&#39;&quot;&#39;</span>
       <span class="token keyword">LINES</span> <span class="token keyword">TERMINATED</span> <span class="token keyword">BY</span> <span class="token string">&#39;\\r\\n&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考： https://dev.mysql.com/doc/refman/8.0/en/reloading-delimited-text-dumps.html https://m.php.cn/article/460764.html</p><p>参考： https://dev.mysql.com/doc/refman/8.0/en/using-mysqldump.html https://www.cnblogs.com/markLogZhu/p/11398028.html</p>`,18),o=[p];function l(r,c){return a(),n("div",null,o)}const u=s(t,[["render",l],["__file","sql_backupRestore.html.vue"]]);export{u as default};