import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as o,e as n}from"./app-M6UUlHgF.js";const s={},c=n(`<h1 id="loopback" tabindex="-1"><a class="header-anchor" href="#loopback" aria-hidden="true">#</a> loopback</h1><p>Loopback接口是虚拟接口, 将Loopback接口和其他物理接口相比较，可以发现Loopback接口有以下几条优点：</p><ol><li>Loopback接口状态永远是up的，即使没有配置地址。这是它的一个非常重要的特性。</li><li>Loopback接口可以配置地址，而且可以配置全1的掩码,可以节省宝贵的地址空间。</li><li>Loopback接口不能封装任何链路层协议。</li></ol><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><h3 id="用来作为router-id" tabindex="-1"><a class="header-anchor" href="#用来作为router-id" aria-hidden="true">#</a> 用来作为Router-ID</h3><p>因为环回接口的稳定性，我们常使用一个环回接口地址来作为Router-ID，使整个设备的标识稳定可靠。 使用环回接口作为Router-ID还有一个好处就是可以节省地址，因为环回接口的地址一般和业务地址没有关系，是独立规划的。</p><h3 id="用于网络连通性测试" tabindex="-1"><a class="header-anchor" href="#用于网络连通性测试" aria-hidden="true">#</a> 用于网络连通性测试</h3><p>创建并配置好环回接口之后，它的地址是能被ping或telnet的，这就可以被用来测试网络的连通性。 环回接口一般都是设备为32位的掩码,32位掩码代表的就这一个IP. 一个路由器可以创建多个环回接口。但不能重复.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>interface LoopBack <span class="token number">0</span>
<span class="token function">ip</span> <span class="token function">add</span> <span class="token number">1.1</span>.1.1 <span class="token number">32</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://www.cnblogs.com/mr-xiong/p/12707028.html</p>`,10),r=[c];function i(t,d){return e(),o("div",null,r)}const h=a(s,[["render",i],["__file","loopback.html.vue"]]);export{h as default};