import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-yeyEmHfz.js";const p={},e=t(`<h1 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> transition</h1><p>语法：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">transition</span><span class="token punctuation">:</span> 要过渡的属性  花费时间  运动曲线  何时开始<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>属性: 想要变化的css属性, 宽度高度 背景颜色 内外边距都可以. 如果想要所有的属性都变化过渡, 写一个all 就可以</li><li>花费时间： 单位是 秒（必须写单位） 比如 0.5s</li><li>运动曲线： 默认是 ease （可以省略）</li><li>何时开始：单位是 秒（必须写单位）可以设置延迟触发时间, 默认是 0s</li></ul><p>例子:</p><p>步骤：</p><ul><li>创建两个div的盒子，属于的嵌套关系，外层类名叫 bar，里层类名叫 bar_in</li><li>给外层的bar 这个盒子设置边框，宽高，圆角边框</li><li>给里层的bar_in 设置 初试的宽度，背景颜色，过渡效果</li><li>给外层的 bar 添加 hover事件，当触发了hover事件 让里层的bar_in 来进行宽度的变化</li></ul><p>代码：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.bar</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 7px<span class="token punctuation">;</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.bar_in</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
            <span class="token comment">/* 谁做过渡给谁加 */</span>
            <span class="token property">transition</span><span class="token punctuation">:</span> all .7s<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.bar:hover .bar_in</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bar_in<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[e];function c(i,o){return s(),a("div",null,l)}const d=n(p,[["render",c],["__file","transition.html.vue"]]);export{d as default};
