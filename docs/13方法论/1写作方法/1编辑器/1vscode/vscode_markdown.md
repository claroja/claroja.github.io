# vscode_markdown


## 插入图片与连接
1. 手动插入

    插入文章或图片时, [intellisense](https://code.visualstudio.com/docs/editor/intellisense)会自动补全, 当输入`./`或者`/`时自动触发, 也可以使用`ctrl+space`自动触发.

    当输入`#`时, 会自动补全标题, 如果不清楚具体哪个文章的标题, 可以输入`##`, 会自动补全当前工程下的所有相似标题

2. 直接拖拽
    1. 工作区内的文件

        可以直接拖拽文章或图片, 到文档里, 然后按着`shift`会自动生成连接的路径.

    2. 工作区外的文件

        默认, 当从工作目录外拖拽文章或图片, 到文档里时, vscode会自动复制一份到文档里. ??



## 链接
1. 链接验证: `"markdown.validate.enabled": true`, 验证文件或文章链接是否有效.
2. 查找标题所有被引用的地方: `shift+alt+f12`
3. 链接修改
    1. 使用`F2`或者右键`rename`标题, 则所有引用的地方会自动修改
    2. 设置修改标题时, 引用的地方自动修改`markdown.updateLinksOnFileMove.enabled: "prompt"`








## 参考
- https://code.visualstudio.com/docs/languages/markdown