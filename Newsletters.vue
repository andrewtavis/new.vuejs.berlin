<script setup lang="ts">
import { data as newsletters } from './newsletters.data'
</script>

<template>
  <ol>
    <li v-for="newsletter of newsletters.reverse()">
      <a :href="newsletter.url">{{ newsletter.frontmatter.title }}</a>
      <span>{{ newsletter.frontmatter.date.split('T')[0] }}</span>
    </li>
  </ol>
</template>

<style scoped>
ol {
  list-style-type: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 2em;
}
</style>
