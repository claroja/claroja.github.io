import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as a,a as n}from"./app-nD1Z-e8V.js";const t="/assets/1-DJ9S31iC.png",d={},r=n(`<h1 id="静态库创建" tabindex="-1"><a class="header-anchor" href="#静态库创建" aria-hidden="true">#</a> 静态库创建</h1><p>1.创建头文件<code>mylib.h</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#pragma once
int myadd(int a, int b);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.创建源文件<code>mylib.c</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#include &quot;mylib.h&quot;
int myadd(int a, int b) {
	return a + b;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.右键项目,选择属性,在常规里将配置类型改为<strong>静态库(.lib)</strong> 4.右键项目,重新生成,在Debug文件夹下得到<strong>project.lib (对象文件库)</strong>,库的名称是项目名称 我们需要把<code>project.lib</code>文件和<code>mylib.h</code>发给别人使用</p><h1 id="静态库使用" tabindex="-1"><a class="header-anchor" href="#静态库使用" aria-hidden="true">#</a> 静态库使用</h1><figure><img src="`+t+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h1 id="静态库优缺点" tabindex="-1"><a class="header-anchor" href="#静态库优缺点" aria-hidden="true">#</a> 静态库优缺点</h1><p>优点 静态库在编译时期完成 缺点 1.浪费内存和磁盘空间 2.一旦程序中有任何模块更新，整个程序就要重新编译链接、发布给用户，用户要重新安装整个程序</p>',10),s=[r];function c(l,o){return i(),a("div",null,s)}const h=e(d,[["render",c],["__file","win静态库.html.vue"]]);export{h as default};
