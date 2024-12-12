---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: Lumen
  text: 'Enhanced '
  textsuffix: 'Theme'
  tagline: ✨ 集成 Vue 功能组件和主题美化的 VitePress 插件

  image:
    src: '/Logo.png'
    alt: '@theojs/lumen'

  # prelink:
  #   title: '🎉 活动不停歇，青云梯 双11 特惠折上折! </br>年付8折/2年付7折/3年付6折 配合优惠码折上折，最高可达48折<div><iconify-icon icon="eos-icons:hourglass" style="font-size: 1rem;"></iconify-icon> 活动时间: 即日起至 <span style="color: var(--vp-c-brand-3); font-weight: bold;">2024年11月17日23点59分</span></div>'
  #   link: https://qytcc01.qingyunti.pro/register?aff=jjgD79Jd
  #   target: _blank

  prelink:
    title: '<iconify-icon icon="fa6-solid:bolt" style="margin-right:0.25rem;color:#63E6BE;"></iconify-icon> 快速开始 <p>pnpm add @theojs/lumen</p>'
    link: /guide/getting-started

  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started

    - theme: alt
      text: 账号合租
      link: https://doc.theojs.cn/serve/sharing/account-sharing-guide

    - theme: alt
      text: 专线推荐
      link: https://doc.theojs.cn/serve/airport/qingyunti

    - theme: sponsor
      text: ✨ 成为赞助商
      link: https://github.com/sponsors/Theo-Messi

    - theme: lumen theo
      text: 玄学宝典
      link: https://xx.theojs.cn

features:
  - title: '<iconify-icon icon="mdi:palette" style="margin-right:0.25rem;color:#f39c12;"></iconify-icon>开箱即用的主题配色'
    details: 支持开箱即用的多种主题配色，并提供灵活的配置选项，轻松切换主题颜色方案，满足品牌或个人偏好的视觉需求。
    link: '/guide/theme'
    rel: 'noopener'

  - title: '<iconify-icon icon="mdi:bullhorn" style="margin-right:0.25rem;color:#e74c3c;"></iconify-icon>首页公告栏'
    details: 在首页展示重要通知或动态信息，吸引用户关注，提升站点的互动性。
    link: '/guide/announcement'
    rel: 'noopener'

  - title: '<iconify-icon icon="mdi:format-underline" style="margin-right:0.25rem;color:#3498db;"></iconify-icon>首页下划线'
    details: 实现页面元素的下划线动画，增加视觉层次感和动感效果。
    link: '/guide/homeUnderline'
    rel: 'noopener'

  - title: '<iconify-icon icon="mdi:cog" style="margin-right:0.25rem;color:#2ecc71;"></iconify-icon>页脚配置'
    details: 灵活自定义页脚内容，展示版权信息、链接分组等，增强站点的专业感。
    link: '/guide/homefooter'
    rel: 'noopener'

  - title: '<iconify-icon icon="mdi:view-list" style="margin-right:0.25rem;color:#9b59b6;"></iconify-icon>侧边栏链接'
    details: 在侧边栏中展示常用链接，提升用户导航体验，快速访问相关内容。
    link: '/guide/docasidelogo'
    rel: 'noopener'

  - title: '<iconify-icon icon="mdi:video" style="margin-right:0.25rem;color:#e67e22;"></iconify-icon>视频组件'
    details: 支持嵌入视频内容，提供更加丰富的多媒体展示形式，增强用户互动体验。
    link: '/guide/docvideolink'
    rel: 'noopener'

  - title: '<iconify-icon icon="mdi:credit-card" style="margin-right:0.25rem;color:#1abc9c;"></iconify-icon>链接卡片'
    details: 设计美观的链接卡片，直观展示外部资源或推荐内容，提升页面内容的吸引力。
    link: '/guide/linkcard'
    rel: 'noopener'

  - title: '<iconify-icon icon="fa6-solid:share-nodes" style="margin-right:0.25rem;color:#3498db;"></iconify-icon>页面分享按钮'
    details: 为每个页面提供便捷的分享功能，方便用户分享内容，提高站点的曝光率。
    link: '/guide/sharebutton'
    rel: 'noopener'

  - title: '<iconify-icon icon="mdi:comment-text-multiple" style="margin-right:0.25rem;color:#3498db;"></iconify-icon>Twikoo 评论系统'
    details: 集成 Twikoo 评论系统，提升用户互动体验，增强站点的社交功能。
    link: '/guide/doctwikoo'
    rel: 'noopener'

  - title: '<iconify-icon icon="mdi:chart-box" style="margin-right:0.25rem;color:#3498db;"></iconify-icon>站点统计'
    details: 提供站点数据统计功能，方便监控和分析访问情况，帮助优化站点性能。
    link: '/guide/analytics'
    rel: 'noopener'

  - title: '<iconify-icon icon="line-md:iconify1" style="margin-right:0.25rem; " alt="icon"></iconify-icon>Iconify 图标集成'
    details: 轻松集成 Iconify 图标库，提供上千种矢量图标，支持多种平台，丰富站点的视觉表现和交互体验。
    link: '/guide/theme#图标支持'
    rel: 'noopener'
---

<Home />
<style>
  :root {
    --vp-home-hero-image-background-image: none !important;
  }
</style>

<!-- <Twikoo :Twikoo_Data="{ envId: 'https://share-twikoo.netlify.app/.netlify/functions/twikoo' }" /> -->
