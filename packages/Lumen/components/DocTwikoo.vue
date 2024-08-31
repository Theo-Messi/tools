<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vitepress'

// 接受 Twikoo_Data 作为 prop
const props = defineProps<{
  Twikoo_Data: {
    envId: string
  }
}>()

// 初始化 Twikoo
async function initTwikoo() {
  try {
    const twikoo = await import('twikoo')
    if (twikoo && twikoo.init) {
      twikoo.init({
        envId: props.Twikoo_Data.envId,
        el: '#twikoo'
      })
    } else {
      console.error('Twikoo module or init function not found')
    }
  } catch (error) {
    console.error('Failed to load Twikoo:', error)
  }
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
