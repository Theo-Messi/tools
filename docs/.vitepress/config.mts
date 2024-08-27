import { defineConfig } from 'vitepress'
import { imgSize } from '@mdit/plugin-img-size'
import { figure } from '@mdit/plugin-figure'

import Lumenpkg from '../../packages/Lumen/package.json'

const version = `Lumen@` + Lumenpkg.version

export default defineConfig({
  title: 'Lumen',
  description: '用于VitePress主题美化和集成Vue功能组件',
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: { hostname: 'https://tools.theojs.cn' },
  head: [
    ['link', { rel: 'icon', type: 'icon', href: '/TM-FELogo.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'author', content: 'Theo-Messi' }],
    ['meta', { name: 'copyright', content: 'Theo-Messi' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'evisit-after', content: '1 day' }],
    [
      'meta',
      { name: 'description', content: '用于VitePress主题美化和集成Vue功能组件' }
    ],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'zh-CN' }],
    ['meta', { name: 'og:site_name', content: 'Lumen' }],
    ['meta', { name: 'og:title', content: 'Lumen' }],
    ['meta', { name: 'og:url', content: 'https://tools.theojs.cn/' }],
    [
      'meta',
      { name: 'og:image', content: 'https://tools.theojs.cn/TM-FELogo.png' }
    ],
    [
      'meta',
      {
        name: 'og:description',
        content: '用于VitePress主题美化和集成Vue功能组件'
      }
    ],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@TheoMessi_' }],
    ['meta', { name: 'twitter:title', content: 'Lumen' }],
    [
      'meta',
      {
        name: 'twitter:description',
        content: '用于VitePress主题美化和集成Vue功能组件'
      }
    ],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://tools.theojs.cn/TM-FELogo.png'
      }
    ],
    [
      'script',
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          url: 'https://tools.theojs.cn/',
          name: 'Lumen',
          description: '用于VitePress主题美化和集成Vue功能组件',
          author: {
            '@type': 'Person',
            name: 'Theo-Messi'
          }
        })
      }
    ]
  ],
  markdown: {
    image: { lazyLoading: true },
    config: (md) => {
      md.use(imgSize)
      md.use(figure, {
        figcaption: 'alt',
        copyAttrs: '^class$'
      })
    }
  },
  themeConfig: {
    logo: { src: '/TM-FELogo.png', width: 24, height: 24 },
    editLink: {
      pattern: 'https://github.com/Theo-Messi/tools/edit/main/docs/:path',
      text: '为此页提供修改建议'
    },
    // 目录设置
    outline: 'deep', // 索引级别
    outlineTitle: '本页目录', // 目录文本
    // 上次更新
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'full',
        hourCycle: 'h24'
      }
    },
    // 文章翻页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

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
    nav: [
      {
        text: '<i class="fas fa-book" style="margin-right:0.25rem; color:#4CAF50" alt="book"></i> 指南',
        link: '/guide/getting-started'
      },
      {
        text: '<i class="fas fa-bug" style="margin-right:0.25rem;color:#FF4500" alt="bug"></i>提交反馈',
        link: 'https://github.com/Theo-Messi/tools/issues'
      },
      {
        text:
          '<i class="fas fa-clipboard-list" style="margin-right:0.25rem; color:#FF6347" alt="clipboard-list"></i>' +
          version,
        link: 'https://github.com/Theo-Messi/tools/releases/latest'
      }
    ],
    sidebar: {
      guide: {
        base: '/guide/',
        items: [
          {
            // text: '快速开始',
            items: [
              {
                text: '<i class="fas fa-bolt" style="margin-right:0.5rem;color: #63E6BE;"></i>快速开始',
                link: 'getting-started'
              }
            ]
          },
          {
            text: '配置',
            items: [
              {
                text: '<i class="fas fa-palette" style="margin-right:0.5rem;color: #f39c12;"></i>导入主题配色',
                link: 'theme'
              },
              {
                text: '<i class="fas fa-bullhorn" style="margin-right:0.5rem;color: #e74c3c;"></i>首页公告栏',
                link: 'prelink'
              },
              {
                text: '<i class="fas fa-underline" style="margin-right:0.5rem;color: #3498db;"></i>首页下划线',
                link: 'underline'
              },
              {
                text: '<i class="fas fa-cogs" style="margin-right:0.5rem;color: #2ecc71;"></i>页脚配置',
                link: 'footer'
              },
              {
                text: '<i class="fas fa-th-list" style="margin-right:0.5rem;color: #9b59b6;"></i>侧边栏链接',
                link: 'aside'
              },
              {
                text: '<i class="fas fa-video" style="margin-right:0.5rem;color: #e67e22;"></i>视频组件',
                link: 'video'
              },
              {
                text: '<i class="fas fa-id-card" style="margin-right:0.5rem;color: #1abc9c;"></i>链接卡片',
                link: 'links'
              },
              {
                text: '<i class="fas fa-image" style="margin-right:0.5rem;color: #2ecc71;"></i>图片描述',
                link: 'Image-description'
              }
            ]
          }
        ]
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Theo-Messi/tools' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/@theojs/lumen' }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                displayDetails: '显示详细列表',
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                backButtonTitle: '关闭搜索',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  selectKeyAriaLabel: '输入',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
      }
    }
  }
})
