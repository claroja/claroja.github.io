import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as l,c as t,a as o}from"./app-nD1Z-e8V.js";const c={},s=o(`<p>epoll 比select和poll</p><p>select 不能突破1024,因为是通过数组实现的,只能从新编译内核 poll 内部链表,可以突破 epoll 红黑树,可以突破</p><p>1.查看文件描述符上限 <code>/proc/sys/fs/file-max</code> 2.配置上限值 <code>/etc/security/limits.conf</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>*    soft    nofile      8000 
*    hard    nofile      8000 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>临时设置 ulimit -a 2000</p>`,5),i=[s];function n(a,d){return l(),t("div",null,i)}const _=e(c,[["render",n],["__file","4_3epoll.html.vue"]]);export{_ as default};
