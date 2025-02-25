import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as n,c as r,b as e,d as c,e as d,a as p}from"./app-nD1Z-e8V.js";const t={},a=p('<h1 id="ignore" tabindex="-1"><a class="header-anchor" href="#ignore" aria-hidden="true">#</a> ignore</h1><ul><li><p><code>!</code> 开头的模式标识否定，该文件将会再次被包含. 多用于对<code>*</code>的取反, 比如<code>*.log</code>, <code>!import.log</code></p><blockquote><p>注意, 如果文件的父<code>目录</code>已经被前面的规则排除掉了，那么对这个<code>文件</code>用<code>!</code>规则是不起作用的。所以需要对目录先使用<code>!</code>.<br> /*<br> !.gitignore<br> !/fw/<br> /fw/*<br> !/fw/bin/<br> !/fw/sf/<br> 忽略全部内容，但是不忽略 .gitignore 文件、根目录下的 /fw/bin/ 和 /fw/sf/ 目录；注意要先对bin/的父目录使用!规则，使其不被排除。</p></blockquote></li><li><p><code>/</code></p><ul><li>放在开始, 匹配项目跟目录, 如果省略不写也表示根目录</li><li>放在末尾, 只匹配路径下的内容，但是不匹配该路径或同名文件</li></ul><p><code>fd1/*</code>, 忽略目录 fd1 下的全部内容；注意，不管是根目录下的 /fd1/ 目录，还是某个子目录 /child/fd1/ 目录，都会被忽略；<br><code>/fd1/*</code>, 忽略根目录下的 /fd1/ 目录的全部内容；</p></li><li><p><code>*</code> 通用匹配零个或多个字符, <code>*.log</code>表示忽略所有<code>.log</code>文件, <code>*</code>这里包含了所有路径以及文件名</p></li><li><p><code>**</code> 匹配多级目录，可在开始，中间，结束. 如<code>a/**/z</code>可以匹配 <code>a/z</code>, <code>a/b/z</code>, <code>a/b/c/z</code>等。</p></li><li><p><code>?</code> 通用匹配单个字符</p></li><li><p><code>[]</code> 通用匹配单个字符列表, 如<code>[abc]</code>表示要么匹配一个a，要么匹配一个b，要么匹配一个c</p></li><li><p><code>#</code> 开头的行都会被 Git 忽略。即#开头的文件标识注释</p></li><li><p><code>bin/</code>: 忽略当前路径下的bin文件夹，该文件夹下的所有内容都会被忽略，不忽略bin文件</p></li><li><p><code>/bin</code>: 忽略根目录下的bin文件</p></li><li><p><code>/*.c</code>: 忽略根目录下的<code>cat.c</code>，不忽略根目录外的<code>build/cat.c</code></p></li><li><p><code>debug/*.obj</code>: 忽略根目录下的<code>debug/io.obj</code>，不忽略<code>tools/debug/io.obj</code></p></li><li><p><code>**/foo</code>: 忽略所有路径下的<code>foo</code>路径, <code>/foo</code>, <code>a/foo</code>, <code>a/b/foo</code>等</p></li><li><p><code>a/**/b</code>: 忽略a/b, a/x/b, a/x/y/b等</p></li><li><p><code>!/bin/run.sh</code>: 不忽略<code>bin</code>目录下的<code>run.sh</code>文件</p></li><li><p><code>*.log</code>: 忽略所有<code>.log</code>文件</p></li><li><p><code>config.php</code>: 忽略当前路径的<code>config.php</code>文件</p></li></ul><p>还有一些规则如下： fd1/* 说明：忽略目录 fd1 下的全部内容；注意，不管是根目录下的 /fd1/ 目录，还是某个子目录 /child/fd1/ 目录，都会被忽略；</p><p>/fd1/* 说明：忽略根目录下的 /fd1/ 目录的全部内容；</p><p>/* !.gitignore !/fw/ /fw/* !/fw/bin/ !/fw/sf/ 说明：忽略全部内容，但是不忽略 .gitignore 文件、根目录下的 /fw/bin/ 和 /fw/sf/ 目录；注意要先对bin/的父目录使用!规则，使其不被排除。</p><p>参考:</p>',6),f={href:"https://blog.csdn.net/ThinkWon/article/details/101447866",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.cnblogs.com/kevingrace/p/5690241.html",target:"_blank",rel:"noopener noreferrer"};function s(g,h){const o=l("ExternalLinkIcon");return n(),r("div",null,[a,e("ul",null,[e("li",null,[e("a",f,[c("Git忽略文件.gitignore详解"),d(o)])]),e("li",null,[e("a",b,[c("Git忽略提交规则 - .gitignore配置运维总结"),d(o)])])])])}const w=i(t,[["render",s],["__file","ignore.html.vue"]]);export{w as default};
