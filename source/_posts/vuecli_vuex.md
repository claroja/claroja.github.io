---
title: vuecli_vuex
toc: true
date: 2021-10-25 22:03:54
tags:
---
# 安装
`npm install --save vuex`


1. 创建`src/store`
- `index.js`文件用来注册vuex插件, 和暴露实例
```js
import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

import user from './user';
export default new Vuex.Store({
     //模块：把小仓库进行合并变为大仓库
    modules:{
        user
    }
})
```

- `search.js` 用来获取和存储具体的数据
```js
import { reqGetSearchInfo } from "@/api";
//search模块的仓库
const state = {
    searchList:{}
};
//mutions是唯一修改state的地方
const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList;
  },
};
//action|用户处理派发action地方的，可以书写异步语句、自己逻辑地方, 不能修改state
const actions = {
  //获取search模块数据
  async getSearchList({ commit }, params = {}) {//reqgetCategoryList返回的是一个Promise对象
    let result = await reqGetSearchInfo(params);
    if (result.code == 200) {
      commit("GETSEARCHLIST", result.data);
    }
  },
};
const getters = {
   //当前形参state，当前仓库中的state，并非大仓库中的那个state
   goodsList(state){
     return state.searchList.goodsList||[];//如果返回不成功则返回空数组
   }
   ,
   trademarkList(state){
     return state.searchList.trademarkList||[];
   },
   attrsList(state){
     return state.searchList.attrsList||[];
   }
};
export default {
  state,
  mutations,
  actions,
  getters,
};
```

2. 在`main.js`中引入, 并挂载`$store`
```js
import store from '@/store';
new Vue({
  render: (h) => h(App),
  store //在入口文件这里注册store,在每一个组件的身上都拥有一个$store这个属性
}).$mount("#app");
```




3. 在组件中使用
首先派发action
```js
mounted() {
  //派发action
  this.$store.dispatch("userLogin");
},
```
然后读取vuex中的内容
```js
import { mapGetters,mapState} from "vuex";
export default {
  computed: {
    ...mapGetters(["goodsList"]),
    ...mapState({
        total:state=>state.search.searchList.total
    })
  },
}
```