import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as c,c as i,a as n,b as e,d as s,e as o}from"./app-qxiCM96p.js";const l={},r=o('<h1 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> markdown</h1><p>原生revealjs的MD插件不支持MD中的<code>&lt;script&gt;</code>标签, 也不能在<code>index.html</code>中写js脚本获得MD中的DOM元素, 所以无法使用Echarts.<br> 另外需要使用<code>***</code>和<code>---</code>来分隔不同的幻灯片, 与书写MD本身有一些冲突, 不够通用.</p>',2),p=n("code",null,"pandoc",-1),u={href:"https://pandoc.org/MANUAL.html#slide-shows",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,'<div class="reveal">',-1),v=n("code",null,"index.html",-1),m=o('<ol><li>在需要插入echarts的地方, <code>div</code>直接写入对应幻灯片的, 然后将数据写入<code>&lt;script&gt;</code>中. 注意这都是在<code>index.html</code>的操作, 而不是在MD文件中的.</li><li><code>pandoc</code>会自动将一级标题转化为横向的幻灯片, 二级标题转换为纵向的幻灯片, 这样就和MD书写统一了</li></ol><h2 id="使用pandoc生成" tabindex="-1"><a class="header-anchor" href="#使用pandoc生成" aria-hidden="true">#</a> 使用pandoc生成</h2>',2),k={href:"https://pandoc.org/MANUAL.html#slide-shows",target:"_blank",rel:"noopener noreferrer"},b={href:"https://zhuanlan.zhihu.com/p/113146276",target:"_blank",rel:"noopener noreferrer"},_=o(`<p><code>pandoc example.md -o example.html -t revealjs -s</code></p><h2 id="revealjs原生的markdown支持" tabindex="-1"><a class="header-anchor" href="#revealjs原生的markdown支持" aria-hidden="true">#</a> revealjs原生的markdown支持</h2><p>使用<code>***</code>来分隔横向的幻灯片, 使用<code>---</code>来分隔纵向的幻灯片.</p><h3 id="在section的属性配置md" tabindex="-1"><a class="header-anchor" href="#在section的属性配置md" aria-hidden="true">#</a> 在<code>section</code>的属性配置MD</h3><ul><li><p>配置<code>&lt;section&gt;</code></p><ul><li><code>data-markdown=&quot;example.md&quot;</code>, markdown的源文件位置, 默认是<code>reveal.js</code>工程的根目录</li><li><code>data-separator=&quot;\\*\\*\\*&quot;</code>, 配置横向幻灯片的分隔符, 这里使用MD的<code>***</code>分隔线来代替这里注意<code>***</code>要使用转义</li><li><code>data-separator-vertical=&quot;---&quot;</code>, 配置纵向幻灯片的分隔符, 这里使用MD的<code>---</code>分割线来代替</li><li><code>data-charset=&quot;utf8&quot;</code>, 设置MD的编码格式</li></ul><blockquote><p>无论<code>***</code>还是<code>---</code>在MD中的语法显示都是一样的, 所以无法做到MD和reveal的完全对应, 但暂时没有更好的办法.</p></blockquote></li><li><p>开启MD插件, 这个插件是reveal原生的, 不需要额外导入.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Reveal<span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span> RevealMarkdown<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="书写md" tabindex="-1"><a class="header-anchor" href="#书写md" aria-hidden="true">#</a> 书写MD</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">##</span> 1</span>

slide 1

<span class="token hr punctuation">***</span>

<span class="token title important"><span class="token punctuation">##</span> 2.1</span>

slide 2.1

<span class="token hr punctuation">---</span>

<span class="token title important"><span class="token punctuation">##</span> 2.2</span>

slide 2.2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function f(x,M){const a=t("ExternalLinkIcon");return c(),i("div",null,[r,n("p",null,[e("解决方案是使用"),p,e("先将MD文件转化为revealjs文件, 可参考"),n("a",u,[e("slide-shows"),s(a)]),e(". 然后将"),h,e("的内容复制到原生的revealjs工程中的"),v,e("中. 这样可以解决上面的两个问题:")]),m,n("p",null,[e("参考"),n("a",k,[e("slide-shows"),s(a)]),e("与"),n("a",b,[e("Pandoc与Reveal.js制作幻灯片"),s(a)])]),_])}const D=d(l,[["render",f],["__file","markdown.html.vue"]]);export{D as default};
