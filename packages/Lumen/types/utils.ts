import { computed, nextTick, ref, onMounted, onUnmounted } from 'vue'
import { useData } from 'vitepress'
import { Prelink } from './types'

/**
 * 从 `frontmatter` 获取 `prelink`。
 *
 * @returns {Prelink | undefined} 返回 `frontmatter` 中 `hero` 对象的 `prelink` 属性值，如果不存在则为 `undefined`。
 */
export const usePrelink = (): Prelink | undefined => {
  const { frontmatter } = useData()
  return computed(() => frontmatter.value.hero?.prelink).value
}

/**
 * 检查给定的图标字符串是否为 Iconify 格式。
 * Iconify 图标通常包含一个冒号（例如 "mdi:home"）。
 *
 * @param icon - 要检查的图标字符串。
 * @returns 如果图标是 Iconify 格式，则返回 `true`，否则返回 `false`。
 */
export const isIconifyIcon = (icon: string): boolean => icon.includes(':')

/**
 * 判断给定的链接是否是外部链接。
 *
 * @param {string} link - 要判断的链接。
 * @returns {boolean} - 如果链接是外部链接，则返回 `true`，否则返回 `false`。
 */
export const isExternalLink = (link: string): boolean => /^https?:\/\//.test(link)

/**
 * 初始化 Twikoo 评论系统。
 *
 * 异步函数，动态导入 Twikoo 并进行初始化。
 *
 * @param {string} envId - Twikoo 的环境 ID。
 * @returns {Promise<void>} - 无返回值的 Promise。
 */
export async function initTwikoo(envId: string): Promise<void> {
  try {
    const twikoo = await import('twikoo')
    console.log('Twikoo 加载成功')
    if (typeof window !== 'undefined') {
      // 确保 DOM 元素存在后再进行初始化
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
 * 创建一个视频播放状态的 ref 和切换函数。
 *
 * @returns { [Ref<boolean>, () => void] } 返回视频播放状态和切换函数。
 */
export const useVideoToggle = () => {
  const isVideoOpen = ref(false)

  const toggleVideo = () => {
    isVideoOpen.value = !isVideoOpen.value
  }

  return [isVideoOpen, toggleVideo] as const
}

/**
 * 自定义钩子，管理窗口宽度和更新逻辑。
 *
 * @returns { [Ref<number | null>, () => void] } 返回窗口宽度和更新函数。
 */
export const useWindowWidth = () => {
  const windowWidth = ref<number | null>(null)

  const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth
  }

  // 组件挂载时添加 resize 事件监听器
  onMounted(() => {
    if (typeof window !== 'undefined') {
      windowWidth.value = window.innerWidth
      window.addEventListener('resize', updateWindowWidth)
    }
  })

  // 组件卸载时移除 resize 事件监听器
  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', updateWindowWidth)
    }
  })

  return windowWidth
}

export function moveDomElements() {
  onMounted(() => {
    const targetElement = document.querySelector('.VPHero .text') as HTMLElement | null
    const sourceElement = document.querySelector('#hero-text') as HTMLElement | null

    if (targetElement && sourceElement) {
      targetElement.innerHTML = ''
      targetElement.appendChild(sourceElement)
    }
  })
}

export const useCopyLink = () => {
  const copied = ref(false)

  const copyLink = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
      alert('复制链接失败，请手动复制。')
    }
  }

  return { copied, copyLink } // 返回对象而不是数组
}
