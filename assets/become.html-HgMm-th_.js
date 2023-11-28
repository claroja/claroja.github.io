const n=JSON.parse('{"key":"v-d7298210","path":"/%E5%BD%B1%E9%9F%B3%E5%88%B6%E4%BD%9C/manim-mobject/become.html","title":"become","lang":"zh-CN","frontmatter":{"description":"become 将一个VMobject对象转换为另一VMobject对象 from manim import * class BecomeScene(Scene): def construct(self): vmo = VMobject() circ = Circle(fill_color=RED, fill_opacity=0.8) square = Square(fill_color=BLUE, fill_opacity=0.2) self.add(vmo) self.wait(0.5) vmo.become(circ) self.wait(0.5) circ.become(square) self.wait(0.5)","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E5%BD%B1%E9%9F%B3%E5%88%B6%E4%BD%9C/manim-mobject/become.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"become"}],["meta",{"property":"og:description","content":"become 将一个VMobject对象转换为另一VMobject对象 from manim import * class BecomeScene(Scene): def construct(self): vmo = VMobject() circ = Circle(fill_color=RED, fill_opacity=0.8) square = Square(fill_color=BLUE, fill_opacity=0.2) self.add(vmo) self.wait(0.5) vmo.become(circ) self.wait(0.5) circ.become(square) self.wait(0.5)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-28T13:15:02.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-28T13:15:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"become\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-28T13:15:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1701177302000,"updatedTime":1701177302000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.19,"words":58},"filePathRelative":"影音制作/manim-mobject/become.md","localizedDate":"2023年11月28日","excerpt":"<h1> become</h1>\\n<p>将一个<code>VMobject</code>对象转换为另一<code>VMobject</code>对象</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">from</span> manim <span class=\\"token keyword\\">import</span> <span class=\\"token operator\\">*</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">BecomeScene</span><span class=\\"token punctuation\\">(</span>Scene<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">construct</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        vmo <span class=\\"token operator\\">=</span> VMobject<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n        circ <span class=\\"token operator\\">=</span> Circle<span class=\\"token punctuation\\">(</span>fill_color<span class=\\"token operator\\">=</span>RED<span class=\\"token punctuation\\">,</span> fill_opacity<span class=\\"token operator\\">=</span><span class=\\"token number\\">0.8</span><span class=\\"token punctuation\\">)</span>\\n        square <span class=\\"token operator\\">=</span> Square<span class=\\"token punctuation\\">(</span>fill_color<span class=\\"token operator\\">=</span>BLUE<span class=\\"token punctuation\\">,</span> fill_opacity<span class=\\"token operator\\">=</span><span class=\\"token number\\">0.2</span><span class=\\"token punctuation\\">)</span>\\n        \\n        self<span class=\\"token punctuation\\">.</span>add<span class=\\"token punctuation\\">(</span>vmo<span class=\\"token punctuation\\">)</span>\\n        self<span class=\\"token punctuation\\">.</span>wait<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0.5</span><span class=\\"token punctuation\\">)</span>\\n        vmo<span class=\\"token punctuation\\">.</span>become<span class=\\"token punctuation\\">(</span>circ<span class=\\"token punctuation\\">)</span>\\n        self<span class=\\"token punctuation\\">.</span>wait<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0.5</span><span class=\\"token punctuation\\">)</span>\\n        circ<span class=\\"token punctuation\\">.</span>become<span class=\\"token punctuation\\">(</span>square<span class=\\"token punctuation\\">)</span>\\n        self<span class=\\"token punctuation\\">.</span>wait<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0.5</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};
