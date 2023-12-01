const e=JSON.parse('{"key":"v-46193555","path":"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/2%E6%A8%A1%E5%9D%97%E4%B8%8E%E5%8C%85/import__.html","title":"import","lang":"zh-CN","frontmatter":{"description":"import __import__(name, globals=None, locals=None, fromlist=(), level=0) 该函数会导入 name 模块 有可能使用给定的 globals 和 locals 来确定如何在包的上下文中解读名称。标准实现完全不使用其 locals 参数，而仅使用 globals 参数来确定import语句的包上下文。 fromlist 给出了应该从由 name 指定的模块导入对象或子模块的名称。当 name 变量的形式为 package.module 时，通常将会返回最高层级的包（第一个点号之前的名称），而 不是 以 name 命名的模块。 但是，当给出了非空的 fromlist 参数时，则将返回以 name 命名的模块。 level 指定是使用绝对还是相对导入。 0 (默认值) 意味着仅执行绝对导入。 level 为正数值表示相对于模块调用__import__()的目录，","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/2%E6%A8%A1%E5%9D%97%E4%B8%8E%E5%8C%85/import__.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"import"}],["meta",{"property":"og:description","content":"import __import__(name, globals=None, locals=None, fromlist=(), level=0) 该函数会导入 name 模块 有可能使用给定的 globals 和 locals 来确定如何在包的上下文中解读名称。标准实现完全不使用其 locals 参数，而仅使用 globals 参数来确定import语句的包上下文。 fromlist 给出了应该从由 name 指定的模块导入对象或子模块的名称。当 name 变量的形式为 package.module 时，通常将会返回最高层级的包（第一个点号之前的名称），而 不是 以 name 命名的模块。 但是，当给出了非空的 fromlist 参数时，则将返回以 name 命名的模块。 level 指定是使用绝对还是相对导入。 0 (默认值) 意味着仅执行绝对导入。 level 为正数值表示相对于模块调用__import__()的目录，"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-01T12:59:38.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-12-01T12:59:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"import\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-01T12:59:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1701435578000,"updatedTime":1701435578000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.81,"words":542},"filePathRelative":"编程语言/python/2模块与包/__import__.md","localizedDate":"2023年12月1日","excerpt":"<h1> <strong>import</strong></h1>\\n<p><code>__import__(name, globals=None, locals=None, fromlist=(), level=0)</code></p>\\n<ol>\\n<li>该函数会导入 name 模块</li>\\n<li>有可能使用给定的 globals 和 locals 来确定如何在包的上下文中解读名称。标准实现完全不使用其 locals 参数，而仅使用 globals 参数来确定import语句的包上下文。</li>\\n<li>fromlist 给出了应该从由 name 指定的模块导入对象或子模块的名称。当 name 变量的形式为 package.module 时，通常将会返回最高层级的包（第一个点号之前的名称），而 不是 以 name 命名的模块。 但是，当给出了非空的 fromlist 参数时，则将返回以 name 命名的模块。</li>\\n<li>level 指定是使用绝对还是相对导入。 0 (默认值) 意味着仅执行绝对导入。 level 为正数值表示相对于模块调用__import__()的目录，</li>\\n</ol>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
