import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-XqA98pG8.js";const e={},p=t(`<h1 id="位置intro" tabindex="-1"><a class="header-anchor" href="#位置intro" aria-hidden="true">#</a> 位置intro</h1><p>使用client系列的相关属性来获取元素可视区的相关信息。通过client系列的相关属性可以动态的得到该元素的边框大小、元素大小等。</p><table><thead><tr><th>client系列属性</th><th>作用</th></tr></thead><tbody><tr><td>element.clientTop</td><td>返回元素上边框的大小</td></tr><tr><td>element.clientLeft</td><td>返回元素左边框的大小</td></tr><tr><td>element.clientWidth</td><td>返回自身包括padding、内容区的宽度，不含边框，返回数值不带单位</td></tr><tr><td>element.clientHeight</td><td>返回自身包括padding、内容区的高度，不含边框，返回数值不带单位</td></tr></tbody></table><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">div</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> 10px solid red<span class="token punctuation">;</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">// client宽度和我们offsetWidth 最大的区别就是 不包含边框</span>
        <span class="token keyword">var</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>div<span class="token punctuation">.</span>clientWidth<span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>三大系列大小对比</th><th>作用</th></tr></thead><tbody><tr><td>element.offsetWidth</td><td>返回自身包括padding、边框、内容区的宽度，返回数值不带单位</td></tr><tr><td>element.clientWidth</td><td>返回自身包括padding、内容区的宽度， 不含边框，返回数值不带单位</td></tr><tr><td>element.scrollWidth</td><td>返回自身实际的宽度，不含边框，返回数值不带单位</td></tr></tbody></table><p><a href="1.png">1.png</a></p><p>他们主要用法: 1.offset系列 经常用于获得元素位置offsetLeft offsetTop 2. client 经常用于获取元素大小clientWidth clientHeight 3. scroll经常用于获取滚动距离scrollTop scrolleft 4.注意页面滚动的距离通过window. pagexoffset获得</p>`,7),c=[p];function l(o,i){return s(),a("div",null,c)}const r=n(e,[["render",l],["__file","dom_位置intro.html.vue"]]);export{r as default};
