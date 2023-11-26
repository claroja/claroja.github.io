import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as o,e as s}from"./app-XqA98pG8.js";const n={},t=s(`<h1 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> cookie</h1><p>HTTP Cookie（也叫 Web Cookie 或浏览器 Cookie）是服务器发送到用户浏览器并保存在本地的一小块数据。浏览器会存储 cookie 并在下次向同一服务器再发起请求时携带并发送到服务器上。 Cookie的主要应用:</p><ol><li>会话状态管理(Cookie 使基于<mark>无状态</mark>的 HTTP 协议记录<mark>有状态</mark>信息成为了可能)如户登录状态、购物车</li><li>个性化设置, 如用户自定义设置、主题</li><li>浏览器行为跟踪, 如跟踪分析用户行为等</li></ol><p><mark>注意</mark> Cookie 曾一度用于客户端数据的存储，但现在推荐使用现代存储 API。由于服务器指定 Cookie 后，浏览器的每次请求都会携带 Cookie 数据，会带来额外的性能开销（尤其是在移动环境下）。新的浏览器 API 已经允许开发者直接将数据存储到本地，如使用 Web storage API（localStorage 和 sessionStorage）</p><h2 id="cookie的使用" tabindex="-1"><a class="header-anchor" href="#cookie的使用" aria-hidden="true">#</a> Cookie的使用</h2><ol><li>服务器收到 HTTP 请求后，服务器可以在响应标头里面添加一个或多个<code>Set-Cookie</code>选项。以下是服务器的响应内容:</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">HTTP</span><span class="token operator">/</span><span class="token number">1.0</span> <span class="token number">200</span> <span class="token constant">OK</span>
Content<span class="token operator">-</span>type<span class="token operator">:</span> text<span class="token operator">/</span>html
Set<span class="token operator">-</span>Cookie<span class="token operator">:</span> yummy_cookie<span class="token operator">=</span>choco
Set<span class="token operator">-</span>Cookie<span class="token operator">:</span> tasty_cookie<span class="token operator">=</span>strawberry

<span class="token punctuation">[</span>页面内容<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>浏览器收到响应后通常会保存下<code>Cookie</code>，对该服务器发起的每一次新请求，浏览器都会将之前保存的 Cookie 信息通过 Cookie 请求头部再发送给服务器。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">GET</span> <span class="token operator">/</span>sample_page<span class="token punctuation">.</span>html <span class="token constant">HTTP</span><span class="token operator">/</span><span class="token number">1.1</span>
<span class="token literal-property property">Host</span><span class="token operator">:</span> www<span class="token punctuation">.</span>example<span class="token punctuation">.</span>org
<span class="token literal-property property">Cookie</span><span class="token operator">:</span> yummy_cookie<span class="token operator">=</span>choco<span class="token punctuation">;</span> tasty_cookie<span class="token operator">=</span>strawberry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cookie例子" tabindex="-1"><a class="header-anchor" href="#cookie例子" aria-hidden="true">#</a> Cookie例子</h2><ol><li>会话期cookie: 在客户端关闭时被移除. 不需要设置<code>Expires</code>或<code>Max-Age</code>属性. <code>Set-Cookie: sessionId=38afes7a8</code></li><li>持久化cookie: 在特定的日期（Expires）或者经过一段特定的时间之后（Max-Age）才会失效。 <code>Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT</code><code>Set-Cookie: id=a3fWa; Max-Age=2592000</code></li></ol><p>参考: https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies</p>`,12),i=[t];function c(p,r){return a(),o("div",null,i)}const k=e(n,[["render",c],["__file","http_cookie.html.vue"]]);export{k as default};
