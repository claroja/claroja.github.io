const e=JSON.parse('{"key":"v-5c92061c","path":"/1%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/3%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/5pytorch/%E6%A8%A1%E5%9E%8B%E4%BF%9D%E5%AD%98/save.html","title":"save","lang":"zh-CN","frontmatter":{"description":"save 序列化与反序列化 序列化把内存中的某一个对象保存到硬盘当中，以二进制序列的形式存储下来 反序列化 将硬盘中存储的二进制的数，反序列化到内存当中，得到一个相应的对象 pytorch内置了序列化和反序列化的方法: 序列化: torch.save(obj, f), obj可以是数据,模型或张量, f是要保存的位置路径 反序列化: torch.load(f, map_location), f表示位置路径, map_location指设备CPU或GPU","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/1%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/3%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/5pytorch/%E6%A8%A1%E5%9E%8B%E4%BF%9D%E5%AD%98/save.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"save"}],["meta",{"property":"og:description","content":"save 序列化与反序列化 序列化把内存中的某一个对象保存到硬盘当中，以二进制序列的形式存储下来 反序列化 将硬盘中存储的二进制的数，反序列化到内存当中，得到一个相应的对象 pytorch内置了序列化和反序列化的方法: 序列化: torch.save(obj, f), obj可以是数据,模型或张量, f是要保存的位置路径 反序列化: torch.load(f, map_location), f表示位置路径, map_location指设备CPU或GPU"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T10:13:52.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-25T10:13:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"save\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-25T10:13:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"序列化与反序列化","slug":"序列化与反序列化","link":"#序列化与反序列化","children":[]},{"level":2,"title":"保存的两种方式","slug":"保存的两种方式","link":"#保存的两种方式","children":[{"level":3,"title":"保存整个模型","slug":"保存整个模型","link":"#保存整个模型","children":[]},{"level":3,"title":"仅保存参数","slug":"仅保存参数","link":"#仅保存参数","children":[]}]},{"level":2,"title":"checkpoint","slug":"checkpoint","link":"#checkpoint","children":[]}],"git":{"createdTime":1740478432000,"updatedTime":1740478432000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.01,"words":302},"filePathRelative":"1机器学习/3分析工具/5pytorch/模型保存/save.md","localizedDate":"2025年2月25日","excerpt":"<h1> save</h1>\\n<h2> 序列化与反序列化</h2>\\n<ul>\\n<li>序列化把内存中的某一个对象保存到硬盘当中，以二进制序列的形式存储下来</li>\\n<li>反序列化 将硬盘中存储的二进制的数，反序列化到内存当中，得到一个相应的对象</li>\\n</ul>\\n<p>pytorch内置了序列化和反序列化的方法:</p>\\n<ul>\\n<li>序列化: <code>torch.save(obj, f)</code>, <code>obj</code>可以是数据,模型或张量, <code>f</code>是要保存的位置路径</li>\\n<li>反序列化: <code>torch.load(f, map_location)</code>, <code>f</code>表示位置路径, <code>map_location</code>指设备CPU或GPU</li>\\n</ul>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
