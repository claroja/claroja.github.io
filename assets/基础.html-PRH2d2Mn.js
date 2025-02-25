import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c as l,b as n,d as a,e,a as c}from"./app-nD1Z-e8V.js";const i={},r=c(`<h1 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h1><ol><li>TypeScript是JavaScript的超集。对JS进行了扩展，向JS中引入了类型的概念，并添加了许多新的特性。TS完全兼容JS，换言之，任何的JS代码都可以直接当成JS使用。</li><li>TS代码需要通过编译器编译为JS，然后再交由JS解析器执行。</li><li>相较于JS而言， <ul><li>TS拥有了静态类型，更加严格的语法，更强大的功能；</li><li>TS可以在代码执行前就完成代码的检查，减小了运行时异常的出现的几率</li><li>TS代码可以编译为任意版本的JS代码，可有效解决不同JS运行环境的兼容问题；</li><li>同样的功能，TS的代码量要大于JS，但由于TS的代码结构更加清晰，变量类型更加明确，在后期代码的维护中TS却远远胜于JS。</li></ul></li></ol><p>ts的类型系统会自动推断js中的数据类型, 所以不必指定.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ts的类型系统, 自动给 helloWorld 加了string类型的推断. 以下两句相同.</span>
<span class="token keyword">let</span> helloWorld <span class="token operator">=</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">helloWorld</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于复杂的类型, 可以先使用<code>interface</code>来声明</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token literal-property property">user</span><span class="token operator">:</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Hayes&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>js和ts都支持面向对象的写法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">class</span> <span class="token class-name">UserAccount</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
 
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">const</span> <span class="token literal-property property">user</span><span class="token operator">:</span> User <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserAccount</span><span class="token punctuation">(</span><span class="token string">&quot;Murphy&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组合类型-composing-types" tabindex="-1"><a class="header-anchor" href="#组合类型-composing-types" aria-hidden="true">#</a> 组合类型(Composing Types)</h2><ul><li><p>Unions:</p><ul><li><p>给变量指定类型值范围, <code>type MyBool = true | false;</code>, 该布尔(boolean)类型, 既可以是<code>true</code>也可以是<code>false</code></p></li><li><p>给变量指定类型种类</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getLength</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">obj</span><span class="token operator">:</span> string <span class="token operator">|</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">return</span> obj<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>查看变量的类型(typeof)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>泛型(Generics)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>type StringArray <span class="token operator">=</span> Array<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">;</span>
type ObjectWithNameArray <span class="token operator">=</span> Array<span class="token operator">&lt;</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="structural-type-system" tabindex="-1"><a class="header-anchor" href="#structural-type-system" aria-hidden="true">#</a> Structural Type System</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">x</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token literal-property property">y</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">function</span> <span class="token function">logPoint</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">p</span><span class="token operator">:</span> Point</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>p<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>p<span class="token punctuation">.</span>y<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// logs &quot;12, 26&quot;</span>
<span class="token keyword">const</span> point <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">26</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">logPoint</span><span class="token punctuation">(</span>point<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>point</code>变量没有声明类型, 但是和<code>interface Point</code>一样, ts会认为二者一样</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,14),u={href:"https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"};function k(v,m){const s=t("ExternalLinkIcon");return o(),l("div",null,[r,n("p",null,[n("a",u,[a("TypeScript for JavaScript Programmers"),e(s)]),n("a",d,[a("官网"),e(s)])])])}const g=p(i,[["render",k],["__file","基础.html.vue"]]);export{g as default};
