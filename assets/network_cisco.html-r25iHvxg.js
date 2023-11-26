import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as d,e as a}from"./app-XqA98pG8.js";const n={},c=a(`<h1 id="cisco" tabindex="-1"><a class="header-anchor" href="#cisco" aria-hidden="true">#</a> cisco</h1><p>思科 IOS(Internetwork Operating System，互联网络操作系统）是思科路由器和大部分交换机的内核，提供路由选择、交换、网络互联和远程通信功能。</p><h2 id="cli" tabindex="-1"><a class="header-anchor" href="#cli" aria-hidden="true">#</a> CLI</h2><p>IOS中有四种模式:</p><ul><li>用户模式</li><li>特权模式</li><li>全局配置模式</li><li>接口配置模式</li></ul><p>每个模式之间是递进关系,使用<code>en</code>, <code>conf t</code>, <code>int fa0/0</code>等命令可以依次进入下一级模式, 使用<code>exit</code>可回退到上一级模式</p><p>不同模式可以执行不同的命令.</p><h3 id="用户模式" tabindex="-1"><a class="header-anchor" href="#用户模式" aria-hidden="true">#</a> 用户模式</h3><p>接口状态消息出现后，按回车键将进入用户 EXEC 模式(用户模式)，提示符为 <code>Router&gt;</code>。用户模式主要用于查看统计信息，该模式能使用的功能很少.</p><h3 id="特权模式" tabindex="-1"><a class="header-anchor" href="#特权模式" aria-hidden="true">#</a> 特权模式</h3><p>特权模式下才能查看并修改 Cisco 路由器的配置。要进入特权模式需要执行命令 <code>enable</code>(简写为<code>en</code>), 提示符变为<code>Router#</code>表明当前处于特权模式，特权模式下可查看并修改路由器的配置。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Router<span class="token operator">&gt;</span>enable
Router<span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局配置模式" tabindex="-1"><a class="header-anchor" href="#全局配置模式" aria-hidden="true">#</a> 全局配置模式</h3><p>CLI 中想要对路由器做全局修改，可输入<code>configure terminal</code>(或其简写<code>conf t</code>)进入全局配置模式，提示符变为<code>Router(config)#</code>表明当前在全局配置模式, 在全局模式下执行的命令将影响整台路由器。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Router<span class="token comment">#conf t</span>
Enter configuration commands, one per line.  End with CNTL/Z.
Router<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>机器类型</th><th>命令</th><th>描述</th></tr></thead><tbody><tr><td>switch</td><td>show mac-address-table</td><td>查看MAC地址</td></tr><tr><td>switch</td><td>erase startup-config</td><td>恢复出厂设置, 清除缓存信息</td></tr></tbody></table><h3 id="接口配置模式" tabindex="-1"><a class="header-anchor" href="#接口配置模式" aria-hidden="true">#</a> 接口配置模式</h3><p>在全局配置模式下使用“interface 接口名”来进入，interface 可以缩写为 “int”, 比如进入<code>FastEthernet0/0</code>接口可以简写成<code>int fa0/0</code>, 提示符变为<code>Router(config-if)#</code>表示操作网卡.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Router<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#int fa0/0</span>
Router<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>switch</p><table><thead><tr><th>命令</th><th>描述</th></tr></thead><tbody><tr><td>show mac-address-table</td><td>查看MAC地址</td></tr><tr><td>erase startup-config</td><td>恢复出厂设置, 清除缓存信息</td></tr></tbody></table><p>router</p><table><thead><tr><th>命令</th><th>描述</th></tr></thead><tbody><tr><td><code>hostname xxx</code></td><td>设置主机名, 命令行变化, 方便查看</td></tr><tr><td><code>interface fastEthernet 0/1</code> or <code>int fa0/1</code></td><td>进入接口配置模式, 0代表插槽, 1代表端口</td></tr><tr><td><code>no shutdown</code></td><td>激活端口</td></tr><tr><td><code>shutdown</code></td><td>关闭端口</td></tr><tr><td><code>ip address 192.168.216.124 255.255.255.0</code> or <code>ip add IP Mask</code></td><td>给接口配置ip地址</td></tr><tr><td><code>erase startup-config</code></td><td>删除配置和缓存</td></tr><tr><td><code>reload</code></td><td>重启路由器</td></tr><tr><td><code>ping ip</code></td><td>一半</td></tr><tr><td><code>telnet  ip、域名或者端口</code></td><td>远程管理，或者探测端口</td></tr><tr><td><code>show interface f0/0</code></td><td>查看接口参数和配置</td></tr><tr><td><code>show ip interface brief</code></td><td>所有接口的IP地址和状态</td></tr><tr><td><code>show protocols</code></td><td>查看所有接口上的协议</td></tr></tbody></table><h2 id="主机命令" tabindex="-1"><a class="header-anchor" href="#主机命令" aria-hidden="true">#</a> 主机命令</h2><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>arp -a # 查看arp缓存
arp -d # 删除arp缓存
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://www.cnblogs.com/linfangnan/p/15043970.html https://blog.csdn.net/istrangeboy/article/details/91354641</p>`,26),o=[c];function s(r,i){return t(),d("div",null,o)}const p=e(n,[["render",s],["__file","network_cisco.html.vue"]]);export{p as default};
