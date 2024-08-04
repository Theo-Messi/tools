import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'tmfe',
  description: 'vitepress beautification module',
  cleanUrls: true,
  head: [['link', { rel: 'icon', type: 'icon', href: '/avatar.png' }]],
  themeConfig: {
    logo: { src: '/avatar.png', width: 24, height: 24 },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'test', link: '/test' }
    ],

    sidebar: [
      {
        text: '测试',
        link: '/test'
        /*         items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ] */
      }
    ]
  }
})
