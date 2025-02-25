import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as s,a as n}from"./app-nD1Z-e8V.js";const i="/assets/1--kCUfX-5.png",p={},t=n(`<h1 id="tcpdump" tabindex="-1"><a class="header-anchor" href="#tcpdump" aria-hidden="true">#</a> tcpdump</h1><p>类似于windows下面的wireshark软件.</p><h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> syntax</h2><p>tcpdump [option] [proto] [direction] [type]</p><ul><li>option: 可选参数</li><li>proto: 根据协议类型过滤, 如<code>tcp, udp, icmp, ip, ip6, arp, rarp,ether,wlan, fddi, tr, decnet</code></li><li>direction: 根据流向过滤, 如<code>src, dst</code>, 还可以加入逻辑判断<code>src or dst</code></li><li>type: 根据类型过滤, 如<code>host, net, port, portrange</code></li></ul><h2 id="输出结果格式" tabindex="-1"><a class="header-anchor" href="#输出结果格式" aria-hidden="true">#</a> 输出结果格式</h2><p><code>17:15:12.539971 IP VM-4-11-centos.ssh &gt; 112.80.133.148.10303: Flags [P.], seq 15160:15236, ack 77, win 3932, length 76</code></p><p>第一列: 时间,格式为 时:分:秒:毫秒 第二列: 协议类型, IP 第三列: 发送方的IP和PORT 第四列: 箭头<code>&gt;</code> 数据流向 第五列: 接收方的IP和PORT 第六列: 冒号<code>:</code> 第七列: 数据包的内容, 包括Flags 标识符，seq 号，ack 号，win 窗口，数据长度 length，其中 [P.] 表示 PUSH 标志位为 1</p><h3 id="flags标识符" tabindex="-1"><a class="header-anchor" href="#flags标识符" aria-hidden="true">#</a> Flags标识符</h3><p>如果遇到<code>TCP</code>报文, <code>Flags</code>有如下几种:</p><ul><li>[S] : SYN（开始连接）</li><li>[P] : PSH（推送数据）</li><li>[F] : FIN （结束连接）</li><li>[R] : RST（重置连接）</li><li>[.] : 没有 Flag （意思是除上面四种类型外的其他情况，有可能是 ACK 也有可能是 URG）</li></ul><h2 id="常用过滤规则" tabindex="-1"><a class="header-anchor" href="#常用过滤规则" aria-hidden="true">#</a> 常用过滤规则</h2><h3 id="type与direction参数" tabindex="-1"><a class="header-anchor" href="#type与direction参数" aria-hidden="true">#</a> type与direction参数</h3><ol><li>host主机地址过滤</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tcpdump <span class="token function">host</span> <span class="token number">192.168</span>.10.100  <span class="token comment"># 抓取主机为192.168.10.100的包</span>
tcpdump src <span class="token number">192.168</span>.10.100  <span class="token comment"># 抓取源自192.168.10.100的包</span>
tcpdump dst <span class="token number">192.168</span>.10.200  <span class="token comment"># 抓取目的是192.168.10.200的包</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>net网段过滤</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tcpdump net <span class="token number">192.168</span>.10.0/24
tcpdump src net <span class="token number">192.168</span>
tcpdump dst net <span class="token number">192.168</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>端口过滤</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tcpdump port <span class="token number">8088</span>
tcpdump src port <span class="token number">8088</span>  <span class="token comment"># 指定来源端口</span>
tcpdump dst port <span class="token number">8088</span>  <span class="token comment"># 指定目的端口</span>
tcpdump port <span class="token number">80</span> or port <span class="token number">8088</span>  <span class="token comment"># 同时指定两个端口</span>
tcpdump portrange <span class="token number">8000</span>-8080  <span class="token comment"># 指定端口范围</span>
tcpdump src portrange <span class="token number">8000</span>-8080
tcpdump dst portrange <span class="token number">8000</span>-8080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常见协议的默认端口，直接使用协议名, 比如 http == 80，https == 443 等</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tcpdump tcp port http  <span class="token comment"># 指定80端口</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="proto协议过滤" tabindex="-1"><a class="header-anchor" href="#proto协议过滤" aria-hidden="true">#</a> proto协议过滤</h3><p>常见的网络协议有：tcp, udp, icmp, http, ip,ipv6 等</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tcpdump icmp  <span class="token comment"># 查看icmp(ping)包</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看tcp协议包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tcpdump tcp  <span class="token comment"># 包含ipv4和ipv6</span>
tcpdump <span class="token function">ip</span> proto <span class="token number">6</span>  <span class="token comment"># 查看ipv4包, \`6\`表示tcp在ip报文中的编号</span>
tcpdump ip6 proto <span class="token number">6</span>  <span class="token comment"># 查看ipv6包</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="option参数" tabindex="-1"><a class="header-anchor" href="#option参数" aria-hidden="true">#</a> option参数</h3><h4 id="不解析域名配置" tabindex="-1"><a class="header-anchor" href="#不解析域名配置" aria-hidden="true">#</a> 不解析域名配置</h4><ul><li><code>-n</code>：不把ip转化成域名，直接显示 ip，避免执行 DNS lookups 的过程，速度会快很多</li><li><code>-nn</code>：不把协议和端口号转化成名字，速度也会快很多。</li><li><code>-N</code>：不打印出host 的域名部分。比如,，如果设置了此选现，tcpdump 将会打印&#39;nic&#39; 而不是 &#39;nic.ddn.mil&#39;.</li></ul><h4 id="读写解析结果" tabindex="-1"><a class="header-anchor" href="#读写解析结果" aria-hidden="true">#</a> 读写解析结果</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tcpdump icmp <span class="token parameter variable">-w</span> icmp.pcap  <span class="token comment"># 保存</span>
tcpdump icmp <span class="token parameter variable">-r</span> all.pcap  <span class="token comment"># 读取</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="控制内容详细程度" tabindex="-1"><a class="header-anchor" href="#控制内容详细程度" aria-hidden="true">#</a> 控制内容详细程度</h4><ul><li><code>-v</code>：产生详细的输出. 比如包的TTL，id标识，数据包长度，以及IP包的一些选项。同时它还会打开一些附加的包完整性检测，比如对IP或ICMP包头部的校验和。</li><li><code>-vv</code>：产生比-v更详细的输出. 比如NFS回应包中的附加域将会被打印, SMB数据包也会被完全解码。（摘自网络，目前我还未使用过）</li><li><code>-vvv</code>：产生比-vv更详细的输出。比如 telent 时所使用的SB, SE 选项将会被打印, 如果telnet同时使用的是图形界面，其相应的图形选项将会以16进制的方式打印出来（摘自网络，目前我还未使用过）</li></ul><h4 id="控制时间显示" tabindex="-1"><a class="header-anchor" href="#控制时间显示" aria-hidden="true">#</a> 控制时间显示</h4><ul><li><code>-t</code>：在每行的输出中不输出时间</li><li><code>-tt</code>：在每行的输出中会输出时间戳</li><li><code>-ttt</code>：输出每两行打印的时间间隔(以毫秒为单位)</li><li><code>-tttt</code>：在每行打印的时间戳之前添加日期的打印（此种选项，输出的时间最直观）</li></ul><h3 id="数据包头部控制" tabindex="-1"><a class="header-anchor" href="#数据包头部控制" aria-hidden="true">#</a> 数据包头部控制</h3><ul><li><code>-x</code>：以16进制的形式打印每个包的头部数据（但不包括数据链路层的头部）</li><li><code>-xx</code>：以16进制的形式打印每个包的头部数据（包括数据链路层的头部）</li><li><code>-X</code>：以16进制和 ASCII码形式打印出每个包的数据(但不包括连接层的头部)，这在分析一些新协议的数据包很方便。</li><li><code>-XX</code>：以16进制和 ASCII码形式打印出每个包的数据(包括连接层的头部)，这在分析一些新协议的数据包很方便。</li></ul><h3 id="过滤指定网卡数据包" tabindex="-1"><a class="header-anchor" href="#过滤指定网卡数据包" aria-hidden="true">#</a> 过滤指定网卡数据包</h3><p><code>-i</code>：指定要过滤的网卡接口，如果要查看所有网卡，可以 -i any</p><h3 id="过滤特定流向的数据包" tabindex="-1"><a class="header-anchor" href="#过滤特定流向的数据包" aria-hidden="true">#</a> 过滤特定流向的数据包</h3><p><code>-Q</code>： 选择是入方向还是出方向的数据包，可选项有：in, out, inout，也可以使用 --direction=[direction] 这种写法</p><h3 id="其他常用的一些参数" tabindex="-1"><a class="header-anchor" href="#其他常用的一些参数" aria-hidden="true">#</a> 其他常用的一些参数#</h3><ul><li><code>-A</code>：以ASCII码方式显示每一个数据包(不显示链路层头部信息). 在抓取包含网页数据的数据包时, 可方便查看数据</li><li><code>-l</code>: 基于行的输出，便于你保存查看，或者交给其它工具分析</li><li><code>-q</code>: 简洁地打印输出。即打印很少的协议相关信息, 从而输出行都比较简短.</li><li><code>-c</code>: 捕获 count 个包 tcpdump 就退出</li><li><code>-s</code>: tcpdump 默认只会截取前 96 字节的内容，要想截取所有的报文内容，可以使用 -s number， number 就是你要截取的报文字节数，如果是 0 的话，表示截取报文全部内容。</li><li><code>-S</code>: 使用绝对序列号，而不是相对序列号</li><li><code>-C</code>：file-size，tcpdump 在把原始数据包直接保存到文件中之前, 检查此文件大小是否超过file-size. 如果超过了, 将关闭此文件,另创一个文件继续用于原始数据包的记录. 新创建的文件名与-w 选项指定的文件名一致, 但文件名后多了一个数字.该数字会从1开始随着新创建文件的增多而增加. file-size的单位是百万字节(nt: 这里指1,000,000个字节,并非1,048,576个字节, 后者是以1024字节为1k, 1024k字节为1M计算所得, 即1M=1024 ＊ 1024 ＝ 1,048,576)</li><li><code>-F</code>：使用file 文件作为过滤条件表达式的输入, 此时命令行上的输入将被忽略.</li></ul><h2 id="过滤规则组合" tabindex="-1"><a class="header-anchor" href="#过滤规则组合" aria-hidden="true">#</a> 过滤规则组合</h2><h3 id="逻辑组合" tabindex="-1"><a class="header-anchor" href="#逻辑组合" aria-hidden="true">#</a> 逻辑组合</h3><ul><li><code>and</code>：所有的条件都需要满足，也可以表示为 <code>&amp;&amp;</code></li><li><code>or</code>：只要有一个条件满足就可以，也可以表示为 <code>||</code></li><li><code>not</code>：取反，也可以使用 <code>!</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tcpdump src <span class="token number">10.5</span>.2.3 and dst port <span class="token number">3389</span>  <span class="token comment"># 来自10.5.2.3，发往任意主机的3389端口的包</span>
tcpdump <span class="token string">&#39;src 10.0.2.4 and (dst port 3389 or 22)&#39;</span>  <span class="token comment"># 括号在 shell 中是特殊符号，因为你需要使用引号将其包含</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="条件判断" tabindex="-1"><a class="header-anchor" href="#条件判断" aria-hidden="true">#</a> 条件判断</h3><p>而在单个过滤器里，常常会判断一条件是否成立，这时候，就要使用下面两个符号</p><ul><li><code>=</code>：判断二者相等</li><li><code>==</code>：判断二者相等</li><li><code>!=</code>：判断二者不相等 tcpdump 还提供了一些关键字的接口来方便我们进行判断，比如:</li><li><code>if</code>：表示网卡接口名、</li><li><code>proc</code>：表示进程名</li><li><code>pid</code>：表示进程 id</li><li><code>svc</code>：表示 service class</li><li><code>dir</code>：表示方向，in 和 out</li><li><code>eproc</code>：表示 effective process name</li><li><code>epid</code>：表示 effective process ID</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tcpdump <span class="token string">&quot;( if=en0 and proc =nc ) || (if != en0 and dir=in)&quot;</span>  <span class="token comment"># 程名为 nc 发出的流经 en0 网卡的数据包，或者不流经 en0 的入方向数据包</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="特殊过滤规则" tabindex="-1"><a class="header-anchor" href="#特殊过滤规则" aria-hidden="true">#</a> 特殊过滤规则</h2><h3 id="通过tcpflags标志位过滤" tabindex="-1"><a class="header-anchor" href="#通过tcpflags标志位过滤" aria-hidden="true">#</a> 通过tcpflags标志位过滤</h3><p><code>proto [ expr:size ]</code></p><ul><li>proto：可以是熟知的协议之一（如ip，arp，tcp，udp，icmp，ipv6）</li><li>expr：可以是数值，也可以是一个表达式，表示与指定的协议头开始处的字节偏移量。</li><li>size：是可选的，表示从字节偏移量开始取的字节数量。</li></ul><p>1、tcpflags 可以理解为是一个别名常量，相当于 13，它代表着与指定的协议头开头相关的字节偏移量，也就是标志位，所以 tcp[tcpflags] 等价于 tcp[13] 2、tcp-fin, tcp-syn, tcp-rst, tcp-push, tcp-ack, tcp-urg 这些同样可以理解为别名常量，分别代表 1，2，4，8，16，32，64。 syn + ack 包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tcpdump <span class="token parameter variable">-i</span> eth0 <span class="token string">&#39;tcp[13] == 2 or tcp[13] == 16&#39;</span>
tcpdump <span class="token parameter variable">-i</span> eth0 <span class="token string">&#39;tcp[tcpflags] == tcp-syn or tcp[tcpflags] == tcp-ack&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通过包大小进行过滤" tabindex="-1"><a class="header-anchor" href="#通过包大小进行过滤" aria-hidden="true">#</a> 通过包大小进行过滤</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tcpdump <span class="token function">less</span> <span class="token number">32</span> 
tcpdump greater <span class="token number">64</span> 
tcpdump <span class="token operator">&lt;=</span> <span class="token number">128</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="过滤指定网关的数据" tabindex="-1"><a class="header-anchor" href="#过滤指定网关的数据" aria-hidden="true">#</a> 过滤指定网关的数据</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tcpdump gateway <span class="token punctuation">[</span>host<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="过滤广播和多播" tabindex="-1"><a class="header-anchor" href="#过滤广播和多播" aria-hidden="true">#</a> 过滤广播和多播</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tcpdump ether broadcast
tcpdump ether multicast
tcpdump <span class="token function">ip</span> broadcast
tcpdump <span class="token function">ip</span> multicast
tcpdump ip6 multicast
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实战" tabindex="-1"><a class="header-anchor" href="#实战" aria-hidden="true">#</a> 实战</h2><h3 id="抓取http的post请求" tabindex="-1"><a class="header-anchor" href="#抓取http的post请求" aria-hidden="true">#</a> 抓取HTTP的POST请求</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tcpdump <span class="token parameter variable">-s</span> <span class="token number">0</span> <span class="token parameter variable">-A</span> <span class="token parameter variable">-vv</span> <span class="token string">&#39;tcp[((tcp[12:1] &amp; 0xf0) &gt;&gt; 2):4]&#39;</span>  <span class="token comment"># 抓取 HTTP 的 POST 请求</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解释:</p><ul><li><code>tcp[n]</code>：表示 tcp 报文里 第 n 个字节</li><li><code>tcp[n:c]</code>: tcp[12:1] 表示从报文的第12个字节（因为有第0个字节，所以这里的12其实表示的是13）开始算起取一个字节，也就是 8 个bit。</li><li><code>&amp;</code>：是位运算里的 and 操作符，比如 0011 &amp; 0010 = 0010</li><li><code>&gt;&gt;</code>：是位运算里的右移操作，比如 0111 &gt;&gt; 2 = 0001</li><li><code>0xf0</code>：是 10 进制的 240 的 16 进制表示，但对于位操作来说，10进制和16进制都将毫无意义，我们需要的是二进制，将其转换成二进制后是：11110000，这个数有什么特点呢？前面个 4bit 全部是 1，后面4个bit全部是0</li></ul><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li>tcp[12:1] &amp; 0xf0 其实并不直观，tcp 报文中的 第12 个字节是这样组成的 10110000，那么这个表达式就可以变成 10110110 &amp;&amp; 11110000 = 10110000</li><li>tcp[12:1] &amp; 0xf0) &gt;&gt; 2 这个表达式实际是 (tcp[12:1] &amp; 0xf0) &gt;&gt; 4 ) &lt;&lt; 2 的简写形式。</li></ol><p>从上一步我们算出了 tcp[12:1] &amp; 0xf0 的值其实是一个字节，也就是 8 个bit，但是你再回去看下上面的 tcp 报文首部结构图，表示数据偏移量的只有 4个bit，也就是说 上面得到的值 10110000，前面 4 位（1011）才是正确的偏移量，那么为了得到 1011，只需要将 10110000 右移4位即可，也就是 tcp[12:1] &amp; 0xf0) &gt;&gt; 4，至此我们是不是已经得出了实际数据的正确位置呢，很遗憾还没有，前一篇文章里我们讲到 Data Offset 的单位是 4个字节，因为要将 1011 乘以 4才可以，除以4在位运算中相当于左移2位，也就是 &lt;&lt;2，与前面的 &gt;&gt;4 结合起来一起算的话，最终的运算可以简化为 &gt;&gt;2。 至此，我们终于得出了实际数据开始的位置是 tcp[12:1] &amp; 0xf0) &gt;&gt; 2 （单位是字节）。 找到了数据的起点后，可别忘了我们的目的是从数据中打到 HTTP 请求的方法，是 GET 呢 还是 POST ，或者是其他的？ 有了上面的经验，我们自然懂得使用 tcp[((tcp[12:1] &amp; 0xf0) &gt;&gt; 2):4] 从数据开始的位置再取出四个字节，然后将结果与 GET （注意 GET最后还有个空格）的 16进制写法（也就是 0x47455420）进行比对</p><p>0x47 --&gt; 71 --&gt; G 0x45 --&gt; 69 --&gt; E 0x54 --&gt; 84 --&gt; T 0x20 --&gt; 32 --&gt; 空格</p><h3 id="其他常用" tabindex="-1"><a class="header-anchor" href="#其他常用" aria-hidden="true">#</a> 其他常用</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 提取 HTTP 的 User-Agent</span>
tcpdump <span class="token parameter variable">-nn</span> <span class="token parameter variable">-A</span> <span class="token parameter variable">-s1500</span> <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;User-Agent:&quot;</span>
<span class="token comment">## 通过 egrep 可以同时提取User-Agent 和主机名（或其他头文件）</span>
tcpdump <span class="token parameter variable">-nn</span> <span class="token parameter variable">-A</span> <span class="token parameter variable">-s1500</span> <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token function">egrep</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;User-Agent:|Host:&#39;</span>
<span class="token comment">## 抓取 HTTP GET 请求包</span>
tcpdump <span class="token parameter variable">-vvAls0</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;GET&#39;</span>
<span class="token comment">## 抓取 HTTP POST 请求包(不能保证抓取到 HTTP POST 有效数据流量，因为一个 POST 请求会被分割为多个 TCP 数据包。)</span>
tcpdump <span class="token parameter variable">-vvAls0</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;POST&#39;</span>
<span class="token comment">## 找出一段时间内发包最多的 IP，或者从一堆报文中找出发包最多的 IP</span>
<span class="token comment">## cut -f 1,2,3,4 -d &#39;.&#39; : 以 . 为分隔符，打印出每行的前四列。即 IP 地址。</span>
<span class="token comment">## sort | uniq -c : 排序并计数</span>
<span class="token comment">## sort -nr : 按照数值大小逆向排序</span>
tcpdump <span class="token parameter variable">-nnn</span> <span class="token parameter variable">-t</span> <span class="token parameter variable">-c</span> <span class="token number">200</span> <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-f</span> <span class="token number">1,2</span>,3,4 <span class="token parameter variable">-d</span> <span class="token string">&#39;.&#39;</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-nr</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">20</span>
<span class="token comment">## 抓取 DNS 请求和响应</span>
tcpdump <span class="token parameter variable">-i</span> any <span class="token parameter variable">-s0</span> port <span class="token number">53</span>
<span class="token comment">## 切割 pcap 文件</span>
tcpdump  <span class="token parameter variable">-w</span> /tmp/capture-%H.pcap <span class="token parameter variable">-G</span> <span class="token number">3600</span> <span class="token parameter variable">-C</span> <span class="token number">200</span>
<span class="token comment">## 提取 HTTP POST 请求中的密码</span>
tcpdump <span class="token parameter variable">-s</span> <span class="token number">0</span> <span class="token parameter variable">-A</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token function">egrep</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;POST /|pwd=|passwd=|password=|Host:&quot;</span>
<span class="token comment">## 提取 HTTP 请求的 URL</span>
tcpdump <span class="token parameter variable">-s</span> <span class="token number">0</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token function">egrep</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;POST /|GET /|Host:&quot;</span>
<span class="token comment">## 抓取 HTTP 有效数据包 抓取 80 端口的 HTTP 有效数据包，排除 TCP 连接建立过程的数据包（SYN / FIN / ACK）</span>
tcpdump <span class="token string">&#39;tcp port 80 and (((ip[2:2] - ((ip[0]&amp;0xf)&lt;&lt;2)) - ((tcp[12]&amp;0xf0)&gt;&gt;2)) != 0)&#39;</span>





</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://www.cnblogs.com/wongbingming/archive/2020/06/30/13212306.html</p>`,75),c=[t];function l(d,r){return e(),s("div",null,c)}const u=a(p,[["render",l],["__file","tcpdump.html.vue"]]);export{u as default};
