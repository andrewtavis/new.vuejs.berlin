<template>
  <nav class="newsletter-navigation">
    <g-link :to="prev" v-if="prev">← {{ prev.title }}</g-link>
    <g-link to="/newsletters">overview</g-link>
    <g-link :to="next" v-if="next">{{ next.title }} →</g-link>
  </nav>
</template>

<static-query>
query AllNewslettersForNav {
  contentful: allContentfulNewsletter (sortBy: "slug", order: DESC) {
    edges {
      node {
        title
        slug
      }
    }
  }
  markdown: allMarkdownNewsletter (sortBy: "slug", order: DESC) {
    edges {
      node {
        title
        slug
        path
      }
    }
  }
}
</static-query>

<script>
export default {
  computed: {
    allNewsletters () {
      const newNewsletters = this.$static.contentful.edges.map(e => e.node)
      const oldNewsletters = this.$static.markdown.edges.map(e => e.node)

      return [...newNewsletters, ...oldNewsletters]
    },
    currentNewsletterIndex () {
      const title = this.$page.post.title
      return this.allNewsletters.findIndex(nl => nl.title === title)
    },
    prev () {
      return this.allNewsletters[this.currentNewsletterIndex + 1]
    },
    next () {
      return this.allNewsletters[this.currentNewsletterIndex - 1]
    }
  }
}
</script>
