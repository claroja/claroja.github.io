import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,e as t}from"./app-yeyEmHfz.js";const e={},p=t(`<h1 id="metaclass" tabindex="-1"><a class="header-anchor" href="#metaclass" aria-hidden="true">#</a> metaclass</h1><p>metaclass 是 class 的 class. 一个 class 定义了 object的行为, 而一个metaclass 定义了class的行为. object是class的instance, 而class是metaclass的instance.</p><h2 id="class也是object" tabindex="-1"><a class="header-anchor" href="#class也是object" aria-hidden="true">#</a> class也是object</h2><p><code>classe</code>描述了如何创建一个<code>object</code>, 如下面的代码:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">ObjectCreator</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
      <span class="token keyword">pass</span>
my_object <span class="token operator">=</span> ObjectCreator<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_object<span class="token punctuation">)</span>  <span class="token comment"># &lt;__main__.ObjectCreator object at 0x8974f2c&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而在python中, <code>class</code>也是一种<code>object</code>. 当我们使用关键字<code>class</code>时, python的解释器执行它, 并创建了一个<code>object</code>.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">ObjectCreator</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
      <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如上面的代码, 在内存中创建了一个名为<code>ObjectCreator</code>的<code>object</code>.这个<code>object</code>(class)具有创建<code>object</code>(instance)的能力, 所以才称他为<code>class</code>. 但是, 它也是一个<code>object</code>, 所以:</p><ol><li>可以赋值给变量</li><li>可以复制它</li><li>可以添加属性</li><li>可以传递给方法</li></ol><h2 id="动态创建class" tabindex="-1"><a class="header-anchor" href="#动态创建class" aria-hidden="true">#</a> 动态创建class</h2><p>因为<code>class</code>是<code>object</code>, 所以可以</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">choose_class</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> name <span class="token operator">==</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">:</span>
        <span class="token keyword">class</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">pass</span>
        <span class="token keyword">return</span> Foo <span class="token comment"># return the class, not an instance</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">class</span> <span class="token class-name">Bar</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">pass</span>
        <span class="token keyword">return</span> Bar

MyClass <span class="token operator">=</span> choose_class<span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>MyClass<span class="token punctuation">)</span> <span class="token comment">#  &lt;class &#39;__main__.Foo&#39;&gt;  方法返回了一个class, 而不是instance</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>MyClass<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># &lt;__main__.Foo object at 0x89c6d4c&gt;, 通过class创建了一个instance</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是, 这还不够动态, 因为我们使用<code>class</code>关键字, 当python解释器读到<code>class</code>关键字时, 会通过<code>type</code>方法来创建<code>class</code>. <code>type</code>的基本用法是返回<code>object</code>的类型:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># &lt;type &#39;int&#39;&gt;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># &lt;type &#39;str&#39;&gt;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>ObjectCreator<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># &lt;type &#39;type&#39;&gt;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>ObjectCreator<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># &lt;class &#39;__main__.ObjectCreator&#39;&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而<code>type</code>另外一个重要的功能是创建一个<code>class</code>. 语法是<code>type(name, bases, attrs)</code></p><ul><li>name: class的名称</li><li>bases: 父类, 元组, 因为可以多继承</li><li>attrs: 成员属性和方法</li></ul><p>属性的例子(方法也一样)</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
      bar <span class="token operator">=</span> <span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>等价于</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Foo <span class="token operator">=</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token string">&#39;Foo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">:</span><span class="token boolean">True</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>继承例子</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">FooChild</span><span class="token punctuation">(</span>Foo<span class="token punctuation">)</span><span class="token punctuation">:</span>
      <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>等价于</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>FooChild <span class="token operator">=</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token string">&#39;FooChild&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>Foo<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="metaclass-1" tabindex="-1"><a class="header-anchor" href="#metaclass-1" aria-hidden="true">#</a> metaclass</h2><p><code>metaclass</code>可以创建<code>class</code>, 我们使用<code>class</code>来创建<code>object</code>, 使用<code>metaclass</code>创建<code>class</code>.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>MyClass <span class="token operator">=</span> MetaClass<span class="token punctuation">(</span><span class="token punctuation">)</span>
my_object <span class="token operator">=</span> MyClass<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>我们知道可以使用<code>type</code>来创建<code>class</code>:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>MyClass <span class="token operator">=</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token string">&#39;MyClass&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这是因为<code>type</code>实际上就是<code>metaclass</code>. 在python中所有的都是对象, 包括integers, strings, functions, classes.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>age <span class="token operator">=</span> <span class="token number">35</span>
age<span class="token punctuation">.</span>__class__  <span class="token comment"># &lt;type &#39;int&#39;&gt;</span>
name <span class="token operator">=</span> <span class="token string">&#39;bob&#39;</span>
name<span class="token punctuation">.</span>__class__  <span class="token comment"># &lt;type &#39;str&#39;&gt;</span>
<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">pass</span>
foo<span class="token punctuation">.</span>__class__  <span class="token comment"># &lt;type &#39;function&#39;&gt;</span>
<span class="token keyword">class</span> <span class="token class-name">Bar</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">pass</span>
b <span class="token operator">=</span> Bar<span class="token punctuation">(</span><span class="token punctuation">)</span>
b<span class="token punctuation">.</span>__class__  <span class="token comment"># &lt;class &#39;__main__.Bar&#39;&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么<code>__class__</code>的<code>__class__</code>是什么呢?</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>age<span class="token punctuation">.</span>__class__<span class="token punctuation">.</span>__class__  <span class="token comment"># &lt;type &#39;type&#39;&gt;</span>
name<span class="token punctuation">.</span>__class__<span class="token punctuation">.</span>__class__  <span class="token comment"># &lt;type &#39;type&#39;&gt;</span>
foo<span class="token punctuation">.</span>__class__<span class="token punctuation">.</span>__class__  <span class="token comment"># &lt;type &#39;type&#39;&gt;</span>
b<span class="token punctuation">.</span>__class__<span class="token punctuation">.</span>__class__  <span class="token comment"># &lt;type &#39;type&#39;&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>type</code>是内置的<code>metaclass</code>(为什么不是首字母大写<code>Type</code>, 可能是因为他还是一个判断类型的函数)</p><p>应用:</p><p>应用1.<code>abs</code>实现抽象类就是需要修改<code>metaclass</code> 应用2.<code>django</code>中的orm也是修改<code>metaclass</code> 应用3:创建类的时候将类的属性都大写</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">UpperAttrMetaclass</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 因为继承type,所以第一个参数是类的名称,第二个是基类,第三个是属性</span>
    <span class="token keyword">def</span> <span class="token function">__new__</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> clsname<span class="token punctuation">,</span> bases<span class="token punctuation">,</span> attrs<span class="token punctuation">)</span><span class="token punctuation">:</span> 
        uppercase_attrs <span class="token operator">=</span> <span class="token punctuation">{</span>
            attr <span class="token keyword">if</span> attr<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&quot;__&quot;</span><span class="token punctuation">)</span> <span class="token keyword">else</span> attr<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> v
            <span class="token keyword">for</span> attr<span class="token punctuation">,</span> v <span class="token keyword">in</span> attrs<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token builtin">type</span><span class="token punctuation">(</span>clsname<span class="token punctuation">,</span> bases<span class="token punctuation">,</span> uppercase_attrs<span class="token punctuation">)</span>
        <span class="token comment"># return type.__new__(cls, clsname, bases, uppercase_attrs)</span>
        <span class="token comment"># return super(UpperAttrMetaclass, cls).__new__(cls, clsname, bases, uppercase_attrs)</span>

<span class="token keyword">class</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span>metaclass<span class="token operator">=</span>UpperAttrMetaclass<span class="token punctuation">)</span><span class="token punctuation">:</span>
    bar <span class="token operator">=</span> <span class="token string">&#39;bip&#39;</span>

<span class="token builtin">hasattr</span><span class="token punctuation">(</span>Foo<span class="token punctuation">,</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span> <span class="token comment"># False</span>
<span class="token builtin">hasattr</span><span class="token punctuation">(</span>Foo<span class="token punctuation">,</span> <span class="token string">&#39;BAR&#39;</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应用4：通过mytype创建对象,实现继承</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MyType</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span>MyType<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__call__</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;xxxx&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token builtin">super</span><span class="token punctuation">(</span>MyType<span class="token punctuation">,</span> cls<span class="token punctuation">)</span><span class="token punctuation">.</span>__call__<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>

<span class="token comment">## Base = MyType(&#39;Base&#39;, (object,), {})</span>
<span class="token comment">## MyType(&#39;Base&#39;, (object,), {}) 是有MyType创建； metaclass=MyType</span>
<span class="token comment">## 1. type可以创建类metaclass=type；MyType也可以创建类metaclass=MyType</span>
<span class="token comment">## 2. Base = MyType(&#39;Base&#39;, (object,), {}) --&gt;</span>
<span class="token comment">## class Base(metaclass=MyType):</span>
<span class="token comment">##     pass</span>
<span class="token comment">## class Foo(Base):</span>
<span class="token comment">##     pass</span>

<span class="token keyword">class</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span>MyType<span class="token punctuation">(</span><span class="token string">&#39;Base&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
obj <span class="token operator">=</span> Foo<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应用5：通过封装函数来创建新的对象,更加方便</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MyType</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span>MyType<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__call__</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token builtin">super</span><span class="token punctuation">(</span>MyType<span class="token punctuation">,</span> cls<span class="token punctuation">)</span><span class="token punctuation">.</span>__call__<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">with_metaclass</span><span class="token punctuation">(</span>base<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> MyType<span class="token punctuation">(</span><span class="token string">&#39;XX&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>base<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span>with_metaclass<span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>记录有多个类被创建</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MyMeta</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    counter <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> name<span class="token punctuation">,</span> bases<span class="token punctuation">,</span> dic<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">type</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>cls<span class="token punctuation">,</span> name<span class="token punctuation">,</span> bases<span class="token punctuation">,</span> dic<span class="token punctuation">)</span>
        cls<span class="token punctuation">.</span>_order <span class="token operator">=</span> MyMeta<span class="token punctuation">.</span>counter
        MyMeta<span class="token punctuation">.</span>counter <span class="token operator">+=</span> <span class="token number">1</span>

<span class="token keyword">class</span> <span class="token class-name">MyType1</span><span class="token punctuation">(</span>metaclass<span class="token operator">=</span>MyMeta<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
<span class="token keyword">class</span> <span class="token class-name">MyType2</span><span class="token punctuation">(</span>metaclass<span class="token operator">=</span>MyMeta<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

MyMeta<span class="token punctuation">.</span>counter <span class="token comment"># 2, 有两个class被创建</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43),c=[p];function o(l,i){return n(),a("div",null,c)}const k=s(e,[["render",o],["__file","metaclass.html.vue"]]);export{k as default};
