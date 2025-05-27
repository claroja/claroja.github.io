# markdown


原生revealjs的MD插件不支持MD中的`<script>`标签, 也不能在`index.html`中写js脚本获得MD中的DOM元素, 所以无法使用Echarts.  
另外需要使用`***`和`---`来分隔不同的幻灯片, 与书写MD本身有一些冲突, 不够通用.

解决方案是使用`pandoc`先将MD文件转化为revealjs文件, 可参考[slide-shows](https://pandoc.org/MANUAL.html#slide-shows). 然后将`<div class="reveal">`的内容复制到原生的revealjs工程中的`index.html`中. 这样可以解决上面的两个问题:
1. 在需要插入echarts的地方, `div`直接写入对应幻灯片的, 然后将数据写入`<script>`中. 注意这都是在`index.html`的操作, 而不是在MD文件中的.
2. `pandoc`会自动将一级标题转化为横向的幻灯片, 二级标题转换为纵向的幻灯片, 这样就和MD书写统一了



## 使用pandoc生成
参考[slide-shows](https://pandoc.org/MANUAL.html#slide-shows)与[Pandoc与Reveal.js制作幻灯片](https://zhuanlan.zhihu.com/p/113146276)

`pandoc example.md -o example.html -t revealjs -s`

## revealjs原生的markdown支持
使用`***`来分隔横向的幻灯片, 使用`---`来分隔纵向的幻灯片.


### 在`section`的属性配置MD
- 配置`<section>`
    - `data-markdown="example.md"`, markdown的源文件位置, 默认是`reveal.js`工程的根目录
    - `data-separator="\*\*\*"`, 配置横向幻灯片的分隔符, 这里使用MD的`***`分隔线来代替这里注意`***`要使用转义
    - `data-separator-vertical="---"`, 配置纵向幻灯片的分隔符, 这里使用MD的`---`分割线来代替
    - `data-charset="utf8"`, 设置MD的编码格式
    > 无论`***`还是`---`在MD中的语法显示都是一样的, 所以无法做到MD和reveal的完全对应, 但暂时没有更好的办法.

- 开启MD插件, 这个插件是reveal原生的, 不需要额外导入.

    ```js
    Reveal.initialize({
        hash: true,
        plugins: [ RevealMarkdown]
    });
    ```
### 书写MD


```markdown
## 1

slide 1

***

## 2.1

slide 2.1

---

## 2.2

slide 2.2

```