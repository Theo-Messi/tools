import type { DefaultTheme } from 'vitepress'

type SidebarItem = DefaultTheme.SidebarItem

export const sidebar: DefaultTheme.SidebarMulti = {
  '/guide/': { base: '/guide/', items: guide() }
}

export function guide(): SidebarItem[] {
  return [
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
      text: '<i class="fas fa-gears" style="margin-right:0.5rem;color: #3498db;"></i>配置',
      items: [
        {
          text: '<i class="fas fa-palette" style="margin-right:0.5rem;color: #f39c12;"></i>导入主题配色',
          link: 'theme'
        },
        {
          text: '<i class="fas fa-bullhorn" style="margin-right:0.5rem;color: #e74c3c;"></i>首页公告栏',
          link: 'Announcement'
        },
        {
          text: '<i class="fas fa-underline" style="margin-right:0.5rem;color: #3498db;"></i>首页下划线',
          link: 'HomeUnderline'
        },
        {
          text: '<i class="fas fa-gear" style="margin-right:0.5rem;color: #2ecc71;"></i>页脚配置',
          link: 'HomeFooter'
        },
        {
          text: '<i class="fas fa-th-list" style="margin-right:0.5rem;color: #9b59b6;"></i>侧边栏链接',
          link: 'DocAsideLogo'
        },
        {
          text: '<i class="fas fa-video" style="margin-right:0.5rem;color: #e67e22;"></i>视频组件',
          link: 'DocVideoLink'
        },
        {
          text: '<i class="fas fa-id-card" style="margin-right:0.5rem;color: #1abc9c;"></i>链接卡片',
          link: 'LinkCard'
        },
        {
          text: '<i class="fas fa-share-alt" style="margin-right:0.5rem;color: #3498db;"></i>页面分享按钮',
          link: 'ShareButton'
        },
        {
          text: '<i class="fas fa-image" style="margin-right:0.5rem;color: #2ecc71;"></i>图片描述',
          link: 'Image-description'
        },
        {
          text: '<i class="fas fa-comments" style="margin-right:0.5rem;color: #3498db;"></i>Twikoo 评论',
          link: 'DocTwikoo'
        },
        {
          text: '<i class="fas fa-chart-simple" style="margin-right:0.5rem;color: #3498db;"></i>站点统计',
          link: 'analytics'
        }
      ]
    }
  ]
}
