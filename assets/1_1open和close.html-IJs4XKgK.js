import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-nD1Z-e8V.js";const t={},o=e(`<h1 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h1><p><code>printl()</code>函数底层调用的是<code>write()</code>函数 文件描述符</p><p>Linux中会将所有的设备都当做文件来处理,每个文件对应一个文件描述符(file descriptor).所有的I/O操作都会调用文件描述符. 比如文件描述符0对应的是标准输入,就是我们的键盘. 文件描述符1对应的是标准输出,就是我们的console. 可以使用<code>exec</code>命令来改变文件描述符对应的文件(设备) <code>exec 1 &gt; test</code></p><p>查看系统级别最大打开文件数<code>sysctl -a | grep fs.file-max</code> 197185 查看用户级别最大打开文件数<code>ulimit -n</code> 1024 也就是说系统为了不让某个进程占用全部文件描述符,设置了用户级别限制,所以可以通过更改用户级别限制来优化服务器</p><p>临时修改文件描述符上限:<code>ulimit -SHn 65535</code> 永久修改可以配置<code>/etc/security/limits.conf</code>文件</p><p>系统为每一个进程维护了一个文件描述符表,表默认是<code>0~1023</code> 如果新打开一个文件描述符(包含socket),是从最小的文件描述符开始占用 文件描述符总共有1024个(0stdin,1stdout,2stderr),可以关掉(0,1,2)文件描述符</p><h2 id="open" tabindex="-1"><a class="header-anchor" href="#open" aria-hidden="true">#</a> open</h2><ol><li>open来自fcntl.h,系统级;fopen()来自stdlib.h,用户级</li><li>示例</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span>   <span class="token function">open</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>path<span class="token punctuation">,</span> <span class="token keyword">int</span> oflag<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token comment">/*mode_t mode*/</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> fd <span class="token operator">=</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;path/to/file&quot;</span><span class="token punctuation">,</span> O_RDONLY<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> fd <span class="token operator">=</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;test.txt&quot;</span><span class="token punctuation">,</span> O_WRONLY <span class="token operator">|</span> O_TRUNC <span class="token operator">|</span> O_CREAT<span class="token punctuation">,</span> <span class="token number">0664</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>pathname</td><td></td></tr><tr><td>flags</td><td>必选项O_RDONLY-O_WRONLY-O_RDWR&amp;可选项O_APPEND-O_CREAT-O_EXCL-O_NONBLOCK</td></tr><tr><td>mode</td><td>权限位(mode &amp; ~umask)</td></tr></tbody></table><p>返回值: 最小可用的文件描述符,失败返回-1,设置errnum</p><ol start="3"><li><p>oflag flag|描述 --|-- O_RDONLY |open for reading only O_WRONLY |open for writing only O_RDWR| open for reading and writing O_APPEND |append on each write O_CREAT |create file if it does not exist O_TRUNC |truncate size to 0</p></li><li><p>mode mode|描述 --|-- S_IRUSR 00400 |owner has read permission S_IWUSR 00200| owner has write permission S_IXUSR 00100 |owner has execute permission S_IRGRP 00040 |group has read permission S_IWGRP 00020 |group has write permission S_IXGRP 00010 |group has execute permission S_IROTH 00004 |others have read permission S_IWOTH 00002| others have write permission S_IXOTH 00001| others have execute permission</p></li></ol><h1 id="create" tabindex="-1"><a class="header-anchor" href="#create" aria-hidden="true">#</a> create</h1><ol><li><code>int creat (const char *filename, mode_t mode)</code></li><li>create 等价于<code>open (filename, O_WRONLY | O_CREAT | O_TRUNC, mode)</code></li></ol><h1 id="close" tabindex="-1"><a class="header-anchor" href="#close" aria-hidden="true">#</a> close</h1><ol><li><code>int close (int filedes)</code> 成功返回0,失败返回-1,设置errnum</li></ol><h1 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h1><ol><li>stdin,stdout,stderr的文件描述符分别是0,1,2</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression"><span class="token function">warning</span><span class="token punctuation">(</span>disable<span class="token operator">:</span><span class="token number">4996</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;fcntl.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> fd <span class="token operator">=</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;test.txt&quot;</span><span class="token punctuation">,</span> O_WRONLY<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> fd<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//一般为3,其余的被stdin,stdout和stderr占用</span>
	<span class="token function">close</span><span class="token punctuation">(</span>fd<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://blog.csdn.net/claroja/article/details/103580327 http://www.gnu.org/software/libc/manual/html_node/Opening-and-Closing-Files.html#Opening-and-Closing-Files http://www.gnu.org/software/libc/manual/</p>`,20),p=[o];function c(i,l){return s(),a("div",null,p)}const u=n(t,[["render",c],["__file","1_1open和close.html.vue"]]);export{u as default};
