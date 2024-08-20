/* 导出组件 */
export { default as DocBox } from './DocBox.vue'
export { default as DocLinks } from './DocLinks.vue'
export { default as DocBoxCube } from './DocBoxCube.vue'
export { default as DocVideoLink } from './DocVideoLink.vue'
export { default as Announcement } from './Announcement.vue'
export { default as DocAsideLogo } from './DocAsideLogo.vue'
export { default as HomeFooter } from './HomeFooter.vue'
export { default as HomeUnderline } from './HomeUnderline.vue'
export { default as DocAttachment } from './DocAttachment.vue'

/** 引入 iconify-icon
 * eg: <iconify-icon icon="logos:pnpm"></iconify-icon>
 * see: https://icon-sets.iconify.design/ */

import '@iconify/vue'
import 'iconify-icon'

/** 引入 fontawesome
 * eg: <i class="fa-brands fa-debian"></i>
 * see: https://fontawesome.com/ */

import '@fortawesome/fontawesome-free/css/all.min.css'
