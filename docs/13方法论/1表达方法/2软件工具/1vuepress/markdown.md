# markdown

安装MD增强[vuepress-plugin-md-enhance](https://plugin-md-enhance.vuejs.press/zh/)

安装主题[vuepress-theme-hope](https://github.com/vuepress-theme-hope/vuepress-theme-hope)


写python脚本, 完成:

1. 将标题加1级
2. 将文件路径前一级加上文章名称路径



个性化配置:

```yml
  pageInfo: false, // 关闭文章信息
  breadcrumb: false, // 关闭面包屑导航
```



# 博客文档组织形式

1. 将所有文件和文件夹, 放在根目录下. 然后在导航中自定义路径.
2. 按目录结构将文章存放在距离目录下.

第一种方法, 更符合编程习惯, 如果仅需要更新导航栏, 则每次写完文章后只需要更新导航栏配置即可. 但是如果想在首页自动生成链接, 则无法进行模块排序和划分. 这一点显然第二种方法更好.

最终头导航栏和侧边导航栏功能设计为:

- 头导航栏: 设一级和二级标题, 自动链接到首页的位置
- 侧导航栏: 设三级和更高级标题, 链接到具体文章.



# 目录结构最佳实践

同级目录下不能即出现下一级目录(但可以出现文章的资源目录), 又出现文章.



建议:
- 苹果
  - 介绍
    - 苹果发源
    - 苹果构成
  - 种类1苹果
  - 种类2苹果

禁止:

- 苹果
  - 苹果发源
  - 苹果构成
  - 种类1苹果
  - 种类2苹果


# 导航分类


文档结构
一级标题(目录): 综合, 比如法学, 是由民法, 民诉, 刑法, 刑诉等构成; 又如数学, 是由线代, 微积分, 代数构成; 编程语言, 由汇编, C, java, python构成
二级标题(目录): 就是综合下面的具体学科, 详细见一级标题.
三级标题(目录): 是学科的张章节, 如民法, 包含总则, 所有权, 继承等章节

> 有些学科会出现册, 比如上册下册, 或者编, 比如总则编, 物权编等. 可以作为三级标题, 章节作为四级标题

四级标题(目录): 章节的具体内容

文章中, 只出现一级标题和二级标题, 剩余的文章结构(三级, 四级, 五级)均使用列表表示. 当然, 也可以从二级标题开始使用列表表示.




# 文章排序

文章分为有序文章和无序文章.
  - 有序文章是指阅读有先后次序, 常见情况是后面的文章依赖于前面的文章. vuepress的实现方法有两种:
    - 在`sidebar.ts`中设置`sidebar: "structure"`, `sidebarSorter: "filename"`, 即按文件名称排序, 然后根据需要写文件名, 比如在文件名前加`1`,`2`,`3`来调整顺序. 然后在文章内部, 在`title`处将序号省去.
    - 在`sidebar.ts`中设置`sidebar: sidebar`, 然后使用`genIndex.py`自动生成`sidebar.ts`文件
  
    > 🔴:使用`第1章`,`第2章`的表述, 而不应该使用`第一章`,`第二章`, 因为拼音排序无法区分`一`,`二`.
  
  - 无需文章是指阅读没有先后次序, 无论是`sidebar: "structure"`还是通过`genIndex.py`自动生成`sidebar.ts`文件, 都是默认按照拼音字母排序




# 自定组件

1. 参考官网步骤[register-components](https://v2.vuepress.vuejs.org/zh/reference/plugin/register-components.html#register-components)


1. 配置插件目录
2. 
```ts
// .vuepress/config.ts
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)
export default {
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
}

```

3. 创建`.vuepress/components`, 里面的`*.vue`文件既可以被直接调用


参考[Vuepress2.x Markdown 中使用 Vue 组件](https://blog.csdn.net/sinat_31213021/article/details/119385175)




