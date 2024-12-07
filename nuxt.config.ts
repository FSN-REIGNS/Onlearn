export default defineNuxtConfig({
  modules: [
    '@vueuse/motion/nuxt',
    '@nuxtjs/tailwindcss',
  ],

  css: [
    '~/assets/styles/main.css',
    '~/assets/styles/tailwind.css',
  ],

  postcss: {
    plugins: {
      'postcss-preset-env': {
        stage: 0, // Configures PostCSS to use modern CSS features
      },
      'tailwindcss': {},
      'autoprefixer': {},
    },
  },

  app: {
    baseURL: '/Onlearn/', // Replace with your repository name if deploying to GitHub Pages
    head: {
      title: 'Onlearn - Online Learning Platform',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  ssr: false,

  nitro: {
    preset: 'github-pages',
  },
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    }
  },
});