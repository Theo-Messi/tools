<script setup lang="ts">
import { Prelink, usePrelink } from '../types'

const prelink: Prelink | undefined = usePrelink()
</script>

<template>
  <a v-if="prelink" :href="prelink.link" :target="prelink.target" rel="noopener" class="prelink">
    <span v-html="prelink.title"></span>
  </a>
</template>

<style scoped>
.prelink {
  display: inline-flex;
  border-radius: 0.8rem;
  padding: 0.3rem 1.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
  background-color: var(--vp-button-alt-bg);
  transition: all 0.5s ease;
}

.prelink:hover {
  background-color: var(--vp-button-alt-hover-bg);
  transform: translateY(-1px);
}
</style>
