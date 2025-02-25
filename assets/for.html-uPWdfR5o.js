import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as n,a as e}from"./app-nD1Z-e8V.js";const i={},l=e(`<h1 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> for</h1><h2 id="range循环" tabindex="-1"><a class="header-anchor" href="#range循环" aria-hidden="true">#</a> range循环</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">seq</span> <span class="token number">1</span> <span class="token number">10</span><span class="token variable">)</span></span>
<span class="token keyword">do</span>
	<span class="token builtin class-name">echo</span> <span class="token variable">$i</span><span class="token punctuation">;</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多个具体值用空格隔开" tabindex="-1"><a class="header-anchor" href="#多个具体值用空格隔开" aria-hidden="true">#</a> 多个具体值用空格隔开</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>                                                                  
<span class="token keyword">do</span>                                                                              
    <span class="token builtin class-name">echo</span> <span class="token variable">$i</span>                                                                     
<span class="token keyword">done</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用命令" tabindex="-1"><a class="header-anchor" href="#使用命令" aria-hidden="true">#</a> 使用命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">ls</span><span class="token variable">)</span></span> ＃　遍历ｌｓ命令的结果                                                                 
<span class="token keyword">do</span>                                                                              
    <span class="token builtin class-name">echo</span> <span class="token variable">$i</span>                                                                     
<span class="token keyword">done</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用通配符" tabindex="-1"><a class="header-anchor" href="#使用通配符" aria-hidden="true">#</a> 使用通配符</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash                                                                     </span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> .* <span class="token comment"># .开头的所有文件</span>
<span class="token keyword">do</span>                                                                              
    <span class="token builtin class-name">echo</span> <span class="token variable">$i</span>                                                                     
<span class="token keyword">done</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用列表类型变量" tabindex="-1"><a class="header-anchor" href="#使用列表类型变量" aria-hidden="true">#</a> 使用列表类型变量</h2><p>注意for 遇到空白符,比如空格或者<code>\\t</code>都会当成一个元素来对待</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash                                                                     </span>
<span class="token assign-left variable">my_array</span><span class="token operator">=</span><span class="token string">&quot;A B &#39;C&#39;<span class="token entity" title="\\t">\\t</span>D&quot;</span>                                                                                                                                     
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable">$my_array</span>                                                              
<span class="token keyword">do</span>                                                                              
    <span class="token builtin class-name">echo</span> <span class="token variable">$i</span>                                                                     
<span class="token keyword">done</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),r=[l];function d(o,c){return s(),n("div",null,r)}const v=a(i,[["render",d],["__file","for.html.vue"]]);export{v as default};
