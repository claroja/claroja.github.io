import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as n,e as s}from"./app-yeyEmHfz.js";const i={},t=s(`<h1 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> if</h1><h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> syntax</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> 条件判断式 <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span> 
    程序
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong> 1.if语句使用fi结尾，和一般语言使用大括号结尾不同。 2.[ 条件判断式 ] 就是使用test命令判断，所以中括号和条件判断式之间必须有空格 3.then后面跟符号条件之后执行的程序，可以放在[]之后，用“;”分割，也可以换行写入，就不需要&quot;；&quot;了。</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> example</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>eg:<span class="token comment">#!/bin/sh</span>
<span class="token keyword">if</span>  <span class="token punctuation">[</span> <span class="token parameter variable">-x</span>  /etc/rc.d/init.d/httpd <span class="token punctuation">]</span>
    <span class="token keyword">then</span>
    /etc/rc.d/init.d/httpd restart
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),d=[t];function c(r,l){return e(),n("div",null,d)}const u=a(i,[["render",c],["__file","if.html.vue"]]);export{u as default};
