<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress' // VitePress 的路由钩子

const props = defineProps<{
  Twikoo_Data: {
    envId: string
  }
}>()

// 初始化 Twikoo 评论系统
async function initTwikoo() {
  try {
    const twikoo = await import('twikoo')
    console.log('Twikoo 加载成功')
    if (typeof window !== 'undefined') {
      // 确保 DOM 元素存在后再进行初始化
      nextTick(() => {
        const twikooElement = document.querySelector('#twikoo')
        if (twikooElement) {
          // console.log('Twikoo 元素已找到')
          twikoo.init({
            envId: props.Twikoo_Data.envId,
            el: '#twikoo'
          })
        } else {
          console.error('未找到 Twikoo 元素。')
        }
      })
    }
  } catch (error) {
    console.error('初始化 Twikoo 失败：', error)
  }
}

// 重新加载 Twikoo 评论系统
function reloadTwikoo() {
  initTwikoo()
}

// 组件挂载时初始化
onMounted(() => {
  nextTick(() => {
    reloadTwikoo()
  })
})

// 在组件卸载时清理
onBeforeUnmount(() => {
  // 清理 Twikoo 评论系统的内容
  const el = document.querySelector('#twikoo')
  if (el) {
    el.innerHTML = '' // 清空评论组件的内容
  }
})

// 使用 VitePress 的 useRoute 监听路由变化
const route = useRoute()

// 监听路由变化，更新 key 以触发重新渲染
watch(
  () => route.path,
  () => {
    // 延迟重新初始化 Twikoo，以确保新页面内容加载完毕
    nextTick(() => {
      setTimeout(reloadTwikoo, 500)
    })
  }
)
</script>

<template>
  <div class="comment-container vp-raw" id="twikoo"></div>
</template>
