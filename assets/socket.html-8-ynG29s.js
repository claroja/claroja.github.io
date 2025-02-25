import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as r,c as i,b as t,d as e,e as s,a}from"./app-nD1Z-e8V.js";const o={},c=a(`<h1 id="socket" tabindex="-1"><a class="header-anchor" href="#socket" aria-hidden="true">#</a> socket</h1><p>socket(简称 套接字) 是进程间通信的一种方式，实现不同主机间的进程间通信，比如QQ</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>socket.socket(AddressFamily, Type)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Address Family：可以选择 AF_INET（用于 Internet 进程间通信） 或者 AF_UNIX（用于同一台机器进程间通信）,实际工作中常用AF_INET Type：套接字类型，可以是 SOCK_STREAM（流式套接字，主要用于 TCP 协议）或者 SOCK_DGRAM（数据报套接字，主要用于 UDP 协议）</p><h2 id="udp发送数据" tabindex="-1"><a class="header-anchor" href="#udp发送数据" aria-hidden="true">#</a> UDP发送数据</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from socket import *
udpSocket = socket(AF_INET, SOCK_DGRAM)# 创建套接字
sendAddr = (&#39;192.168.1.1&#39;, 8080)# 发送到的ip和端口
sendData = &quot;hello&quot; # 发送的内容
udpSocket.sendto(sendData, sendAddr) #发送
udpSocket.close() # 关闭套接字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="udp接收数据" tabindex="-1"><a class="header-anchor" href="#udp接收数据" aria-hidden="true">#</a> UDP接收数据</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from socket import *
udpSocket = socket(AF_INET, SOCK_DGRAM)# 创建套接字
bindAddr = (&#39;&#39;, 7788)# 绑定本机的端口，ip地址为空表示本机的任何一个ip
udpSocket.bind(bindAddr)#绑定本机的端口
recvData = udpSocket.recvfrom(1024)# 等待接收的数据，1024表示本次接收的最大字节数
print(recvData)
udpSocket.close()# 关闭套接字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="udp广播" tabindex="-1"><a class="header-anchor" href="#udp广播" aria-hidden="true">#</a> udp广播</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import socket, sys
dest = (&#39;&lt;broadcast&gt;&#39;, 7788)# 这里&lt;broadcst&gt;可以写成当前网段的广播地址
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM) # 创建udp套接字
s.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST,1)# 设置成能发送广播数据
s.sendto(&quot;Hi&quot;, dest)# 发送广播
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TCP：传输控制协议，稳定，慢一些，web服务器（HTTP）使用tcp UDP：用户数据包协议，不稳定，快一些 TCP三次握手，四次挥手 TCP十种状态 TTL是指经过路由器的个数 MSL数据包在网络上存活的最长时间</p><h2 id="tcp" tabindex="-1"><a class="header-anchor" href="#tcp" aria-hidden="true">#</a> TCP</h2><p>socket默认是TCP</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> family<span class="token operator">=</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token operator">=</span>socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">,</span>
             proto<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tcp服务端" tabindex="-1"><a class="header-anchor" href="#tcp服务端" aria-hidden="true">#</a> TCP服务端</h2><p>1.socket创建一个套接字 2.bind绑定ip和port 3.listen使套接字变为监听状态 4.accept等待客户端的信息 5.recv/send接收发送数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from socket import *
tcpSerSocket = socket(AF_INET, SOCK_STREAM) # 创建TCPsocket
address = (&#39;&#39;, 7788) #绑定本地的ip和端口
tcpSerSocket.bind(address) 
tcpSerSocket.listen(5)# 将socket变为监听状态，listen是建立连接的**队列**的个数，linux之中这个值是默认的，更改无效，阻塞
newSocket, clientAddr = tcpSerSocket.accept()#如果有客户端连接，则生成一个专门的套接字进行通讯，阻塞
recvData = newSocket.recv(1024) #获得客户端发送过来的消息
newSocket.send(&quot;thank you !&quot;)# 向客户端发送消息
newSocket.close() #关闭该客户端的套接字
tcpSerSocket.close() #关闭监听的套接字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tcp客户端" tabindex="-1"><a class="header-anchor" href="#tcp客户端" aria-hidden="true">#</a> TCP客户端</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from socket import *
tcpClientSocket = socket(AF_INET, SOCK_STREAM)# 创建TCP socket
serAddr = (&#39;192.168.1.102&#39;, 7788)
tcpClientSocket.connect(serAddr) #连接服务器
tcpClientSocket.send(&quot;hello&quot;) #向服务器发送消息
recvData = tcpClientSocket.recv(1024) # 接收消息
tcpClientSocket.close() # 关闭套接字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见tcp攻击" tabindex="-1"><a class="header-anchor" href="#常见tcp攻击" aria-hidden="true">#</a> 常见TCP攻击</h2><p>DDOS SYN洪水攻击 客户端发完SYN，不发ACK DNS攻击 DNS服务器劫持，换域名对应的IP arp 中间人攻击</p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="socket类" tabindex="-1"><a class="header-anchor" href="#socket类" aria-hidden="true">#</a> socket类</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>family<span class="token operator">=</span>AF_INET<span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token operator">=</span>SOCK_STREAM<span class="token punctuation">,</span> proto<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> fileno<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span> <span class="token comment"># 返回socket对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,24),u=t("thead",null,[t("tr",null,[t("th",null,"参数"),t("th",null,"描述")])],-1),p=t("tr",null,[t("td",null,"family"),t("td",null,"AF_INET(默认值),AF_INET6,AF_UNIX,AF_CAN")],-1),h=t("tr",null,[t("td",null,"type"),t("td",null,"SOCK_STREAM(默认值),SOCK_DGRAM,SOCK_RAW")],-1),b=t("tr",null,[t("td",null,"proto"),t("td",null,"默认为0,只有在AF_CAN的情况下,协议应为CAN_RAW或CAN_BCM之一")],-1),k={href:"https://docs.python.org/zh-cn/3/library/socket.html#socket.socket",target:"_blank",rel:"noopener noreferrer"},v=t("td",null,"如果指定了fileno,则其他参数将被忽略,导致带有指定文件描述符的套接字返回",-1),m=t("h3",{id:"socket-families-网络层",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#socket-families-网络层","aria-hidden":"true"},"#"),e(" Socket Families(网络层)")],-1),_=t("thead",null,[t("tr",null,[t("th",null,"类型"),t("th",null,"描述")])],-1),f=t("tr",null,[t("td",null,"socket.AF_INET"),t("td",null,"IPV4")],-1),S=t("tr",null,[t("td",null,"socket.AF_INET6"),t("td",null,"IPV6")],-1),g=t("tr",null,[t("td",null,"socket.AF_UNIX"),t("td",null,"unix本地通信(多进程通信)")],-1),A=t("td",null,"socket.AF_CAN",-1),x={href:"https://www.cnblogs.com/FZLGYZ/p/11750462.html",target:"_blank",rel:"noopener noreferrer"},C=a('<h3 id="socket-types-传输层" tabindex="-1"><a class="header-anchor" href="#socket-types-传输层" aria-hidden="true">#</a> Socket Types(传输层)</h3><table><thead><tr><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>SOCK_STREAM</td><td>使用TCP(Transmission Control Protocol)</td></tr><tr><td>SOCK_DGRAM</td><td>使用UDP(User Datagram Protocol)</td></tr><tr><td>SOCK_RAW</td><td>未处理的IP数据包, 而流套接字只能读取TCP协议的数据, 数据报套接字只能读取UDP协议的数据</td></tr><tr><td>SOCK_RAW可以处理ICMP/IGMP,可以通过DP_HDRIMCL选项构造IP头,模拟洪水攻击,伪装大量源地址</td><td></td></tr></tbody></table><h3 id="socket对象" tabindex="-1"><a class="header-anchor" href="#socket对象" aria-hidden="true">#</a> socket对象</h3><h4 id="服务端套接字方法" tabindex="-1"><a class="header-anchor" href="#服务端套接字方法" aria-hidden="true">#</a> 服务端套接字方法</h4>',4),T=t("thead",null,[t("tr",null,[t("th",null,"方法"),t("th",null,"描述")])],-1),y=t("tr",null,[t("td",null,"bind(address)"),t("td",null,[t("code",null,"('0.0.0.0', 8001)"),e(",绑定主机和端口,并占用,传入主机,端口号")])],-1),N={href:"https://www.cnblogs.com/gaohuayan/p/11139397.html",target:"_blank",rel:"noopener noreferrer"},P=t("td",null,"默认空,建立连接池,没有一个连接就放入队列中,参数是限制可连接的个数,如果不填会默认合理值",-1),I=t("tr",null,[t("td",null,"accept()"),t("td",null,[e("默认空,从"),t("code",null,"listen"),e("连接池中顺序取出连接,阻塞等待消息,返回(conn, address),conn是连接对象，可以用来接收和发送数据。address是连接客户端的地址。")])],-1),D=a('<h4 id="客户端套接字方法" tabindex="-1"><a class="header-anchor" href="#客户端套接字方法" aria-hidden="true">#</a> 客户端套接字方法</h4><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>connect(address)</td><td>连接远程服务端socket,可能抛出socket.timeout</td></tr><tr><td>connect_ex(address)</td><td>客户端连接,出错返回错误码</td></tr></tbody></table><h4 id="公共用途套接字" tabindex="-1"><a class="header-anchor" href="#公共用途套接字" aria-hidden="true">#</a> 公共用途套接字</h4><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>send(bytes[,flags])</td><td>发送数据,返回值是发送数据的量</td></tr><tr><td>sendall(bytes[,flags])</td><td>它会一直发送完为止,发送成功返回None,否则报错</td></tr><tr><td>sendto(bytes, flags, address)</td><td>和send相同</td></tr><tr><td>sendmsg(buffers[, ancdata[, flags[, address]]])</td><td></td></tr><tr><td>sendfile(file, offset=0, count=None)</td><td></td></tr><tr><td>recv(bufsize[, flags])</td><td>接收数据,byte类型,bufsize指定最多可以接收的数量</td></tr><tr><td>recvfrom(bufsize[, flags])</td><td>除了接收数据,还有发送的地址(data,address)</td></tr><tr><td>recvmsg(bufsize[, ancbufsize[, flags]])</td><td>接收文件，附件,ancbufsize设定附件接收缓冲区类似于bufsize.,返回<code>(data, ancdata, msg_flags, address)</code></td></tr><tr><td>close()</td><td>底层操作也会关闭(如文件描述符)</td></tr><tr><td>getpeername()</td><td>连接到当前套接字的远端的地址</td></tr><tr><td>getsockname()</td><td>当前套接字的地址</td></tr><tr><td>detach()</td><td>关闭,但底层的文件描述符并没关,返回文件描述符</td></tr><tr><td>dup()</td><td>复制socket</td></tr><tr><td>fileno()</td><td>返回文件描述符</td></tr><tr><td>makefile()</td><td>返回文件对象和<code>open()</code>函数一样</td></tr></tbody></table><h4 id="面向锁的套接字" tabindex="-1"><a class="header-anchor" href="#面向锁的套接字" aria-hidden="true">#</a> 面向锁的套接字</h4><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>s.setblocking()</td><td>设置套接字的阻塞与非阻塞模式</td></tr><tr><td>s.settimeout()</td><td>设置阻塞套接字操作的超时时间</td></tr><tr><td>s.gettimeout()</td><td>得到阻塞套接字操作的超时时间</td></tr></tbody></table><h4 id="面向文件的套接字" tabindex="-1"><a class="header-anchor" href="#面向文件的套接字" aria-hidden="true">#</a> 面向文件的套接字</h4><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>s.fileno()</td><td>套接字的文件描述符</td></tr><tr><td>s.makefile()</td><td>创建一个与该套接字相关的文件</td></tr></tbody></table><p>参考: https://www.cnblogs.com/Xuuuuuu/p/10321696.html</p>',9);function E(F,O){const n=l("ExternalLinkIcon");return r(),i("div",null,[c,t("table",null,[u,t("tbody",null,[p,h,b,t("tr",null,[t("td",null,[t("a",k,[e("fileno"),s(n)])]),v])])]),m,t("table",null,[_,t("tbody",null,[f,S,g,t("tr",null,[A,t("td",null,[t("a",x,[e("总线套接"),s(n)])])])])]),C,t("table",null,[T,t("tbody",null,[y,t("tr",null,[t("td",null,[t("a",N,[e("listen([backlog])"),s(n)])]),P]),I])]),D])}const M=d(o,[["render",E],["__file","socket.html.vue"]]);export{M as default};
