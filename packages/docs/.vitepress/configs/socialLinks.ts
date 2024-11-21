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
      svg: '<i class="fas fa-heart fa-lg" style="color: #EA4AAA;" alt="Github Sponsors"></i>'
    },
    link: 'https://github.com/sponsors/Theo-Messi',
    ariaLabel: 'Github Sponsors'
  }
]