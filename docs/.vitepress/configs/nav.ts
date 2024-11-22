import type { DefaultTheme } from 'vitepress'

import Lumenpkg from '../../../src/package.json'

const Lumenversion = `v` + Lumenpkg.version

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '<iconify-icon icon="fa6-solid:bolt" style="margin-right:0.25em;color:#63E6BE;"></iconify-icon>快速开始',
    link: '/guide/getting-started'
  },
  {
    text: '<iconify-icon icon="fa6-solid:gears" style="margin-right:0.25rem;color:#3498db;"></iconify-icon>配置',
    link: '/guide/theme'
  },
  {
    text: '<iconify-icon icon="fa6-solid:bug" style="margin-right:0.25rem;color:#FF4500;" alt="bug"></iconify-icon>提交反馈',
    link: 'https://github.com/Theo-Messi/lumen/issues'
  },
  {
    text:
      '<iconify-icon icon="fa6-solid:clipboard-list" style="margin-right:0.25rem;color:#FF6347;" alt="clipboard"></iconify-icon>' +
      Lumenversion,
    link: `https://github.com/Theo-Messi/lumen/releases/tag/${Lumenversion}`
  }
]
