/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'My personal website',
  author: 'Chalvin Wiradhika',
  headerTitle: 'Chalvin Wiradhika',
  description: 'A website for me',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://chalvinwz.vercel.app',
  siteRepo: 'https://github.com/chalvinwz/blog',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'chalvinwz@gmail.com',
  github: 'https://github.com/chalvinwz',
  twitter: 'https://twitter.com/Twitter',
  linkedin: 'https://www.linkedin.com/in/chalvinwiradhika/',
  locale: 'en-US',
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
  },
}

module.exports = siteMetadata
