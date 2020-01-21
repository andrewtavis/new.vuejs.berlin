<template>
  <newsletter-view>
    <rich-text-renderer :document="$page.post.details" />
  </newsletter-view>
</template>

<page-query>
query ContentfulNewsletter ($path: String!) {
  post: contentfulNewsletter (path: $path) {
    title
    path
    slug
    details
  }
}
</page-query>

<script>
import NewsletterView from '@/components/NewsletterView'
import RichTextRenderer from '@/lib/contentful-rich-text-vue-renderer'

export default {
  metaInfo () {
    return {
      title: `${this.$page.post.title} Newsletter`
    }
  },
  components: { NewsletterView, RichTextRenderer }
}
</script>
