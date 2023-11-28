import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-yeyEmHfz.js";const t={},p=e(`<h1 id="router" tabindex="-1"><a class="header-anchor" href="#router" aria-hidden="true">#</a> router</h1><h2 id="race-conditions" tabindex="-1"><a class="header-anchor" href="#race-conditions" aria-hidden="true">#</a> Race Conditions</h2><p>段代码块内如果存在对共享资源的多线程读写操作，称这段代码块为Critical Section 多个线程在临界区内执行，由于代码的执行序列不同而导致结果无法预测，称之为发生了Race Condition</p><ul><li>多个线程读共享资源没问题</li><li>在多个线程对共享资源读写操作时发生指令交错.</li></ul><h2 id="从java底层理解" tabindex="-1"><a class="header-anchor" href="#从java底层理解" aria-hidden="true">#</a> 从java底层理解</h2><p>一个陷阱进行++操作, 另一个进行--操作, 最后结果不为0</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
    <span class="token class-name">Thread</span> t1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">5000</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        counter<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;t1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Thread</span> t2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">5000</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        counter<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;t2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    t1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    t2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    t1<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    t2<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//结果不为0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>i++ 而言（i为静态变量），实际会产生如下的 JVM 字节码指令：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>getstatic i <span class="token comment">// 获取静态变量i值</span>
iconst_1    <span class="token comment">// 准备常量1</span>
iadd        <span class="token comment">// 自增</span>
putstatic i <span class="token comment">// 将修改后的值存入静态变量i</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同理 i--</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>getstatic i <span class="token comment">// 获取静态变量i值</span>
iconst_1    <span class="token comment">// 准备常量1</span>
isub        <span class="token comment">// 自减</span>
putstatic i <span class="token comment">// 将修改后的值存入静态变量i</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应为i++和i--是在不同线程中执行, 则可能发生:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Thread1</span><span class="token operator">:</span> getstatic i <span class="token comment">//i=0</span>
<span class="token class-name">Thread2</span><span class="token operator">:</span> getstatic i <span class="token comment">//i=0</span>
<span class="token class-name">Thread1</span><span class="token operator">:</span> iconst_1    <span class="token comment">// 准备常量1</span>
<span class="token class-name">Thread1</span><span class="token operator">:</span> iadd        <span class="token comment">// +1</span>
<span class="token class-name">Thread1</span><span class="token operator">:</span> putstatic i <span class="token comment">// i=1</span>
<span class="token class-name">Thread2</span><span class="token operator">:</span> iconst_1    <span class="token comment">// 准备常量1</span>
<span class="token class-name">Thread2</span><span class="token operator">:</span> isub        <span class="token comment">// -1</span>
<span class="token class-name">Thread2</span><span class="token operator">:</span> putstatic i <span class="token comment">// i=-1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然Thread1和Thread2都执行了一次i++和i--顺序实行, 结果应该为i=0. 但是由于两个线程同时执行, 发生了指令交错, 最终结果为-1.</p><h2 id="从cpu底层理解" tabindex="-1"><a class="header-anchor" href="#从cpu底层理解" aria-hidden="true">#</a> 从CPU底层理解</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token punctuation">{</span>
     <span class="token keyword">protected</span> <span class="token keyword">long</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
     <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">long</span> value<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">+</span> value<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设两个Thread A和B, 同时调用<code>add()</code>, 每个Thread都会执行:</p><ol><li>从memory中读取<code>this.count</code>到register</li><li>在register中进行计算</li><li>从register中将结果返回给memory 我们希望执行的方式如下:</li></ol><div class="language-s line-numbers-mode" data-ext="s"><pre class="language-s"><code>    this.count = 0;
Thread A:  读取 this.count=0 到 register.
Thread A:  在register中, 调用 add(1)方法, this.count=1.
Thread A:  将this.count放回 memory, 结果为 1.
Thread B:  读取 this.count=1 到 register.
Thread B:  在register中, 调用 add(1)方法, this.count=2.
Thread B:  将this.count 放回 memory, 最终结果为2.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两个Thread同步执行, 最终结果为2.</p><p>由于操作系统调度两个Thread, 所以可能会出现下面的情况:</p><div class="language-s line-numbers-mode" data-ext="s"><pre class="language-s"><code>    this.count = 0;
Thread A:  读取 this.count=0 到 register.
Thread B:  读取 this.count=0 到 register.
Thread B:  在register中, 调用 add(1)方法, this.count=1.
Thread B:  将this.count 放回 memory, 结果为 1.
Thread A:  在register中, 调用 add(1)方法, this.count=1.
Thread A:  将this.count=1 放回 memory, 最终结果为 1.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两个Thread交叉执行, 最终结果为1.</p><h2 id="保证线程安全" tabindex="-1"><a class="header-anchor" href="#保证线程安全" aria-hidden="true">#</a> 保证线程安全</h2><p>有多种手段保证线程安全</p><ul><li>阻塞式的解决方案：synchronized，Lock</li><li>非阻塞式的解决方案：原子变量</li></ul>`,26),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","JavaThreadUnsafe.html.vue"]]);export{d as default};
