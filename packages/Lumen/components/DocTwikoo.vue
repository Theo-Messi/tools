<script setup lang="ts">
import { onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

/**
 * 组件的 props 类型定义。
 *
 * @typedef {Object} Props
 * @property {Object} Twikoo_Data - Twikoo 配置数据。
 * @property {string} Twikoo_Data.envId - Twikoo 的环境 ID。
 */
const props = defineProps<{
  Twikoo_Data: {
    envId: string
  }
}>()

/**
 * 初始化 Twikoo 评论系统。
 *
 * 异步函数，动态导入 Twikoo 并进行初始化。
 *
 * @async
 * @function
 * @returns {Promise<void>} - 无返回值的 Promise。
 */
async function initTwikoo() {
  try {
    const twikoo = await import('twikoo')
    console.log('Twikoo 加载成功')
    if (typeof window !== 'undefined') {
      // 确保 DOM 元素存在后再进行初始化
      await nextTick() // 等待 DOM 更新
      const twikooElement = document.querySelector('#twikoo')
      if (twikooElement) {
        twikoo.init({
          envId: props.Twikoo_Data.envId,
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
 * 重新加载 Twikoo 评论系统。
 *
 * 该函数会调用 `initTwikoo` 来重新初始化评论系统。
 */
function reloadTwikoo() {
  initTwikoo()
}

// 组件挂载时初始化 Twikoo
onMounted(async () => {
  await nextTick() // 确保 DOM 更新完成
  reloadTwikoo()
})

// 在组件卸载时清理 Twikoo 评论系统
onBeforeUnmount(() => {
  const el = document.querySelector('#twikoo')
  if (el) {
    el.innerHTML = '' // 清空评论组件的内容
  }
})

// 使用 VitePress 的 useRoute 监听路由变化
const route = useRoute()

// 监听路由变化，重新加载 Twikoo 评论系统
watch(
  () => route.path,
  async () => {
    await nextTick() // 等待 DOM 更新
    setTimeout(reloadTwikoo, 500) // 延迟重新初始化 Twikoo
  }
)
</script>

<template>
  <div class="comment-container vp-raw" id="twikoo"></div>
</template>
