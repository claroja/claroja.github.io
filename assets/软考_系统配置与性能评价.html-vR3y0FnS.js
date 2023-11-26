import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as l,c as e,e as t,a as s}from"./app-XqA98pG8.js";const n={},c=t('<h1 id="系统配置与性能评价" tabindex="-1"><a class="header-anchor" href="#系统配置与性能评价" aria-hidden="true">#</a> 系统配置与性能评价</h1><h2 id="性能指标" tabindex="-1"><a class="header-anchor" href="#性能指标" aria-hidden="true">#</a> 性能指标</h2><ol><li>计算机🟢 对计算机评价的主要性能指标有：时钟频率（主频）；运算速度：运算精度：内存的存储容量；存储器的存取周期：数据处理速率PDR(processingdatarate):吞吐率；各种响应时间；各种利用率；RASIS特性（即：可靠性Reliability、可用性Availability、.可维护性Sericeability、完整性和安全性Integraity and Security);平均故障响应时间：兼容性；可扩充性；性能价格比。</li><li>路由器🟢 对路由器评价的主要性能指标有：设备吞吐量、端口吞吐量、全双工线速转发能力、背靠背帧数、路由表能力、背板能力、丢包率、时延、时延抖动、VPN支持能力、内部时钟精度、队列管理机制、端口硬件队列数、分类业务带宽保证、RSVP、IP Diff Serv、CAR支持、冗余、热插拔组件、路由器冗余协议、网管、基于Wb的管理、网管类型、带外网管支持、网管粒度、计费能力/协议、分组语音攴持方式、协议支持、语音压缩能力、端口密度、信令支持。</li><li>交换机🟢 对交换机评价的主要性能指标有：交换机类型、配置、支持的网络类型、最大ATM端口数、最大SONET端口数、最大FDDI端口数、背板吞吐量、缓冲区大小、最大MAC地址表大小、最大电源数、支持协议和标准、路由信息协议RIP、RIP2、开放式最短路径优先第2版、边界网关协议BGP、无类域间路由CIDR、互联网成组管理协议IGMP、距离矢量多播路由协议OVMRP、开放式最短路径优先多播路由协议MOSPF、.协议无关的多播协议PIM、资源预留协议RSVP、802.1p优先级标记，多队列、路由、支持第3层交换、支持多层（4到7层交换、支持多协议路由。支持路由缓存、可又持最大路由表数、VLAN、最大VLAN数量、网管、支持网管类型、支持端口镜像、QoS、支持基于策略的第2层交换、每端口最大优先级队列数、支持基于策略的第3层交换、支持基于策略的应用级Qo5、支持最小/最大带宽分配、冗余、热交换组件（管理卡，交换结构，接口模块，电源，冷却系统、支持端口链路聚集协议、负载均衡。</li><li>网络🟢 评价网络的性能指标有：设备级性能指标；网络级性能指标；应用级性能指标；用户级性能指标；吞吐量。</li><li>操作系统🟢 评价操作系统的性能指标有：系统的可靠性、系统的吞吐率（量）、系统响应时间、系统资源利用率、可移植性。</li><li>数据库管理系统🟢 衡量数据库管理系统的主要性能指标包括数据库本身和管理系统两部分，有：数据库的大小数据库中表的数量、单个表的大小、表中允许的记录（行）数量、单个记录（行）的大小、表上所允许的索引数量、数据库所允许的索引数量、最大并发事务处理能力、负载均衡能力、最大连接数等等。</li><li>WEB服务器🟢 评价Wb服务器的主要性能指标有：最大并发连接数、响应延迟、吞吐量。</li></ol><h3 id="真题" tabindex="-1"><a class="header-anchor" href="#真题" aria-hidden="true">#</a> 真题</h3><p>对计算机评价的主要性能指标有时钟频率、（）、运算精度和内存容量等。对数据库管理系统评价的主要性能指标有（）、数据库所允许的索引数量和最大并发实物处理能力等。 A.丢包率 B.端口吞吐量 C.可移植性 D.数据处理速率 A.MIPS B.支持协议和标准C最大连接数 D.时延抖动 答案：D 为了优化系统的性能，有时需要对系统进行调整。对于不同的系统，其调整参数也不尽相同。例如，对于数据库系统，主要包括CU/内存使用状况、（）、进程/线程使用状态、日志文件大小等。对于应用系统，主要包括应用系统的可用性、响应时间、（）、特定应用资源占用等。 A数据丢包率 B.端口吞吐量 C数据处理速率 D.查询语句性能 A并发用户数 B.支持协议和材标准C,最大连接数 D.时延抖动 答案：D,A</p><h2 id="性能评价方法" tabindex="-1"><a class="header-anchor" href="#性能评价方法" aria-hidden="true">#</a> 性能评价方法</h2><h3 id="性能评测的常用方法" tabindex="-1"><a class="header-anchor" href="#性能评测的常用方法" aria-hidden="true">#</a> 性能评测的常用方法</h3><ol><li>时钟频率。一般来讲，主频越高，速度越快</li><li>指令执行速度。计量单位KIPS、MIPS.</li><li>等效指令速度法。统计各类指令在程序中所占比例，并进行折算，是一种固定比例法。</li><li>数据处理速率(Processing Data Rate,PDR)法。采用i计算PDR值的方法来衡量机器性能，PDR恒越大，机器性能越好。PDR与每条指令和每个操作数的平均位数以及每条指令的平均运算速度有关。</li></ol><h3 id="基准程序法-benchmark" tabindex="-1"><a class="header-anchor" href="#基准程序法-benchmark" aria-hidden="true">#</a> 基准程序法(Benchmark)</h3><p>含义: <code>把应用程序中用得最多、最频繁的那部分核心程序作为评价计算机性能的标准程序</code>，称为基准测试程序(benchmark)。是目前被用户一致承认的测试性能的较好方法.❤️</p><p>有多种多样的基准程序, 分类如下:</p><ol><li>整数测试程序。同一厂家的机器，采用相同的体系结构，用相同的基准程序测试，得到的MPS值越大，一般说明机器速度越快。</li><li>浮点测试程序。指标MFLOPS（理论峰值浮点速度）</li><li>SPEC基准程序(SPEC Benchmark)。重点面向处理器性能的基准程序集将被测计算机的执行时间标准化，即将被测计算机的执行时间除以一个参考处理器的执行时间，</li><li><code>TPC基准程序</code>。用于评测计算机在事务处理、数据库处理、企业管理与决策支持系统等方面的性能。其中，<code>TPC-C是在线事务处理（On--line TransactionProcessing,OLTP)的基准程序</code>，<code>TPC-D是决策支持的基准程序</code>。<code>TPC-E作为大型企业信息服务的基准程序</code>。❤️</li></ol><p>大多数情况下，为测试新系统的性能，用户必须依靠评价程序来评价机器的性能。下面列出了4种评价程序，它们评测的<code>准确程度</code>依次递减：<code>真实的程序、核心程序、小型基准程序、合成基准程序</code>。❤️</p><p>把应用程序中应用最频繁的那部分核心程序作为评价计算机性能的标准程序，称为（）程序。（）不是对Web服务器进行性能评估的主要指标。 A.仿真测试 B.核心测试 C基准测试 D.标准测试 A.丢包率 B.最大并发连接数 C响应延迟 D.吞吐量 答案：CA 在实际应用中，用户通常依靠评价程序来测试系统的性能。以下评价程序中，（）的评测准确程度最低。事务处理性能委员会(Transaction Processing Performance Council,TPC)是制定商务应用基准程序(benchmark)标准规范、性能和价格度量，并管理测试结果发布的非营利组织，其发布的TPC-C是（）的基准程序。 A,核心程序 B.真实程序 C合成基准程序 D.小型基准程序 A,决策支持 B.在线事务处理 C企业信息服务 D.联机分析处理 答案：CB</p><h3 id="阿姆达尔" tabindex="-1"><a class="header-anchor" href="#阿姆达尔" aria-hidden="true">#</a> 阿姆达尔</h3><p>阿姆达尔(Amdahl)定律主要用于系统性能改进的计算中。阿姆达尔定律是指计算机系统中对某一部件采用某种更快的执行方式所获得的系统性能改变程度，取决于这种方式被使用的频率，或所占总执行时间的比例。阿姆达尔定律定义了采用特定部件所取得的加速比。假定我们使用某种增强部件，计算机的性能就会得到提高，那么加速比就是下式所定义的比率：❤️</p>',16),i=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mtext",null,"加速比"),s("mo",null,"="),s("mfrac",null,[s("mtext",null,"不适用增强部件完成整个任务的时间"),s("mtext",null,"使用增强部件完成整个任务的时间")]),s("mspace",{linebreak:"newline"}),s("mtext",null,"总加速比"),s("mo",null,"="),s("mfrac",null,[s("mtext",null,"原来的执行时间"),s("mtext",null,"新的执行时间")]),s("mo",null,"="),s("mfrac",null,[s("mn",null,"1"),s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"−"),s("mtext",null,"增强比例"),s("mo",{stretchy:"false"},")"),s("mo",null,"+"),s("mfrac",null,[s("mtext",null,"增强比例"),s("mtext",null,"增强加速比")])])])]),s("annotation",{encoding:"application/x-tex"}," 加速比 = \\frac{不适用增强部件完成整个任务的时间}{使用增强部件完成整个任务的时间} \\\\ 总加速比 = \\frac{原来的执行时间}{新的执行时间} = \\frac{1}{(1-增强比例)+\\frac{增强比例}{增强加速比}} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord cjk_fallback"},"加速比"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.0463em","vertical-align":"-0.686em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3603em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord cjk_fallback"},"使用增强部件完成整个任务的时间")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord cjk_fallback"},"不适用增强部件完成整个任务的时间")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])]),s("span",{class:"mspace newline"}),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord cjk_fallback"},"总加速比"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.0463em","vertical-align":"-0.686em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3603em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord cjk_fallback"},"新的执行时间")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord cjk_fallback"},"原来的执行时间")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.4288em","vertical-align":"-1.1073em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3214em"}},[s("span",{style:{top:"-2.2377em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord cjk_fallback"},"增强比例"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8723em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord cjk_fallback mtight"},"增强加速比")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord cjk_fallback mtight"},"增强比例")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.1073em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])])],-1),p=s("p",null,"阿姆达尔(Amdahl)定律量化定义了通过改进系统中某个组件的性能，使系统整体性能提高的程度。假设某一功能的处理时间为整个系统运行时间的60%，若使该功能的处理速度提高至原来的5倍，则根据阿姆达尔定律，整个系统的处理速度可提高至原来的（）倍。 A.1.333B.1.923 C.1.5 D.1.829 答案：B 解析：简单的数学问题，由题意，原系统处理时间可分为两个部分，可以优化的60%以及无法优化的40%，当60%的部分处理时间可以优化为5倍时，处理时间为60%/5=12%，此时优化后的总处理时间就为12%+40=52%，而优化前原时间为1，所以整个系统处理速度提高了1/0.52=1.923倍。",-1),r=[c,i,p];function m(h,o){return l(),e("div",null,r)}const g=a(n,[["render",m],["__file","软考_系统配置与性能评价.html.vue"]]);export{g as default};
