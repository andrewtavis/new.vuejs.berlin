<script setup lang="ts">
import { data as events } from './events.data'
import useSecondTuesday from './useSecondTuesday'

const secondTuesday = useSecondTuesday()
console.log('(next) second tuesday is', secondTuesday)

const nextEvent = events.find(event => {
  const eventDate = new Date(event.frontmatter.date)

  const sameYear = eventDate.getFullYear() === secondTuesday.getFullYear()
  const sameMonth = eventDate.getMonth() === secondTuesday.getMonth()
  const sameDay = eventDate.getDate() === secondTuesday.getDate()
  return sameYear && sameMonth && sameDay
})
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
      <a :href="nextEvent.url">Go to Event Page</a>
    </footer>
  </div>
  <div class="no-next-event" v-else>
    The upcoming event is not yet announced.
  </div>
</template>
