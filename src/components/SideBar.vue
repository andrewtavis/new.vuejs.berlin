<template>
  <nav :style="{width: `${width}px`, left: `-${width}px`}">
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

<static-query>
query MenuItems {
  newsletters: allContentfulNewsletter (sortBy: "slug", order: DESC, limit: 3) {
    edges {
      node {
        title
      }
    }
  }
  events: allContentfulEvent (sortBy: "date", order: DESC, limit: 3) {
    edges {
      node {
        title
      }
    }
  }
}
</static-query>

<script>
import Logo from './Logo.vue'

export default {
  components: { Logo },
  props: {
    width: {
      type: Number,
      default: 260
    }
  },
  computed: {
    newsletters () {
      return this.$static.newsletters.edges.map(edge => edge.node)
    },
    events () {
      return this.$static.events.edges.map(edge => edge.node)
    }
  }
}
</script>

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
