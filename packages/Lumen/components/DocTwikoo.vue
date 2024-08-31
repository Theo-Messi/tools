<script setup lang="ts">
import { onMounted, ref } from 'vue'

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
  initTwikoo()
})
</script>

<template>
  <!-- 始终渲染评论组件 -->
  <div id="twikoo"></div>
</template>
