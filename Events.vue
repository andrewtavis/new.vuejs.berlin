<script setup lang="ts">
import useEvents from './useEvents'
const { pastEvents, futureEvents } = useEvents()
</script>

<template>
  <h1 id="past-events" tabindex="-1">Past Events</h1>
  <ol class="event-list">
    <li v-for="event in pastEvents.reverse()">
      <a :href="event.url">{{ event.frontmatter.title }}</a>
      <span>{{ event.frontmatter.date.split('T')[0] }}</span>
    </li>
  </ol>

  <h1 id="future-events" tabindex="-1">Future Events</h1>
  <ol class="event-list">
    <li v-for="event in futureEvents">
      <a :href="event.url">{{ event.frontmatter.title }}</a>
      <span>{{ event.frontmatter.date.split('T')[0] }}</span>
    </li>
  </ol>
</template>
