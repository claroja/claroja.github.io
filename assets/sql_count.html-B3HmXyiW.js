const t=JSON.parse('{"key":"v-1de785c8","path":"/%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/%E6%95%B0%E6%8D%AE%E5%BA%93/%E6%9C%AA%E5%88%86%E7%B1%BB/sql_count.html","title":"count","lang":"zh-CN","frontmatter":{"description":"count 统计总量 select count(*), count(age), count(distinct age) from student count(*)和count(age)结果相同, 都是统计总数据数量 count(distinct age)则是统计不重复数据数量 按条件统计 统计单个age下student数量 select count(*) from student group by age","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/%E6%95%B0%E6%8D%AE%E5%BA%93/%E6%9C%AA%E5%88%86%E7%B1%BB/sql_count.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"count"}],["meta",{"property":"og:description","content":"count 统计总量 select count(*), count(age), count(distinct age) from student count(*)和count(age)结果相同, 都是统计总数据数量 count(distinct age)则是统计不重复数据数量 按条件统计 统计单个age下student数量 select count(*) from student group by age"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"count\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"统计总量","slug":"统计总量","link":"#统计总量","children":[]},{"level":2,"title":"按条件统计","slug":"按条件统计","link":"#按条件统计","children":[{"level":3,"title":"统计单个age下student数量","slug":"统计单个age下student数量","link":"#统计单个age下student数量","children":[]},{"level":3,"title":"统计某个范围age下student数量","slug":"统计某个范围age下student数量","link":"#统计某个范围age下student数量","children":[]}]}],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.85,"words":254},"filePathRelative":"数据工程/数据库/未分类/sql_count.md","localizedDate":"2023年11月25日","excerpt":"<h1> count</h1>\\n<h2> 统计总量</h2>\\n<p><code>select count(*), count(age), count(distinct age) from student</code></p>\\n<ul>\\n<li><code>count(*)</code>和<code>count(age)</code>结果相同, 都是统计总数据数量</li>\\n<li><code>count(distinct age)</code>则是统计不重复数据数量</li>\\n</ul>\\n<h2> 按条件统计</h2>\\n<h3> 统计单个age下student数量</h3>\\n<p><code>select count(*) from student group by age</code></p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{t as data};