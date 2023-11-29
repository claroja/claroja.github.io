const e=JSON.parse('{"key":"v-5179820a","path":"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/%E9%80%9A%E7%94%A8%E7%9F%A5%E8%AF%86/io/FileSystem.html","title":"FileSystem","lang":"zh-CN","frontmatter":{"description":"FileSystem 内核维护了三个表:进程表(process table), 文件表(file table), v-node/i-node信息表(node table). 进程表 内核维护了所有的进程, 每个进程都有一个进程表. 进程表有两列: fd flags(file descriptor flags): 表示文件是否被打开 file pointer: 指针, 指向文件表 进程表中的每一行表示一个文件描述符(descriptor), 所有进程都默认具有0,1,2三个文件描述符. 文件描述符是进程表的索引(index) 当fork创建子进程时,进程表,这就是为何父子进程可以共享一个打开的文件","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/%E9%80%9A%E7%94%A8%E7%9F%A5%E8%AF%86/io/FileSystem.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"FileSystem"}],["meta",{"property":"og:description","content":"FileSystem 内核维护了三个表:进程表(process table), 文件表(file table), v-node/i-node信息表(node table). 进程表 内核维护了所有的进程, 每个进程都有一个进程表. 进程表有两列: fd flags(file descriptor flags): 表示文件是否被打开 file pointer: 指针, 指向文件表 进程表中的每一行表示一个文件描述符(descriptor), 所有进程都默认具有0,1,2三个文件描述符. 文件描述符是进程表的索引(index) 当fork创建子进程时,进程表,这就是为何父子进程可以共享一个打开的文件"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-28T13:15:02.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"FileSystem"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-28T13:15:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"FileSystem\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2023-11-28T13:15:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"进程表","slug":"进程表","link":"#进程表","children":[]},{"level":2,"title":"文件表","slug":"文件表","link":"#文件表","children":[]},{"level":2,"title":"v-node/i-node","slug":"v-node-i-node","link":"#v-node-i-node","children":[]},{"level":2,"title":"标准文件描述符","slug":"标准文件描述符","link":"#标准文件描述符","children":[]},{"level":2,"title":"打开新文件","slug":"打开新文件","link":"#打开新文件","children":[]},{"level":2,"title":"父子进程共享文件","slug":"父子进程共享文件","link":"#父子进程共享文件","children":[]},{"level":2,"title":"复制文件描述符","slug":"复制文件描述符","link":"#复制文件描述符","children":[]},{"level":2,"title":"管道","slug":"管道","link":"#管道","children":[]}],"git":{"createdTime":1701177302000,"updatedTime":1701177302000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":3.12,"words":936},"filePathRelative":"编程语言/通用知识/io/FileSystem.md","localizedDate":"2023年11月28日","excerpt":"<h1> FileSystem</h1>\\n<p>内核维护了三个表:进程表(process table), 文件表(file table), v-node/i-node信息表(node table).</p>\\n<h2> 进程表</h2>\\n<ol>\\n<li>内核维护了所有的进程, 每个进程都有一个进程表.</li>\\n<li>进程表有两列:\\n<ol>\\n<li><code>fd flags</code>(file descriptor flags): 表示文件是否被打开</li>\\n<li><code>file pointer</code>: 指针, 指向文件表</li>\\n</ol>\\n</li>\\n<li>进程表中的每一行表示一个文件描述符(descriptor), 所有进程都默认具有0,1,2三个文件描述符. 文件描述符是进程表的索引(index)</li>\\n<li>当fork创建子进程时,进程表,这就是为何父子进程可以共享一个打开的文件\\n</li>\\n</ol>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};