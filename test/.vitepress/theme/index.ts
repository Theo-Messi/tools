import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '../../../scss/all.scss'
import {
  DocBox,
  DocLinks,
  DocBoxCube,
  DocVideoLink,
  Announcement,
  DocAsideLogo
} from '../../../vue'
import { banners } from '../data/AsideData'
export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(Announcement),
      'aside-ads-before': () => h(DocAsideLogo, { banners })
    })
  },
  enhanceApp: ({ app }) => {
    app.component('Box', DocBox)
    app.component('Links', DocLinks)
    app.component('BoxCube', DocBoxCube)
    app.component('VideoLink', DocVideoLink)
  }
}
