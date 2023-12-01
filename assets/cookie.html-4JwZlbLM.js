import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-qxiCM96p.js";const e={},o=t(`<h1 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> cookie</h1><h2 id="添加cookie" tabindex="-1"><a class="header-anchor" href="#添加cookie" aria-hidden="true">#</a> 添加cookie</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver

driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span>

driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;http://www.example.com&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## Adds the cookie into current browser context</span>
driver<span class="token punctuation">.</span>add_cookie<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获得cookie" tabindex="-1"><a class="header-anchor" href="#获得cookie" aria-hidden="true">#</a> 获得cookie</h2><ol><li>获得1个cookie</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver

driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">## Navigate to url</span>
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;http://www.example.com&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## Adds the cookie into current browser context</span>
driver<span class="token punctuation">.</span>add_cookie<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">## Get cookie details with named cookie &#39;foo&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>driver<span class="token punctuation">.</span>get_cookie<span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>获得所有cookie</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver

driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">## Navigate to url</span>
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;http://www.example.com&quot;</span><span class="token punctuation">)</span>

driver<span class="token punctuation">.</span>add_cookie<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;test1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;cookie1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>add_cookie<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;test2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;cookie2&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">## Get all available cookies</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>driver<span class="token punctuation">.</span>get_cookies<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除cookie" tabindex="-1"><a class="header-anchor" href="#删除cookie" aria-hidden="true">#</a> 删除cookie</h2><ol><li>删除1个cookie</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver
driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">## Navigate to url</span>
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;http://www.example.com&quot;</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>add_cookie<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;test1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;cookie1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>add_cookie<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;test2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;cookie2&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">## Delete a cookie with name &#39;test1&#39;</span>
driver<span class="token punctuation">.</span>delete_cookie<span class="token punctuation">(</span><span class="token string">&quot;test1&quot;</span><span class="token punctuation">)</span>
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>删除所有cookie</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver
driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">## Navigate to url</span>
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;http://www.example.com&quot;</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>add_cookie<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;test1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;cookie1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>add_cookie<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;test2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;cookie2&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">##  Deletes all cookies</span>
driver<span class="token punctuation">.</span>delete_all_cookies<span class="token punctuation">(</span><span class="token punctuation">)</span>
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),p=[o];function i(c,u){return s(),a("div",null,p)}const d=n(e,[["render",i],["__file","cookie.html.vue"]]);export{d as default};
