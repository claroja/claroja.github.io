import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as l,b as n,d as s,e as p,a as e}from"./app-nD1Z-e8V.js";const i="/assets/1-4xd1QgIl.png",u="/assets/2-La4SnsEF.png",r="/assets/5-XJ1hcSBq.png",d="/assets/9-UCasZrCv.png",k="/assets/3-94JWRXoa.png",m="/assets/4-JUuTwcIp.png",v="/assets/6-I6NASXiv.png",b="/assets/8-Nhzd9Il8.png",g={},h=e(`<h1 id="axes" tabindex="-1"><a class="header-anchor" href="#axes" aria-hidden="true">#</a> Axes</h1><p><code>Axes</code>继承了<code>CoordinateSystem</code>所以在查API时要结合二者来看.</p><h2 id="简单绘制" tabindex="-1"><a class="header-anchor" href="#简单绘制" aria-hidden="true">#</a> 简单绘制</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> manim <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">class</span> <span class="token class-name">CoorExample</span><span class="token punctuation">(</span>Scene<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">construct</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># defines the axes and linear function</span>
        axes <span class="token operator">=</span> Axes<span class="token punctuation">(</span>
            x_range<span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
            y_range<span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
            x_length<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">,</span> 
            y_length<span class="token operator">=</span><span class="token number">6</span>
            <span class="token punctuation">)</span>
        line <span class="token operator">=</span> axes<span class="token punctuation">.</span>plot<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">,</span> color<span class="token operator">=</span>BLUE<span class="token punctuation">)</span>
        <span class="token comment"># creates the T_label</span>
        self<span class="token punctuation">.</span>add<span class="token punctuation">(</span>axes<span class="token punctuation">,</span> line <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="坐标轴相关" tabindex="-1"><a class="header-anchor" href="#坐标轴相关" aria-hidden="true">#</a> 坐标轴相关</h2><h3 id="添加坐标刻度" tabindex="-1"><a class="header-anchor" href="#添加坐标刻度" aria-hidden="true">#</a> 添加坐标刻度</h3><p><code>add_coordinates()</code>可以给坐标轴添加刻度label</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> manim <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">class</span> <span class="token class-name">CoorExample</span><span class="token punctuation">(</span>Scene<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">construct</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># defines the axes and linear function</span>
        axes <span class="token operator">=</span> Axes<span class="token punctuation">(</span>
            x_range<span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
            y_range<span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
            x_length<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">,</span> 
            y_length<span class="token operator">=</span><span class="token number">6</span>
            <span class="token punctuation">)</span><span class="token punctuation">.</span>add_coordinates<span class="token punctuation">(</span><span class="token punctuation">)</span>
        line <span class="token operator">=</span> axes<span class="token punctuation">.</span>plot<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">,</span> color<span class="token operator">=</span>BLUE<span class="token punctuation">)</span>
        <span class="token comment"># creates the T_label</span>
        self<span class="token punctuation">.</span>add<span class="token punctuation">(</span>axes<span class="token punctuation">,</span> line <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="给坐标轴添加标签" tabindex="-1"><a class="header-anchor" href="#给坐标轴添加标签" aria-hidden="true">#</a> 给坐标轴添加标签</h3><p><code>get_axis_labels()</code>获得x,y轴 <code>get_x_axis_label()</code>仅获得x轴 <code>get_y_axis_label()</code>仅获得y轴</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> manim <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">class</span> <span class="token class-name">TLabelExample</span><span class="token punctuation">(</span>Scene<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">construct</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># defines the axes and linear linetion</span>
        axes <span class="token operator">=</span> Axes<span class="token punctuation">(</span>
            x_range<span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
            y_range<span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
            x_length<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">,</span> 
            y_length<span class="token operator">=</span><span class="token number">6</span>
            <span class="token punctuation">)</span>
        labels <span class="token operator">=</span> axes<span class="token punctuation">.</span>get_axis_labels<span class="token punctuation">(</span>
            Tex<span class="token punctuation">(</span><span class="token string">&quot;x-axis&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>scale<span class="token punctuation">(</span><span class="token number">0.7</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Text<span class="token punctuation">(</span><span class="token string">&quot;y-axis&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>scale<span class="token punctuation">(</span><span class="token number">0.45</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>add<span class="token punctuation">(</span>axes<span class="token punctuation">,</span> labels<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="改变坐标标度" tabindex="-1"><a class="header-anchor" href="#改变坐标标度" aria-hidden="true">#</a> 改变坐标标度</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> manim <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">class</span> <span class="token class-name">LogScalingExample</span><span class="token punctuation">(</span>Scene<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">construct</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        ax <span class="token operator">=</span> Axes<span class="token punctuation">(</span>
            x_range<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            y_range<span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            tips<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>
            axis_config<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;include_numbers&quot;</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            y_axis_config<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;scaling&quot;</span><span class="token punctuation">:</span> LogBase<span class="token punctuation">(</span>custom_labels<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span>  <span class="token comment"># 创建坐标系</span>

        <span class="token comment"># x_min must be &gt; 0 because log is undefined at 0.</span>
        graph <span class="token operator">=</span> ax<span class="token punctuation">.</span>plot<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">,</span> x_range<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">0.001</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> use_smoothing<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>add<span class="token punctuation">(</span>ax<span class="token punctuation">,</span> graph<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',17),x=n("code",null,"axis_config",-1),_=n("code",null,"y_axis_config",-1),f={href:"https://docs.manim.community/en/stable/reference/manim.mobject.graphing.number_line.NumberLine.html#manim.mobject.graphing.number_line.NumberLine",target:"_blank",rel:"noopener noreferrer"},y=e(`<h2 id="曲线相关" tabindex="-1"><a class="header-anchor" href="#曲线相关" aria-hidden="true">#</a> 曲线相关</h2><h3 id="绘制点的垂直线" tabindex="-1"><a class="header-anchor" href="#绘制点的垂直线" aria-hidden="true">#</a> 绘制点的垂直线</h3><p><code>get_T_label()</code>可以方便绘制点的垂直线</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> manim <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">class</span> <span class="token class-name">TLabelExample</span><span class="token punctuation">(</span>Scene<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">construct</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># defines the axes and linear linetion</span>
        axes <span class="token operator">=</span> Axes<span class="token punctuation">(</span>
            x_range<span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
            y_range<span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
            x_length<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">,</span> 
            y_length<span class="token operator">=</span><span class="token number">6</span>
            <span class="token punctuation">)</span>
        line <span class="token operator">=</span> axes<span class="token punctuation">.</span>plot<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">,</span> color<span class="token operator">=</span>BLUE<span class="token punctuation">)</span>
        <span class="token comment"># creates the T_label</span>
        t_label <span class="token operator">=</span> axes<span class="token punctuation">.</span>get_T_label<span class="token punctuation">(</span>x_val<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">,</span> graph<span class="token operator">=</span>line<span class="token punctuation">,</span> label<span class="token operator">=</span>Tex<span class="token punctuation">(</span><span class="token string">&quot;x-value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>add<span class="token punctuation">(</span>axes<span class="token punctuation">,</span> line<span class="token punctuation">,</span> t_label<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="绘制曲线面积" tabindex="-1"><a class="header-anchor" href="#绘制曲线面积" aria-hidden="true">#</a> 绘制曲线面积</h3><p><code>get_area</code>可以获得曲线和坐标轴之间的面积</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> manim <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">class</span> <span class="token class-name">TLabelExample</span><span class="token punctuation">(</span>Scene<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">construct</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># defines the axes and linear linetion</span>
        axes <span class="token operator">=</span> Axes<span class="token punctuation">(</span>
            x_range<span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
            y_range<span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
            x_length<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">,</span> 
            y_length<span class="token operator">=</span><span class="token number">6</span>
            <span class="token punctuation">)</span>
        line <span class="token operator">=</span> axes<span class="token punctuation">.</span>plot<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">,</span> color<span class="token operator">=</span>BLUE<span class="token punctuation">)</span>
        <span class="token comment"># creates the T_label</span>
        area <span class="token operator">=</span> axes<span class="token punctuation">.</span>get_area<span class="token punctuation">(</span>
            line<span class="token punctuation">,</span>
            x_range<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            color<span class="token operator">=</span><span class="token punctuation">(</span>GREEN_B<span class="token punctuation">,</span> GREEN_D<span class="token punctuation">)</span><span class="token punctuation">,</span>
            opacity<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>add<span class="token punctuation">(</span>axes<span class="token punctuation">,</span> line<span class="token punctuation">,</span> area<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="给曲线添加标签" tabindex="-1"><a class="header-anchor" href="#给曲线添加标签" aria-hidden="true">#</a> 给曲线添加标签</h3><p><code>get_graph_label()</code>可以获得曲线的标签</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> manim <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">class</span> <span class="token class-name">TLabelExample</span><span class="token punctuation">(</span>Scene<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">construct</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># defines the axes and linear linetion</span>
        axes <span class="token operator">=</span> Axes<span class="token punctuation">(</span>
            x_range<span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
            y_range<span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
            x_length<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">,</span> 
            y_length<span class="token operator">=</span><span class="token number">6</span>
            <span class="token punctuation">)</span>

        line <span class="token operator">=</span> axes<span class="token punctuation">.</span>plot<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">,</span> color<span class="token operator">=</span>BLUE<span class="token punctuation">)</span>
        label <span class="token operator">=</span> axes<span class="token punctuation">.</span>get_graph_label<span class="token punctuation">(</span>
            graph<span class="token operator">=</span>line<span class="token punctuation">,</span>
            label<span class="token operator">=</span> MathTex<span class="token punctuation">(</span><span class="token string">r&quot;3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            x_val<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span>
            dot<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
            direction<span class="token operator">=</span>UR<span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>add<span class="token punctuation">(</span>axes<span class="token punctuation">,</span>line<span class="token punctuation">,</span> label<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="获得水平或垂直线" tabindex="-1"><a class="header-anchor" href="#获得水平或垂直线" aria-hidden="true">#</a> 获得水平或垂直线</h3><p><code>get_horizontal_line()</code>水平线 <code>get_vertical_line()</code>垂直线</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> manim <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">class</span> <span class="token class-name">GetHorizontalLineExample</span><span class="token punctuation">(</span>Scene<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">construct</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        ax <span class="token operator">=</span> Axes<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>add_coordinates<span class="token punctuation">(</span><span class="token punctuation">)</span>
        point <span class="token operator">=</span> ax<span class="token punctuation">.</span>c2p<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1.5</span><span class="token punctuation">)</span>

        dot <span class="token operator">=</span> Dot<span class="token punctuation">(</span>point<span class="token punctuation">)</span>
        line <span class="token operator">=</span> ax<span class="token punctuation">.</span>get_horizontal_line<span class="token punctuation">(</span>point<span class="token punctuation">,</span> line_func<span class="token operator">=</span>Line<span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>add<span class="token punctuation">(</span>ax<span class="token punctuation">,</span> line<span class="token punctuation">,</span> dot<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="同时获得水平线和垂直线" tabindex="-1"><a class="header-anchor" href="#同时获得水平线和垂直线" aria-hidden="true">#</a> 同时获得水平线和垂直线</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> manim <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">class</span> <span class="token class-name">GetLinesToPointExample</span><span class="token punctuation">(</span>Scene<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">construct</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        ax <span class="token operator">=</span> Axes<span class="token punctuation">(</span><span class="token punctuation">)</span>
        circ <span class="token operator">=</span> Circle<span class="token punctuation">(</span>radius<span class="token operator">=</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">.</span>move_to<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1.5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

        lines_1 <span class="token operator">=</span> ax<span class="token punctuation">.</span>get_lines_to_point<span class="token punctuation">(</span>circ<span class="token punctuation">.</span>get_right<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> color<span class="token operator">=</span>GREEN_B<span class="token punctuation">)</span>
        lines_2 <span class="token operator">=</span> ax<span class="token punctuation">.</span>get_lines_to_point<span class="token punctuation">(</span>circ<span class="token punctuation">.</span>get_corner<span class="token punctuation">(</span>DL<span class="token punctuation">)</span><span class="token punctuation">,</span> color<span class="token operator">=</span>BLUE_B<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>add<span class="token punctuation">(</span>ax<span class="token punctuation">,</span> lines_1<span class="token punctuation">,</span> lines_2<span class="token punctuation">,</span> circ<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="坐标计算" tabindex="-1"><a class="header-anchor" href="#坐标计算" aria-hidden="true">#</a> 坐标计算</h2><p><code>input_to_graph_coords(x, graph)</code> 简写为<code>i2gc(x, graph)</code> 输入x获得y的coor坐标</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> manim <span class="token keyword">import</span> Axes
ax <span class="token operator">=</span> Axes<span class="token punctuation">(</span><span class="token punctuation">)</span>
parabola <span class="token operator">=</span> ax<span class="token punctuation">.</span>plot<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token operator">**</span><span class="token number">2</span><span class="token punctuation">)</span>
ax<span class="token punctuation">.</span>input_to_graph_coords<span class="token punctuation">(</span>x<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> graph<span class="token operator">=</span>parabola<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>input_to_graph_point(x, graph)</code> 简写为<code>i2gp</code> 输入x获得y的scene坐标</p><p><code>point_to_coords()</code> 简写为 <code>p2c(point)</code>, 将scene坐标转换为coor坐标 <code>coords_to_point(*coords)</code> 简写为 <code>c2p()</code>, 将coor坐标转换为point坐标</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> manim <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">class</span> <span class="token class-name">CoordsToPointExample</span><span class="token punctuation">(</span>Scene<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">construct</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        ax <span class="token operator">=</span> Axes<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>add_coordinates<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># a dot with respect to the axes</span>
        dot_axes <span class="token operator">=</span> Dot<span class="token punctuation">(</span>ax<span class="token punctuation">.</span>coords_to_point<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> color<span class="token operator">=</span>GREEN<span class="token punctuation">)</span>  <span class="token comment"># 将坐标系的(2,2)点转换为scene中点</span>
        lines <span class="token operator">=</span> ax<span class="token punctuation">.</span>get_lines_to_point<span class="token punctuation">(</span>ax<span class="token punctuation">.</span>c2p<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        plane <span class="token operator">=</span> NumberPlane<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># the default plane corresponds to the coordinates of the scene.</span>
        dot_scene <span class="token operator">=</span> Dot<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> color<span class="token operator">=</span>RED<span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>add<span class="token punctuation">(</span>plane<span class="token punctuation">,</span> dot_scene<span class="token punctuation">,</span> ax<span class="token punctuation">,</span> dot_axes<span class="token punctuation">,</span> lines<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="plot" tabindex="-1"><a class="header-anchor" href="#plot" aria-hidden="true">#</a> plot</h2>`,26),w={href:"https://docs.manim.community/en/stable/reference/manim.mobject.graphing.coordinate_systems.CoordinateSystem.html#manim.mobject.graphing.coordinate_systems.CoordinateSystem.plot",target:"_blank",rel:"noopener noreferrer"},E=n("p",null,"参考: https://docs.manim.community/en/stable/reference/manim.mobject.graphing.coordinate_systems.Axes.html 参考: https://docs.manim.community/en/stable/reference/manim.mobject.graphing.coordinate_systems.CoordinateSystem.html",-1);function L(T,A){const a=o("ExternalLinkIcon");return c(),l("div",null,[h,n("p",null,[x,s("和"),_,s("配置项可以参考"),n("a",f,[s("NumberLine"),p(a)])]),y,n("p",null,[n("a",w,[s("plot"),p(a)])]),E])}const N=t(g,[["render",L],["__file","Axes.html.vue"]]);export{N as default};
