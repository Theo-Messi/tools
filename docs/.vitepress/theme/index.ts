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
  umamiAnalytics
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
    umamiAnalytics({
      id: '02dffc33-9ede-4c00-a0a2-4c988b752ac8',
      src: 'https://umami.theojs.cn/script.js'
    })
    app.component('Box', DocBox)
    app.component('Links', DocLinks)
    app.component('BoxCube', DocBoxCube)
    app.component('Home', HomeUnderline)
    app.component('Vid', DocVideoLink)
    app.component('Twikoo', Twikoo)
  }
}
