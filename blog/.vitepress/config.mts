import { defineConfig } from 'vitepress'
import { getPosts } from '@theojs/solis/utils'

const posts = { posts: await getPosts(6) }

export default defineConfig({
  title: 'Solis',
  description: '',
  ignoreDeadLinks: true,
  cleanUrls: true,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern'
        }
      }
    }
  },
  themeConfig: {
    ...posts,
    logo: { src: 'https://i.theojs.cn/docs/202405101119004.png' },
    nav: [
      { text: '主页', link: '/' },
      { text: '分类', link: '/pages/category' },
      { text: '归档', link: '/pages/archives' },
      { text: '标签', link: '/pages/tags' }
    ],
    outline: [2, 3],
    outlineTitle: '文章摘要',
    socialLinks: [{ icon: 'github', link: 'https://github.com/Theo-Messi' }],
    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2019-${new Date().getFullYear()} Theo-Messi`
    },
    editLink: {
      pattern: 'https://github.com/Theo-Messi/tools/edit/main/blog/:path',
      text: '为此页提供修改建议'
    },
    // 上次更新
    lastUpdated: {
      text: '最后更新于'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})
