import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vuejs//Berlin",
  description: "Berlins community around the Vue Framework and its ecosystem. We meet monthly  every second Tuesday. Doors open at 19:00, talks usually start around 19:30.",
  lang: 'en',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['script', { 'data-goatcounter': 'https://vuejs-berlin.goatcounter.com/count', async: '', src: '//gc.zgo.at/count.js' }]
  ],
})
