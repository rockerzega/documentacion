const { description } = require('../../package')

module.exports = {
  title: 'Documentación API-REST',
  description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Notificaciones',
        link: '/docs/'
      }
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'Autenticación',
          collapsable: false,
          path: '/docs/',
          children: [
            '/docs/Auth',
           
          ]
        },
        {
          title: 'Entidades',
          collapsable: false,
          path: '/docs/',
          children: [
            '/docs/Entidades',
          ]
        },
        {
          title: 'Proyectos',
          collapsable: false,
          path: '/docs/',
          children: [
            '/docs/proyectos',
          ]
        },

        {
          title: 'Notificaciones',
          collapsable: false,
          path: '/docs/',
          children: [
            '/docs/notificaciones',
          ]
        },

      ]
    },
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
}
