// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Vue.js // Berlin',
  siteUrl: 'https://vuejs.berlin',
  titleTemplate: '%s — Vuejs // Berlin',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: '088d87o1vm85', // required
        accessToken: 'ZH5BRpPqXkst5jLpFKcI3XOEajg-Lq_iuW9y3JcoiJQ', // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './src/markdown/newsletters/*.md',
        typeName: 'MarkdownNewsletter',
        route: '/archive/newsletter/:slug'
      }
    }
    /*
    {
      use: 'gridsome-plugin-feed',
      options: {
        contentTypes: ['BlogPost', 'NewsPost'],
        feedOptions: {
          title: 'Vue.js // Berlin Newsfeed',
          description: 'Updates from the Vue.js // Berlin community.',
          id: 'https://vuejs.berlin',
          link: 'https://vuejs.berlin',
          generator: 'https://vuejs.berlin',
          language: 'en',
          copyright: 'Public Domain, 2019, Norman Köhring',
          image: 'https://vuejs.berlin/favicon.png',
          favicon: 'https://vuejs.berlin/favicon.png'
        },
        rss: {
          enabled: true,
          output: '/feed.xml'
        },
        atom: {
          enabled: true,
          output: '/feed.atom'
        },
        json: {
          enabled: true,
          output: '/feed.json'
        }
      }
    }
    */
  ],
  templates: {
    ContentfulEvent: '/event/:title',
    ContentfulNewsletter: '/newsletter/:slug',
    MarkdownNewsletter: '/archive/newsletter/:slug'
  }
}
