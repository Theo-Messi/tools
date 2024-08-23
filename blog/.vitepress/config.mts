import { defineConfig } from 'vitepress'
import { getPosts } from '@theojs/solis/utils'

export default defineConfig({
  title: 'Solis',
  description: '',
  ignoreDeadLinks: true,
  cleanUrls: true,
  themeConfig: {
    posts: await getPosts(2),
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
    }
  }
})
