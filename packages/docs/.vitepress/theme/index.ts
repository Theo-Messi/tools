import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'

import {
  DocBox,
  DocLinks,
  DocBoxCube,
  DocVideoLink,
  Announcement,
  DocAsideLogo,
  HomeUnderline,
  HomeFooter,
  Twikoo,
  ShareButton,
  googleAnalytics,
  umamiAnalytics,
  baiduAnalytics,
  trackPageview
} from '@theojs/lumen'
import { Aside_Data, Footer_Data, Twikoo_Data } from '../data'
import 'virtual:group-icons.css'
import '@theojs/lumen/theme'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(Announcement),
      'aside-ads-before': () => h(DocAsideLogo, { Aside_Data }),
      'aside-outline-before': () => h(ShareButton),
      'layout-bottom': () => h(HomeFooter, { Footer_Data }),
      'doc-after': () => h(Twikoo, { Twikoo_Data })
    })
  },
  enhanceApp: ({ app }) => {
    googleAnalytics({ id: 'G-DMPNK5Q8CL' })
    umamiAnalytics({ id: '7c279616-3ad7-40a1-b7bf-55f1726b51b7', src: 'https://cloud.umami.is/script.js' })

    // 只有在浏览器环境下才初始化百度统计
    baiduAnalytics({ baiduId: '73139204b3e7f47b455402f405fd3131' })
    if (typeof window !== 'undefined') {
      trackPageview('73139204b3e7f47b455402f405fd3131', window.location.href)
    }

    app.component('Box', DocBox)
    app.component('Links', DocLinks)
    app.component('BoxCube', DocBoxCube)
    app.component('Home', HomeUnderline)
    app.component('Vid', DocVideoLink)
    app.component('Twikoo', Twikoo)
  }
}
