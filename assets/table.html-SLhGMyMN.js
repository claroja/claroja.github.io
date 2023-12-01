import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as p}from"./app-qxiCM96p.js";const e={},t=p('<h1 id="table" tabindex="-1"><a class="header-anchor" href="#table" aria-hidden="true">#</a> table</h1><h2 id="表操作" tabindex="-1"><a class="header-anchor" href="#表操作" aria-hidden="true">#</a> 表操作</h2><p>1.创建表<code>CREATE TABLE table_name</code></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>user_basic<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>\n  <span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">unsigned</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;用户ID&#39;</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>status<span class="token punctuation">`</span></span> <span class="token keyword">tinyint</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;1&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;状态，是否可用，0-不可用，1-可用&#39;</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>mobile<span class="token punctuation">`</span></span> <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;手机号&#39;</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>password<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">93</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;密码&#39;</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>last_login<span class="token punctuation">`</span></span> <span class="token keyword">datetime</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;最后登录时间&#39;</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>is_media<span class="token punctuation">`</span></span> <span class="token keyword">tinyint</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;0&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;是否是自媒体，0-不是，1-是&#39;</span><span class="token punctuation">,</span>\n  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token keyword">UNIQUE</span> <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">`</span>mobile<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>mobile<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token keyword">UNIQUE</span> <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">`</span>user_name<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>user_name<span class="token punctuation">`</span></span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8 <span class="token keyword">COMMENT</span><span class="token operator">=</span><span class="token string">&#39;用户基本信息表&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.删除表:<code>DROP TABLE 表名</code> 3.修改表:<code>ALTER TABLE oldname RENAME newname</code> 4.查看表<code>SHOW TABLES;</code>或<code>DESCRIBE(DESC) table_name;</code></p><p>9.索引（主键、外键、索引、唯一） 大量查询字段(where)，建立索引 像性别等种类比较少的不要建索引 索引会降低增删改的速度，因为每次变动都会重新建索引</p><p>10.注释 COMMENT</p><p>7.引擎选择 ENGINE=MyISAM</p><p>8.编码设置 DEFAULT CHARSET=utf8</p>',9),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","table.html.vue"]]);export{r as default};
