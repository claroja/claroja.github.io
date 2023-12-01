import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as t,e as s,a as l,b as a}from"./app-qxiCM96p.js";const n={},c=s('<h1 id="电子琴" tabindex="-1"><a class="header-anchor" href="#电子琴" aria-hidden="true">#</a> 电子琴</h1><h2 id="右手旋律手型" tabindex="-1"><a class="header-anchor" href="#右手旋律手型" aria-hidden="true">#</a> 右手旋律手型</h2><ol><li>正常六度, 比如拇指在1, 剩余手指在3456</li><li>偏小五度, 比如拇指在1, 剩余手指在2345</li><li>偏大七度, 比如拇指在1, 剩余手指在4567</li><li>最大八度, 比如拇指在1, 剩余手指在5671</li></ol><p>以上是以拇指为参考系, 不断的改变剩余四指的位置, 这方便理解, 但是不方便实操. 在实操中应该以剩余四值为参考系, 不断改变拇指, 如:</p><ol><li>正常六度, 如剩余四指在5671, 拇指在3</li><li>偏小五度, 如剩余四指在5671, 拇指在4</li><li>偏大七度, 如剩余四指在5671, 拇指在2</li><li>最大八度, 如剩余四指在5671, 拇指在1</li></ol>',5),r=l("p",null,[a("所以剩余四指覆盖键盘所有白键总共有七种可能(1234,2345,3456,4567,5671,6712,7123), 然后每一种对应拇指的变化有四种(正常六度, 偏小五度, 偏大七度, 最大七度), 这样有"),l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[l("semantics",null,[l("mrow",null,[l("mn",null,"7"),l("mo",null,"∗"),l("mn",null,"4"),l("mo",null,"="),l("mn",null,"28")]),l("annotation",{encoding:"application/x-tex"},"7*4=28")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.6444em"}}),l("span",{class:"mord"},"7"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),l("span",{class:"mbin"},"∗"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.6444em"}}),l("span",{class:"mord"},"4"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),l("span",{class:"mrel"},"="),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.6444em"}}),l("span",{class:"mord"},"28")])])]),a("种变化就能把所有的白键覆盖住, 就能完全掌握C调旋律了.")],-1),o=s('<p>一般以小拇指所指的位置作为指形的名称, 如(1234)F, (2345)G, (3456)A, (4567)B, (5671)C, (6712)D, (7123)E. 在转换指形时, 不需要直接反应出指形的名称, 而是先以第一个弹奏的手指确定音符, 然后自然就知道剩余手指所在的音符, 最后自然旧确定了指形.</p><h2 id="歌曲练习" tabindex="-1"><a class="header-anchor" href="#歌曲练习" aria-hidden="true">#</a> 歌曲练习</h2><ol><li>在网上搜谱子</li><li>将网上的谱子使用gtp重新改写 <ol><li>确定节拍和速度</li><li>谱子重写 <ol><li>制作旋律, 右手控制gtp光标的左右上下;以及休止符(删除), 左手小指控制连音线(l),附点(.);无名指控制减时长(-);中指控制加时长(+)</li><li>制作歌词, 一个音符对应一个空格</li><li>制作指法, 每个音符标明手指(pima);使用注解标注切换旋律指法, 以小指为主(CDEFGAB)</li><li>制作和弦, 使用等级和弦. 大三和弦: Ⅰ,Ⅱ,Ⅲ, Ⅳ, Ⅴ, Ⅵ, Ⅶ; 小三和弦:ⅰ, ⅱ, ⅲ, ⅳ, ⅴ, ⅵ, ⅶ.</li></ol></li></ol></li><li>练习 <ul><li>按乐句推进: 如主歌第1乐句👉主歌第2乐句👉桥段👉副歌第1乐句👉副歌第2乐句</li><li>按速度推进: 先以70%速度练习, 每次提升10bpm, 直至与原曲相同</li><li>先练独奏: 先右手旋律👉再左手和弦</li><li>再练弹唱: 先伴奏右手柱式和弦, 左手根音👉再弹唱</li><li>考核标准: 3遍无错误演奏</li></ul></li><li>录制</li></ol>',3),h=[c,r,o];function m(p,d){return e(),t("div",null,h)}const g=i(n,[["render",m],["__file","电子琴.html.vue"]]);export{g as default};
