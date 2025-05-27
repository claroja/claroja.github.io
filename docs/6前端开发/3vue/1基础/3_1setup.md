# setup

setup的设计是为了使用组合式api. 在vue2中data、computed、methods、watch 组织逻辑在大多数情况下都有效。然而，当我们的组件变得更大时，逻辑关注点的列表也会增长。这可能会导致组件难以阅读和理解.

## 案例

```html
<template>
    <p>{{ msg }}</p>
    <button @click="test">test</button>
</template>

<script>
	export default defineComponent{
		name: 'App',
		//此处只是测试一下setup，暂时不考虑响应式的问题。
        setup(){
            let msg = 'hello world'
            function test(){
                console.log("helo")
                alert(`${msg}`)
            }
            return {
                msg,
                test,
            }
        }
	}
</script>
```


## setup的特征

1. setup位于created和beforeCreated只前, 用于代替created和beforeCreated
2. setup函数里不能访问到this
3. setup内可以通过以下hook操作整个生命周期: `onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted,onErrorCaptured,onRenderTracked,onRenderTriggered`
4. setup可接受props,context,其中props由于是响应式数据,不能直接解构赋值,context不是响应式数据,可以直接解构赋值;setup必须返回一个对象,一旦return,就可以像vue2.x的方式使用该属性
5. defineComponent是便于typescript推断类型的组件构造函数,可以传入


## setup的参数: 
- props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性。
- context：上下文对象
    - attrs: 组件外部传递过来，但没有在props配置中声明的属性, 相当于 `this.$attrs`。
    - slots: 收到的插槽内容, 相当于 ```this.$slots```。
    - emit: 分发自定义事件的函数, 相当于 ```this.$emit```

样例: 

1. Demo.vue

	```htm
	<template>
		<slot name="qwe"></slot>
		<button @click="test">测试触发一下Demo组件的Hello事件</button>
	</template>

	<script>
		export default {
			name: 'Demo',
			props:['msg',],
			emits:['hello'],
			setup(props, context){
				console.log('---setup---',props)
				console.log('---setup---',context)
				console.log('---setup---',context.emit) //触发自定义事件的。
				console.log('---setup---',context.slots) //插槽
				//方法
				function test(){
					context.emit('hello',666)
				}
				//返回一个对象（常用）
				return {
					test
				}
			}
		}
	</script>
	```

2. App.vue


	```html
	<template>
		<Demo @hello="showHelloMsg" msg="你好啊">
			<template v-slot:qwe>
				<p>插槽值</p>
			</template>
		</Demo>
	</template>

	<script>
		import Demo from './components/Demo'
		export default {
			name: 'App',
			components:{Demo},
			setup(){
				function showHelloMsg(value){
					alert(`触发hello事件，收到的参数是:${value}！`)
				}
				return {
					showHelloMsg
				}
			}
		}
	</script>
	```