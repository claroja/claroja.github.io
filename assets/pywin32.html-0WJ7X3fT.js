const e=JSON.parse('{"key":"v-0f55fbb4","path":"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/13%E5%B8%B8%E7%94%A8%E5%8C%85/pywin32.html","title":"pywin32","lang":"zh-CN","frontmatter":{"description":"pywin32 pywin32 是一个第三方模块库, 直接包装了几乎所有的 Windows API. 概念 句柄 Windows程序中，有各种各样的资源，系统在创建这些资源的时候，都会为他们分配内存，并返回标识这些资源的标识号，这个标识号就是句柄. 在 win32 编程的世界里，包括 \\"窗口、文本框 等所有控件\\" 都是 窗体，所有的窗体都有独立的句柄。要操作任意一个窗体，你都需要找到这个窗体的句柄 。 消息 消息是用来告诉窗体 \\"发生了什么\\"，比如 给一个按钮发送BN_CLICKED 这么个消息，按钮就知道 \\"哦，我被点了\\". 在 Windows 中消息是由一个数值表示的, 并且将这些数值定义为WM_XXX 宏的形式. 例如，鼠标左键按下的消息--WM_LBUTTONDOWN，键盘按下消息--WM_KEYDOWN，字符消息--WM_CHAR，等等。","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/13%E5%B8%B8%E7%94%A8%E5%8C%85/pywin32.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"pywin32"}],["meta",{"property":"og:description","content":"pywin32 pywin32 是一个第三方模块库, 直接包装了几乎所有的 Windows API. 概念 句柄 Windows程序中，有各种各样的资源，系统在创建这些资源的时候，都会为他们分配内存，并返回标识这些资源的标识号，这个标识号就是句柄. 在 win32 编程的世界里，包括 \\"窗口、文本框 等所有控件\\" 都是 窗体，所有的窗体都有独立的句柄。要操作任意一个窗体，你都需要找到这个窗体的句柄 。 消息 消息是用来告诉窗体 \\"发生了什么\\"，比如 给一个按钮发送BN_CLICKED 这么个消息，按钮就知道 \\"哦，我被点了\\". 在 Windows 中消息是由一个数值表示的, 并且将这些数值定义为WM_XXX 宏的形式. 例如，鼠标左键按下的消息--WM_LBUTTONDOWN，键盘按下消息--WM_KEYDOWN，字符消息--WM_CHAR，等等。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-01T12:59:38.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-12-01T12:59:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"pywin32\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-01T12:59:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"概念","slug":"概念","link":"#概念","children":[{"level":3,"title":"句柄","slug":"句柄","link":"#句柄","children":[]},{"level":3,"title":"消息","slug":"消息","link":"#消息","children":[]},{"level":3,"title":"wParam和lParam","slug":"wparam和lparam","link":"#wparam和lparam","children":[]},{"level":3,"title":"time和pt","slug":"time和pt","link":"#time和pt","children":[]}]},{"level":2,"title":"pywin32结构","slug":"pywin32结构","link":"#pywin32结构","children":[]},{"level":2,"title":"win32clipboard","slug":"win32clipboard","link":"#win32clipboard","children":[]},{"level":2,"title":"win32process","slug":"win32process","link":"#win32process","children":[]},{"level":2,"title":"win32process","slug":"win32process-1","link":"#win32process-1","children":[]},{"level":2,"title":"综合","slug":"综合","link":"#综合","children":[]}],"git":{"createdTime":1701435578000,"updatedTime":1701435578000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":9.08,"words":2724},"filePathRelative":"编程语言/python/13常用包/pywin32.md","localizedDate":"2023年12月1日","excerpt":"<h1> pywin32</h1>\\n<p>pywin32 是一个第三方模块库, 直接包装了几乎所有的 Windows API.</p>\\n<h2> 概念</h2>\\n<h3> 句柄</h3>\\n<p>Windows程序中，有各种各样的资源，系统在创建这些资源的时候，都会为他们分配内存，并返回标识这些资源的标识号，这个标识号就是句柄. 在 win32 编程的世界里，包括 \\"窗口、文本框 等所有控件\\" 都是 窗体，所有的窗体都有独立的句柄。要操作任意一个窗体，你都需要找到这个窗体的句柄 。</p>\\n<h3> 消息</h3>\\n<p>消息是用来告诉窗体 \\"发生了什么\\"，比如 给一个按钮发送BN_CLICKED 这么个消息，按钮就知道 \\"哦，我被点了\\".\\n在 Windows 中消息是由一个数值表示的, 并且将这些数值定义为WM_XXX 宏的形式. 例如，鼠标左键按下的消息--WM_LBUTTONDOWN，键盘按下消息--WM_KEYDOWN，字符消息--WM_CHAR，等等。</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
