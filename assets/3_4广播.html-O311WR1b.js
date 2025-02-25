import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-nD1Z-e8V.js";const p={},e=t(`<p>广播地址: xxx.xxx.xxx.255 255.255.255.255 网关:(不同局域网信息要通过网关) xxx.xxx.xxx.1</p><h1 id="server" tabindex="-1"><a class="header-anchor" href="#server" aria-hidden="true">#</a> server</h1><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/types.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/stat.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;arpa/inet.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 创建套接字</span>
    <span class="token keyword">int</span> fd <span class="token operator">=</span> <span class="token function">socket</span><span class="token punctuation">(</span>AF_INET<span class="token punctuation">,</span> SOCK_DGRAM<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">sockaddr_in</span> serv<span class="token punctuation">;</span><span class="token comment">//server端配置</span>
    <span class="token function">memset</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>serv<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>serv<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    serv<span class="token punctuation">.</span>sin_family  <span class="token operator">=</span> AF_INET<span class="token punctuation">;</span>
    serv<span class="token punctuation">.</span>sin_port <span class="token operator">=</span> <span class="token function">htons</span><span class="token punctuation">(</span><span class="token number">9999</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// server端口</span>
    serv<span class="token punctuation">.</span>sin_addr<span class="token punctuation">.</span>s_addr <span class="token operator">=</span> <span class="token function">htonl</span><span class="token punctuation">(</span>INADDR_ANY<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> ret <span class="token operator">=</span> <span class="token function">bind</span><span class="token punctuation">(</span>fd<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">sockaddr</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>serv<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>serv<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//绑定端口</span>
    <span class="token keyword">struct</span> <span class="token class-name">sockaddr_in</span> client<span class="token punctuation">;</span><span class="token comment">//client端配置</span>
    <span class="token function">memset</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>client<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>client<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    client<span class="token punctuation">.</span>sin_family <span class="token operator">=</span> AF_INET<span class="token punctuation">;</span>
    client<span class="token punctuation">.</span>sin_port <span class="token operator">=</span> <span class="token function">htons</span><span class="token punctuation">(</span><span class="token number">8888</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 客户端要绑定的端口</span>
    <span class="token function">inet_pton</span><span class="token punctuation">(</span>AF_INET<span class="token punctuation">,</span> <span class="token string">&quot;192.168.1.255&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>client<span class="token punctuation">.</span>sin_addr<span class="token punctuation">.</span>s_addr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> flag <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token function">setsockopt</span><span class="token punctuation">(</span>fd<span class="token punctuation">,</span> SOL_SOCKET<span class="token punctuation">,</span> SO_BROADCAST<span class="token punctuation">,</span> <span class="token operator">&amp;</span>flag<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//给服务器开放广播权限</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">static</span> <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">char</span> buf<span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> ret <span class="token operator">=</span> <span class="token function">sendto</span><span class="token punctuation">(</span>fd<span class="token punctuation">,</span> buf<span class="token punctuation">,</span> <span class="token function">strlen</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">sockaddr</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>client<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>client<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;server == send buf: %s\\n&quot;</span><span class="token punctuation">,</span> buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">close</span><span class="token punctuation">(</span>fd<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="client" tabindex="-1"><a class="header-anchor" href="#client" aria-hidden="true">#</a> client</h1><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/types.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/stat.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;arpa/inet.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> fd <span class="token operator">=</span> <span class="token function">socket</span><span class="token punctuation">(</span>AF_INET<span class="token punctuation">,</span> SOCK_DGRAM<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">sockaddr_in</span> client<span class="token punctuation">;</span><span class="token comment">//配置客户端</span>
    <span class="token function">memset</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>client<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>client<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    client<span class="token punctuation">.</span>sin_family <span class="token operator">=</span> AF_INET<span class="token punctuation">;</span>
    client<span class="token punctuation">.</span>sin_port <span class="token operator">=</span> <span class="token function">htons</span><span class="token punctuation">(</span><span class="token number">8888</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token function">inet_pton</span><span class="token punctuation">(</span>AF_INET<span class="token punctuation">,</span> <span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>client<span class="token punctuation">.</span>sin_addr<span class="token punctuation">.</span>s_addr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> ret  <span class="token operator">=</span> <span class="token function">bind</span><span class="token punctuation">(</span>fd<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">sockaddr</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>client<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>client<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">char</span> buf<span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token function">recvfrom</span><span class="token punctuation">(</span>fd<span class="token punctuation">,</span> buf<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;client == recv buf: %s\\n&quot;</span><span class="token punctuation">,</span> buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">close</span><span class="token punctuation">(</span>fd<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","3_4广播.html.vue"]]);export{r as default};
