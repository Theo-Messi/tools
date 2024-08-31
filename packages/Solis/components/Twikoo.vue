<script setup lang="ts">
import { onMounted, watch, ref } from 'vue'
import { useRoute } from 'vitepress'

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
  if (typeof window !== 'undefined' && isPostPage.value) {
    initTwikoo()
  }
})

// 监听路径变化
watch(
  () => route.path,
  (newPath) => {
    if (typeof window !== 'undefined') {
      isPostPage.value = newPath.startsWith('/posts/')
      if (isPostPage.value) {
        initTwikoo()
      } else {
        const twikooEl = document.getElementById('twikoo')
        if (twikooEl) twikooEl.innerHTML = ''
      }
    }
  }
)
</script>

<template>
  <!-- 仅在路径为 /posts/ 开头时渲染评论组件 -->
  <div v-if="isPostPage" id="twikoo"></div>
</template>
