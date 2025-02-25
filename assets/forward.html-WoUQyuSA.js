import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as n,a as e,b as s,d as a}from"./app-nD1Z-e8V.js";const m="/assets/1-xYupcTq6.png",i="/assets/2-Vo73lZAI.png",o="/assets/3-K4Fw-NU2.png",r="/assets/4-jdULezrF.png",c="/assets/5-KJmBN9VL.png",p="/assets/6-SAysKxac.png",h="/assets/7-5LBQTN0N.png",g="/assets/8-QBVZkKAZ.png",u="/assets/9-lz1VDHMK.png",d="/assets/10-9_7Ls_HW.png",y="/assets/11-eJYGCRxc.png",w="/assets/12-XAr1rA5a.png",x="/assets/13-ZhwQFF6Z.png",f="/assets/14-EO4yWWBF.png",_="/assets/15-EpqTdyU9.png",b={},k=e('<h1 id="forward" tabindex="-1"><a class="header-anchor" href="#forward" aria-hidden="true">#</a> forward</h1><p>we&#39;re going to use this super simple dataset and show how this neural network creates this green squiggle. <img src="'+m+'" alt="" loading="lazy"> let&#39;s just talk about what neural network is. A neural network consists of nodes <img src="'+i+'" alt="" loading="lazy"> and connections between the nodes <img src="'+o+'" alt="" loading="lazy"> NOTE: there are many common bent or curved lines(softplus,Rectified Linear Unit,sigmoid) that we can choose for a neural network.The curved or bent lines are called activation functions.So we&#39;ll use softplus activation function. <img src="'+r+'" alt="" loading="lazy"> NOTE: this specific neural network is about as simple as they get.It only has 1 input node where we plug in the dosage only 1 output node to tell us the predicted effectiveness and only 2 nodes between the input and output nodes.in this network only has 1 hidden layer with 2 nodes.</p><p>NOTE:To keep the math simple, let&#39;s assume dosages go from 0(low) to 1(high).</p><p>The first thing we are going to do is plug the lowest dosage 0, into the neural network.</p><h2 id="connection" tabindex="-1"><a class="header-anchor" href="#connection" aria-hidden="true">#</a> connection</h2><p>Now to get from the input node to the top node in the hidden layer this connection multiplies the dosage by -34.4 and then adds 2.14 and the result is an x-axis coordinate for the activation function. <img src="'+c+'" alt="" loading="lazy"></p>',6),v=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"l"),s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mi",null,"w"),s("mo",null,"×"),s("mo",null,"−"),s("mn",null,"34.4"),s("mo",null,"+"),s("mn",null,"2.14")]),s("annotation",{encoding:"application/x-tex"}," l(x) = w \\times -34.4 + 2.14 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"−"),s("span",{class:"mord"},"34.4"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"2.14")])])])])],-1),z=s("p",null,[a("we plug "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"d"),s("mi",null,"o"),s("mi",null,"s"),s("mi",null,"a"),s("mi",null,"g"),s("mi",null,"e"),s("mo",null,"="),s("mn",null,"0")]),s("annotation",{encoding:"application/x-tex"},"dosage = 0")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mord mathnormal"},"os"),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0")])])]),a(" in:")],-1),M=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"l"),s("mo",{stretchy:"false"},"("),s("mn",null,"0"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mo",{stretchy:"false"},"("),s("mn",null,"0"),s("mo",null,"×"),s("mo",null,"−"),s("mn",null,"34.4"),s("mo",{stretchy:"false"},")"),s("mo",null,"+"),s("mn",null,"2.14"),s("mo",null,"="),s("mn",null,"2.14")]),s("annotation",{encoding:"application/x-tex"}," l(0) = (0 \\times -34.4) + 2.14 = 2.14 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"0"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"0"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"−"),s("span",{class:"mord"},"34.4"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"2.14"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"2.14")])])])])],-1),N=s("p",null,[a("To get the corresponding y-axis value we plug 2.14 into the activation function(softplus function) "),s("img",{src:p,alt:"",loading:"lazy"})],-1),T=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"f"),s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"+"),s("msup",null,[s("mi",null,"e"),s("mi",null,"x")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"}," f(x)=log(1+e^x) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"e"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7144em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"x")])])])])])])]),s("span",{class:"mclose"},")")])])])])],-1),L=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"f"),s("mo",{stretchy:"false"},"("),s("mn",null,"2.14"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"+"),s("msup",null,[s("mi",null,"e"),s("mn",null,"2.14")]),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mn",null,"2.25")]),s("annotation",{encoding:"application/x-tex"}," f(2.14)=log(1+e^{2.14}) = 2.25 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"2.14"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.1141em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"e"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2.14")])])])])])])])]),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"2.25")])])])])],-1),A=s("p",null,[a("NOTE:In statistics, machine learning and most programming languages, "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"log()")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen"},"("),s("span",{class:"mclose"},")")])])]),a(" implies the natural log(ln), or the log base e. put the result(2.25) as a blue dot for when dosage = 0. "),s("img",{src:h,alt:"",loading:"lazy"}),a(" And if we continue to increase the dosage values all the way to 1, we get this blue curve. "),s("img",{src:g,alt:"",loading:"lazy"})],-1),B=e('<p>Now we scale the y-axis values for the blue curve by -1.30. For example, when dosage = 0, the current y-axis coordinate for the blue curve is 2.25. So we multiply 2.25 by -1.30 and get -2.93 and -2.93 corresponds to this position on the y-axis. <img src="'+u+'" alt="" loading="lazy"></p><p>Likewise, we multiply all of the other y-axis coordinates on the blue curve by -1.30 and end up with new blue curve. <img src="'+d+'" alt="" loading="lazy"></p><p>Now, let&#39;s focus on the connection from the input node to the bottom node in the hidden layer.just like before, we scale the y-axis coordinates on the orange curve. <img src="'+y+'" alt="" loading="lazy"></p><p>Now the neural network tells us to add the y-axis coordinates from the blue curve to the orange curve and that gives us the green squiggle. <img src="'+w+'" alt="" loading="lazy"></p><p>then finally, we subtract 0.58 from the y-axis values on the green squiggle and we have a green squiggle that fits the data. <img src="'+x+'" alt="" loading="lazy"></p><h2 id="why-neural-network" tabindex="-1"><a class="header-anchor" href="#why-neural-network" aria-hidden="true">#</a> why neural network</h2><p>The reason is that way back in the 1940s and 50s when neural networks were invented, they thought the nodes were vaguely like neurons <img src="'+f+'" alt="" loading="lazy"> and the connections between the nodes were sort of like synapses. <img src="'+_+'" alt="" loading="lazy"></p>',7),E=[k,v,z,M,N,T,L,A,B];function V(q,F){return t(),n("div",null,E)}const Z=l(b,[["render",V],["__file","forward.html.vue"]]);export{Z as default};
