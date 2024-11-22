<script setup lang="ts">
import { computed } from 'vue'
import { VideoProps, getVideoConfig } from '../types'

const props = defineProps<VideoProps>()

// 使用 getVideoConfig 来计算视频配置
const videoConfig = computed(() => getVideoConfig(props))
</script>

<template>
  <div class="video-container">
    <iframe
      loading="lazy"
      v-bind="{
        src: typeof videoConfig.src === 'function' ? videoConfig.src(props.id) : videoConfig.src,
        title: videoConfig.title,
        allow:
          'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;',
        allowfullscreen: true
      }"
      class="video-iframe"
    />
  </div>
</template>

<style lang="scss" scoped>
.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
}

.video-iframe {
  aspect-ratio: 16 / 9;
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border: none;
}
</style>
