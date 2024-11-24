<script setup lang="ts">
import { AsideItem } from '../types'

const props = defineProps<{ Aside_Data: AsideItem[] }>()
</script>

<template>
  <div>
    <a
      v-for="(aside, index) in props.Aside_Data"
      :key="index"
      :href="aside.link"
      :class="{ 'has-activity': aside.activity, 'has-name': aside.name }"
      :title="aside.activity || aside.name"
      class="aside-class"
      target="_blank"
      rel="noopener"
    >
      <img :src="aside.icon" width="22" height="22" :alt="aside.activity || aside.name" />
      <span>
        <template v-if="aside.activity">
          <p class="activity" v-html="aside.activity"></p>
        </template>
        <template v-if="aside.hide1 || aside.info1">
          <p v-if="aside.hide1" class="hide" v-html="aside.hide1"></p>
          <p v-if="aside.info1" class="info" v-html="aside.info1"></p>
        </template>
        <template v-if="aside.name">
          <p class="name" v-html="aside.name"></p>
        </template>
        <template v-if="aside.hide2 || aside.info2">
          <p v-if="aside.hide2" class="hide" v-html="aside.hide2"></p>
          <p v-if="aside.info2" class="info" v-html="aside.info2"></p>
        </template>
      </span>
    </a>
  </div>
</template>

<style scoped>
.aside-class {
  margin: 0.25rem 0;
  padding: 0.25rem 0;
  border-radius: 0.8rem;
  position: relative;
  font-size: 0.875rem;
  font-weight: 900;
  line-height: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: var(--vp-c-bg-alt);
  border: 1.5px solid var(--vp-c-bg-alt);
  transition: border-color 0.5s;
}

.aside-class:last-of-type {
  margin-bottom: 1rem;
}

.aside-class:hover img {
  transform: scale(1.75);
}

.aside-class:hover .hide {
  opacity: 0.9;
}

.aside-class:hover.has-activity {
  border-color: rgba(100, 108, 255, 1);
}

.aside-class:hover.has-name {
  border-color: var(--vp-c-brand-1);
}

.aside-class img {
  transition: transform 0.5s;
  transform: scale(1.25);
}

.aside-class .hide {
  color: var(--vp-c-text-2);
  opacity: 0;
  font-size: 0.75rem;
  padding-left: 0.1rem;
  font-weight: 600;
  transition: opacity 0.5s;
}

.aside-class .info {
  color: var(--vp-c-text-2);
  font-size: 0.75rem;
  padding-left: 0.1rem;
}

.aside-class .name {
  background-image: linear-gradient(292deg, var(--vp-c-brand-3) 16%, var(--vp-c-brand-2), var(--vp-c-brand-1));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.aside-class .activity {
  background-image: linear-gradient(292deg, rgba(176, 71, 255, 1) 16%, rgba(100, 108, 255, 1), rgba(116, 123, 255, 1));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
