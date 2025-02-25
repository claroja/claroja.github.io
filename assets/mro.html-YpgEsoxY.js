import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as p}from"./app-nD1Z-e8V.js";const t={},e=p(`<h1 id="mro" tabindex="-1"><a class="header-anchor" href="#mro" aria-hidden="true">#</a> mro</h1><p>MRO (Method Resolution order)，主要用来解决继承中歧义的消除</p><p>1.在python2.2之前，菱形继承的顺序是：left-to-right，depth-first</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>      <span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">:</span>
        <span class="token operator">^</span> <span class="token operator">^</span>  <span class="token keyword">def</span> <span class="token function">save</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
       <span class="token operator">/</span>   \\
      <span class="token operator">/</span>     \\
     <span class="token operator">/</span>       \\
    <span class="token operator">/</span>         \\
<span class="token keyword">class</span> <span class="token class-name">B</span>     <span class="token keyword">class</span> <span class="token class-name">C</span><span class="token punctuation">:</span>
    <span class="token operator">^</span>         <span class="token operator">^</span>  <span class="token keyword">def</span> <span class="token function">save</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
     \\       <span class="token operator">/</span>
      \\     <span class="token operator">/</span>
       \\   <span class="token operator">/</span>
        \\ <span class="token operator">/</span>
      <span class="token keyword">class</span> <span class="token class-name">D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上图：B和C都继承A，D继承B和C（所以D也继承了A）。 假设C重写了A中的<code>save()</code>方法，B和D没有重写<code>save()</code>。当我们在D的instance中调用<code>save()</code>方法时，直接通过通过B再到A，最终调用的是A中的<code>save()</code>方法，并没有调用C中的<code>save()</code>方法。 就是因为这个原因，python2.2之前很少有多继承。</p><ol start="2"><li></li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">m</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span> <span class="token string">&quot;B here&quot;</span>

<span class="token keyword">class</span> <span class="token class-name">C</span><span class="token punctuation">(</span>B<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">m</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span> <span class="token string">&quot;C here&quot;</span>
        B<span class="token punctuation">.</span>m<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码：我们说C的方法&quot;extends&quot;B的方法，在单继承中这种写法没问题，但是在多继承中（菱形继承）就会出现问题：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">class</span> <span class="token class-name">C</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">class</span> <span class="token class-name">D</span><span class="token punctuation">(</span>B<span class="token punctuation">,</span> C<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设A定义了方法m，B和C重写了A的方法m。D继承了BC，如果D使用m方法，则一般python仅仅获取第一个，这里使用B中的m方法。缺点就是忽视了C的m方法。比如，当我们想通过D来保存这个继承关系时，我们理论上是想保存ABCD四者，但是由于这种继承规则，只保存了ABD，而忽视了C。 <code>C++</code>注意到这个问题，于是就是让D分别继承BC，重写BC的m方法，但这就出现另一个问题，A的m方法被调用了2次。</p><p>为了，解决这问题，就是在各自类中，定义<code>_m</code>方法来存储自己的定义，<code>m</code>方法来做继承：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">m</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token string">&quot;save A&#39;s data&quot;</span>
<span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">_m</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token string">&quot;save B&#39;s data&quot;</span>
    <span class="token keyword">def</span> <span class="token function">m</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>  self<span class="token punctuation">.</span>_m<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> A<span class="token punctuation">.</span>m<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">C</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">_m</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token string">&quot;save C&#39;s data&quot;</span>
    <span class="token keyword">def</span> <span class="token function">m</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>  self<span class="token punctuation">.</span>_m<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> A<span class="token punctuation">.</span>m<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">D</span><span class="token punctuation">(</span>B<span class="token punctuation">,</span> C<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">_m</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token string">&quot;save D&#39;s data&quot;</span>
    <span class="token keyword">def</span> <span class="token function">m</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>  self<span class="token punctuation">.</span>_m<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> B<span class="token punctuation">.</span>_m<span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">;</span> C<span class="token punctuation">.</span>_m<span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">;</span> A<span class="token punctuation">.</span>m<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但这种方法，仍然有很多问题： 1、产生了太多的方法 2、让被继承的的方法丢在子类中，比如我们不想让BC继承A，则需要手动修改BCD的代码。</p><p>最终&quot;call-next-method&quot;模式解决了这个问题：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    <span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">m</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token string">&quot;save A&#39;s data&quot;</span>
    <span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">m</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token string">&quot;save B&#39;s data&quot;</span><span class="token punctuation">;</span> <span class="token builtin">super</span><span class="token punctuation">(</span>B<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>m<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">class</span> <span class="token class-name">C</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">m</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token string">&quot;save C&#39;s data&quot;</span><span class="token punctuation">;</span> <span class="token builtin">super</span><span class="token punctuation">(</span>C<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>m<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">class</span> <span class="token class-name">D</span><span class="token punctuation">(</span>B<span class="token punctuation">,</span> C<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">m</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token string">&quot;save D&#39;s data&quot;</span><span class="token punctuation">;</span> <span class="token builtin">super</span><span class="token punctuation">(</span>D<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>m<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意<code>super</code>的第一个参数是<code>class</code>自身，第二个参数是实例<code>self</code>，注意<code>self</code>没有在m方法中出现。 我们使用<code>__mro__</code>来描述这样的继承关系</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>A<span class="token punctuation">.</span>__mro__ <span class="token operator">==</span> <span class="token punctuation">(</span>A<span class="token punctuation">,</span> <span class="token builtin">object</span><span class="token punctuation">)</span>
B<span class="token punctuation">.</span>__mro__ <span class="token operator">==</span> <span class="token punctuation">(</span>B<span class="token punctuation">,</span> A<span class="token punctuation">,</span> <span class="token builtin">object</span><span class="token punctuation">)</span>
C<span class="token punctuation">.</span>__mro__ <span class="token operator">==</span> <span class="token punctuation">(</span>C<span class="token punctuation">,</span> A<span class="token punctuation">,</span> <span class="token builtin">object</span><span class="token punctuation">)</span>
D<span class="token punctuation">.</span>__mro__ <span class="token operator">==</span> <span class="token punctuation">(</span>D<span class="token punctuation">,</span> B<span class="token punctuation">,</span> C<span class="token punctuation">,</span> A<span class="token punctuation">,</span> <span class="token builtin">object</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>super(C,self).m</code>只在C中执行。虽然<code>self</code>是C的instance，但是<code>self.__class__</code>可能不是C，可能是C的子类，比如D。 <code>super(C,self).m</code>会在<code>self.__class__.__mro__</code>中查询C的继承关系。例如： <code>self</code>是一个C的instance，<code>super(C,self).m</code>将找到A的m方法的实现。 D的m方法，<code>super(D,self).m()</code>将找到<code>B.m(self)</code>，因为B是D的第一个实现m的父类，在<code>D.__mro__</code>。在B的m方法<code>super(B,self).m()</code>被调用。 由于<code>self</code>是D的instance，MRO是（D，B，C，A，object）B之后的继承关系是C。所以会找到C的m方法，调用<code>super(C,self).m()</code>，仍然使用的是相同的MRO。类似的方法，然后继续寻找A。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Super</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token punctuation">,</span> obj<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>__type__ <span class="token operator">=</span> <span class="token builtin">type</span>
        self<span class="token punctuation">.</span>__obj__ <span class="token operator">=</span> obj
    <span class="token keyword">def</span> <span class="token function">__get__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> obj<span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>__obj__ <span class="token keyword">is</span> <span class="token boolean">None</span> <span class="token keyword">and</span> obj <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> Super<span class="token punctuation">(</span>self<span class="token punctuation">.</span>__type__<span class="token punctuation">,</span> obj<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> self
    <span class="token keyword">def</span> <span class="token function">__getattr__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> attr<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>__obj__<span class="token punctuation">,</span> self<span class="token punctuation">.</span>__type__<span class="token punctuation">)</span><span class="token punctuation">:</span>
            starttype <span class="token operator">=</span> self<span class="token punctuation">.</span>__obj__<span class="token punctuation">.</span>__class__
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            starttype <span class="token operator">=</span> self<span class="token punctuation">.</span>__obj__
        mro <span class="token operator">=</span> <span class="token builtin">iter</span><span class="token punctuation">(</span>starttype<span class="token punctuation">.</span>__mro__<span class="token punctuation">)</span>
        <span class="token keyword">for</span> cls <span class="token keyword">in</span> mro<span class="token punctuation">:</span>
            <span class="token keyword">if</span> cls <span class="token keyword">is</span> self<span class="token punctuation">.</span>__type__<span class="token punctuation">:</span>
                <span class="token keyword">break</span>
        <span class="token comment"># Note: mro is an iterator, so the second loop</span>
        <span class="token comment"># picks up where the first one left off!</span>
        <span class="token keyword">for</span> cls <span class="token keyword">in</span> mro<span class="token punctuation">:</span>
            <span class="token keyword">if</span> attr <span class="token keyword">in</span> cls<span class="token punctuation">.</span>__dict__<span class="token punctuation">:</span>
                x <span class="token operator">=</span> cls<span class="token punctuation">.</span>__dict__<span class="token punctuation">[</span>attr<span class="token punctuation">]</span>
                <span class="token keyword">if</span> <span class="token builtin">hasattr</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token string">&quot;__get__&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                    x <span class="token operator">=</span> x<span class="token punctuation">.</span>__get__<span class="token punctuation">(</span>self<span class="token punctuation">.</span>__obj__<span class="token punctuation">)</span>
                <span class="token keyword">return</span> x
        <span class="token keyword">raise</span> AttributeError<span class="token punctuation">,</span> attr

<span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">m</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;A&quot;</span>

<span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">m</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;B&quot;</span> <span class="token operator">+</span> Super<span class="token punctuation">(</span>B<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>m<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">C</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">m</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;C&quot;</span> <span class="token operator">+</span> Super<span class="token punctuation">(</span>C<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>m<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">D</span><span class="token punctuation">(</span>C<span class="token punctuation">,</span> B<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">m</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;D&quot;</span> <span class="token operator">+</span> Super<span class="token punctuation">(</span>D<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>m<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span> D<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>m<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># &quot;DCBA&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考： https://www.python.org/download/releases/2.2/descrintro/</p>`,20),o=[e];function c(l,u){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","mro.html.vue"]]);export{d as default};
