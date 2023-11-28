import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as d,e as a}from"./app-yeyEmHfz.js";const r={},s=a(`<h1 id="tmux" tabindex="-1"><a class="header-anchor" href="#tmux" aria-hidden="true">#</a> tmux</h1><h2 id="quickstart" tabindex="-1"><a class="header-anchor" href="#quickstart" aria-hidden="true">#</a> quickstart</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>tmux new <span class="token operator">-</span>s name <span class="token comment"># tmux new-session -s name</span>
tmux rename <span class="token operator">-</span>t old new
tmux ls
tmux at <span class="token operator">-</span>t name
tmux kill<span class="token operator">-</span>session <span class="token operator">-</span>t name
tmux kill<span class="token operator">-</span>window <span class="token operator">-</span>t name


Ctrl<span class="token operator">-</span>b d <span class="token comment"># 后台会话</span>
Ctrl<span class="token operator">-</span>b <span class="token punctuation">[</span> <span class="token comment"># 滚屏查看</span>
Ctrl<span class="token operator">-</span>b c <span class="token comment"># 新建窗口 Ctrl-b &amp; # 关闭窗口</span>
Ctrl<span class="token operator">-</span>b n<span class="token operator">/</span>p <span class="token comment"># 切换窗口</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三个基本概念" tabindex="-1"><a class="header-anchor" href="#三个基本概念" aria-hidden="true">#</a> 三个基本概念</h2><table><thead><tr><th>概念</th><th>描述</th></tr></thead><tbody><tr><td>Session</td><td>会话,相当于开了一个ssh</td></tr><tr><td>Window</td><td>窗口,相当于在这个ssh中开了多个shell,有标签tab的形式</td></tr><tr><td>Panel</td><td>面板,相当于在tab标签中开了多个面板(就是分割了当前的屏幕)</td></tr></tbody></table><p><mark>Window和Panel</mark>本质上是一样的,知识分割shell的方式不同</p><h4 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h4><table><thead><tr><th>位置</th><th>操作</th><th>命令</th></tr></thead><tbody><tr><td>外</td><td>新建会话</td><td>tmux new -s name</td></tr><tr><td>外</td><td>列出会话</td><td>tmux ls</td></tr><tr><td>外</td><td>关闭会话</td><td>tmux kill-session -t session-name|mux kill-server（关闭所有）</td></tr><tr><td>外</td><td>进入会话</td><td>tmux attach -t name</td></tr><tr><td>内</td><td>关闭会话</td><td>exit</td></tr><tr><td>内</td><td>跳转</td><td>tmux switch -t name</td></tr><tr><td>内</td><td>后台会话</td><td>tmux detach（快捷键d）</td></tr></tbody></table><p><mark>外和内</mark>是指在seesion外还是在session内</p><h2 id="快捷键" tabindex="-1"><a class="header-anchor" href="#快捷键" aria-hidden="true">#</a> 快捷键</h2><p>快捷键的开始首先需要在session中按<code>ctrl+b</code>,然后再按相应的快捷键. 例如:<code>tmux detach</code>快捷键是<code>d</code>,那么需要先按<code>ctrl+b</code>,然后再按<code>d</code></p><h3 id="session" tabindex="-1"><a class="header-anchor" href="#session" aria-hidden="true">#</a> Session</h3><table><thead><tr><th>快捷键</th><th>命令</th></tr></thead><tbody><tr><td>s</td><td>列出会话，并选择</td></tr><tr><td>$</td><td>重命名会话</td></tr><tr><td>d</td><td>后台会话</td></tr></tbody></table><h3 id="window" tabindex="-1"><a class="header-anchor" href="#window" aria-hidden="true">#</a> window</h3><table><thead><tr><th>快捷键</th><th>命令</th></tr></thead><tbody><tr><td>w</td><td>列出窗口，并选择</td></tr><tr><td>c</td><td>创建窗口</td></tr><tr><td>,</td><td>重命名窗口</td></tr><tr><td>n</td><td>选择下一个窗口</td></tr><tr><td>p</td><td>选择上一个窗口</td></tr><tr><td>0~9</td><td>选择0~9对应的窗口</td></tr></tbody></table><h3 id="pane" tabindex="-1"><a class="header-anchor" href="#pane" aria-hidden="true">#</a> Pane</h3><table><thead><tr><th>快捷键</th><th>命令</th></tr></thead><tbody><tr><td>%</td><td>竖分</td></tr><tr><td>&quot;</td><td>横分</td></tr><tr><td>q</td><td>显示窗格的编号</td></tr><tr><td>o</td><td>在窗格间切换</td></tr><tr><td>}</td><td>与下一个窗格交换位置</td></tr><tr><td>{</td><td>与上一个窗格交换位置</td></tr><tr><td>!</td><td>在新窗口中显示当前窗格</td></tr><tr><td>x</td><td>关闭当前窗格</td></tr><tr><td>上下左右</td><td>选择相应的Pane</td></tr><tr><td>c-上,c-下,c-左,c-右</td><td>调整Pane的大小</td></tr></tbody></table><h2 id="快捷键-1" tabindex="-1"><a class="header-anchor" href="#快捷键-1" aria-hidden="true">#</a> 快捷键</h2><table><thead><tr><th>快捷键</th><th>描述</th></tr></thead><tbody><tr><td>C-b</td><td>Send the prefix key (C-b) through to the application.</td></tr><tr><td>C-o</td><td>Rotate the panes in the current window forwards.</td></tr><tr><td>C-z</td><td>Suspend the tmux client.</td></tr><tr><td>!</td><td>Break the current pane out of the window.</td></tr><tr><td>&quot;</td><td>Split the current pane into two, top and bottom.</td></tr><tr><td>#</td><td>List all paste buffers.</td></tr><tr><td>$</td><td>Rename the current session.</td></tr><tr><td>%</td><td>Split the current pane into two, left and right.</td></tr><tr><td>&amp;</td><td>Kill the current window.</td></tr><tr><td>&#39;</td><td>Prompt for a window index to select.</td></tr><tr><td>(</td><td>Switch the attached client to the previous session.</td></tr><tr><td>)</td><td>Switch the attached client to the next session.</td></tr><tr><td>,</td><td>Rename the current window.</td></tr><tr><td>-</td><td>Delete the most recently copied buffer of text.</td></tr><tr><td>0</td><td>Prompt for an index to move the current window.</td></tr><tr><td>0 to 9</td><td>Select windows 0 to 9.</td></tr><tr><td>:</td><td>Enter the tmux command prompt.</td></tr><tr><td>;</td><td>Move to the previously active pane.</td></tr><tr><td>=</td><td>Choose which buffer to paste interactively from a list.</td></tr><tr><td>?</td><td>List all key bindings.</td></tr><tr><td>D</td><td>Choose a client to detach.</td></tr><tr><td>L</td><td>Switch the attached client back to the last session.</td></tr><tr><td>[</td><td>Enter copy mode to copy text or view the history.</td></tr><tr><td>]</td><td>Paste the most recently copied buffer of text.</td></tr><tr><td>c</td><td>Create a new window.</td></tr><tr><td>d</td><td>Detach the current client.</td></tr><tr><td>f</td><td>Prompt to search for text in open windows.</td></tr><tr><td>i</td><td>Display some information about the current window.</td></tr><tr><td>l</td><td>Move to the previously selected window.</td></tr><tr><td>n</td><td>Change to the next window.</td></tr><tr><td>o</td><td>Select the next pane in the current window.</td></tr><tr><td>p</td><td>Change to the previous window.</td></tr><tr><td>q</td><td>Briefly display pane indexes.</td></tr><tr><td>r</td><td>Force redraw of the attached client.</td></tr><tr><td>m</td><td>Mark the current pane (see select-pane -m).</td></tr><tr><td>M</td><td>Clear the marked pane.</td></tr><tr><td>s</td><td>Select a new session for the attached client interactively</td></tr><tr><td>t</td><td>Show the time.</td></tr><tr><td>w</td><td>Choose the current window interactively.</td></tr><tr><td>x</td><td>Kill the current pane.</td></tr><tr><td>z</td><td>Toggle zoom state of the current pane.</td></tr><tr><td>{</td><td>Swap the current pane with the previous pane.</td></tr><tr><td>}</td><td>Swap the current pane with the next pane.</td></tr><tr><td>~</td><td>Show previous messages from tmux, if any.</td></tr><tr><td>Page Up</td><td>Enter copy mode and scroll one page up.</td></tr><tr><td>Up,Down,Left,Right</td><td>Change to the pane above, below, to the left, or to the right of the current pane.</td></tr><tr><td>M-1 to M-5</td><td>Arrange panes in one of the five preset layouts: even-horizontal, even-vertical, main-horizontal, main-verti‐cal, or tiled.</td></tr><tr><td>Space</td><td>Arrange the current window in the next preset layout.</td></tr><tr><td>M-n</td><td>Move to the next window with a bell or activity marker.</td></tr><tr><td>M-o</td><td>Rotate the panes in the current window backwards.</td></tr><tr><td>M-p</td><td>Move to the previous window with a bell or activity marker.</td></tr><tr><td>C-Up, C-Down, C-Left, C-Right</td><td>Resize the current pane in steps of one cell.</td></tr><tr><td>M-Up, M-Down, M-Left, M-Right</td><td>Resize the current pane in steps of five cells.</td></tr></tbody></table><h2 id="命令-1" tabindex="-1"><a class="header-anchor" href="#命令-1" aria-hidden="true">#</a> 命令</h2><h2 id="管理客户端和会话" tabindex="-1"><a class="header-anchor" href="#管理客户端和会话" aria-hidden="true">#</a> #管理客户端和会话</h2><p>###attach attach-session [-dEr] [-c working-directory] [-t target-session](alias: attach) 如果在tmux外执行，则会新建一个客户端，并进入;如果在tmux内部，则之间切换相应的会话。-d，使其他使用这个会话的客户端推出。-r，开启只读模式</p><h4 id="detach" tabindex="-1"><a class="header-anchor" href="#detach" aria-hidden="true">#</a> detach</h4><p>detach-client [-P] [-a] [-s target-session] [-t target-client](alias: detach)</p><h4 id="has" tabindex="-1"><a class="header-anchor" href="#has" aria-hidden="true">#</a> has</h4><p>has-session [-t target-session](alias: has) 报告是否存在对话</p><h4 id="kill-server" tabindex="-1"><a class="header-anchor" href="#kill-server" aria-hidden="true">#</a> kill-server</h4><p>杀死所有会话</p><h4 id="kill-session" tabindex="-1"><a class="header-anchor" href="#kill-session" aria-hidden="true">#</a> kill-session</h4><p>kill-session [-a] [-t target-session] 杀死所有会话，-a杀死除了指定的之外的会话</p><h4 id="lsc" tabindex="-1"><a class="header-anchor" href="#lsc" aria-hidden="true">#</a> lsc</h4><p>list-clients [-F format] [-t target-session](alias: lsc) 列出所有的客户端</p><h4 id="lscm" tabindex="-1"><a class="header-anchor" href="#lscm" aria-hidden="true">#</a> lscm</h4><p>list-commands(alias: lscm) 列出所有的命令</p><h4 id="ls" tabindex="-1"><a class="header-anchor" href="#ls" aria-hidden="true">#</a> ls</h4><p>list-sessions [-F format](alias: ls) 列出所有的会话</p><h4 id="lockc" tabindex="-1"><a class="header-anchor" href="#lockc" aria-hidden="true">#</a> lockc</h4><p>lock-client [-t target-client](alias: lockc) 锁定客户端</p><h4 id="locks" tabindex="-1"><a class="header-anchor" href="#locks" aria-hidden="true">#</a> locks</h4><p>lock-session [-t target-session] 锁定所有会话的客户端(alias: locks)</p><h4 id="new" tabindex="-1"><a class="header-anchor" href="#new" aria-hidden="true">#</a> new</h4><p>new-session [-AdDEP] [-c start-directory] [-F format] [-n window-name][-s session-name] [-t target-session] [-x width] [-y height][shell-command](alias: new) 创建一个新的会话</p><h4 id="refresh" tabindex="-1"><a class="header-anchor" href="#refresh" aria-hidden="true">#</a> refresh</h4><p>refresh-client [-S] [-t target-client](alias: refresh) 刷新客户端信息</p><h4 id="rename" tabindex="-1"><a class="header-anchor" href="#rename" aria-hidden="true">#</a> rename</h4><p>rename-session [-t target-session] new-name(alias: rename) 重新命名会话</p><h4 id="showmsgs" tabindex="-1"><a class="header-anchor" href="#showmsgs" aria-hidden="true">#</a> showmsgs</h4><p>show-messages [-IJT] [-t target-client](alias: showmsgs)</p><h4 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> source</h4><p>source-file path(alias: source) 从路径上执行命令</p><h4 id="start" tabindex="-1"><a class="header-anchor" href="#start" aria-hidden="true">#</a> start</h4><p>start-server(alias: start) 开启tmux服务，不会建立会话</p><h4 id="suspendc" tabindex="-1"><a class="header-anchor" href="#suspendc" aria-hidden="true">#</a> suspendc</h4><p>suspend-client [-t target-client](alias: suspendc) 挂起客户端</p><h4 id="switchc" tabindex="-1"><a class="header-anchor" href="#switchc" aria-hidden="true">#</a> switchc</h4><p>switch-client [-Elnpr] [-c target-client] [-t target-session] [-Tkey-table](alias: switchc) 切换客户端</p><h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h3><p>其他命令建议用快捷键</p><p>http://blog.jobbole.com/87584/</p><p>http://blog.jobbole.com/87278/</p><p>http://www.linuxidc.com/Linux/2015-07/119843.htm 比较详细 http://blog.csdn.net/u011138533/article/details/53109247</p><p>http://blog.csdn.net/u014015972/article/details/51611817 官方网站 https://robots.thoughtbot.com/a-tmux-crash-course</p>`,62),n=[s];function i(h,o){return e(),d("div",null,n)}const p=t(r,[["render",i],["__file","tmux.html.vue"]]);export{p as default};
