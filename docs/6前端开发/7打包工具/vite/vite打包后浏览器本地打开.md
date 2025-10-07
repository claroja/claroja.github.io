# vite打包后浏览器本地打开

## 问题

vite直接build时, 仅支持http协议, 而不支持file协议

## 解决

将所有文件打包成一个html文件, 更改`vite.config.ts`:

```ts
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { viteSingleFile } from "vite-plugin-singlefile"

export default defineConfig({
    plugins: [vue(), viteSingleFile()],
})
```


## 参考
1. [使用vite打包单个组件和直接使用浏览器打开打包的方式](https://juejin.cn/post/7237240999243694117)
2. [vite-plugin-singlefile](https://github.com/richardtallent/vite-plugin-singlefile/tree/main)