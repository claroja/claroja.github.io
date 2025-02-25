import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as d,c as o,b as e,d as n,e as l,w as c,a as s}from"./app-nD1Z-e8V.js";const r="/assets/1-9956te0B.png",p="/assets/2-mbJylFp1.png",u="/assets/3-MlP92LuY.png",m={},h=s('<h1 id="nat" tabindex="-1"><a class="header-anchor" href="#nat" aria-hidden="true">#</a> nat</h1><p>我们家用的所谓的路由器, 不只具有Router的功能, 还具有dhcp, switch 以及nat功能. NAT(Network Address Translation)允许一个私有sub net网段(LAN口)以一个公用IP地址(WAN口)出现在Internet上.</p><h2 id="模拟" tabindex="-1"><a class="header-anchor" href="#模拟" aria-hidden="true">#</a> 模拟</h2><p>配置如下网络: PC2: IP: 192.168.1.2 MASK: 255.255.255.0 Gateway: 192.168.1.1 PC3: IP: 192.168.1.3 MASK: 255.255.255.0 Gateway: 192.168.1.1 Router: FastEthernet0/0: IP: 192.168.1.1 MASK: 255.255.255.0 Serial2/0: IP: 202.96.1.1 MASK: 255.255.255.0 Router-ISP: Serial2/0: IP: 202.96.1.2 MASK: 255.255.255.0</p><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>相关命令: 配置<code>Router1</code>, R1模拟公司出口路由器，配置默认路由指向ISP（运营商），就是无论什么不知道的目的IP，都往默认路由指向的下一条地址扔。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>en
conf t
ip add 202.96.1.1 255.255.255.0
no shut
int fa0/0
ip add 192.168.1.1 255.255.255.0
no shut
ip route 0.0.0.0 0.0.0.0 202.96.1.2  # 配置下一跳
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置<code>Router2</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>en
conf t
<span class="token function">host</span> ISP  <span class="token comment"># 设置别名方便</span>
int s2/0
<span class="token function">ip</span> <span class="token function">add</span> <span class="token number">202.96</span>.1.2 <span class="token number">255.255</span>.255.0
no shut
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模拟ping" tabindex="-1"><a class="header-anchor" href="#模拟ping" aria-hidden="true">#</a> 模拟ping</h3>`,10),v=e("code",null,"PC2",-1),b=e("code",null,"ping 202.96.1.3",-1),_=e("code",null,"Router-ISP",-1),k=e("img",{src:p,alt:"",loading:"lazy"},null,-1),g=e("code",null,"Router-ISP",-1),f=e("code",null,"Router-ISP",-1),P=e("code",null,"192.168.1.0",-1),A=e("img",{src:u,alt:"",loading:"lazy"},null,-1),I=e("code",null,"Router-ISP",-1),x=e("code",null,"192.168.1.0",-1),N=e("code",null,"Router",-1),S=e("code",null,"202.96.1.1",-1),T=e("code",null,"Router",-1),R=s(`<h2 id="nat-1" tabindex="-1"><a class="header-anchor" href="#nat-1" aria-hidden="true">#</a> NAT</h2><h3 id="静态nat" tabindex="-1"><a class="header-anchor" href="#静态nat" aria-hidden="true">#</a> 静态NAT</h3><p>静态NAT，相当于每个私网地址，都要给它转换为一个单独的公网地址。 进入<code>Router</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>conf t
<span class="token function">ip</span> nat inside <span class="token builtin class-name">source</span> static <span class="token number">192.168</span>.1.3 <span class="token number">202.96</span>.1.3
int s2/0
<span class="token function">ip</span> nat outside <span class="token comment"># 设置为出接口</span>
int fa0/0
<span class="token function">ip</span> nat inside  <span class="token comment"># 设置为入接口    </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时<code>PC3</code>就可以<code>ping</code>通<code>Router-ISP</code>了, <code>Router-ISP</code>在回复<code>ping</code>时, 相当于是发给了<code>202.96.1.3</code></p><h3 id="动态路由" tabindex="-1"><a class="header-anchor" href="#动态路由" aria-hidden="true">#</a> 动态路由</h3><p>上面的NAT，非常耗费公网IP地址，因为每个私网地址都要消耗一个公网地址，而公网地址有限，而且需要付费租用，因此，可以动过动态NAT，来建立一个地址池，按需分配。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## NAT为公网IP地址池的名字，然后规定开始到结束的地址。</span>
<span class="token function">ip</span> nat pool NAT <span class="token number">202.96</span>.1.3 <span class="token number">202.96</span>.1.100 netmask <span class="token number">255.255</span>.255.0
<span class="token comment">## 匹配ACL与地址池</span>
<span class="token function">ip</span> nat inside <span class="token builtin class-name">source</span> list <span class="token number">1</span> pool NAT
<span class="token comment">## 将死亡地址划入对应的ACL，实现了私网地址段与公网地址池的匹配</span>
access-list <span class="token number">1</span> permit <span class="token number">192.168</span>.1.0 <span class="token number">0.0</span>.0.255
<span class="token comment">## 设置出口</span>
int s2/0
<span class="token function">ip</span> nat outside
<span class="token comment">## 设置入口</span>
int fa0/0
<span class="token function">ip</span> nat inside     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，如果，公网地址202.96.1.3~202.96.1.100的地址，会被192.168.1.0/24这个私网地址段的终端共用，有访问外网需求的时候，自动会轮询分配着公网IP使用。</p><h3 id="pat" tabindex="-1"><a class="header-anchor" href="#pat" aria-hidden="true">#</a> PAT</h3><p>上述动态NAT方案，对于有一大堆笔记本等办公终端要访问外网的企业，还是太亏了。100个公网地址，轮着使用，也就是相当于同一时间访问外网，只能有100个人在线，肯定无法满足要求。因此，有没有更省IP地址的方案呢，答案是有的，就是PAT。 PAT采用1个公网地址，然后后面自动增加端口号，来匹配到私网IP，实现多人通过同一个公网IP来上网。</p><p>例如PC0可能使用202.96.1.3:20001，而PC1使用202.96.1.3:20002，端口号有65535个，那么1个公网IP就可以给6万多个人同时使用了。</p><p>而且配置命令上，与动态NAT是一致的，只需要增加一个overload单词就可以了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ip</span> nat pool NAT <span class="token number">202.96</span>.1.3 <span class="token number">202.96</span>.1.100 netmask <span class="token number">255.255</span>.255.0 overload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参考: https://zhuanlan.zhihu.com/p/104891736 https://blog.csdn.net/m0_37681914/article/details/72860274 https://www.cnblogs.com/wbxjiayou/p/5150753.html</p>`,15);function w(C,y){const a=t("RouterLink");return d(),o("div",null,[h,e("ol",null,[e("li",null,[n("在"),v,n("中输入"),b,n(", 尝试访问"),_,n(". "),k,g,n("成功接收到了包, 但是无法返回, 因为"),f,n("不在"),P,n("网段中. "),A,n(" 在"),l(a,{to:"/network_router/"},{default:c(()=>[n("network_router")]),_:1}),n("一文中, 我们知道可以配置"),I,n("的转发规则, 比如将所有访问"),x,n("的包全部转发给"),N,n("的"),S,n("网卡. 但是在实际中, ISP供应商不可能为我们配置, 所以只能自己来通过"),T,n("来配置. 所使用的的方式就是NAT")])]),R])}const z=i(m,[["render",w],["__file","nat.html.vue"]]);export{z as default};
