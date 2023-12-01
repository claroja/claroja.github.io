const n=JSON.parse(`{"key":"v-dd9510d6","path":"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/9%E8%BF%9B%E7%A8%8B/semaphore.html","title":"semaphore","lang":"zh-CN","frontmatter":{"description":"semaphore Semaphore信号量相比Lock锁，可以控制进入进程的数量 Lock一次只允许一个进程进入 Semaphore(n)则可以允许n个进程进入 from multiprocessing import Process,Lock,Semaphore import os,time def work(n,lock): lock.acquire() print('%s: %s is running' %(n,os.getpid())) time.sleep(1) print('%s:%s is done' %(n,os.getpid())) lock.release() if __name__ == '__main__': lock=Semaphore(4) for i in range(5): p=Process(target=work,args=(i,lock)) p.start()","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/9%E8%BF%9B%E7%A8%8B/semaphore.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"semaphore"}],["meta",{"property":"og:description","content":"semaphore Semaphore信号量相比Lock锁，可以控制进入进程的数量 Lock一次只允许一个进程进入 Semaphore(n)则可以允许n个进程进入 from multiprocessing import Process,Lock,Semaphore import os,time def work(n,lock): lock.acquire() print('%s: %s is running' %(n,os.getpid())) time.sleep(1) print('%s:%s is done' %(n,os.getpid())) lock.release() if __name__ == '__main__': lock=Semaphore(4) for i in range(5): p=Process(target=work,args=(i,lock)) p.start()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-01T12:59:38.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-12-01T12:59:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"semaphore\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-01T12:59:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1701435578000,"updatedTime":1701435578000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.32,"words":96},"filePathRelative":"编程语言/python/9进程/semaphore.md","localizedDate":"2023年12月1日","excerpt":"<h1> semaphore</h1>\\n<p>Semaphore信号量相比Lock锁，可以控制进入进程的数量\\nLock一次只允许一个进程进入\\nSemaphore(n)则可以允许n个进程进入</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">from</span> multiprocessing <span class=\\"token keyword\\">import</span> Process<span class=\\"token punctuation\\">,</span>Lock<span class=\\"token punctuation\\">,</span>Semaphore\\n<span class=\\"token keyword\\">import</span> os<span class=\\"token punctuation\\">,</span>time\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">work</span><span class=\\"token punctuation\\">(</span>n<span class=\\"token punctuation\\">,</span>lock<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    lock<span class=\\"token punctuation\\">.</span>acquire<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'%s: %s is running'</span> <span class=\\"token operator\\">%</span><span class=\\"token punctuation\\">(</span>n<span class=\\"token punctuation\\">,</span>os<span class=\\"token punctuation\\">.</span>getpid<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n    time<span class=\\"token punctuation\\">.</span>sleep<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'%s:%s is done'</span> <span class=\\"token operator\\">%</span><span class=\\"token punctuation\\">(</span>n<span class=\\"token punctuation\\">,</span>os<span class=\\"token punctuation\\">.</span>getpid<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n    lock<span class=\\"token punctuation\\">.</span>release<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">if</span> __name__ <span class=\\"token operator\\">==</span> <span class=\\"token string\\">'__main__'</span><span class=\\"token punctuation\\">:</span>\\n    lock<span class=\\"token operator\\">=</span>Semaphore<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">4</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">for</span> i <span class=\\"token keyword\\">in</span> <span class=\\"token builtin\\">range</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">5</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        p<span class=\\"token operator\\">=</span>Process<span class=\\"token punctuation\\">(</span>target<span class=\\"token operator\\">=</span>work<span class=\\"token punctuation\\">,</span>args<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">(</span>i<span class=\\"token punctuation\\">,</span>lock<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n        p<span class=\\"token punctuation\\">.</span>start<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};