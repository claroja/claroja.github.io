import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o,c as a,a as l}from"./app-nD1Z-e8V.js";const i={},r=l(`<h1 id="zoom" tabindex="-1"><a class="header-anchor" href="#zoom" aria-hidden="true">#</a> zoom</h1><ol><li>zoom的缩放是相对于左上角的；而scale默认是居中缩放；</li><li>zoom的缩放改变了元素占据的空间大小；而scale的缩放占据的原始尺寸不变，页面布局不会发生变化；</li><li>对文字的缩放规则不一致。zoom缩放依然受限于最小12像素中文大小限制；而scale就是纯粹的对图形进行比例控制，文字50%原来尺寸。</li><li>在文档流中zoom加在任意一个元素上都会引起一整个页面的重新渲染，而scale只是在当前的元素上重绘。</li></ol><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>zoom： &lt;percentage&gt; | &lt;number&gt; | normal | reset
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>normal:表示对象采用默认的尺寸大小，相当于zoom值等于1.0或者100%。</li><li>number:一个浮点数，表示元素的放大倍数，1.0为基数。</li><li>percentage:百分数，表示元素的放大百分，100%为基数。</li><li>reset</li></ol><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://www.zhangxinxu.com/wordpress/2015/11/zoom-transform-scale-diff/</li><li>https://developer.mozilla.org/en-US/docs/Web/CSS/zoom</li></ol>`,7),s=[r];function t(n,c){return o(),a("div",null,s)}const h=e(i,[["render",t],["__file","3zoom.html.vue"]]);export{h as default};
