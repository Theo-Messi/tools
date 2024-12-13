import { inBrowser } from 'vitepress'

declare global {
  interface Window {
    _hmt: any[] // 百度统计
  }
}

export interface BaiduAnalyticsOptions {
  baiduId: string // 百度统计 ID
}

/** 注册百度统计 */
export function baiduAnalytics(options: BaiduAnalyticsOptions) {
  const { baiduId } = options

  // 确保在浏览器环境下执行
  if (!inBrowser) return

  if (!baiduId) {
    console.warn('警告：百度统计 ID 缺失，统计数据将无法生效')
    return
  }

  // 如果百度统计脚本未加载，则注入脚本
  if (!document.querySelector(`#analytics-plugin-${baiduId}`)) {
    window._hmt = window._hmt || []

    const script = document.createElement('script')
    script.id = `analytics-plugin-${baiduId}`
    script.async = true
    script.src = `https://hm.baidu.com/hm.js?${baiduId}`
    document.querySelector('head')?.appendChild(script)
  }
}

/**
 * 上报页面视图
 *
 * @param baiduId - 百度统计 ID
 * @param pageUrl - 页面 URL
 */
export function trackPageview(baiduId: string, pageUrl: string) {
  // 确保在浏览器环境下执行
  if (!inBrowser) return
  if (!pageUrl || typeof pageUrl !== 'string') pageUrl = '/'

  // 去除 URL 中的域名部分，只保留路径
  if (pageUrl.startsWith('http')) {
    const urlFragment = pageUrl.split('/')
    const origin = `${urlFragment[0]}//${urlFragment[2]}`
    pageUrl = pageUrl.replace(origin, '')
  }

  // 上报 PV 数据
  if (window._hmt) {
    window._hmt.push(['_setAccount', baiduId])
    window._hmt.push(['_trackPageview', pageUrl])
  }
}
