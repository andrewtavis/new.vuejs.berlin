<template>
  <Layout :title="title">
    <rich-text-renderer :document="content" />
    <ol>
      <li v-for="event in events">
        <g-link :to="event.path">{{ event.title }}</g-link>
        <span style="float: right">
          ({{ dateFmt(event) }}, {{ event.talks.length }} talks)
        </span>
      </li>
    </ol>

    <h2>Older Events</h2>
    <p>
      You can find older events on the
      <a href="https://www.meetup.com/de-DE/Vue-js-Berlin/events/past/">Meetup Page</a>.
    </p>
  </Layout>
</template>

<page-query>
query Events {
  page: contentfulIndexPage (id: "3ZCL9VRLFc6c2sHen84RiN") {
    title
    content
  }
  events: allContentfulEvent {
    edges {
      node {
        title
        path
        date
        talks {
          id
        }
      }
    }
  }
}
</page-query>

<script>
import RichTextRenderer from '@/lib/contentful-rich-text-vue-renderer'
import { dateFmt } from '@/lib/date'

export default {
  metaInfo () {
    return {
      title: 'Events'
    }
  },
  components: { RichTextRenderer },
  computed: {
    title () {
      return this.$page.page.title
    },
    content () {
      return this.$page.page.content
    },
    events () {
      return this.$page.events.edges.map(edge => edge.node)
    }
  },
  methods: {
    dateFmt (event) {
      return dateFmt(event.date, 'YYYY-MM-DD HHh')
    }
  }
}
</script>

<style scoped>
ol {
  list-style-type: none;
  padding: 0;
}
li {
  line-height: 2em;
}
</style>
