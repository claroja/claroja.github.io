import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e}from"./app-XqA98pG8.js";const t={},p=e(`<h1 id="用户交互" tabindex="-1"><a class="header-anchor" href="#用户交互" aria-hidden="true">#</a> 用户交互</h1><h2 id="用户交互-1" tabindex="-1"><a class="header-anchor" href="#用户交互-1" aria-hidden="true">#</a> 用户交互</h2><p><code>window.alert()</code>、<code>window.prompt()</code>、<code>window.confirm()</code>都是浏览器与用户互动的全局方法。它们会弹出不同的对话框，要求用户做出回应。注意，这三个方法弹出的对话框，都是浏览器统一规定的式样，无法定制。</p><h3 id="alert" tabindex="-1"><a class="header-anchor" href="#alert" aria-hidden="true">#</a> alert</h3><p><code>window.alert()</code>方法弹出的对话框，只有一个“确定”按钮，往往用来通知用户某些信息。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用户只有点击“确定”按钮，对话框才会消失。对话框弹出期间，浏览器窗口处于冻结状态，如果不点“确定”按钮，用户什么也干不了。 <code>window.alert()</code>方法的参数只能是字符串，没法使用 CSS 样式，但是可以用\\n指定换行。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;本条提示\\n分成两行&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="prompt" tabindex="-1"><a class="header-anchor" href="#prompt" aria-hidden="true">#</a> prompt()</h3><p><code>window.prompt()</code>方法弹出的对话框，提示文字的下方，还有一个输入框，要求用户输入信息，并有“确定”和“取消”两个按钮。它往往用来获取用户输入的数据。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&#39;您的年龄？&#39;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码会跳出一个对话框，文字提示为“您的年龄？”，要求用户在对话框中输入自己的年龄（默认显示25）。用户填入的值，会作为返回值存入变量result。</p><p><code>window.prompt()</code>的返回值有两种情况，可能是字符串（有可能是空字符串），也有可能是null。具体分成三种情况。</p><ul><li>用户输入信息，并点击“确定”，则用户输入的信息就是返回值。</li><li>用户没有输入信息，直接点击“确定”，则输入框的默认值就是返回值。</li><li>用户点击了“取消”（或者按了 ESC 按钮），则返回值是null。</li></ul><p>window.prompt()方法的第二个参数是可选的，但是最好总是提供第二个参数，作为输入框的默认值。</p><h2 id="confirm" tabindex="-1"><a class="header-anchor" href="#confirm" aria-hidden="true">#</a> confirm()</h2><p><code>window.confirm()</code>方法弹出的对话框，除了提示信息之外，只有“确定”和“取消”两个按钮，往往用来征询用户是否同意</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">&#39;你最近好吗？&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码弹出一个对话框，上面只有一行文字“你最近好吗？”，用户选择点击“确定”或“取消”。</p><p>confirm方法返回一个布尔值，如果用户点击“确定”，返回true；如果用户点击“取消”，则返回false。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> okay <span class="token operator">=</span> <span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">&#39;Please confirm this message.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>okay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 用户按下“确定”</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// 用户按下“取消”</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>confirm的一个用途是，用户离开当前页面时，弹出一个对话框，问用户是否真的要离开。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onunload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> window<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">&#39;你确定要离开当面页面吗？&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这三个方法都具有堵塞效应，一旦弹出对话框，整个页面就是暂停执行，等待用户做出反应。</p>`,24),o=[p];function c(i,l){return a(),s("div",null,o)}const u=n(t,[["render",c],["__file","bom_用户交互.html.vue"]]);export{u as default};
