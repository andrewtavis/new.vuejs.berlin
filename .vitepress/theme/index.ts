// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import type { Theme } from 'vitepress'
import './assets/animations.css'
import './assets/main.css'

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme

