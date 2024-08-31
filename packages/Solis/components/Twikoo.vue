<script setup lang="ts">
import { onMounted, watch, ref } from 'vue'
import { useRoute } from 'vitepress'
import { PropType } from 'vue'

// 接受 Twikoo_Data 作为 prop
const props = defineProps<{
  Twikoo_Data: {
    envId: string
  }
}>()

const route = useRoute()
const isPostPage = ref(route.path.startsWith('/posts/'))

// 初始化 Twikoo
async function initTwikoo() {
  const twikoo = await import('twikoo')
  twikoo.init({
    envId: props.Twikoo_Data.envId,
    el: '#twikoo'
  })
}

onMounted(() => {
  if (isPostPage.value) {
    initTwikoo()
  }
})

// 监听路径变化
watch(
  () => route.path,
  (newPath) => {
    isPostPage.value = newPath.startsWith('/posts/')
    if (isPostPage.value) {
      initTwikoo()
    } else {
      const twikooEl = document.getElementById('twikoo')
      if (twikooEl) twikooEl.innerHTML = ''
    }
  }
)
</script>

<template>
  <!-- 仅在路径为 /posts/ 开头时渲染评论组件 -->
  <div v-if="isPostPage" id="twikoo"></div>
</template>
