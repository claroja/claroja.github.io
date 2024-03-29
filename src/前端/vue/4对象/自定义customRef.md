# customRef
创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制。

## 实践
- 案例1: 实现防抖效果：
    ```html
    <template>
    <input type="text" v-model="keyword">
    <h3>{{keyword}}</h3>
    </template>

    <script>
    import {ref,customRef} from 'vue'
    export default {
        name:'Demo',
        setup(){
            // let keyword = ref('hello') //使用Vue准备好的内置ref
            //自定义一个myRef
            function myRef(value,delay){
                let timer
                //通过customRef去实现自定义
                return customRef((track,trigger)=>{
                    return{
                        get(){
                            track() //告诉Vue这个value值是需要被“追踪”的
                            return value
                        },
                        set(newValue){
                            clearTimeout(timer)
                            timer = setTimeout(()=>{
                                value = newValue
                                trigger() //告诉Vue去更新界面
                            },delay)
                        }
                    }
                })
            }
            let keyword = myRef('hello',500) //使用程序员自定义的ref
            return {
                keyword
            }
        }
    }
    </script>
    ```
