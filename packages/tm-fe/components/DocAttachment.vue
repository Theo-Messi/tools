<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DocAttachment',
  props: {
    name: { type: String, required: true },
    link: { type: String, required: true }
  }
})
</script>

<template>
  <a :href="link" :download="name" class="link">
    <i class="fas fa-download fa-icon"></i>
    <span class="name">{{ name }}</span>
  </a>
</template>

<style lang="scss" scoped>
.link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: var(--vp-c-brand-1);
  cursor: pointer;

  &:hover {
    color: var(--vp-c-brand-2);
    text-decoration: none;
  }

  .fa-icon {
    margin-right: 0.5rem;
    color: var(--vp-c-brand-1);
  }

  .name {
    font-weight: 600;
    margin-right: 0.5rem;
    &:hover {
      -webkit-text-decoration: underline dotted;
      text-decoration: underline dotted;
    }
  }
}
</style>
