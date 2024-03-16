// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
  ],
  css: ["@/assets/css/global.css"],
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  plugins: ["@/plugins/v-click-outside.js"],
  app: {
    head: {
      title: "Bank of Nirma",
      meta: [
        {
          name: "description",
          content: "Secure Online Banking System",
        },
      ],
    },
  },
});
