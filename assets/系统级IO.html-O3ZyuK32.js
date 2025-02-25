import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-nD1Z-e8V.js";const e="/assets/1-1MYGEj6i.png",o="/assets/2-Q5ORBY_s.png",p="/assets/3-NMjsfxpE.png",i="/assets/4-Hl63tgaO.png",c={},l=t(`<h1 id="系统级io" tabindex="-1"><a class="header-anchor" href="#系统级io" aria-hidden="true">#</a> 系统级IO</h1><h2 id="基础概念" tabindex="-1"><a class="header-anchor" href="#基础概念" aria-hidden="true">#</a> 基础概念</h2><ol><li>系统级IO是相较于用户级IO的概念, 系统级IO更底层.</li><li>Linux中会将所有的设备都当做文件来处理,每个文件对应一个文件描述符(file descriptor).所有的I/O操作都会调用文件描述符.比如 <ol><li>文件描述符0对应的是标准输入,就是我们的键盘.</li><li>文件描述符1对应的是标准输出,就是我们的console.</li></ol></li><li>系统为每一个进程维护了一个文件描述符表,表默认是0~1023. 如果新打开一个文件描述符(包含socket),是从最小的文件描述符开始占用. 文件描述符总共有1024个(0stdin,1stdout,2stderr),可以关掉(0,1,2)文件描述符</li></ol><h2 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> c</h2><h3 id="打开和关闭文件描述符" tabindex="-1"><a class="header-anchor" href="#打开和关闭文件描述符" aria-hidden="true">#</a> 打开和关闭文件描述符</h3><h4 id="open" tabindex="-1"><a class="header-anchor" href="#open" aria-hidden="true">#</a> open</h4><p>打开文件, 返回文件的描述符. <code>open()</code>来自<code>fcntl.h</code>,系统级;<code>fopen()</code>来自<code>stdlib.h</code>,用户级.<code>fopen()</code>最终会调用<code>open()</code>.</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>path<span class="token punctuation">,</span> <span class="token keyword">int</span> oflag<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token comment">/*mode_t mode*/</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> fd <span class="token operator">=</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;path/to/file&quot;</span><span class="token punctuation">,</span> O_RDONLY<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> fd <span class="token operator">=</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;test.txt&quot;</span><span class="token punctuation">,</span> O_WRONLY <span class="token operator">|</span> O_TRUNC <span class="token operator">|</span> O_CREAT<span class="token punctuation">,</span> <span class="token number">0664</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>参数 参数|描述 --|-- pathname| flags|必选项O_RDONLY,O_WRONLY,O_RDWR&amp;可选项O_APPEND-O_CREAT-O_EXCL-O_NONBLOCK mode|权限位(mode &amp; ~umask)</li></ol><p><code>oflag</code>参数详解:</p><table><thead><tr><th>flag</th><th>描述</th></tr></thead><tbody><tr><td>O_RDONLY</td><td>open for reading only</td></tr><tr><td>O_WRONLY</td><td>open for writing only</td></tr><tr><td>O_RDWR</td><td>open for reading and writing</td></tr><tr><td>O_APPEND</td><td>append on each write</td></tr><tr><td>O_CREAT</td><td>create file if it does not exist</td></tr><tr><td>O_TRUNC</td><td>truncate size to 0</td></tr></tbody></table><p><code>mode</code>参数详解:</p><table><thead><tr><th>mode</th><th>描述</th></tr></thead><tbody><tr><td>S_IRUSR 00400</td><td>owner has read permission</td></tr><tr><td>S_IWUSR 00200</td><td>owner has write permission</td></tr><tr><td>S_IXUSR 00100</td><td>owner has execute permission</td></tr><tr><td>S_IRGRP 00040</td><td>group has read permission</td></tr><tr><td>S_IWGRP 00020</td><td>group has write permission</td></tr><tr><td>S_IXGRP 00010</td><td>group has execute permission</td></tr><tr><td>S_IROTH 00004</td><td>others have read permission</td></tr><tr><td>S_IWOTH 00002</td><td>others have write permission</td></tr><tr><td>S_IXOTH 00001</td><td>others have execute permission</td></tr></tbody></table><ol start="2"><li>返回值: 最小可用的文件描述符,失败返回-1,设置errnum</li></ol><h4 id="close" tabindex="-1"><a class="header-anchor" href="#close" aria-hidden="true">#</a> close</h4><p>关闭文件描述符, 成功返回0,失败返回-1,可以设置errnum. stdin,stdout,stderr的文件描述符分别是0,1,2.</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">close</span> <span class="token punctuation">(</span><span class="token keyword">int</span> filedes<span class="token punctuation">)</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression"><span class="token function">warning</span><span class="token punctuation">(</span>disable<span class="token operator">:</span><span class="token number">4996</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;fcntl.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> fd <span class="token operator">=</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;test.txt&quot;</span><span class="token punctuation">,</span> O_WRONLY<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> fd<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//一般为3,其余的被stdin,stdout和stderr占用</span>
	<span class="token function">close</span><span class="token punctuation">(</span>fd<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="create" tabindex="-1"><a class="header-anchor" href="#create" aria-hidden="true">#</a> create</h4><ol><li><code>int creat (const char *filename, mode_t mode)</code></li><li><code>create()</code> 等价于<code>open (filename, O_WRONLY | O_CREAT | O_TRUNC, mode)</code></li></ol><h3 id="操作文件内容" tabindex="-1"><a class="header-anchor" href="#操作文件内容" aria-hidden="true">#</a> 操作文件内容</h3><h4 id="read" tabindex="-1"><a class="header-anchor" href="#read" aria-hidden="true">#</a> read</h4><p><code>ssize_t read(int fd,void*buf,size_t count)</code></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>fd</td><td>默认为一般为3,0,1,2是stdin,stdout,stderr</td></tr><tr><td>buf</td><td>要读入的数据</td></tr><tr><td>count</td><td>读入的字节数,读后位置后移</td></tr></tbody></table><h4 id="write" tabindex="-1"><a class="header-anchor" href="#write" aria-hidden="true">#</a> write</h4><p><code>ssize_t write(int fd,const void*buf,size_t count);</code></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>fd</td><td>默认为一般为3,0,1,2是stdin,stdout,stderr</td></tr><tr><td>buf</td><td>要写出的数据</td></tr><tr><td>count</td><td>是每次写出的字节数</td></tr><tr><td>3.返回</td><td></td></tr><tr><td>成功:返回写出的字节数</td><td></td></tr><tr><td>失败:返回-1</td><td></td></tr></tbody></table><h3 id="dup" tabindex="-1"><a class="header-anchor" href="#dup" aria-hidden="true">#</a> dup</h3><p>重定向文件描述符</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">_UNISTD_H</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">_UNISTD_H</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;io.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;process.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> <span class="token comment">/* _UNISTD_H */</span></span>
<span class="token comment">//#include &lt;unistd.h&gt;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;fcntl.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> fd<span class="token punctuation">;</span>
	fd <span class="token operator">=</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;./test.txt&quot;</span><span class="token punctuation">,</span> O_WRONLY <span class="token operator">|</span> O_TRUNC <span class="token operator">|</span> O_CREAT<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">close</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//关闭文件描述符1,既stdout</span>
	<span class="token function">dup2</span><span class="token punctuation">(</span>fd<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//将文件描述符1,对应的位置输出指向换成fd对应的位置输出指向</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//把请按任意键继续都打印进去了</span>
	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>初始化进程,默认0,1,2,对应stdin,stdout,stderr,都输出到屏幕 <img src="`+e+'" alt="" loading="lazy"></li><li><code>fd=open(...)</code>,新打开一个文件描述符,指向文件 <img src="'+o+'" alt="" loading="lazy"></li><li><code>close(1)</code>,将文件描述符1对应的指向删除,此时对1做任何操作都无效 <img src="'+p+'" alt="" loading="lazy"></li><li><code>dup2(fd, 1);</code>,将fd的指向复制给1,所以此时对1的输出都写入到文件里 <img src="'+i+`" alt="" loading="lazy"></li><li><code>printf</code>默认的输出文件描述符是1,所以输出任何东西都会定向到文件里</li></ol><h3 id="fseek" tabindex="-1"><a class="header-anchor" href="#fseek" aria-hidden="true">#</a> fseek</h3><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>fgetpos</td><td>Get current position in stream (function )</td></tr><tr><td>fsetpos</td><td>Set position indicator of stream (function )</td></tr><tr><td>ftell</td><td>Get current position in stream (function )</td></tr><tr><td>fseek</td><td>Reposition stream position indicator (function )</td></tr><tr><td>rewind</td><td>Set position of stream to the beginning (function )</td></tr></tbody></table><p>ftell() 和 fseek() 用长整型表示文件内的偏移 (位置) fgetpos() 和 fsetpos() 函数使用 了一个特殊的类型定义 fpos_t 来表示偏移量</p><h2 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> python</h2><p>读写文件是最常见的IO操作。Python内置了读写文件的函数，用法和C是兼容的。</p><h3 id="打开和关闭文件描述符-1" tabindex="-1"><a class="header-anchor" href="#打开和关闭文件描述符-1" aria-hidden="true">#</a> 打开和关闭文件描述符</h3><h4 id="os-open" tabindex="-1"><a class="header-anchor" href="#os-open" aria-hidden="true">#</a> os.open()</h4><p><code>os.open(file, flags[, mode])</code></p><p>参数:</p><ul><li>filename - 要打开的文件名。</li><li>mode - 这个工作方式与chmod()方法相似。</li><li>flags - 以下常量是标志的选项。它们可以使用按位OR运算符组合。有一些在所有平台上都不可用。 <ul><li>os.O_RDONLY - 仅供读取使用</li><li>os.O_WRONLY - 仅供写入</li><li>os.O_RDWR - 开放阅读和写作</li><li>os.O_NONBLOCK - 不要阻止打开</li><li>os.O_APPEND - 附加在每次写入</li><li>os.O_CREAT - 如果不存在，则创建文件</li><li>os.O_TRUNC - 将大小截短为0</li><li>os.O_EXCL - 如果创建和文件存在错误</li><li>os.O_SHLOCK - 原子地获取一个共享锁</li><li>os.O_EXLOCK - 原子地获取排他锁</li><li>os.O_DIRECT - 消除或减少缓存效果</li><li>os.O_FSYNC - 同步写入</li><li>os.O_NOFOLLOW - 不要遵循符号链接</li></ul></li></ul><p>返回值: 此方法返回新打开的文件的文件描述符。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os<span class="token punctuation">,</span> sys
<span class="token comment">## Open a file</span>
fd <span class="token operator">=</span> os<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span> <span class="token string">&quot;foo.txt&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>O_RDWR<span class="token operator">|</span>os<span class="token punctuation">.</span>O_CREAT <span class="token punctuation">)</span>
<span class="token comment">## Write one string</span>
line <span class="token operator">=</span> <span class="token string">&quot;this is test&quot;</span> 
<span class="token comment">## string needs to be converted byte object</span>
b <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span>line<span class="token punctuation">)</span>
os<span class="token punctuation">.</span>write<span class="token punctuation">(</span>fd<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
<span class="token comment">## Close opened file</span>
os<span class="token punctuation">.</span>close<span class="token punctuation">(</span> fd<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="操作文件内容-1" tabindex="-1"><a class="header-anchor" href="#操作文件内容-1" aria-hidden="true">#</a> 操作文件内容</h3><h4 id="os-read" tabindex="-1"><a class="header-anchor" href="#os-read" aria-hidden="true">#</a> os.read()</h4><p><code>os.read(fd,n)</code> 参数</p><ul><li>fd - 这是文件的文件描述符。n - 这些是文件描述符fd的n个字节</li><li>n - 这些是文件描述符fd的n个字节。 返回值 此方法返回一个包含读取字节的字符串。</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os<span class="token punctuation">,</span> sys

<span class="token comment">## Open a file</span>
fd <span class="token operator">=</span> os<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;foo.txt&quot;</span><span class="token punctuation">,</span>os<span class="token punctuation">.</span>O_RDWR<span class="token punctuation">)</span>

<span class="token comment">## Reading text</span>
ret <span class="token operator">=</span> os<span class="token punctuation">.</span>read<span class="token punctuation">(</span>fd<span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>ret<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## Close opened file</span>
os<span class="token punctuation">.</span>close<span class="token punctuation">(</span>fd<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="os-write" tabindex="-1"><a class="header-anchor" href="#os-write" aria-hidden="true">#</a> os.write()</h4><p><code>os.write(fd, str)</code></p><p>参数</p><ul><li>fd - 这是文件描述符。</li><li>str - 这是要写的字符串。 返回值 此方法返回实际写入的字节数。</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os<span class="token punctuation">,</span> sys

<span class="token comment">## Open a file</span>
fd <span class="token operator">=</span> os<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span> <span class="token string">&quot;f1.txt&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>O_RDWR<span class="token operator">|</span>os<span class="token punctuation">.</span>O_CREAT <span class="token punctuation">)</span>

<span class="token comment">## Write one string</span>
line <span class="token operator">=</span> <span class="token string">&quot;this is test&quot;</span> 

<span class="token comment">## string needs to be converted byte object</span>
b <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span>line<span class="token punctuation">)</span>
ret <span class="token operator">=</span> os<span class="token punctuation">.</span>write<span class="token punctuation">(</span>fd<span class="token punctuation">,</span> b<span class="token punctuation">)</span>

<span class="token comment">## ret consists of number of bytes written to f1.txt</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&quot;the number of bytes written: &quot;</span><span class="token punctuation">,</span> ret<span class="token punctuation">)</span>

<span class="token comment">## Close opened file</span>
os<span class="token punctuation">.</span>close<span class="token punctuation">(</span> fd<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="lseek" tabindex="-1"><a class="header-anchor" href="#lseek" aria-hidden="true">#</a> lseek</h4><p><code>os.lseek(fd, pos, how)</code></p><p>参数</p><p>fd - 这是文件描述符，需要处理。 pos - 这是相对于给定参数文件的位置。os.SEEK_SET或0设置相对于文件开头的位置，os.SEEK_CUR或1用来设置它相对于当前位置; os.SEEK_END或2用来设置它相对于文件的结尾。 how - 这是文件中的参考点。os.SEEK_SET或0表示文件的开头，os.SEEK_CUR或1表示当前位置，os.SEEK_END或2表示文件的结尾。</p><p>定义的pos常数</p><ul><li>os.SEEK_SET = 0</li><li>os.SEEK_CUR = 1</li><li>os.SEEK_END = 2 返回值 此方法不返回任何值。</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os<span class="token punctuation">,</span> sys

<span class="token comment">## Open a file</span>
fd <span class="token operator">=</span> os<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span> <span class="token string">&quot;foo.txt&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>O_RDWR<span class="token operator">|</span>os<span class="token punctuation">.</span>O_CREAT <span class="token punctuation">)</span>

<span class="token comment">## Write one string</span>
line <span class="token operator">=</span> <span class="token string">&quot;This is test&quot;</span>
b <span class="token operator">=</span> line<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span>
os<span class="token punctuation">.</span>write<span class="token punctuation">(</span>fd<span class="token punctuation">,</span> b<span class="token punctuation">)</span>

<span class="token comment">## Now you can use fsync() method.</span>
<span class="token comment">## Infact here you would not be able to see its effect.</span>
os<span class="token punctuation">.</span>fsync<span class="token punctuation">(</span>fd<span class="token punctuation">)</span>

<span class="token comment">## Now read this file from the beginning</span>
os<span class="token punctuation">.</span>lseek<span class="token punctuation">(</span>fd<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
line <span class="token operator">=</span> os<span class="token punctuation">.</span>read<span class="token punctuation">(</span>fd<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&quot;Read String is : &quot;</span><span class="token punctuation">,</span> line<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## Close opened file</span>
os<span class="token punctuation">.</span>close<span class="token punctuation">(</span> fd <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dup-1" tabindex="-1"><a class="header-anchor" href="#dup-1" aria-hidden="true">#</a> dup</h3><p><code>os.dup2(fd, fd2)</code></p><p>参数 fd − 这是用于重复的文件描述符。fd2 − 这是重复的文件描述符。 返回值 此方法返回文件描述符的副本。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
fd <span class="token operator">=</span> os<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span> <span class="token string">&quot;foo.txt&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>O_RDWR<span class="token operator">|</span>os<span class="token punctuation">.</span>O_CREAT <span class="token punctuation">)</span>
os<span class="token punctuation">.</span>write<span class="token punctuation">(</span>fd<span class="token punctuation">,</span> <span class="token string">b&quot;This is test&quot;</span><span class="token punctuation">)</span>
fd2 <span class="token operator">=</span> <span class="token number">1000</span>
os<span class="token punctuation">.</span>dup2<span class="token punctuation">(</span>fd<span class="token punctuation">,</span> fd2<span class="token punctuation">)</span>  <span class="token comment"># 关闭fd2的文件描述符指向的文件,并将fd2文件描述符指向fd文件描述符指向的文件</span>
os<span class="token punctuation">.</span>lseek<span class="token punctuation">(</span>fd2<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token builtin">str</span> <span class="token operator">=</span> os<span class="token punctuation">.</span>read<span class="token punctuation">(</span>fd2<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
os<span class="token punctuation">.</span>close<span class="token punctuation">(</span>fd2<span class="token punctuation">)</span>

<span class="token keyword">import</span> os
fd <span class="token operator">=</span> os<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span> <span class="token string">&quot;foo.txt&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>O_RDWR<span class="token operator">|</span>os<span class="token punctuation">.</span>O_CREAT <span class="token punctuation">)</span>
os<span class="token punctuation">.</span>dup2<span class="token punctuation">(</span>fd<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shell" tabindex="-1"><a class="header-anchor" href="#shell" aria-hidden="true">#</a> shell</h2><h3 id="文件描述符的数量设置" tabindex="-1"><a class="header-anchor" href="#文件描述符的数量设置" aria-hidden="true">#</a> 文件描述符的数量设置</h3><p>查看系统级别最大打开文件数<code>sysctl -a | grep fs.file-max</code> 197185 查看用户级别最大打开文件数<code>ulimit -n</code> 1024 也就是说系统为了不让某个进程占用全部文件描述符,设置了用户级别限制,所以可以通过更改用户级别限制来优化服务器 临时修改文件描述符上限:ulimit -SHn 65535 永久修改可以配置/etc/security/limits.conf文件</p><p><code>shell</code>中可以使用exec命令来改变文件描述符对应的文件(设备) <code>exec 1 &gt; test</code></p><p>参考: https://blog.csdn.net/claroja/article/details/103580327 http://www.gnu.org/software/libc/manual/html_node/Opening-and-Closing-Files.html#Opening-and-Closing-Files http://www.gnu.org/software/libc/manual/ http://blog.sina.com.cn/s/blog_ade902fe0101l4yd.html http://www.cplusplus.com/reference/cstdio/ http://www.gnu.org/software/libc/manual/html_node/I_002fO-on-Streams.html#I_002fO-on-Streams https://www.yiibai.com/python/os_file_methods.html</p>`,68),d=[l];function u(r,k){return s(),a("div",null,d)}const h=n(c,[["render",u],["__file","系统级IO.html.vue"]]);export{h as default};
