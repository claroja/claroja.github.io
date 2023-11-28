import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as a,e as n}from"./app-yeyEmHfz.js";const t={},l=n(`<h1 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> delete</h1><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> 表名称 <span class="token keyword">WHERE</span> 列名称 <span class="token operator">=</span> 值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的操作称之为物理删除，一旦删除就不容易恢复，我们可以使用逻辑删除的方式来解决这个问题。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 添加删除表示字段，0表示未删除 1表示删除</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> students <span class="token keyword">add</span> isdelete <span class="token keyword">bit</span> <span class="token keyword">default</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">-- 逻辑删除数据</span>
<span class="token keyword">update</span> students <span class="token keyword">set</span> isdelete <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">where</span> id <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>逻辑删除，本质就是修改操作</p>`,5),d=[l];function o(p,c){return e(),a("div",null,d)}const k=s(t,[["render",o],["__file","delete.html.vue"]]);export{k as default};
