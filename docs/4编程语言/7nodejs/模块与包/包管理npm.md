# 包管理npm

## `npm init`

生成`pakeage.json`文件, 记录依赖. 有两种方式

- `npm init`初始化一个项目
- `npm init vue@latest`, 使用vue工具来初始化一个项目


## `npm install/uninstall`
安装第三方包

- `npm install` 默认找目录下的`pakeage.json`文件
- `npm install <name>@<version>` 安装具体的包


## `npm run <command>`

运行`pakeage.json`中定义的命令

```js
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview --port 5050",
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs --fix --ignore-path .gitignore"
}
```