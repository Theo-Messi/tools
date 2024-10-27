<script setup lang="ts">
import { Prelink, usePrelink } from '../types'

const prelink: Prelink | undefined = usePrelink()
</script>

<template>
  <a v-if="prelink" :href="prelink.link" :target="prelink.target" rel="noopener" class="prelink">
    <span v-html="prelink.title"></span>
  </a>
</template>

<style lang="scss" scoped>
.prelink {
  display: inline-flex;
  border-radius: 0.8rem;
  padding: 0.3rem 1.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  background-color: var(--vp-button-alt-bg);
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;

  &:hover {
    background-color: var(--vp-button-alt-hover-bg);
    transform: translateY(-1px);
  }
}
</style>
