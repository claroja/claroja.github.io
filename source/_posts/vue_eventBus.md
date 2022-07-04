---
title: vue_eventBus
toc: true
date: 2021-10-25 22:03:54
---

使用不同组件的方法.


1. `main.js`中使用`config.globalProperties`注册`emitter`

```js
import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt';
const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.mount('#app');
```

2. `a.vue`使用emitter来调用
```vue
<template>
  <header>
    <button @click="aFunc"/>click</button>
  </header>
</template>
<script >
export default { 
  data() {
    return {
    };
  },
  methods: {
    aFunc() {
      this.emitter.emit("bFunc");
    }
  }
};
</script>
```

3. `b.vue`注册一个方法
```vue
<template>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  mounted() { 
    this.emitter.on("bFunc", () => {
      console.log("Func in b")
    });
  }
};
</script>
```


# vue2-cli
在vue2中, Vue实例可以使用(`$on`, `$off` and `$once`)来在组件中触发事件传递消息.


```js
// eventBus.js
const eventBus = new Vue()
export default eventBus
```

```js
// ChildComponent.vue
import eventBus from './eventBus'
export default {
  mounted() {
    // adding eventBus listener
    eventBus.$on('custom-event', () => {
      console.log('Custom event triggered!')
    })
  },
  beforeDestroy() {
    // removing eventBus listener
    eventBus.$off('custom-event')
  }
}
```

```js
// ParentComponent.vue
import eventBus from './eventBus'
export default {
  methods: {
    callGlobalCustomEvent() {
      eventBus.$emit('custom-event') // if ChildComponent is mounted, we will have a message in the console
    }
  }
}
```