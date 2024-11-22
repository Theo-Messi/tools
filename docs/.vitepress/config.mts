import { defineConfig } from 'vitepress'
import { groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { head, markdown, nav, sidebar, search, socialLinks } from './configs'

export default defineConfig({
  title: 'TheoJS',
  description: '用于VitePress主题美化和集成Vue功能组件',
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: { hostname: 'https://tools.theojs.cn' },
  head,
  markdown,

  vue: {
    template: { compilerOptions: { isCustomElement: (tag) => tag === 'iconify-icon' } }
  },

  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          scss: 'vscode-icons:file-type-scss2',
          css: 'vscode-icons:file-type-css',
          所有主题: 'logos:typescript-icon',
          部分主题: 'logos:typescript-icon',
          单独导入: 'logos:typescript-icon'
        }
      })
    ],
    css: { preprocessorOptions: { scss: { api: 'modern' } } }
  },

  themeConfig: {
    logo: { src: '/Logo.png', width: 24, height: 24 },
    editLink: {
      pattern: 'https://github.com/Theo-Messi/tools/edit/main/packages/docs/:path',
      text: '为此页提供修改建议'
    },

    // 目录设置
    outline: 'deep', // 索引级别
    outlineTitle: '本页目录', // 目录文本

    // 上次更新
    lastUpdated: {
      text: '最后更新于',
      formatOptions: { dateStyle: 'full', timeStyle: 'full', hourCycle: 'h24' }
    },

    // 文章翻页
    docFooter: { prev: '上一篇', next: '下一篇' },

    // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',

    // 移动端 - menu
    sidebarMenuLabel: '文章',

    // 主题模式切换
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    darkModeSwitchLabel: '主题模式',

    // markdown 外部链接图标
    // externalLinkIcon: true,
    // 语言切换
    langMenuLabel: '切换语言',

    nav,

    sidebar,

    socialLinks,
    search: { provider: 'local', options: search },
    notFound: {
      title: '找不到页面',
      quote: '页面不见了，也许它去找寻新的冒险了！',
      linkLabel: '返回首页重新探索',
      linkText: '返回首页',
      code: '404'
    }
  }
})
