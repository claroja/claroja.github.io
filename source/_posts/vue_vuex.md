---
title: vue_vuex
toc: true
date: 2021-10-25 22:03:54
tags:
---


# 基础
1. vuex为不同的组件提供公共的数据存储
2. 两个个重要概念:
    1. 首先dispatch到Actions(服务员,先对数据做处理)
    2. 然后commit到Mutations(厨子, 直接操作数据, state)
    可参考官网:https://vuex.vuejs.org/zh/
    


1. Vue.use() 用来添加插件, 这样就可以在new Vue()中增加键
2. export 要使用{} export default 不需要,default作用
3. 无论`import`在哪 都是先执行


# 样例
1. 首先给Vue插入Vuex插件
2. 准备Vuex.store 将state, actions, mutations组合成Vuex.Store
3. 在Vue实例中挂载store
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>组件</title>
        <script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
        <script src="https://cdn.bootcdn.net/ajax/libs/vuex/3.5.1/vuex.js"></script>	<body>
		<div id="root">
			<!-- 第三步：编写组件标签 -->
			<Count></Count>
		</div>
	</body>
	<script type="text/javascript">
        
        // 1. 激活插件
        Vue.use(Vuex)
        // 2. 准备vuex
        // 2.1 准备state——用于存储数据
        const state = {
            sum:0 //当前的和
        }
        // 2.2 准备actions——用于响应组件中的动作
        const actions = {
            jiaOdd(context,value){
                console.log('actions中的jiaOdd被调用了')
                if(context.state.sum % 2){
                    context.commit('JIA',value)
                }
            },
            jiaWait(context,value){
                console.log('actions中的jiaWait被调用了')
                setTimeout(()=>{
                    context.commit('JIA',value)
                },500)
            }
        }
        // 2.3 准备mutations——用于操作数据（state）
        const mutations = {
            JIA(state,value){
                console.log('mutations中的JIA被调用了')
                state.sum += value
            },
            JIAN(state,value){
                console.log('mutations中的JIAN被调用了')
                state.sum -= value
            }
        }

        // 2.4 组合成store
        let store = new Vuex.Store({
            actions,
            mutations,
            state,
        })


		const Count = Vue.extend({//Vue.extend可以省略
			template:`
            <div>
                <h1>当前求和为：{{$store.state.sum}}</h1>
                <select v-model.number="n">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button @click="increment">+</button>
                <button @click="decrement">-</button>
                <button @click="incrementOdd">当前求和为奇数再加</button>
                <button @click="incrementWait">等等再加</button>
            </div>
			`,
            name:'Count',
            data() {
                return {
                    n:1, //用户选择的数字
                }
            },
            methods: {
                increment(){
                    this.$store.commit('JIA',this.n)
                },
                decrement(){
                    this.$store.commit('JIAN',this.n)
                },
                incrementOdd(){
                    this.$store.dispatch('jiaOdd',this.n)
                },
                incrementWait(){
                    this.$store.dispatch('jiaWait',this.n)
                },
            },
		})
		
		// 3. 创建vm
		new Vue({
			el:'#root',
			data:{
				msg:'你好啊！'
			},
			components:{
				Count,
			},
            store,
		})

	</script>
</html>

```


# 借助mapState,mapMutations,MapActions来简化代码

```js
		computed:{
			//借助mapState生成计算属性，从state中读取数据。（对象写法）
			// ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),

			//借助mapState生成计算属性，从state中读取数据。（数组写法）
			...mapState(['sum','school','subject']),

			/* ******************************************************************** */

			//借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
			// ...mapGetters({bigSum:'bigSum'})
			
			//借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
			...mapGetters(['bigSum'])

		},
		methods: {
			//程序员亲自写方法
			/* increment(){
				this.$store.commit('JIA',this.n)
			},
			decrement(){
				this.$store.commit('JIAN',this.n)
			}, */

			//借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
			...mapMutations({increment:'JIA',decrement:'JIAN'}),

			//借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)
			// ...mapMutations(['JIA','JIAN']),

			/* ************************************************* */

			//程序员亲自写方法
			/* incrementOdd(){
				this.$store.dispatch('jiaOdd',this.n)
			},
			incrementWait(){
				this.$store.dispatch('jiaWait',this.n)
			}, */

			//借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
			...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})

			//借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(数组写法)
			// ...mapActions(['jiaOdd','jiaWait'])
		},
```


https://vuex.vuejs.org/zh/