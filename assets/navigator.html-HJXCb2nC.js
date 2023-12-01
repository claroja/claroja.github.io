import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o,c as p,a as n,b as a,d as c,e as i}from"./app-qxiCM96p.js";const r={},l=n("h1",{id:"navigator",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#navigator","aria-hidden":"true"},"#"),a(" navigator")],-1),u={href:"https://developer.mozilla.org/en-US/docs/Web/API/Navigator",target:"_blank",rel:"noopener noreferrer"},d=i(`<p>可以在navigator中获取head信息?</p><p>navigator 对象包含有关浏览器的信息，它有很多属性，我们最常用的是 userAgent，该属性可以返回由客户机发送服务器的 user-agent 头部的值。 判断用户那个终端打开页面，实现跳转</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token string">&quot;/(phone|pad|pod|iPhone|)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>     <span class="token comment">//手机</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>     <span class="token comment">//电脑</span>
 <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function k(v,m){const s=e("ExternalLinkIcon");return o(),p("div",null,[l,n("p",null,[n("a",u,[a("参考官网"),c(s)])]),d])}const h=t(r,[["render",k],["__file","navigator.html.vue"]]);export{h as default};
