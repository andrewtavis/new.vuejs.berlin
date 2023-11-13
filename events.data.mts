import { createContentLoader } from 'vitepress'
export default createContentLoader('events/*.md', {
  excerpt: true
})
