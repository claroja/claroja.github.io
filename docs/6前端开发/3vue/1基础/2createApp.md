# createApp


1. `main.js`

    ```js
    //引入的不再是Vue构造函数了，引入的是一个名为createApp的工厂函数
    import { createApp } from 'vue'
    import App from './App.vue'
    //创建应用实例对象——app(类似于之前Vue2中的vm，但app比vm更“轻”)
    const app = createApp(App)
    //挂载
    app.mount('#app')
    ```

2. `App.vue`

    ```htm
    <template>
        <p>{{ msg }}</p>
        <button @click="test">test</button>
    </template>

    <script>
        export default {
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

## 参考
1. https://cn.vuejs.org/guide/essentials/application.html