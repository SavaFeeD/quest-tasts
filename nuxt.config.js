require('dotenv').config();

export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'Quest Tasts',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  css: [
    '@/assets/scss/main.scss',
  ],
  plugins: [
    { src: '@plugins/main.js' },
    { src: '@plugins/axios.js' },
    { src: '@plugins/injectComponents.js' },
  ],
  components: true,
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/color-mode',
  ],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],
  styleResources: {
    scss: ['./assets/scss/resourses.scss'],
  },
  axios: {
    baseURL: process.env.BASE_URL,
  },
  build: {
  },
  env: {
    baseUrl: process.env.BASE_URL,
  },
}
