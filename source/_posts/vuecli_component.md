---
title: vuecli_component
toc: true
date: 2021-10-25 22:03:54
tags:
---
# 共用组件位置
1. component文件夹内放置的是共用的组件. 比如布局组件`Header``Footer`
  - 每个组件是一个文件夹, 文件夹名既是组件名, 主入口是`index.vue`.
  - 每个组件中可以再创建子组件, 也是一个文件夹.
2. vies文件夹放置的可变组件, 通过`router`来控制变换




# 注册组件
## 全局注册组件 在`main.js`中导入
1. 使用别人的组件, 比如element
```js
import {Container, Header, Aside, Main} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
```

2. 自定义组件
直接根据路径进行导入即可
`import Header from "./components/Header"`


## 局部注册组件
假设我们已经在components文件夹里创建了Header组件(如果使用elementui导入的组件也是同理)
1. 引入组件 在APP.vue中的`script`中引入: `import Header from "./components/Header";`
2. 注册组件 在APP.vue中的`script`中注册:
```js
export default {
  name: "",
  components: {
    Header,
  },
};
```
3. 使用组件 在APP.vue中的`template`中使用: `<Header />`
```js
  <div>
    <Header />
  </div>
```

# 引入全局样式
1. 通过public文件夹下的`index.html`引入: `<link rel="stylesheet" href="/reset.css">`
2. 在`main.js`中直接使用`import 'element-plus/dist/index.css'`来引入