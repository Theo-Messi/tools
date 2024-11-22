import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  ['link', { rel: 'icon', type: 'icon', href: '/Logo.png' }],
  ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
  ['meta', { name: 'theme-color', content: '#ffffff' }],
  ['meta', { name: 'author', content: 'Theo-Messi' }],
  ['meta', { name: 'copyright', content: 'Theo-Messi' }],
  ['meta', { name: 'robots', content: 'index, follow' }],
  ['meta', { name: 'evisit-after', content: '1 day' }],
  ['meta', { name: 'description', content: '用于VitePress主题美化和集成Vue功能组件' }],
  ['meta', { name: 'og:type', content: 'website' }],
  ['meta', { name: 'og:locale', content: 'zh-CN' }],
  ['meta', { name: 'og:site_name', content: 'TheoJS' }],
  ['meta', { name: 'og:title', content: 'TheoJS' }],
  ['meta', { name: 'og:url', content: 'https://tools.theojs.cn/' }],
  ['meta', { name: 'og:image', content: 'https://tools.theojs.cn/Logo.png' }],
  ['meta', { name: 'og:description', content: '用于VitePress主题美化和集成Vue功能组件' }],
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:site', content: '@TheoMessi_' }],
  ['meta', { name: 'twitter:title', content: '@theojs/lumen' }],
  ['meta', { name: 'twitter:description', content: '用于VitePress主题美化和集成Vue功能组件' }],
  ['meta', { name: 'twitter:image', content: 'https://tools.theojs.cn/Logo.png' }],
  [
    'script',
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        url: 'https://tools.theojs.cn/',
        name: '@theojs/lumen',
        description: '用于VitePress主题美化和集成Vue功能组件',
        author: { '@type': 'Person', name: 'Theo-Messi' }
      })
    }
  ]
]
