import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as n,o as s,c as r,b as e,d as t,e as i,a as l}from"./app-nD1Z-e8V.js";const c="/assets/1-a1uPRe9H.png",_="/assets/2-XFndA6Fh.png",d={},h=e("h2",{id:"最佳实践",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#最佳实践","aria-hidden":"true"},"#"),t(" 最佳实践")],-1),p=e("ol",null,[e("li",null,"树模型不需要进行onehot编码"),e("li",null,"树模型仅需要进行label编码")],-1),f=e("h2",{id:"内容",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#内容","aria-hidden":"true"},"#"),t(" 内容")],-1),m=e("p",null,"数值型变量对任何语言实现的任何模型都一样, 但是分类变量对不同语言实现的不同模型则不相同. 比如R语言使用factor来处理分类变量, 可以适用于任何的模型. 而python则需要先将变量进行标签编码.",-1),u=e("p",null,"onehot编码对绝大大数模型来说, 都可以提升效果. 但是对树模型则不然.",-1),g={href:"https://www.kaggle.com/c/kobe-bryant-shot-selection/data",target:"_blank",rel:"noopener noreferrer"},b=l('<p>在树模型中, 分裂算法会考虑所有特征, 以及每个特征的分裂点, 来降低节点的不纯度.</p><p>当特征的分裂点较多时, 树一般会朝着两个方向增长: <img src="'+c+'" alt="alt text" loading="lazy"></p><p>当特征的分裂点变少时, 树一般会在一个方向上增长:</p><figure><img src="'+_+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><p>onehot编码后, 一个特征将只含有两个值(1,0)</p><p>另外, 在one-hot编码后的特征分裂后所获取的增益也是很小的.</p><p>在进行特征重要程度展示时, 也变得不好解释 在进行树模型展示时, 也不好解释 在分裂多个特征计算成本也增加了</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://towardsdatascience.com/one-hot-encoding-is-making-your-tree-based-ensembles-worse-heres-why-d64b282b5769</li></ol>',9);function x(k,w){const o=n("ExternalLinkIcon");return s(),r("div",null,[h,p,f,m,u,e("p",null,[t("使用"),e("a",g,[t("shot selection data"),i(o)]),t("数据集来进行验证.使用onehot编码相比ordinal编码效果变差了.")]),b])}const V=a(d,[["render",x],["__file","3_2_1特征编码_树模型.html.vue"]]);export{V as default};
