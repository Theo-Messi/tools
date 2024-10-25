export { default as Archives } from '../components/Archives.vue'
export { default as Category } from '../components/Category.vue'
export { default as Tags } from '../components/Tags.vue'
export { default as Page } from '../components/Page.vue'
export { default as Twikoo } from '../components/Twikoo.vue'
export { default as Info } from '../components/DocInfo.vue'

import '../style/index.scss'

import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { Archives, Category, Tags, Page } from '@theojs/solis'

const Solistheme: Theme = {
  extends: DefaultTheme,

  enhanceApp: ({ app }) => {
    app.component('Tags', Tags)
    app.component('Category', Category)
    app.component('Archives', Archives)
    app.component('Page', Page)
  }
}

export default Solistheme
