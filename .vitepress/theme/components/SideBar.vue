<script setup lang="ts">
import { computed } from 'vue'
import Logo from './Logo.vue'

export interface Props {
  width?: number
}

const props = defineProps<Props>()

const style = computed(() => {
  const width = props.width ?? 260
  return `width: ${width}px; left: -${width}px;`
})

const newsletters = computed(() => {
  return [{
    title: 'test 2022-01',
    path: '/newsletters/test01'
  }, {
    title: 'test 2022-02',
    path: '/newsletters/test02'
  }, {
  }]
})

const events = computed(() => {
  return [{
    title: 'test event 02',
    path: '/events/test02'
  }, {
    title: 'test event 03',
    path: '/events/test03'
  }, {
    title: 'test event 04',
    path: '/events/test04'
  }, {
  }]
})
</script>

<template>
  <nav :style="style">
    <router-link class="sidebar-home" to="/">
      back to start
    </router-link>
    <ol class="sidebar">
      <label>
        Newsletters
      </label>
      <li v-for="item in newsletters" :title="item.title">
        <router-link :to="item.path">{{ item.title }}</router-link>
      </li>
      <li>
        <router-link to="/newsletters">...all newsletters</router-link>
      </li>
    </ol>
    <ol class="sidebar">
      <label>
        Events
      </label>
      <li v-for="item in events" :title="item.title">
        <router-link :to="item.path">{{ item.title }}</router-link>
      </li>
      <li>
        <router-link to="/events">...all events</router-link>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: -260px;
  display: block;
  width: 260px;
  height: 100vh;
  background: white;
}
ol.sidebar {
  display: block;
  list-style-type: none;
  padding: 0 0 0 1em;
  line-height: 1.2em;
}
ol.sidebar > label {
  font-weight: bold;
  line-height: 2em;
}
ol.sidebar > label > a {
  color: #949494;
}
ol.sidebar > li {
  line-height: 1.5em;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-x: hidden;
  overflow-y: auto;
}
.sidebar-home {
  display: block;
  height: 4rem;
  padding: .5rem 1rem;
}
.sidebar-home > svg#logo {
  width: 3rem;
  height: 3rem;
}
</style>
