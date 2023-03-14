// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "nuxt-headlessui"],

    headlessui: {
        prefix: "Headless",
    },

    runtimeConfig: {
        public: {
            apiBase: process.env.BASE_API_URL,
        },
    },
});
