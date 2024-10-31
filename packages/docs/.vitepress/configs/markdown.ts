import type { MarkdownOptions } from 'vitepress'
import { imgSize } from '@mdit/plugin-img-size'
import { figure } from '@mdit/plugin-figure'
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'

export const markdown: MarkdownOptions = {
  theme: { light: 'one-light', dark: 'one-dark-pro' },
  image: { lazyLoading: true },
  config: (md) => {
    md.use(imgSize)
    md.use(groupIconMdPlugin)
    md.use(figure, { figcaption: 'alt', copyAttrs: '^class$', lazy: true })
  }
}
