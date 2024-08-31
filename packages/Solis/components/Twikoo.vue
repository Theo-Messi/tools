<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

// 定义属性类型
const props = defineProps<{ envId: string }>()

const route = useRoute()

// 判断是否为 /posts/ 路径
const isPostPage = () => route.path.startsWith('/posts/')

// 初始化 Twikoo
async function initTwikoo() {
  const twikoo = await import('twikoo')
  twikoo.init({
    envId: props.envId,
    el: '#twikoo'
  })
}

onMounted(() => {
  if (isPostPage()) {
    initTwikoo()
  }
})

// 监听路径变化
watch(
  () => route.path,
  (newPath) => {
    if (newPath.startsWith('/posts/')) {
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
  <div v-if="isPostPage()" id="twikoo"></div>
</template>
