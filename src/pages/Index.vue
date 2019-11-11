<template>
  <LandingPage>
    <h1>{{ page.title }}</h1>
    <rich-text-renderer :document="page.content", :nodeRenderers="{'embedded-entry-block': renderEvent}" />
  </LandingPage>
</template>

<page-query>
query IndexPage {
  contentfulIndexPage(id: "7chaXchzWho3INbTagjzqX") {
    title
    content
  }
}
</page-query>

<script>
import LandingPage from '@/layouts/LandingPage'
import RichTextRenderer from '@/lib/contentful-rich-text-vue-renderer'
import NestedEvent from '@/components/NestedEvent'

export default {
  metaInfo: {
    title: "Vue.js // Berlin"
  },
  components: { LandingPage, RichTextRenderer, NestedEvent },
  data () {
    return {
    }
  },
  computed: {
    page () {
      return this.$page.contentfulIndexPage
    }
  },
  methods: {
    renderEvent (node, key, h, next) {
      const props = node.data.target.fields
      return h('NestedEvent', {props, key}, next(node.content, key, h, next))
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
