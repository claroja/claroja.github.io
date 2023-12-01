import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as c,c as d,e as t}from"./app-qxiCM96p.js";const a="/assets/6-3l6i1fyg.png",e="/assets/1-UIlXsx5C.png",i="/assets/4-X801fI0z.png",s="/assets/5-wRuNi-iK.png",l="/assets/2-gBauSMgl.png",r="/assets/3-rZ66GN42.png",n={},h=t('<h1 id="head" tabindex="-1"><a class="header-anchor" href="#head" aria-hidden="true">#</a> HEAD</h1><p><code>HEAD</code>是一种指针</p><h2 id="控制回退个数" tabindex="-1"><a class="header-anchor" href="#控制回退个数" aria-hidden="true">#</a> <code>~</code>控制回退个数</h2><p><code>~</code>表示相对于当前<code>HEAD</code>指针的<code>commitId</code>的相对位置</p><ul><li><code>git checkout HEAD~1</code> 表示当前<code>HEAD</code>指针指向<code>commitId</code>的前一个<code>commitId</code></li><li><code>git checkout HEAD~2</code> 表示当前<code>HEAD</code>指针指向<code>commitId</code>的前两个<code>commitId</code></li></ul><p>注意: <code>HEAD</code>是等价于<code>HEAD~1</code>, 而不是<code>HEAD~0</code><img src="'+a+'" alt="" loading="lazy"></p><h2 id="回退1步并控制方向" tabindex="-1"><a class="header-anchor" href="#回退1步并控制方向" aria-hidden="true">#</a> <code>^</code>回退1步并控制方向</h2><ol><li><p>仓库如图, <code>HEAD</code>指针指向<code>master</code>分支 <img src="'+e+'" alt="" loading="lazy"></p><ul><li><p><code>git checkout head^1</code> <code>^</code>或<code>^1</code>表示在当前的分支(<code>master</code>), 回退一个<code>HEAD</code>位置 <img src="'+i+'" alt="" loading="lazy"></p></li><li><p><code>git checkout head^1</code> <code>^2</code>表示在<code>merge</code>节点, 非当前分支(&#39;test&#39;), 回退一个<code>HEAD</code>位置 <img src="'+s+'" alt="" loading="lazy"></p></li></ul></li></ol><p>注意 <code>^1</code>和<code>^2</code>都只回退了一个<code>HEAD</code>, 只不过是回退的方向不同</p><h2 id="和-一起使用" tabindex="-1"><a class="header-anchor" href="#和-一起使用" aria-hidden="true">#</a> <code>^</code>和<code>~</code>一起使用</h2><ol><li><p>仓库如图, <code>HEAD</code>指针指向<code>master</code>分支 <img src="'+e+'" alt="" loading="lazy"></p></li><li><p>基于<strong>步骤1</strong>, <code>git checkout head^1~1</code> <code>^</code>在本分支(<code>master</code>)前移动1位, <code>~</code>再向前移动1位, 所以是在<code>master</code>分支上, 向前移动2位 <img src="'+l+'" alt="" loading="lazy"></p></li><li><p>基于<strong>步骤1</strong>, <code>git checkout head^2~1</code> <code>^2</code>在非本分支,既非<code>master</code>分支(也就是<code>test</code>分支), <code>~</code>再向前移动1位, 所以是在<code>test</code>分支上, 向前移动2位 <img src="'+r+'" alt="" loading="lazy"></p></li></ol><h2 id="工具" tabindex="-1"><a class="header-anchor" href="#工具" aria-hidden="true">#</a> 工具</h2><p>http://git-school.github.io/visualizing-git/</p>',13),p=[h];function g(m,_){return c(),d("div",null,p)}const A=o(n,[["render",g],["__file","HEAD.html.vue"]]);export{A as default};
