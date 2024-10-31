<script setup lang="ts">
import { onMounted, onBeforeUnmount, watch, ref, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import { initTwikoo, clearTwikoo, TwikooData } from '../types/functions'

// 接受 Twikoo_Data 作为 prop
const props = defineProps<{
  Twikoo_Data: TwikooData
}>()

const route = useRoute()
const isPostPage = ref(route.path.startsWith('/posts/'))
const key = ref(Date.now()) // 作为唯一的重新渲染标识

// 重新加载 Twikoo
function reloadTwikoo() {
  if (typeof window !== 'undefined' && isPostPage.value) {
    nextTick(() => {
      initTwikoo(props.Twikoo_Data.envId)
    })
  }
}

// 组件挂载时初始化
onMounted(() => {
  reloadTwikoo()
})

// 在组件卸载时清理
onBeforeUnmount(() => {
  clearTwikoo() // 使用新的清理函数
})

// 监听路径变化
watch(
  () => route.path,
  (newPath) => {
    isPostPage.value = newPath.startsWith('/posts/')

    if (isPostPage.value) {
      key.value = Date.now() // 仅在满足条件时更新 key
      nextTick(() => {
        reloadTwikoo()
      })
    } else {
      clearTwikoo() // 使用新的清理函数
    }
  }
)
</script>

<template>
  <!-- 仅在路径为 /posts/ 开头时渲染评论组件 -->
  <div v-if="isPostPage" class="comment-container vp-raw">
    <div :key="key" id="twikoo"></div>
  </div>
</template>
