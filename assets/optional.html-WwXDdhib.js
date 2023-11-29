import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-M6UUlHgF.js";const e={},o=t(`<h1 id="optional" tabindex="-1"><a class="header-anchor" href="#optional" aria-hidden="true">#</a> optional</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 对于一个路由节点，授权和未授权的均可以访问，但会使用不同的功能，</span>
<span class="token comment">## 这个时候就要使用jwt_optional()装饰器，</span>
<span class="token comment">## 至于判断是否是有token的用户，可以根据get_jwt_identity()函数的返回值判断</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/partially-protected&#39;</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@jwt_optional</span>
<span class="token keyword">def</span> <span class="token function">partially_protected</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># If no JWT is sent in with the request, get_jwt_identity()</span>
    <span class="token comment"># will return None</span>
    current_user <span class="token operator">=</span> get_jwt_identity<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> current_user<span class="token punctuation">:</span>
        <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span>logged_in_as<span class="token operator">=</span>current_user<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">200</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span>logged_in_as<span class="token operator">=</span><span class="token string">&#39;anonymous user&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">200</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应该是<code>@jwt_optional</code>, 执行了<code>verify_jwt_in_request()</code>, 然后可以在方法里, 进一步进行判断.</p>`,3),p=[o];function c(i,l){return s(),a("div",null,p)}const d=n(e,[["render",c],["__file","optional.html.vue"]]);export{d as default};