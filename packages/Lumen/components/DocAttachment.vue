<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DocAttachment',
  props: {
    /**
     * 附件的名称，用于下载时的文件名。
     * @type {String}
     * @required
     */
    name: { type: String, required: true },

    /**
     * 附件的下载链接。
     * @type {String}
     * @required
     */
    link: { type: String, required: true }
  }
})
</script>

<template>
  <!-- 下载链接，点击后会触发文件下载 -->
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
