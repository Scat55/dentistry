// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/eslint', 'nuxt-svgo', '@nuxt/fonts'],
    devtools: { enabled: true },
    compatibilityDate: '2025-07-15',
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/style/style.scss";'
                }
            }
        }
    },
    svgo: {
        autoImportPath: './assets/icons/'
    },

    fonts: {
        families: [{ name: 'Montserrat', provider: 'google' }]
    }
});
