import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,a as e}from"./app-nD1Z-e8V.js";const d={},t=e(`<h1 id="backgroundprocess" tabindex="-1"><a class="header-anchor" href="#backgroundprocess" aria-hidden="true">#</a> backgroundProcess</h1><h2 id="测试样例" tabindex="-1"><a class="header-anchor" href="#测试样例" aria-hidden="true">#</a> 测试样例</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">## 文件名 test.sh</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">seq</span> <span class="token number">1</span> <span class="token number">10</span><span class="token variable">)</span></span>
<span class="token keyword">do</span>
    <span class="token comment">#echo $i</span>
    <span class="token function">sleep</span> <span class="token number">1</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="直接运行" tabindex="-1"><a class="header-anchor" href="#直接运行" aria-hidden="true">#</a> 直接运行</h2><ol><li>会占用命令行界面,程序终止时才能,继续使用命令行界面</li><li>命令行窗口关闭, 程序也会终止</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sh</span> test.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="后台运行" tabindex="-1"><a class="header-anchor" href="#后台运行" aria-hidden="true">#</a> 后台运行</h2><ol><li>加上<code>&amp;</code>符号,后台运行,会返回<code>[1] 27227</code>,<code>[1]</code>是指作业号,每个终端命令行都会给自己的进程分配一个作业号,<code>27227</code>是进程. 此时,我们可以在终端继续执行其他命令.当程序运行完,我们输入<code>enter</code>时,会显示该作业的执行情况.</li><li>命令行窗口关闭, 程序也会终止</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sh</span> test.sh <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>~/code/test$ <span class="token function">sh</span> test.sh <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">27227</span>
~/code/test$  <span class="token comment"># 输入回车后会看到执行结果</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+  Done                    <span class="token function">sh</span> test.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重定向输出" tabindex="-1"><a class="header-anchor" href="#重定向输出" aria-hidden="true">#</a> 重定向输出</h2><p>虽然在后台运行,但是标准输出还会输出到终端</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sh</span> test.sh <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>~/code/test$ <span class="token function">sh</span> test.sh <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">27426</span>
~/code/test$ <span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">4</span>
<span class="token number">5</span>
<span class="token number">6</span>
<span class="token number">7</span>
<span class="token number">8</span>
<span class="token number">9</span>
<span class="token number">10</span>

<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+  Done                    <span class="token function">sh</span> test.sh
~/code/test$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以需要将标准输出和标准错误,重定向到文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sh</span> test.sh <span class="token operator">&gt;</span> log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="脱离控制台nohub" tabindex="-1"><a class="header-anchor" href="#脱离控制台nohub" aria-hidden="true">#</a> 脱离控制台nohub</h2><p><code>nohup</code>阻断发给进程的<code>SIGHUP</code>信号,既在退出终端时阻止其下进程的退出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nohup</span> <span class="token function">sh</span> test.sh <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因为<code>nohup</code>会解除终端与进程的关联,所以进程也就不会和<code>STDOUT</code> <code>STDERR</code>联系起来.而输出内容会默认保存在<code>nohup.out</code>文件里.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>~/code/test$ <span class="token function">nohup</span> <span class="token function">sh</span> test.sh <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">27500</span>
~/code/test$ nohup: ignoring input and appending output to <span class="token string">&#39;nohup.out&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最好手动指定从定向的文件.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>~/code/test$ <span class="token function">nohup</span> <span class="token function">sh</span> test.sh <span class="token operator">&gt;</span>log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="后台执行" tabindex="-1"><a class="header-anchor" href="#后台执行" aria-hidden="true">#</a> 后台执行</h2><p>1.查看作业号 <code>jobs</code> 2.后台执行<code>&amp;</code> 与 <code>bg</code> 2.1 <code>./test.h &amp;</code> 在该终端后台执行 2.2 <code>./test.h</code> 然后<code>Ctrl+Z</code> 接着<code>jobs</code>查看作业号,最后<code>bg 作业号</code> 后台执行 3.脱离终端执行<code>nohup /.test.h</code> 4.恢复前台执行 <code>fg 作业号</code></p><p>总结</p><table><thead><tr><th>形式</th><th>命令</th></tr></thead><tbody><tr><td>后台运行</td><td><code>./test.h &amp;</code></td></tr><tr><td>后台运行,重定向输出</td><td><code>/.test.h 1&gt;/dev/null 2&gt;&amp;1 &amp;</code> &amp;1是引用1的输出,既/dev/null</td></tr><tr><td>后台运行,重定向输出,用户/bash退出继续运行</td><td><code>nohup /.test.h 1&gt;/dev/null 2&gt;&amp;1 &amp;</code></td></tr></tbody></table>`,27),o=[t];function c(i,l){return n(),a("div",null,o)}const u=s(d,[["render",c],["__file","backgroundProcess.html.vue"]]);export{u as default};
