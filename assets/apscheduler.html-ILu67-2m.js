const e=JSON.parse('{"key":"v-a70ba768","path":"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/13%E5%B8%B8%E7%94%A8%E5%8C%85/apscheduler.html","title":"apscheduler","lang":"zh-CN","frontmatter":{"description":"apscheduler APScheduler （advanceded python scheduler） 特点： 1.不依赖于Linux系统的crontab系统定时，独立运行 2.可以动态添加新的定时任务，如 下单后30分钟内必须支付，否则取消订单，就可以借助此工具（每下一单就要添加此订单的定时任务） 3.对添加的定时任务可以做持久保存 基础概念 触发器(trigger)和保存调度逻辑. 作业存储(job store),默认存储在内存中,也可以保存在数据库中(使用序列化和反序列化实现) 执行器(executor)控制执行的作业 调度器(scheduler)包含以上三者 选择合适的调度器,存储,执行和触发器","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/13%E5%B8%B8%E7%94%A8%E5%8C%85/apscheduler.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"apscheduler"}],["meta",{"property":"og:description","content":"apscheduler APScheduler （advanceded python scheduler） 特点： 1.不依赖于Linux系统的crontab系统定时，独立运行 2.可以动态添加新的定时任务，如 下单后30分钟内必须支付，否则取消订单，就可以借助此工具（每下一单就要添加此订单的定时任务） 3.对添加的定时任务可以做持久保存 基础概念 触发器(trigger)和保存调度逻辑. 作业存储(job store),默认存储在内存中,也可以保存在数据库中(使用序列化和反序列化实现) 执行器(executor)控制执行的作业 调度器(scheduler)包含以上三者 选择合适的调度器,存储,执行和触发器"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-01T12:59:38.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-12-01T12:59:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"apscheduler\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-01T12:59:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"基础概念","slug":"基础概念","link":"#基础概念","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Scheduler","slug":"scheduler","link":"#scheduler","children":[]},{"level":3,"title":"trigger","slug":"trigger","link":"#trigger","children":[]},{"level":3,"title":"executors","slug":"executors","link":"#executors","children":[]},{"level":3,"title":"job","slug":"job","link":"#job","children":[]}]},{"level":2,"title":"1.通过名称","slug":"_1-通过名称","link":"#_1-通过名称","children":[]},{"level":2,"title":"2.通过对象","slug":"_2-通过对象","link":"#_2-通过对象","children":[]},{"level":2,"title":"3.停止所有任务","slug":"_3-停止所有任务","link":"#_3-停止所有任务","children":[]}],"git":{"createdTime":1701435578000,"updatedTime":1701435578000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":6.52,"words":1955},"filePathRelative":"编程语言/python/13常用包/apscheduler.md","localizedDate":"2023年12月1日","excerpt":"<h1> apscheduler</h1>\\n<p>APScheduler （advanceded python scheduler）\\n特点：\\n1.不依赖于Linux系统的crontab系统定时，独立运行\\n2.可以动态添加新的定时任务，如\\n下单后30分钟内必须支付，否则取消订单，就可以借助此工具（每下一单就要添加此订单的定时任务）\\n3.对添加的定时任务可以做持久保存</p>\\n<h2> 基础概念</h2>\\n<p>触发器(trigger)和保存调度逻辑.\\n作业存储(job store),默认存储在内存中,也可以保存在数据库中(使用序列化和反序列化实现)\\n执行器(executor)控制执行的作业\\n调度器(scheduler)包含以上三者\\n<strong>选择合适的调度器,存储,执行和触发器</strong></p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
