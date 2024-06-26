// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  alias: {
    '@components': './components',
    '@assets': './assets',
    '@stores': './stores',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
                @import "./assets/css/_mixins.scss";
              `,
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      midjourney_api_key: process.env.NUXT_APP_MIDJOURNEY_API_KEY,
      openai_api_key: process.env.NUXT_APP_OPENAI_API_KEY,
      api_url: process.env.NUXT_APP_API_URL,
    },
  },
  nitro: {
    prerender: {
      // crawlLinks: true,
      // failOnError: false,
    },
  },
})
