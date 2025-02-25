import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as p,a as e,b as n,d as s}from"./app-nD1Z-e8V.js";const o="/assets/1-2CY4i5l1.png",i="/assets/2-RvwpUii0.png",c="/assets/3-xICKNgGe.png",l="/assets/4-YfCmb6ON.png",u="/assets/5-R9swyIVS.png",r={},d=e(`<h1 id="initweight" tabindex="-1"><a class="header-anchor" href="#initweight" aria-hidden="true">#</a> initweight</h1><p>权重的初始值设置非常重要, 决定了学习能否成功.</p><h2 id="可以设置为0嘛" tabindex="-1"><a class="header-anchor" href="#可以设置为0嘛" aria-hidden="true">#</a> 可以设置为0嘛</h2><p>权重衰减是一种以减小权重参数的值为目的进行学习的方法. 通过减小权重参数的值来抑制过拟合的发生.</p><p>为什么不能将权重值设置为0呢? 严格地来说, 为什么不能将权重初始值设成一样的值呢?</p><p>因为在误差反向传播过程中, 所有的权重值都会进行相同的更新. 权重被更新为相同的值, 并拥有了重复的值, 这使得神经网络拥有许多不同的权重的意义丧失了. 为了防止&quot;权重均一化&quot;, 必须随机生成初始值.</p><h2 id="sigmoid的权重初始值" tabindex="-1"><a class="header-anchor" href="#sigmoid的权重初始值" aria-hidden="true">#</a> sigmoid的权重初始值</h2><p>向一个层神经网络(激活函数使用sigmoid函数)传入随机数据, 用直方图绘制各层激活值的数据分布.</p><p>python实现:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
<span class="token keyword">def</span> <span class="token function">sigmoid</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> np<span class="token punctuation">.</span>exp<span class="token punctuation">(</span><span class="token operator">-</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>
x <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>randn<span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token comment"># 1000个数据</span>
node_num <span class="token operator">=</span> <span class="token number">100</span>        <span class="token comment"># 各隐藏层的节点（神经元）数</span>
hidden_layer_size <span class="token operator">=</span> <span class="token number">5</span> <span class="token comment"># 隐藏层有5层</span>
activations <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>      <span class="token comment"># 激活值的结果保存在这里</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>hidden_layer_size<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> i <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span>
        x <span class="token operator">=</span> activations<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
    w <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>randn<span class="token punctuation">(</span>node_num<span class="token punctuation">,</span> node_num<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1</span>
    z <span class="token operator">=</span> np<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>x<span class="token punctuation">,</span> w<span class="token punctuation">)</span>
    a <span class="token operator">=</span> sigmoid<span class="token punctuation">(</span>z<span class="token punctuation">)</span>   <span class="token comment"># sigmoid函数</span>
    activations<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设神经网络有5层, 每层有100个神经元, 激活函数使用sigmoid. 然后用高斯分布随机生成1000个数据(每个数据有5个特征)作为输入数据. 各层的激活值的结果保存在activations变量中. 绘制直方图:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 绘制直方图</span>
<span class="token keyword">for</span> i<span class="token punctuation">,</span> a <span class="token keyword">in</span> activations<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    plt<span class="token punctuation">.</span>subplot<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>activations<span class="token punctuation">)</span><span class="token punctuation">,</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;-layer&quot;</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>hist<span class="token punctuation">(</span>a<span class="token punctuation">.</span>flatten<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token builtin">range</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>上图中, 可以看到各层的激活值偏向(0,1)分布. 这里使用的sigmoid函数式S型函数, 醉着输出不断的靠近0或1, 它的导数值逐渐接近0. 因此, 偏向0和1的数据分布会造成反向传播中梯度值不断变小, 最后消失. 这个问题称为梯度消失(gradient vanishing).</p><p>将权重的标准差设为0.01, 进行相同的实验. 只需替代一下代码:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## w = np.random.randn(node_num, node_num) * 1</span>
w <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>randn<span class="token punctuation">(</span>node_num<span class="token punctuation">,</span> node_num<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.01</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这次呈集中在0.5附近的分布. 因为不像刚才的例子那样偏向0和1, 所以不会发生梯度消失的问题.</p><p>但是又出现了另外一个问题:激活值的分布有所偏向, 说明在表现力上会有很大的问题. 因为如果有多个神经元都输出几乎相同的值, 那它们就没有存在的意义了. 比如, 如果100个神经元都输出几乎相同的值, 那么也可以由1个神经元来表达基本相同的事情. 因此, 激活值在分布上有所偏向会出现&quot;表现力受限&quot;的问题.</p><p>各层的激活值的分布都要求有适当的广度, 因为通过在各层间传递多样性的数据, 神经网络可以进行高效的学习. 反过来, 如果传递的是由所偏向的数据, 就会出现梯度消失或者&quot;表现力受限&quot;的问题, 导致学习可能无法顺利的进行.</p><p>推荐使用&quot;Xavier初始值&quot;来初始化参数, Xavier的论文中, 为了使各层的激活值呈现出具有相同广度的分布, 推导了合适的权重尺度. 结论是如果前一层的节点数为n, 则初始值使用标准差为$\\frac{1}{\\sqrt n}的分布.</p><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>前一层的节点数越多, 设定为目标节点的初始值的权重尺度就越小. 使用Xavier初始值进行实验, 只需替换如下代码即可:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>node_num <span class="token operator">=</span> <span class="token number">100</span> <span class="token comment"># 前一层的节点数</span>
w <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>randn<span class="token punctuation">(</span>node_num<span class="token punctuation">,</span> node_num<span class="token punctuation">)</span> <span class="token operator">/</span> np<span class="token punctuation">.</span>sqrt<span class="token punctuation">(</span>node_num<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>呈现了比之前更广度的分布, 所以sigmoid函数的表现力不受限制.</p><h2 id="tanh" tabindex="-1"><a class="header-anchor" href="#tanh" aria-hidden="true">#</a> tanh</h2><p>后面的层的分布呈稍微歪斜的形状, 如果用tanh函数代替 sigmoid 函数, 稍微歪斜的问题就能得到改善.</p><h2 id="relu的权重初始值" tabindex="-1"><a class="header-anchor" href="#relu的权重初始值" aria-hidden="true">#</a> ReLU的权重初始值</h2>',29),m=n("p",null,[s('Xavier 初始值是以激活函数是线性函数为前提而推导出来的, sigmoid 函数和tanh 函数左右对称，且中央附近可以视作线性函数. 但当激活函数使用ReLU时, 一般推荐ReLU专用的初始值, 由Kaiming He推荐的, 称为"He初始值": 当前一层的节点为n时, He初始值使用标准差为'),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msqrt",null,[n("mfrac",null,[n("mn",null,"2"),n("mi",null,"n")])])]),n("annotation",{encoding:"application/x-tex"},"\\sqrt \\frac{2}{n}")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1.84em","vertical-align":"-0.6049em"}}),n("span",{class:"mord sqrt"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"1.2351em"}},[n("span",{class:"svg-align",style:{top:"-3.8em"}},[n("span",{class:"pstrut",style:{height:"3.8em"}}),n("span",{class:"mord",style:{"padding-left":"1em"}},[n("span",{class:"mopen nulldelimiter"}),n("span",{class:"mfrac"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8451em"}},[n("span",{style:{top:"-2.655em"}},[n("span",{class:"pstrut",style:{height:"3em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},[n("span",{class:"mord mathnormal mtight"},"n")])])]),n("span",{style:{top:"-3.23em"}},[n("span",{class:"pstrut",style:{height:"3em"}}),n("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),n("span",{style:{top:"-3.394em"}},[n("span",{class:"pstrut",style:{height:"3em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},[n("span",{class:"mord mtight"},"2")])])])]),n("span",{class:"vlist-s"},"​")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.345em"}},[n("span")])])])]),n("span",{class:"mclose nulldelimiter"})])]),n("span",{style:{top:"-3.1951em"}},[n("span",{class:"pstrut",style:{height:"3.8em"}}),n("span",{class:"hide-tail",style:{"min-width":"1.02em",height:"1.88em"}},[n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.88em",viewBox:"0 0 400000 1944",preserveAspectRatio:"xMinYMin slice"},[n("path",{d:`M983 90
l0 -0
c4,-6.7,10,-10,18,-10 H400000v40
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M1001 80h400000v40h-400000z`})])])])]),n("span",{class:"vlist-s"},"​")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.6049em"}},[n("span")])])])])])])]),s("的高斯分布, 直观上可以理解: 因为ReLU的负值区域的值为0, 为了使它更有广度, 所以需要2倍的系数. 不同初始值的比较: "),n("img",{src:u,alt:"",loading:"lazy"})],-1),k=n("ul",null,[n("li",null,'当"std=0.01"时, 各层的激活值非常小, 神经网络上传递的是非常小的值, 说明逆向传播时权重的梯度也同样很小. 实际上学习基本上没有进展.'),n("li",null,"当初始值为Xavier时, 随着层的加深, 偏向一点点变大. 实际身上, 层加深后, 激活值的偏向变大, 学习时会出现梯度消失的问题."),n("li",null,"当初始值为He时, 各层中分布的广度相同. 由于即使层加深, 数据的广度也能保持不变, 逆向传播时, 也会传递合适的值.")],-1),h=[d,m,k];function v(g,b){return t(),p("div",null,h)}const f=a(r,[["render",v],["__file","initweight.html.vue"]]);export{f as default};
