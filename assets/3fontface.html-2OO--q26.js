import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-nD1Z-e8V.js";const o={},p=t(`<h1 id="fontface" tabindex="-1"><a class="header-anchor" href="#fontface" aria-hidden="true">#</a> fontface</h1><p>字体图标使用场景： 主要用于显示网页中通用、常用的一些小图标。 精灵图是有诸多优点的，但是缺点很明显。 1.图片文件还是比较大的。 2.图片本身放大和缩小会失真。 3.一旦图片制作完毕想要更换非常复杂。 此时，有一种技术的出现很好的解决了以上问题，就是<strong>字体图标 iconfont</strong>。 <strong>字体图标</strong>可以为前端工程师提供一种方便高效的图标使用方式，<strong>展示的是图标，本质属于字体</strong>。</p><h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h4><p><strong>轻量级</strong>：一个图标字体要比一系列的图像要小。一旦字体加载了，图标就会马上渲染出来，减少了服务器请求</p><ul><li>灵活性：本质其实是文字，可以很随意的改变颜色、产生阴影、透明效果、旋转等</li><li>兼容性：几乎支持所有的浏览器，请放心使用</li><li>注意： 字体图标不能替代精灵技术，只是对工作中图标部分技术的提升和优化。</li></ul><p><strong>使用步骤</strong></p><p>字体图标是一些网页常见的小图标，我们直接网上下载即可。 因此使用可以分为：</p><p>1.字体图标的下载 http://icomoon.io/ 或 http://www.iconfont.cn/ 文件的格式是<code>.eot</code>,<code>.svg</code>,<code>.ttf</code>,<code>.woff</code> 为什么会有不同的格式? 因为不同浏览器所支持的字体格式是不一样的，字体图标之所以兼容，就是因为我们下载了多种格式. 每个浏览器会根据需要加载不同的格式.</p><p>2.字体图标的引入(在 CSS 样式中全局声明字体)</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
   <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;icomoon&#39;</span><span class="token punctuation">;</span>
   <span class="token property">src</span><span class="token punctuation">:</span>  <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;fonts/icomoon.eot?7kkyc2&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
   <span class="token property">src</span><span class="token punctuation">:</span>  <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;fonts/icomoon.eot?7kkyc2#iefix&#39;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;embedded-opentype&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
     <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;fonts/icomoon.ttf?7kkyc2&#39;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;truetype&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
     <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;fonts/icomoon.woff?7kkyc2&#39;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;woff&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
     <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;fonts/icomoon.svg?7kkyc2#icomoon&#39;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;svg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token property">font-weight</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
   <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>html 标签内添加小图标。(空的小方格)</li><li>给标签定义字体。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> span {
   font-family: &quot;icomoon&quot;;
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),e=[p];function c(l,i){return s(),a("div",null,e)}const k=n(o,[["render",c],["__file","3fontface.html.vue"]]);export{k as default};
