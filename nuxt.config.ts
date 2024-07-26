// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";

export default defineNuxtConfig({
    alias: {
        '@': path.resolve(__dirname),
        '~': path.resolve(__dirname)
    },

    $development: undefined,
    devtools: {enabled: true},

    typescript: {
        shim: false
    },

    modules: ["@nuxtjs/tailwindcss"],
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css',
        '@/assets/css/main.css'
    ]
})