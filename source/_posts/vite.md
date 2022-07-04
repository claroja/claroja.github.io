[安装](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
[配置](https://vitejs.dev/config/)

[配置案例参考](https://ithelp.ithome.com.tw/articles/10270465?sc=iThelpR)

# [配置代理](https://vitejs.dev/config/#server-proxy)

```js
// vite.config.js
import { defineConfig } from "vite";
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        // 将前端访问的http://localhost:3000/api, 转发
        target: "http://localhost:3001", // 转发的目的地，完整的url是`http://localhost:3001/api`
      },
    },
  },
});
```

以上配置如果我们前端发送请求`http://localhost:3000/api/login`，后端收到的是`http://localhost:3001/api/login`, 如果想后端收到的去掉`/api`, 可以添加`rewrite`属性:

```js
      "/api": {
        // 将前端访问的http://localhost:3000/api, 转发, `/api`path路径会镜像复制到新的端口
        target: "http://localhost:3001", // 转发的目的地，完整的url是`http://localhost:3001/api`
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
```
