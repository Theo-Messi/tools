import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  ['link', { rel: 'icon', type: 'icon', href: '/Logo.png' }],
  ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
  ['meta', { name: 'theme-color', content: '#ffffff' }],
  ['meta', { name: 'author', content: 'Theo-Messi' }],
  ['meta', { name: 'copyright', content: 'Theo-Messi' }],
  ['meta', { name: 'robots', content: 'index, follow' }],
  ['meta', { name: 'evisit-after', content: '1 day' }],
  ['meta', { name: 'description', content: '✨ 集成 Vue 功能组件和主题美化的 VitePress 插件' }],
  ['meta', { name: 'og:type', content: 'website' }],
  ['meta', { name: 'og:locale', content: 'zh-CN' }],
  ['meta', { name: 'og:site_name', content: 'Lumen' }],
  ['meta', { name: 'og:title', content: 'Lumen' }],
  ['meta', { name: 'og:url', content: 'https://lumen.theojs.cn/' }],
  ['meta', { name: 'og:image', content: 'https://lumen.theojs.cn/Logo.png' }],
  ['meta', { name: 'og:description', content: '✨ 集成 Vue 功能组件和主题美化的 VitePress 插件' }],
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:site', content: '@TheoMessi_' }],
  ['meta', { name: 'twitter:title', content: '@theojs/lumen' }],
  ['meta', { name: 'twitter:description', content: '✨ 集成 Vue 功能组件和主题美化的 VitePress 插件' }],
  ['meta', { name: 'twitter:image', content: 'https://lumen.theojs.cn/Logo.png' }],
  [
    'script',
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        url: 'https://lumen.theojs.cn/',
        name: '@theojs/lumen',
        description: '✨ 集成 Vue 功能组件和主题美化的 VitePress 插件',
        author: { '@type': 'Person', name: 'Theo-Messi' }
      })
    }
  ]
]
