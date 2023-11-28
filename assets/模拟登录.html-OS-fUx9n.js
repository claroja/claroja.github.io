import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-yeyEmHfz.js";const p="/assets/1-erqPnbpF.png",o={},e=t('<h1 id="模拟登录" tabindex="-1"><a class="header-anchor" href="#模拟登录" aria-hidden="true">#</a> 模拟登录</h1><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests
<span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup
url<span class="token operator">=</span><span class="token string">&quot;https://passport.csdn.net/account/login&quot;</span>  <span class="token comment"># 登录页的网址</span>
s <span class="token operator">=</span> requests<span class="token punctuation">.</span>Session<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 创建一个回话</span>
response <span class="token operator">=</span> s<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>  <span class="token comment"># 获得登录页面</span>
soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>response<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
lt <span class="token operator">=</span> soup<span class="token punctuation">.</span>form<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;lt&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">]</span>  <span class="token comment"># 获得隐藏字段</span>
execution <span class="token operator">=</span> soup<span class="token punctuation">.</span>form<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;execution&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">]</span>  <span class="token comment"># 获得隐藏字段</span>
eventId <span class="token operator">=</span> soup<span class="token punctuation">.</span>form<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;_eventId&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">]</span>  <span class="token comment"># 获得隐藏字段</span>
headers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;User-Agent&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36&quot;</span><span class="token punctuation">}</span>
values <span class="token operator">=</span> <span class="token punctuation">{</span>  <span class="token comment"># 填写post信息</span>
        <span class="token string">&quot;username&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;账号&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;password&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;密码&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;lt&quot;</span><span class="token punctuation">:</span>lt<span class="token punctuation">,</span>
        <span class="token string">&quot;execution&quot;</span><span class="token punctuation">:</span>execution<span class="token punctuation">,</span>
        <span class="token string">&quot;_eventId&quot;</span><span class="token punctuation">:</span>eventId
    <span class="token punctuation">}</span>
r <span class="token operator">=</span> s<span class="token punctuation">.</span>post<span class="token punctuation">(</span>url<span class="token punctuation">,</span> data <span class="token operator">=</span> values<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span>  <span class="token comment"># 提交表单</span>
url <span class="token operator">=</span> <span class="token string">&quot;http://my.csdn.net/my/mycsdn&quot;</span>
html<span class="token operator">=</span>s<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span>headers<span class="token operator">=</span>headers<span class="token punctuation">)</span>  <span class="token comment"># 访问其他网页</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>html<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考文献: https://www.cnblogs.com/anny-1980/p/4537922.html</p>`,4),c=[e];function u(i,l){return s(),a("div",null,c)}const d=n(o,[["render",u],["__file","模拟登录.html.vue"]]);export{d as default};
