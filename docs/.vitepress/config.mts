import { defineConfig } from 'vitepress'
// 导入 sidebar 变量
import sidebar from './sidebar.ts'
import navbar from './navbar.ts'
// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Claroja's Blog",
    description: "A VitePress Site",
    ignoreDeadLinks: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: navbar,
        // 替换现有的 sidebar 配置
        sidebar: sidebar,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ]
    },
    ignoreDeadLinks: true,
    markdown: {
        math: true
    }
})
