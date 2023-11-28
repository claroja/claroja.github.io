import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as c,c as o,a as p,b as n,d as i,w as l,e as s}from"./app-yeyEmHfz.js";const d="/assets/1-16ZT-WaV.png",u="/assets/2-yGqNZvt4.png",r="/assets/3-NMf2Nhma.png",k="/assets/4-Z4BgrbGW.gif",m="/assets/5-WnfSgZdG.gif",v={},b=s(`<h1 id="singlabelclassification" tabindex="-1"><a class="header-anchor" href="#singlabelclassification" aria-hidden="true">#</a> singlabelClassification</h1><h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2><p>在<code>manim</code>中主要的概念有三个:</p><ol><li>scene场景, 所有的数学对象都在场景中展示</li><li>mobject数学对象, 比如circle圆圈, line线等</li><li>animation动画, 下面的代码演示了了<code>Create</code>动画</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> manim <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">class</span> <span class="token class-name">CreateCircle</span><span class="token punctuation">(</span>Scene<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 创建的对象要继承\`Scene\`</span>
    <span class="token keyword">def</span> <span class="token function">construct</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 在\`construct(self)\`方法中创建动画.</span>
        circle <span class="token operator">=</span> Circle<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 创建一个圆</span>
        circle<span class="token punctuation">.</span>set_fill<span class="token punctuation">(</span>PINK<span class="token punctuation">,</span> opacity<span class="token operator">=</span><span class="token number">0.5</span><span class="token punctuation">)</span>  <span class="token comment"># 设置圆的属性</span>
        self<span class="token punctuation">.</span>add<span class="token punctuation">(</span>circle<span class="token punctuation">)</span>  <span class="token comment"># 将circle添加到scene中</span>
        <span class="token comment"># self.play(Create(circle))  # 渲染创建圆的动画</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td><code>play()</code></td><td>创建一段动画, 需配合动画方法, 这里是<code>create</code></td></tr><tr><td><code>add()</code></td><td>将mobject添加到scene中</td></tr></tbody></table><p>在命令行中输入以下代码, 就可以生成相应的动画了.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>manim <span class="token parameter variable">-pql</span> scene.py CreateCircle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-ql</code> specifies low render quality, <code>-qm</code>, <code>-qh</code>, and <code>-qk</code> for medium, high, and 4k quality The <code>-p</code> flag plays the animation once it is rendered</p>`,9),h=s(`<h2 id="mobject" tabindex="-1"><a class="header-anchor" href="#mobject" aria-hidden="true">#</a> mobject</h2><h3 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h3><p><code>mathematical object</code>表示可以在<code>scene</code>中展示的对象, 比如<code>Circle</code>,<code>Arrow</code>,<code>Rectangle</code>.</p><ol><li>需要调用<code>scene.add()</code>方法, 才能在<code>scene</code>中展示, 当不需要的时候可以调用<code>remove()</code>方法.</li><li>默认<code>mobject</code>会放在坐标系的中央</li></ol><p>下面的代码展示了向<code>scene</code>中添加一个<code>circle</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> manim <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">class</span> <span class="token class-name">CreatingMobjects</span><span class="token punctuation">(</span>Scene<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">construct</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        circle <span class="token operator">=</span> Circle<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>add<span class="token punctuation">(</span>circle<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>remove<span class="token punctuation">(</span>circle<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mobject常用方法" tabindex="-1"><a class="header-anchor" href="#mobject常用方法" aria-hidden="true">#</a> mobject常用方法</h3><ol><li><p>位置相关的方法</p><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td><code>shift()</code></td><td>相对之前的位置移动</td></tr><tr><td><code>move_to()</code></td><td>相对于ORIGIN(0,0)点, 绝对位置移动</td></tr><tr><td><code>next_to()</code></td><td>放在其他mobject的旁边, 第一个参数对象, 第二个参数是方位(UP,DOWN,LEFT,RIGHT)</td></tr><tr><td><code>align_to()</code></td><td>和其他的mobject对齐</td></tr><tr><td><code>set_xyz()</code></td><td>设置坐标</td></tr><tr><td><code>to_edge()</code></td><td>到屏幕边缘</td></tr><tr><td><code>set_z_index()</code></td><td>设置上下关系</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 使用shift进行相对位置变换, 默认所有图像都在scene中心, 使用shift进行相对的位置的移动</span>
<span class="token keyword">from</span> manim <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">class</span> <span class="token class-name">Shapes</span><span class="token punctuation">(</span>Scene<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">construct</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        circle <span class="token operator">=</span> Circle<span class="token punctuation">(</span><span class="token punctuation">)</span>
        square <span class="token operator">=</span> Square<span class="token punctuation">(</span><span class="token punctuation">)</span>
        triangle <span class="token operator">=</span> Triangle<span class="token punctuation">(</span><span class="token punctuation">)</span>

        circle<span class="token punctuation">.</span>shift<span class="token punctuation">(</span>LEFT<span class="token punctuation">)</span>
        square<span class="token punctuation">.</span>shift<span class="token punctuation">(</span>UP<span class="token punctuation">)</span>
        triangle<span class="token punctuation">.</span>shift<span class="token punctuation">(</span>RIGHT<span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>add<span class="token punctuation">(</span>circle<span class="token punctuation">,</span> square<span class="token punctuation">,</span> triangle<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 使用\`**_to\`方法改变两个对象的相对位置</span>
<span class="token keyword">from</span> manim <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">class</span> <span class="token class-name">MobjectPlacement</span><span class="token punctuation">(</span>Scene<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">construct</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        circle <span class="token operator">=</span> Circle<span class="token punctuation">(</span><span class="token punctuation">)</span>
        square <span class="token operator">=</span> Square<span class="token punctuation">(</span><span class="token punctuation">)</span>
        triangle <span class="token operator">=</span> Triangle<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># place the circle two units left from the origin</span>
        circle<span class="token punctuation">.</span>move_to<span class="token punctuation">(</span>LEFT <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token comment"># place the square to the left of the circle</span>
        square<span class="token punctuation">.</span>next_to<span class="token punctuation">(</span>circle<span class="token punctuation">,</span> LEFT<span class="token punctuation">)</span>
        <span class="token comment"># align the left border of the triangle to the left border of the circle</span>
        triangle<span class="token punctuation">.</span>align_to<span class="token punctuation">(</span>circle<span class="token punctuation">,</span> LEFT<span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>add<span class="token punctuation">(</span>circle<span class="token punctuation">,</span> square<span class="token punctuation">,</span> triangle<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>风格相关方法</p><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td><code>set_stroke()</code></td><td>设置边 适用于vmobject</td></tr><tr><td><code>set_fill()</code></td><td>静态填充 适用于vmobject</td></tr><tr><td><code>set_color()</code></td><td>适用于mobject</td></tr><tr><td><code>rotate()</code></td><td>静态旋转</td></tr><tr><td><code>scale()</code></td><td>方法和缩小倍数</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> manim <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">class</span> <span class="token class-name">MobjectStyling</span><span class="token punctuation">(</span>Scene<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">construct</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        circle <span class="token operator">=</span> Circle<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>shift<span class="token punctuation">(</span>LEFT<span class="token punctuation">)</span>
        square <span class="token operator">=</span> Square<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>shift<span class="token punctuation">(</span>UP<span class="token punctuation">)</span>
        triangle <span class="token operator">=</span> Triangle<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>shift<span class="token punctuation">(</span>RIGHT<span class="token punctuation">)</span>

        circle<span class="token punctuation">.</span>set_stroke<span class="token punctuation">(</span>color<span class="token operator">=</span>GREEN<span class="token punctuation">,</span> width<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">)</span>
        square<span class="token punctuation">.</span>set_fill<span class="token punctuation">(</span>YELLOW<span class="token punctuation">,</span> opacity<span class="token operator">=</span><span class="token number">1.0</span><span class="token punctuation">)</span>
        triangle<span class="token punctuation">.</span>set_fill<span class="token punctuation">(</span>PINK<span class="token punctuation">,</span> opacity<span class="token operator">=</span><span class="token number">0.5</span><span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>add<span class="token punctuation">(</span>circle<span class="token punctuation">,</span> square<span class="token punctuation">,</span> triangle<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>其他方法</p><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td><code>copy()</code></td><td>复制</td></tr><tr><td><code>flip()</code></td><td>转换和复制</td></tr><tr><td><code>get_bottom()</code></td><td>返回mobject的bottom坐标</td></tr><tr><td><code>get_center()</code></td><td>获得中心点</td></tr><tr><td><code>get_color()</code></td><td>获得颜色</td></tr><tr><td><code>get_coord()</code></td><td>get_x, get_y and get_z的组合</td></tr><tr><td><code>get_corner()</code></td><td>corner coordinates</td></tr><tr><td><code>get_end()</code></td><td></td></tr><tr><td><code>get_left()</code></td><td></td></tr><tr><td><code>get_midpoint()</code></td><td></td></tr><tr><td><code>get_right()</code></td><td></td></tr><tr><td><code>get_start()</code></td><td></td></tr><tr><td><code>get_top()</code></td><td></td></tr><tr><td><code>match_*()</code></td><td>复制另一个mobject的相关属性</td></tr><tr><td><code>restore()</code></td><td>获得之前通过<code>save_state()</code>保存的状态</td></tr><tr><td><code>save_state()</code></td><td></td></tr><tr><td><code>save_image()</code></td><td>保存mobject的图片</td></tr></tbody></table></li></ol><h2 id="animation" tabindex="-1"><a class="header-anchor" href="#animation" aria-hidden="true">#</a> animation</h2><p>要将animation对象放入<code>self.play()</code>中使用</p><h3 id="全局的动画" tabindex="-1"><a class="header-anchor" href="#全局的动画" aria-hidden="true">#</a> 全局的动画</h3><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td><code>Create()</code></td><td>创建一个mobject</td></tr><tr><td><code>Transform()</code></td><td>将两个mobject进行转换</td></tr><tr><td><code>ReplacementTransform</code>(square, circle)</td><td></td></tr><tr><td><code>FadeOut()</code></td><td>淡出</td></tr><tr><td><code>FadeIn()</code></td><td>淡入</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> manim <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">class</span> <span class="token class-name">SomeAnimations</span><span class="token punctuation">(</span>Scene<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">construct</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        square <span class="token operator">=</span> Square<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># some animations display mobjects, ...</span>
        self<span class="token punctuation">.</span>play<span class="token punctuation">(</span>FadeIn<span class="token punctuation">(</span>square<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token comment"># some animations remove mobjects from the screen</span>
        self<span class="token punctuation">.</span>play<span class="token punctuation">(</span>FadeOut<span class="token punctuation">(</span>square<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="mobject本身的animate" tabindex="-1"><a class="header-anchor" href="#mobject本身的animate" aria-hidden="true">#</a> mobject本身的animate</h3><p><code>square.set_fill(WHITE)</code>直接设置<code>square</code>的颜色, <code>square.animate.set_fill(WHITE)</code>则会将设置颜色的过程形成动画.</p><p><code>mobject.animate</code>可以放入<code>scene.play()</code>方法中, 来形成动画</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> manim <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">class</span> <span class="token class-name">AnimateExample</span><span class="token punctuation">(</span>Scene<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">construct</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        square <span class="token operator">=</span> Square<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>set_fill<span class="token punctuation">(</span>RED<span class="token punctuation">,</span> opacity<span class="token operator">=</span><span class="token number">1.0</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>add<span class="token punctuation">(</span>square<span class="token punctuation">)</span>
        <span class="token comment"># animate the change of color</span>
        self<span class="token punctuation">.</span>play<span class="token punctuation">(</span>square<span class="token punctuation">.</span>animate<span class="token punctuation">.</span>set_fill<span class="token punctuation">(</span>WHITE<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token comment"># animate the change of position and the rotation at the same time</span>
        self<span class="token punctuation">.</span>play<span class="token punctuation">(</span>square<span class="token punctuation">.</span>animate<span class="token punctuation">.</span>shift<span class="token punctuation">(</span>UP<span class="token punctuation">)</span><span class="token punctuation">.</span>rotate<span class="token punctuation">(</span>PI <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>参考: https://docs.manim.community/en/stable/tutorials/quickstart.html https://www.zhihu.com/column/c_1385733360715632640</p>',20);function f(g,y){const a=e("RouterLink");return c(),o("div",null,[b,p("p",null,[n("详细参考"),i(a,{to:"/manim_command/"},{default:l(()=>[n("manim_command")]),_:1})]),h])}const q=t(v,[["render",f],["__file","manim.html.vue"]]);export{q as default};
