import type { DefaultTheme } from 'vitepress'
// 社交链接设置

export const socialLinks: DefaultTheme.SocialLink[] = [
  {
    icon: 'github',
    link: 'https://github.com/Theo-Messi/Theo-Docs',
    ariaLabel: 'Github'
  },
  {
    icon: 'gmail',
    link: 'mailto:fanxiaobin422@gmail.com',
    ariaLabel: 'Gmail'
  },
  {
    icon: 'npm',
    link: 'https://www.npmjs.com/package/@theojs/lumen',
    ariaLabel: 'npm'
  },
  {
    icon: {
      svg: '<iconify-icon icon="twemoji:red-heart" style="margin-right: 0.125em; margin-bottom: 0.125rem" alt="Github Sponsors"></iconify-icon>'
    },
    link: 'https://github.com/sponsors/Theo-Messi',
    ariaLabel: 'Github Sponsors'
  }
]
