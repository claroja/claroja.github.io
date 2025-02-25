import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as d,o as i,c as s,b as e,d as o,e as t,w as r,a as n}from"./app-nD1Z-e8V.js";const h={},p=n('<h1 id="pandoc基础" tabindex="-1"><a class="header-anchor" href="#pandoc基础" aria-hidden="true">#</a> pandoc基础</h1><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><h3 id="概览" tabindex="-1"><a class="header-anchor" href="#概览" aria-hidden="true">#</a> 概览</h3><ul><li><code>.md</code>转<code>.docx</code>: <code>pandoc .\\text.md -o .\\test.docx --toc</code><ol><li>自动生成文章顶部的目录, 且可以在<code>视图 -&gt; 导航窗格</code>看侧边目录</li></ol></li><li><code>.md</code>转<code>.pptx</code>: <code>pandoc .\\text.md -o .\\test.pptx --slide-level=2</code><ol><li>生成后, 可以用自定义的PPT的主题样式美化</li><li>发现bug, 无法再一张ppt内展示个图片</li></ol></li><li><code>.md</code>转<code>.html</code>: <code>pandoc .\\test.md -o .\\test.html -s --toc</code></li><li><code>.md</code>转<code>.pdf</code>: <code>pandoc --pdf-engine=wkhtmltopdf test.md -o test.pdf</code><ol><li>生成一个带侧边栏的pdf</li><li><code>wkhtmltopdf</code>使用<code>scoop</code>来安装</li><li>不需要侧边栏, 可直接使用<code>pandoc test.md -o test.pdf</code></li></ol></li></ul><h3 id="比较" tabindex="-1"><a class="header-anchor" href="#比较" aria-hidden="true">#</a> 比较</h3>',5),u=e("code",null,"html",-1),_=e("code",null,"html",-1),f=e("code",null,"docx",-1),m=e("code",null,"pandoc",-1),x=e("code",null,"html",-1),g=e("li",null,[o("次之是生成"),e("code",null,"docx"),o(", 要考虑转发后的格式问题, 以及有没有装office")],-1),k=e("li",null,[o("再次之是"),e("code",null,"pdf"),o("和"),e("code",null,"ppt"),o("虽然可以生成侧边栏, 但是不能展示动图")],-1),b=e("h2",{id:"参数",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参数","aria-hidden":"true"},"#"),o(" 参数")],-1),v={href:"https://pandoc.org/MANUAL.html#structuring-the-slide-show",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"--slide-level",-1),A=e("code",null,"--slide-level=1",-1),E=e("code",null,"1级标题#",-1),L=e("code",null,"2级标题##",-1),N=e("code",null,"pandoc .\\text.md -o .\\test.pptx --slide-level=2",-1),B={href:"https://pandoc.org/MANUAL.html#option--standalone",target:"_blank",rel:"noopener noreferrer"},M=e("code",null,"-s, --standalone",-1),U=e("code",null,"true",-1),C={href:"https://pandoc.org/MANUAL.html#option--toc%5B",target:"_blank",rel:"noopener noreferrer"},P=e("ol",null,[e("li",null,[o("该命令需要配合"),e("code",null,"-s"),o("才能生效, 即"),e("code",null,"-s --toc"),o(" 默认为"),e("code",null,"false"),o(", 在文章头部根据"),e("code",null,"#"),o("生成"),e("code",null,"head"),o(".")])],-1),V=n('<h2 id="命令行说明" tabindex="-1"><a class="header-anchor" href="#命令行说明" aria-hidden="true">#</a> 命令行说明</h2><p><code>pandoc input.txt -f markdown -t latex -o output.tex</code></p><p>指定转换格式:</p><ul><li>实参: 需要处理的文档</li><li>选项1: <code>-f/--from</code>指定输入类型</li><li>选项2: <code>-t/--to</code>指定输出类型</li><li>选项3: <code>-o</code>指定输出路径</li></ul><p>如果没有指明类型选项, 将会根据后缀决定:</p><p><code>pandoc input.txt -o output.tex</code></p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',7),D={href:"https://pandoc.org/MANUAL.html",target:"_blank",rel:"noopener noreferrer"},I={href:"https://pandoc.org/MANUAL.html#general-options",target:"_blank",rel:"noopener noreferrer"},R=e("h2",{id:"翻译",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#翻译","aria-hidden":"true"},"#"),o(" 翻译")],-1),T=e("p",null,"option: 选项 parameter: 形参, 方法定义中声明的变量 argument: 实参, 传给方法的实际数据",-1);function j(S,q){const c=d("RouterLink"),l=d("ExternalLinkIcon");return i(),s("div",null,[p,e("ol",null,[e("li",null,[o("最佳的实践是生成带侧边栏的"),u,o(", 因为"),_,o("可以展示动图(gif), 也不会因为格式产生排版问题"),f,o(", 再者每个电脑都有浏览器, 但未必有office. "),e("ol",null,[e("li",null,[o("使用vscode的"),t(c,{to:"/17%E5%86%99%E4%BD%9C/1%E7%BC%96%E8%BE%91%E5%99%A8/1vscode/MarkdownPreviewEnhanced.html"},{default:r(()=>[o("markdownPreviewEnhanced")]),_:1}),o("来生成, 暂未找到"),m,o("生成带车边栏"),x,o("的方法")])])]),g,k]),b,e("ul",null,[e("li",null,[e("p",null,[e("a",v,[w,t(l)]),o(" 设置ppt幻灯片的分隔等级, 默认"),A,o("也就是说以"),E,o("进行分割. 但根据MarkDown的规范, 1级标题是文章的标题, "),L,o("分割才比较合适. 🍐: "),N])]),e("li",null,[e("p",null,[e("a",B,[M,t(l)]),o(" 默认为"),U,o(", 将asset资源整合在文件中, 例如, 将css, js整合在html文件中")])]),e("li",null,[e("p",null,[e("a",C,[o("--toc[=true|false], --table-of-contents[=true|false]"),t(l)])]),P])]),V,e("ul",null,[e("li",null,[e("a",D,[o("user guide"),t(l)])]),e("li",null,[e("a",I,[o("options"),t(l)])])]),R,T])}const F=a(h,[["render",j],["__file","1基础.html.vue"]]);export{F as default};
