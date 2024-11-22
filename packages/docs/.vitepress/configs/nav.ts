import type { DefaultTheme } from 'vitepress'

import Lumenpkg from '../../../Lumen/package.json'

const Lumenversion = `Lumen@` + Lumenpkg.version

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '<iconify-icon icon="mdi:flash" style="margin-right:0.25em;color:#63E6BE;"></iconify-icon>快速开始',
    link: '/guide/getting-started'
  },
  {
    text: '<iconify-icon icon="mdi:cogs" style="margin-right:0.5rem;color:#3498db;"></iconify-icon>配置',
    link: '/guide/theme'
  },
  {
    text: '<iconify-icon icon="mdi:bug" style="margin-right:0.25rem;color:#FF4500;" alt="bug"></iconify-icon>提交反馈',
    link: 'https://github.com/Theo-Messi/tools/issues'
  },
  {
    text:
      '<iconify-icon icon="mdi:clipboard-text" style="margin-right:0.25rem;color:#FF6347;" alt="clipboard"></iconify-icon>' +
      Lumenversion,
    link: `https://github.com/Theo-Messi/tools/releases/tag/${Lumenversion}`
  }
]
