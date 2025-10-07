# props

`defineProps`是一个仅`<script setup>`中可用的编译宏命令，并不需要显式地导入。`defineProps`会返回一个对象，其中包含了可以传递给组件的所有`props`：

1. 父组件通过属性传值

    ```htm
    <BlogPost data="My journey with Vue" />
    ```

2. 子组件通过属性接值

    ```htm
    <script setup>
        const { data } = defineProps(['data'])
    </script>

    <template>
        <h4>{{ data }}</h4>
    </template>

    ```

## 参考

1. <https://cn.vuejs.org/guide/essentials/component-basics.html>
2. <https://cn.vuejs.org/guide/components/props.html>
