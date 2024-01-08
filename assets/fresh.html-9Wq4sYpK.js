import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-YE2Hltoy.js";const e={},p=t(`<h1 id="fresh" tabindex="-1"><a class="header-anchor" href="#fresh" aria-hidden="true">#</a> fresh</h1><p>如果为True, 只能让标记为&quot;新鲜&quot;的授权token访问，该参数要结合create_access_token来使用，当我们创建access_token时，有一个可选参数为fresh如果我们把它设为True,则代表它是&quot;新鲜&quot;token。默认为False。</p><p>一个应用就是用户登陆时获得的<code>access_token</code>将<code>fresh</code>设为<code>true</code>, 对那些比较重要的接口, 比如转账之类的, 必须是要求用户手动收入密码后才能调用的.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask_jwt_extended <span class="token keyword">import</span> create_access_token
<span class="token keyword">from</span> flask_jwt_extended <span class="token keyword">import</span> create_refresh_token
<span class="token keyword">from</span> flask_jwt_extended <span class="token keyword">import</span> get_jwt_identity
<span class="token keyword">from</span> flask_jwt_extended <span class="token keyword">import</span> jwt_required
<span class="token keyword">from</span> flask_jwt_extended <span class="token keyword">import</span> JWTManager

<span class="token keyword">from</span> datetime <span class="token keyword">import</span> timedelta
<span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask
<span class="token keyword">from</span> flask <span class="token keyword">import</span> jsonify

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">&#39;JWT_SECRET_KEY&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;hello@#$%&amp;&#39;</span>  <span class="token comment"># 加密盐值</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">&#39;JWT_ACCESS_TOKEN_EXPIRES&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> timedelta<span class="token punctuation">(</span>hours<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># 设置access_token的有效时间</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">&quot;JWT_REFRESH_TOKEN_EXPIRES&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> timedelta<span class="token punctuation">(</span>days<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># 设置refresh_token的有效时间</span>
jwt <span class="token operator">=</span> JWTManager<span class="token punctuation">(</span>app<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    access_token <span class="token operator">=</span> create_access_token<span class="token punctuation">(</span>identity<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;apple&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;id&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> fresh<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>  <span class="token comment"># 开启新鲜度模式</span>
    refresh_token <span class="token operator">=</span> create_refresh_token<span class="token punctuation">(</span>identity<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;apple&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;id&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span>access_token<span class="token operator">=</span>access_token<span class="token punctuation">,</span> refresh_token<span class="token operator">=</span>refresh_token<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&quot;/refresh&quot;</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 携带refresh_token请求此接口，刷新access_token</span>
<span class="token decorator annotation punctuation">@jwt_required</span><span class="token punctuation">(</span>refresh<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    identity <span class="token operator">=</span> get_jwt_identity<span class="token punctuation">(</span><span class="token punctuation">)</span>
    access_token <span class="token operator">=</span> create_access_token<span class="token punctuation">(</span>identity<span class="token operator">=</span>identity<span class="token punctuation">,</span> fresh<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>  <span class="token comment"># 刷新不开启新鲜度模式</span>
    <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span>access_token<span class="token operator">=</span>access_token<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&quot;/protected&quot;</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@jwt_required</span><span class="token punctuation">(</span>fresh<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>  <span class="token comment"># 只允许登入授权的用户访问,刷新授权不能在访问</span>
<span class="token keyword">def</span> <span class="token function">protected</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    identity <span class="token operator">=</span> get_jwt_identity<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span>identity<span class="token operator">=</span>identity<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/index&#39;</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@jwt_required</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 无论登入授权还是，刷新授权都能访问</span>
<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span>msg<span class="token operator">=</span><span class="token string">&#39;欢迎访问&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://www.codestudyblog.com/cnb2107a/0718131141.html https://www.cnblogs.com/Liu928011/archive/2021/07/17/15020581.html</p>`,5),o=[p];function c(i,l){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","fresh.html.vue"]]);export{k as default};