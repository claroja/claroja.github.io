import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-yeyEmHfz.js";const e={},o=t(`<h1 id="font" tabindex="-1"><a class="header-anchor" href="#font" aria-hidden="true">#</a> font</h1><h2 id="font-属性" tabindex="-1"><a class="header-anchor" href="#font-属性" aria-hidden="true">#</a> font-*属性</h2><ul><li>font-size : 文字的大小, 用px像素作为单位, 谷歌浏览器默认的文字大小为16px, 比如<code>font-size: 16px;</code></li><li>font-style : 设置文字的风格, 比如<code>font-style: italic;</code></li><li>font-weight : 文字的粗细, 比如<code>font-weight: 700;</code></li><li>font-family : 文字的字体, 比如<code>font-family: &#39;Microsoft yahei&#39;;</code></li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>CSS字体属性之复合属性<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
       <span class="token comment">/* 想要div文字变倾斜 加粗 字号设置为16像素 并且 是微软雅黑 */</span>
       <span class="token selector">div</span> <span class="token punctuation">{</span>
           <span class="token comment">/* font-style: italic;
           font-weight: 700;
           font-size: 16px;
           font-family: &#39;Microsoft yahei&#39;; */</span>

           <span class="token comment">/* 上述四个属性也可以合并写为 font: font-style  font-weight  font-size  font-family;
               font: italic 700 16px &#39;Microsoft yahei&#39;; */</span>
       <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>字体属性<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他字体属性" tabindex="-1"><a class="header-anchor" href="#其他字体属性" aria-hidden="true">#</a> 其他字体属性</h2><ul><li>color 定义文本的颜色, 常用的是十六进制表示, 比如<code>color: #ffff</code></li><li>text-align 文本水平对齐方式<code>text-align: center;</code></li><li>text-decoration 文本装饰, 比如下划线<code>text-decoration：underline;</code></li><li>text-indent 文本缩进, 比如空两个字符<code>text-indent：2em;</code></li><li>line-height 文本行高, 注意: <code>line-height=font-size+上间距+下间距</code>, 比如<code>line-height: 26px</code>, 如果默认<code>font-size: 16px;</code>, 那么上间距就是<code>5px</code>, 下间距也是<code>5px</code></li></ul>`,6),l=[o];function c(p,i){return s(),a("div",null,l)}const k=n(e,[["render",c],["__file","font.html.vue"]]);export{k as default};
