<script setup lang="ts">
import { data as events } from './events.data'
</script>

<template>
  <ol class="event-list">
    <li v-for="event in events.reverse()">
      <a :href="event.url">{{ event.frontmatter.title }}</a>
      <span>{{ event.frontmatter.date.split('T')[0] }}</span>
    </li>
  </ol>
</template>
