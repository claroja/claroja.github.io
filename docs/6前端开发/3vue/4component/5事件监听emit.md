# 4事件监听emit


1. 子组件

    子组件通过`$emit('enlarge-text')"`向父组件发射了一个`enlarge-text`事件

    ```htm
    <script setup>
        defineProps(['title'])
        defineEmits(['enlarge-text'])
    </script>

    <template>
        <div class="blog-post">
            <h4>{{ title }}</h4>
            <button @click="$emit('enlarge-text')">Enlarge text</button>
        </div>
    </template>
    ```

2. 父组件通过@(v-one)来监听子组件发射的`enlarge-text`事件.

    ```htm
    <script setup>
        import { ref } from 'vue'
        import BlogPost from './BlogPost.vue'
        
        const posts = ref([
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
        ])

        const postFontSize = ref(1)
    </script>

    <template>
        <div :style="{ fontSize: postFontSize + 'em' }">
            <BlogPost
            v-for="post in posts"
            :key="post.id"
            :title="post.title"
            @enlarge-text="postFontSize += 0.1"
            ></BlogPost>
        </div>
    </template>
    ```

## 参考
1. https://cn.vuejs.org/guide/essentials/component-basics.html
2. https://cn.vuejs.org/guide/components/events.html












