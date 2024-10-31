import type { DefaultTheme } from 'vitepress'

import Lumenpkg from '../../../Lumen/package.json'
import Solispkg from '../../../Solis/package.json'
const Lumenversion = `Lumen@` + Lumenpkg.version
const Solisversion = `Solis@` + Solispkg.version

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '<span style="display: inline-flex; align-items: center;"><img src="/Logo.png" alt="logo" style="margin-right: 0.25rem;width:1em; height:1em; "/>Lumen</span>',
    link: '/',
    activeMatch: '^/guide/'
  },
  {
    text: '<span style="display: inline-flex; align-items: center;"><img src="https://i.theojs.cn/docs/202405101119004.png" alt="logo" style="margin-right: 0.25rem;width:1em; height:1em; "/>Solis</span>',
    link: '/solis',
    activeMatch: '^/solis/'
  },
  {
    text: '<i class="fas fa-bug" style="margin-right:0.25rem;color:#FF4500" alt="bug"></i>提交反馈',
    link: 'https://github.com/Theo-Messi/tools/issues'
  },
  {
    text: '<i class="fas fa-clipboard-list" style="margin-right:0.25rem; color:#FF6347" alt="clipboard-list"></i>变更日志',
    items: [
      {
        text: Lumenversion,
        link: `https://github.com/Theo-Messi/tools/releases/tag/${Lumenversion}`
      },
      {
        text: Solisversion,
        link: `https://github.com/Theo-Messi/tools/releases/tag/${Solisversion}`
      }
    ]
  }
]
