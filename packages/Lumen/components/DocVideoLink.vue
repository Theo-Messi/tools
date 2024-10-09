<script setup lang="ts">
import { computed, ref } from 'vue'

/**
 * 组件的 props 类型定义。
 *
 * @typedef {Object} Props
 * @property {string} href - 视频链接或目标 URL。
 * @property {string} name - 按钮或链接的显示名称。
 */

/**
 * 获取组件的 props。
 *
 * @type {Props}
 */
const props = defineProps<{
  href: string
  name: string
}>()

/**
 * 视频播放状态，初始为关闭状态。
 *
 * @type {Ref<boolean>}
 */
const isVideoOpen = ref(false)

/**
 * 动态计算 iframe 的 src 地址。只有在视频打开时，src 才会被设置为 props.href。
 *
 * @type {ComputedRef<string>}
 */
const videoSrc = computed(() => (isVideoOpen.value ? props.href : ''))

/**
 * 切换视频播放状态。切换时会根据当前状态更新 videoSrc 的值。
 *
 * @function
 */
const toggleVideo = () => {
  isVideoOpen.value = !isVideoOpen.value
}
</script>

<template>
  <div class="mp" @click="toggleVideo">
    <div class="cta" :title="props.name">
      <div class="name-container">
        <i v-if="props.href" class="fas fa-video"></i>
        <div class="name">{{ props.name }}</div>
      </div>
      <i v-if="props.href" :class="{ 'fas fa-chevron-up': isVideoOpen, 'fas fa-chevron-down': !isVideoOpen }"></i>
    </div>
    <transition name="slide">
      <div v-if="props.href && isVideoOpen" class="video-embed">
        <div class="iframe-container">
          <iframe
            loading="lazy"
            title="Video Player"
            :src="videoSrc"
            class="video-iframe"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen;"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.mp {
  gap: 0.5rem;
  cursor: pointer;
  position: relative;
  padding: 1rem 1.25rem;
  border-radius: 0.8rem;
  border: 1px solid var(--vp-c-bg-alt);
  background-color: var(--vp-c-bg-alt);
  transition: border-color 0.3s;

  &:hover {
    border-color: var(--vp-c-brand-1);
  }

  .cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none !important;

    .name-container {
      display: flex;
      align-items: center;

      .fa-video {
        margin-right: 0.5rem;
        color: var(--vp-c-brand-1);
      }

      .name {
        font-weight: 600;
        transition: color 0.3s;
        color: var(--vp-c-brand-1);
      }
    }

    .fa-chevron-up,
    .fa-chevron-down {
      color: var(--vp-c-brand-1);
    }
  }

  .video-embed {
    padding-top: 1rem;

    .iframe-container {
      position: relative;
      width: 100%;
      padding-top: 56.25%;

      .video-iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 0.8rem;
      }
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.3s ease;
}

.slide-enter,
.slide-leave-to {
  max-height: 0;
  overflow: hidden;
}
</style>
