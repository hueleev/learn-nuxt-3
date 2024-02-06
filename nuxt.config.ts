// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-quasar-ui'],
  imports: {
    autoImport: true,
  },
  quasar: {
    /* */
  },
  typescript: {
    typeCheck: true,
  },
});
