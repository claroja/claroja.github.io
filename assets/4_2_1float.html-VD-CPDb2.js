import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-nD1Z-e8V.js";const p={},e=t(`<h1 id="float" tabindex="-1"><a class="header-anchor" href="#float" aria-hidden="true">#</a> float</h1><p>​CSS 提供了三种传统布局方式:</p><ul><li>标准流 <ol><li>块级元素会独占一行，从上向下顺序排列。常用元素：div、hr、p、h1~h6、ul、ol、dl、form、table</li><li>行内元素会按照顺序，从左到右顺序排列，碰到父元素边缘则自动换行。常用元素：span、a、i、em 等</li></ol></li><li>浮动</li><li>定位</li></ul><p>浮动最典型的应用：可以让多个块级元素一行内排列显示。</p><p>语法：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token selector">选择器</span> <span class="token punctuation">{</span> <span class="token property">float</span><span class="token punctuation">:</span> 属性值<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>性质:</p><ol><li>浮动元素会脱离标准流(脱标：浮动的盒子不再保留原先的位置)</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>浮动特性1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token comment">/* 设置了浮动（float）的元素会：
        1. 脱离标准普通流的控制（浮）移动到指定位置（动）。
        2. 浮动的盒子不在保留原先的位置 */</span>
        <span class="token selector">.box1</span> <span class="token punctuation">{</span>
            <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.box2</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 153<span class="token punctuation">,</span> 255<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>浮动的盒子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>标准流的盒子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>浮动的元素会一行内显示并且元素顶部对齐</li><li>浮动的元素是互相贴靠在一起的（不会有缝隙），如果父级宽度装不下这些浮动的盒子，多出的盒子会另起一行对齐。</li><li>浮动的元素会具有行内块元素的特性 <ul><li>浮动元素的大小根据内容来决定</li><li>浮动的盒子中间是没有缝隙的</li></ul></li></ol><h3 id="浮动元素经常和标准流父级搭配使用" tabindex="-1"><a class="header-anchor" href="#浮动元素经常和标准流父级搭配使用" aria-hidden="true">#</a> 浮动元素经常和标准流父级搭配使用</h3><p>为了约束浮动元素位置, 我们网页布局一般采取的策略是: 先用标准流父元素排列上下位置, 之后内部子元素采取浮动排列左右位置. 符合网页布局第一准侧</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>浮动元素搭配标准流父盒子1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.box</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 460px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.left</span> <span class="token punctuation">{</span>  
            <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 230px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 460px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.right</span> <span class="token punctuation">{</span>
            <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 970px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 460px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>左侧<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>右侧<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="清除浮动" tabindex="-1"><a class="header-anchor" href="#清除浮动" aria-hidden="true">#</a> 清除浮动</h3><p>由于父级盒子很多情况下，不方便给高度，但是子盒子浮动又不占有位置，最后父级盒子高度为 0 时，就会影响下面的标准流盒子。 注意：</p><ul><li>如果父盒子本身有高度，则不需要清除浮动</li><li>清除浮动之后，父级就会根据浮动的子盒子自动检测高度。</li></ul><p>语法:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token selector">选择器</span><span class="token punctuation">{</span><span class="token property">clear</span><span class="token punctuation">:</span>属性值<span class="token punctuation">;</span><span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们实际工作中， 几乎只用 clear: both;</p><h4 id="额外标签法" tabindex="-1"><a class="header-anchor" href="#额外标签法" aria-hidden="true">#</a> 额外标签法</h4><p>额外标签法也称为隔墙法，是 W3C 推荐的做法。在浮动元素末尾添加一个空的标签。注意：要求这个新的空标签必须是块级元素。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">clear</span><span class="token punctuation">:</span>both</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>，或者其他标签（如<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>等）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>优点： 通俗易懂，书写方便 缺点： 添加许多无意义的标签，结构化较差 例子:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.box</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid blue<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.floatdiv</span> <span class="token punctuation">{</span>
            <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.clear</span> <span class="token punctuation">{</span>
            <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>floatdiv<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>浮动元素<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clear<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- 这个新增的盒子要求必须是块级元素不能是行内元素 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="父级添加after伪元素" tabindex="-1"><a class="header-anchor" href="#父级添加after伪元素" aria-hidden="true">#</a> 父级添加after伪元素</h4><p>:after 方式是额外标签法的升级版。给父元素添加：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token selector">.clearfix:after</span> <span class="token punctuation">{</span>  
   <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span> 
   <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span> 
   <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> 
   <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span> 
   <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>  
 <span class="token punctuation">}</span> 
 <span class="token selector">.clearfix</span> <span class="token punctuation">{</span>  <span class="token comment">/* IE6、7 专有 */</span> 
   *<span class="token property">zoom</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优点：没有增加标签，结构更简单 缺点：照顾低版本浏览器</p><h4 id="父级添加双伪元素" tabindex="-1"><a class="header-anchor" href="#父级添加双伪元素" aria-hidden="true">#</a> 父级添加双伪元素</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token selector">.clearfix:before,.clearfix:after</span> <span class="token punctuation">{</span>
   <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
   <span class="token property">display</span><span class="token punctuation">:</span>table<span class="token punctuation">;</span> 
 <span class="token punctuation">}</span>
 <span class="token selector">.clearfix:after</span> <span class="token punctuation">{</span>
   <span class="token property">clear</span><span class="token punctuation">:</span>both<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 <span class="token selector">.clearfix</span> <span class="token punctuation">{</span>
    *<span class="token property">zoom</span><span class="token punctuation">:</span>1<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优点：代码更简洁 缺点：照顾低版本浏览器</p><h4 id="父级添加-overflow-属性" tabindex="-1"><a class="header-anchor" href="#父级添加-overflow-属性" aria-hidden="true">#</a> 父级添加 overflow 属性</h4><p>可以给父级添加 overflow 属性，将其属性值设置为 hidden、 auto 或 scroll 。 例如：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">overflow</span><span class="token punctuation">:</span>hidden | auto | scroll<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>优点：代码简洁 缺点：无法显示溢出的部分</p>`,35),l=[e];function c(o,i){return s(),a("div",null,l)}const d=n(p,[["render",c],["__file","4_2_1float.html.vue"]]);export{d as default};
