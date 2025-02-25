import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as n,b as s,d as t,a}from"./app-nD1Z-e8V.js";const i="/assets/深度学习第7章.mp4_20250122_103515.750-sHWTGCg7.jpg",o="/assets/深度学习第7章.mp4_20250122_103527.468-OBYmsT10.jpg",c="/assets/深度学习第7章.mp4_20250122_103550.223-Pf3lOder.jpg",p="/assets/深度学习第7章.mp4_20250122_103923.612-KNsvh5Dt.jpg",h="/assets/深度学习第7章.mp4_20250122_103944.314-WeaHjJ5E.jpg",m="/assets/深度学习第7章.mp4_20250122_114850.151-bgWmVvxO.jpg",r="/assets/深度学习第7章.mp4_20250122_104216.275-oMg_9cjf.jpg",_="/assets/深度学习第7章.mp4_20250122_104245.767-73s3EI6Z.jpg",d="/assets/深度学习第7章.mp4_20250122_104400.991-pgBz1JVG.jpg",g="/assets/深度学习第7章.mp4_20250122_104448.334-HlBeV96s.jpg",u="/assets/深度学习第7章.mp4_20250122_104532.798-BL-ew5lZ.jpg",x="/assets/深度学习第7章.mp4_20250122_104611.257-UawrPqol.jpg",y={},f=a('<h1 id="mlp" tabindex="-1"><a class="header-anchor" href="#mlp" aria-hidden="true">#</a> MLP</h1><h2 id="mlp流程" tabindex="-1"><a class="header-anchor" href="#mlp流程" aria-hidden="true">#</a> MLP流程</h2><p>每一个词向量会经过:</p><ol><li>升维线性层</li><li>ReLU层</li><li>降维线性层</li><li>和原始向量加和</li></ol><figure><img src="'+i+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><p>对于每个词向量都要进行此操作:</p><figure><img src="'+o+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><p>Michael Jordan plays Basketball.为例, 输入是Michael Jordan(这里应该指的是Jordan, 通过前面的注意力机制, 将Michael Jordan关联在一起). 经过线性, ReLU, 线性转换后得到Basketball向量, 再和原向量相加, 即可得到Michael Jordan plays Basketball.</p><figure><img src="'+c+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h2 id="升维线性层" tabindex="-1"><a class="header-anchor" href="#升维线性层" aria-hidden="true">#</a> 升维线性层</h2>',10),w={class:"katex"},v=s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mover",{accent:"true"},[s("mi",null,"E"),s("mo",null,"⃗")])]),s("annotation",{encoding:"application/x-tex"},"\\vec{E}")])])],-1),b={class:"katex-html","aria-hidden":"true"},M={class:"base"},B=s("span",{class:"strut",style:{height:"0.9663em"}},null,-1),k={class:"mord accent"},z={class:"vlist-t"},j={class:"vlist-r"},L={class:"vlist",style:{height:"0.9663em"}},J=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"E")],-1),R={style:{top:"-3.2523em"}},S=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),C={class:"accent-body",style:{left:"-0.1522em"}},H={class:"overlay",style:{height:"0.714em",width:"0.471em"}},U={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},E=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),N=[E],V=s("code",null,"Michael Jordan",-1),A=a('<figure><img src="'+p+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><p>同理, 第二行可以理解为这个词语是英文嘛? 所以全连接每个神经元都在处理一个问题, 有多少个神经元(多少行)就是处理了多少个问题. <img src="'+h+'" alt="alt text" loading="lazy"></p><p>另外需要注意的是, 该权重矩阵总共有4 x 12288行, 可得到4 x 12288长度的向量, 既对原始向量进行了升维.</p><figure><img src="'+m+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h2 id="线性整流函数-relu-rectified-linear-unit" tabindex="-1"><a class="header-anchor" href="#线性整流函数-relu-rectified-linear-unit" aria-hidden="true">#</a> 线性整流函数(ReLU, rectified linear unit)</h2><p>线性层虽然能计算出第一名字Michael和第二个名字组合的数值大小, 但是不能判断哪个是正确的, 所以需要ReLU来进行最终的判断, 将Michael Jordan的对应的区域划为正确.</p><figure><img src="'+r+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><p>RuLU函数实现了类似AND Gate的作用.</p><figure><img src="'+_+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h2 id="降维线性层" tabindex="-1"><a class="header-anchor" href="#降维线性层" aria-hidden="true">#</a> 降维线性层</h2><p>降维线性层将4 x 12288长度向量, 降低到1 x 12288</p><figure><img src="'+d+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure>',12),O={class:"katex"},P=s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mover",{accent:"true"},[s("mi",null,"C"),s("mo",null,"⃗")]),s("mn",null,"0")])]),s("annotation",{encoding:"application/x-tex"},"\\vec{C}_0")])])],-1),Y={class:"katex-html","aria-hidden":"true"},D={class:"base"},T=s("span",{class:"strut",style:{height:"1.1163em","vertical-align":"-0.15em"}},null,-1),W={class:"mord"},Z={class:"mord accent"},G={class:"vlist-t"},Q={class:"vlist-r"},q={class:"vlist",style:{height:"0.9663em"}},I=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C")],-1),K={style:{top:"-3.2523em"}},F=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),X={class:"accent-body",style:{left:"-0.1522em"}},$={class:"overlay",style:{height:"0.714em",width:"0.471em"}},ss={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},ts=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),as=[ts],es=a('<span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0715em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span>',1),ns={class:"katex"},ls=s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mover",{accent:"true"},[s("mrow",null,[s("mi",null,"B"),s("mi",null,"a"),s("mi",null,"s"),s("mi",null,"k"),s("mi",null,"e"),s("mi",null,"t"),s("mi",null,"b"),s("mi",null,"a"),s("mi",null,"l"),s("mi",null,"l")]),s("mo",null,"⃗")])]),s("annotation",{encoding:"application/x-tex"},"\\vec{Basketball}")])])],-1),is={class:"katex-html","aria-hidden":"true"},os={class:"base"},cs=s("span",{class:"strut",style:{height:"0.9774em"}},null,-1),ps={class:"mord accent"},hs={class:"vlist-t"},ms={class:"vlist-r"},rs={class:"vlist",style:{height:"0.9774em"}},_s=a('<span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mord mathnormal">a</span><span class="mord mathnormal">s</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal">e</span><span class="mord mathnormal">t</span><span class="mord mathnormal">ba</span><span class="mord mathnormal" style="margin-right:0.01968em;">ll</span></span></span>',1),ds={style:{top:"-3.2634em"}},gs=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),us={class:"accent-body",style:{left:"-0.2355em"}},xs={class:"overlay",style:{height:"0.714em",width:"0.471em"}},ys={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},fs=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),ws=[fs],vs={class:"katex"},bs=s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mover",{accent:"true"},[s("mrow",null,[s("mi",null,"C"),s("mi",null,"h"),s("mi",null,"i"),s("mi",null,"c"),s("mi",null,"a"),s("mi",null,"g"),s("mi",null,"o"),s("mi",null,"B"),s("mi",null,"u"),s("mi",null,"l"),s("mi",null,"l"),s("mi",null,"s")]),s("mo",null,"⃗")])]),s("annotation",{encoding:"application/x-tex"},"\\vec{Chicago Bulls}")])])],-1),Ms={class:"katex-html","aria-hidden":"true"},Bs={class:"base"},ks=s("span",{class:"strut",style:{height:"1.1719em","vertical-align":"-0.1944em"}},null,-1),zs={class:"mord accent"},js={class:"vlist-t vlist-t2"},Ls={class:"vlist-r"},Js={class:"vlist",style:{height:"0.9774em"}},Rs=a('<span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mord mathnormal">hi</span><span class="mord mathnormal">c</span><span class="mord mathnormal">a</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mord mathnormal">u</span><span class="mord mathnormal" style="margin-right:0.01968em;">ll</span><span class="mord mathnormal">s</span></span></span>',1),Ss={style:{top:"-3.2634em"}},Cs=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),Hs={class:"accent-body",style:{left:"-0.2355em"}},Us={class:"overlay",style:{height:"0.714em",width:"0.471em"}},Es={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},Ns=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),Vs=[Ns],As=s("span",{class:"vlist-s"},"​",-1),Os=s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1944em"}},[s("span")])],-1),Ps=a('<figure><img src="'+g+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>经过升维, ReLU, 降维后就可以将Michael Jordan Basketball联系起来了. <img src="'+u+'" alt="alt text" loading="lazy"></p><p>升维和降维所需要的参数 <img src="'+x+'" alt="alt text" loading="lazy"></p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi</li></ol>',6);function Ys(Ds,Ts){return e(),n("div",null,[f,s("p",null,[t("第一个全连接权重矩阵, 第一行可以看层是在解决该词向量"),s("span",w,[v,s("span",b,[s("span",M,[B,s("span",k,[s("span",z,[s("span",j,[s("span",L,[J,s("span",R,[S,s("span",C,[s("span",H,[(e(),n("svg",U,N))])])])])])])])])])]),t("是否包含了"),V,t("的含义, 如果等于1, 则包含, 如果不等于1则不包含.")]),A,s("p",null,[t("这次, 矩阵我们按列来理解, 矩阵乘法可以看成每列乘以左侧向量的对应的数值, 再相加. 而左侧每一列可以看成包含了部分信息, 如第1列"),s("span",O,[P,s("span",Y,[s("span",D,[T,s("span",W,[s("span",Z,[s("span",G,[s("span",Q,[s("span",q,[I,s("span",K,[F,s("span",X,[s("span",$,[(e(),n("svg",ss,as))])])])])])])]),es])])])]),t("可能包含了"),s("span",ns,[ls,s("span",is,[s("span",os,[cs,s("span",ps,[s("span",hs,[s("span",ms,[s("span",rs,[_s,s("span",ds,[gs,s("span",us,[s("span",xs,[(e(),n("svg",ys,ws))])])])])])])])])])]),t(", "),s("span",vs,[bs,s("span",Ms,[s("span",Bs,[ks,s("span",zs,[s("span",js,[s("span",Ls,[s("span",Js,[Rs,s("span",Ss,[Cs,s("span",Hs,[s("span",Us,[(e(),n("svg",Es,Vs))])])])]),As]),Os])])])])]),t("等. 右侧向量每一行的位置的数值, 是之前计算的概率值, 0或1, 表示是否采用左侧矩阵列向量包含的信息.")]),Ps])}const Gs=l(y,[["render",Ys],["__file","3mlp.html.vue"]]);export{Gs as default};
