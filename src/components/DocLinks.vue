<script setup lang="ts">
import { LinkItem, isExternalLink, Icon } from '../types'

const props = defineProps<{ items: LinkItem[] }>()
</script>

<template>
  <div class="container">
    <a
      v-for="(link, index) in props.items"
      :key="link.link + index"
      :href="link.link"
      :title="link.name"
      :target="isExternalLink(link.link) ? '_blank' : '_self'"
      class="link"
      rel="noopener"
    >
      <template v-if="link.icon">
        <Icon :icon="link.icon" class="iconify" :style="{ color: link.color }" />
      </template>
      <template v-else-if="link.image">
        <img v-if="typeof link.image === 'object'" :src="link.image.light" alt="Icon" class="icon light-only" />
        <img v-if="typeof link.image === 'object'" :src="link.image.dark" alt="Icon" class="icon dark-only" />
        <img v-else :src="link.image" alt="Icon" class="icon" />
      </template>
      <template v-else>
        <Icon
          class="default-icon"
          icon="fa6-solid:arrow-up-right-from-square"
          style="color: var(--vp-c-brand-1)"
          alt="Icon"
        />
      </template>
      <div class="text-content">
        <span class="name">{{ link.name }}</span>
        <span v-if="link.desc" class="desc">{{ link.desc }}</span>
      </div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
:root:not(.dark) .dark-only,
:root:is(.dark) .light-only {
  display: none;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.link {
  width: 100%;
  height: 5rem;
  border: 1px solid var(--vp-c-bg-alt);
  background-color: var(--vp-c-bg-alt);
  border-radius: 0.8rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  position: relative;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  text-decoration: none !important;

  &:hover {
    border-color: var(--vp-c-brand-1);
    transform: translateY(-3px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
}

.icon,
.iconify {
  width: 2.5rem;
  font-size: 2.5em;
  color: var(--vp-c-text-1);
  flex-shrink: 0; // 禁止图标在 flex 布局中因空间不足被压缩。
}

.default-icon {
  width: 2rem;
  font-size: 1.5em;
  flex-shrink: 0; // 禁止图标在 flex 布局中因空间不足被压缩。
}

.text-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 1rem;
  overflow: hidden;
}

.name,
.desc {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}

.name {
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.2;
}

.desc {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  font-weight: 500;
  margin-top: 0.25rem;
  line-height: 1.4;
}
</style>
