<script setup lang="ts">
import { LinkItem, isExternalLink, isIconifyIcon, Icon } from '../types'

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
        <Icon v-if="isIconifyIcon(link.icon)" :icon="link.icon" class="iconify" :style="{ color: link.color }" />
        <i v-else :class="link.icon + ' icon'" :style="{ color: link.color }"></i>
      </template>
      <template v-else-if="link.image">
        <img v-if="typeof link.image === 'object'" :src="link.image.light" alt="Icon" class="icon light-only" />
        <img v-if="typeof link.image === 'object'" :src="link.image.dark" alt="Icon" class="icon dark-only" />
        <img v-else :src="link.image" alt="Icon" class="icon" />
      </template>
      <template v-else>
        <i class="fas fa-arrow-up-right-from-square fa-icon" alt="Icon"></i>
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
  margin-left: 1.5rem;
}

.fa-icon {
  width: 2rem;
  font-size: 1.5em;
  margin-left: 2rem;
}

.text-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 1rem;
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
