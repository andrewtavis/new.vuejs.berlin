<template>
  <Layout :title="title">
    <rich-text-renderer :document="content" />
    <ol>
      <li v-for="newsletter in newsletters">
        <g-link :to="newsletter.path">{{ newsletter.title }}</g-link>:
        <template v-if="newsletter.event">
        {{ newsletter.event.title }}
        ({{ niceDate(newsletter.event.date) }},
        {{ newsletter.event.talks.length }} talks)
        </template>
        <template v-else>
        This newsletter is not associated with particular event.
        </template>
      </li>
    </ol>

    <h2>Archived Newsletters from the old homepage</h2>
    <p>
      Due to <span title="means: motivational problems">technical problems</span>,
      there was a gap of four months without any newsletters. Sorry for that.
      The April-2019 newsletter summarizes the former events.
    </p>
    <ol>
      <li v-for="newsletter in oldNewsletters">
        <g-link :to="newsletter.path">{{ newsletter.title }}</g-link>
        (~{{ newsletter.timeToRead }} minutes read)
      </li>
    </ol>
  </Layout>
</template>

<page-query>
query Newsletters {
  page: contentfulIndexPage (id: "6p9hv0dLjRDvDnvlunAbRH") {
    title
    content
  }
  newsletters: allContentfulNewsletter (sortBy: "slug", order: DESC) {
    edges {
      node {
        title
        path
        date
        event {
          title
          date
          talks {
            id
          }
        }
      }
    }
  }
  oldNewsletters: allMarkdownNewsletter (sortBy: "date", order: DESC) {
    edges {
      node {
        title
        path
        timeToRead
      }
    }
  }
}
</page-query>

<script>
import { dateFmt } from '@/lib/date'
import RichTextRenderer from '@/lib/contentful-rich-text-vue-renderer'

export default {
  metaInfo () {
    return {
      title: 'Newsletters'
    }
  },
  components: { RichTextRenderer },
  methods: {
    niceDate (date) {
      return dateFmt(date, 'YYYY-MM-DD')
    }
  },
  computed: {
    title () {
      return this.$page.page.title
    },
    content () {
      return this.$page.page.content
    },
    newsletters () {
      return this.$page.newsletters.edges.map(edge => edge.node)
    },
    oldNewsletters () {
      return this.$page.oldNewsletters.edges.map(edge => edge.node)
    }
  }
}
</script>

<style scoped>
ol {
  list-style-type: none;
  margin-bottom: 4em;
  padding: 0;
}
li {
  line-height: 2em;
}
</style>
