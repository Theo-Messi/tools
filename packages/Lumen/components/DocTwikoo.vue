<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vitepress' // VitePress 的路由钩子

const props = defineProps<{
  Twikoo_Data: {
    envId: string
  }
}>()

// 使用时间戳作为唯一 key
const key = ref(Date.now())

// 初始化 Twikoo 评论系统
async function initTwikoo() {
  const twikoo = await import('twikoo')
  twikoo.init({
    envId: props.Twikoo_Data.envId,
    el: '#twikoo'
  })
}

// 重新加载 Twikoo 评论系统
function reloadTwikoo() {
  if (typeof window !== 'undefined') {
    initTwikoo()
  }
}

// 组件挂载时初始化
onMounted(() => {
  reloadTwikoo()
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
    // 通过更新时间戳来强制重新渲染组件
    key.value = Date.now()

    // 延迟重新初始化 Twikoo，以确保新页面内容加载完毕
    setTimeout(reloadTwikoo, 500)
  }
)
</script>

<template>
  <div class="comment-container vp-raw">
    <div id="twikoo"></div>
    <component
      :is="'script'"
      src="https://cdn.jsdelivr.net/npm/twikoo@1.6.39/dist/twikoo.min.js"
      crossorigin="anonymous"
      ref="twikooJs"
    ></component>
  </div>
  <!-- <div :key="key" id="twikoo"></div> -->
</template>
