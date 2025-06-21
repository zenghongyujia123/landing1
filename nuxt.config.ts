import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  nitro: {
    output: {
      dir: 'landpage1'
    }
  },
  app: {
    // 如果部署到GitHub Pages的子路径，取消下面一行的注释并修改为你的仓库名
    // baseURL: '/landing1/',
  },
=======
  app: {
    head: {
      title: 'Nuxt 3 Landing Page',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { key: 'description', name: 'description', content: 'A beautiful landing page built with Nuxt 3' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap' }
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
  imports: {
    autoImport: true
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || '/api'
    }
  },
  build: {
    transpile: ['radix-vue']
  }
})