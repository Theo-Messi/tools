<script setup lang="ts">
import { onMounted } from 'vue'

// 定义属性类型
const props = defineProps<{ envId: string }>()

// 初始化 Twikoo
async function initTwikoo() {
  const twikoo = await import('twikoo')
  twikoo.init({
    envId: props.envId,
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
