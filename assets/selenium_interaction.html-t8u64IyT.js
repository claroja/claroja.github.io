import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as e,e as s}from"./app-XqA98pG8.js";const t={},c=s(`<h1 id="interaction" tabindex="-1"><a class="header-anchor" href="#interaction" aria-hidden="true">#</a> interaction</h1><p>尽量使用<code>driver.execute_script</code>来控制, 因为某些标签, 如<code>&lt;input&gt;</code>会对<code>send_keys</code>失效.</p><p>交互行为, 主要用来触发点击, 输入文字等事件</p><h2 id="click" tabindex="-1"><a class="header-anchor" href="#click" aria-hidden="true">#</a> Click</h2><h2 id="send-keys" tabindex="-1"><a class="header-anchor" href="#send-keys" aria-hidden="true">#</a> Send keys</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>SearchInput <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>NAME<span class="token punctuation">,</span> <span class="token string">&quot;q&quot;</span><span class="token punctuation">)</span>
SearchInput<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&quot;selenium&quot;</span><span class="token punctuation">)</span>
<span class="token comment">## Clears the entered text</span>
SearchInput<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="clear" tabindex="-1"><a class="header-anchor" href="#clear" aria-hidden="true">#</a> Clear</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>SearchInput <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>NAME<span class="token punctuation">,</span> <span class="token string">&quot;q&quot;</span><span class="token punctuation">)</span>
SearchInput<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&quot;selenium&quot;</span><span class="token punctuation">)</span>
    <span class="token comment"># Clears the entered text</span>
SearchInput<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://www.selenium.dev/documentation/webdriver/elements/interactions/</p>`,9),i=[c];function p(o,u){return a(),e("div",null,i)}const d=n(t,[["render",p],["__file","selenium_interaction.html.vue"]]);export{d as default};
