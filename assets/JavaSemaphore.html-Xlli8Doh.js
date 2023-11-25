const n=JSON.parse('{"key":"v-158f342a","path":"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/java/lock/JavaSemaphore.html","title":"scatter","lang":"zh-CN","frontmatter":{"description":"scatter Semaphore 信号量，用来限制能同时访问共享资源的线程上限。 使用 Semaphore 限流，在访问高峰期时，让请求线程阻塞，高峰期过去再释放许可, @Slf4j(topic = \\"test\\") public class TestSemaphore { public static void main(String[] args) { Semaphore semaphore = new Semaphore(3);// 最多允许3个线程 for (int i = 0; i &lt; 10; i++) {// 10个线程同时运行 new Thread(() -&gt; { try { semaphore.acquire(); } catch (InterruptedException e) { e.printStackTrace(); } try { log.debug(\\"running...\\"); sleep(1); log.debug(\\"end...\\"); } finally { semaphore.release(); } }).start(); } } }","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/java/lock/JavaSemaphore.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"scatter"}],["meta",{"property":"og:description","content":"scatter Semaphore 信号量，用来限制能同时访问共享资源的线程上限。 使用 Semaphore 限流，在访问高峰期时，让请求线程阻塞，高峰期过去再释放许可, @Slf4j(topic = \\"test\\") public class TestSemaphore { public static void main(String[] args) { Semaphore semaphore = new Semaphore(3);// 最多允许3个线程 for (int i = 0; i &lt; 10; i++) {// 10个线程同时运行 new Thread(() -&gt; { try { semaphore.acquire(); } catch (InterruptedException e) { e.printStackTrace(); } try { log.debug(\\"running...\\"); sleep(1); log.debug(\\"end...\\"); } finally { semaphore.release(); } }).start(); } } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"scatter"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"scatter\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Semaphore","slug":"semaphore","link":"#semaphore","children":[]},{"level":2,"title":"CountdownLatch","slug":"countdownlatch","link":"#countdownlatch","children":[]},{"level":2,"title":"CyclicBarrier","slug":"cyclicbarrier","link":"#cyclicbarrier","children":[]}],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.12,"words":335},"filePathRelative":"编程语言/java/lock/JavaSemaphore.md","localizedDate":"2023年11月25日","excerpt":"<h1> scatter</h1>\\n<h2> Semaphore</h2>\\n<p>信号量，用来限制能同时访问共享资源的线程上限。\\n使用 Semaphore 限流，在访问高峰期时，让请求线程阻塞，高峰期过去再释放许可,</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token annotation punctuation\\">@Slf4j</span><span class=\\"token punctuation\\">(</span>topic <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"test\\"</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">TestSemaphore</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> args<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">Semaphore</span> semaphore <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Semaphore</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">// 最多允许3个线程</span>\\n        <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span><span class=\\"token comment\\">// 10个线程同时运行</span>\\n            <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Thread</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">-&gt;</span> <span class=\\"token punctuation\\">{</span>\\n                <span class=\\"token keyword\\">try</span> <span class=\\"token punctuation\\">{</span>\\n                    semaphore<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">acquire</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">catch</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">InterruptedException</span> e<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                    e<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">printStackTrace</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token punctuation\\">}</span>\\n                <span class=\\"token keyword\\">try</span> <span class=\\"token punctuation\\">{</span>\\n                    log<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">debug</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"running...\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                    <span class=\\"token function\\">sleep</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                    log<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">debug</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"end...\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">finally</span> <span class=\\"token punctuation\\">{</span>\\n                    semaphore<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">release</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token punctuation\\">}</span>\\n            <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">start</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};