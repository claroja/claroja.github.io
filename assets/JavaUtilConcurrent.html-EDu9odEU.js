import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-yeyEmHfz.js";const p={},c=t(`<h1 id="dataframe-sql" tabindex="-1"><a class="header-anchor" href="#dataframe-sql" aria-hidden="true">#</a> dataframe_sql</h1><h2 id="线程安全类" tabindex="-1"><a class="header-anchor" href="#线程安全类" aria-hidden="true">#</a> 线程安全类</h2><ul><li>过时的线程安全集合(用synchronized修饰, 效率低): Hashtable(map实现), Vector(list实现)</li><li>使用Collections装饰的线程安全集合(装饰器模式, 只是拿来做了封装): Collections.synchronizedMap, Collections.synchronizedSet等</li><li>java.util.concurrent: <ul><li>Blocking 大部分实现基于锁，并提供用来阻塞的方法, 使用ReentrantLock实现</li><li>CopyOnWrite 使用深拷贝模式, 避免不安全, 适用于读多写少的</li><li>Concurrent cas做优化, 性能比较多, 做推荐</li></ul></li></ul><p>注意</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">demo</span><span class="token punctuation">(</span><span class="token comment">//未能保证原子性, 因为虽然ConcurrentHashMap的get,put是线程安全的, 但是他们组合使用并非安全</span>
        <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token keyword">new</span> <span class="token class-name">ConcurrentHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span>map<span class="token punctuation">,</span> words<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> word <span class="token operator">:</span> words<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">Integer</span> counter <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> newValue <span class="token operator">=</span> counter <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> counter <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>word<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">demo</span><span class="token punctuation">(</span>
            <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token keyword">new</span> <span class="token class-name">ConcurrentHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">LongAdder</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">0.75f</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">(</span>map<span class="token punctuation">,</span> words<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> word <span class="token operator">:</span> words<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 如果缺少一个 key，则计算生成一个 value , 然后将  key value 放入 map</span>
                    <span class="token comment">//                  a      0</span>
                    <span class="token class-name">LongAdder</span> value <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">computeIfAbsent</span><span class="token punctuation">(</span>word<span class="token punctuation">,</span> <span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token keyword">new</span> <span class="token class-name">LongAdder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token comment">// 执行累加</span>
                    value<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">void</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token class-name">Supplier</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> supplier<span class="token punctuation">,</span> <span class="token class-name">BiConsumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span><span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> consumer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> counterMap <span class="token operator">=</span> supplier<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Thread</span><span class="token punctuation">&gt;</span></span> ts <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> idx <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token class-name">Thread</span> thread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> words <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            consumer<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>counterMap<span class="token punctuation">,</span> words<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ts<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>thread<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    ts<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>t <span class="token operator">-&gt;</span> t<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ts<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>t <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            t<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>counterMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><p>JDK1.7 HashMap数据结构是数组+链表的结构</p><ol><li>当调用put()方法时, 会根据key计算hash值, 然后对整个数组的长度求模, 算出桶下标</li><li>当通下标相同(hash碰撞)时, 则在该位置形成链表(jdk7会在头部加, jdk8在尾部加,七上八下)</li><li>当达到数组的扩容阈值时, 会数组会进行扩容, 并重新计算hash值(这个方法可以降低hash碰撞)</li></ol><p>JDK1.8 HashMap 底层结构进行彻底重构，使用数组加链表/红黑树方式这种组合结构。链表元素数量超过 8 之后，自动转为红黑树,提高了查找效率。 由于 JDK1.8 链表采用尾插入法，从而避免并发扩容情况下链表形成死链的可能。 但是HashMap在JDK1.8仍然不适合用于并发场景，依然是无法避免并发扩容情况下的死链问题。（并发赋值时被覆盖、size 计算问题） 参考: https://zhuanlan.zhihu.com/p/372561504 https://www.pianshen.com/article/42821264881/</p>`,9),o=[c];function e(l,u){return s(),a("div",null,o)}const r=n(p,[["render",e],["__file","JavaUtilConcurrent.html.vue"]]);export{r as default};
