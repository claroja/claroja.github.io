import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as i}from"./app-nD1Z-e8V.js";const e={},t=i(`<h1 id="spirit" tabindex="-1"><a class="header-anchor" href="#spirit" aria-hidden="true">#</a> spirit</h1><h2 id="精灵图" tabindex="-1"><a class="header-anchor" href="#精灵图" aria-hidden="true">#</a> 精灵图</h2><p>一个网页中往往会应用很多小的背景图像作为修饰，当网页中的图像过多时，服务器就会频繁地接收和发送请求图片，造成服务器请求压力过大，这将大大降低页面的加载速度。</p><p>将网页中的一些小背景图像整合到一张大图中 ，这样服务器只需要一次请求就可以了。</p><p>使用精灵图核心：</p><ol><li>精灵技术主要针对于背景图片使用。就是把多个小背景图片整合到一张大图片中。</li><li>这个大图片也称为 sprites 精灵图 或者 雪碧图</li><li>移动背景图片位置， 此时可以使用 background-position 。</li><li>移动的距离就是这个目标图片的 x 和 y 坐标。注意网页中的坐标有所不同</li><li>因为一般情况下都是往上往左移动，所以数值是负值。</li><li>使用精灵图的时候需要精确测量，每个小背景图片的大小和位置。</li></ol><p>样例:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.k</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 105px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 114px<span class="token punctuation">;</span>
    <span class="token comment">/* background-color: pink; */</span>
    <span class="token property">background-position</span><span class="token punctuation">:</span> -495px -142px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),p=[t];function c(o,l){return s(),a("div",null,p)}const u=n(e,[["render",c],["__file","3spirit.html.vue"]]);export{u as default};
