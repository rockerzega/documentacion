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
        link: '/notificaciones/'
      }
    ],
    sidebar: {
      '/notificaciones/': [
        {
          title: 'Autenticación',
          collapsable: false,
          path: '/notificaciones',
          children: [
            'usuarios/post',
            'usuarios/get'
          ]
        },
        {
          title: 'Notificar',
          collapsable: false,
          path: '/notificaciones',
          children: [
            'notificaciones/get',
            'notificaciones/post',
            'notificaciones/put'
          ]
        },
        {
          title: 'Eliminar notificaciones',
          collapsable: false,
          path: '/notificaciones',
          children: [
            'eliminar/post',
          ]
        }
      ]
    },
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
}
