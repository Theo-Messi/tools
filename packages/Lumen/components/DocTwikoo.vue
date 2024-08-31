<script setup lang="ts">
import { onMounted } from 'vue'

const props = defineProps<{
  Twikoo_Data: {
    envId: string
  }
}>()

// 初始化 Twikoo
async function initTwikoo() {
  const twikoo = await import('twikoo')
  twikoo.init({
    envId: props.Twikoo_Data.envId,
    el: '#twikoo'
  })
}

onMounted(() => {
  // 确保只在浏览器环境中执行
  if (typeof window !== 'undefined') {
    initTwikoo()
  }
})
</script>

<template>
  <!-- 始终渲染评论组件 -->
  <div id="twikoo"></div>
</template>
