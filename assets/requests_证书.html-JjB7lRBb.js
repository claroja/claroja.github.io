import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as n,e as a}from"./app-XqA98pG8.js";const t={},o=a(`<h1 id="证书" tabindex="-1"><a class="header-anchor" href="#证书" aria-hidden="true">#</a> 证书</h1><p>当遇到<code>ssl.CertificateError ...</code>时 我们使用verify=False参数，此时requests模块发送请求将不做CA证书的验证：verify参数能够忽略CA证书的认证</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests
url <span class="token operator">=</span> <span class="token string">&quot;https://...&quot;</span> 
response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span>verify<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),r=[o];function c(p,i){return e(),n("div",null,r)}const u=s(t,[["render",c],["__file","requests_证书.html.vue"]]);export{u as default};
