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

/**
 * 视频平台配置
 * 每个平台包含以下属性：
 * - `src`: 返回视频嵌入链接的函数，接受视频的唯一标识符 `id` 作为参数。
 * - `title`: 视频播放器的名称。
 */
export const video = {
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

/**
 * 动态返回对应的视频配置或自定义链接
 * @param props - 包含视频相关参数的配置对象
 * @param props.to - 视频平台的名称（可选）
 * @param props.id - 视频的唯一标识符（可选）
 * @param props.src - 自定义视频链接（可选）
 * @returns 视频配置对象，包括 `src` 和 `title`
 */
export const getVideoConfig = (props: VideoProps) => {
  /**
   * 如果同时传递了 `to` 和 `id`，返回对应视频平台的配置。
   * @example
   * getVideoConfig({ to: 'bilibili', id: '12345' });
   * // 返回 { src: 'https://player.bilibili.com/player.html?aid=12345', title: 'Bilibili video player' }
   */
  if (props.to && props.id) {
    return video[props.to]
  }

  /**
   * 如果只有 `id` 存在，则返回默认的 YouTube 视频配置。
   * @example
   * getVideoConfig({ id: 'abcd1234' });
   * // 返回 { src: 'https://www.youtube-nocookie.com/embed/abcd1234', title: 'YouTube video player' }
   */
  if (props.id) {
    return video.youtube
  }

  /**
   * 如果没有 `to` 和 `id`，且提供了自定义的 `src`，返回自定义视频配置。
   * 如果 `src` 为空，则返回空链接。
   * @example
   * getVideoConfig({ src: 'https://example.com/custom-video.mp4' });
   * // 返回 { src: 'https://example.com/custom-video.mp4', title: 'Custom video player' }
   */
  return {
    src: props.src || '',
    title: 'Custom video player'
  }
}
