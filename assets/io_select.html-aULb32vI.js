import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-XqA98pG8.js";const p={},e=t(`<h1 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> select</h1><p>select作用: 1.监听哪些文件描述符(最多监听1024个fd)的哪些事件 (每次调用select,都会会所有的socket进行一次线性扫描) 2.内核监听到数据后,不告诉是哪个连接有数据,用户只能通过轮询的方式来获取数据 (如:监视10个socket,当有1个连接有数据后,内核就通知用户10个socket中有数据了)</p><p>select过程: 1.将fd从用户空间复制到内核空间 2.遍历所有fd,查看对应事件是否发生 3.发生:将唤醒,未发生将阻塞 4.返回遍历后的fd 5.将fd从内核空间赋值到用户空间</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fd_r_list<span class="token punctuation">,</span> fd_w_list<span class="token punctuation">,</span> fd_e_list <span class="token operator">=</span> select<span class="token punctuation">.</span>select<span class="token punctuation">(</span>rlist<span class="token punctuation">,</span> wlist<span class="token punctuation">,</span> xlist<span class="token punctuation">,</span> <span class="token punctuation">[</span>timeout<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>rlist</td><td>满足可读条件,获取发生变化的fd,并添加到fd_r_list</td></tr><tr><td>wlist</td><td></td></tr><tr><td>xlist</td><td>满足发生错误时,将发生错误的fd添加到fd_e_list</td></tr><tr><td>timeout</td><td>为空,select会一直阻塞,直到监听的fd发生变化.如果设置为n,则过n秒,且没有检测到变化,则返回三个空列表</td></tr></tbody></table><p>服务端</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> socket
<span class="token keyword">import</span> select

server1 <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span><span class="token punctuation">)</span>
server1<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;0.0.0.0&#39;</span><span class="token punctuation">,</span> <span class="token number">8001</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
server1<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token punctuation">)</span>

server2 <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span><span class="token punctuation">)</span>
server2<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;0.0.0.0&#39;</span><span class="token punctuation">,</span> <span class="token number">8002</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
server2<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token punctuation">)</span>

inputs <span class="token operator">=</span> <span class="token punctuation">[</span>server1<span class="token punctuation">,</span> server2<span class="token punctuation">,</span> <span class="token punctuation">]</span>

<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    r_list<span class="token punctuation">,</span> w_list<span class="token punctuation">,</span> e_list <span class="token operator">=</span> select<span class="token punctuation">.</span>select<span class="token punctuation">(</span>inputs<span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;r_list:</span><span class="token interpolation"><span class="token punctuation">{</span>r_list<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> ser <span class="token keyword">in</span> r_list<span class="token punctuation">:</span>
        conn<span class="token punctuation">,</span> address <span class="token operator">=</span> ser<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>
        conn<span class="token punctuation">.</span>send<span class="token punctuation">(</span><span class="token string">&#39;您好&#39;</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> socket

client <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span><span class="token punctuation">)</span>
client<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> <span class="token number">8001</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>client<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://www.jb51.net/article/111899.htm https://www.jianshu.com/p/e26594304e11</p>`,10),c=[e];function o(i,l){return s(),a("div",null,c)}const d=n(p,[["render",o],["__file","io_select.html.vue"]]);export{d as default};
