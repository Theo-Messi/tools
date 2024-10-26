<template>
  <div class="post-info" style="display: flex; justify-content: space-between; align-items: center">
    <div style="display: flex; align-items: center">
      <i class="far fa-clock" style="margin-right: 0.25rem; color: var(--vp-c-brand-1)"></i>
      {{ formattedDate }} &nbsp;&nbsp;

      <span v-if="post.frontMatter.category">
        <i class="far fa-folder" style="margin-right: 0.25rem; color: var(--vp-c-brand-1)"></i>
        <a :href="`/pages/category.html?category=${post.frontMatter.category}`">
          {{ post.frontMatter.category }}
        </a>
        &nbsp;&nbsp;
      </span>

      <span v-for="(tag, index) in post.frontMatter.tags" :key="tag">
        <i class="fat fa-hashtag" style="margin-right: 0.25rem; color: var(--vp-c-brand-1)"></i>
        <a :href="`/pages/tags.html?tag=${tag}`">
          {{ tag }}<span v-if="index < post.frontMatter.tags.length - 1"></span>
        </a>
      </span>
    </div>

    <div
      class="post-author"
      style="display: flex; align-items: center; margin-left: auto"
      v-if="showAuthors && authors.length"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.2em"
        height="1.2em"
        viewBox="0 0 24 24"
        style="margin-right: 0.25rem"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"
          />
          <path
            fill="currentColor"
            d="M6 7a5 5 0 1 1 10 0A5 5 0 0 1 6 7m5-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6M4.413 17.601c-.323.41-.413.72-.413.899c0 .118.035.232.205.384c.197.176.55.37 1.11.543c1.12.346 2.756.521 4.706.563a1 1 0 1 1-.042 2c-1.997-.043-3.86-.221-5.254-.652c-.696-.216-1.354-.517-1.852-.962C2.347 19.906 2 19.274 2 18.5c0-.787.358-1.523.844-2.139c.494-.625 1.177-1.2 1.978-1.69C6.425 13.695 8.605 13 11 13q.671 0 1.316.07a1 1 0 0 1-.211 1.989Q11.564 15 11 15c-2.023 0-3.843.59-5.136 1.379c-.647.394-1.135.822-1.45 1.222Zm16.8-3.567a2.5 2.5 0 0 0-3.536 0l-3.418 3.417a1.5 1.5 0 0 0-.424.849l-.33 2.308a1 1 0 0 0 1.133 1.133l2.308-.33a1.5 1.5 0 0 0 .849-.424l3.417-3.418a2.5 2.5 0 0 0 0-3.535Zm-2.122 1.414a.5.5 0 0 1 .707.707l-3.3 3.3l-.825.118l.118-.825z"
          />
        </g>
      </svg>
      <div style="display: inline-flex; align-items: center">
        <span
          v-for="author in authors"
          :key="author"
          class="post-author"
          style="display: inline-flex; align-items: center; margin-right: 0.5rem"
        >
          <a
            :href="`https://github.com/${author}`"
            target="_blank"
            rel="noopener noreferrer"
            style="display: flex; align-items: center"
          >
            <img
              :src="`https://avatars.githubusercontent.com/${author}`"
              alt="Author"
              v-if="author"
              style="width: 1.2rem; height: 1.2rem; border-radius: 50%; margin-right: 0.25rem"
            />
            {{ authorName?.[author] || author }}
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { Post, formatDate, fetchGitHubUserNames } from '../types/functions'

const props = defineProps<{
  post: Post
  showAuthors?: boolean
  authorName?: Record<string, string>
}>()

// 格式化日期
const formattedDate = computed(() => formatDate(props.post.frontMatter.date))

// 定义作者名称的响应式对象
const authorName = ref<{ [key: string]: string }>({})

// 处理作者数据
const authors = computed(() => {
  const authorList = props.post.frontMatter.author
  return Array.isArray(authorList) ? authorList : authorList ? [authorList] : []
})

// 获取 GitHub 用户信息
onMounted(async () => {
  authorName.value = await fetchGitHubUserNames(authors.value)
})
</script>
