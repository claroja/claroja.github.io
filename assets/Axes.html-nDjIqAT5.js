const n=JSON.parse('{"key":"v-76182dba","path":"/%E5%BD%B1%E9%9F%B3%E5%88%B6%E4%BD%9C/manim-mobject/Axes.html","title":"Axes","lang":"zh-CN","frontmatter":{"description":"Axes Axes继承了CoordinateSystem所以在查API时要结合二者来看. 简单绘制 from manim import * class CoorExample(Scene): def construct(self): # defines the axes and linear function axes = Axes( x_range=[-1, 10], y_range=[-1, 10], x_length=6, y_length=6 ) line = axes.plot(lambda x: x, color=BLUE) # creates the T_label self.add(axes, line )","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E5%BD%B1%E9%9F%B3%E5%88%B6%E4%BD%9C/manim-mobject/Axes.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"Axes"}],["meta",{"property":"og:description","content":"Axes Axes继承了CoordinateSystem所以在查API时要结合二者来看. 简单绘制 from manim import * class CoorExample(Scene): def construct(self): # defines the axes and linear function axes = Axes( x_range=[-1, 10], y_range=[-1, 10], x_length=6, y_length=6 ) line = axes.plot(lambda x: x, color=BLUE) # creates the T_label self.add(axes, line )"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-28T13:15:02.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Axes"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-28T13:15:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Axes\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2023-11-28T13:15:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"简单绘制","slug":"简单绘制","link":"#简单绘制","children":[]},{"level":2,"title":"坐标轴相关","slug":"坐标轴相关","link":"#坐标轴相关","children":[{"level":3,"title":"添加坐标刻度","slug":"添加坐标刻度","link":"#添加坐标刻度","children":[]},{"level":3,"title":"给坐标轴添加标签","slug":"给坐标轴添加标签","link":"#给坐标轴添加标签","children":[]},{"level":3,"title":"改变坐标标度","slug":"改变坐标标度","link":"#改变坐标标度","children":[]}]},{"level":2,"title":"曲线相关","slug":"曲线相关","link":"#曲线相关","children":[{"level":3,"title":"绘制点的垂直线","slug":"绘制点的垂直线","link":"#绘制点的垂直线","children":[]},{"level":3,"title":"绘制曲线面积","slug":"绘制曲线面积","link":"#绘制曲线面积","children":[]},{"level":3,"title":"给曲线添加标签","slug":"给曲线添加标签","link":"#给曲线添加标签","children":[]},{"level":3,"title":"获得水平或垂直线","slug":"获得水平或垂直线","link":"#获得水平或垂直线","children":[]},{"level":3,"title":"同时获得水平线和垂直线","slug":"同时获得水平线和垂直线","link":"#同时获得水平线和垂直线","children":[]}]},{"level":2,"title":"坐标计算","slug":"坐标计算","link":"#坐标计算","children":[]},{"level":2,"title":"plot","slug":"plot","link":"#plot","children":[]}],"git":{"createdTime":1701177302000,"updatedTime":1701177302000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":2.57,"words":772},"filePathRelative":"影音制作/manim-mobject/Axes.md","localizedDate":"2023年11月28日","excerpt":"<h1> Axes</h1>\\n<p><code>Axes</code>继承了<code>CoordinateSystem</code>所以在查API时要结合二者来看.</p>\\n<h2> 简单绘制</h2>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">from</span> manim <span class=\\"token keyword\\">import</span> <span class=\\"token operator\\">*</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">CoorExample</span><span class=\\"token punctuation\\">(</span>Scene<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">construct</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token comment\\"># defines the axes and linear function</span>\\n        axes <span class=\\"token operator\\">=</span> Axes<span class=\\"token punctuation\\">(</span>\\n            x_range<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">[</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> \\n            y_range<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">[</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> \\n            x_length<span class=\\"token operator\\">=</span><span class=\\"token number\\">6</span><span class=\\"token punctuation\\">,</span> \\n            y_length<span class=\\"token operator\\">=</span><span class=\\"token number\\">6</span>\\n            <span class=\\"token punctuation\\">)</span>\\n        line <span class=\\"token operator\\">=</span> axes<span class=\\"token punctuation\\">.</span>plot<span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">lambda</span> x<span class=\\"token punctuation\\">:</span> x<span class=\\"token punctuation\\">,</span> color<span class=\\"token operator\\">=</span>BLUE<span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token comment\\"># creates the T_label</span>\\n        self<span class=\\"token punctuation\\">.</span>add<span class=\\"token punctuation\\">(</span>axes<span class=\\"token punctuation\\">,</span> line <span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};