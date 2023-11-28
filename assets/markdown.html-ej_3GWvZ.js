import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as s,c as r,a as e,b as a,d as l,e as t}from"./app-yeyEmHfz.js";const d={},c=e("h1",{id:"markdown",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown","aria-hidden":"true"},"#"),a(" markdown")],-1),p={href:"https://plugin-md-enhance.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope",target:"_blank",rel:"noopener noreferrer"},u=t(`<p>写python脚本, 完成:</p><ol><li>将标题加1级</li><li>将文件路径前一级加上文章名称路径</li></ol><p>个性化配置:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token key atrule">pageInfo</span><span class="token punctuation">:</span> <span class="token boolean important">false</span><span class="token punctuation">,</span> // 关闭文章信息
  <span class="token key atrule">breadcrumb</span><span class="token punctuation">:</span> <span class="token boolean important">false</span><span class="token punctuation">,</span> // 关闭面包屑导航
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="博客文档组织形式" tabindex="-1"><a class="header-anchor" href="#博客文档组织形式" aria-hidden="true">#</a> 博客文档组织形式</h1><ol><li>将所有文件和文件夹, 放在根目录下. 然后在导航中自定义路径.</li><li>按目录结构将文章存放在距离目录下.</li></ol><p>第一种方法, 更符合编程习惯, 如果仅需要更新导航栏, 则每次写完文章后只需要更新导航栏配置即可. 但是如果想在首页自动生成链接, 则无法进行模块排序和划分. 这一点显然第二种方法更好.</p><p>最终头导航栏和侧边导航栏功能设计为:</p><ul><li>头导航栏: 设一级和二级标题, 自动链接到首页的位置</li><li>侧导航栏: 设三级和更高级标题, 链接到具体文章.</li></ul><h1 id="目录结构最佳实践" tabindex="-1"><a class="header-anchor" href="#目录结构最佳实践" aria-hidden="true">#</a> 目录结构最佳实践</h1><p>同级目录下不能即出现下一级目录(但可以出现文章的资源目录), 又出现文章.</p><p>建议:</p><ul><li>苹果 <ul><li>介绍 <ul><li>苹果发源</li><li>苹果构成</li></ul></li><li>种类1苹果</li><li>种类2苹果</li></ul></li></ul><p>禁止:</p><ul><li>苹果 <ul><li>苹果发源</li><li>苹果构成</li><li>种类1苹果</li><li>种类2苹果</li></ul></li></ul><h1 id="导航分类" tabindex="-1"><a class="header-anchor" href="#导航分类" aria-hidden="true">#</a> 导航分类</h1><p>文档结构 一级标题(目录): 综合, 比如法学, 是由民法, 民诉, 刑法, 刑诉等构成; 又如数学, 是由线代, 微积分, 代数构成; 编程语言, 由汇编, C, java, python构成 二级标题(目录): 就是综合下面的具体学科, 详细见一级标题. 三级标题(目录): 是学科的张章节, 如民法, 包含总则, 所有权, 继承等章节</p><blockquote><p>有些学科会出现册, 比如上册下册, 或者编, 比如总则编, 物权编等. 可以作为三级标题, 章节作为四级标题</p></blockquote><p>四级标题(目录): 章节的具体内容</p><p>文章中, 只出现一级标题和二级标题, 剩余的文章结构(三级, 四级, 五级)均使用列表表示. 当然, 也可以从二级标题开始使用列表表示.</p><h1 id="文章排序" tabindex="-1"><a class="header-anchor" href="#文章排序" aria-hidden="true">#</a> 文章排序</h1><p><code>sidebarSorter</code>设置为<code>filename</code>, 即按文件名称排序, 然后根据需要写文件名, 比如在文件名前加<code>1</code>,<code>2</code>,<code>3</code>来调整顺序. 然后在文章内部, 在<code>title</code>处将序号省去.</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1>`,23);function m(_,k){const n=i("ExternalLinkIcon");return s(),r("div",null,[c,e("p",null,[a("安装MD增强"),e("a",p,[a("vuepress-plugin-md-enhance"),l(n)])]),e("p",null,[a("安装主题"),e("a",h,[a("vuepress-theme-hope"),l(n)])]),u])}const v=o(d,[["render",m],["__file","markdown.html.vue"]]);export{v as default};
