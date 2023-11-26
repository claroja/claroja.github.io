import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as o,a as e,b as c}from"./app-XqA98pG8.js";const s={},_=e("h1",{id:"rec-deepwide",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rec-deepwide","aria-hidden":"true"},"#"),c(" rec_deepWide")],-1),l=e("p",null,"Git使用zlib压缩这些文件(数据对象,树对象,提交对象,标签对象)",-1),n=e("p",null,'虽然只是在一个几万行的文件后面加入一行新内容，Git 也会用一个全新的对象来存储新的文件内容, 如果 Git 只完整保存其中一个，再保存另一个对象与之前版本的差异内容，岂不更好？ 事实上 Git 可以那样做。 Git 最初向磁盘中存储对象时所使用的格式被称为"松散（loose）"对象格式。 但是，Git 会时不时地将多个这些对象打包成一个称为"包文件（packfile）"的二进制文件，以节省空间和提高效率。 当版本库中有太多的松散对象，或者你手动执行 git gc 命令，或者你向远程服务器执行推送时，Git 都会这样做。',-1),d=e("p",null,"执行这条命令后, objects 目录，你会发现大部分的对象都不见了，与此同时出现了一对新文件,",-1),a=e("ul",null,[e("li",null,"仍保留着的几个对象是未被任何提交记录引用的数据对象, 因为你从没将它们添加至任何提交记录中，所以 Git 认为它们是悬空（dangling）的，不会将它们打包进新生成的包文件中。"),e("li",null,"剩下的文件是新创建的包文件和一个索引。 包文件包含了刚才从文件系统中移除的所有对象的内容。 索引文件包含了包文件的偏移信息，我们通过索引文件就可以快速定位任意一个指定对象。")],-1),r=e("p",null,"Git 打包对象时，会查找命名及大小相近的文件，并只保存文件不同版本之间的差异内容。 你可以查看包文件，观察它是如何节省空间的。 git verify-pack 这个底层命令可以让你查看已打包的内容：",-1),h=e("p",null,"参考: https://git-scm.com/book/zh/v2/Git-%E5%86%85%E9%83%A8%E5%8E%9F%E7%90%86-%E5%8C%85%E6%96%87%E4%BB%B6",-1),p=[_,l,n,d,a,r,h];function u(G,f){return i(),o("div",null,p)}const g=t(s,[["render",u],["__file","Git原理-打包.html.vue"]]);export{g as default};
