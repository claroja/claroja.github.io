import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as l,c as n,a as t,b as d,d as o,e as a}from"./app-qxiCM96p.js";const h={},s=a('<h1 id="selector" tabindex="-1"><a class="header-anchor" href="#selector" aria-hidden="true">#</a> Selector</h1><h2 id="类型选择器" tabindex="-1"><a class="header-anchor" href="#类型选择器" aria-hidden="true">#</a> 类型选择器</h2><p>选择某一类element</p><table><thead><tr><th>语法</th><th>表示</th><th>例子</th></tr></thead><tbody><tr><td><code>*</code></td><td>any element</td><td><code>*#myid</code>等价<code>#myid</code>, 后面的写法就是常说的CSS选择器</td></tr><tr><td><code>E</code></td><td>类型为E的element</td><td><code>h1</code>, 就是<code>&lt;h1&gt;</code>标签, CSS选择器中一般不带</td></tr></tbody></table><h2 id="属性选择器" tabindex="-1"><a class="header-anchor" href="#属性选择器" aria-hidden="true">#</a> 属性选择器</h2><p>根据element的attribute来选择</p><table><thead><tr><th>语法</th><th>表示</th><th>例子</th></tr></thead><tbody><tr><td><code>E.warning</code></td><td>class为<code>warning</code></td><td></td></tr><tr><td><code>E#myid</code></td><td>id为<code>myid</code></td><td></td></tr><tr><td><code>E[foo]</code></td><td>含有<code>foo</code>属性</td><td></td></tr><tr><td><code>E[foo=&quot;bar&quot;]</code></td><td><code>foo</code>属性为<code>bar</code></td><td></td></tr><tr><td><code>E[foo=&quot;bar&quot; i]</code></td><td>大小写不敏感</td><td></td></tr><tr><td><code>E[foo=&quot;bar&quot; s]</code></td><td>大小写敏感</td><td></td></tr><tr><td><code>E[foo~=&quot;bar&quot;]</code></td><td><code>foo</code>属性包含空格, 按空格分割后包含<code>bar</code></td><td></td></tr><tr><td><code>E[foo^=&quot;bar&quot;]</code></td><td><code>foo</code>属性以<code>bar</code>开头</td><td></td></tr><tr><td><code>E[foo$=&quot;bar&quot;]</code></td><td><code>foo</code>属性以<code>bar</code>结尾</td><td></td></tr><tr><td><code>E[foo*=&quot;bar&quot;]</code></td><td><code>foo</code>属性包含<code>bar</code></td><td></td></tr><tr><td>`E[foo</td><td>=&quot;en&quot;]`</td><td>不理解</td></tr><tr><td><code>span[hello=&quot;Cleveland&quot;][goodbye=&quot;Columbus&quot;]</code>多个属性条件的写法</td><td></td><td></td></tr></tbody></table><h2 id="tree" tabindex="-1"><a class="header-anchor" href="#tree" aria-hidden="true">#</a> tree</h2><p>根据DOM Tree结构来选择</p><table><thead><tr><th>语法</th><th>表示</th><th>例子</th></tr></thead><tbody><tr><td><code>F E</code></td><td>E是F的后代,孩子,孙子都可</td><td><code>h1 em</code> <code>&lt;h1&gt;</code>标签下的<code>&lt;em&gt;</code>标签, <code>&lt;em&gt;</code>可能是子, 也可能是孙</td></tr><tr><td><code>F &gt; E</code></td><td>E是F的孩子</td><td><code>body &gt; p</code></td></tr><tr><td><code>F + E</code></td><td>E在F后面, 紧随</td><td></td></tr><tr><td><code>F ~ E</code></td><td>E在F后面, 任意位置</td><td></td></tr><tr><td><code>E:first-child</code></td><td>第一个孩子</td><td><code>div &gt; p:first-child</code>, <code>&lt;div&gt;</code>下面的第一个<code>&lt;p&gt;</code></td></tr><tr><td><code>E:last-child</code></td><td>最后一个孩子</td><td></td></tr><tr><td><code>E:only-child</code></td><td>只有一个孩子</td><td></td></tr><tr><td><code>E:nth-child(n [of S]?)</code></td><td>选择指定位位置的子元素</td><td><code>:nth-child(even)</code>偶数,<code>:nth-child(10n-1)</code>9,19等等</td></tr><tr><td><code>E:nth-last-child(n [of S]?)</code></td><td>和上面的相反</td><td></td></tr></tbody></table><h2 id="逻辑选择器" tabindex="-1"><a class="header-anchor" href="#逻辑选择器" aria-hidden="true">#</a> 逻辑选择器</h2><p>判断是否是某一类型</p>',12),i=t("thead",null,[t("tr",null,[t("th",null,"语法"),t("th",null,"表示"),t("th",null,"例子")])],-1),u=t("tr",null,[t("td",null,[t("code",null,"E:not(s1,s2,...)")]),t("td",null,[d("排除"),t("code",null,"s1"),d(","),t("code",null,"s2"),d("选择器标签")]),t("td",null,[t("code",null,"*:not(div, .fancy)"),d("除了"),t("code",null,"div"),d("和样式为"),t("code",null,".fancy"),d("的所有标签")])],-1),_=t("td",null,[t("code",null,"E:is(s1, s2, …)")],-1),f=t("td",null,[d("是"),t("code",null,"s1"),d(","),t("code",null,"s2"),d("的选择器标签")],-1),b={href:"https://www.cnblogs.com/bfgis/p/11928807.html",target:"_blank",rel:"noopener noreferrer"},E=t("td",null,[t("code",null,"E:where(s1, s2, …)")],-1),m=t("td",null,null,-1),p={href:"https://www.jiangweishan.com/article/htmlcss20220904.html",target:"_blank",rel:"noopener noreferrer"},g=t("td",null,[t("code",null,"E:has(rs1, rs2, …)")],-1),q=t("td",null,null,-1),y={href:"https://www.jiangweishan.com/article/htmlcss20220904.html",target:"_blank",rel:"noopener noreferrer"},w=t("h2",{id:"其他",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#其他","aria-hidden":"true"},"#"),d(" 其他")],-1),x={href:"https://drafts.csswg.org/selectors/",target:"_blank",rel:"noopener noreferrer"};function S(v,k){const e=r("ExternalLinkIcon");return l(),n("div",null,[s,t("table",null,[i,t("tbody",null,[u,t("tr",null,[_,f,t("td",null,[t("a",b,[d("参考"),o(e)])])]),t("tr",null,[E,m,t("td",null,[t("a",p,[d("参考"),o(e)])])]),t("tr",null,[g,q,t("td",null,[t("a",y,[d("参考"),o(e)])])])])]),w,t("p",null,[d("还有其他不常用的, 需要时查找"),t("a",x,[d("官网"),o(e)])])])}const N=c(h,[["render",S],["__file","Selector.html.vue"]]);export{N as default};
