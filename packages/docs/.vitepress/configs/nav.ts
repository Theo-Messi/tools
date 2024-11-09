import type { DefaultTheme } from 'vitepress'

import Lumenpkg from '../../../Lumen/package.json'

const Lumenversion = `Lumen@` + Lumenpkg.version

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '<i class="fas fa-bolt" style="margin-right:0.5rem;color: #63E6BE;"></i>快速开始',
    link: '/guide/getting-started'
  },
  { text: '<i class="fas fa-gears" style="margin-right:0.5rem;color: #3498db;"></i>配置', link: '/guide/theme' },
  {
    text: '<i class="fas fa-bug" style="margin-right:0.25rem;color:#FF4500" alt="bug"></i>提交反馈',
    link: 'https://github.com/Theo-Messi/tools/issues'
  },
  {
    text:
      '<i class="fas fa-clipboard-list" style="margin-right:0.25rem; color:#FF6347" alt="clipboard-list"></i>' +
      Lumenversion,
    link: `https://github.com/Theo-Messi/tools/releases/tag/${Lumenversion}`
  }
]
