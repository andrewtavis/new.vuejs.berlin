<script setup lang="ts">
import useEvents from './useEvents'
const { nextEvent } = useEvents()
</script>

<template>
  <div class="next-event" v-if="nextEvent">
    <header>
      <a :href="nextEvent.url">{{ nextEvent.frontmatter.title }}</a>
      <span>{{ nextEvent.frontmatter.date.split('T')[0] }}</span>
    </header>
    <div class="hero" v-if="nextEvent.frontmatter.hero">
      <img :src="nextEvent.frontmatter.hero" :alt="nextEvent.frontmatter.hero_alt || `${nextEvent.frontmatter.title} hero image`" />
    </div>
    <div class="rendered-markdown" v-html="nextEvent.excerpt" />
    <footer>
      <a :href="nextEvent.frontmatter.luma_url || nextEvent.url">Go to Event Page</a>
    </footer>
  </div>
  <p class="no-next-event" v-else>
    The upcoming event is not yet announced but might already be listed in
    <a href="/events.html#future-events">Future Events</a>
  </p>
</template>
