注意next有很多重名的仓库, 注意辨识[官网](https://github.com/next-theme)


# 安装
1. [安装next](https://theme-next.js.org/docs/getting-started/#Hexo-Installation)
2. [数学公式](https://theme-next.js.org/docs/third-party-services/math-equations.html)


# hexo的目录结构
```
.
├── .deploy          #部署文件夹
├── public           #html源码，hexo g生成
├── scaffolds        #模板
├── scripts          #扩展脚本
├── source           #文章源码
|   ├── _drafts      #草稿
|   └── _posts       #文章
├── themes           #主题
|   ├── next         #NexT主题
├── _config.yml      #博客配置
└── package.json     #应用程序数据
```

# next主题的目录结构
```
├── .github                #github信息
├── languages              #多语言
|   ├── _en.yml            #默认语言
|   └── zh-CN.yml          #简体中文
|   └── zh-TW.yml          #繁体中文
├── layout                 #布局，根目录下的*.swig文件是对主页，分页，存档等的控制
|   ├── _custom            #可以自定义的模板，覆盖原有模板
|   |   ├── head.swig      #文首样式
|   |   ├── header.swig    #头部样式
|   |   ├── sidebar.swig   #侧边栏样式
|   ├── _macro             #可以自定义的模板，覆盖原有模板
|   |   ├── post.swig      #文章模板
|   |   ├── reward.swig    #打赏模板
|   |   ├── sidebar.swig   #侧边栏模板
|   ├── _partial           #局部的布局
|   |   ├── head           #头部模板
|   |   ├── search         #搜索模板
|   |   ├── share          #分享模板
|   ├── _script            #局部的布局
|   ├── _third-party       #第三方模板
|   ├── _layout.swig       #主页面模板
|   ├── index.swig         #主页面模板
|   ├── page               #页面模板
|   └── tag.swig           #tag模板
├── scripts                #script源码
|   ├── tags               #tags的script源码
|   ├── marge.js           #页面模板
├── source                 #源码
|   ├── css                #css源码
|   |   ├── _common        #*.styl基础css
|   |   ├── _custom        #*.styl自定义局部css
|   |   └── _mixins        #mixins的css
|   ├── fonts              #字体
|   ├── images             #图片
|   ├── js                 #javascript源代码
|   └── lib                #引用库
├── _config.yml            #主题配置文件
└── README.md              #说明文件
```

`_config.next.yml`文件中配置自定义的主题
```
custom_file_path:
  #head: source/_data/head.swig
  #header: source/_data/header.swig
  #sidebar: source/_data/sidebar.swig
  #postMeta: source/_data/post-meta.swig
  #postBodyEnd: source/_data/post-body-end.swig
  #footer: source/_data/footer.swig
  #bodyEnd: source/_data/body-end.swig
  #variable: source/_data/variables.styl
  #mixin: source/_data/mixins.styl
  #style: source/_data/styles.styl
```


http://blog.bill.moe/hexo-theme-next-config-optimization/
https://segmentfault.com/a/1190000009544924