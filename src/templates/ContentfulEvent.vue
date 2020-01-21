<template>
  <Layout :title="`Event: ${$page.post.title}`">
    <Event v-bind="$page.post" no-title expand-talks />
  </Layout>
</template>

<page-query>
query ContentfulEvent ($path: String!) {
  post: contentfulEvent (path: $path) {
    title
    path
    date
    address
    headerImage {
      title
      file {
        url
      }
    }
    details
    talks {
      title
      id
      details
      speakers {
        name
      }
    }
  }
}
</page-query>

<script>
import Event from '@/components/Event'

export default {
  metaInfo () {
    return {
      title: `${this.$page.post.title} Event`
    }
  },
  components: { Event }
}
</script>
