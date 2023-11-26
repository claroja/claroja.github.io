const e=JSON.parse('{"key":"v-075bf129","path":"/%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80/%E9%80%9A%E7%94%A8%E7%9F%A5%E8%AF%86/io/io_inode.html","title":"inode","lang":"zh-CN","frontmatter":{"description":"inode inode(index node)描述文件或目录的系统对象。每个inode存储对象数据的属性(上次更改的时间、访问、修改)和磁盘块位置。 文件的真实数据不存储在inode中，而是存储在称为\\"数据块\\"的地方 每个文件都与inode相关联，inode由整数标识，通常称为i-number或inode号。 使用ls -i命令可以找到文件的inode号。ls-i命令在报表的第一列中打印 i-node编号。 文件的标识是它的inode号，而不是它的名称。 inode包含的信息: File types ( executable, block special etc ) Permissions ( read, write etc ) UID ( Owner ) GID ( Group ) FileSize Time stamps including last access, last modification and last inode number change. File deletion time Number of links ( soft/hard ) Location of file on harddisk Some other metadata about file.","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80/%E9%80%9A%E7%94%A8%E7%9F%A5%E8%AF%86/io/io_inode.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"inode"}],["meta",{"property":"og:description","content":"inode inode(index node)描述文件或目录的系统对象。每个inode存储对象数据的属性(上次更改的时间、访问、修改)和磁盘块位置。 文件的真实数据不存储在inode中，而是存储在称为\\"数据块\\"的地方 每个文件都与inode相关联，inode由整数标识，通常称为i-number或inode号。 使用ls -i命令可以找到文件的inode号。ls-i命令在报表的第一列中打印 i-node编号。 文件的标识是它的inode号，而不是它的名称。 inode包含的信息: File types ( executable, block special etc ) Permissions ( read, write etc ) UID ( Owner ) GID ( Group ) FileSize Time stamps including last access, last modification and last inode number change. File deletion time Number of links ( soft/hard ) Location of file on harddisk Some other metadata about file."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"inode\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"hardlink","slug":"hardlink","link":"#hardlink","children":[]},{"level":2,"title":"inode随复制、移动和删除而更改","slug":"inode随复制、移动和删除而更改","link":"#inode随复制、移动和删除而更改","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":2.67,"words":802},"filePathRelative":"编程基础/通用知识/io/io_inode.md","localizedDate":"2023年11月25日","excerpt":"<h1> inode</h1>\\n<p>inode(index node)描述文件或目录的系统对象。每个inode存储对象数据的属性(上次更改的时间、访问、修改)和磁盘块位置。\\n文件的真实数据不存储在inode中，而是存储在称为\\"数据块\\"的地方\\n每个文件都与inode相关联，inode由整数标识，通常称为i-number或inode号。\\n使用ls -i命令可以找到文件的inode号。ls-i命令在报表的第一列中打印 i-node编号。\\n文件的标识是它的inode号，而不是它的名称。</p>\\n<p>inode包含的信息:\\nFile types ( executable, block special etc )\\nPermissions ( read, write etc )\\nUID ( Owner )\\nGID ( Group )\\nFileSize\\nTime stamps including last access, last modification and last inode number change.\\nFile deletion time\\nNumber of links ( soft/hard )\\nLocation of file on harddisk\\nSome other metadata about file.</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};