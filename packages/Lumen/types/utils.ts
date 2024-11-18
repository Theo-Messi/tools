import { computed, nextTick, ref, onMounted } from 'vue'
import { useData } from 'vitepress'
import { Prelink, VideoProps } from './types'

/**
 * 从 `frontmatter` 中提取 `prelink` 信息。
 *
 * @returns 返回 `frontmatter` 中 `hero` 对象的 `prelink` 属性值，如果不存在则返回 `undefined`。
 */
export const usePrelink = (): Prelink | undefined => {
  const { frontmatter } = useData()
  return computed(() => frontmatter.value.hero?.prelink).value
}

/**
 * 判断给定图标字符串是否符合 Iconify 格式。
 *
 * @param icon - 要检查的图标字符串。
 * @returns 如果图标是 Iconify 格式，则返回 `true`，否则返回 `false`。
 */
export const isIconifyIcon = (icon: string): boolean => icon.includes(':')

/**
 * 检查链接是否为外部链接。
 *
 * @param link - 要判断的链接字符串。
 * @returns 如果链接是外部链接，则返回 `true`，否则返回 `false`。
 */
export const isExternalLink = (link: string): boolean => /^https?:\/\//.test(link)

/**
 * 初始化 Twikoo 评论系统。
 *
 * 动态加载 Twikoo 并初始化评论系统。
 *
 * @param envId - Twikoo 的环境 ID。
 * @returns 无返回值的 Promise。
 */
export const initTwikoo = async (envId: string): Promise<void> => {
  try {
    const twikoo = await import('twikoo')
    console.log('Twikoo 加载成功')
    if (typeof window !== 'undefined') {
      await nextTick() // 等待 DOM 更新
      const twikooElement = document.querySelector('#twikoo')
      if (twikooElement) {
        twikoo.init({
          envId,
          el: '#twikoo'
        })
      } else {
        console.error('未找到 Twikoo 元素。')
      }
    }
  } catch (error) {
    console.error('初始化 Twikoo 失败：', error)
  }
}

/**
 * 创建一个视频播放状态的 ref 以及切换播放状态的函数。
 *
 * @returns 包含 `isVideoOpen` 状态和 `toggleVideo` 切换函数的常量数组。
 */
export const useVideoToggle = () => {
  const isVideoOpen = ref(false)

  const toggleVideo = () => {
    isVideoOpen.value = !isVideoOpen.value
  }

  return [isVideoOpen, toggleVideo] as const
}

/**
 * 将指定的 DOM 元素移动到目标位置。
 *
 * 当组件挂载时，将 `.VPHero .text` 内部的内容替换为 `#hero-text` 的内容。
 */
export const moveDomElements = () => {
  onMounted(() => {
    const targetElement = document.querySelector('.VPHero .text') as HTMLElement | null
    const sourceElement = document.querySelector('#hero-text') as HTMLElement | null

    if (targetElement && sourceElement) {
      targetElement.innerHTML = ''
      targetElement.appendChild(sourceElement)
    }
  })
}

/**
 * 创建一个用于复制链接的功能。
 *
 * @returns 包含 `copied` 状态和 `copyLink` 函数的对象。
 */
export const useCopyLink = () => {
  const copied = ref(false)

  const copyLink = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 2000)
    } catch (error) {
      console.error('复制链接失败：', error)
      alert('复制链接失败，请手动复制。')
    }
  }

  return { copied, copyLink }
}

// 视频平台配置，明确指定每个平台的类型
export const videoform = {
  bilibili: {
    src: (id: string) => `https://player.bilibili.com/player.html?aid=${id}`,
    title: 'Bilibili video player'
  },
  tencent: {
    src: (id: string) => `https://v.qq.com/txp/iframe/player.html?vid=${id}`,
    title: 'Tencent Video player'
  },
  youku: {
    src: (id: string) => `https://player.youku.com/embed/${id}`,
    title: 'Youku video player'
  },
  youtube: {
    src: (id: string) => `https://www.youtube-nocookie.com/embed/${id}`,
    title: 'YouTube video player'
  },
  vimeo: {
    src: (id: string) => `https://player.vimeo.com/video/${id}`,
    title: 'Vimeo video player'
  }
}

// 计算属性，动态返回对应的视频配置或自定义链接
export const getVideoConfig = (props: VideoProps) => {
  if (props.form && props.id) {
    // 当 form 存在且 id 存在时，返回相应的视频配置
    return videoform[props.form] || videoform.youtube
  }

  // 当 form 不存在时，直接使用 src 作为自定义链接
  return { src: props.src || '', title: 'Custom video player' }
}
