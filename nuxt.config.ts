// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/eslint', 'nuxt-svgo'],
	devtools: { enabled: true },
	compatibilityDate: '2025-07-15',
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/assets/style/index.scss";',
				},
			},
		},
	},
	svgo: {
		autoImportPath: './assets/icons/',
	},
});
