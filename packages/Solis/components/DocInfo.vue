<template>
  <div class="info" v-if="isPostsPath">
    <div class="post-title">
      <span v-if="frontmatter.top" class="top-label">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128">
          <rect width="128" height="128" fill="none" />
          <radialGradient
            id="notoFire0"
            cx="68.884"
            cy="124.296"
            r="70.587"
            gradientTransform="matrix(-1 -.00434 -.00713 1.6408 131.986 -79.345)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".314" stop-color="#ff9800" />
            <stop offset=".662" stop-color="#ff6d00" />
            <stop offset=".972" stop-color="#f44336" />
          </radialGradient>
          <path
            fill="url(#notoFire0)"
            d="M35.56 40.73c-.57 6.08-.97 16.84 2.62 21.42c0 0-1.69-11.82 13.46-26.65c6.1-5.97 7.51-14.09 5.38-20.18c-1.21-3.45-3.42-6.3-5.34-8.29c-1.12-1.17-.26-3.1 1.37-3.03c9.86.44 25.84 3.18 32.63 20.22c2.98 7.48 3.2 15.21 1.78 23.07c-.9 5.02-4.1 16.18 3.2 17.55c5.21.98 7.73-3.16 8.86-6.14c.47-1.24 2.1-1.55 2.98-.56c8.8 10.01 9.55 21.8 7.73 31.95c-3.52 19.62-23.39 33.9-43.13 33.9c-24.66 0-44.29-14.11-49.38-39.65c-2.05-10.31-1.01-30.71 14.89-45.11c1.18-1.08 3.11-.12 2.95 1.5"
          />
          <radialGradient
            id="notoFire1"
            cx="64.921"
            cy="54.062"
            r="73.86"
            gradientTransform="matrix(-.0101 .9999 .7525 .0076 26.154 -11.267)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".214" stop-color="#fff176" />
            <stop offset=".328" stop-color="#fff27d" />
            <stop offset=".487" stop-color="#fff48f" />
            <stop offset=".672" stop-color="#fff7ad" />
            <stop offset=".793" stop-color="#fff9c4" />
            <stop offset=".822" stop-color="#fff8bd" stop-opacity="0.804" />
            <stop offset=".863" stop-color="#fff6ab" stop-opacity="0.529" />
            <stop offset=".91" stop-color="#fff38d" stop-opacity="0.209" />
            <stop offset=".941" stop-color="#fff176" stop-opacity="0" />
          </radialGradient>
          <path
            fill="url(#notoFire1)"
            d="M76.11 77.42c-9.09-11.7-5.02-25.05-2.79-30.37c.3-.7-.5-1.36-1.13-.93c-3.91 2.66-11.92 8.92-15.65 17.73c-5.05 11.91-4.69 17.74-1.7 24.86c1.8 4.29-.29 5.2-1.34 5.36c-1.02.16-1.96-.52-2.71-1.23a16.1 16.1 0 0 1-4.44-7.6c-.16-.62-.97-.79-1.34-.28c-2.8 3.87-4.25 10.08-4.32 14.47C40.47 113 51.68 124 65.24 124c17.09 0 29.54-18.9 19.72-34.7c-2.85-4.6-5.53-7.61-8.85-11.88"
          />
        </svg>
      </span>
      {{ frontmatter.title }}
    </div>

    <div class="post-info" style="display: flex; justify-content: space-between; align-items: center">
      <div style="display: flex; align-items: center">
        <i class="far fa-clock" style="margin-right: 0.25rem; color: var(--vp-c-brand-1)"></i>
        {{ formattedDate }} &nbsp;&nbsp;
        <span v-for="(tag, index) in frontmatter.tags" :key="tag">
          <i class="fat fa-hashtag" style="margin-right: 0.25rem; color: var(--vp-c-brand-1)"></i>
          <a :href="withBase(`/pages/tags.html?tag=${tag}`)">
            {{ tag }}<span v-if="index < frontmatter.tags.length - 1"></span>
          </a>
        </span>
      </div>

      <div class="post-authors" style="display: flex; align-items: center; margin-left: auto" v-if="authors.length">
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
                style="width: 1.2rem; height: 1.2rem; border-radius: 50%; margin-right: 0.25rem"
              />
              {{ authorName[author] || author }}
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue'
import { withBase, useRoute, useData } from 'vitepress'
import { convertDate, fetchGitHubUserNames } from '../types/functions'

const { frontmatter } = useData()
const route = useRoute()
const isPostsPath = computed(() => route.path.startsWith('/posts/'))

// 计算 formattedDate
const formattedDate = computed(() => convertDate(frontmatter.value.date))

// 定义作者名称的响应式对象
const authorName = ref<{ [key: string]: string }>({})

// 处理作者数据
const authors = computed(() => {
  const authorList = frontmatter.value.author
  return Array.isArray(authorList) ? authorList : authorList ? [authorList] : []
})

// 获取 GitHub 用户信息
onMounted(async () => {
  authorName.value = await fetchGitHubUserNames(authors.value)
})
</script>

<style lang="scss" scoped>
.post-title {
  font-size: 1.5rem;
  padding: 0 0 14px;
  font-weight: 900;
}
.info {
  border-bottom: 1px solid var(--vp-c-divider);
  padding: 0 0 14px;
  margin-bottom: 1rem;
}
</style>
