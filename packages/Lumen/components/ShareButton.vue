<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vitepress'
import type { PropType } from 'vue'

// 定义组件的 props 类型
const props = defineProps({
  /**
   * 按钮图标的类名。
   * @type {string}
   * @default 'fas fa-share-alt'
   */
  buttonIcon: {
    type: String as PropType<string>,
    default: 'fas fa-share-alt'
  },

  /**
   * 按钮显示的文本。
   * @type {string}
   * @default '分享此页面'
   */
  buttonText: {
    type: String as PropType<string>,
    default: '分享此页面'
  },

  /**
   * 复制成功后显示的图标的类名。
   * @type {string}
   * @default 'fas fa-thumbs-up'
   */
  copiedIcon: {
    type: String as PropType<string>,
    default: 'fas fa-thumbs-up'
  },

  /**
   * 复制成功后显示的文本。
   * @type {string}
   * @default '链接已复制!'
   */
  copiedText: {
    type: String as PropType<string>,
    default: '链接已复制!'
  }
})

// 获取 VitePress 路由对象
const router = useRouter()

// 记录链接是否已被复制
const copied = ref(false)

/**
 * 计算当前页面的分享链接。
 * @type {ComputedRef<string>}
 * @returns {string} 当前页面的完整分享链接。
 */
const shareLink = computed(() => {
  const currentPath = router.route.path
  return `${window.location.origin}${currentPath.replace(/^\/[a-z]{2}\//, '/')}`
})

/**
 * 复制分享链接到剪贴板。
 * 如果复制成功，显示“链接已复制！”的提示。
 * 如果失败，显示用户反馈提示。
 */
const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(shareLink.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy: ', err)
    // 用户反馈
    alert('复制链接失败，请手动复制。')
  }
}
</script>

<template>
  <div class="share-link-container">
    <button @click="copyLink" class="share-link-button" :class="{ copied }">
      <span v-if="!copied"> <i :class="props.buttonIcon"></i> {{ props.buttonText }} </span>
      <span v-else> <i :class="props.copiedIcon"></i> {{ props.copiedText }} </span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.share-link-container {
  padding: 1rem;

  .share-link-button {
    position: relative;
    overflow: hidden;
    background-color: var(--vp-c-bg-alt);
    color: var(--vp-c-brand-1);
    border: 1px solid var(--vp-c-bg-alt);
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    cursor: pointer;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 0.875rem;
    transition:
      color 0.3s ease,
      border 0.3s ease;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background-color: var(--vp-c-brand-soft);
      transition: left 0.6s ease;
      z-index: -1;
    }

    &:hover {
      border: 1px solid var(--vp-c-brand-3);
    }

    &:focus {
      outline: 2px solid var(--vp-c-brand-2);
      outline-offset: 2px;
    }

    &.copied {
      color: var(--vp-c-brand-1);
      &::before {
        left: 0;
        background-color: var(--vp-c-brand-soft);
      }
    }
  }
}
</style>
